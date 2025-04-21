import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LinePathAnimation from './LinePathAnimation';
import PulseLineAnimation from './PulseLineAnimation';
import DataSyncAnimation from './DataSyncAnimation';
import ParticlesBackground from '../particles/ParticlesBackground';

interface AnimatedBackgroundProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  disableParticles?: boolean;
}

export default function AnimatedBackground({
  className = '',
  primaryColor = '#3b82f6',
  secondaryColor = '#8b5cf6',
  accentColor = '#06b6d4',
  disableParticles = false
}: AnimatedBackgroundProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div 
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Line path animation (connecting dots with lines) */}
      <LinePathAnimation 
        color="#7B5FFA" 
        className="opacity-20"
        width={1}
        speed={8}
      />
      
      {/* Pulse line animation (flowing energy lines) */}
      <PulseLineAnimation
        color="#9D5CFF"
        className="opacity-15"
        pulseSpeed={0.8}
        lineWidth={1}
      />
      
      {/* Data sync animation (dots moving across screen) */}
      <DataSyncAnimation
        color="#6366F1"
        className="opacity-20"
        dotSize={2}
        maxDots={20}
      />
      
      {/* Particles background (if enabled) */}
      {!disableParticles && (
        <ParticlesBackground />
      )}
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/50"></div>
    </motion.div>
  );
}