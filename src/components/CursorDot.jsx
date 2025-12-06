import { useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorDot() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 300, damping: 25, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 25, mass: 0.5 });

  // const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    function handleMove(e) {
      const { clientX, clientY } = e;
      x.set(clientX);
      y.set(clientY);

      // find all elements that trigger dark mode
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
      style={{
        position: "fixed",
        top: -10,
        left: -5,
        x: springX,
        y: springY,
        width: 10,
        height: 10,
        borderRadius: "999px",
        // background: isDark ? "#F0A202" : "#F2F2F2",
        background: textColor,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
