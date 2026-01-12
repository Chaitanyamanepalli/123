import React from 'react';


const expertiseAreas = [
    {
        icon: '🤖',
        title: 'Custom AI Agent Development',
        description: 'Build intelligent agents that automate complex workflows, integrate with your systems, and make decisions based on your business logic.',
        whatWeDo: 'Design and develop custom AI agents tailored to your specific workflows',
        benefits: 'Reduce manual work by 80%, improve accuracy, scale without headcount'
    },
    {
        icon: '💻',
        title: 'POC & MVP Development',
        description: 'Rapid prototyping to validate your AI use case. We build functional MVPs that help you test hypotheses and secure buy-in.',
        whatWeDo: 'Build working proof-of-concept in 2-3 weeks to validate your use case',
        benefits: 'Fast validation, reduced risk, clear ROI demonstration'
    },
    {
        icon: '🎯',
        title: 'AI Tech Stack Consulting',
        description: 'Expert guidance on choosing the right models, frameworks, and architecture for your specific needs.',
        whatWeDo: 'Provide expert recommendations on models, frameworks, and architecture',
        benefits: 'Avoid costly mistakes, optimize for performance and cost'
    },
    {
        icon: '⚡',
        title: 'Prompt Engineering & Optimization',
        description: 'Fine-tune AI outputs and improve accuracy by creating bulletproof prompts and implementing consistency checks.',
        whatWeDo: 'Craft and optimize prompts to maximize AI performance and cost-efficiency',
        benefits: 'Improve output quality by 40%, reduce API costs significantly'
    }
];

export default function Expertise() {
    return (
        <section id="expertise" className="section bg-transparent relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="pill mb-4">OUR EXPERTISE</span>
                    <h2 className="heading-lg mb-4 mt-6">
                        From Concept to Deployment
                    </h2>
                    <p className="body-lg max-w-3xl mx-auto">
                        End-to-end AI engineering to turn your vision into deployable value
                    </p>
                </div>

                {/* Expertise Cards */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    {expertiseAreas.map((area, index) => (
                        <div
                            key={index}
                            className="card"
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4">
                                {area.icon}
                            </div>

                            {/* Content */}
                            <h3 className="heading-sm mb-3">
                                {area.title}
                            </h3>

                            <p className="body-md mb-6">
                                {area.description}
                            </p>

                            {/* What We Do & Benefits */}
                            <div className="space-y-3 pt-4 border-t border-border">
                                <div>
                                    <h4 className="body-sm font-semibold text-foreground mb-1">What We Do</h4>
                                    <p className="body-sm">{area.whatWeDo}</p>
                                </div>
                                <div>
                                    <h4 className="body-sm font-semibold text-foreground mb-1">Benefits</h4>
                                    <p className="body-sm">{area.benefits}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
