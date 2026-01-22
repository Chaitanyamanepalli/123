"use client";


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What is an AI agent?",
        answer: "An AI agent is a smart software assistant that can handle tasks automatically—like responding to customer emails, scheduling meetings, or processing data. Think of it as a virtual team member that works 24/7 without breaks."
    },
    {
        question: "Do I need technical knowledge to work with CloudAGI?",
        answer: "No. We handle all the technical complexity. You just tell us what tasks take up your team's time, and we build and implement the solution. We also train your team on how to use the AI systems we create."
    },
    {
        question: "What makes AI agents different from traditional automation?",
        answer: "Traditional automation follows rigid rules and breaks when it encounters something unexpected. AI agents can understand context, handle variations, and make intelligent decisions. They adapt to new situations without needing to be reprogrammed for every edge case."
    },
    {
        question: "How long does implementation take?",
        answer: "Most projects are completed in 2-6 weeks. We start with a pilot to prove ROI before scaling. You'll see results within the first month."
    },
    {
        question: "What if my team doesn't adopt the AI tools?",
        answer: "We include hands-on training and ongoing support. Our goal is adoption, not just delivery—we don't succeed unless your team actually uses the system. We work closely with you to ensure smooth integration into your workflows."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We build AI systems that you own and control. Your data stays on your infrastructure or in secure, private environments. We never share your data with third parties or use it to train public models."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="section bg-transparent relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="pill mb-4">FAQ</span>
                    <h2 className="heading-lg mb-4 mt-6">
                        Frequently Asked Questions
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                    className="max-w-3xl mx-auto space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-secondary/20 border border-white/5 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-foreground pr-8">
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
