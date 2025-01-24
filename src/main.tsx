import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WithRouterProvider } from "./app/styles/WithRouterProvider/WithRouterProvider";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WithRouterProvider />
    </QueryClientProvider>
  </StrictMode>
);
