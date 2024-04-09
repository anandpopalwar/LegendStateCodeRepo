import React from "react";
import ReactDOM from "react-dom/client";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import App from "./App.jsx";
import "./index.css";

// This makes React components automatically track get() calls to re-render
enableReactTracking({ auto: true });

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
