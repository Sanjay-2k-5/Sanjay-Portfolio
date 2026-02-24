import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Palette } from "lucide-react";
import { TechMarquee } from "../ui/TechMarquee";

export const Hero = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Aspiring SDE", "Cloud Enthusiast", "AWS Developer"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    return (
        <section
            id="home"
            className="min-h-full flex flex-col items-center justify-between bg-terminal-black relative overflow-hidden pt-10"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <div className="bg-terminal-dim/50 border border-terminal-green/20 rounded-lg p-6 backdrop-blur-sm shadow-lg shadow-terminal-green/5">
                    <div className="flex items-center gap-2 mb-4 border-b border-terminal-green/20 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
                        <span className="ml-2 text-xs text-terminal-text/50 font-mono">user@portfolio:</span>
                    </div>

                    <div className="space-y-4 font-mono">
                        <div className="flex items-center gap-2 text-terminal-green">
                            <span>$</span>
                            <span className="text-white">who-am-i</span>
                        </div>

                        <div className="pl-4 border-l-2 border-terminal-green/30">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                                Sanjay K.
                            </h1>
                            <div className="text-xl md:text-2xl text-terminal-green h-8 flex items-center">
                                <span>{text}</span>
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-3 h-6 bg-terminal-green ml-1"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-terminal-green pt-4">
                            <span>$</span>
                            <span className="text-white">skills --list</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 pl-4">
                            {[
                                { icon: Code, label: "Full Stack Development", color: "text-blue-400" },
                                { icon: Cpu, label: "Cloud & Databases", color: "text-purple-400" },
                                { icon: Globe, label: "DSA & System Design", color: "text-orange-400" },
                                { icon: Palette, label: "Editing & Designing", color: "text-pink-400" }
                            ].map((skill, index) => (
                                <motion.div
                                    key={skill.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                    className="flex items-center gap-2 text-terminal-text bg-white/5 p-2 rounded border border-white/5 hover:border-terminal-green/30 transition-colors"
                                >
                                    <skill.icon size={18} className={skill.color} />
                                    <span className="text-sm">{skill.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mt-auto">
                <TechMarquee />
            </div>
        </section >
    );
};
