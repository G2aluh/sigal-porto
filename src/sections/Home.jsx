import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
    const [index, setIndex] = useState(0);
    const words = ["WEBSITE", "DESIGN", "POSTER"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
        >
            {/* Pixel grid background decoration */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #FFD400 39px, #FFD400 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #FFD400 39px, #FFD400 40px)',
                backgroundSize: '40px 40px'
            }} />

            {/* Pixel accent blocks */}
            <motion.div
                className="absolute top-1/4 left-8 w-3 h-3 bg-yellow-400 hidden md:block"
                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-1/3 right-12 w-2 h-2 bg-yellow-400 hidden md:block"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/3 left-16 w-4 h-4 bg-yellow-400/50 hidden md:block"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-20 w-2 h-2 bg-yellow-400 hidden md:block"
                animate={{ opacity: [0.8, 0.2, 0.8] }}
                transition={{ duration: 1.8, repeat: Infinity }}
            />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Pixel accent bar */}
                <motion.div
                    className="flex justify-center gap-1 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2.5 h-2.5 bg-yellow-400"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        />
                    ))}
                </motion.div>

                {/* Tagline */}
                <motion.p
                    className="font-pixel text-[10px] sm:text-xs text-yellow-400 tracking-widest mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    CREATIVE DEVELOPER & DESIGNER
                </motion.p>

                {/* Headline */}
                <motion.h1
                    className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white leading-relaxed mb-6 pixel-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    I BUILD{' '}
                    <div className="inline-flex items-center justify-center relative h-[2em] w-[8.5em] align-middle -translate-y-2 -mx-2 overflow-hidden bg-gray-900/60 border-2 border-gray-700 rounded-none shadow-[4px_4px_0_0_rgb(55,65,81)]">
                        <AnimatePresence mode='wait'>
                            <motion.span
                                key={words[index]}
                                className="absolute inset-0 flex items-center justify-center text-yellow-400 font-pixel tracking-widest pl-2 pt-1"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-100%" }}
                                transition={{ duration: 0.5, ease: "backOut" }}
                            >
                                {words[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    <br />
                    EXPERIENCES
                </motion.h1>

                {/* Sub-tagline */}
                <motion.p
                    className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Blending clean code with bold design to craft pixel-perfect
                    products that stand out and perform.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-dark-900 font-bold px-8 py-3.5 text-sm hover:bg-yellow-500 transition-colors pixel-border-sm"
                    >
                        <span className="font-pixel text-[10px]">VIEW PROJECTS</span>
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-3.5 text-sm hover:bg-yellow-400/10 transition-colors"
                    >
                        <span className="font-pixel text-[10px]">CONTACT ME</span>
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-1 h-1 bg-yellow-400/60" />
                        <div className="w-1 h-1 bg-yellow-400/40" />
                        <div className="w-1 h-1 bg-yellow-400/20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
