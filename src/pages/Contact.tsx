import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <motion.div 
      className="pt-24 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-2">Get In <span className="text-purple-400">Touch</span></h1>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me regarding opportunities, collaborations, or any questions you may have. I'm always open to connecting with new people.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-semibold mb-8 text-white">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="rounded-full bg-purple-500/10 p-3 mr-4">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a href="mailto:punithan06232005@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                    punithan06232005@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-purple-500/10 p-3 mr-4">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a href="tel:9845423514" className="text-gray-300 hover:text-purple-400 transition-colors">
                    +91 9845423514
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-purple-500/10 p-3 mr-4">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-300">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="rounded-full bg-gray-800 p-3 text-gray-300 hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="rounded-full bg-gray-800 p-3 text-gray-300 hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="rounded-full bg-gray-800 p-3 text-gray-300 hover:bg-purple-500 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                  Your message has been sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-colors flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2" size={18} />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;