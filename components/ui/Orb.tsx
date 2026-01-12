"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface OrbProps {
    className?: string;
    hue?: number;
    hoverIntensity?: number;
    rotateOnHover?: boolean;
    brightness?: number;
    size?: number;
    forceHoverState?: boolean;
    lightMode?: boolean;
}

export default function Orb({
    className,
    hue = 0,
    hoverIntensity = 0.2,
    rotateOnHover = true,
    brightness = 1,
    size = 600,
    forceHoverState = false,
    lightMode = false,
}: OrbProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
    const width = useRef(0);
    const height = useRef(0);

    // Gradient variables
    const currentHue = useRef(hue);
    const targetHue = useRef(hue);
    const rotation = useRef(0);

    // Physics variables
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const targetX = useRef(0);
    const targetY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);

    // Initialize canvas
    useEffect(() => {
        if (!canvasRef.current) return;
        const context = canvasRef.current.getContext("2d");
        if (context) {
            setCtx(context);
            resize();
            window.addEventListener("resize", resize);
        }
        return () => window.removeEventListener("resize", resize);
    }, []);

    // Window resize handler
    const resize = useCallback(() => {
        if (!canvasRef.current || !ctx) return;
        width.current = window.innerWidth;
        height.current = window.innerHeight;
        canvasRef.current.width = width.current;
        canvasRef.current.height = height.current;

        // Center initially
        currentX.current = width.current / 2;
        currentY.current = height.current / 2;
        targetX.current = width.current / 2;
        targetY.current = height.current / 2;
    }, [ctx]);

    // Handle mouse movement
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Update target position based on mouse, but keep it constrained slightly
            // We want the orb to 'follow' but float around
            targetX.current = e.clientX;
            targetY.current = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Animation Loop
    useEffect(() => {
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            // Clear canvas
            ctx.clearRect(0, 0, width.current, height.current);

            // Smoothly interpolate position (Ease Factor)
            // The lower the factor, the more "floaty" / lazy it feels
            const ease = 0.03;
            currentX.current += (targetX.current - currentX.current) * ease;
            currentY.current += (targetY.current - currentY.current) * ease;

            // Color Shift over time
            targetHue.current = (targetHue.current + 0.1) % 360;
            currentHue.current += (targetHue.current - currentHue.current) * 0.1;

            const gradient = ctx.createRadialGradient(
                currentX.current,
                currentY.current,
                0, // inner radius
                currentX.current,
                currentY.current,
                size // outer radius
            );

            // Light Mode vs Dark Mode colors
            // For Light Mode: We want soft, nice colors (Blue/Purple/Pink) that fade to transparent
            // We use brighter base HSL values

            const baseColor = lightMode
                ? `hsla(${currentHue.current}, 80%, 60%, 1)`
                : `hsla(${currentHue.current}, 70%, 50%, 1)`;

            const midColor = lightMode
                ? `hsla(${currentHue.current + 40}, 80%, 60%, 0.5)`
                : `hsla(${currentHue.current + 40}, 70%, 50%, 0.5)`;

            gradient.addColorStop(0, baseColor);
            gradient.addColorStop(0.5, midColor);
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.fillStyle = gradient;

            // Global composite operation for blending
            // Screen or Lighten usually looks good for "glowing energy"
            // But for light mode background, Multiply often looks "dirty". 
            // Normal blending with good opacity is often safest for light mode "cloud" look.
            // However, the user specifically asked for "Orb Effect".
            // Let's stick to normal source-over or screen if dark.
            ctx.globalCompositeOperation = lightMode ? "source-over" : "screen";

            // Draw the Orb
            ctx.beginPath();
            ctx.arc(currentX.current, currentY.current, size, 0, Math.PI * 2);
            ctx.fill();

            // Helper Blur
            // Canvas filter blur is expensive, but gives that soft look
            // Better to use CSS on the canvas itself for performance

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [ctx, hue, brightness, size, lightMode]);

    return (
        <canvas
            ref={canvasRef}
            className={cn(
                "absolute top-0 left-0 w-full h-full pointer-events-none opacity-80 blur-[80px]", // CSS Blur for performance
                className
            )}
        />
    );
}
