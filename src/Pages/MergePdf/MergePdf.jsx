import { useState } from "react";
import useFileHandler from "../../Hooks/useFileHandler";
import PdfPageHeader from "../../Layout/PdfPageHeader/PdfPageHeader";
import DragAndDropInput from "../../Tools/DragAndDropInput/DragAndDropInput";
import { MergePdfList } from "./MergePdfList";
import { MergeActionButton } from "./MergeActionButton";

const MergePdf = () => {
    const [pdfs, setPdfs] = useState([])

    const handleFiles = useFileHandler((files) => {
        setPdfs((prev) => [...prev, ...files])
    });

    return (
        <div className="mx-auto p-6 max-w-6xl">
            <PdfPageHeader
                title="Merge PDFs"
                description="Combine multiple PDFs into a single file."
            />
            <DragAndDropInput
                handleFileChange={handleFiles}
            />
            {pdfs.length > 0 && (
                <>
                    <MergePdfList
                        pdfs={pdfs}
                        setPdfs={setPdfs}
                    />

                    <MergeActionButton
                        pdfs={pdfs}
                    />
                </>
            )}

        </div>
    )
}

export default MergePdf
