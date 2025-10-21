'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Acasă' },
  { id: 'fleet', label: 'Flotă' },
  { id: 'services', label: 'Servicii' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [blobPosition, setBlobPosition] = useState({ left: 0, width: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    if (activeLink && !isMenuOpen) {
      const rect = activeLink.getBoundingClientRect();
      const container = activeLink.closest('nav');
      if (container) {
        const containerRect = container.getBoundingClientRect();
        setBlobPosition({ left: rect.left - containerRect.left, width: rect.width });
      }
    }
  }, [activeSection, isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="hidden md:flex fixed top-2 md:top-4 left-0 right-0 z-50 justify-center px-4">
        <div className="glass-strong rounded-full shadow-2xl px-4 md:px-8 py-3 md:py-4 w-full max-w-3xl">
          <nav className="relative">
            <motion.div className="absolute h-10 md:h-12 bg-gradient-to-r from-sky-cyan to-sky-dark rounded-full -z-10" animate={{ left: blobPosition.left, width: blobPosition.width }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} style={{ top: '50%', transform: 'translateY(-50%)' }} />
            <ul className="flex justify-center items-center gap-2 md:gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button data-section={item.id} onClick={() => scrollToSection(item.id)} className={`relative z-10 px-3 md:px-5 lg:px-6 py-2 md:py-3 font-semibold text-sm md:text-base lg:text-lg transition-colors duration-300 whitespace-nowrap ${activeSection === item.id ? 'text-white' : 'text-gray-800 hover:text-sky-dark'}`}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Hamburger Button */}
      <motion.button initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden fixed top-4 right-4 z-50 glass-strong rounded-full p-3 shadow-2xl">
        {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="md:hidden fixed top-20 right-4 z-40 glass-strong rounded-2xl shadow-2xl p-6 w-64">
            <nav>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-sky-cyan to-sky-dark text-white' : 'text-gray-800 hover:bg-white/20'}`}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}