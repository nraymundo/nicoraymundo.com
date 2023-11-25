import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'
import '@fontsource-variable/texturina';
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import Projects from './sections/Projects'
import About from './sections/About'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import 'dotenv/config'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
