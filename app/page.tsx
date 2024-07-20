import Books from "@/components/Books";
import Contact from "@/components/Contact";
import Experiance from "@/components/Experiance";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Techstack from "@/components/Techstack";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import MagicButton from "@/components/ui/MagicButton";
import { navItems } from "@/data";
import Link from "next/link";
import { BiFastForwardCircle } from "react-icons/bi";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Techstack />
        <Experiance />
        <Books />
        <div className="my-10 z-10 flex justify-center">
          <Link href="/casual">
            <MagicButton
              title="Go to Casual Life"
              icon={<BiFastForwardCircle size={20}/>}
              position="right"
              otherClasses="text-2xl"
            />
          </Link>
        </div>
        <Contact/>
      </div>
    </main>
  );
}
