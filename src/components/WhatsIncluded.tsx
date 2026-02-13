import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const includes = [
    "Complete N8n Installation Guide (Windows/Mac/Linux)",
    "WhatsApp Business API Integration Walkthrough",
    "10+ Ready-Made Workflow Templates (JSON)",
    "Troubleshooting Common Errors & Fixes",
    "Bonus: Advanced Automation Strategies",
    "Exclusive Access to Community Discord",
    "Lifetime Updates for New WhatsApp Features",
    "30-Day Money-Back Guarantee"
];

const WhatsIncluded: React.FC = () => {
    return (
        <section id="whats-included" className="py-20 bg-[#0F1623]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6"
                        >
                            Everything You Need to Succeed
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 mb-8 max-w-lg"
                        >
                            This isn't just a PDF. It's a complete toolkit designed to take you from novice to automation expert in record time.
                        </motion.p>

                        <div className="space-y-4">
                            {includes.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-[#25D366]" />
                                    </div>
                                    <span className="text-gray-200">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#00A8FF] rounded-2xl blur-3xl opacity-20 transform rotate-6"></div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative bg-[#1F2937] border border-gray-700 rounded-2xl p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                        >
                            <div className="bg-[#0A0F1E] rounded-xl overflow-hidden aspect-[4/5] flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                                <div className="relative z-10 text-center p-8 border-2 border-white/10 m-4 rounded-xl backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold text-white mb-2">WhatsApp Automation</h3>
                                    <div className="text-[#25D366] font-mono text-sm mb-6">COMPLETE GUIDE</div>
                                    <div className="w-16 h-1 w-full bg-gradient-to-r from-transparent via-[#25D366] to-transparent mb-6"></div>
                                    <p className="text-xs text-gray-400">PDF FORMAT • INSTANT DOWNLOAD</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatsIncluded;
