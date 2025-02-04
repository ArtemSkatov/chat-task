import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WithRouterProvider } from "./app/styles/WithRouterProvider/WithRouterProvider";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store, { persistor } from "./app/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient({});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <WithRouterProvider />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
