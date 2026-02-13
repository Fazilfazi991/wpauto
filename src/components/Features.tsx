import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Clock, Copy, BookOpen, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: <Code2 className="w-8 h-8 text-[#25D366]" />,
        title: "Zero Coding Required",
        description: "Our PDF guide shows you how to build workflows using N8n's visual drag-and-drop interface. No programming needed."
    },
    {
        icon: <Zap className="w-8 h-8 text-[#00A8FF]" />,
        title: "Visual Step-by-Step",
        description: "The guide includes detailed screenshots for every step. Follow along visually and you can't get lost."
    },
    {
        icon: <Clock className="w-8 h-8 text-[#FF3B7D]" />,
        title: "Ready in 30 Minutes",
        description: "Follow the PDF tutorial and set up your first automation in less time than a lunch break."
    },
    {
        icon: <Copy className="w-8 h-8 text-[#F59E0B]" />,
        title: "Copy-Paste Templates",
        description: "The guide includes ready-made N8n workflow templates. Just copy, paste, and customize them."
    },
    {
        icon: <BookOpen className="w-8 h-8 text-[#A855F7]" />,
        title: "Real-World Examples",
        description: "The PDF teaches you with practical use cases like auto-replies, lead capture, and notifications."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-[#10B981]" />,
        title: "Lifetime Updates",
        description: "When WhatsApp or N8n updates, we'll send you the updated PDF guide for free. Forever."
    }
];

const Features: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-[#0A0F1E] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#25D366] rounded-full mix-blend-multiply filter blur-[128px] opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Why You'll Love This Guide
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        We've stripped away the complexity so you can focus on results.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-[#25D366]/50 transition-colors group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#25D366] transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
