'use client'; // Required for Framer Motion or other client-side interactivity

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MITRA OS',
    concept: 'AI-native, voice-first operating system with smart task planning.',
    featuresPlaceholder: 'NLP-powered agent, resource awareness, embedded Python reasoning engine...',
    uiPlaceholder: 'UI mockup or interactive terminal interface will be shown here.',
    techStack: ['Python', 'NLP', 'AI Agents'],
    links: [{ name: 'GitHub', url: '#' }, { name: 'Demo', url: '#' }]
  },
  {
    title: 'VIBEZSUME',
    concept: 'Resume analyzer, validator, and generator.',
    featuresPlaceholder: 'Local Small Language Model (SLM), ATS scoring, template builder, role-matching logic...',
    uiPlaceholder: 'Before/after resume examples, or a live demo preview.',
    techStack: ['Python', 'SLM', 'NLP', 'React'],
    links: [{ name: 'GitHub', url: '#' }]
  },
  {
    title: 'SKlearn Playground',
    concept: 'GUI-based ML experimentation platform.',
    featuresPlaceholder: 'Model training, evaluation visualizations, algorithm selection, real-time metrics...',
    uiPlaceholder: 'Embed a sandbox or GIF walkthrough.',
    techStack: ['Python', 'Scikit-learn', 'React', 'Flask'],
    links: [{ name: 'GitHub', url: '#' }]
  }
];

const MagnaOpera = () => {
  return (
    <section id='magna-opera' className='min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-gray-800 text-white'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='max-w-6xl mx-auto'
      >
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-amber-400'>Magna Opera (Flagship Projects)</h2>

        <div className='space-y-16'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='p-6 md:p-8 bg-gray-700 rounded-xl shadow-xl'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className='text-2xl md:text-3xl font-semibold mb-3 text-amber-300'>{project.title}</h3>
              <p className='text-lg text-gray-300 mb-4 italic'>{project.concept}</p>

              <div className='mb-4'>
                <h4 className='text-xl font-medium mb-2 text-gray-200'>Key Features (Placeholder):</h4>
                <p className='text-gray-400'>{project.featuresPlaceholder}</p>
              </div>

              <div className='mb-6 p-4 bg-gray-600 rounded-lg min-h-[100px] flex items-center justify-center'>
                <p className='text-gray-500 text-sm'>{project.uiPlaceholder}</p>
              </div>

              <div className='flex flex-wrap items-center gap-2 mb-4'>
                <span className='text-sm font-semibold text-gray-200'>Tech Stack:</span>
                {project.techStack.map(tech => (
                  <span key={tech} className='bg-gray-600 text-amber-400 px-3 py-1 rounded-md text-xs font-medium'>{tech}</span>
                ))}
              </div>

              <div className='flex items-center gap-4'>
                {project.links.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-amber-500 hover:text-amber-300 transition-colors duration-300 underline'
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
