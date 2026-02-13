import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#25D366] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00A8FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse-slow delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                    <span className="text-[#25D366] text-sm font-semibold tracking-wide uppercase">📘 Complete PDF Guide</span>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Learn to Build WhatsApp Automation <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#00A8FF]">With This Step-by-Step PDF Guide</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Download our comprehensive PDF guide and learn how to set up N8n WhatsApp automation in 30 minutes - even if you've never coded before. Follow simple screenshots and copy-paste templates.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button
                        onClick={scrollToPricing}
                        className="group relative px-8 py-4 bg-[#25D366] hover:bg-[#1db954] text-[#0A0F1E] font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.4)] w-full md:w-auto flex items-center justify-center gap-2"
                    >
                        Download PDF Guide Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg rounded-full transition-all border border-white/10 w-full md:w-auto flex items-center justify-center gap-2"
                    >
                        <Play className="w-4 h-4 fill-current" />
                        See What's Inside
                    </button>
                </motion.div>

                <motion.div
                    className="flex items-center justify-center gap-6 text-gray-400 text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#25D366]" />
                        <span>PDF + Templates Included</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#25D366]" />
                        <span>Instant Download</span>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-16 relative mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="absolute inset-0 bg-[#25D366] rounded-2xl blur-3xl opacity-10"></div>
                    <div className="relative bg-[#111827] border border-gray-800 rounded-2xl p-2 md:p-4 shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 px-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        {/* Mock Interface showing visual workflow */}
                        <div className="bg-[#0A0F1E] rounded-xl p-6 md:p-10 overflow-hidden relative min-h-[300px] flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2c364c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            {/* Animated Nodes */}
                            <div className="relative z-10 w-full max-w-lg">
                                <div className="flex items-center justify-between gap-4 mb-8">
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ repeat: Infinity, duration: 3 }}
                                        className="flex-1 bg-[#1F2937] p-4 rounded-lg border border-gray-700 shadow-lg flex items-center gap-3"
                                    >
                                        <div className="w-10 h-10 bg-[#25D366] rounded flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400">Trigger</div>
                                            <div className="text-white font-medium text-sm">WhatsApp Msg</div>
                                        </div>
                                    </motion.div>

                                    <div className="h-[2px] w-12 bg-gray-600 relative">
                                        <motion.div
                                            className="absolute top-1/2 left-0 w-2 h-2 bg-[#25D366] rounded-full -translate-y-1/2"
                                            animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                        />
                                    </div>

                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                                        className="flex-1 bg-[#1F2937] p-4 rounded-lg border border-gray-700 shadow-lg flex items-center gap-3"
                                    >
                                        <div className="w-10 h-10 bg-[#FF3B7D] rounded flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">AI</span>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400">Action</div>
                                            <div className="text-white font-medium text-sm">Generate Reply</div>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="flex justify-center">
                                    <div className="h-12 w-[2px] bg-gray-600 relative mb-4">
                                        <motion.div
                                            className="absolute top-0 left-1/2 w-2 h-2 bg-[#25D366] rounded-full -translate-x-1/2"
                                            animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.75 }}
                                        />
                                    </div>
                                </div>

                                <motion.div
                                    className="mx-auto w-2/3 bg-[#1F2937] p-4 rounded-lg border border-gray-700 shadow-lg flex items-center gap-3"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ repeat: Infinity, duration: 3, delay: 2.25 }}
                                >
                                    <div className="w-10 h-10 bg-[#00A8FF] rounded flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Action</div>
                                        <div className="text-white font-medium text-sm">Send Response</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
