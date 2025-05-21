import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  isLast?: boolean;
  delay?: number;
}

const TimelineItem = ({ 
  title, 
  subtitle, 
  period, 
  description, 
  isLast = false,
  delay = 0
}: TimelineItemProps) => {
  return (
    <motion.div 
      className="relative pl-8"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-0 top-6 bottom-0 w-px bg-gray-700"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-purple-500 border-4 border-gray-800 z-10"></div>
      
      <div className="mb-8">
        <div className="text-sm text-purple-400 mb-1">{period}</div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <div className="text-gray-300 mb-2">{subtitle}</div>
        {description && <p className="text-gray-400">{description}</p>}
      </div>
    </motion.div>
  );
};

export default TimelineItem;