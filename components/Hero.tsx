"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Ripple } from './ui/Ripple';
import { GridPattern } from './ui/GridPattern';

export default function Hero() {
    return (
        <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background isolate">
            <GridPattern
                width={50}
                height={50}
                x={-1}
                y={-1}
                className="opacity-20 stroke-gray-300/50 dark:stroke-white/10 animate-grid-flow -inset-10 h-[calc(100%+80px)] w-[calc(100%+80px)]"
            />
            <Ripple />

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-20">

                {/* Animated Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur-md shadow-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    AI THAT WORKS, NOT HYPE
                </motion.div>

                {/* Massive Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-black tracking-tight text-center leading-[1.1] mb-6 text-foreground"
                >
                    Build Custom<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-shimmer bg-[length:200%_100%] shadow-lg shadow-blue-500/10">
                        AI Agents.
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center mb-10 leading-relaxed font-light"
                >
                    Stop building wrappers. Start engineering intelligent orchestration layers that automate complex enterprise workflows with
                    <span className="font-semibold text-foreground mx-1">99.9% reliability.</span>
                </motion.p>

                {/* Premium Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Link href="/contact" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground px-8 font-medium transition-all duration-300 hover:w-56 hover:bg-primary/90 shadow-xl shadow-blue-500/20">
                        <span className="mr-2">Start Your Project</span>
                        <div className="absolute right-0 translate-x-[150%] opacity-0 transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-100">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </div>
                    </Link>

                    <Link href="/solutions" className="px-8 py-3 rounded-full border border-border text-muted-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-all shadow-sm">
                        View Case Studies
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
