"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

type Direction = "up" | "left" | "right" | "none";

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  amount = 0.2,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  amount?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const reduce = useReducedMotion();
  const off =
    direction === "up" ? { y: 14, x: 0 } :
    direction === "left" ? { x: 18, y: 0 } :
    direction === "right" ? { x: -18, y: 0 } :
    { x: 0, y: 0 };

  const variants: Variants = {
    hidden: { opacity: 0, ...off },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay } },
  };

  const MotionTag = motion[as as "div"];
  if (reduce) {
    const Tag = as as "div";
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export function RevealList({
  children,
  className,
  stagger = 0.08,
  amount = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  id?: string;
}) {
  const off =
    direction === "up" ? { y: 14 } :
    direction === "left" ? { x: 18 } :
    direction === "right" ? { x: -18 } :
    {};
  return (
    <motion.div
      id={id}
      className={className}
      variants={{
        hidden: { opacity: 0, ...off },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
