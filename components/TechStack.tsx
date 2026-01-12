import React from 'react';
import Marquee from './ui/Marquee';


const techStack = [
    { name: 'OpenAI', category: 'AI Model' },
    { name: 'Anthropic', category: 'AI Model' },
    { name: 'LangChain', category: 'Framework' },
    { name: 'Pinecone', category: 'Vector DB' },
    { name: 'AWS Bedrock', category: 'Cloud AI' },
    { name: 'Vercel', category: 'Deployment' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Tailwind', category: 'Styling' },
    { name: 'TypeScript', category: 'Language' },
    // Duplicate for smooth infinite loop
    { name: 'OpenAI', category: 'AI Model' },
    { name: 'Anthropic', category: 'AI Model' },
    { name: 'LangChain', category: 'Framework' },
    { name: 'Pinecone', category: 'Vector DB' },
    { name: 'AWS Bedrock', category: 'Cloud AI' },
    { name: 'Vercel', category: 'Deployment' },
    { name: 'React', category: 'Frontend' },
];

export default function TechStack() {
    return (
        <section className="section-sm bg-transparent border-t border-border relative z-10 py-12">
            <div className="container mx-auto px-6 max-w-6xl">
                <p className="body-sm font-semibold text-muted-foreground text-center mb-8 uppercase tracking-wide">
                    Built With Modern Standards
                </p>

                {/* Tech Logos */}
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s] py-4">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="mx-4 flex items-center justify-center"
                            >
                                <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer select-none">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </Marquee>
                    {/* Gradient Masks */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
