"use client"

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaFilm, FaGamepad, FaPaintBrush, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const sections = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const hobbies = [
  { name: 'Coding', icon: <FaCode /> },
  { name: 'Movies', icon: <FaFilm /> },
  { name: 'Gaming', icon: <FaGamepad /> },
  { name: 'Drawing', icon: <FaPaintBrush /> },
];

function CopyrightYear() {
  const [year, setYear] = useState('');
  
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);
  
  return year;
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="w-6 h-6" />
        </motion.button>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Site Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.name}>
                  <a
                    href={section.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>nitinreddy848@gmail.com</li>
              <li>+91 7899977848</li>
              <li>Bangalore, Karnataka</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Nitin848"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/nitin-kumar-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hobbies</h3>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.name}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-blue-600 dark:text-blue-400">{hobby.icon}</span>
                  <span>{hobby.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; <CopyrightYear /> Nitin Kumar Reddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}