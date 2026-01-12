"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'Expertise', href: '/expertise' },
  { name: 'Process', href: '/process' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav h-16" : "bg-transparent h-20"
      )}
    >
      <div className="container-wide h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-105 transition-transform">
            C
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            CloudAGI
          </span>
        </Link>

        {/* Centered Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary shadow-blue-500/20 font-semibold">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
