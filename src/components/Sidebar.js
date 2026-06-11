import { Home, BookOpen, BarChart3, Settings, UserCircle2 } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col w-64 bg-zinc-950 border-r border-zinc-800 p-6">
            <h1 className="text-2xl font-bold text-cyan-400 mb-10">
                LearnX
            </h1>

            <nav className="flex flex-col gap-3">
                <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 text-white">
                    <Home size={20} />
                    Dashboard
                </button>

                <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900">
                    <BookOpen size={20} />
                    Courses
                </button>

                <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900">
                    <BarChart3 size={20} />
                    Analytics
                </button>

                <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900">
                    <Settings size={20} />
                    Settings
                </button>
            </nav>

            <div className="mt-auto flex items-center gap-3 border-t border-zinc-800 pt-4">
                <UserCircle2 size={35} className="text-cyan-400" />

                <div>
                    <p className="text-sm font-medium text-white">
                        User
                    </p>

                    <p className="text-xs text-zinc-400">
                        Student
                    </p>
                </div>
            </div>
        </aside>
    );
}