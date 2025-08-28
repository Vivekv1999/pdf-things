import { useEffect, useState } from "react";
import useMergePdfs from "../../Hooks/useMergePdfs";

export const MergeActionButton = ({
    pdfs,
    setPdfs,
    setProgress
}) => {
    const [alredyMergePdf, setAlredyMergePdf] = useState(null)
    const mergePdfs = useMergePdfs();

    useEffect(() => {
        if (pdfs?.length && alredyMergePdf) {
            setAlredyMergePdf(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pdfs])

    const handleMergePdfs = async () => {
        const start = performance.now();
        if (alredyMergePdf) {
            alredyMergePdf.download();
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
            <div className="flex sm:flex-row flex-col justify-center gap-3 mt-28">
                {/* Reset Button */}
                <button
                    onClick={() => {
                        setPdfs([])
                        setProgress(null)
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }}

                    className="hover:bg-red-100 px-6 py-3 border border-red-300 rounded-xl w-full sm:w-auto font-medium text-red-600 transition-colors"
                >
                    Reset
                </button>

                {/* Merge Button */}
                <button
                    onClick={handleMergePdfs}
                    className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl w-full sm:w-auto font-semibold text-white transition-colors"
                >
                    Merge & Download
                </button>
            </div>
        </>
    )
};
