import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { MyInput } from "./shared/ui/MyInput/MyInput";
import { MyButton } from "./shared/ui/MyButton/MyButton";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyInput />
    <MyButton>start</MyButton>
  </StrictMode>
);
