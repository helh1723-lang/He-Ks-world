import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../app/globals.css";

const { default: Page } = window.location.pathname.replace(/\/+$/, "") === "/ramblings"
  ? await import("../app/ramblings/client-page")
  : await import("./App");

createRoot(document.getElementById("root")!).render(<StrictMode><Page /></StrictMode>);
