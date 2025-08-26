import React from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import DragAndDropInput from "../../Tools/DragAndDropInput/DragAndDropInput";

export const MergePdfList = ({
    pdfs,
    setPdfs,
    handleFiles
}) => {

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const reordered = Array.from(pdfs);
        const [removed] = reordered.splice(result.source.index, 1);
        reordered.splice(result.destination.index, 0, removed);
        setPdfs(reordered);
    };

    const removePdf = (id) => {
        setPdfs((prev) => prev.filter((pdf) => pdf.id !== id));
    };

    return (
        <>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="pdf-list" direction="horizontal">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="grid grid-cols-1.5 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6"
                        >
                            {pdfs.map((pdf, index) => (
                                <Draggable key={pdf.id} draggableId={pdf.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="group border relative rounded-xl shadow p-2 bg-white hover:bg-gray-50 transition min-w-[100px]"
                                        >
                                            <button
                                                onClick={() => removePdf(pdf.id)}
                                                className="absolute top-1.5 right-1.5 p-1 bg-white/80 hover:bg-red-500 hover:text-white text-gray-600 rounded-full shadow-md transition-colors z-10"
                                                title="Remove PDF"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>

                                            <div className="relative">
                                                {pdf.previews && (
                                                    <img
                                                        src={pdf?.previews?.[0]}
                                                        alt={`Preview ${index + 1}`}
                                                        className="w-full h-48 object-contain rounded mb-2"
                                                    />
                                                )}
                                                <span className="absolute top-1 left-[-4px] bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-800 truncate mb-1">{pdf.file.name}</p>
                                            <p className="text-xs text-gray-500">{pdf.pageCount} page{pdf.pageCount > 1 ? "s" : ""}</p>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            <DragAndDropInput
                                handleFileChange={handleFiles}
                            />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
};
