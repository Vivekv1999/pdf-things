import { PDFDocument } from "pdf-lib";
import { useCallback } from "react";
import pdfjsLib from "../lib/pdfWorker";
import { v4 as uuidv4 } from "uuid";

export default function useFileHandler(onLoad, pdfs) {

    const loadPdfMeta = async (file) => {
        const bytes = await file.arrayBuffer();
        const doc = await PDFDocument.load(bytes);
        const pageCount = doc.getPageCount();
        const previews = [
            await renderPdfPagePreview(file, 1) // only first page
        ];
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

    return useCallback(async (e) => {
        const fileList = Array.from(e.target.files);

        const pdfFiles = fileList.filter(f => f.type === "application/pdf");
        const enriched = await Promise.all(
            fileList.map(async (file) => {
                const meta = await loadPdfMeta(file);
                console.log({ meta }, "meta");

                return {
                    id: uuidv4(),
                    file,
                    ...meta,
                };
            })
        );
        if (onLoad) onLoad(enriched);
    }, [onLoad]);
}
