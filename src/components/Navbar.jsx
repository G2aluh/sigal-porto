import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Chat', href: '#chat' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-700">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
                {/* Logo */}
                <a
                    href="#home"
                    className="font-pixel text-yellow-400 text-xs sm:text-sm tracking-wider hover:text-yellow-500 transition-colors"
                >
                    sigal<span className="text-white">.jsx</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-gray-400 hover:text-yellow-400 transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-400 hover:text-yellow-400 transition-colors p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-dark-800 border-b border-dark-700"
                    >
                        <div className="flex flex-col py-4 px-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(false);
                                        const element = document.querySelector(link.href);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                            // Update URL hash manually without jumping
                                            window.history.pushState(null, '', link.href);
                                        }
                                    }}
                                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm py-2 block"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
