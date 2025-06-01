'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutMe = () => {
  const skills = [
    'Python', 'React', '.NET', 'Azure', 'ML', 'RL', 'NLP',
    'Resume AI', 'Git', 'REST', 'SQL', 'Flask', 'Streamlit',
    'MineRL', 'Temporal', 'Kubernetes'
  ];

  const interests = [
    'AI Systems', 'LLMs', 'Reinforcement Learning',
    'Human-AI collaboration', 'Hackathons'
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const yContent = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section ref={sectionRef} id='about' className='min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-gray-900 dark:bg-gray-800 text-white overflow-hidden'>
      <motion.div
        style={{ y: yContent }}
        className='max-w-4xl mx-auto'
      >
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-cyan-400 dark:text-cyan-300'>About Me</h2>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div>
            <h3 className='text-xl sm:text-2xl font-semibold mb-2 text-gray-100 dark:text-gray-50'>Nikhil Bramhandam</h3>
            <p className='text-md sm:text-lg text-gray-300 dark:text-gray-200 mb-1'>Jersey City, NJ</p>
            <p className='text-md sm:text-lg text-gray-400 dark:text-gray-300'>
              Master’s student in Applied Artificial Intelligence, Stevens Institute of Technology
            </p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold mb-3 text-cyan-300 dark:text-cyan-200'>Interests</h3>
            <ul className='list-disc list-inside space-y-1 text-gray-300 dark:text-gray-200 text-sm sm:text-base'>
              {interests.map((interest, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {interest}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className='text-lg sm:text-xl font-semibold mb-4 text-center text-cyan-300 dark:text-cyan-200'>Skills Snapshot</h3>
          <div className='flex flex-wrap justify-center gap-2 sm:gap-3'>
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className='bg-gray-800 dark:bg-gray-700 text-cyan-400 dark:text-cyan-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
