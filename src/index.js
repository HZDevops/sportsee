import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HorizontalNavigation from './components/HorizontalNavigation/HorizontalNavigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HorizontalNavigation />
      <Routes>
        <Route path="/"  />
        <Route path="/profil"  />
        <Route path="/reglage"  />
        <Route path="/communauté" />
      </Routes>
    </Router>
  </React.StrictMode>
);

