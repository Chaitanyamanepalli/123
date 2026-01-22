"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NeuralNetworkProps {
    className?: string;
    nodeColor?: string;
    lineColor?: string;
    signalColor?: string;
    speed?: number;
    nodeCount?: number;
    connectionDistance?: number;
    signalChance?: number;
}

export const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
    className,
    nodeColor = "rgba(59, 130, 246, 0.5)", // Blue-500
    lineColor = "rgba(148, 163, 184, 0.1)", // Slate-400
    signalColor = "#60a5fa", // Blue-400
    speed = 2,
    nodeCount = 80,
    connectionDistance = 150,
    signalChance = 0.02
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
        const signalSpeed = speed;

        interface Point {
            x: number;
            y: number;
            vx: number;
            vy: number;
        }

        interface Signal {
            startNodeIndex: number; // Index of starting node
            endNodeIndex: number;   // Index of ending node
            progress: number;       // 0 to 1
        }

        let nodes: Point[] = [];
        let signals: Signal[] = [];

        const init = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;

            nodes = [];
            signals = [];

            // Grid Based Sampling (Stratified Sampling) for even distribution
            // We want roughly 'nodeCount' nodes.
            // Let's divide the screen into a grid where each cell gets 1 node.

            const area = width * height;
            // Calculate grid dimensions
            const aspectRatio = width / height;

            // sqrt(N * aspect) = cols
            const cols = Math.floor(Math.sqrt(nodeCount * aspectRatio));
            const rows = Math.floor(nodeCount / cols);

            const cellWidth = width / cols;
            const cellHeight = height / rows;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    // Add jitter within the cell
                    const x = (i * cellWidth) + Math.random() * cellWidth;
                    const y = (j * cellHeight) + Math.random() * cellHeight;

                    nodes.push({
                        x,
                        y,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                    });
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Update Nodes
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off walls
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                // Draw Node
                ctx.beginPath();
                ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = nodeColor;
                ctx.fill();
            });

            // Draw Connections and Manage Signals
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        // Draw Line
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 1;
                        ctx.stroke();

                        // Randomly Spawn Signal
                        if (Math.random() < signalChance) {
                            // Check if signal already exists on this path (optional optimization)
                            signals.push({
                                startNodeIndex: i,
                                endNodeIndex: j,
                                progress: 0
                            });
                        }
                    }
                }
            }

            // Update and Draw Signals
            for (let i = signals.length - 1; i >= 0; i--) {
                const signal = signals[i];
                signal.progress += signalSpeed / 100; // Adjust speed relative to distance if needed (or fixed speed)

                if (signal.progress >= 1) {
                    signals.splice(i, 1);
                    continue;
                }

                const startNode = nodes[signal.startNodeIndex];
                const endNode = nodes[signal.endNodeIndex];

                const x = startNode.x + (endNode.x - startNode.x) * signal.progress;
                const y = startNode.y + (endNode.y - startNode.y) * signal.progress;

                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = signalColor;
                ctx.shadowBlur = 10;
                ctx.shadowColor = signalColor;
                ctx.fill();
                ctx.shadowBlur = 0; // Reset
            }

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
    }, [nodeColor, lineColor, signalColor, speed, nodeCount, connectionDistance, signalChance]);

    return (
        <div ref={containerRef} className={cn("absolute inset-0 z-0", className)}>
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};
