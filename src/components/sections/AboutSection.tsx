"use client"

import { useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML/CSS', level: 85 },
  { name: 'SQL', level: 80 },
  { name: 'Java', level: 75 },
  { name: 'Git', level: 80 },
  { name: 'AI/ML', level: 85 },
];

const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Kannada', level: 'Native' },
  { name: 'Telugu', level: 'Native' },
  { name: 'Hindi', level: 'Professional' },
];

const experiences = [
  {
    title: 'Software Development Intern',
    company: 'Inteliverse Tech Solutions LLP',
    period: 'August 2023 - Present',
    description: [
      'AI-powered website development',
      'AI agent design for virtual receptionists',
      'Automation tools expertise',
    ],
    tags: ['Python', 'AI/ML', 'Web Development', 'Automation'],
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Professional Photo */}
          <div className="relative w-[400px] h-[600px] mx-auto rounded-full overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
            <Image
              src="/nitinkumarreddy11.png"
              alt="Nitin Kumar Reddy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              priority
            />
          </div>

          {/* Personal Introduction */}
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Seeking to leverage my technical skills and passion for innovation to contribute to a dynamic tech team.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((language) => (
                  <motion.div
                    key={language.name}
                    className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                  >
                    <div className="font-medium">{language.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {language.level}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8">Experience</h3>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-blue-600 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold">{experience.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400">{experience.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{experience.period}</p>
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}