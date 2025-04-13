"use client"
import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section id="videos" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Automation Videos 
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/h3WRg-Uw6O8"
              title="Automation  ai calling agent"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/v0t7G2RCmgo"
              title="Automation for social media"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
