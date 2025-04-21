import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import GradientText from '@/components/ui/GradientText';
import PricingCard from '@/components/ui/PricingCard';
import { pricingPlans } from '@/data/pricing';
import { useScrollAnimation2 } from '@/hooks/useScrollAnimation2';

export default function PricingSection() {
  const { ref, controls } = useScrollAnimation2();

  return (
    <section 
      id="pricing" 
      className="py-16 sm:py-24 bg-[radial-gradient(ellipse_at_bottom_right,_#1e1d4b_20%,_#000_80%)] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(123,95,250,0.2)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.2)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] // Smooth easing function
          }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block my-6 rounded-full p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="rounded-full px-4 bg-[#04040a] py-1">
              <GradientText className="text-sm font-medium text-gray-300 tracking-wide uppercase">
                pricing
              </GradientText>
            </div>
          </motion.div>
          
          <motion.h2
            className="mt-1 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ 
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            Plans for businesses of <GradientText>all sizes</GradientText>
          </motion.h2>
          
          <motion.p
            className="max-w-3xl mt-5 mx-auto text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            Choose the perfect plan for your needs. All plans include unlimited agents and 24/7 support.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                buttonText={plan.buttonText}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px 0px 0px 0px" }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-300">
            Need a custom plan for your business?
          </p>
          <motion.a 
            href="#" 
            className="mt-4 inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact our sales team
            <ArrowRight className="ml-1 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}