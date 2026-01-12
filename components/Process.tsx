import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Audit Your Needs',
        description: 'We analyze your current workflow and identify automation opportunities.',
        icon: '🔍'
    },
    {
        number: '02',
        title: 'Discover Agent Frameworks',
        description: 'Find the perfect tech stack - from LangChain to CrewAI to custom solutions.',
        icon: '🛠️'
    },
    {
        number: '03',
        title: 'Deploy & Iterate',
        description: 'Launch your AI agent and continuously improve based on real-world performance.',
        icon: '🚀'
    },
    {
        number: '04',
        title: 'Scale & Optimize',
        description: 'Expand your AI capabilities as your business grows and evolves.',
        icon: '📈'
    }
];

export default function Process() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        From Concept to Deployment
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Our battle-tested process turns your AI vision into reality in weeks, not months.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{step.icon}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-primary font-bold text-lg">{step.number}</span>
                                            <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
