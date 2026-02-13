import React from 'react';
import { MessageCircle, Mail, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#05080F] py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl text-white">Auto<span className="text-[#25D366]">Mate</span></span>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Whatsapp Automation Guide. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms of Service</a>
                        <a href="#" className="hover:text-gray-300">Contact Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
