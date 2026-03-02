import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { Providers } from "./app/providers";
import { GlobalStyle } from "./styles/globalStyles";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <GlobalStyle />
    <App />
  </Providers>,
);
