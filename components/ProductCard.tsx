'use client';

import { motion } from 'framer-motion';
import { MotorbikeRental } from '@/data/products';

interface ProductCardProps {
    product: MotorbikeRental;
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="group relative bg-adventure-primary/20 border border-adventure-primary/30 hover:border-adventure-accent/50 p-4 transition-all duration-500 overflow-hidden"
        >
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            {/* Bike Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-adventure-bg mb-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-adventure-accent px-3 py-1 text-adventure-bg font-bold text-xs">
                    RATING: {product.rating}
                </div>
            </div>

            {/* Content */}
            <div className="relative">
                <h3 className="text-2xl font-playfair font-bold text-adventure-mist mb-2 uppercase tracking-wide">
                    {product.name}
                </h3>
                <p className="text-sm text-adventure-sage mb-6 line-clamp-2 italic">
                    {product.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {product.specs.map((spec, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 border border-adventure-secondary text-adventure-accent/70">
                            {spec}
                        </span>
                    ))}
                </div>

                {/* Price & Action */}
                <div className="flex items-end justify-between border-t border-adventure-primary/30 pt-4">
                    <div>
                        <p className="text-[10px] uppercase text-adventure-sage mb-1">Rental Price</p>
                        <p className="text-2xl font-bold text-adventure-accent">{product.price}</p>
                    </div>
                    <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-adventure-mist font-bold uppercase text-xs tracking-widest"
                    >
                        Book Now
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
