import { useEffect, useState } from "react";
import { FileProgress } from "../../components/FileProgress";
import useFileHandler from "../../Hooks/useFileHandler";
import PdfPageHeader from "../../Layout/PdfPageHeader/PdfPageHeader";
import DragAndDropInput from "../../Tools/DragAndDropInput/DragAndDropInput";
import { MergeActionButton } from "./MergeActionButton";
import { MergePdfList } from "./MergePdfList";


const MergePdf = () => {
    const [pdfs, setPdfs] = useState([])
    const [progress, setProgress] = useState(null);

    //when remove pdf form list 
    useEffect(() => {
        if (!pdfs.length) {
            setProgress(null)
        }
    }, [pdfs])

    const handleFiles = useFileHandler((files) => {
        setPdfs((prev) => [...prev, ...files])
    },
        (update) => setProgress(update)
    );

    return (
        <div className="mx-auto p-6 max-w-7xl">
            {pdfs.length === 0 ?
                (
                    <>
                        {progress ? (
                            <>
                                <div className="mt-48 mb-10 font-medium text-indigo-600 text-sm md:text-2xl text-center">
                                    Processing {progress.fileIndex + 1} of {progress.totalFiles}
                                </div>
                                <FileProgress progress={progress} />
                            </>
                        )
                            :
                            (
                                <>
                                    <PdfPageHeader
                                        title="Merge PDFs"
                                        description="Combine multiple PDFs into a single file."
                                    />
                                    <DragAndDropInput
                                        handleFileChange={handleFiles}
                                    />
                                </>
                            )
                        }

                    </>
                )
                : (
                    <>
                        <MergePdfList
                            pdfs={pdfs}
                            setPdfs={setPdfs}
                            handleFiles={handleFiles}
                        />

                        <MergeActionButton
                            pdfs={pdfs}
                            setPdfs={setPdfs}
                            setProgress={setProgress}
                        />
                    </>
                )
            }

        </div>
    )
}

export default MergePdf
