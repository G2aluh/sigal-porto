import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import { socialLinks } from '../data/content';

const links = [
    {
        label: 'Email',
        href: `mailto:${socialLinks.email}`,
        icon: HiMail,
        text: socialLinks.email,
    },
    {
        label: 'GitHub',
        href: socialLinks.github,
        icon: FaGithub,
        text: 'github.com/G2aluh',
    },
    {
        label: 'LinkedIn',
        href: socialLinks.linkedin,
        icon: FaLinkedin,
        text: 'linkedin.com/in/galuh-saputra',
    },
    {
        label: 'Instagram',
        href: socialLinks.instagram,
        icon: FaInstagram,
        text: 'instagram.com/2.shinnra',
    },
];

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-12">
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-yellow-400" />
                    <div className="w-2 h-2 bg-yellow-400" />
                    <div className="w-2 h-2 bg-yellow-400" />
                </div>
                <h2 className="font-pixel text-lg sm:text-xl text-yellow-400">CONTACT</h2>
                <div className="flex-1 h-px bg-dark-600" />
            </div>

            <div className="max-w-xl">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                    Have a project idea, want to collaborate, or just say hello?
                    I&apos;m always open to new opportunities and conversations.
                </p>

                {/* Contact links */}
                <div className="space-y-3">
                    {links.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.label !== 'Email' ? '_blank' : undefined}
                            rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                            className="group flex items-center gap-4 border border-dark-600 hover:border-yellow-400/40 p-4 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            whileHover={{ x: 4 }}
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-dark-700 group-hover:bg-yellow-400/10 transition-colors">
                                <link.icon className="text-yellow-400" size={20} />
                            </div>
                            <div>
                                <div className="font-pixel text-[10px] text-gray-500 mb-0.5">{link.label.toUpperCase()}</div>
                                <div className="text-gray-300 text-sm group-hover:text-yellow-400 transition-colors">{link.text}</div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-20 pt-8 border-t border-dark-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-pixel text-[10px] text-gray-600">
                    © 2026 SHINRA.DEV
                </p>
                <div className="flex gap-1">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-dark-600" />
                    ))}
                </div>
                <p className="text-[11px] text-gray-600">
                    Built with React + Tailwind + Framer Motion
                </p>
            </div>
        </SectionWrapper>
    );
}
