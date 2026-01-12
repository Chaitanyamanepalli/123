import React from 'react';



const steps = [
    {
        number: '01',
        title: 'Audit & Discover',
        description: 'We analyze your current workflow friction points and identify high-ROI automation opportunities.',
        icon: '🔍',
        color: 'bg-blue-50 text-blue-600'
    },
    {
        number: '02',
        title: 'Architect & Design',
        description: 'We map out the agent behaviors, decision trees, and integration points with your existing stack.',
        icon: '✏️',
        color: 'bg-purple-50 text-purple-600'
    },
    {
        number: '03',
        title: 'Develop & Train',
        description: 'We build the custom agents, fine-tune the models, and rigorously test safe-guards.',
        icon: '⚡',
        color: 'bg-pink-50 text-pink-600'
    },
    {
        number: '04',
        title: 'Deploy & Scale',
        description: 'Seamless deployment to your infrastructure with monitoring and continuous optimization loops.',
        icon: '🚀',
        color: 'bg-green-50 text-green-600'
    }
];

export default function ProcessTimeline() {
    return (
        <section id="process" className="section bg-transparent scroll-mt-20 relative z-10">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="pill mb-4">HOW WE WORK</span>
                    <h2 className="heading-lg mb-4 mt-6">
                        From Concept to Production
                    </h2>
                    <p className="body-lg max-w-2xl mx-auto">
                        A battle-tested engineering process designed for reliability and speed.
                    </p>
                </div>

                {/* Visual Process Flow */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 -z-10" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Number Badge */}
                                <div className="w-24 h-24 mx-auto bg-card rounded-full flex items-center justify-center border-4 border-muted/30 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className={`text-2xl font-bold ${step.color.split(' ')[1]}`}>
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content Card */}
                                <div className="card text-center relative hover:-translate-y-2 transition-transform duration-300 h-full">
                                    <h3 className="heading-sm mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="body-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
