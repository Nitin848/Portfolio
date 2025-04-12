"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaJava, FaGit, FaDatabase, FaReact } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPycharm, SiEclipseide, SiIntellijidea, SiJupyter, SiApachemaven, SiSpring, SiTensorflow, SiPytorch } from 'react-icons/si';

type Skill = {
  name: string;
  level: number;
  category: 'primary' | 'secondary' | 'support';
  icon?: React.ReactNode;
};

type Tool = {
  name: string;
  category: string;
  icon?: React.ReactNode;
};

const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'primary', icon: <FaPython /> },
  { name: 'AI/ML', level: 85, category: 'primary' },
  { name: 'JavaScript', level: 85, category: 'secondary', icon: <SiJavascript /> },
  { name: 'HTML', level: 85, category: 'secondary', icon: <SiHtml5 /> },
  { name: 'CSS', level: 85, category: 'secondary', icon: <SiCss3 /> },
  { name: 'Java', level: 75, category: 'secondary', icon: <FaJava /> },
  { name: 'Git', level: 80, category: 'support', icon: <FaGit /> },
  { name: 'SQL', level: 80, category: 'support', icon: <FaDatabase /> },
];

const tools: Tool[] = [
  { name: 'PyCharm', category: 'IDE', icon: <SiPycharm /> },
  { name: 'Eclipse', category: 'Java IDE', icon: <SiEclipseide /> },
  { name: 'IntelliJ IDEA', category: 'Java IDE', icon: <SiIntellijidea /> },
  { name: 'Jupyter Notebook', category: 'Python Development', icon: <SiJupyter /> },
  { name: 'Maven', category: 'Java Build Tool', icon: <SiApachemaven /> },
  { name: 'Spring Boot', category: 'Java Framework', icon: <SiSpring /> },
  { name: 'TensorFlow', category: 'AI/ML', icon: <SiTensorflow /> },
  { name: 'PyTorch', category: 'AI/ML', icon: <SiPytorch /> },
];

const learningSkills = [
  { name: 'Python Advanced', progress: 85 },
  { name: 'AI/ML', progress: 80 },
  { name: 'Java Enterprise', progress: 75 },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>

        {/* Technical Skills Clusters */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {['primary', 'secondary', 'support'].map((category) => (
              <motion.div
                key={category}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-lg font-semibold mb-4 capitalize">{category} Skills</h4>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : {}}
                        transition={{ duration: 1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {skill.icon && (
                              <span className="text-blue-600 dark:text-blue-400">
                                {skill.icon}
                              </span>
                            )}
                            <span>{skill.name}</span>
                          </div>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.5, delay: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2 text-blue-600 dark:text-blue-400 transition-colors hover:text-blue-700 dark:hover:text-blue-500">
                  {tool.icon}
                </div>
                <div className="font-medium">{tool.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {tool.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Currently Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {learningSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500 dark:bg-green-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.progress}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}