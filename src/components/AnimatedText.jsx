import { chakra, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as ReactRouterLink } from "react-router-dom";

const MotionSpan = motion(chakra.span);
const MotionLink = motion(ChakraLink);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AnimatedHeadline({ text, link }) {
  const LINK_PLACEHOLDER = "LINK";

  const words = text.replace(link, LINK_PLACEHOLDER).split(" ");

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {words.map((word, i) => {
        const isLinkPlaceholder = word.startsWith(LINK_PLACEHOLDER);
        const tail = isLinkPlaceholder
          ? word.slice(LINK_PLACEHOLDER.length)
          : "";
        const hasPunctuation = /^[.,!?;:]+$/.test(tail);
        const isPunctuation = /^[.,!?;:]+$/.test(word);

        if (isLinkPlaceholder) {
          return (
            <>
              <MotionLink
                key={i}
                as={ReactRouterLink}
                to="/projects"
                _hover={{ textDecoration: "none", color: "#016FD0" }}
                _selection={{ color: "#016FD0" }}
                variants={wordVariant}
                style={{
                  display: "inline-block",
                  marginRight: hasPunctuation ? 0 : "0.3em",
                }}
                textStyle="secondary"
                fontWeight={700}
              >
                {link}
              </MotionLink>

              {hasPunctuation && (
                <MotionSpan
                  variants={wordVariant}
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {tail}
                </MotionSpan>
              )}
            </>
          );
        }

        return (
          <MotionSpan
            key={i}
            variants={wordVariant}
            style={{
              display: "inline-block",
              marginRight: isPunctuation ? 0 : "0.3em",
            }}
          >
            {word}
          </MotionSpan>
        );
      })}
    </motion.div>
  );
}
