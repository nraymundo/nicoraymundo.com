import { useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorDot({ className }) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 1000, damping: 45, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 1000, damping: 45, mass: 0.25 });

  // const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    function handleMove(e) {
      const { clientX, clientY } = e;
      x.set(clientX);
      y.set(clientY);

      // const darkEls = document.querySelectorAll('[data-cursor="dark"]');

      // let insideDark = false;

      // darkEls.forEach((el) => {
      //   const rect = el.getBoundingClientRect();
      //   if (
      //     clientX >= rect.left &&
      //     clientX <= rect.right &&
      //     clientY >= rect.top &&
      //     clientY <= rect.bottom
      //   ) {
      //     insideDark = true;
      //   }
      // });

      // setIsDark(insideDark);
    }

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  const textColor = useColorModeValue("#252627", "#F2F2F2");

  return (
    <motion.div
      className={className}
      style={{
        position: "fixed",
        top: -10,
        left: -5,
        x: springX,
        y: springY,
        width: 10,
        height: 10,
        borderRadius: "100%",
        // background: isDark ? "#F0A202" : "#F2F2F2",
        background: textColor,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
