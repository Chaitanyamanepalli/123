"use client";

import React from 'react';
import { motion } from 'framer-motion';
import DotPattern from '@/components/ui/DotPattern';
import { cn } from '@/lib/utils';


export default function ContactPage() {
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
            <section className="relative pt-32 pb-20 overflow-hidden z-10 w-full">
                <div className="container-tight text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="heading-lg mb-6"
                    >
                        Start Your <span className="text-gradient">Transformation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="body-lg text-muted-foreground"
                    >
                        Ready to build? Schedule a free discovery call to discuss your use case.
                    </motion.p>
                </div>

                <div className="container-tight">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                    <input id="name" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <input id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</label>
                                <input id="company" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Acme Inc." />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">How can we help?</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..." />
                            </div>
                            <button type="submit" className="w-full btn btn-default btn-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
