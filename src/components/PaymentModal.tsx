import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Loader } from 'lucide-react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    amount: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount }) => {
    const [loading, setLoading] = useState<string | null>(null);

    const handlePayment = (method: 'cashfree' | 'paypal') => {
        setLoading(method);
        // Simulate payment processing
        setTimeout(() => {
            setLoading(null);
            alert(`Redirecting to ${method === 'cashfree' ? 'Cashfree' : 'PayPal'}... (This is a demo)`);
            onClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <React.Fragment>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-[#1F2937] rounded-2xl border border-gray-700 shadow-2xl p-6"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-white">Secure Checkout</h3>
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="bg-[#0A0F1E] p-4 rounded-xl mb-6 flex justify-between items-center">
                            <div>
                                <div className="text-sm text-gray-400">Total Amount</div>
                                <div className="text-lg font-bold text-white">WhatsApp Automation Guide</div>
                            </div>
                            <div className="text-2xl font-bold text-[#25D366]">${amount}</div>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={() => handlePayment('cashfree')}
                                disabled={loading !== null}
                                className="w-full bg-[#1A1F2E] hover:bg-[#252b3d] border border-gray-700 p-4 rounded-xl flex items-center justify-between transition-all group disabled:opacity-50"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                                        <CreditCard className="text-orange-500 w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-white">Pay with Card / UPI</div>
                                        <div className="text-xs text-gray-400">Powered by Cashfree</div>
                                    </div>
                                </div>
                                {loading === 'cashfree' ? <Loader className="animate-spin text-white" /> : <div className="w-4 h-4 rounded-full border border-gray-600 group-hover:border-[#25D366]"></div>}
                            </button>

                            <button
                                onClick={() => handlePayment('paypal')}
                                disabled={loading !== null}
                                className="w-full bg-[#1A1F2E] hover:bg-[#252b3d] border border-gray-700 p-4 rounded-xl flex items-center justify-between transition-all group disabled:opacity-50"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                                        <span className="text-blue-500 font-bold italic">P</span>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-white">Pay with PayPal</div>
                                        <div className="text-xs text-gray-400">International Payments</div>
                                    </div>
                                </div>
                                {loading === 'paypal' ? <Loader className="animate-spin text-white" /> : <div className="w-4 h-4 rounded-full border border-gray-600 group-hover:border-[#25D366]"></div>}
                            </button>
                        </div>

                        <div className="mt-6 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                            <ShieldCheckIcon className="w-3 h-3" />
                            <span>256-bit SSL Encrypted Payment</span>
                        </div>
                    </motion.div>
                </React.Fragment>
            )}
        </AnimatePresence>
    );
};

const ShieldCheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

export default PaymentModal;
