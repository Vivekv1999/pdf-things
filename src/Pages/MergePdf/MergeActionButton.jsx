import { PDFDocument } from "pdf-lib";
import React from "react";
import { APP_NAME } from "../../constants/appConstants";

export const MergeActionButton = ({ pdfs }) => {

    const mergePdfs = async () => {

        if (pdfs.length === 0) return;
        const merged = await PDFDocument.create();

        for (const pdf of pdfs) {
            const srcDoc = await PDFDocument.load(pdf.bytes);
            const copied = await merged.copyPages(srcDoc, srcDoc.getPageIndices());
            copied.forEach((page) => merged.addPage(page));
        }
        const mergedBytes = await merged.save();
        const blob = new Blob([mergedBytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${APP_NAME}-merged.pdf`;
        link.click();

        URL.revokeObjectURL(url);
    };

    return (
        <>
            <button
                onClick={mergePdfs}
                className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
            >
                Merge & Download
            </button>
        </>
    )
};
