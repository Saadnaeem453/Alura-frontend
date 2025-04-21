import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import GradientText from '@/components/ui/GradientText';
import StatsCard from '@/components/ui/StatsCard';
import { stats } from '@/data/stats';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedBackground from '@/components/ui/animations/AnimatedBackground';

export default function HeroSection() {
  const { ref, controls } = useScrollAnimation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pb-24 lg:pt-40">
      {/* Animated background */}
      <div className="absolute inset-0 z-[-1]">
        <AnimatedBackground 
          primaryColor="#3b82f6" 
          secondaryColor="#8b5cf6" 
          accentColor="#06b6d4"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#7B5FFA,transparent_70%)] opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-secondary-900 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Announcement badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-500/10 text-primary-400"
          >
            Announcing our calling Agent
          </motion.div>

          {/* Main heading */}
          <motion.h1 
  variants={itemVariants} 
  className="text-6xl tracking-wide antialiased font-sans font-bold sm:text-5xl lg:text-6xl 
             bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
>
  Let AI Be
</motion.h1>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl  antialiased  font-bold sm:text-5xl lg:text-7xl text-white"
          >
            <GradientText className="block my-2 pb-2 font-sans tracking-wide"> Your Sales Voice agent</GradientText>
            <span className="block font-inter mt-2 text-lg font-normal text-gray-300">
            From cold leads to closed deals
            </span>
          </motion.h1>

       
          <motion.div 
  variants={itemVariants}
  className="mt-8"
>
  <Button radius="lg"
    className="px-8 py- text-lg rounded-full font-medium bg-gradient-to-r  from-pink-500 to-orange-400 hover:from-primary-600 hover:to-purple-600
              text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 "
  >
     Want to Start
    <svg 
      className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </Button>
</motion.div>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-24 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <StatsCard 
              key={stat.id}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              gradient={stat.gradient}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}