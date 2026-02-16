import { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let shootingStars = [];
        let particles = []; // For click splashes

        // Configuration
        const STAR_COUNT = 150; // Number of background stars
        const SHOOTING_STAR_INTERVAL = 200; // Frames between shooting stars approx

        class Star {
            constructor(width, height) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5; // Pixel art style blocks? Maybe just small squares
                this.opacity = Math.random();
                this.speed = Math.random() * 0.05;
            }

            update(width, height) {
                this.opacity += this.speed;
                if (this.opacity > 1 || this.opacity < 0) {
                    this.speed = -this.speed;
                }
            }

            draw(ctx) {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fillRect(this.x, this.y, this.size, this.size); // Square stars for pixel feel
            }
        }

        class ShootingStar {
            constructor(width, height) {
                this.x = Math.random() * width;
                this.y = Math.random() * height / 2; // Start in top half
                this.length = Math.random() * 80 + 20;
                this.speed = Math.random() * 10 + 5;
                this.angle = Math.PI / 4; // 45 degrees
                this.opacity = 1;
                this.active = true;
            }

            update() {
                this.x += this.speed * Math.cos(this.angle);
                this.y += this.speed * Math.sin(this.angle);
                this.length -= 0.5; // Shrink tail
                this.opacity -= 0.01;

                if (this.opacity <= 0 || this.length <= 0) {
                    this.active = false;
                }
            }

            draw(ctx) {
                if (!this.active) return;
                ctx.strokeStyle = `rgba(255, 212, 0, ${this.opacity})`; // Yellowish trail
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x - this.length * Math.cos(this.angle),
                    this.y - this.length * Math.sin(this.angle)
                );
                ctx.stroke();
            }
        }

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 8;
                this.vy = (Math.random() - 0.5) * 8;
                this.size = Math.random() * 4 + 2;
                this.color = Math.random() > 0.5 ? '#FFD400' : '#FFFFFF'; // Yellow or White
                this.life = 1.0;
                this.decay = Math.random() * 0.03 + 0.01;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
            }

            draw(ctx) {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = Math.max(0, this.life);
                ctx.fillRect(this.x, this.y, this.size, this.size);
                ctx.globalAlpha = 1.0;
            }
        }

        // Resize handler
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Re-init stars on resize
            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push(new Star(canvas.width, canvas.height));
            }
        };

        // Click handler for splash
        const handleClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Spawn particles
            for (let i = 0; i < 15; i++) {
                particles.push(new Particle(x, y));
            }
        };

        // Init
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('click', handleClick); // Global click listener on window might be better in App.jsx but here is fine if canvas covers all

        // Animation Loop
        let timer = 0;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Stars
            stars.forEach(star => {
                star.update(canvas.width, canvas.height);
                star.draw(ctx);
            });

            // Handle Shooting Stars
            if (timer % SHOOTING_STAR_INTERVAL === 0 && Math.random() > 0.5) {
                shootingStars.push(new ShootingStar(canvas.width, canvas.height));
            }
            timer++;

            shootingStars.forEach((star, index) => {
                star.update();
                star.draw(ctx);
                if (!star.active) shootingStars.splice(index, 1);
            });

            // Handle Particles (Splash)
            particles.forEach((p, index) => {
                p.update();
                p.draw(ctx);
                if (p.life <= 0) particles.splice(index, 1);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleClick); // Removing listener
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        // z-0 to be behind content, but content needs to be higher. 
        // Actually, if we put this in App.jsx before other content, and other content has relative/z-index, it should work.
        // But we want clicks to pass through? 
        // If we want clicks on the canvas (empty space), we need it to accept pointer events?
        // But if it covers everything, it will block clicks on buttons if z-index is high.
        // If z-index is low (behind), clicks on empty space will hit body/html and bubble or just nothing.
        // We attached 'click' listener to `window`, so it captures clicks anywhere.
        />
    );
}
