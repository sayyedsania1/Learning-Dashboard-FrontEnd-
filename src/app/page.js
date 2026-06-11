import Topbar from "@/components/Topbar";
import MobileNav from "@/components/MobileNav";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import BentoGrid from "@/components/BentoGrid";

export default async function Home() {
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
        
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Failed to load courses
      </main>
    );
  }

  return (
    
    <main className="min-h-screen bg-[#050505] text-white flex">
      <Sidebar />

      <section className="flex-1 p-6 pb-24 md:pb-6">
        <Topbar/>
        <BentoGrid courses={data} />
      </section>
      <MobileNav />
    </main>
  );
}