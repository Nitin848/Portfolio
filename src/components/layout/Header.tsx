"use client"
import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { MoonIcon, SunIcon, Bars3Icon } from '@heroicons/react/24/outline';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    setIsDark(initialTheme === 'dark');
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold font-mono"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-blue-600 dark:text-blue-400">NKR</span>
        </motion.div>

        <NavigationMenu.Root className="relative hidden md:block">
          <NavigationMenu.List className="flex space-x-8">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                href="#home"
              >
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                href="#about"
              >
                About
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                href="#projects"
              >
                Projects
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                href="#contact"
              >
                Contact
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href="https://github.com/Nitin848"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/nitin-kumar-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            LinkedIn
          </motion.a>
        </div>

        <div className="md:hidden">
          <motion.button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Bars3Icon className="w-6 h-6" />
          </motion.button>
        </div>

        <motion.button
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDark ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-700" />
          )}
        </motion.button>
      </div>
    </motion.header>
  );
}