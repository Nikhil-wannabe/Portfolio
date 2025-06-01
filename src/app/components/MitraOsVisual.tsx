'use client';
import { motion } from 'framer-motion';
import React from 'react';

const MitraOsVisual = () => {
  const lines = [
    { text: 'Nikhil@MitraOS:~$ boot sequence initiated...', delay: 0.5 },
    { text: 'Nikhil@MitraOS:~$ loading AI core modules...', delay: 1.5 },
    { text: 'Nikhil@MitraOS:~$ establishing cognitive links...', delay: 2.5 },
    { text: 'Nikhil@MitraOS:~$ voice interface active.', delay: 3.5 },
    { text: 'Nikhil@MitraOS:~$ Mitra OS Ready.', delay: 4.5, highlight: true },
  ];

  return (
    <div className='bg-black p-4 rounded-lg font-mono text-sm text-green-400 h-48 md:h-56 overflow-y-auto shadow-2xl border border-green-700 my-4'> {/* Added my-4 for spacing */}
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: line.delay, duration: 0.5 }}
          className={line.highlight ? 'text-green-200 font-bold' : ''}
        >
          {line.text}<span className='animate-ping'>_</span>
        </motion.p>
      ))}
    </div>
  );
};

export default MitraOsVisual;
