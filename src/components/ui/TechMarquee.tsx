import { technologies } from "../../data/technologies";

export const TechMarquee = () => {
    return (
        <div className="mt-8">
            <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terminal-dim/50 border border-terminal-green/20 backdrop-blur-sm">
                    <span className="text-terminal-green text-xl">$</span>
                    <span className="text-white font-mono text-xl tracking-wider">known-technologies</span>
                </div>
            </div>

            <div className="w-full overflow-hidden py-4 border-y border-terminal-green/10 bg-terminal-dim/30 backdrop-blur-sm">
                <div className="flex w-max animate-scroll-left group hover:[animation-play-state:paused]">
                    {/* First Copy */}
                    <div className="flex shrink-0 items-center gap-8 pr-8">
                        {technologies.map((tech, index) => (
                            <div
                                key={`${tech.name}-${index}`}
                                className="flex items-center gap-4 group/item cursor-pointer"
                            >
                                <tech.icon className={`text-2xl ${tech.color} opacity-80 group-hover/item:opacity-100 transition-opacity`} />
                                <span className="text-terminal-text/60 font-mono text-sm whitespace-nowrap group-hover/item:text-terminal-green transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Second Copy for Loop */}
                    <div className="flex shrink-0 items-center gap-8 pr-8">
                        {technologies.map((tech, index) => (
                            <div
                                key={`${tech.name}-duplicate-${index}`}
                                className="flex items-center gap-4 group/item cursor-pointer"
                            >
                                <tech.icon className={`text-2xl ${tech.color} opacity-80 group-hover/item:opacity-100 transition-opacity`} />
                                <span className="text-terminal-text/60 font-mono text-sm whitespace-nowrap group-hover/item:text-terminal-green transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
