import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface DataSyncAnimationProps {
  className?: string;
  color?: string;
  dotSize?: number;
  maxDots?: number;
}

export default function DataSyncAnimation({
  className = '',
  color = '#3b82f6',
  dotSize = 4,
  maxDots = 40
}: DataSyncAnimationProps) {
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

    interface DataNode {
      x: number;
      y: number;
      size: number;
      alpha: number;
      pulsePhase: number;
      speed: number;
      direction: number; // 1 for left to right, -1 for right to left
    }

    // Create data nodes
    const nodes: DataNode[] = [];
    
    for (let i = 0; i < maxDots; i++) {
      const direction = Math.random() > 0.5 ? 1 : -1;
      nodes.push({
        x: direction === 1 ? 0 : canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * dotSize + 1,
        alpha: Math.random() * 0.5 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
        speed: Math.random() * 2 + 0.5,
        direction
      });
    }

    // Animation loop
    let animationId: number;
    
    const animateDataSync = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.speed * node.direction;
        
        // Reset nodes that move out of bounds
        if ((node.direction === 1 && node.x > canvas.width) || 
            (node.direction === -1 && node.x < 0)) {
          node.x = node.direction === 1 ? 0 : canvas.width;
          node.y = Math.random() * canvas.height;
        }
        
        // Pulsing effect
        node.pulsePhase += 0.05;
        const sizeFactor = 0.2 * Math.sin(node.pulsePhase) + 1;
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * sizeFactor, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(node.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Connect with nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          
          const dx = node2.x - node.x;
          const dy = node2.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            // Draw connection with opacity based on distance
            const lineOpacity = 0.02 + (1 - distance / 100) * 0.1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `${color}${Math.floor(lineOpacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animateDataSync);
    };

    animateDataSync();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [color, dotSize, maxDots]);

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