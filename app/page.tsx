"use client";

import Image from "next/image";
import Link from "next/link";
import MotionText from "@/components/ui/MotionText";
import Loader from "@/components/ui/Loader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
    const [loading, setLoading] = useState(true);

    // Prevent scrolling while loading
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [loading]);

    return (
        <>
            <AnimatePresence>
                {loading && <Loader onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center space-y-12">

                {/* Hero Section */}
                <section className="space-y-6 animate-fade-in-up">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
                        <Image
                            src="/logo.png"
                            alt="Nightfall Cyber Ops Emblem"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(70,130,180,0.3)]"
                            priority
                        />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                        NIGHTFALL <span className="text-primary">CYBER OPS</span>
                    </h1>

                    <MotionText
                        text='"We Don’t Defend, We Dominate."'
                        className="text-xl md:text-2xl font-light text-text-muted italic tracking-wide"
                        delay={0.5}
                    />
                </section>

                {/* Mission Summary */}
                <section className="max-w-2xl mx-auto px-4">
                    <p className="text-base md:text-lg leading-relaxed text-text/90 bg-white/5 p-6 rounded-sm border-l-2 border-primary">
                        Nightfall Cyber Ops serves as the central authority for operational integrity.
                        We unify identity, credibility, and controlled access across digital platforms, providing a single source of truth
                        in an environment of noise.
                    </p>
                </section>

                {/* Primary Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Link
                        href="/reporting"
                        className="px-8 py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold tracking-wider uppercase text-sm"
                    >
                        Reporting Guidance
                    </Link>
                    <Link
                        href="/channels"
                        className="px-8 py-3 bg-transparent border border-white/20 text-white hover:border-white hover:bg-white/5 transition-all duration-300 font-bold tracking-wider uppercase text-sm"
                    >
                        Verify Channels
                    </Link>
                </div>
            </div>
        </>
    );
}
