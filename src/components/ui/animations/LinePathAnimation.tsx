import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LinePathAnimationProps {
  className?: string;
  color?: string;
  width?: number;
  speed?: number;
}

export default function LinePathAnimation({
  className = '',
  color = '#3b82f6',
  width = 2,
  speed = 20
}: LinePathAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const parentRect = canvas.parentElement?.getBoundingClientRect();
      if (parentRect) {
        canvas.width = parentRect.width;
        canvas.height = parentRect.height;
      }
    };

    // Initial resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Line path parameters
    let points: { x: number; y: number; dx: number; dy: number }[] = [];
    const numPoints = 8;
    const pointDistance = 100;
    const friction = 0.9;
    const lineOpacity = 0.3;

    // Initialize points
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * speed / 10,
        dy: (Math.random() - 0.5) * speed / 10
      });
    }

    // Animation loop
    let animationId: number;
    
    const drawLines = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update point positions
      points.forEach(point => {
        point.x += point.dx;
        point.y += point.dy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) {
          point.dx *= -1;
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.dy *= -1;
        }

        // Apply friction
        point.dx *= friction;
        point.dy *= friction;

        // Add slight random movement
        point.dx += (Math.random() - 0.5) * 0.2;
        point.dy += (Math.random() - 0.5) * 0.2;

        // Keep speed in bounds
        const maxSpeed = speed / 10;
        const currentSpeed = Math.sqrt(point.dx * point.dx + point.dy * point.dy);
        if (currentSpeed > maxSpeed) {
          point.dx = (point.dx / currentSpeed) * maxSpeed;
          point.dy = (point.dy / currentSpeed) * maxSpeed;
        }
      });

      // Draw connections between points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const point1 = points[i];
          const point2 = points[j];
          
          const distance = Math.sqrt(
            Math.pow(point2.x - point1.x, 2) + 
            Math.pow(point2.y - point1.y, 2)
          );
          
          if (distance < pointDistance) {
            // Draw line with opacity based on distance
            const opacity = lineOpacity * (1 - distance / pointDistance);
            ctx.beginPath();
            ctx.moveTo(point1.x, point1.y);
            
            // Create slight curve in the line
            const midX = (point1.x + point2.x) / 2;
            const midY = (point1.y + point2.y) / 2 + (Math.random() - 0.5) * 20;
            ctx.quadraticCurveTo(midX, midY, point2.x, point2.y);
            
            ctx.strokeStyle = `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = width;
            ctx.stroke();
          }
        }
      }

      // Draw points
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, width, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(drawLines);
    };

    drawLines();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [color, width, speed]);

  return (
    <motion.div 
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </motion.div>
  );
}