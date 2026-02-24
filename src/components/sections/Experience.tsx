import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export const Experience = () => {
    const jobs = [
        {
            company: "Beta Technologies",
            role: "IoT & Embedded Systems Intern",
            period: "Jan 2025 - Feb 2025",
            description:
                "Developed IoT-enabled applications integrating ESP8266, Arduino, GSM, and cloud platforms for real-time monitoring and automation, improving operational efficiency.",
            skills: ["ESP8266", "Arduino", "Firebase", "GSM", "IoT"],
        },
        {
            company: "Codsoft",
            role: "Web Development Intern",
            period: "Dec 2024 - Jan 2025",
            description:
                "Developed responsive web applications and implemented backend integrations while optimizing performance, accessibility, and UI responsiveness.",
            skills: ["HTML", "CSS", "JavaScript", "MongoDB", "PostgreSQL"],
        }
    ];

    return (
        <section id="experience" className="py-10 bg-terminal-black/50 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-terminal-green font-mono text-xl">02.</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
                            Experience
                        </h2>
                    </div>
                    <div className="h-1 w-20 bg-terminal-green/50 rounded-full" />
                </motion.div>

                <div className="space-y-12 relative border-l border-terminal-green/20 ml-3 md:ml-6 pl-8 md:pl-12">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="absolute -left-[41px] md:-left-[59px] top-0 bg-terminal-black border border-terminal-green/50 w-6 h-6 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-terminal-green/80 rounded-full" />
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-white max-w-md">
                                    {job.role} <span className="text-terminal-green">@ {job.company}</span>
                                </h3>
                                <span className="text-sm font-mono text-terminal-text/60 flex items-center gap-1">
                                    <Calendar size={14} />
                                    {job.period}
                                </span>
                            </div>

                            <p className="text-terminal-text/80 mb-4">{job.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-1 text-xs font-mono bg-white/5 text-terminal-text rounded border border-white/5 hover:border-terminal-green/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};