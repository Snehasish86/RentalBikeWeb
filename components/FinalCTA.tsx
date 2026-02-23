'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
    return (
        <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-adventure-bg">
            {/* Mountain Range Silhouette Wrap */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-adventure-accent font-bold uppercase tracking-[0.8em] text-xs mb-8 block"
                >
                    Limited Slots Available
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-8xl font-playfair font-bold text-adventure-mist mb-8 md:text-center leading-tight md:leading-none uppercase"
                >
                    Answer the Call <br /> of the Wild
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-2xl text-adventure-sage mb-10 font-inter italic max-w-2xl mx-auto leading-relaxed"
                >
                    "Because in the end, you won't remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain."
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05, letterSpacing: '0.4em' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 md:px-20 py-4 md:py-6 bg-adventure-accent text-adventure-bg rounded-none text-xl md:text-2xl font-bold uppercase tracking-widest shadow-2xl transition-all duration-300 pointer-events-auto"
                >
                    Join the Ride
                </motion.button>

                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="mt-16 text-adventure-accent/20 text-6xl select-none font-playfair font-black"
                >
                    SBR
                </motion.div>
            </div>
        </section>
    );
}
