"use client";
import { motion } from "framer-motion";
export default function HeroTile({ courses }) {
    const totalCourses = courses.length;

    const avgProgress = Math.round(
        courses.reduce((acc, c) => acc + c.progress, 0) /
        totalCourses
    );
    return (
        <motion.article
            className=" lg:col-span-2  rounded-3xl  p-8 border  border-cyan-500/20  bg-gradient-to-br  from-cyan-500/10  via-zinc-900  to-cyan-500/10  shadow-[0_0_40px_rgba(34,211,238,0.15)]  ">
            <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-2xl font-bold">
                Welcome back 👋
            </motion.p>

            <h2 className="text-xl font-bold text-white mb-6">
                Keep Learning, Keep Growing!💪
            </h2>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <p className="text-2xl font-bold">{totalCourses}</p>
                    <p className="text-zinc-400 text-sm">
                        Courses
                    </p>
                </div>

                <div>
                    <p className="text-2xl font-bold">{avgProgress}%</p>
                    <p className="text-zinc-400 text-sm">
                        Progress
                    </p>
                </div>

                <div>
                    <p className="text-2xl font-bold">🔥15</p>
                    <p className="text-zinc-400 text-sm">
                        Day Streak
                    </p>
                </div>
            </div>
        </motion.article>
    );
}