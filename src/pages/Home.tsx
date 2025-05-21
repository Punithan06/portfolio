import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import LanguageProgressBar from '../components/LanguageProgressBar';
import Photo from "../../src/images/punithan.jpg"; // Replace with your image path
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,70,255,0.15),transparent_75%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="text-center ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2"
            >
              <figure>
                <img src={Photo} alt="image broken" className='h-[300px] relative left-[630px] bottom-10 rounded-2xl' />
              </figure>
              <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium">
                Computer Science & Business Systems Student
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Hi, I'm <span className="text-purple-400">Punithan J</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              A responsible and well-organized B.Tech student with a passion for learning and seeking my first professional work experience.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center space-x-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-colors"
                >
                  Contact Me
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-gray-700 transition-colors flex items-center"
              >
                <FileText className="mr-2" size={18} />
                Resume <Download className="ml-1" size={14} />
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-purple-400" size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2">About <span className="text-purple-400">Me</span></h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={0.2}>
              <h3 className="text-2xl font-semibold mb-4 text-white">Who am I?</h3>
              <p className="text-gray-300 mb-4">
                I am a B.Tech Computer Science and Business Systems student at Panimalar Engineering College with a strong interest in technology and business integration.
              </p>
              <p className="text-gray-300 mb-4">
                I consider myself a responsible and orderly person. I'm actively involved in extracurricular activities as both a Maths Club volunteer and a class coordinator representing CSBS 2nd Year.
              </p>
              <p className="text-gray-300">
                Currently seeking my first professional work experience to apply my academic knowledge and develop practical skills in a real-world environment.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">Language Skills</h3>
              
              <LanguageProgressBar language="Tamil" level="Native" percentage={100} />
              <LanguageProgressBar language="English" level="Fluent" percentage={90} />
              <LanguageProgressBar language="Kannada" level="Fluent" percentage={90} />
              <LanguageProgressBar language="Hindi" level="Fluent" percentage={85} />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;