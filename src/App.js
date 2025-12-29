import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./styles.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://cdn.jsdelivr.net/gh/hexagoncircle/pixel-canvas/pixel-canvas.js";
    document.body.appendChild(script);
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
