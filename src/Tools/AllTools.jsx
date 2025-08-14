import { Crop, FileMinus2, FilePlus2, FileStack, Scissors } from "lucide-react";
import { lazy } from "react";

export const allTools = [
    {
        path: "/merge",
        name: "Merge PDF",
        description: "Combine multiple PDFs into one file in seconds.",
        color: "bg-indigo-600",
        icon: FileStack,
        component: lazy(() => import("../Pages/MergePdf/MergePdf")),
    },
    {
        path: "/split",
        name: "Split PDF",
        description: "Extract or split pages into separate PDFs.",
        color: "bg-emerald-600",
        icon: Scissors,
        // component: lazy(() => import("./Page/SplitPdf/SplitPdf")),
    },
    {
        path: "/crop",
        name: "Crop PDF",
        description: "Trim margins manually or automatically.",
        color: "bg-fuchsia-600",
        icon: Crop,
        // component: lazy(() => import("./Page/CropPdf/ManualCropPdf")),
    },
    {
        path: "/remove-pages",
        name: "Remove Pages",
        description: "Delete unwanted pages from your PDF.",
        color: "bg-rose-600",
        icon: FileMinus2,
        // component: lazy(() => import("./Page/RemovePagePdf/RemovePagePdf")),
    },
    {
        path: "/compress",
        name: "Compress PDF",
        description: "Reduce file size without quality loss.",
        color: "bg-cyan-600",
        icon: FileMinus2,
        // component: lazy(() => import("./Page/RemovePagePdf/RemovePagePdf")),
    },
    {
        path: "/merge-crop",
        name: "Merge & Crop",
        description: "Smart workflow that merges then auto‑crops PDFs.",
        color: "bg-purple-600",
        icon: FilePlus2,
        // component: lazy(() => import("./Page/MergeAndCrop/MergeAndCrop")),
    },
];