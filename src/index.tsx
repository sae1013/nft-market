import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import '../src/i18n'; 
import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {BrowserRouter} from 'react-router-dom';
const activeChainId = ChainId.Mainnet;

const container = document.getElementById("root");
const root = createRoot(container!);
const queryClient = new QueryClient()

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider desiredChainId={activeChainId}>
        <App />
      </ThirdwebProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

reportWebVitals();

//i18n 설치, 리액트쿼리 ,셀렉트, sanity      리덕스 , 