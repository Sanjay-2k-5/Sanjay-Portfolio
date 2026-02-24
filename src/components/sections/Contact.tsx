import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github, FileText, Code, MessageCircle } from "lucide-react";

export const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("user_name");
        const email = formData.get("user_email");
        const message = formData.get("message");

        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        window.location.href = `mailto:Sanjayofficial2k5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        e.currentTarget.reset();
    };

    return (
        <section id="contact" className="py-10 bg-terminal-black relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-terminal-green/10 px-4 py-1 rounded-full text-terminal-green font-mono text-sm mb-4">
                        $ sudo contact --force
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-terminal-text/80 max-w-xl mx-auto">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-terminal-dim/30 border border-white/5 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="text-terminal-green">$</span> Contact Info
                            </h3>
                            <div className="space-y-4">
                                <a href="mailto:Sanjayofficial2k5@gmail.com" className="flex items-center gap-4 text-terminal-text hover:text-terminal-green transition-colors group">
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-terminal-green/10 transition-colors">
                                        <Mail className="w-5 h-5 text-terminal-green" />
                                    </div>
                                    <span>Sanjayofficial2k5@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-4 text-terminal-text group">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        <MapPin className="w-5 h-5 text-terminal-green" />
                                    </div>
                                    <span>Tiruppur, Tamil Nadu, India</span>
                                </div>

                                <a
                                    href="/resume.pdf"
                                    download="resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-terminal-text hover:text-terminal-green transition-colors group pt-4 border-t border-white/5"
                                >
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-terminal-green/10 transition-colors">
                                        <FileText className="w-5 h-5 text-terminal-green" />
                                    </div>
                                    <span>Download Resume</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-terminal-dim/30 border border-white/5 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="text-terminal-green">$</span> Socials
                            </h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/Sanjay-2k-5" className="p-3 bg-white/5 rounded-lg text-terminal-text hover:bg-terminal-green/10 hover:text-terminal-green transition-all hover:-translate-y-1">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/sanjay-k-ba2a28295" className="p-3 bg-white/5 rounded-lg text-terminal-text hover:bg-terminal-green/10 hover:text-terminal-green transition-all hover:-translate-y-1">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://leetcode.com/u/Sanjay_2k5/" className="p-3 bg-white/5 rounded-lg text-terminal-text hover:bg-terminal-green/10 hover:text-terminal-green transition-all hover:-translate-y-1">
                                    <Code className="w-5 h-5" />
                                </a>
                                <a href="https://www.reddit.com/user/Consistent-Drag7455/" className="p-3 bg-white/5 rounded-lg text-terminal-text hover:bg-terminal-green/10 hover:text-terminal-green transition-all hover:-translate-y-1">
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-terminal-dim/30 border border-white/5 p-8 rounded-lg space-y-6">
                            <div>
                                <label className="block text-sm font-mono text-terminal-text/80 mb-2">
                                    <span className="text-terminal-green mr-2">&gt;</span>Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50 transition-all font-mono"
                                    placeholder="[YOUR_NAME]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-mono text-terminal-text/80 mb-2">
                                    <span className="text-terminal-green mr-2">&gt;</span>Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50 transition-all font-mono"
                                    placeholder="[EMAIL_ADDRESS]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-mono text-terminal-text/80 mb-2">
                                    <span className="text-terminal-green mr-2">&gt;</span>Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50 transition-all font-mono resize-none"
                                    placeholder="Hello world..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-terminal-green/10 hover:bg-terminal-green/20 text-terminal-green border border-terminal-green/50 font-mono py-3 px-6 rounded transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <span>Send Message</span>
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
