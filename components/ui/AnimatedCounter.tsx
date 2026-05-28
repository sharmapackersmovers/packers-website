"use client";

import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
  delay = 0,
}: AnimatedCounterProps) {
  const { count, ref } = useCounterAnimation({ end, duration, delay });

  return (
    <div ref={ref}>
      <span>
        {count.toLocaleString("en-IN")}
        {suffix}
      </span>
    </div>
  );
}
