'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'hero', label: 'Acasă' },
  { id: 'fleet', label: 'Flotă' },
  { id: 'services', label: 'Servicii' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [blobPosition, setBlobPosition] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeLink = document.querySelector(`[data-section="${activeSection}"]`);
    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const container = activeLink.closest('nav');
      if (container) {
        const containerRect = container.getBoundingClientRect();
        setBlobPosition({
          left: rect.left - containerRect.left,
          width: rect.width,
        });
      }
    }
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="glass-strong rounded-full shadow-2xl px-4 md:px-8 py-3 md:py-4 w-full max-w-3xl">
        <nav className="relative">
          <motion.div
            className="absolute h-10 md:h-12 bg-gradient-to-r from-sky-cyan to-sky-dark rounded-full -z-10"
            animate={{ left: blobPosition.left, width: blobPosition.width }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          />
          <ul className="flex justify-center items-center gap-2 md:gap-6 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  data-section={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative z-10 px-3 md:px-5 lg:px-6 py-2 md:py-3 font-semibold text-sm md:text-base lg:text-lg transition-colors duration-300 whitespace-nowrap ${activeSection === item.id ? 'text-white' : 'text-gray-800 hover:text-sky-dark'}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}