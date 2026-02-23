'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { motorbikeRentals } from '@/data/products';

export default function ProductShowcase() {
    return (
        <section className="py-32 px-4 md:px-8 relative bg-adventure-bg">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-adventure-accent font-bold uppercase tracking-[0.5em] text-xs mb-4"
                    >
                        Our Fleet
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-playfair font-bold text-adventure-mist mb-6"
                    >
                        Signature Rides
                    </motion.h2>
                    <div className="w-24 h-[1px] bg-adventure-accent/30" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {motorbikeRentals.map((bike, index) => (
                        <ProductCard key={bike.id} product={bike} index={index} />
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-5">
                    <img src="/bikes/silhouette.png" className="w-full h-full object-contain" alt="" />
                </div>
            </div>
        </section>
    );
}
