import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/styles.css";

const rootEl = document.querySelector("#root");
if (rootEl === null) throw new Error("Can not find root element");
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
