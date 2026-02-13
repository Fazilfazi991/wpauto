import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, AlertTriangle } from 'lucide-react';
import PaymentModal from './PaymentModal';

const Pricing: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section id="pricing" className="py-20 relative">
            <PaymentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} amount={27} />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-[#1F2937] rounded-3xl overflow-hidden border border-gray-700 shadow-2xl relative"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#25D366] to-[#00A8FF]"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12">
                            <div className="inline-block px-4 py-1 bg-red-500/20 text-red-500 text-xs font-bold rounded-full mb-4 animate-pulse">
                                LIMITED TIME OFFER - 72% OFF
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">WhatsApp Automation PDF Guide</h2>
                            <p className="text-gray-400 mb-8">Download the complete tutorial and start building your automation today.</p>

                            <div className="space-y-4 mb-8">
                                {['Step-by-Step PDF Guide', 'Ready-to-use Workflow Templates', 'Integration Tutorials', 'Lifetime Updates', 'Community Access'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-[#25D366]" />
                                        </div>
                                        <span className="text-gray-200 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-yellow-500 bg-yellow-500/10 p-4 rounded-xl text-sm">
                                <AlertTriangle className="w-4 h-4 shrink-0" />
                                <span>Price increases to $97 soon!</span>
                            </div>
                        </div>

                        <div className="bg-[#0A0F1E] p-8 md:p-12 flex flex-col justify-center items-center text-center border-l border-gray-800">
                            <div className="text-gray-500 line-through text-lg mb-2">$97.00</div>
                            <div className="text-6xl font-bold text-white mb-4">$27</div>
                            <div className="text-[#25D366] font-medium mb-8">One-time payment</div>

                            <button
                                onClick={() => setModalOpen(true)}
                                className="w-full py-4 bg-[#25D366] hover:bg-[#1db954] text-[#0A0F1E] font-bold text-xl rounded-xl transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-105 mb-4"
                            >
                                Download PDF Now
                            </button>

                            <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mt-4">
                                <Clock className="w-3 h-3" />
                                <span>Instant Download</span>
                            </div>

                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Payment Methods" className="h-6 mt-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Pricing;
