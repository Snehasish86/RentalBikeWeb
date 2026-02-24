'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
    return (
        <section id="contact" className="py-24 md:py-40 px-6 relative overflow-hidden bg-adventure-bg">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-adventure-accent font-bold uppercase tracking-[0.8em] text-xs mb-8 block"
                        >
                            Start Your Journey
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-playfair font-bold text-adventure-mist mb-8 leading-tight uppercase"
                        >
                            Ride the <br /> <span className="text-adventure-accent">Mountains</span>
                        </motion.h2>

                        <div className="space-y-12 mb-12">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-adventure-accent flex items-center justify-center shrink-0">
                                    <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="" className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-adventure-accent uppercase tracking-widest font-bold text-sm mb-2">Location</h4>
                                    <p className="text-adventure-sage italic font-inter">C/o Mr. Anil Paul, 63, Nazrul Sarani, Hakim Para, Siliguri, WB 734001</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-adventure-accent flex items-center justify-center shrink-0">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="" className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-adventure-accent uppercase tracking-widest font-bold text-sm mb-2">Connectivity</h4>
                                    <p className="text-adventure-sage italic font-inter">+91-8116915168</p>
                                    <p className="text-adventure-sage italic font-inter text-sm">booking@siliguribikerental.com</p>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, letterSpacing: '0.4em' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-adventure-accent text-adventure-bg text-xl font-bold uppercase tracking-widest shadow-2xl transition-all duration-300"
                        >
                            Book Your Ride
                        </motion.button>
                    </div>

                    <div className="relative h-[500px] border border-white/5 p-2 bg-adventure-primary/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0854432163!2d88.4285741!3d26.7096645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4414af26bd47b%3A0xe549bd8552f48367!2sNazrul%20Sarani%2C%20Hakim%20Para%2C%20Siliguri%2C%20West%20Bengal%20734001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            className="w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
