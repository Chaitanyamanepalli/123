"use client";

import { motion } from 'framer-motion';
import { BrainCircuit, Bot, Rocket, CheckCircle2 } from 'lucide-react';

const approaches = [
    {
        icon: <BrainCircuit className="w-10 h-10 text-primary" />,
        title: 'Strategy & Audit',
        description: 'We analyze your workflows to identify where AI agents can drive the most impact, ensuring you solve the right problems first.',
        features: ['Workflow Analysis', 'Data Readiness Check', 'Impact Projection']
    },
    {
        icon: <Bot className="w-10 h-10 text-primary" />,
        title: 'Agent Development',
        description: 'We engineer custom AI agents tailored to your unique data and requirements. From intelligent assistants to autonomous process handlers.',
        features: ['Custom LLM Integration', 'Agentic Workflow Build', 'Secure Deployment']
    },
    {
        icon: <Rocket className="w-10 h-10 text-primary" />,
        title: 'Fractional AI Team',
        description: 'AI moves fast. We act as your dedicated R&D partner, continuously optimizing your agents and keeping your business ahead.',
        features: ['Continuous Optimization', 'Team Upskilling', 'Priority Support']
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
} as const;

export default function Expertise() {
    return (
        <section id="expertise" className="section bg-transparent relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="pill mb-4">HOW WE HELP</span>
                    <h2 className="heading-lg mb-4 mt-6">
                        How We Help Your Business
                    </h2>
                    <p className="body-lg max-w-3xl mx-auto">
                        We don't just build agents; we build valid business outcomes.
                    </p>
                </div>

                {/* Expertise Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
                >
                    {approaches.map((itemData, index) => (
                        <motion.div
                            variants={item}
                            key={index}
                            className="card flex flex-col h-full group hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-6 p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                                {itemData.icon}
                            </div>

                            {/* Content */}
                            <h3 className="heading-sm mb-4">
                                {itemData.title}
                            </h3>

                            <p className="body-md mb-8 flex-grow text-muted-foreground">
                                {itemData.description}
                            </p>

                            {/* Features List */}
                            <div className="space-y-3 pt-6 border-t border-border mt-auto">
                                {itemData.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
