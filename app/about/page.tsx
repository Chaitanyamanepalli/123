"use client";

import React from 'react';
import { motion } from 'framer-motion';
import DotPattern from '@/components/ui/DotPattern';
import { cn } from '@/lib/utils';


export default function AboutPage() {
    return (

        <div className="relative w-full min-h-screen force-light-theme bg-background text-foreground">
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-background">
                <DotPattern
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                    className={cn(
                        "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-70"
                    )}
                />
            </div>
            <section className="relative pt-32 pb-20 overflow-hidden z-10">
                <div className="container-tight text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-xs font-medium text-blue-600 backdrop-blur-sm"
                    >
                        ABOUT US
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-xl mb-6"
                    >
                        We Engineer <span className="text-gradient">Outcomes</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="body-lg text-muted-foreground"
                    >
                        CloudAGI was founded on a simple premise: AI is only as good as the problem it solves. We strip away the hype to focus on engineering robust, scalable AI agents that drive diverse business value.
                    </motion.p>
                </div>

                <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-100 rounded-2xl h-[400px] w-full animate-pulse" /> {/* Placeholder for team image */}
                    <div>
                        <h3 className="heading-md mb-4">Our Mission</h3>
                        <p className="body-md text-gray-600 mb-6">
                            To democratize access to advanced AI agency for businesses of all sizes, enabling them to compete in an automated future.
                        </p>
                        <h3 className="heading-md mb-4">Why We Are Different</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs mt-1">1</div>
                                <p className="body-md">We don&apos;t just wrap OpenAI wrappers. We build custom orchestration layers.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs mt-1">2</div>
                                <p className="body-md">We prioritize data privacy and security above all else.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs mt-1">3</div>
                                <p className="body-md">We act as long-term partners, not just transactional vendors.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
