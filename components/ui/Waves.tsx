"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface WavesProps {
    className?: string;
    lineColor?: string;
    backgroundColor?: string;
    waveSpeedX?: number;
    waveSpeedY?: number;
    waveAmpX?: number;
    waveAmpY?: number;
    friction?: number;
    tension?: number;
    maxCursorMove?: number;
    xGap?: number;
    yGap?: number;
}

export const Waves: React.FC<WavesProps> = ({
    className,
    lineColor = "rgba(59, 130, 246, 0.3)", // Blue-500 with opacity
    backgroundColor = "transparent",
    waveSpeedX = 0.02,
    waveSpeedY = 0.01,
    waveAmpX = 40,
    waveAmpY = 20,
    friction = 0.9,
    tension = 0.01,
    maxCursorMove = 100,
    xGap = 12,
    yGap = 36,
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
        let waves: any[] = [];
        let mouse = { x: -1000, y: -1000 };
        let animationId: number;

        const init = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;
            waves = [];

            const totalLines = Math.ceil(height / yGap);

            for (let i = 0; i < totalLines; i++) {
                const points = [];
                const totalPoints = Math.ceil(width / xGap);
                for (let j = 0; j <= totalPoints; j++) {
                    points.push({
                        x: j * xGap,
                        y: i * yGap,
                        originalY: i * yGap,
                        noise: Math.random() * 20, // Random starting offset
                        speed: Math.random() * 0.02 + 0.005,
                    });
                }
                waves.push(points);
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, width, height);

            ctx.lineWidth = 2; // Thicker lines
            // Gradient for lines
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)");
            gradient.addColorStop(0.5, lineColor);
            gradient.addColorStop(1, "rgba(59, 130, 246, 0.1)");
            ctx.strokeStyle = gradient;

            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.moveTo(0, wave[0].y);

                for (let i = 0; i < wave.length; i++) {
                    const point = wave[i];

                    // Sine wave movement
                    point.y = point.originalY + Math.sin(i * 0.1 + Date.now() * waveSpeedX + point.noise) * waveAmpY;

                    // Mouse interaction (optional repulsion)
                    /* 
                    const dx = mouse.x - point.x;
                    const dy = mouse.y - point.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 200) {
                        const force = (200 - dist) / 200;
                        point.y += dy * force * 0.1;
                    } 
                    */

                    // Smooth curve
                    if (i > 0) {
                        // Simple line for now for performance, or quadraticCurveTo
                        ctx.lineTo(point.x, point.y);
                    }
                }
                ctx.stroke();
            });

            animationId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener("resize", handleResize);
        container.addEventListener("mousemove", handleMouseMove);

        init();
        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            container.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [lineColor, backgroundColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, xGap, yGap]);

    return (
        <div ref={containerRef} className={cn("absolute inset-0 z-0", className)}>
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};
