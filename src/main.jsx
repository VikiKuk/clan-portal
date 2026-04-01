import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.jsx";
import { I18nProvider } from "./shared/i18n/I18nProvider.jsx";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nProvider> 
        <App />
    </I18nProvider>
  </React.StrictMode>
);