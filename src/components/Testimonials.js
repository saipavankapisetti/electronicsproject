import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      position: "Professor of Quantum Physics",
      university: "MIT",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "ElectroWorld's quantum computing projects have revolutionized how we teach complex quantum concepts. My students are now building actual quantum circuits instead of just studying theory.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/sarahchen",
      project: "Quantum Circuit Simulator"
    },
    {
      id: 2,
      name: "Prof. Michael Rodriguez",
      position: "Head of Electronics Engineering",
      university: "Stanford University",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The IoT projects from ElectroWorld bridge the gap between academic learning and industry requirements. Our graduates are job-ready thanks to these hands-on experiences.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/michaelrodriguez",
      project: "Arduino IoT Weather Station"
    },
    {
      id: 3,
      name: "Emma Thompson",
      position: "PhD Student in Robotics",
      university: "Carnegie Mellon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Working with the robotic arm control system helped me understand inverse kinematics in a practical way. The documentation and support were exceptional throughout my research.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/emmathompson",
      project: "Robotic Arm Control System"
    },
    {
      id: 4,
      name: "Dr. James Park",
      position: "Research Director",
      university: "Seoul National University",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The FPGA neural network accelerator project opened new research directions for our lab. The performance improvements we achieved were beyond our expectations.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/jamespark",
      project: "Neural Network FPGA Accelerator"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Electronics Engineering Student",
      university: "UC Berkeley",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "As a student new to electronics, ElectroWorld's projects provided the perfect learning curve. The smart home automation project taught me everything from sensors to cloud integration.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/lisawang",
      project: "Smart Home Automation Hub"
    },
    {
      id: 6,
      name: "Prof. Ahmed Hassan",
      position: "Director of Innovation Lab",
      university: "American University of Cairo",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      content: "The blockchain IoT security project has become a cornerstone of our cybersecurity curriculum. Students love the practical approach to learning complex security concepts.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/ahmedhassan",
      project: "Blockchain IoT Security"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Our Community Says</h2>
          <p className="section-subtitle">
            Hear from professors, researchers, and students who have transformed their learning experience with our projects
          </p>
        </motion.div>

        <div 
          className="testimonials-container"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button className="testimonial-nav prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>

          <div className="testimonials-wrapper">
            <motion.div
              className="testimonials-track"
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="testimonial-header">
                    <div className="testimonial-quote">
                      <FaQuoteLeft />
                    </div>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  <div className="testimonial-content">
                    <p>"{testimonial.content}"</p>
                  </div>

                  <div className="testimonial-project">
                    <span>Project: {testimonial.project}</span>
                  </div>

                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                      <p className="university">{testimonial.university}</p>
                    </div>
                    <a 
                      href={testimonial.linkedinUrl} 
                      className="linkedin-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button className="testimonial-nav next" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <motion.div
          className="testimonial-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="stat">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">2,500+</span>
            <span className="stat-label">Reviews</span>
          </div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Recommend Us</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;