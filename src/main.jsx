import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Layouts/ErrorFallback.jsx";
import { ModalProvider } from "./Context/ModalContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
          }}
        >
          <ModalProvider>
            <App />
          </ModalProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
