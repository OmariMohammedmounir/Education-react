import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import './App.css';
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import CourseList from "./components/CourseList";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={ <ProtectedRoute><CourseList /></ProtectedRoute>  }/>
        {/* Add more routes like Courses, About, Contact later */}
      </Routes>
    </Router>
  );
}

export default App;
