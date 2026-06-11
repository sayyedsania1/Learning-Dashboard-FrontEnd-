"use client";

import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function MotionWrapper({ children }) {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="contents"   >
            {children}
        </motion.div>
    );
}