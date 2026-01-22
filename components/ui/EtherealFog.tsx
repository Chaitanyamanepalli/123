"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface EtherealFogProps {
    className?: string;
    fogColor?: string;
    speed?: number;
    density?: number; // Number of fog particles
}

export const EtherealFog: React.FC<EtherealFogProps> = ({
    className,
    fogColor = "rgba(255, 255, 255, 0.4)", // White center
    speed = 0.5,
    density = 30, // Number of puffs
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = container.clientWidth;
        let height = container.clientHeight;
        let animationFrameId: number;

        interface Puff {
            x: number;
            y: number;
            radius: number;
            vx: number;
            vy: number;
            opacity: number;
            growth: number;
        }

        let puffs: Puff[] = [];

        const init = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;

            puffs = [];

            // Initialize puffs
            for (let i = 0; i < density; i++) {
                puffs.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 200 + 100, // Large puffs 100-300px
                    vx: (Math.random() - 0.5) * speed,
                    vy: (Math.random() - 0.5) * speed * 0.5, // Move clearer horizontally
                    opacity: Math.random() * 0.5 + 0.1, // Variation in density
                    growth: Math.random() * 0.02 - 0.01 // Slight breathing effect
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Enable composite operation for "blending" clouds
            ctx.globalCompositeOperation = 'source-over';

            puffs.forEach((puff, index) => {
                puff.x += puff.vx;
                puff.y += puff.vy;
                puff.radius += puff.growth;

                // Keep radius within bounds
                if (puff.radius > 400 || puff.radius < 50) puff.growth *= -1;

                // Wrap around screen
                if (puff.x < -puff.radius * 2) puff.x = width + puff.radius;
                if (puff.x > width + puff.radius) puff.x = -puff.radius;
                if (puff.y < -puff.radius * 2) puff.y = height + puff.radius;
                if (puff.y > height + puff.radius) puff.y = -puff.radius;

                // Draw Puff (Radial Gradient)
                const gradient = ctx.createRadialGradient(puff.x, puff.y, 0, puff.x, puff.y, puff.radius);

                gradient.addColorStop(0, fogColor);
                gradient.addColorStop(1, 'rgba(0,0,0,0)'); // Fade to transparent

                ctx.fillStyle = gradient;
                ctx.globalAlpha = puff.opacity;
                ctx.beginPath();
                ctx.arc(puff.x, puff.y, puff.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalAlpha = 1.0;

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener("resize", handleResize);
        init();
        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [fogColor, speed, density]);

    return (
        <div ref={containerRef} className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
            <canvas ref={canvasRef} className="block w-full h-full filter blur-xl opacity-90 transform scale-110" />
            {/* blur-xl is softer, clearer fog */}
        </div>
    );
};
