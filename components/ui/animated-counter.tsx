'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ 
  from, 
  to, 
  duration = 2, 
  suffix = '', 
  className 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const increment = (to - from) / (duration * 60); // 60 FPS
    const timer = setInterval(() => {
      setCount(prevCount => {
        const nextCount = prevCount + increment;
        if (nextCount >= to) {
          clearInterval(timer);
          return to;
        }
        return nextCount;
      });
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {Math.floor(count)}{suffix}
    </span>
  );
}