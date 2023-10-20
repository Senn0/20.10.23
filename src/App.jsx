import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {useRoutes } from "react-router-dom";
import Documentation from "./Documentation";

function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <>Главная</>,
    },
    {
      path: "/documentation",
      element: <Documentation />,
    },
  ]);
  return router;
}

export default App;
