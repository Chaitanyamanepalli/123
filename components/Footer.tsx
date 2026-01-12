import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-muted/30 text-foreground py-16 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">C</span>
                            </div>
                            <span className="text-xl font-bold">CloudAGI</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Building custom AI agents that solve real business problems.
                        </p>
                        <div className="mt-6 space-y-2">
                            <p className="text-sm text-muted-foreground">📍 Hyderabad, India</p>
                            <p className="text-sm text-muted-foreground">📍 Pittsburgh, PA</p>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">AI Agent Development</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Consulting</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">POC & MVP</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Tech Stack Selection</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Connect</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</Link></li>
                            <li><Link href="mailto:contact@cloudagi.ai" className="text-muted-foreground hover:text-primary transition-colors">contact@cloudagi.ai</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-muted-foreground text-sm">
                            © 2026 CloudAGI.AI. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
