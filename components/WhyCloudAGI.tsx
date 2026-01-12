import React from 'react';


const principles = [
    {
        icon: '🎯',
        title: 'Radical Transparency',
        description: 'No black boxes. You will know exactly how your AI agents make decisions and integrate with your systems.'
    },
    {
        icon: '⚡',
        title: 'Speed to Value',
        description: 'We prioritize getting a working solution in your hands ASAP. Rapid iteration beats perfect planning.'
    },
    {
        icon: '🛡️',
        title: 'Security First',
        description: 'All solutions built with strictest data privacy standards. Your data never trains public models.'
    }
];

export default function WhyCloudAGI() {
    return (
        <section className="section bg-transparent relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="pill mb-4">WHY CLOUDAGI</span>
                    <h2 className="heading-lg mb-4 mt-6">
                        Outcomes Over Hype
                    </h2>
                    <p className="body-lg max-w-3xl mx-auto">
                        Our philosophy is built on delivering tangible results, not just impressive demos.
                    </p>
                </div>

                {/* Principles Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {principles.map((principle, index) => (
                        <div
                            key={index}
                            className="card text-center"
                        >
                            <div className="text-4xl mb-4">
                                {principle.icon}
                            </div>
                            <h3 className="heading-sm mb-3">
                                {principle.title}
                            </h3>
                            <p className="body-sm text-muted-foreground">
                                {principle.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
