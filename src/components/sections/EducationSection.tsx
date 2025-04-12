"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const education = [
  {
    institution: 'H.K.E Society\'s S.L.N College of Engineering, Raichur',
    degree: 'Computer Science Engineering',
    period: '2019-2023',
    details: [
      'Relevant coursework in Data Structures, Algorithms, and Software Engineering',
      'Projects in AI/ML and Web Development',
      'Active participation in technical events and workshops'
    ]
  },
  {
    institution: 'STJ Residential PU College, Davangere',
    degree: 'Pre-University Education',
    period: '2017-2019',
    details: [
      'Focus on Mathematics, Physics, and Computer Science',
      'Academic excellence in core subjects',
      'Participation in science exhibitions'
    ]
  }
];

const certifications = [
  {
    title: 'Software Development Internship',
    issuer: 'Inteliverse Tech Solutions LLP',
    date: 'August 2023 - Present',
    skills: ['AI Development', 'Web Development', 'Automation']
  },
  {
    title: 'Python Programming',
    issuer: 'Coursera',
    date: '2023',
    skills: ['Python', 'Data Structures', 'Algorithms']
  }
];

export default function EducationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-blue-600"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold">{edu.institution}</h4>
                  <p className="text-blue-600 dark:text-blue-400">{edu.degree}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.period}</p>
                  <ul className="mt-4 space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h4 className="text-lg font-semibold">{cert.title}</h4>
                <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{cert.date}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}