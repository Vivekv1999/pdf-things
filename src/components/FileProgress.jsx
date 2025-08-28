import { motion as Motion } from "framer-motion";

export const FileProgress = ({ progress }) => {
    return (
        <div className="mx-auto w-full max-w-md">
            <div className="flex justify-between mb-1 text-gray-600 text-sm">
                <span>{progress?.fileName}</span>
                <span>{progress?.percent}%</span>
            </div>
            <div className="bg-gray-200 rounded-full w-full h-7 overflow-hidden">
                <Motion.div
                    className="bg-indigo-600 h-28"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress?.percent}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    )
};
