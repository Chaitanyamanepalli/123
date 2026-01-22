"use client";

import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Team() {
    return (
        <section className="section bg-transparent relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="pill mb-4">TEAM</span>
                    <h2 className="heading-lg mb-4 mt-6">
                        Meet Your Strategic Partner
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="prose-card md:flex items-center gap-12 p-8 md:p-12 border border-white/5 bg-white/5 bg-opacity-5 rounded-3xl backdrop-blur-sm"
                    >
                        {/* Image/Avatar Placeholder */}
                        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mx-auto md:mx-0 mb-8 md:mb-0 relative">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center overflow-hidden">
                                <User className="w-24 h-24 text-muted-foreground/50" />
                            </div>
                            {/* You can replace the span above with an <Image /> when you have the asset */}
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="heading-md mb-2">Arya Teja Rudraraju</h3>
                            <p className="text-primary font-medium mb-6">Founder & AI Systems Architect</p>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">Business-First Approach</h4>
                                    <p className="body-sm">MBA + Technical expertise means AI solutions aligned with your bottom line.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">Production-Ready Systems</h4>
                                    <p className="body-sm">Not demos or prototypes—real systems that work reliably in production.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">Hands-On Builder</h4>
                                    <p className="body-sm">Python, FastAPI, LangChain, vector databases—I build what I design.</p>
                                </div>
                            </div>

                            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                                "I don't believe in AI magic. I believe in engineering discipline, measurable results, and systems that work on Monday morning."
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
