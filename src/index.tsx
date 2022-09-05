import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChainId = ChainId.Mainnet;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <ThirdwebProvider desiredChainId={activeChainId}>
      <App />
    </ThirdwebProvider>
);

reportWebVitals();
