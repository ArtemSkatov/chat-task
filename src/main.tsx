import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WithRouterProvider } from "./app/styles/WithRouterProvider/WithRouterProvider";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WithRouterProvider />
  </StrictMode>
);
