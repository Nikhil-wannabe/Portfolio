'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }); // Initial position off-screen
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      // Check if hovering over a link or button
      const target = event.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input[type="submit"]')) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 8, // Center the 16x16 cursor
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: 'rgba(173, 216, 230, 0.7)', // Light blue, slightly transparent
      borderColor: 'rgba(70, 130, 180, 0.9)', // Steel blue
      borderWidth: '2px', // This will be applied via style prop if not directly supported by motion component for border
      transition: { type: 'spring', stiffness: 500, damping: 30, mass: 0.1 }
    },
    linkHover: {
      x: mousePosition.x - 12, // Center the 24x24 cursor
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
      backgroundColor: 'rgba(255, 105, 180, 0.7)', // Hot pink, slightly transparent
      borderColor: 'rgba(255, 20, 147, 0.9)', // Corrected Deep pink from 'rgba(2 C55, 20, 147, 0.9)'
      borderWidth: '2px',
      scale: 1.2,
      transition: { type: 'spring', stiffness: 400, damping: 20 }
    }
  };

  // For borderWidth to work with framer-motion, it's better applied via style,
  // but direct properties often work for simple cases or if motion internally handles them.
  // The 'className' handles the fixed positioning and z-index.

  return (
    <motion.div
      className='fixed top-0 left-0 z-[9999] rounded-full pointer-events-none hidden md:block'
      variants={cursorVariants}
      animate={isHoveringLink ? 'linkHover' : 'default'}
      style={{
        borderStyle: 'solid', // Required for borderColor and borderWidth to take effect consistently
        // Note: Framer Motion can animate 'borderColor' and 'borderWidth' if they are part of the variant definition.
      }}
    />
  );
};

export default AnimatedCursor;
