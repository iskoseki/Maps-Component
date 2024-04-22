import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("sedes-react-component")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
