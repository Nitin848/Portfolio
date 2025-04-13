"use client"
import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { MoonIcon, SunIcon, Bars3Icon } from '@heroicons/react/24/outline';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
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
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  // Prevent hydration issues by not rendering theme toggle until mounted
  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/nkr logo.png"
              alt="NKR Logo"
              width={60}
              height={60}
              className="h-16 w-auto dark:invert"
            />
          </Link>
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
            href="https://www.linkedin.com/in/nitinkumar-reddy/"
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

        {/* Mobile Menu */}
        <motion.div
          className={`absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg overflow-hidden md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">About</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
            <div className="flex flex-col space-y-2 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
              <a href="https://github.com/Nitin848" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/nitinkumar-reddy/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
            </div>
          </nav>
        </motion.div>

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
