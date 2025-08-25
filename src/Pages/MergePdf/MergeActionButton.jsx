import { PDFDocument } from "pdf-lib";
import React, { useEffect, useState } from "react";
import { APP_NAME } from "../../constants/appConstants";
import useMergePdfs from "../../Hooks/useMergePdfs";
import { Result } from "postcss";

export const MergeActionButton = ({ pdfs }) => {
    const [alredyMergePdf, setAlredyMergePdf] = useState(null)
    const mergePdfs = useMergePdfs();

    useEffect(() => {
        if (pdfs?.length && alredyMergePdf) {
            setAlredyMergePdf(null)
        }
    }, [pdfs])

    const handleMergePdfs = async () => {
        const start = performance.now();
        if (alredyMergePdf) {
            alredyMergePdf.download();
            console.log("ppppppppppppp", "result");
        }
        else {
            const result = await mergePdfs(pdfs);
            console.log(result, "result");
            setAlredyMergePdf(result)
            if (result) {
                result.download();
            }
        }
        const end = performance.now();
        console.log(`Merging took ${(end - start).toFixed(2)} ms`);
    };

    return (
        <>
            <button
                onClick={handleMergePdfs}
                className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
            >
                Merge & Download
            </button>
        </>
    )
};
