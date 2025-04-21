import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({ 
  children, 
  className 
}: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-clip-text text-transparent',
        'bg-gradient-to-r from-[#b67dfd] via-[#ff87bb] to-[#ffd095]',
        className
      )}
    >
      {children}
    </span>
  );
}
