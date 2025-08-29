import { FileProgress } from "../../components/FileProgress"

const ProcessMergePdf = ({ progress }) => {
    return (
        <>
            <div className="mb-10 font-medium text-indigo-600 text-sm md:text-2xl text-center">
                Processing {progress?.completed + 1} of {progress?.totalFiles}
            </div>
            <FileProgress progress={progress} />
        </>
    )
}

export default ProcessMergePdf
