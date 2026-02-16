import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const TRAIL_LENGTH = 18;
const TRAIL_INTERVAL = 16; // ~60fps sampling

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [trail, setTrail] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastPos = useRef({ x: -100, y: -100 });
    const animFrame = useRef(null);

    useEffect(() => {
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) {
            setIsVisible(false);
            return;
        }

        const handleMouseMove = (e) => {
            lastPos.current = { x: e.clientX, y: e.clientY };
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Sample trail at interval for smooth long tail
        const trailTimer = setInterval(() => {
            setTrail((prev) => {
                const next = [...prev, { x: lastPos.current.x, y: lastPos.current.y, id: Date.now() }];
                if (next.length > TRAIL_LENGTH) next.shift();
                return next;
            });
        }, TRAIL_INTERVAL);

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.closest('[data-cursor-hover]')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.closest('[data-cursor-hover]')
            ) {
                setIsHovering(false);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            clearInterval(trailTimer);
            if (animFrame.current) cancelAnimationFrame(animFrame.current);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Trail particles */}
            {trail.map((point, i) => {
                const progress = i / TRAIL_LENGTH;
                const size = 2 + progress * (isHovering ? 6 : 4);
                const opacity = progress * 0.7;
                return (
                    <div
                        key={point.id}
                        className="fixed top-0 left-0 pointer-events-none z-[9998]"
                        style={{
                            transform: `translate(${point.x - size / 2}px, ${point.y - size / 2}px)`,
                            width: `${size}px`,
                            height: `${size}px`,
                            backgroundColor: '#FFD400',
                            opacity,
                            transition: 'opacity 0.15s ease-out',
                        }}
                    />
                );
            })}
        </>
    );
}
