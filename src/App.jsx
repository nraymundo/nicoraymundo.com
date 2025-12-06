import { useLayoutEffect, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import CursorDot from "./components/CursorDot";

const DELAY_MS = 500;

function App() {
  const bg = useColorModeValue("#F2F2F2", "#0A0A0A");
  const location = useLocation();
  const [showOutlet, setShowOutlet] = useState(true);

  useEffect(() => {
    setShowOutlet(false);

    const timeout = setTimeout(() => {
      setShowOutlet(true);
    }, DELAY_MS);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [location.pathname]);

  return (
    <Box
      bg={bg}
      width="100%"
      minH="100vh"
      pt={5}
      display="flex"
      flexDirection="column"
    >
      <Header />
      <CursorDot />
      <Box as="main" flex="1">
        {/* <Outlet /> */}
        {showOutlet ? <Outlet /> : null}
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box>
              <Outlet />
            </Box>
          </motion.div>
        </AnimatePresence> */}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
