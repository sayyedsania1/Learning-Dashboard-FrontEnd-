"use client";

import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800">
      <div className="flex justify-around py-4">
        <Home size={22} className="text-cyan-400" />

        <BookOpen size={22}  className="text-zinc-400" />
        <BarChart3 size={22} className="text-zinc-400" />
        <Settings size={22} className="text-zinc-400" />
      </div>
    </nav>
  );
}