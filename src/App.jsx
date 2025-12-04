import "./App.css";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const bg = useColorModeValue("#edede9", "#0A0A0A");
  const location = useLocation();

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
      <Box as="main" flex="1">
        <AnimatePresence initial={false} mode="wait">
          <Box
            as={motion.div}
            key={location.pathname}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Outlet />
          </Box>
        </AnimatePresence>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
