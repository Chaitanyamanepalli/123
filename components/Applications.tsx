import React from 'react';

const applications = [
    {
        title: 'Automated Customer Care',
        description: '24/7 intelligent support that understands context and resolves issues autonomously.',
        image: '🎧',
        category: 'Customer Support'
    },
    {
        title: 'Financial Analysis AI Agent',
        description: 'Analyze market trends, generate reports, and make data-driven recommendations.',
        image: '📊',
        category: 'Finance'
    },
    {
        title: 'DevOps Automation',
        description: 'Automate deployment pipelines, monitoring, and incident response workflows.',
        image: '💻',
        category: 'Engineering'
    },
    {
        title: 'HR Onboarding Assistant',
        description: 'Streamline employee onboarding with intelligent document processing and training.',
        image: '👥',
        category: 'Human Resources'
    }
];

export default function Applications() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Real-World Applications
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        See how businesses are transforming operations with custom AI agents
                    </p>
                </div>

                {/* Application Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {applications.map((app, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-gray-900 to-gray-800 dark:from-card dark:to-card/80 rounded-2xl p-8 text-white dark:text-foreground hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative border border-transparent dark:border-border"
                        >
                            {/* Background Icon */}
                            <div className="absolute top-4 right-4 text-8xl opacity-10">
                                {app.image}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <span className="text-sm text-blue-300 font-medium mb-2 block">
                                    {app.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-3">
                                    {app.title}
                                </h3>
                                <p className="text-gray-300 dark:text-muted-foreground leading-relaxed">
                                    {app.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
