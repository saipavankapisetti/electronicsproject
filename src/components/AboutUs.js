import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaGraduationCap, FaAtom, FaMicrochip } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  const features = [
    {
      icon: FaRocket,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in electronics and quantum computing, creating projects that inspire the next generation."
    },
    {
      icon: FaUsers,
      title: "Student-Centered",
      description: "Every project is designed with students in mind, providing hands-on learning experiences that bridge theory and practice."
    },
    {
      icon: FaLightbulb,
      title: "Creative Solutions",
      description: "We believe in creative problem-solving and encourage students to think outside the box when tackling complex challenges."
    },
    {
      icon: FaGraduationCap,
      title: "Educational Excellence",
      description: "Our projects come with comprehensive documentation, tutorials, and support to ensure successful learning outcomes."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: FaAtom },
    { number: "10,000+", label: "Students Reached", icon: FaUsers },
    { number: "50+", label: "Universities", icon: FaGraduationCap },
    { number: "25+", label: "Countries", icon: FaRocket }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description: "Started as a small team of electronics enthusiasts with a vision to democratize quantum computing education."
    },
    {
      year: "2019",
      title: "First Quantum Kit",
      description: "Launched our first quantum computing educational kit, making complex concepts accessible to students."
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded to serve universities worldwide, partnering with leading educational institutions."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Integrated AI and machine learning components into our electronics projects for enhanced learning."
    },
    {
      year: "2024",
      title: "Quantum Leap",
      description: "Achieved breakthrough in quantum-classical hybrid systems, opening new possibilities for students."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About ElectroWorld</h2>
          <p className="section-subtitle">
            Empowering the next generation of innovators through cutting-edge electronics and quantum computing education
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="story-text">
              <h3>Our Mission</h3>
              <p>
                At ElectroWorld, we believe that the future belongs to those who understand both the quantum realm and classical electronics. 
                Our mission is to bridge the gap between theoretical knowledge and practical application, providing students with the tools 
                and projects they need to excel in the rapidly evolving world of technology.
              </p>
              <p>
                We specialize in creating educational electronics projects that range from basic Arduino circuits to advanced quantum 
                computing simulations. Each project is carefully crafted to provide a comprehensive learning experience that combines 
                hardware, software, and theoretical understanding.
              </p>
            </div>
            <div className="quantum-visualization">
              <div className="quantum-sphere">
                <div className="electron-orbit orbit-1">
                  <div className="electron"></div>
                </div>
                <div className="electron-orbit orbit-2">
                  <div className="electron"></div>
                </div>
                <div className="electron-orbit orbit-3">
                  <div className="electron"></div>
                </div>
                <div className="nucleus"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="features-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="stats-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Our Impact</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="timeline-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Our Journey</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="timeline-dot"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;