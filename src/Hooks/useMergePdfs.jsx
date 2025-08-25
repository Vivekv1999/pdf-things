import { PDFDocument } from "pdf-lib";
import { APP_NAME } from "../constants/appConstants";

export default function useMergePdfs() {
    const mergePdfs = async (pdfs) => {
        if (!pdfs || pdfs.length === 0) return null;

        const merged = await PDFDocument.create();

        for (const pdf of pdfs) {
            const srcDoc = await PDFDocument.load(pdf.bytes);
            const copied = await merged.copyPages(srcDoc, srcDoc.getPageIndices());
            copied.forEach((page) => merged.addPage(page));
        }

        const mergedBytes = await merged.save();
        const blob = new Blob([mergedBytes], { type: "application/pdf" });

        return {
            blob,
            url: URL.createObjectURL(blob),
            download: () => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = `${APP_NAME}-merged.pdf`;
                link.click();
                URL.revokeObjectURL(link.href);
            },
        };
    };

    return mergePdfs;
}
