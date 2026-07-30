"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      className="section-dark hero-section pt-[var(--space-16)] pb-[10rem] px-[var(--space-3)] min-[480px]:px-[var(--space-4)]"
    >
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="block mb-[var(--space-6)]"
            variants={itemVariants}
          >
            <ProjectImage
              id="logo"
              width={40}
              height={40}
              className="hero-logo object-contain"
            />
          </motion.div>
          <motion.h1
            className="font-[family-name:var(--font-display)] text-[var(--text-3xl)] md:text-[var(--text-4xl)] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--color-text)] [overflow-wrap:anywhere] min-w-0 mb-[var(--space-3)]"
            variants={itemVariants}
          >
            Cog & Chain
          </motion.h1>
          <motion.p
            className="font-[family-name:var(--font-body)] text-[var(--text-lg)] font-normal leading-[1.4] text-[var(--color-accent)] mb-[var(--space-6)]"
            variants={itemVariants}
          >
            Your bike, fixed right.
          </motion.p>
          <motion.a
            href="tel:5550124"
            className="font-[family-name:var(--font-body)] text-[var(--text-base)] font-semibold text-[var(--color-text)] underline underline-offset-[3px] whitespace-nowrap hover:text-[var(--color-accent)] active:text-[var(--color-accent)]/80 transition-colors duration-150 [transition-timing-function:var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2"
            variants={itemVariants}
          >
            555.0124
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
