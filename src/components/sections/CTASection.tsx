import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useScrollAnimation2 } from '@/hooks/useScrollAnimation2';

export default function CTASection() {
  const { ref, controls } = useScrollAnimation2();

  return (
    <section className="py-16 sm:py-24 relative bg-[radial-gradient(ellipse_at_bottom_right,_#1e1d4b_20%,_#000_80%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600"></div>
          <div className="absolute inset-0 opacity-20 bg-pattern"></div>
          
          <div className="relative py-12 px-6 md:py-16 md:px-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                <span className="block">Ready to transform your</span>
                <span className="block">call center operations?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 text-lg leading-6 text-indigo-100"
              >
                Sign up for a 14-day free trial. No credit card required.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 lg:mt-0 lg:ml-8 flex flex-col sm:flex-row justify-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button className="px-8 py-6 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-100 transition-all shadow-lg">
                Get Started
              </Button>
              <Button variant="outline" className="px-8 py-6 text-base font-medium rounded-lg text-white bg-primary-800/40 backdrop-blur-sm hover:bg-primary-800/60 border-transparent transition-all">
                Schedule Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
