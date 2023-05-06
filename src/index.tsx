import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const queryCliente = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliente}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
