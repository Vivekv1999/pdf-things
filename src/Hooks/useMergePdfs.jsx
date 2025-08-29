import { PDFDocument } from "pdf-lib";
import { APP_NAME } from "../constants/appConstants";
import { useState } from "react";

export default function useMergePdfs() {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0); // 0 - 100
    const [result, setResult] = useState(null);

    const mergePdfs = async (pdfs) => {
        if (!pdfs || pdfs.length === 0) return null;

        setLoading(true);
        setProgress(0);
        setResult(null);

        const merged = await PDFDocument.create();

        for (let i = 0; i < pdfs.length; i++) {
            const pdf = pdfs[i];
            const srcDoc = await PDFDocument.load(pdf.bytes);
            const copied = await merged.copyPages(srcDoc, srcDoc.getPageIndices());
            copied.forEach((page) => merged.addPage(page));

            // update progress
            setProgress(Math.round(((i + 1) / pdfs.length) * 100));
        }

        const mergedBytes = await merged.save();
        const blob = new Blob([mergedBytes], { type: "application/pdf" });
        const objectUrl = URL.createObjectURL(blob);

        return {
            blob,
            url: objectUrl,
            download: () => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = `${APP_NAME}-merged.pdf`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                //with out this work well in chrome but issue in safari/firefox  //TODO
                setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
            },
        };
    };

    return { mergePdfs, loading, progress, result, setLoading };
}
