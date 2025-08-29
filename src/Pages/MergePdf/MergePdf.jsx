import { useEffect, useState } from "react";
import useFileHandler from "../../Hooks/useFileHandler";
import PdfPageHeader from "../../Layout/PdfPageHeader/PdfPageHeader";
import DragAndDropInput from "../../Tools/DragAndDropInput/DragAndDropInput";
import { MergeActionButton } from "./MergeActionButton";
import { MergePdfList } from "./MergePdfList";
import ProcessMergePdf from "./ProcessMergePdf";


const MergePdf = () => {
    const [pdfs, setPdfs] = useState([])
    const [progress, setProgress] = useState(null);
    const [alredyMergePdf, setAlredyMergePdf] = useState(null)

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
                                <div className="mt-48">
                                    <ProcessMergePdf progress={progress} />
                                </div>
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
                        {!alredyMergePdf &&
                            <MergePdfList
                                pdfs={pdfs}
                                setPdfs={setPdfs}
                                handleFiles={handleFiles}
                                progress={progress}
                            />
                        }

                        <MergeActionButton
                            pdfs={pdfs}
                            setPdfs={setPdfs}
                            setProgress={setProgress}
                            alredyMergePdf={alredyMergePdf}
                            setAlredyMergePdf={setAlredyMergePdf}
                        />
                    </>
                )
            }

        </div>
    )
}

export default MergePdf
