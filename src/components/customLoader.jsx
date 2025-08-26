import React from "react";
import { motion } from "framer-motion";

export const customLoader = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-10 my-5">
                <motion.div
                    className="w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
                <p className="mt-3 text-gray-600 font-medium">{"text"}</p>
            </div>
        </>
    )
}
