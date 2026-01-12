"use client";

import React, { CSSProperties } from "react";

interface RippleProps {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
    className?: string;
}

export const Ripple = React.memo(function Ripple({
    mainCircleSize = 210,
    mainCircleOpacity = 0.5,
    numCircles = 8,
    className,
}: RippleProps) {
    return (
        <div
            className={`absolute inset-0 flex items-center justify-center [mask-image:linear-gradient(to_bottom,white,transparent)] z-0 ${className}`}
        >
            {Array.from({ length: numCircles }, (_, i) => {
                const size = mainCircleSize + i * 70;
                const opacity = mainCircleOpacity - i * 0.03;
                const animationDelay = `${i * 0.06}s`;
                const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
                const borderOpacity = 45 + i * 5; // Much higher visibility

                return (
                    <div
                        key={i}
                        className={`absolute animate-ripple rounded-full bg-blue-500/25 shadow-sm border [--i:${i}]`}
                        style={
                            {
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity,
                                animationDelay,
                                borderStyle,
                                borderWidth: "1px",
                                borderColor: `rgba(59, 130, 246, ${borderOpacity / 100})`, // Blue-500
                                top: "50%",
                                left: "50%",
                            } as CSSProperties
                        }
                    />
                );
            })}
        </div>
    );
});

Ripple.displayName = "Ripple";
