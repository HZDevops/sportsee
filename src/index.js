import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HorizontalNavigation from "./components/HorizontalNavigation/HorizontalNavigation";
import VerticalNavigation from "./components/VerticalNavigation/VerticalNavigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <HorizontalNavigation />
      <VerticalNavigation />
      <Routes>
        <Route exact path="/" element={<Navigate to="/12" />} />
        <Route path="/:userId" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
