import React from 'react';


const stats = [
    {
        value: '3x',
        label: 'Faster',
        description: 'Implementation speed vs traditional development'
    },
    {
        value: '100%',
        label: 'Private',
        description: 'Your data stays secure in your infrastructure'
    },
    {
        value: '24/7',
        label: 'Operations',
        description: 'AI agents that work around the clock'
    }
];

export default function Stats() {
    return (
        <section className="py-20 bg-transparent border-y border-border relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="heading-xl gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="heading-sm mb-2">
                                {stat.label}
                            </div>
                            <p className="body-md">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
