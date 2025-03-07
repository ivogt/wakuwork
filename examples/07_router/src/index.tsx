import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wakuwork/router/client";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);
