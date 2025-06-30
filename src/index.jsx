import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Screens } from "./screens/Screens";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Screens />
  </StrictMode>,
);