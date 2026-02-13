import React from 'react';
import { motion } from 'framer-motion';
import { Download, PlayCircle, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        icon: <Download className="w-8 h-8 text-[#0A0F1E]" />,
        title: "Purchase & Download",
        description: "Get instant access to the PDF guide and workflow files immediately after purchase."
    },
    {
        id: 2,
        icon: <PlayCircle className="w-8 h-8 text-[#0A0F1E]" />,
        title: "Follow the Visual Guide",
        description: "Open the PDF and follow the simple screenshots to set up your free N8n account."
    },
    {
        id: 3,
        icon: <Rocket className="w-8 h-8 text-[#0A0F1E]" />,
        title: "Launch Your Automation",
        description: "Import the templates, connect your WhatsApp, and watch the magic happen automatically."
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Three Steps to Freedom
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We've streamlined the entire process. No complex setups, no servers to manage.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mb-6 relative group">
                                    <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
                                    {step.icon}
                                    <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-[#25D366] font-bold text-4xl">
                                        {step.id}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
