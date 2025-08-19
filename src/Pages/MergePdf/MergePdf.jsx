import useFileHandler from "../../Hooks/useFileHandler";
import PdfPageHeader from "../../Layout/PdfPageHeader/PdfPageHeader";
import DragAndDropInput from "../../Tools/DragAndDropInput/DragAndDropInput";

const MergePdf = () => {
    const handleFiles = useFileHandler((files) => {
        console.log("Merging these files:", files);
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

        </div>
    )
}

export default MergePdf
