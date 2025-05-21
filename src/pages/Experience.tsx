import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Users, CalendarClock } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import TimelineItem from '../components/TimelineItem';

const Experience = () => {
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
          <h1 className="text-3xl font-bold mb-2">My <span className="text-purple-400">Experience</span></h1>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            While I am seeking my first professional work experience, I have been actively involved in volunteer work and have taken on leadership responsibilities that have helped me develop valuable skills.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-semibold mb-6 text-white">Volunteer Experience</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
                <div className="flex items-start mb-4">
                  <div className="rounded-full bg-purple-500/10 p-3 mr-4">
                    <Users className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Maths Club</h3>
                    <p className="text-purple-400">2024 - Present</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  As an active member of the Maths Club, I help organize events, tutor peers in mathematical concepts, and participate in problem-solving competitions. This role has enhanced my analytical thinking and collaborative skills.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
                <div className="flex items-start mb-4">
                  <div className="rounded-full bg-purple-500/10 p-3 mr-4">
                    <Heart className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Youth Red Cross (YRC)</h3>
                    <p className="text-purple-400">2023 - Present</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  As a YRC volunteer, I participate in social service activities, health awareness campaigns, and community outreach programs. This experience has developed my empathy, communication skills, and sense of social responsibility.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl font-semibold mb-6 text-white">Leadership Roles</h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-purple-500/10 p-3 mr-4">
                  <Briefcase className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Class Coordinator</h3>
                  <p className="text-purple-400">Representing CSBS 2nd Year</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                As a class coordinator, I serve as a liaison between students and faculty, organizing academic and extracurricular activities, and helping resolve student concerns.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <p className="text-gray-300">Coordinate with faculty for academic schedules and announcements</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <p className="text-gray-300">Organize study groups and peer learning sessions</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <p className="text-gray-300">Represent student concerns to department administration</p>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <p className="text-gray-300">Help plan and execute class events and activities</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-purple-600/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-700/30">
              <div className="flex items-center">
                <CalendarClock className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Looking for First Work Experience</h3>
              </div>
              <p className="text-gray-300 mt-3">
                I am actively seeking internships and part-time opportunities to gain practical industry experience and apply my academic knowledge in a professional setting.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700 my-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Skills Gained From Experiences</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-700/50 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-purple-400 mb-2">Leadership</h4>
              <p className="text-gray-300 text-sm">Developed through coordination roles and team activities</p>
            </div>
            
            <div className="bg-gray-700/50 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-purple-400 mb-2">Communication</h4>
              <p className="text-gray-300 text-sm">Enhanced through student representation and volunteer work</p>
            </div>
            
            <div className="bg-gray-700/50 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-purple-400 mb-2">Time Management</h4>
              <p className="text-gray-300 text-sm">Balancing academic responsibilities with extracurricular activities</p>
            </div>
            
            <div className="bg-gray-700/50 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-purple-400 mb-2">Problem Solving</h4>
              <p className="text-gray-300 text-sm">Addressing student concerns and organizing events</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default Experience;