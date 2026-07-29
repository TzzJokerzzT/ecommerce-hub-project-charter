import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";

const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -120 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 0 },
  },
  rotateIn: {
    hidden: { opacity: 0, scale: 0.9, rotate: -3 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  },
  flipUp: {
    hidden: { opacity: 0, rotateX: 25, y: 40 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  zoomBounce: {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
} as const;

export type AnimationType = keyof typeof animations;

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export default function AnimatedSection({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const variants: Variants = {
    hidden: animations[animation].hidden,
    visible: {
      ...animations[animation].visible,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ perspective: animation === "flipUp" ? 1000 : undefined }}
    >
      {children}
    </motion.div>
  );
}
