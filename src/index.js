import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HorizontalNavigation from "./components/HorizontalNavigation/HorizontalNavigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error404 from "./pages/Error404/Error404";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <HorizontalNavigation />
      <Routes>
        <Route exact path="/" element={<Navigate to="/12" />} />
        <Route path="/:userId" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
