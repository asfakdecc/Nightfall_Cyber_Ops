"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const [text, setText] = useState("INITIALIZING SYSTEM...");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const sequence = async () => {
            // Step 1: System Init
            await new Promise(r => setTimeout(r, 600));
            setText("VERIFYING SECURITY PROTOCOLS...");
            setProgress(30);

            // Step 2: Protocol Check
            await new Promise(r => setTimeout(r, 800));
            setText("ESTABLISHING SECURE CONNECTION...");
            setProgress(60);

            // Step 3: Connection
            await new Promise(r => setTimeout(r, 800));
            setText("ACCESS GRANTED.");
            setProgress(100);

            // Complete
            await new Promise(r => setTimeout(r, 500));
            onComplete();
        };

        sequence();
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-primary"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="w-64 space-y-4">
                {/* Animated Glitch Text */}
                <motion.div
                    key={text}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs tracking-[0.2em] text-center h-6 font-bold"
                >
                    {text}
                </motion.div>

                {/* Loading Bar */}
                <div className="h-[2px] w-full bg-primary/20 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_#4682B4]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                    />
                </div>

                {/* Decorative Data Bits */}
                <div className="flex justify-between text-[10px] text-primary/40 font-mono">
                    <span>SEC-LVL: 09</span>
                    <span>NODE: ALPHA</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
