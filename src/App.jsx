import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Certification from "./components/Certification";
import ContactForm from './components/ContactForm';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFoud";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path='/privacy' element={<Privacy />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
      <ContactForm />
      <Certification />
      <Footer />
    </Router>
  );
}

export default App;