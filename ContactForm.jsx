import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormValues({ name: '', email: '', message: '' });
      
      // Reset submission state after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <label htmlFor="name" className="block uppercase text-sm tracking-widest mb-2">
            What's your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            className={`w-full border-b ${
              errors.name ? 'border-red-500' : 'border-gray-200'
            } pb-2 focus:outline-none focus:border-black transition-colors`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        
        <div className="relative">
          <label htmlFor="email" className="block uppercase text-sm tracking-widest mb-2">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            className={`w-full border-b ${
              errors.email ? 'border-red-500' : 'border-gray-200'
            } pb-2 focus:outline-none focus:border-black transition-colors`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>
      
      <div className="mt-8">
        <label htmlFor="message" className="block uppercase text-sm tracking-widest mb-2">
          Tell us about our project
        </label>
        <textarea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          rows={6}
          className={`w-full border-b ${
            errors.message ? 'border-red-500' : 'border-gray-200'
          } pb-2 focus:outline-none focus:border-black transition-colors`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-16">
        <p className="text-gray-500 text-sm mb-8 md:mb-0">
          <span className="text-[#ff9500]">*</span> We promise not to disclose your personal information to third parties.
        </p>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-[#ff9500] hover:bg-[#ff9500]/90 text-black py-4 px-8 rounded-full flex items-center justify-center transition-all ${
            isSubmitting || isSubmitted ? 'opacity-70' : 'opacity-100'
          }`}
        >
          <span className="uppercase tracking-wider font-medium">
            {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}
          </span>
          {!isSubmitting && !isSubmitted && (
            <ArrowRight className="ml-2 w-5 h-5" />
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
