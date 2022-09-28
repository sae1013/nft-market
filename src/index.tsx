import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/i18n";
import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import GlobalTheme from "./styles/index";

const container = document.getElementById("root");
const root = createRoot(container!);
const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <ThemeProvider theme={GlobalTheme}>
          <App />
        </ThemeProvider>
      </ThirdwebProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </BrowserRouter>
);

reportWebVitals();
