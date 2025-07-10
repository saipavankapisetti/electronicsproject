import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const projectCategories = [
    { name: 'Quantum Computing', href: '/projects/quantum' },
    { name: 'IoT & Sensors', href: '/projects/iot' },
    { name: 'AI Hardware', href: '/projects/ai' },
    { name: 'Robotics', href: '/projects/robotics' },
    { name: 'Blockchain', href: '/projects/blockchain' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Community Forum', href: '/forum' },
    { name: 'Support Center', href: '/support' },
    { name: 'API Reference', href: '/api' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "https://linkedin.com/company/electroworld", name: "LinkedIn" },
    { icon: FaGithub, url: "https://github.com/electroworld", name: "GitHub" },
    { icon: FaTwitter, url: "https://twitter.com/electroworld", name: "Twitter" }
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="quantum-grid">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="grid-dot"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 20}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section brand-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <FaRocket className="logo-icon" />
              <div className="logo-text">
                <span className="logo-main">ElectroWorld</span>
                <span className="logo-sub">Quantum Electronics</span>
              </div>
            </div>
            <p className="brand-description">
              Empowering the next generation of innovators through cutting-edge 
              electronics and quantum computing education. Join thousands of students 
              exploring the quantum realm.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <span>hello@electroworld.com</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Tech Valley, CA 94025</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Project Categories</h4>
            <ul className="footer-links">
              {projectCategories.map((category, index) => (
                <li key={index}>
                  <a href={category.href}>{category.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Resources</h4>
            <ul className="footer-links">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href}>{resource.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section newsletter-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Stay Updated</h4>
            <p>Get the latest projects and quantum computing insights delivered to your inbox.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
            <div className="social-links">
              <span>Follow us:</span>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © 2024 ElectroWorld. All rights reserved. Made with{' '}
                <FaHeart className="heart-icon" /> for the quantum future.
              </p>
            </div>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;