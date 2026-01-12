import React from 'react';



const useCases = [
    {
        icon: '📚',
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-600',
        title: 'Internal Knowledge Assistants',
        description: 'Turn your company docs, Notion pages, and Slack history into a conversational AI assistant.',
        features: [
            'Analyze onboarding docs up to 40%',
            'Instant answers to policy questions',
            'Reduce repetitive internal queries'
        ]
    },
    {
        icon: '🎧',
        iconBg: 'bg-purple-50',
        iconColor: 'text-purple-600',
        title: 'Customer Support Automation',
        description: 'Deploy AI agents that handle tier-1 inquiries autonomously, escalating complex issues.',
        features: [
            '24/7 instant response times',
            'Reduce support tickets by 60%',
            'Seamless handoff to humans'
        ]
    },
    {
        icon: '📊',
        iconBg: 'bg-green-50',
        iconColor: 'text-green-600',
        title: 'Data Analysis & Reporting',
        description: 'Turn raw data into actionable insights. Chat with databases and generate reports.',
        features: [
            'Automated weekly data reports',
            'Identify trends without SQL',
            'Export charts instantly'
        ]
    },
    {
        icon: '🔧',
        iconBg: 'bg-orange-50',
        iconColor: 'text-orange-600',
        title: 'Research & Summarization',
        description: 'Automate competitor analysis, market research, and document summarization.',
        features: [
            'Digest 100+ pages in seconds',
            'Automated competitor tracking',
            'Synthesize multiple sources'
        ]
    },
    {
        icon: '🎯',
        iconBg: 'bg-teal-50',
        iconColor: 'text-teal-600',
        title: 'Workflow Automation Tools',
        description: 'Build AI agents that automate complex, multi-step workflows and data entry.',
        features: [
            'Eliminate manual data entry',
            'Streamline operational pipelines',
            'Reduce human error by 90%'
        ]
    },
    {
        icon: '👥',
        iconBg: 'bg-pink-50',
        iconColor: 'text-pink-600',
        title: 'Onboarding Assistants',
        description: 'Create personalized onboarding journeys for new employees step-by-step.',
        features: [
            'Interactive training modules',
            'Automated check-ins and support',
            'Track onboarding progress'
        ]
    }
];

export default function UseCases() {
    return (
        <section id="solutions" className="section bg-transparent scroll-mt-20 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">
                        Outcomes Over Hype
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Real-World AI{' '}
                        <span className="text-blue-600">That Works</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        We move beyond the buzzwords to build custom AI agents that solve actual business problems for startups, SMBs, and innovation teams.
                    </p>
                </div>

                {/* Use Case Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="card group"
                        >
                            {/* Icon */}
                            <div className={`${useCase.iconBg} ${useCase.iconColor} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {useCase.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-foreground mb-2">
                                {useCase.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                {useCase.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {useCase.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="text-blue-600 mt-0.5">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
