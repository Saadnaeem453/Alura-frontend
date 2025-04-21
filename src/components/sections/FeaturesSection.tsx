import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';
import FeatureCard from '@/components/ui/FeatureCard';
import { features } from '@/data/features';
import { useScrollAnimation2 } from '@/hooks/useScrollAnimation2';

export default function FeaturesSection() {
  const { ref, controls } = useScrollAnimation2();

  return (
    <section
      id="features"
      className="py-16 sm:py-24 bg-[radial-gradient(ellipse_at_bottom_right,_#1e1d4b_20%,_#000_80%)] relative"
    >
      {/* Subtle blue glow on the right */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with animation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-block my-6 rounded-full p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
            <div className="rounded-full px-4 bg-[#030308] py-1">
              <GradientText className="text-sm font-medium text-gray-400 tracking-wide uppercase">
                Features
              </GradientText>
            </div>
          </div>
          <p className="mt-1 text-3xl font-bold font-sans bg-gradient-to-r from-white via-[#e5e5e5] to-[#cccccc] bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
            Everything you need for <GradientText>perfect calls</GradientText>
          </p>
          <p className="max-w-3xl mt-5 mx-auto font-inter text-lg text-gray-400">
            Our platform combines powerful features with an intuitive interface to help you manage your call center operations efficiently.
          </p>
        </motion.div>

        {/* Feature Cards with scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.05}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
