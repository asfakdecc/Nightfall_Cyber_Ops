"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AmbientBackground = () => {
    const [elements, setElements] = useState<{
        streams: { id: number; left: string; delay: number; duration: number }[];
        particles: { id: number; left: string; top: string; size: number; delay: number; duration: number }[];
    }>({ streams: [], particles: [] });

    useEffect(() => {
        const streams = Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: 10 + Math.random() * 10,
        }));

        const particles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: 1 + Math.random() * 3,
            delay: Math.random() * 2,
            duration: 5 + Math.random() * 5,
        }));

        setElements({ streams, particles });
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-black" aria-hidden="true">
            {/* Pulsing Grid */}
            <motion.div
                className="absolute inset-0 opacity-[0.05]"
                initial={{ opacity: 0.03 }}
                animate={{
                    opacity: [0.03, 0.06, 0.03],
                    scale: [1, 1.02, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    backgroundImage: `linear-gradient(to right, #4682B4 1px, transparent 1px),
                            linear-gradient(to bottom, #4682B4 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Radiant Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(70,130,180,0.08),transparent_80%)]" />

            {/* Waterfall Data Streams */}
            {elements.streams.map((stream) => (
                <motion.div
                    key={`stream-${stream.id}`}
                    className="absolute top-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                    initial={{ y: "-100%", x: stream.left, opacity: 0 }}
                    animate={{ y: "110vh", opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: stream.duration,
                        repeat: Infinity,
                        delay: stream.delay,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Floating Data Particles */}
            {elements.particles.map((particle) => (
                <motion.div
                    key={`particle-${particle.id}`}
                    className="absolute rounded-full bg-primary/40 shadow-[0_0_8px_#4682B4]"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Static Grain Overaly for texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none">
                <div className="w-full h-full bg-repeat opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            </div>
        </div>
    );
};

export default AmbientBackground;
