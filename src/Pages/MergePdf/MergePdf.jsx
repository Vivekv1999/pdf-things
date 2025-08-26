import { useState } from "react";
import useFileHandler from "../../Hooks/useFileHandler";
import PdfPageHeader from "../../Layout/PdfPageHeader/PdfPageHeader";
import DragAndDropInput from "../../Tools/DragAndDropInput/DragAndDropInput";
import { MergePdfList } from "./MergePdfList";
import { MergeActionButton } from "./MergeActionButton";
import { FileProgress } from "../../components/FileProgress";

const MergePdf = () => {
    const [pdfs, setPdfs] = useState([])
    const [progress, setProgress] = useState(null);

    const handleFiles = useFileHandler((files) => {
        setPdfs((prev) => [...prev, ...files])
    },
        (update) => setProgress(update)
    );

    return (
        <div className="mx-auto p-6 max-w-6xl">
            {pdfs.length === 0 ?
                (
                    <>
                        {progress ?
                            <FileProgress progress={progress} />
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
                        />
                    </>
                )
            }

        </div>
    )
}

export default MergePdf
