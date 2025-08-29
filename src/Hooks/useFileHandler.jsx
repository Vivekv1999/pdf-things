import { PDFDocument } from "pdf-lib";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import pdfjsLib from "../lib/pdfWorker";

export default function useFileHandler(onLoad, onProgress) {
    const loadPdfMeta = async (file) => {
        const bytes = await file.arrayBuffer();
        const doc = await PDFDocument.load(bytes);
        const pageCount = doc.getPageCount();

        const previews = [await renderPdfPagePreview(file, 1)];

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

    const handleAllPdfAtOnce = async (fileList, totalFiles, completed) => {


        const promises = fileList.map((file, i) =>
            loadPdfMeta(file, i, totalFiles).then((meta) => {
                completed++;

                if (onProgress) {
                    onProgress({
                        fileName: file.name,
                        completed: completed,
                        totalFiles,
                        stage: "done",
                        percent: Math.round((completed / totalFiles) * 100),
                    });
                }

                return {
                    id: uuidv4(),
                    file,
                    ...meta,
                };
            })
        );

        const enriched = await Promise.all(promises);

        if (onLoad) onLoad(enriched);
    };

    return useCallback(
        async (e) => {
            const fileList = Array.from(e.target.files).filter(
                (f) => f.type === "application/pdf"
            );

            const totalFiles = fileList.length;
            let completed = 0;
            if (onProgress) {
                onProgress({
                    fileName: "loading...",
                    completed: 0,
                    totalFiles,
                    stage: "done",
                    percent: Math.round((completed / totalFiles) * 100),
                });
            }
            const start = performance.now();
            await handleAllPdfAtOnce(fileList, totalFiles, completed)
            //after all pdf preview make progress bar null
            onProgress(null)
            const end = performance.now();
            console.log(`Merging took ${(end - start).toFixed(2)} ms`);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onLoad]
    );
}

