import { useState } from "react";
import { Menu, X, Terminal, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "Projects", id: "projects" },
        { name: "Experience", id: "experience" },
        { name: "Achievements", id: "achievements" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <nav
            className="fixed top-0 w-full z-50 transition-all duration-300 bg-terminal-black/80 backdrop-blur-md border-b border-white/10 shadow-sm shadow-terminal-green/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <button
                            onClick={() => setActiveSection("home")}
                            className="flex items-center gap-2 font-mono text-xl font-bold text-terminal-green hover:opacity-80 transition-opacity"
                        >
                            <Terminal size={24} />
                            <span className="hidden sm:inline">Sanjay K.</span>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => setActiveSection(link.id)}
                                    className={`font-mono text-sm transition-colors duration-300 relative group ${activeSection === link.id
                                        ? "text-terminal-green"
                                        : "text-terminal-text hover:text-terminal-green"
                                        }`}
                                >
                                    <span className="text-terminal-green mr-1">$</span>
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-terminal-green transition-all ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                                        }`}></span>
                                </button>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 px-4 py-2 text-sm font-mono text-terminal-black bg-terminal-green hover:bg-terminal-green/90 rounded transition-colors flex items-center gap-2"
                            >
                                <FileText size={16} />
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-terminal-text hover:text-terminal-green transition-colors p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-terminal-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        setActiveSection(link.id);
                                        setIsOpen(false);
                                    }}
                                    className={`block w-full text-left px-3 py-2 text-base font-mono hover:bg-white/5 rounded-md transition-colors ${activeSection === link.id
                                        ? "text-terminal-green bg-white/5"
                                        : "text-terminal-text hover:text-terminal-green"
                                        }`}
                                >
                                    <span className="text-terminal-green mr-2">&gt;</span>
                                    {link.name}
                                </button>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-left px-3 py-2 text-base font-mono text-terminal-text hover:text-terminal-green hover:bg-white/5 rounded-md transition-colors"
                            >
                                <span className="text-terminal-green mr-2">&gt;</span>
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
