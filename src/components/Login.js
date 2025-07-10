
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaGithub, FaArrowRight } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="circuit-lines">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="circuit-line"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="login-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="form-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Login to access your projects' : 'Join us to start your electronics journey'}</p>
        </div>

        <form className="login-form">
          {!isLogin && (
            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <FaUser className="input-icon" />
              <input type="text" placeholder="Full Name" required />
            </motion.div>
          )}

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email Address" required />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
            <FaArrowRight className="arrow-icon" />
          </motion.button>
        </form>

        <div className="form-footer">
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button onClick={toggleForm} className="toggle-btn">
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
          {isLogin && <button className="forgot-password">Forgot Password?</button>}
        </div>

        <div className="social-login">
          <div className="divider">
            <span>OR</span>
          </div>
          <p>Continue with</p>
          <div className="social-buttons">
            <motion.button
              className="social-btn google"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGoogle />
            </motion.button>
            <motion.button
              className="social-btn github"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
