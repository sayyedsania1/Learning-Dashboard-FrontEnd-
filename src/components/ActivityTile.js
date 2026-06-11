"use client";
import { motion } from "framer-motion";
export default function ActivityTile() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.1 }} whileHover={{ scale: 1.01, zIndex: 50, }} className="lg:col-span-2 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 hover:border-cyan-500/40 hover:shadow-[0_0_125px_rgba(34,211,238,0.15)] ">
            <h3 className="text-xl font-semibold text-white mb-4">
                Learning Activity
            </h3>
            <div className="grid grid-cols-7 gap-2 mb-3">
                {days.map((day) => (
                    <div key={day} className="text-center text-xs text-zinc-500" >
                        {day} </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, index) => (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.02 }}
                        key={index}
                        className={`h-6 rounded-md ${index % 3 === 0 ? "bg-cyan-500/80" : index % 2 === 0 ? "bg-cyan-500/50" : "bg-zinc-800"}`}
                    />
                ))}
            </div>
        </motion.article>
    );
}