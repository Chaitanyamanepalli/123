import React from 'react';


export default function CTA() {
    return (
        <section id="contact" className="section bg-transparent scroll-mt-20 relative z-10">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="heading-lg mb-4">
                        Ready to Automate Your Business?
                    </h2>
                    <p className="body-lg mb-10 max-w-2xl mx-auto">
                        Stop wondering what AI can do. Start creating what it can do for you.
                        Let's discuss your custom use case.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="btn btn-primary w-full sm:w-auto">
                            Book a Discovery Call
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button className="btn btn-secondary w-full sm:w-auto">
                            View Case Studies
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
