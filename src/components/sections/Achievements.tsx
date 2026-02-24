import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";

export const Achievements = () => {
    const achievements = [
        {
            title: "AWS Certified Developer - Associate",
            issuer: "Amazon Web Services",
            date: "2026",
            icon: Award,
            description: "Earned AWS Developer Associate certification with hands-on experience in building and deploying cloud applications."
        },
        {
            title: "MongoDB Certified Associate Developer",
            issuer: "MongoDB",
            date: "2025",
            icon: Trophy,
            description: "Validated expertise in developing and maintaining applications on MongoDB."
        },
        {
            title: "IEEE Publication & Accessibility AI Assistant",
            issuer: "IEEE",
            date: "2025",
            icon: Star,
            description:
                "Co-authored IEEE publication on an AI assistant improving accessibility for blind, deaf, and mute users, contributing to inclusive technology solutions."
        }
    ];

    return (
        <section id="achievements" className="py-10 bg-terminal-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-terminal-green font-mono text-xl">03.</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
                            Achievements
                        </h2>
                    </div>
                    <div className="h-1 w-20 bg-terminal-green/50 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-terminal-dim/30 border border-white/5 p-6 rounded-lg hover:border-terminal-green/40 transition-all hover:bg-white/5 flex flex-col items-center text-center group"
                        >
                            <div className="p-4 bg-terminal-green/10 rounded-full mb-4 group-hover:bg-terminal-green/20 transition-colors">
                                <item.icon size={32} className="text-terminal-green" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-terminal-green transition-colors">
                                {item.title}
                            </h3>
                            <div className="text-sm font-mono text-terminal-text/60 mb-3">
                                {item.issuer} • {item.date}
                            </div>
                            <p className="text-sm text-terminal-text/80">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
                    >
                        <Trophy className="text-terminal-green" size={24} />
                        <span className="text-terminal-text">Certifications</span>
                    </motion.h3>

                    <div className="flex flex-wrap gap-4">
                        {[
                            "AWS Certified Developer – Associate(DVA-C02)",
                            "MongoDB Certified Associate Developer (C100DEV)",
                            "Introduction to Industry 4.0 and Industrial Internet of Things – NPTEL",
                            "Data Structures and Algorithms using Java – NPTEL",
                            "Front End Development – HTML – Great Learning",
                            "Front End Development – CSS – Great Learning",
                            "MongoDB Certification – HCL GUVI",
                            "Python Programming – HackerRank",
                            "Problem Solving – HackerRank",
                            "Blockchain and its Applications – NPTEL"
                        ].map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="px-6 py-3 bg-terminal-dim/30 border border-white/5 rounded-full text-terminal-text/80 font-mono text-sm hover:border-terminal-green/50 hover:text-terminal-green hover:bg-terminal-green/5 transition-all cursor-default"
                            >
                                {cert}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
