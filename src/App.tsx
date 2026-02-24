import { useState, useEffect, useRef } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <Hero />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "achievements":
        return <Achievements />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="h-full bg-terminal-black text-terminal-text selection:bg-terminal-green selection:text-terminal-black font-sans relative flex flex-col overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main ref={mainRef} className="flex-grow overflow-y-auto scroll-smooth">
        <div key={activeSection} className="animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-full pb-16 pt-16 flex flex-col">
          <div className="flex-grow">
            {renderContent()}
          </div>
          <footer className="bg-terminal-black border-t border-white/5 py-8 text-center text-sm text-terminal-text/40 font-mono mt-12">
            <p>&copy; {new Date().getFullYear()} Sanjay K</p>
          </footer>
        </div>
      </main>

      {/* Footer is now part of the scrollable content or fixed? Usually fixed or at bottom of scroll. 
          If fixed layout, footer might be better inside the scrollable area or fixed at bottom. 
          Let's put it inside the scrollable area for now so it doesn't take up fixed space.
      */}
    </div>
  );
}

export default App;
