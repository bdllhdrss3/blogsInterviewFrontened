import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Blog from "./Blog";
import OptinMessage from "./components/OptIn";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <OptinMessage />
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blogs/:id" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
