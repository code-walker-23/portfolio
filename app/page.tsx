import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
