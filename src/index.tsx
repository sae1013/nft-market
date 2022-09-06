import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import '../src/i18n'; 
import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {BrowserRouter} from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container!);
const queryClient = new QueryClient()

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <App />
      </ThirdwebProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

reportWebVitals();