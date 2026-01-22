"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DigitalRainProps {
    className?: string;
    color?: string;
    fontSize?: number;
    speed?: number;
    streamCount?: number; // Approximate count controlling density
}

export const DigitalRain: React.FC<DigitalRainProps> = ({
    className,
    color = "#0ea5e9", // Sky-500 default
    fontSize = 14,
    speed = 1,
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

        // Configuration
        const symbols = "0101010101010101XYZ00101"; // Mostly binary with some tech artifacts
        const columns: number[] = [];

        const init = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;

            const colCount = Math.floor(width / fontSize);
            columns.length = 0;

            for (let i = 0; i < colCount; i++) {
                // Random start Y position (above or on screen)
                columns[i] = Math.random() * height * -1;
            }
        };

        const draw = () => {
            // Fade out effect (trail)
            // Using fillRect with low opacity creates the fading trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Very subtle clear for trail
            // Note: In a transparent component for a website overlay, we usually want to CLEAR, not fill black.
            // BUT matrix trails need the previous frame to persist slightly.
            // Since this is an overlay on a website, filling with black/white will ruin the background.
            // Strategy: We clear the whole canvas and redraw everything? No, that kills the trail.
            // Strategy for transparent overlay: We track 'drops' objects.
            // Re-implementing with Drop objects for clean transparency support.

            // Let's stick to the 'Drop' object approach for better transparency handling than screen-clearing hacks.
            // Resetting logic...
        };

        // Re-defining state for Object-based approach which is better for transparent backgrounds
        interface Stream {
            x: number;
            y: number; // Head position
            speed: number;
            chars: { char: string; opacity: number }[]; // Trail chars
            length: number;
        }

        let streams: Stream[] = [];

        const initStreams = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;

            streams = [];
            const colCount = Math.floor(width / fontSize);

            for (let i = 0; i < colCount; i++) {
                // Not every column needs a stream immediately, random density
                if (Math.random() < 0.5) {
                    createStream(i * fontSize);
                }
            }
        };

        const createStream = (x: number, y: number = Math.random() * -500) => {
            const length = Math.floor(Math.random() * 15) + 5;
            const newStream: Stream = {
                x,
                y,
                speed: (Math.random() * 2 + 1) * speed,
                length,
                chars: []
            };
            // Pre-fill chars
            for (let j = 0; j < length; j++) {
                newStream.chars.push({
                    char: symbols.charAt(Math.floor(Math.random() * symbols.length)),
                    opacity: 1 - (j / length) // Gradient opacity
                });
            }
            streams.push(newStream);
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;

            // Allow new streams to form in empty columns randomly
            if (Math.random() < 0.03 * (width / fontSize / 10)) { // Spawn rate relative to width
                const col = Math.floor(Math.random() * (width / fontSize));
                createStream(col * fontSize, -100);
            }

            for (let i = streams.length - 1; i >= 0; i--) {
                const stream = streams[i];
                stream.y += stream.speed;

                // Draw the stream
                for (let j = 0; j < stream.length; j++) {
                    const charObj = stream.chars[j];
                    const charY = stream.y - (j * fontSize);

                    // Don't draw if off screen
                    if (charY < -fontSize) continue;
                    if (charY > height) continue;

                    // Head is brighter
                    if (j === 0) {
                        ctx.fillStyle = "#ffffff"; // White head
                        // Occasionally glitch the head char
                        if (Math.random() < 0.1) charObj.char = symbols.charAt(Math.floor(Math.random() * symbols.length));
                    } else {
                        ctx.fillStyle = color;
                    }

                    ctx.globalAlpha = charObj.opacity;
                    ctx.fillText(charObj.char, stream.x, charY);
                    ctx.globalAlpha = 1.0;
                }

                // Remove if fully off screen
                if (stream.y - (stream.length * fontSize) > height) {
                    streams.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        }

        const handleResize = () => {
            initStreams();
        };

        window.addEventListener("resize", handleResize);
        initStreams();
        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, fontSize, speed]);

    return (
        <div ref={containerRef} className={cn("absolute inset-0 z-0", className)}>
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};
