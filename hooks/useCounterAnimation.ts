"use client";

import { useState, useEffect, useRef } from "react";

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
}

export function useCounterAnimation({
  end,
  duration = 2000,
  start = 0,
  delay = 0,
}: UseCounterAnimationOptions) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = ref.current;
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const step = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(start + (end - start) * eased));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timer);
  }, [hasStarted, end, start, duration, delay]);

  return { count, ref };
}
