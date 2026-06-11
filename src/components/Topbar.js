import { Search, Bell } from "lucide-react";
import { UserCircle2 } from "lucide-react";

export default function Topbar() {
    return (
        <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-xl w-80">
                <Search size={18} />
                <input placeholder="Search courses..." className="bg-transparent outline-none w-full" />
            </div>

            <div className="flex items-center gap-4">
                <Bell size={20} />

                <div className="flex items-center gap-3">
                    <UserCircle2 size={35} className="text-cyan-400" />
                    <div>
                        <p className="text-sm font-medium">
                            User
                        </p>
                        <p className="text-xs text-zinc-400">
                            Student
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}