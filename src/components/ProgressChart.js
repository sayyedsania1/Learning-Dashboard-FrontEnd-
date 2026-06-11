"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { day: "Mon", progress: 25 },
    { day: "Tue", progress: 40 },
    { day: "Wed", progress: 48 },
    { day: "Thu", progress: 55 },
    { day: "Fri", progress: 65 },
    { day: "Sat", progress: 75 },
    { day: "Sun", progress: 82 },
];

export default function ProgressChart() {
    return (
        <article className="lg:col-span-2 rounded-3xl bg-zinc-900 border border-zinc-800 p-6 h-80 hover:border-cyan-500/40 hover:shadow-[0_0_125px_rgba(34,211,238,0.15)] ">
            <h3 className="text-xl font-semibold mb-6">
                Learning Progress
            </h3>

            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                    <XAxis dataKey="day" stroke="#71717a" />
                    <YAxis stroke="#71717a" />
                    <Tooltip />

                    <Line type="monotone" dataKey="progress" stroke="#22d3ee" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </article>
    );
}