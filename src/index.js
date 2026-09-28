import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./resources/global.css";
import { ToastContainer, toast } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <ToastContainer />
  </div>,
);
