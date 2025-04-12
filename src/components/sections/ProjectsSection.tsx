"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Recommendation Based Crop Yield and Leaf Disease Identification',
    description: 'An AI-powered system for crop management and disease detection',
    category: 'AI/ML',
    technologies: ['Python', 'Machine Learning', 'AI'],
    features: [
      'Crop cultivation recommendations',
      'Fertilizer recommendations',
      'Disease prediction and curing suggestions'
    ],
    githubUrl: 'https://github.com/Nitin848/crop-yield-prediction'
  },
  {
    id: 2,
    title: 'Train Ticket Reservation System',
    description: 'A comprehensive railway booking management system',
    category: 'Web Development',
    technologies: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Train schedule search',
      'Seat availability checking',
      'Train timing views',
      'Fare inquiries',
      'Station-to-station train finder',
      'Online seat booking'
    ],
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'AI-Powered Client Websites',
    description: 'Modern websites with AI integration for enhanced business operations',
    category: 'Web Development',
    technologies: ['No-code AI tools', 'Full-stack integration', 'Google Sheets', 'CRM'],
    features: [
      'Automated customer interactions',
      'Data-driven insights',
      'Business process optimization',
      'Seamless CRM integration'
    ]
  },
  {
    id: 4,
    title: 'AI Virtual Receptionists & Sales Representatives',
    description: 'Intelligent virtual agents for customer service and sales',
    category: 'AI/ML',
    technologies: ['Vapi', 'Air AI', 'Synthflow'],
    features: [
      'Natural language processing',
      'Appointment scheduling',
      'Lead qualification',
      'Customer support automation'
    ]
  }
];

const categories = ['All', 'Web Development', 'AI/ML', 'Automation'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects Portfolio</h2>

        {/* Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full ${selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                {project.image && (
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="w-5 h-5" />
                        View on GitHub
                      </motion.a>
                    )}
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}