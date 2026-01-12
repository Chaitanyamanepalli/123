"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Expertise from '@/components/Expertise';
import TechStack from '@/components/TechStack';
import DotPattern from '@/components/ui/DotPattern';
import { cn } from '@/lib/utils';

export default function ExpertisePage() {
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
            <div className="relative z-10">
                <section className="relative pt-20 pb-12 overflow-hidden">
                    <div className="container-tight text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-lg mb-6"
                        >
                            Our Technical <span className="text-gradient">Expertise</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="body-lg text-muted-foreground"
                        >
                            We leverage the latest advancements in LLMs, vector databases, and agentic frameworks to build robust solutions.
                        </motion.p>
                    </div>
                </section>
                <Expertise />
                <TechStack />
            </div>
        </div>
    );
}
