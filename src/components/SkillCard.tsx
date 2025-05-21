import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  delay?: number;
}

const SkillCard = ({ title, items, icon, delay = 0 }: SkillCardProps) => {
  return (
    <motion.div 
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="rounded-full bg-purple-500/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
        <div className="text-purple-400">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-center">
            <span className="mr-2 text-purple-400">•</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;