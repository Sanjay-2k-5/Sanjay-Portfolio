import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "FarmToHome – Agri-Commerce Marketplace",
        description: "A scalable MERN-based multi-vendor platform connecting farmers directly with consumers for efficient agricultural commerce.",
        tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
        links: { demo: "https://github.com/Sanjay-2k-5/FarmToHome", code: "https://github.com/Sanjay-2k-5/FarmToHome" },
        achievements: [
            "Improved API performance by 40% using optimized MongoDB indexing",
            "Implemented secure RBAC for Admin, Farmer, Consumer, and Delivery roles",
            "Built analytics and inventory modules supporting 500+ SKUs with responsive UI"
        ]
    },
    {
        title: "CollegeLMS – Learning Management System",
        description: "A scalable LMS platform supporting structured course delivery and progress tracking across multiple departments.",
        tags: ["MongoDB", "Express.js", "React", "Node.js", "Zustand"],
        links: { demo: "https://github.com/Preethi3S/collegeLMS", code: "https://github.com/Preethi3S/collegeLMS" },
        achievements: [
            "Supported 500+ students with course and progress management",
            "Reduced build time by 40% using Vite migration",
            "Automated bulk enrollment reducing admin workload by 90%"
        ]
    },
    {
        title: "Smart IoT Monitoring & Alert System",
        description: "IoT-enabled real-time monitoring solution integrating ESP8266 sensors with cloud dashboards and GSM alerts.",
        tags: ["Arduino", "ESP8266", "Firebase", "FireStore", "GSM", "IoT"],
        links: { demo: "#", code: "#" },
        achievements: [
            "Enabled real-time sensor data visualization and alerts",
            "Reduced manual monitoring effort by 40%",
            "Implemented automation and reliable real-time control workflows"
        ]
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-10 bg-terminal-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-terminal-green font-mono text-xl">01.</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
                            Projects
                        </h2>
                    </div>
                    <div className="h-1 w-20 bg-terminal-green/50 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-terminal-dim/30 border border-white/5 rounded-lg overflow-hidden hover:border-terminal-green/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-terminal-green/5"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-terminal-green/10 p-2 rounded-full">
                                        <ArrowUpRight className="text-terminal-green" size={20} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.links.code} className="text-terminal-text hover:text-white transition-colors">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.links.demo} className="text-terminal-text hover:text-white transition-colors">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-terminal-green transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-terminal-text/80 text-sm mb-4 flex-grow">
                                    {project.description}
                                </p>

                                <div className="mb-4 space-y-2">
                                    <h4 className="text-xs font-mono text-terminal-green uppercase tracking-wider">Key Achievements</h4>
                                    <ul className="text-xs text-terminal-text/70 space-y-1 list-disc pl-4">
                                        {project.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-mono bg-white/5 text-terminal-text rounded hover:bg-terminal-green/10 hover:text-terminal-green transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
