"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

export default function ClientMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
