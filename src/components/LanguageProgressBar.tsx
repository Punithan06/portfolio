import React from 'react';
import { motion } from 'framer-motion';

interface LanguageProgressBarProps {
  language: string;
  level: string;
  percentage: number;
}

const LanguageProgressBar = ({ language, level, percentage }: LanguageProgressBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{language}</span>
        <span className="text-sm font-medium text-purple-400">{level}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default LanguageProgressBar;