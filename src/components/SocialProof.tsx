import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
    return (
        <section id="social-proof" className="py-20 bg-[#0A0F1E] relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-y border-gray-800 py-10">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                        <div className="text-gray-400">Happy Students</div>
                    </div>
                    <div className="text-center border-l border-r border-gray-800">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                            4.9 <Star className="w-8 h-8 text-yellow-400 fill-current" />
                        </div>
                        <div className="text-gray-400">Average Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                        <div className="text-gray-400">Beginner Friendly</div>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
                    >
                        <div className="flex justify-center mb-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <blockquote className="text-xl md:text-2xl text-gray-200 italic mb-6">
                            "I seriously didn't think I could do this. I've never written a line of code in my life. But the guide was so visual, I had my first bot running in 20 minutes. It's now handling 100+ messages a day for my bakery!"
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366] to-[#00A8FF] flex items-center justify-center font-bold text-white">
                                JS
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-white">James Sullivan</div>
                                <div className="text-sm text-gray-400">Small Business Owner</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
