import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "@fontsource-variable/texturina";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import theme from "./theme";
import App from "./App.jsx";
import "./index.css";
import { Projects, About, PhotoJournal } from "./sections";
import { PhotoSetRoute, ProjectSetRoute } from "./routes";

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
      {
        path: "photo",
        element: (
          <React.Suspense fallback={<div>Loading photos…</div>}>
            <PhotoJournal />
          </React.Suspense>
        ),
      },
      {
        path: "photo/:slug",
        element: (
          <React.Suspense fallback={<div>Loading photos…</div>}>
            <PhotoSetRoute />
          </React.Suspense>
        ),
      },
      {
        path: "projects/:slug",
        element: (
          <React.Suspense fallback={<div>Loading photos…</div>}>
            <ProjectSetRoute />
          </React.Suspense>
        ),
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
