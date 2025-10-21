'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import DroneDetails from './DroneDetails';

interface DroneItemProps {
  name: string;
  image: string;
  description: string;
  specs: string[];
  side: 'left' | 'right';
  index: number;
}

export default function DroneItem({ name, image, description, specs, side, index }: DroneItemProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop: Realistic curved flight path
  const droneX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.7, 0.8, 0.9, 1],
    isMobile ? [0, 0, 0, 0, 0, 0, 0, 0] : [
      side === 'right' ? 500 : -500,
      side === 'right' ? 250 : -250,
      side === 'right' ? 80 : -80,
      0, 0,
      side === 'right' ? 80 : -80,
      side === 'right' ? 250 : -250,
      side === 'right' ? 500 : -500
    ]
  );

  const droneY = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.7, 0.8, 0.9, 1], isMobile ? [0, 0, 0, 0, 0, 0, 0, 0] : [-150, -80, -40, 0, 0, -40, -80, -200]);
  const droneRotate = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.7, 0.8, 0.9, 1], isMobile ? [0, 0, 0, 0, 0, 0, 0, 0] : [side === 'right' ? 25 : -25, side === 'right' ? 12 : -12, side === 'right' ? 5 : -5, 0, 0, side === 'right' ? 5 : -5, side === 'right' ? 12 : -12, side === 'right' ? 35 : -35]);
  const droneScale = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.7, 0.85, 1], isMobile ? [1, 1, 1, 1, 1, 1] : [0.3, 0.6, 1, 1, 0.6, 0.2]);
  const droneOpacity = useTransform(scrollYProgress, [0, 0.08, 0.3, 0.7, 0.92, 1], isMobile ? [1, 1, 1, 1, 1, 1] : [0, 0.3, 1, 1, 0.3, 0]);

  useEffect(() => {
    if (isMobile) {
      setShowDetails(true);
      return;
    }
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.35 && latest < 0.75) {
        setShowDetails(true);
      } else {
        setShowDetails(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, isMobile]);

  return (
    <div ref={ref} className={isMobile ? "relative min-h-screen py-10 overflow-hidden" : "relative h-[200vh]"}>
      <div className={isMobile ? "sticky top-1/2 -translate-y-1/2 w-full max-w-2xl mx-auto px-4" : "sticky top-1/2 -translate-y-1/2 w-full max-w-6xl mx-auto px-4"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {!isMobile && (
            <motion.div style={{ x: droneX, y: droneY, rotate: droneRotate, scale: droneScale, opacity: droneOpacity }} className={`relative ${side === 'left' ? 'md:order-2' : 'md:order-1'} flex justify-center`}>
              <motion.div animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative w-64 h-64 md:w-96 md:h-96">
                <Image src={image} alt={name} fill className="object-contain drop-shadow-2xl" />
              </motion.div>
            </motion.div>
          )}
          {isMobile && (
            <div className={`relative ${side === 'left' ? 'md:order-2' : 'md:order-1'} flex justify-center`}>
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <Image src={image} alt={name} fill className="object-contain drop-shadow-2xl" />
              </div>
            </div>
          )}

          <div className={`${side === 'left' ? 'md:order-1' : 'md:order-2'} flex justify-center`}>
            {showDetails && (
              <motion.div initial={isMobile ? {} : { opacity: 0, scale: 0.8, x: side === 'right' ? 50 : -50 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="w-full max-w-md glass-strong rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-sky-cyan/30">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 border-b-2 border-sky-cyan pb-2">{name}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
                <div className="space-y-2">
                  {specs.map((spec, i) => (
                    <motion.div key={i} initial={isMobile ? {} : { opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.1 }} className="flex items-center gap-2 text-gray-800">
                      <div className="w-2 h-2 bg-sky-cyan rounded-full" />
                      <span className="text-sm font-medium">{spec}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 h-1 bg-gradient-to-r from-sky-cyan to-sky-dark rounded-full" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}