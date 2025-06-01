'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope } from 'react-icons/fa'; // Using react-icons for social icons

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: '#' }, // Replace # with actual URLs later
  { name: 'GitHub', icon: FaGithub, url: '#' },
  { name: 'Medium', icon: FaMedium, url: '#' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:#' },
];

const ContactSocials = () => {
  return (
    <section id='contact' className='py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='max-w-3xl mx-auto'
      >
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center text-teal-400'>Contact + Socials</h2>

        {/* Social Links */}
        <div className='flex justify-center space-x-6 md:space-x-8 mb-12'>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-teal-400 transition-colors duration-300'
              whileHover={{ scale: 1.2, y: -5 }}
              title={social.name}
            >
              <social.icon size={32} />
            </motion.a>
          ))}
        </div>

        {/* Contact Form Placeholder */}
        <div className='p-6 md:p-8 bg-gray-800 rounded-xl shadow-xl'>
          <h3 className='text-2xl font-semibold mb-6 text-center text-gray-100'>Send a Message</h3>
          <form className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-1'>Full Name</label>
              <input type='text' name='name' id='name' className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-teal-500 focus:border-teal-500' placeholder='Your Name' />
            </div>
            <div>
              <label htmlFor='email_form' className='block text-sm font-medium text-gray-300 mb-1'>Email Address</label>
              <input type='email' name='email_form' id='email_form' className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-teal-500 focus:border-teal-500' placeholder='you@example.com' />
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-1'>Message</label>
              <textarea name='message' id='message' rows={4} className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-teal-500 focus:border-teal-500' placeholder='Your message...'></textarea>
            </div>
            <motion.button
              type='submit'
              className='w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 rounded-md font-semibold transition-colors duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message (Placeholder)
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSocials;
