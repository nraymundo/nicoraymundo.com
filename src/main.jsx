import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import theme from "./theme";
import "@fontsource-variable/texturina";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import Projects from "./sections/Projects";
import About from "./sections/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MotionConfig reducedMotion="never">
        <RouterProvider router={router} />
      </MotionConfig>
    </ChakraProvider>
  </React.StrictMode>
);
