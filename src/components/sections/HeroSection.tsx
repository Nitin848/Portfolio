"use client"

import { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';
import { FaGithub, FaRandom, FaGripVertical } from 'react-icons/fa';
import ParticleBackground from '@/components/layout/ParticleBackground';
import { typewriterVariants } from '@/utils/animations';

export default function HeroSection() {
  const [text, setText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  const titles = ['I am Nitin Kumar Reddy', 'I am a Software Developer'];
  const typingSpeed = 100;
  const eraseSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const animateText = () => {
      if (isErasing) {
        if (text === '') {
          setIsErasing(false);
          setCurrentTextIndex((prev) => (prev + 1) % titles.length);
          timer = setTimeout(animateText, typingSpeed);
        } else {
          setText(text.slice(0, -1));
          timer = setTimeout(animateText, eraseSpeed);
        }
      } else {
        const currentTitle = titles[currentTextIndex];
        if (text === currentTitle) {
          timer = setTimeout(() => {
            setIsErasing(true);
            animateText();
          }, pauseDuration);
        } else {
          setText(currentTitle.slice(0, text.length + 1));
          timer = setTimeout(animateText, typingSpeed);
        }
      }
    };

    timer = setTimeout(animateText, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, currentTextIndex, isErasing]);

  const [experienceYears, setExperienceYears] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const startDate = new Date('2023-08-01');
    const now = new Date();
    const diffMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + now.getMonth() - startDate.getMonth();
    const years = Math.max(0, Math.floor(diffMonths / 12));
    setExperienceYears(years);
  }, []);

  const [items, setItems] = useState([
    { id: 'exp', title: mounted ? '1' : '-', subtitle: 'Years Experience' },
    { id: 'current', title: 'Current', subtitle: 'Inteliverse Tech Solutions' },
    { id: 'github', title: 'GitHub', subtitle: 'Profile', isLink: true },
    { id: 'projects', title: '3', subtitle: 'Projects Completed' }
  ]);

  const [currentLayout, setCurrentLayout] = useState(0);
  const layouts = [
    {
      container: "container mx-auto max-w-6xl px-4 text-center",
      title: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
      description: "text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mt-6",
      stats: "grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
    },
    {
      container: "container mx-auto max-w-7xl px-4 md:px-6 lg:px-8",
      title: "text-5xl md:text-6xl lg:text-7xl font-bold text-left",
      description: "text-xl md:text-2xl max-w-2xl mt-6",
      stats: "flex flex-col md:flex-row gap-6 mt-12"
    },
    {
      container: "container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center",
      title: "text-3xl md:text-4xl lg:text-5xl font-bold",
      description: "text-lg md:text-xl mt-6",
      stats: "grid grid-cols-2 gap-6 mt-8"
    }
  ];

  const shuffleArray = <T extends unknown>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleShuffle = () => {
    const shuffledItems = shuffleArray(items);
    setItems(shuffledItems);
    setCurrentLayout((prev) => (prev + 1) % layouts.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden border-2 border-blue-200 dark:border-blue-800 rounded-xl">
      <ParticleBackground />
      
      <div className={layouts[currentLayout].container}>
        <motion.div
          className={`${layouts[currentLayout].title} font-bold mb-6`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 dark:text-blue-400">{text}</span>
        </motion.div>

        <motion.div
          className={`${layouts[currentLayout].description} text-gray-600 dark:text-gray-300 mb-8 h-20`}
          variants={typewriterVariants}
          initial="hidden"
          animate="visible"
        >
          Highly motivated and results-driven software developer with strong expertise in Python and web development
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <div className={layouts[currentLayout].stats}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-lg ${currentLayout === 1 ? 'flex-1' : ''}`}
            >
              {item.isLink ? (
                <a
                  href="https://github.com/Nitin848"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="text-2xl mb-1" />
                  <div className="text-sm">{item.subtitle}</div>
                </a>
              ) : (
                <>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{item.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{item.subtitle}</div>
                </>
              )}
            </div>
          ))}
          <motion.button
            onClick={handleShuffle}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg z-10 flex items-center justify-center group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm">
              Click to shuffle layout
            </span>
            <FaRandom className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
