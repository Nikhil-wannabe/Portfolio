'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Interactive3DObject from './Interactive3DObject';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start']
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y3DObject = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={targetRef}
      className='min-h-screen relative flex flex-col justify-center items-center text-center p-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 overflow-hidden'
    >
      <motion.div style={{ y: y3DObject }} className='w-full absolute top-1/4 md:top-1/3 left-0 z-0 pointer-events-none'>
        <Interactive3DObject />
      </motion.div>

      <motion.div style={{ y: yText }} className='relative z-10'>
        <motion.h1
          className='text-3xl sm:text-4xl md:text-6xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Nikhil Bramhandam
        </motion.h1>
        <motion.p
          className='text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Applied AI Engineer
        </motion.p>
        <motion.p
          className='text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl text-gray-700 dark:text-gray-300 transition-colors duration-300'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Crafting intelligent experiences that bridge human-AI collaboration.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
