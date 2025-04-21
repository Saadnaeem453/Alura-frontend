import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: FeatureCardProps) {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      className="relative group"
    >
      <div className=" cursor-pointer rounded-xl p-6 h-full border border-gray-800 hover:border-primary-500/50 transition-all duration-300">
        <div className="absolute -inset-px bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
        <div>
          <div className="inline-flex items-center justify-center rounded-md bg-primary-500/10 p-3 text-primary-500">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
