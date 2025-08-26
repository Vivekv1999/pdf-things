import { PDFDocument } from "pdf-lib";
import React, { useEffect, useState } from "react";
import { APP_NAME } from "../../constants/appConstants";
import useMergePdfs from "../../Hooks/useMergePdfs";
import { Result } from "postcss";

export const MergeActionButton = ({
    pdfs,
    setPdfs
}) => {
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
            <div className="mt-28 flex flex-col sm:flex-row gap-3 justify-center">
                {/* Reset Button */}
                <button
                    onClick={() => setPdfs([])}
                    className="w-full sm:w-auto py-3 px-6 rounded-xl border border-red-300 text-red-600 font-medium hover:bg-red-100 transition-colors"
                >
                    Reset
                </button>

                {/* Merge Button */}
                <button
                    onClick={handleMergePdfs}
                    className="w-full sm:w-auto py-3 px-6 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
                >
                    Merge & Download
                </button>
            </div>
        </>
    )
};
