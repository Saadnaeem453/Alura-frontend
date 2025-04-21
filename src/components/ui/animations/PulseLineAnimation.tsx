import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PulseLineAnimationProps {
  className?: string;
  color?: string;
  pulseSpeed?: number;
  lineWidth?: number;
}

export default function PulseLineAnimation({
  className = '',
  color = '#3b82f6',
  pulseSpeed = 2,
  lineWidth = 2,
}: PulseLineAnimationProps) {
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

    // Define pulse lines
    interface PulseLine {
      points: { x: number; y: number }[];
      progress: number;
      speed: number;
      width: number;
      alpha: number;
      color: string;
    }

    // Create pulse lines
    const lines: PulseLine[] = [];
    const numLines = 5;
    
    for (let i = 0; i < numLines; i++) {
      // Create a path with varying number of points
      const numPoints = Math.floor(Math.random() * 4) + 3;
      const points: { x: number; y: number }[] = [];
      
      // First point always starts from the left side
      points.push({
        x: 0,
        y: Math.random() * canvas.height * 0.8 + canvas.height * 0.1
      });
      
      // Middle points
      for (let j = 1; j < numPoints - 1; j++) {
        points.push({
          x: (canvas.width * j) / (numPoints - 1),
          y: Math.random() * canvas.height * 0.8 + canvas.height * 0.1
        });
      }
      
      // Last point always ends at the right side
      points.push({
        x: canvas.width,
        y: Math.random() * canvas.height * 0.8 + canvas.height * 0.1
      });
      
      // Add the pulse line
      lines.push({
        points,
        progress: Math.random(), // Random starting progress
        speed: (Math.random() * 0.5 + 0.5) * pulseSpeed / 100,
        width: Math.random() * lineWidth + 1,
        alpha: Math.random() * 0.7 + 0.3,
        color
      });
    }

    // Animation loop
    let animationId: number;
    
    const drawPulseLines = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each line
      lines.forEach(line => {
        // Update progress
        line.progress += line.speed;
        if (line.progress > 1) {
          line.progress = 0;
          
          // Randomize path after each cycle
          line.points.forEach((point, i) => {
            if (i > 0 && i < line.points.length - 1) {
              point.y = Math.random() * canvas.height * 0.8 + canvas.height * 0.1;
            }
          });
        }
        
        // Draw the pulse line
        drawPulsePath(ctx, line);
      });
      
      animationId = requestAnimationFrame(drawPulseLines);
    };
    
    // Function to draw a single pulse path
    const drawPulsePath = (ctx: CanvasRenderingContext2D, line: PulseLine) => {
      const { points, progress, width, alpha, color } = line;
      
      // We'll use a gradient to create the pulse effect
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      
      // Create a gradient based on the progress
      const pulseCenter = progress;
      const pulseWidth = 0.2; // Width of the pulse
      
      gradient.addColorStop(Math.max(0, pulseCenter - pulseWidth), `${color}00`);
      gradient.addColorStop(pulseCenter, `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(Math.min(1, pulseCenter + pulseWidth), `${color}00`);
      
      // Draw the curve using a spline approach
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      // Draw a smooth curve through all points
      for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];
        
        // Calculate control points for smooth curve
        const cp1x = current.x + (next.x - current.x) / 3;
        const cp1y = current.y;
        const cp2x = next.x - (next.x - current.x) / 3;
        const cp2y = next.y;
        
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, next.x, next.y);
      }
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
      
      // Draw small dots at each control point for extra effect
      points.forEach(point => {
        const dotSize = width / 3;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(alpha * 0.7 * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });
    };

    drawPulseLines();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [color, pulseSpeed, lineWidth]);

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