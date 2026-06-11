"use client";

import { useEffect, useState } from "react";
import Topbar from "@/components/Topbar";
import MobileNav from "@/components/MobileNav";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*");

      if (!error) setCourses(data);
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white flex">
      <Sidebar />
      <section className="flex-1 p-6 pb-24 md:pb-6">
        <Topbar />
        <BentoGrid courses={courses} />
      </section>
      <MobileNav />
    </main>
  );
}