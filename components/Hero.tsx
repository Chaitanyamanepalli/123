"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Waves } from './ui/Waves';

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background isolate">
            <Waves
                lineColor="rgba(59, 130, 246, 0.3)"
                backgroundColor="transparent"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
                className="opacity-50"
            />

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-20 max-w-5xl mx-auto">

                {/* Animated Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 backdrop-blur-md"
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
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-center leading-[1.1] mb-8 text-foreground"
                >
                    We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-shimmer bg-[length:200%_100%]">AI Agents</span> <br />
                    & Provide Expert Consultation
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center mb-12 leading-relaxed font-light"
                >
                    Custom AI solutions that automate your repetitive work and let your team focus on growth.
                </motion.p>

                {/* Premium Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-6 mb-16"
                >
                    <Link href="/contact" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground px-8 font-medium transition-all duration-300 hover:w-56 hover:bg-primary/90 shadow-xl shadow-blue-500/20">
                        <span className="mr-2">Get Started</span>
                        <div className="absolute right-0 translate-x-[150%] opacity-0 transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-100">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </div>
                    </Link>

                    <Link href="/services" className="px-8 py-3 rounded-full border border-border text-muted-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-all shadow-sm">
                        See What We Build
                    </Link>
                </motion.div>

                {/* Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-border pt-8"
                >
                    <div className="flex flex-col items-center text-center">
                        <span className="text-3xl font-bold text-foreground mb-1">20+</span>
                        <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Hours Saved Per Week</span>
                        <p className="text-xs text-muted-foreground mt-1">Average time saved by our clients</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-3xl font-bold text-foreground mb-1">2-6</span>
                        <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Weeks to Deploy</span>
                        <p className="text-xs text-muted-foreground mt-1">From consultation to live</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-3xl font-bold text-foreground mb-1">100%</span>
                        <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Data Privacy</span>
                        <p className="text-xs text-muted-foreground mt-1">Your data stays under your control</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
