'use client';

import { motion } from 'framer-motion';

interface DroneDetailsProps {
  name: string;
  description: string;
  specs: string[];
  side: 'left' | 'right';
  isVisible: boolean;
}

export default function DroneDetails({
  name,
  description,
  specs,
  side,
  isVisible,
}: DroneDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={
        isVisible
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.8, y: 50 }
      }
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: 0.3,
      }}
      className={`relative md:absolute md:top-1/2 md:-translate-y-1/2 ${
        side === 'right' ? 'md:right-0 md:mr-8' : 'md:left-0 md:ml-8'
      } w-full md:w-80 max-w-md mx-auto md:mx-0 mt-8 md:mt-0 glass-strong rounded-2xl p-4 md:p-6 shadow-2xl border-2 border-sky-cyan/30`}
    >
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-sky-cyan pb-2">
        {name}
      </h3>

      {/* Description */}
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

      {/* Specs */}
      <div className="space-y-2">
        {specs.map((spec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center gap-2 text-gray-800"
          >
            <div className="w-2 h-2 bg-sky-cyan rounded-full" />
            <span className="text-sm font-medium">{spec}</span>
          </motion.div>
        ))}
      </div>

      {/* Accent Line */}
      <div className="mt-4 h-1 bg-gradient-to-r from-sky-cyan to-sky-dark rounded-full" />
    </motion.div>
  );
}