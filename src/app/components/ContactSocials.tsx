'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/nikhilbramhandam/', title:'Nikhil Bramhandam LinkedIn Profile' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/NikhilBramhandam', title:'Nikhil Bramhandam GitHub Profile' },
  { name: 'Medium', icon: FaMedium, url: 'https://medium.com/@nikhilbramhandam', title:'Nikhil Bramhandam Medium Profile' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:nikhil.bramhandam@gmail.com', title:'Email Nikhil Bramhandam' },
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSocials = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      setIsSubmitted(true);
    } else {
      console.log('Form validation failed:', errors);
    }
  };

  return (
    <section id='contact' className='py-16 px-4 md:px-8 lg:px-16 bg-gray-900 dark:bg-black text-white'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='max-w-3xl mx-auto'
      >
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-teal-400 dark:text-teal-300'>Contact + Socials</h2>

        <div className='flex justify-center space-x-4 sm:space-x-6 md:space-x-8 mb-12'>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-300'
              whileHover={{ scale: 1.2, y: -5 }}
              title={social.title}
            >
              {/* Responsive icon size: default size={28}, sm and up uses w-8 h-8 (32px) via className */}
              <social.icon size={28} className='sm:w-8 sm:h-8' />
            </motion.a>
          ))}
        </div>

        <motion.div
          className='p-4 sm:p-6 md:p-8 bg-gray-800 dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-700 dark:border-gray-700'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-100 dark:text-gray-50'>Send a Message</h3>
          <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6' noValidate>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-300 dark:text-gray-200 mb-1'>Full Name</label>
              <input
                type='text'
                name='name'
                id='name'
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 text-sm sm:text-base bg-gray-700 dark:bg-gray-800 border rounded-md focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-600 dark:border-gray-700'}`}
                placeholder='Your Name'
                required
              />
              {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor='email_form' className='block text-sm font-medium text-gray-300 dark:text-gray-200 mb-1'>Email Address</label>
              <input
                type='email'
                name='email'
                id='email_form'
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 text-sm sm:text-base bg-gray-700 dark:bg-gray-800 border rounded-md focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-600 dark:border-gray-700'}`}
                placeholder='you@example.com'
                required
              />
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-300 dark:text-gray-200 mb-1'>Message</label>
              <textarea
                name='message'
                id='message'
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 text-sm sm:text-base bg-gray-700 dark:bg-gray-800 border rounded-md focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-all ${errors.message ? 'border-red-500' : 'border-gray-600 dark:border-gray-700'}`}
                placeholder='Your message...'
                required
              ></textarea>
              {errors.message && <p className='text-red-500 text-xs mt-1'>{errors.message}</p>}
            </div>
            <motion.button
              type='submit'
              className='w-full py-3 px-4 text-sm sm:text-base bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-md font-semibold text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-offset-gray-900'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
            {isSubmitted && (
              <p className='text-green-500 text-xs sm:text-sm mt-3 text-center'>Message sent successfully! (This is a placeholder)</p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSocials;
