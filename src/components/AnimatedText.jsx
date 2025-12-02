import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

export default function AnimatedText({ delay = 0, text }) {
  const textIndex = useMotionValue(0);
  const baseText = text;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 7,
      ease: "easeIn",
      onUpdate() {
        textIndex.set(0);
        updatedThisRound.set(true);
      }
    });
  }, []);

  return (
    <motion.span
      variants={itemVariants}
    >
      <motion.span className="inline">
        {displayText}
      </motion.span>
    </motion.span>
  );
}
