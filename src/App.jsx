import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import About from "./componants/About";
import Projects from "./componants/Projects";
import PortfolioTestimonials from "./componants/Testimonials";
import Experience from "./componants/Experience";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";
import Skills from "./componants/Skills";
import LoginPage from "./componants/admin/AdminLogin";
import AdminDashboard from "./componants/admin/AdminDashboard";
import CustomCursor from "./componants/CustomCursor";

const PortfolioPages = () => (
  <div className="bg-gradient-to-b from-[#0A0F1F] to-[#0F172A]">
    <CustomCursor />
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <PortfolioTestimonials />
    {/* <Skills /> */}
    <Experience />
    <Contact />
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPages />} />
      <Route path="/admin" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
