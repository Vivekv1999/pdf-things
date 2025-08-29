import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingDownload = ({
    progress = 0,
    messages
}) => {
    const [index, setIndex] = useState(0);

    // Cycle messages
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-64 space-y-6">
            {/* Spinning loader */}
            <motion.div
                className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />

            {/* Progress bar */}
            <div className="w-64 bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                    className="h-3 bg-red-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                />
            </div>

            {/* Progress text + fun message */}
            <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-medium text-gray-700"
            >
                {messages[index]} ({progress}%)
            </motion.p>
        </div>
    );
};

export default LoadingDownload;
