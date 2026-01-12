"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface FlickeringGridProps {
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    width?: number;
    height?: number;
    className?: string;
    maxOpacity?: number;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
    squareSize = 4,
    gridGap = 6,
    flickerChance = 0.3,
    color = "#6b7280",
    width,
    height,
    className,
    maxOpacity = 0.3,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    const memoizedColor = useMemo(() => {
        const toHex = (c: any) => {
            const hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };

        const rgb = color.match(/\d+/g)?.map(Number);
        if (rgb && rgb.length === 3) {
            return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
        }
        return color;
    }, [color]);

    const setupCanvas = useCallback(
        (canvas: HTMLCanvasElement, width: number, height: number) => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            const cols = Math.floor(width / (squareSize + gridGap));
            const rows = Math.floor(height / (squareSize + gridGap));

            const squares = new Float32Array(cols * rows);
            for (let i = 0; i < squares.length; i++) {
                squares[i] = Math.random() * maxOpacity;
            }

            return { cols, rows, squares, dpr };
        },
        [squareSize, gridGap, maxOpacity],
    );

    const updateSquares = useCallback(
        (squares: Float32Array, cols: number, rows: number) => {
            for (let i = 0; i < squares.length; i++) {
                if (Math.random() < flickerChance) {
                    squares[i] = Math.random() * maxOpacity;
                }
            }
        },
        [flickerChance, maxOpacity],
    );

    const drawGrid = useCallback(
        (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number,
            cols: number,
            rows: number,
            squares: Float32Array,
            dpr: number,
        ) => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "transparent";
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const opacity = squares[i * rows + j];
                    ctx.fillStyle = `${memoizedColor}${Math.floor(opacity * 255)
                        .toString(16)
                        .padStart(2, "0")}`;
                    ctx.fillRect(
                        i * (squareSize + gridGap) * dpr,
                        j * (squareSize + gridGap) * dpr,
                        squareSize * dpr,
                        squareSize * dpr,
                    );
                }
            }
        },
        [memoizedColor, squareSize, gridGap],
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let gridParams: any;

        const init = () => {
            const { width, height } = container.getBoundingClientRect();
            const newWidth = width;
            const newHeight = height;
            setCanvasSize({ width: newWidth, height: newHeight });
            gridParams = setupCanvas(canvas, newWidth, newHeight);
        };

        let lastTime = 0;
        const animate = (time: number) => {
            if (!isInView) return;

            const deltaTime = time - lastTime;
            if (deltaTime >= 700) { // Slower flicker rate
                lastTime = time;
                updateSquares(gridParams.squares, gridParams.cols, gridParams.rows);
                drawGrid(
                    ctx,
                    canvas.width,
                    canvas.height,
                    gridParams.cols,
                    gridParams.rows,
                    gridParams.squares,
                    gridParams.dpr,
                );
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const resizeObserver = new ResizeObserver(() => {
            init();
        });

        resizeObserver.observe(container);

        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0 },
        );

        intersectionObserver.observe(canvas);

        init();
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
        };
    }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

    return (
        <div ref={containerRef} className={`w-full h-full ${className}`}>
            <canvas
                ref={canvasRef}
                className="pointer-events-none"
                style={{
                    width: canvasSize.width,
                    height: canvasSize.height,
                }}
            />
        </div>
    );
};
