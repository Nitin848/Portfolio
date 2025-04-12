"use client"

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGraduationCap, FaAward, FaLightbulb, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Development',
    company: 'Inteliverse Tech Solutions LLP',
    period: 'August 2023 - Present',
    description: [
      'Specializing in AI-powered website development with modern frameworks and LLM integration',
      'Designing and implementing intelligent virtual agents for automated customer service and reception tasks',
      'Developing business automation solutions using cutting-edge no-code tools and AI technologies',
      'Creating custom AI solutions for workflow optimization and process automation',
    ],
    tags: ['Python', 'AI/ML', 'Web Development', 'Automation', 'LLM', 'No-Code Tools'],
  },
];

const highlights = [
  {
    icon: <FaLightbulb className="text-yellow-500" />,
    title: "Innovation",
    description: "Passionate about creating innovative solutions to real-world problems"
  }
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image with Animation */}
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                <Image
                  src="/nitinkumarreddy11.png"
                  alt="Nitin Kumar Reddy"
                  fill
                  className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                )}
              </div>
              
              {/* Floating Info Card */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="md:col-span-1 space-y-6">
            {/* About Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Who I Am</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I'm a software developer with a passion for creating innovative solutions. With expertise in Python, AI/ML, and web development, I focus on building applications that solve real-world problems.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Currently working as a Software Development  at Inteliverse Tech Solutions, I'm constantly learning and expanding my skills to stay at the forefront of technology.
                </p>
                <div className="flex space-x-4 mt-4">
                  <a 
                    href="https://github.com/Nitin848" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/nitin-kumar-reddy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Education & Experience Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg mr-4">
                    <FaGraduationCap className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Education & Experience</h3>
                    <p className="text-gray-600 dark:text-gray-400">Bachelor's in Computer Science with focus on AI and Machine Learning</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {experiences.map((experience, idx) => (
                    <div
                      key={idx}
                      className="relative pl-8 border-l-2 border-blue-600"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <FaBriefcase className="text-blue-500 mr-2" />
                          <h4 className="text-lg font-semibold">{experience.title}</h4>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400">{experience.company}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{experience.period}</p>
                        <ul className="mt-3 space-y-2">
                          {experience.description.map((item, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {experience.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Highlights */}
              <div className="grid grid-cols-1 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg mr-4">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="font-bold">{highlight.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}