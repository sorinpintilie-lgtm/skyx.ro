'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const scrollToFleet = () => {
    const fleetSection = document.getElementById('fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 md:pt-32"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <div className="relative w-48 h-20 md:w-80 md:h-32 mx-auto animate-float">
            <Image
              src="/sky.ro_logo_sig.png"
              alt="Sky.ro Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-gray-900 text-shadow px-4"
        >
          Ridicăm Viziunea Ta
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl lg:text-3xl mb-8 md:mb-12 text-gray-800 px-4"
        >
          Servicii Profesionale cu Drone de la Cer la Pământ
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToFleet}
          className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-sky-cyan to-sky-dark text-white text-lg md:text-xl font-semibold rounded-full shadow-2xl hover:shadow-sky-cyan/50 transition-all duration-300"
        >
          Explorează Flota
        </motion.button>
      </div>
    </section>
  );
}