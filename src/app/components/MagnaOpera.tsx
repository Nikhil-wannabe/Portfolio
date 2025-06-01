'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MitraOsVisual from './MitraOsVisual';

const projects = [
  {
    id: 'mitra-os',
    title: 'MITRA OS',
    concept: 'AI-native, voice-first operating system with smart task planning.',
    featuresPlaceholder: 'NLP-powered agent, resource awareness, embedded Python reasoning engine...',
    techStack: ['Python', 'NLP', 'AI Agents'],
    links: [{ name: 'GitHub', url: '#' }, { name: 'Demo', url: '#' }]
  },
  {
    id: 'vibezsume',
    title: 'VIBEZSUME',
    concept: 'Resume analyzer, validator, and generator.',
    featuresPlaceholder: 'Local Small Language Model (SLM), ATS scoring, template builder, role-matching logic...',
    uiPlaceholder: 'Before/after resume examples, or a live demo preview.',
    techStack: ['Python', 'SLM', 'NLP', 'React'],
    links: [{ name: 'GitHub', url: '#' }]
  },
  {
    id: 'sklearn-playground',
    title: 'SKlearn Playground',
    concept: 'GUI-based ML experimentation platform.',
    featuresPlaceholder: 'Model training, evaluation visualizations, algorithm selection, real-time metrics...',
    uiPlaceholder: 'Embed a sandbox or GIF walkthrough.',
    techStack: ['Python', 'Scikit-learn', 'React', 'Flask'],
    links: [{ name: 'GitHub', url: '#' }]
  }
];

const MagnaOpera = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section ref={sectionRef} id='magna-opera' className='min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-gray-800 dark:bg-gray-900 text-white overflow-hidden'>
      <motion.div
        style={{y}}
        className='max-w-6xl mx-auto'
      >
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-amber-400 dark:text-amber-300'>Magna Opera (Flagship Projects)</h2>

        <div className='space-y-12 md:space-y-16'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className='p-4 sm:p-6 md:p-8 bg-gray-700 dark:bg-gray-800 rounded-xl shadow-2xl border border-transparent hover:border-amber-500 dark:hover:border-amber-400 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
            >
              <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-amber-300 dark:text-amber-200'>{project.title}</h3>
              <p className='text-base sm:text-lg text-gray-300 dark:text-gray-400 mb-4 italic'>{project.concept}</p>

              <div className='mb-4'>
                <h4 className='text-lg sm:text-xl font-medium mb-2 text-gray-200 dark:text-gray-100'>Key Features (Placeholder):</h4>
                <p className='text-sm sm:text-base text-gray-400 dark:text-gray-500'>{project.featuresPlaceholder}</p>
              </div>

              {project.id === 'mitra-os' ? (
                <MitraOsVisual />
              ) : (
                <div className='mb-6 p-4 bg-gray-600 dark:bg-gray-700 rounded-lg min-h-[100px] flex items-center justify-center'>
                  <p className='text-gray-500 dark:text-gray-400 text-xs sm:text-sm'>{project.uiPlaceholder}</p>
                </div>
              )}

              <div className='flex flex-wrap items-center gap-2 mb-4 mt-6'>
                <span className='text-sm font-semibold text-gray-200 dark:text-gray-100'>Tech Stack:</span>
                {project.techStack.map(tech => (
                  <span key={tech} className='bg-gray-600 dark:bg-gray-700 text-amber-400 dark:text-amber-300 px-2 py-1 sm:px-3 sm:py-1 rounded-md text-xs font-medium'>{tech}</span>
                ))}
              </div>

              <div className='flex items-center gap-3 sm:gap-4'>
                {project.links.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-amber-500 dark:text-amber-400 hover:text-amber-300 dark:hover:text-amber-200 transition-colors duration-300 underline text-sm sm:text-base'
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MagnaOpera;
