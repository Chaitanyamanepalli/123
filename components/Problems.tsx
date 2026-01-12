import React from 'react';


const problems = [
    {
        icon: '🤖',
        title: 'Generic Chatbots',
        description: 'Off-the-shelf solutions that can\'t understand your business context or handle complex workflows.'
    },
    {
        icon: '💸',
        title: 'Zero ROI',
        description: 'Millions spent on AI projects that never make it past the demo phase or deliver measurable results.'
    },
    {
        icon: '🔒',
        title: 'Data Silos',
        description: 'Your valuable data trapped in disconnected systems, impossible for AI to access and utilize.'
    },
    {
        icon: '⛓️',
        title: 'Vendor Lock-in',
        description: 'Expensive platforms that trap you with proprietary tech and skyrocketing subscription costs.'
    }
];

export default function Problems() {
    return (
        <section className="section bg-transparent relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="pill mb-4">THE PROBLEM</span>
                    <h2 className="heading-lg mb-4 mt-6">
                        Why Most AI Projects Fail
                    </h2>
                    <p className="body-lg max-w-2xl mx-auto">
                        Companies waste millions on AI that doesn't work. Here's what's holding them back:
                    </p>
                </div>

                {/* Problem Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="card"
                        >
                            <div className="text-4xl mb-4">{problem.icon}</div>
                            <h3 className="heading-sm mb-3">
                                {problem.title}
                            </h3>
                            <p className="body-md">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
