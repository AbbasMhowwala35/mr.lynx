import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard2 from "./components/ProfileCard/ProfileCard2";

const AppContent = () => {
  const location = useLocation();
  const showSidebar = location.pathname !== '/profile-card';

  return (
    <div className="app-container">
      {showSidebar && <Sidebar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/profile-card" element={<ProfileCard />} />
          <Route path="/profile-card-2" element={<ProfileCard2 />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
