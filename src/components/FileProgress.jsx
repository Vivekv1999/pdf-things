import React from "react";
import { motion } from "framer-motion";

export const FileProgress = ({ progress }) => {
    return (
        <div className="w-full max-w-md mx-auto mt-52">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{progress?.fileName}</span>
                <span>{progress?.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-7 overflow-hidden">
                <motion.div
                    className="bg-indigo-600 h-28"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress?.percent}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    )
};
