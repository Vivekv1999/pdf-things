import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { arrayMove, rectSortingStrategy, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragAndDropInput from "../../Tools/DragAndDropInput/DragAndDropInput";
import ProcessMergePdf from "./ProcessMergePdf";

function SortableItem({ pdf, index, removePdf }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: pdf.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="group relative bg-white hover:bg-gray-50 shadow p-2 border rounded-xl min-w-[100px] transition-colors"
        >
            <button
                type="button"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                    e.stopPropagation();
                    removePdf(pdf.id);
                }}
                className="top-1.5 right-1.5 z-10 absolute bg-white/80 hover:bg-red-500 shadow-md p-1 rounded-full text-gray-600 hover:text-white transition-colors"
                title="Remove PDF"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="relative">
                {pdf.previews && (
                    <img
                        src={pdf?.previews?.[0]}
                        alt={`Preview ${index + 1}`}
                        className="mb-2 rounded w-full h-48 object-contain"
                    />
                )}
                <span className="top-1 left-[-4px] absolute bg-indigo-600 px-2 py-1 rounded font-semibold text-white text-xs">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>
            <p className="mb-1 text-gray-800 text-xs truncate">{pdf.file.name}</p>
            <p className="text-gray-500 text-xs">
                {pdf.pageCount} page{pdf.pageCount > 1 ? "s" : ""}
            </p>
        </div>
    );
}

export const MergePdfList = ({ pdfs, setPdfs, handleFiles, progress }) => {
    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = pdfs.findIndex((p) => p.id === active.id);
            const newIndex = pdfs.findIndex((p) => p.id === over.id);
            setPdfs(arrayMove(pdfs, oldIndex, newIndex));
        }
    };

    const removePdf = (id) => {
        setPdfs((prev) => prev.filter((pdf) => pdf.id !== id));
    };

    return (
        <>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                modifiers={[restrictToParentElement]}
            >
                <SortableContext items={pdfs.map((p) => p.id)} strategy={rectSortingStrategy}>
                    <div className="gap-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-6">
                        {pdfs.map((pdf, index) => (
                            <SortableItem
                                key={pdf.id}
                                pdf={pdf}
                                index={index}
                                removePdf={removePdf}
                            />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>


            <div className="my-10">
                {progress ?
                    <ProcessMergePdf progress={progress} />
                    :
                    <DragAndDropInput handleFileChange={handleFiles} />
                }
            </div>
        </>
    );
};
