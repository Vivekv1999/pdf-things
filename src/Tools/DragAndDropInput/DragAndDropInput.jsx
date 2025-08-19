import { useState } from "react";

const DragAndDropInput = ({ handleFileChange }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files).filter(
            (file) => file.type === "application/pdf"
        );
        if (files.length > 0) {
            const fakeEvent = { target: { files } };
            handleFileChange(fakeEvent);
        }
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("pdf-upload").click()}
            className={`flex items-center justify-center w-full h-32 px-4 transition border-2 border-dashed rounded-md cursor-pointer hover:border-indigo-500
                ${isDragging
                    ? "bg-indigo-50 border-indigo-500 scale-105 shadow-lg"
                    : "bg-white border-gray-300"
                }`}

        >
            <span className="text-gray-600">
                {isDragging ? "Drop your PDFs here 📄" : "Click or drop PDFs here to select"}
            </span>
            <input
                id="pdf-upload"
                type="file"
                multiple
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    )
}

export default DragAndDropInput
