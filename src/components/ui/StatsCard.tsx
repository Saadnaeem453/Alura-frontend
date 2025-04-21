import { motion } from 'framer-motion';

interface StatsCardProps {
  title: string;
  value: string;
  gradient?:string
  description?: string;
  delay?: number;
}

const StatsCard = ({ title, value, description, delay = 0 }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative w-full h-48 rounded-xl overflow-hidden"
    >
      <motion.div
        className="absolute w-2 h-2  rounded-full border  bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 z-10 shadow-[0_0_10px_#ffffff]"
        animate={{
          top: ['10%', '10%', '90%', '90%', '10%'],
          right: ['10%', '90%', '90%', '10%', '10%'],
        }}
        
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />

      {/* Card content */}
      <div className="h-full flex flex-col items-center justify-center p-16">
        <div className="text-white text-4xl font-bold mb-2">{value}</div>
        <div className="text-gray-300 text-lg">{title}</div>
        {description && (
          <div className="text-gray-400 text-sm mt-2">{description}</div>
        )}
      </div>
    </motion.div>
  );
};

export default StatsCard;