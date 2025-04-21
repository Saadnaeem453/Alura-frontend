// hooks/useScrollAnimation.js
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export function useScrollAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Changed to false for debugging
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  useEffect(() => {
    console.log('InView status:', inView); // Debug log
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Add this for debugging
    }
  }, [controls, inView]);

  return { ref, controls };
}