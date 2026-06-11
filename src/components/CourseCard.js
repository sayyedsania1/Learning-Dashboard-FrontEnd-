
"use client";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20, },
  show: { opacity: 1,  y: 0, },
};
export default function CourseCard({ course }) {
  const Icon =
    Icons[course.icon_name] || Icons.BookOpen;

  return (
    <motion.article  variants={item} whileHover={{   scale: 1.02 , y: -4, }} transition={{ type: "spring", stiffness: 300, damping: 20, }} className=" h-46 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-3 hover:border-cyan-500/40 hover:shadow-[0_0_125px_rgba(34,211,238,0.15)] transition-all duration-300 ">     
    <div className="flex items-center justify-between mb-3">
        <motion.div whileHover={{ rotate: 180,}} transition={{ duration: 0.3,}}>
  <Icon size={24} className="text-cyan-400" />
</motion.div>

        <span className="text-sm text-zinc-400">
          {course.progress}%
        </span>
      </div>

      <h3 className="text-white font-semibold mb-4">
        {course.title}
      </h3>

      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div className="h-full bg-cyan-500 rounded-full" initial={{ width: 0 }} animate={{   width: `${course.progress}%`, }} transition={{  duration: 1.2,  ease: "easeOut", }}/>
      </div>
    </motion.article>
  );
}