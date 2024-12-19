import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import './styles.css'; // Import the global CSS file

const App = () => (
  <Router>
    <div className="container"> {/* Main wrapper container */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  </Router>
);

export default App;