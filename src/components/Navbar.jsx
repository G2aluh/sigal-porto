import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiUser } from 'react-icons/hi';
import ProfileModal from './ProfileModal';

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
    const [activeSection, setActiveSection] = useState('home');
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break; // Found the current section
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href, isMobile = false) => {
        e.preventDefault();

        if (isMobile) {
            setIsOpen(false);
        }

        // Calculate target position with offset for fixed header
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const navHeight = 80; // Approximate height of navbar + padding
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navHeight;

            // Proper smooth scrolling logic
            // Add delay for mobile to allow menu closing animation
            if (isMobile) {
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    window.history.pushState(null, '', href);
                }, 350);
            } else {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                window.history.pushState(null, '', href);
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-700">
            <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="font-pixel text-yellow-400 text-xs sm:text-sm tracking-wider hover:text-yellow-500 transition-colors"
                >
                    sigal<span className="text-white">.jsx</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Profile Button */}
                    <button
                        onClick={() => setIsProfileOpen(true)}
                        className="bg-dark-800 hover:bg-yellow-400 text-yellow-400 hover:text-dark-900 p-2 border border-dark-600 hover:border-yellow-400 transition-all duration-300 group"
                        aria-label="Profile"
                    >
                        <HiUser size={18} />
                    </button>

                    <div className="flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`
                                        relative px-4 py-2 text-[10px] font-pixel tracking-widest transition-all duration-100
                                        ${isActive ? 'text-dark-900 translate-y-1 translate-x-1' : 'text-gray-400 hover:text-yellow-400'}
                                    `}
                                >
                                    {/* Active Background (Pixel Style) */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 border-2 border-white  bg-yellow-400 -z-10"
                                            style={{
                                                boxShadow: '2px 2px 0 0 #000, -2px -2px 0 0 #fff'
                                            }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.1 }}
                                        />
                                    )}

                                    <span className="relative z-10">
                                        {link.label}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile hamburger */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={() => setIsProfileOpen(true)}
                        className="bg-dark-800 hover:bg-yellow-400 text-yellow-400 hover:text-dark-900 p-2 border border-dark-600 hover:border-yellow-400 transition-all duration-300 group"
                        aria-label="Profile"
                    >
                        <HiUser size={18} />
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-400 hover:text-yellow-400 transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-dark-800 border-b-4 border-dark-600"
                    >
                        <div className="flex flex-col py-4 px-6 gap-3">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href, true)}
                                        className={`
                                            relative block px-4 py-3 text-[10px] font-pixel tracking-widest transition-all
                                            ${isActive
                                                ? 'text-dark-900 bg-yellow-400 pixel-btn-yellow shadow-[4px_4px_0_0_#000]'
                                                : 'text-gray-400 hover:text-yellow-400 border border-transparent hover:border-yellow-400 border-dashed'}
                                        `}
                                    >
                                        {link.label}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
