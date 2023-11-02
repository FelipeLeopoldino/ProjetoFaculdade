import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  rootElement
);
