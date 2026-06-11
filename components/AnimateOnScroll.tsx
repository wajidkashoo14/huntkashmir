"use client";

import { motion, type Variant } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants: Record<Direction, { hidden: Variant; visible: Variant }> = {
  up:    { hidden: { opacity: 0, y: 48 },   visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -48 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -56 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 56 },   visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } },
  fade:  { hidden: { opacity: 0 },           visible: { opacity: 1 } },
};

export default function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: variants[direction].hidden,
        visible: {
          ...variants[direction].visible,
          transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container — wraps a list and staggers children */
interface StaggerProps {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  stagger = 0.1,
  delay = 0,
  className = "",
  once = true,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Single stagger child — use inside StaggerContainer */
export function StaggerChild({
  children,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: variants[direction].hidden,
        visible: {
          ...variants[direction].visible,
          transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
