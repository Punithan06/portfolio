import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, MonitorSmartphone, Languages, Award, Workflow, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SkillCard from '../components/SkillCard';

const Skills = () => {
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
          <h1 className="text-3xl font-bold mb-2">My <span className="text-purple-400">Skills</span></h1>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            As a Computer Science and Business Systems student, I've developed a diverse set of technical and soft skills through my academic studies and extracurricular activities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          <SkillCard 
            title="Programming Languages" 
            items={['C', 'C++', 'Python', 'Java (Beginner)']} 
            icon={<Code size={24} />}
            delay={0.2}
          />
          
          <SkillCard 
            title="Web Development" 
            items={['HTML', 'CSS', 'JavaScript']} 
            icon={<Globe size={24} />}
            delay={0.3}
          />
          
          <SkillCard 
            title="Database" 
            items={['SQL (Beginner)', 'Database Design', 'Data Management']} 
            icon={<Database size={24} />}
            delay={0.4}
          />
          
          <SkillCard 
            title="Software & Tools" 
            items={['MS Word', 'MS Excel', 'Windows OS', 'Basic IDE Usage']} 
            icon={<MonitorSmartphone size={24} />}
            delay={0.5}
          />
          
          <SkillCard 
            title="Languages" 
            items={['Tamil (Native)', 'English (Fluent)', 'Kannada (Fluent)', 'Hindi (Fluent)']} 
            icon={<Languages size={24} />}
            delay={0.6}
          />
          
          <SkillCard 
            title="Soft Skills" 
            items={['Team Collaboration', 'Time Management', 'Problem Solving', 'Communication']} 
            icon={<Workflow size={24} />}
            delay={0.7}
          />
        </div>

        <AnimatedSection delay={0.4} className="my-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Technical Proficiency</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-4">Programming & Web</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">HTML/CSS</span>
                    <span className="text-sm font-medium text-purple-400">Basic</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">JavaScript</span>
                    <span className="text-sm font-medium text-purple-400">Basic</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "55%" }}
                      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">Python</span>
                    <span className="text-sm font-medium text-purple-400">Basic</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">Java</span>
                    <span className="text-sm font-medium text-purple-400">Beginner</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "40%" }}
                      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-4">Other Technical Skills</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">SQL</span>
                    <span className="text-sm font-medium text-purple-400">Beginner</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "45%" }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">MS Excel</span>
                    <span className="text-sm font-medium text-purple-400">Basic</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "55%" }}
                      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">MS Word</span>
                    <span className="text-sm font-medium text-purple-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">Cloud Services</span>
                    <span className="text-sm font-medium text-purple-400">Basic (Oracle)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "40%" }}
                      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default Skills;