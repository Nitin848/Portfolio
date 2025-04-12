"use client"

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function GlobalUI() {
  const { scrollYProgress } = useScroll();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updateCursorPosition);
    
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <motion.a
          href="tel:7899977848"
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <PhoneIcon className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="mailto:nitinreddy848@gmail.com"
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <EnvelopeIcon className="w-6 h-6" />
        </motion.a>
      </div>

      {/* Keyboard Navigation Focus Styles */}
      <style jsx global>{`
        :focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
          border-radius: 0.25rem;
        }
      `}</style>
    </>
  );
}