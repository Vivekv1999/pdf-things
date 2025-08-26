import { PDFDocument } from "pdf-lib";
import { useCallback } from "react";
import pdfjsLib from "../lib/pdfWorker";
import { v4 as uuidv4 } from "uuid";

export default function useFileHandler(onLoad, onProgress) {
    const loadPdfMeta = async (file, fileIndex, totalFiles) => {
        const bytes = await file.arrayBuffer();
        const doc = await PDFDocument.load(bytes);
        const pageCount = doc.getPageCount();

        // Report progress after loading metadata
        if (onProgress) {
            onProgress({
                fileName: file.name,
                fileIndex,
                totalFiles,
                stage: "metadata",
                percent: Math.round(((fileIndex + 0.3) / totalFiles) * 100),
            });
        }

        const previews = [await renderPdfPagePreview(file, 1)];

        // Report progress after preview render
        if (onProgress) {
            onProgress({
                fileName: file.name,
                fileIndex,
                totalFiles,
                stage: "preview",
                percent: Math.round(((fileIndex + 1) / totalFiles) * 100),
            });
        }

        return { pageCount, bytes, previews };
    };

    const renderPdfPagePreview = async (file, pageNumber) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = async () => {
                try {
                    const typedarray = new Uint8Array(reader.result);
                    const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
                    const page = await pdf.getPage(pageNumber);
                    const viewport = page.getViewport({ scale: 1 });
                    const canvas = document.createElement("canvas");
                    const context = canvas.getContext("2d");
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    await page.render({ canvasContext: context, viewport }).promise;
                    resolve(canvas.toDataURL());
                } catch (error) {
                    console.error("Preview error:", error);
                    resolve(null);
                }
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    };

    return useCallback(
        async (e) => {
            const fileList = Array.from(e.target.files).filter(
                (f) => f.type === "application/pdf"
            );

            const totalFiles = fileList.length;
            const enriched = [];

            for (let i = 0; i < fileList.length; i++) {
                const file = fileList[i];
                const meta = await loadPdfMeta(file, i, totalFiles);
                enriched.push({ id: uuidv4(), file, ...meta });
            }

            if (onLoad) onLoad(enriched);
        },
        [onLoad]
    );
}

