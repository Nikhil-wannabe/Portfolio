'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center text-center p-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300'>
      <motion.div
        className='bg-gray-300 dark:bg-gray-700 w-48 h-48 md:w-64 md:h-64 rounded-full mb-8'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Placeholder for 3D Avatar */}
      </motion.div>
      <motion.h1
        className='text-4xl md:text-6xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Nikhil Bramhandam
      </motion.h1>
      <motion.p
        className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Applied AI Engineer
      </motion.p>
      <motion.p
        className='text-lg md:text-xl max-w-xl text-gray-700 dark:text-gray-300 transition-colors duration-300'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Crafting intelligent experiences that bridge human-AI collaboration.
      </motion.p>
    </section>
  );
};

export default Hero;
