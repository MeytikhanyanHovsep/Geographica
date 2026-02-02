import React, { useRef, useEffect } from "react";

interface GridProps {
    gap?: number;
    mouseRadius?: number;
    lineColor?: string;
}

const InteractiveGrid: React.FC<GridProps> = ({
    gap = 40,
    mouseRadius = 200,
    lineColor = "rgba(100, 150, 255, 0.1)",
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouse = useRef({ x: -1000, y: -1000 });
    const radiusSq = mouseRadius * mouseRadius;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.beginPath();

            for (let x = 0; x <= canvas.width; x += gap) {
                for (let y = 0; y <= canvas.height; y += 20) {
                    const dx = x - mouse.current.x;
                    const dy = y - mouse.current.y;
                    const distSq = dx * dx + dy * dy;

                    let offsetX = 0;
                    if (distSq < radiusSq) {
                        const dist = Math.sqrt(distSq);
                        const force = (mouseRadius - dist) / mouseRadius;
                        offsetX = dx * force * 0.4;
                    }

                    if (y === 0) ctx.moveTo(x + offsetX, y);
                    else ctx.lineTo(x + offsetX, y);
                }
            }

            for (let y = 0; y <= canvas.height; y += gap) {
                for (let x = 0; x <= canvas.width; x += 20) {
                    const dx = x - mouse.current.x;
                    const dy = y - mouse.current.y;
                    const distSq = dx * dx + dy * dy;

                    let offsetY = 0;
                    if (distSq < radiusSq) {
                        const dist = Math.sqrt(distSq);
                        const force = (mouseRadius - dist) / mouseRadius;
                        offsetY = dy * force * 0.4;
                    }

                    if (x === 0) ctx.moveTo(x, y + offsetY);
                    else ctx.lineTo(x, y + offsetY);
                }
            }
            ctx.stroke();

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gap, mouseRadius, lineColor, radiusSq]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, black 40%)",
                maskImage: "linear-gradient(to top, transparent 0%, black 40%)",
            }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
    );
};

export default InteractiveGrid;
