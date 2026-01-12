import React from 'react';
import Link from 'next/link';

const services = [
    {
        icon: '🤖',
        title: 'AI Agent Development',
        description: 'Custom AI agents built for your specific business needs and workflows.',
        link: 'Learn more →'
    },
    {
        icon: '⚙️',
        title: 'AI Consulting Agency',
        description: 'Expert guidance on models, frameworks, and implementation strategies.',
        link: 'Learn more →'
    },
    {
        icon: '💡',
        title: 'Computer AGI Systems',
        description: 'Advanced autonomous systems that think and act like human experts.',
        link: 'Learn more →'
    }
];

export default function Services() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Core Services
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        End-to-end AI solutions tailored to your business objectives
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-card rounded-2xl p-8 border-2 border-border hover:border-primary transition-all hover:shadow-xl"
                        >
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                href="#"
                                className="text-primary font-semibold group-hover:underline inline-flex items-center gap-2"
                            >
                                {service.link}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
