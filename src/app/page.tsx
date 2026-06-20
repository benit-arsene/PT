import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/50" />
      </div>
      <About />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/50" />
      </div>
      <Skills />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/50" />
      </div>
      <Projects />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border/50" />
      </div>
      <Contact />

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Benit Arsene NSHUTIYIMANA. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Built with{" "}
            <span className="text-primary">Next.js</span> &{" "}
            <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </>
  );
}
