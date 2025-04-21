import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GradientText from '@/components/ui/GradientText';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  delay?: number;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText,
  delay = 0
}: PricingCardProps) {
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
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.5
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
      <div 
        className={`h-full cursor-pointer ${
          isPopular 
            ? 'border-2 border-primary-500 shadow-lg shadow-primary-500/20' 
            : 'border border-gray-800 group-hover:border-gray-700'
        } bg-secondary-800 rounded-xl transition duration-300 transform`}
      >
        {isPopular && (
          <div className="absolute -top-5 inset-x-0 flex justify-center">
            <span className="px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-[#ff87bb] to-[#ffd095]  text-white">
              Most Popular
            </span>
          </div>
        )}
        <div className="p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <div className="mt-4 flex justify-center">
              {isPopular ? (
                <GradientText className="text-5xl font-extrabold">{price}</GradientText>
              ) : (
                <span className="text-5xl font-extrabold text-white">{price}</span>
              )}
              <span className="ml-1 text-xl font-medium text-gray-400 self-end">/month</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">{description}</p>
          </div>
          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0" />
                <p className="ml-3 text-base text-gray-300 text-left">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              className={`w-full py-6 rounded-md shadow text-center ${
                isPopular
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 hover:shadow-lg shadow-primary-500/20'
                  : 'bg-secondary-700 hover:bg-secondary-600'
              } transition-all`}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
