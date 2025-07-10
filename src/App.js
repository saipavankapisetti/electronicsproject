import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Login from './components/Login';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
              <AboutUs />
              <Testimonials />
              <ContactUs />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/projects" element={<Footer />} />
          <Route path="/about" element={<Footer />} />
          <Route path="/testimonials" element={<Footer />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;