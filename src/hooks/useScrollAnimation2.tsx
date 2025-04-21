// hooks/useScrollAnimation.js
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export function useScrollAnimation2() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Keep false for debugging, can set to true later
    threshold: 0.2, // Increased from 0.1 for better trigger accuracy
    rootMargin: '-50px 0px -100px 0px', // Adjusted margins
  });

  useEffect(() => {
    console.log('InView status:', inView, 'Controls:', controls); // Enhanced debug log
    
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      });
    } else {
      controls.start({
        opacity: 0,
        y: 30,
        transition: {
          duration: 0.3
        }
      });
    }
  }, [controls, inView]);

  return { 
    ref, 
    controls,
    inView // Returning inView for additional debugging
  };
}