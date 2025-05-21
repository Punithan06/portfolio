import React from 'react';
import { motion } from 'framer-motion';
import { School, GraduationCap, Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import TimelineItem from '../components/TimelineItem';

const Education = () => {
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
          <h1 className="text-3xl font-bold mb-2">My <span className="text-purple-400">Education</span></h1>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My academic journey has equipped me with strong foundations in computer science, mathematics, and business systems. Each educational experience has contributed to my growth as a student and future professional.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto my-16">
          <TimelineItem
            title="Panimalar Engineering College"
            subtitle="B.Tech in Computer Science and Business Systems"
            period="2023 - Present"
            description="Currently pursuing my bachelor's degree, focusing on computer science fundamentals, programming, and business systems integration. Actively participate in college activities and technical events."
            delay={0.2}
          />
          
          <TimelineItem
            title="Narayana School"
            subtitle="Higher Secondary Education (12th Grade)"
            period="2021 - 2023"
            description="Completed my 12th grade with a focus on Science and Mathematics. Participated in various academic competitions and extracurricular activities."
            delay={0.4}
          />
          
          <TimelineItem
            title="Narayana School"
            subtitle="Secondary Education (10th Grade)"
            period="2019 - 2021"
            description="Completed my 10th grade with strong academic performance. Developed interest in STEM subjects which led to my choice of future education path."
            isLast={true}
            delay={0.6}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <AnimatedSection delay={0.2} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-500/10 p-4 mb-4">
              <GraduationCap className="text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Degree</h3>
            <p className="text-gray-300">B.Tech in Computer Science and Business Systems</p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-500/10 p-4 mb-4">
              <School className="text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Institution</h3>
            <p className="text-gray-300">Panimalar Engineering College</p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 flex flex-col items-center text-center">
            <div className="rounded-full bg-purple-500/10 p-4 mb-4">
              <Calendar className="text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-gray-300">2023 - Present</p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700 my-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="p-6 bg-gray-700/50 rounded-lg border border-gray-600"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-2">Oracle Cloud Data Management</h4>
              <p className="text-gray-300">Completed certification in Oracle Cloud Data Management, gaining skills in cloud database administration and data services.</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gray-700/50 rounded-lg border border-gray-600"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-2">Python Workshop at VIT</h4>
              <p className="text-gray-300">Participated in a comprehensive Python programming workshop at VIT, enhancing programming skills and problem-solving abilities.</p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default Education;