import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Blog from "./Blog";
import OptinMessage from "./components/OptIn";
import Subscribe from "./components/Subscribe";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <OptinMessage />
    <Subscribe />
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
serviceWorker.register();
