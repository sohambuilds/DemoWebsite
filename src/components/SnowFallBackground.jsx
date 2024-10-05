import React, { useEffect, useRef } from 'react';

const SnowfallBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = 500; // Limit height to top section
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Snowflake class
        class Snowflake {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 + 0.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.y > canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
            }
            draw() {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        // Create snowflake array
        let snowflakes = [];
        const createSnowflakes = (number) => {
            for (let i = 0; i < number; i++) {
                snowflakes.push(new Snowflake());
            }
        };
        createSnowflakes(100);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            snowflakes.forEach(snowflake => {
                snowflake.update();
                snowflake.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Clean up
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '500px',
                pointerEvents: 'none',
                zIndex: 10
            }}
        />
    );
};

export default SnowfallBackground;