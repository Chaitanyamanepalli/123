"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 h-full w-full bg-background overflow-hidden",
                className
            )}
        >
            <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="absolute left-0 top-0 h-full w-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]">
                {/* Beam 1 */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        opacity: [0.3, 0.6, 0.3], // Higher opacity for light mode
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -left-[10%] top-[40%] h-[30vh] w-[140vw] -translate-y-1/2 bg-gradient-to-r from-blue-300/0 via-blue-400/40 to-blue-300/0 blur-3xl mix-blend-multiply"
                />
                {/* Beam 2 */}
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -right-[20%] top-[30%] h-[40vh] w-[140vw] -translate-y-1/2 bg-gradient-to-r from-purple-300/0 via-purple-400/40 to-purple-300/0 blur-3xl mix-blend-multiply"
                />
                {/* Beam 3 (Spotlight style) */}
                <motion.div
                    animate={{
                        x: ["-20%", "20%", "-20%"],
                        rotate: [-10, 10, -10],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[30%] -top-[20%] h-[80vh] w-[40vw] bg-gradient-to-b from-indigo-300/40 via-indigo-300/20 to-transparent blur-3xl rounded-[100%] mix-blend-multiply"
                />
            </div>
        </div>
    );
};
