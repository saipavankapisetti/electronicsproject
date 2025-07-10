import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Quantum Circuit Simulator",
      description: "Interactive quantum computing simulator with visual circuit builder and real-time quantum state visualization.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      category: "Quantum Computing",
      technologies: ["Python", "Qiskit", "React", "WebGL"],
      price: "$299",
      rating: 4.9,
      github: "https://github.com/quantum-sim",
      demo: "https://quantum-sim-demo.com",
      difficulty: "Advanced"
    },
    {
      id: 2,
      title: "Arduino IoT Weather Station",
      description: "Complete weather monitoring system with sensors, data logging, and real-time web dashboard.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      category: "IoT & Sensors",
      technologies: ["Arduino", "ESP32", "Node.js", "MongoDB"],
      price: "$149",
      rating: 4.7,
      github: "https://github.com/weather-station",
      demo: "https://weather-station-demo.com",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Neural Network FPGA Accelerator",
      description: "Hardware acceleration for deep learning using FPGA with custom neural network architectures.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      category: "AI Hardware",
      technologies: ["VHDL", "Vivado", "Python", "TensorFlow"],
      price: "$499",
      rating: 4.8,
      github: "https://github.com/fpga-nn",
      demo: "https://fpga-nn-demo.com",
      difficulty: "Expert"
    },
    {
      id: 4,
      title: "Robotic Arm Control System",
      description: "6-DOF robotic arm with computer vision, inverse kinematics, and autonomous object manipulation.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      category: "Robotics",
      technologies: ["ROS", "OpenCV", "C++", "Gazebo"],
      price: "$399",
      rating: 4.6,
      github: "https://github.com/robotic-arm",
      demo: "https://robotic-arm-demo.com",
      difficulty: "Advanced"
    },
    {
      id: 5,
      title: "Blockchain IoT Security",
      description: "Secure IoT device communication using blockchain technology and smart contracts.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      category: "Blockchain & Security",
      technologies: ["Solidity", "Web3.js", "Raspberry Pi", "MQTT"],
      price: "$349",
      rating: 4.5,
      github: "https://github.com/blockchain-iot",
      demo: "https://blockchain-iot-demo.com",
      difficulty: "Advanced"
    },
    {
      id: 6,
      title: "Smart Home Automation Hub",
      description: "Complete home automation system with voice control, mobile app, and energy monitoring.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=250&fit=crop",
      category: "Home Automation",
      technologies: ["Raspberry Pi", "React Native", "MQTT", "Alexa SDK"],
      price: "$249",
      rating: 4.4,
      github: "https://github.com/smart-home",
      demo: "https://smart-home-demo.com",
      difficulty: "Intermediate"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 3 : prevIndex - 1
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return '#10b981';
      case 'Intermediate': return '#f59e0b';
      case 'Advanced': return '#ef4444';
      case 'Expert': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore our cutting-edge electronics and quantum computing projects designed for the next generation of innovators
          </p>
        </motion.div>

        <div className="projects-carousel">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <FaArrowLeft />
          </button>

          <div className="projects-container">
            <motion.div
              className="projects-track"
              animate={{ x: -currentIndex * 33.333 + '%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.github} className="project-link">
                          <FaGithub />
                        </a>
                        <a href={project.demo} className="project-link">
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <span className="project-category">{project.category}</span>
                      <div className="project-rating">
                        <FaStar />
                        <span>{project.rating}</span>
                      </div>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-footer">
                      <div className="project-difficulty">
                        <span 
                          className="difficulty-badge"
                          style={{ backgroundColor: getDifficultyColor(project.difficulty) }}
                        >
                          {project.difficulty}
                        </span>
                      </div>
                      <div className="project-price">
                        <span className="price">{project.price}</span>
                        <button className="add-to-cart-btn">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: projects.length - 2 }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <motion.div
          className="view-all-projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="btn btn-primary">View All Projects</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;