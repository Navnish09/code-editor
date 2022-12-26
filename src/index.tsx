import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { App } from "./App";
import "./styles/main.css";

const container = document.getElementById("root") as Element;

const root = createRoot(container);

root.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>
)