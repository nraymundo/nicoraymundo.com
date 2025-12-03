import "./App.css";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const bg = useColorModeValue("#edede9", "#0A0A0A");

  return (
    <Box bg={bg} width="100%" pt={5}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
