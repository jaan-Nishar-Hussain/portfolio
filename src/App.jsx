import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";

import Projects from "./pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  
  {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;