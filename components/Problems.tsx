"use client";

import { motion } from 'framer-motion';
import { Banknote, Users, ShieldCheck, Plug } from 'lucide-react';

const problems = [
    {
        icon: <Banknote className="w-10 h-10 text-primary" />,
        title: 'Too Expensive to Get Started',
        description: 'Start small with a fixed-price project. See results before investing more.'
    },
    {
        icon: <Users className="w-10 h-10 text-primary" />,
        title: "Don't Have AI Experts on Staff",
        description: 'We become your AI team. No need to hire expensive specialists.'
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: 'Worried About Data Security',
        description: 'Your data stays private and secure. We build systems you control.'
    },
    {
        icon: <Plug className="w-10 h-10 text-primary" />,
        title: "AI Won't Work with Our Tools",
        description: 'We specialize in connecting AI to your existing software.'
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Problems() {
    return (
        <section className="section bg-transparent relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="pill mb-4">THE PROBLEM</span>
                    <h2 className="heading-lg mb-4 mt-6">
                        Common Challenges We Solve
                    </h2>
                    <p className="body-lg max-w-2xl mx-auto">
                        Companies waste millions on AI that doesn't work. We solve the real barriers to adoption.
                    </p>
                </div>

                {/* Problem Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                >
                    {problems.map((problem, index) => (
                        <motion.div
                            variants={item}
                            key={index}
                            className="card group hover:border-primary/50 transition-colors duration-300"
                        >
                            <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                                {problem.icon}
                            </div>
                            <h3 className="heading-sm mb-3">
                                {problem.title}
                            </h3>
                            <p className="body-md text-muted-foreground">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
