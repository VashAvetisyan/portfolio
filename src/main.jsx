import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import './style/_reset.scss'
import './style/main.scss'

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
