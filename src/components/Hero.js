import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaMicrochip, FaAtom } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const floatingElements = [
    { icon: FaRocket, delay: 0, x: 100, y: 50 },
    { icon: FaMicrochip, delay: 1, x: -80, y: 100 },
    { icon: FaAtom, delay: 2, x: 120, y: -30 },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="quantum-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Welcome to the
              <span className="gradient-text"> Electronics Universe</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Dive into the fascinating world of quantum computing, advanced electronics, 
              and cutting-edge technology. Perfect for students ready to explore the future.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#projects" className="btn btn-primary">
                Explore Projects
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Universities</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="quantum-circuit">
              <div className="circuit-board">
                <div className="circuit-line horizontal line-1"></div>
                <div className="circuit-line horizontal line-2"></div>
                <div className="circuit-line vertical line-3"></div>
                <div className="circuit-line vertical line-4"></div>
                
                <div className="quantum-gate gate-1">
                  <div className="gate-pulse"></div>
                </div>
                <div className="quantum-gate gate-2">
                  <div className="gate-pulse"></div>
                </div>
                <div className="quantum-gate gate-3">
                  <div className="gate-pulse"></div>
                </div>
              </div>
            </div>

            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                className="floating-icon"
                style={{ left: element.x, top: element.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: element.delay, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <element.icon />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;