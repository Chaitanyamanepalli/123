"use client";

import React from 'react';
import Link from 'next/link';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section id="contact" className="section bg-transparent scroll-mt-20 relative z-10 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <BackgroundBeams className="opacity-40" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="heading-lg mb-6">
                        Ready to Save Time?
                    </h2>
                    <p className="body-lg mb-10 max-w-2xl mx-auto">
                        Strategic AI consultancy turning complex technology into measurable business results.
                        Let's build your competitive advantage.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary w-full sm:w-auto">
                            Book a Discovery Call
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </Link>
                        <Link href="/services" className="btn btn-secondary w-full sm:w-auto">
                            View Services
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
