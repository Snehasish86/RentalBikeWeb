'use client';

import { useEffect } from 'react';
import HeroCanvasAnimation from '@/components/HeroCanvasAnimation';
import ProductShowcase from '@/components/ProductShowcase';
import FeatureSection from '@/components/FeatureSection';
import FinalCTA from '@/components/FinalCTA';
import Navbar from '@/components/Navbar';

export default function Home() {
    useEffect(() => {
        // Ensure smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <main className="bg-adventure-bg min-h-screen">
            <Navbar />

            {/* Hero: Scroll-Triggered Narrative */}
            <HeroCanvasAnimation />

            {/* Product Showcase Section */}
            <section id="fleet">
                <ProductShowcase />
            </section>

            {/* Feature Highlights Section */}
            <section id="experience">
                <FeatureSection />
            </section>

            {/* Final Call-to-Action */}
            <FinalCTA />
        </main>
    );
}
