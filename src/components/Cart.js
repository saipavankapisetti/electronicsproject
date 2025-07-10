import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaBolt, FaMicrochip, FaCog } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="cart-loading">
        <div className="circuit-loader">
          <div className="resistor-container">
            <motion.div 
              className="resistor"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="resistor-band band-1"></div>
              <div className="resistor-band band-2"></div>
              <div className="resistor-band band-3"></div>
              <div className="resistor-band band-4"></div>
            </motion.div>
          </div>
          
          <div className="bulb-container">
            <motion.div 
              className="bulb"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaBolt className="bulb-icon" />
            </motion.div>
          </div>
          
          <div className="circuit-wires">
            <div className="wire wire-1"></div>
            <div className="wire wire-2"></div>
            <div className="wire wire-3"></div>
          </div>
          
          <motion.div 
            className="loading-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <FaCog className="gear-icon" />
            Powering up your cart...
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <motion.div 
          className="cart-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="cart-title">
            <FaShoppingCart className="cart-icon" />
            Your Electronics Cart
          </h1>
          <p className="cart-subtitle">Your quantum components await assembly</p>
        </motion.div>

        <motion.div 
          className="empty-cart"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="empty-cart-visual">
            <div className="empty-circuit">
              <FaMicrochip className="empty-chip" />
              <div className="empty-wires">
                <div className="empty-wire"></div>
                <div className="empty-wire"></div>
                <div className="empty-wire"></div>
              </div>
            </div>
          </div>
          
          <h2 className="empty-title">Your cart is currently empty</h2>
          <p className="empty-description">
            🔧 No components in your circuit yet! Start building your electronics projects by adding some quantum components.
          </p>
          
          <motion.a 
            href="/#projects" 
            className="btn btn-primary shop-now-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ⚡ Browse Components
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;