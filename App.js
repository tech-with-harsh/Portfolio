import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";


export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}