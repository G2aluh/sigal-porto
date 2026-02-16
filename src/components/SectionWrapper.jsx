import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionWrapper({ id, children, className = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section
            id={id}
            ref={ref}
            className={`relative w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 ${className}`}
        >
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </section>
    );
}
