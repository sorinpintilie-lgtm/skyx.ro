'use client';

import { motion } from 'framer-motion';
import { Camera, Map, Search, Video, Wheat, AlertCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const services = [
  {
    icon: Camera,
    title: 'Fotografie Aeriană',
    description: 'Fotografii și videoclipuri aeriene spectaculoase pentru imobiliare, evenimente și campanii de marketing.',
  },
  {
    icon: Map,
    title: 'Topografie & Cartografiere',
    description: 'Studii topografice de înaltă precizie și cartografiere 3D pentru construcții și agricultură.',
  },
  {
    icon: Search,
    title: 'Inspecții',
    description: 'Inspecții sigure și eficiente ale infrastructurii pentru clădiri, turnuri și facilități industriale.',
  },
  {
    icon: Video,
    title: 'Cinematografie',
    description: 'Cinematografie profesională cu drone pentru filme, reclame și documentare.',
  },
  {
    icon: Wheat,
    title: 'Agricultură',
    description: 'Monitorizare culturi, analiză sănătate și soluții de agricultură de precizie.',
  },
  {
    icon: AlertCircle,
    title: 'Intervenții de Urgență',
    description: 'Evaluare aeriană rapidă pentru căutare și salvare, răspuns la dezastre și securitate.',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section id="services" ref={ref} className="relative min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4">Ce Oferim</h2>
          <p className="text-base md:text-xl text-gray-700">Servicii complete cu drone pentru fiecare nevoie</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10, scale: 1.02 }} className="glass-strong rounded-2xl p-8 hover:shadow-2xl hover:shadow-sky-cyan/20 transition-all duration-300 border-2 border-transparent hover:border-sky-cyan/30">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-cyan to-sky-dark rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.6, delay: 0.8 }} className="text-center mt-12 md:mt-16 px-4">
          <button className="glass-strong px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold text-gray-900 border-2 border-sky-cyan hover:bg-gradient-to-r hover:from-sky-cyan hover:to-sky-dark hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-sky-cyan/30 hover:-translate-y-1">
            Vezi Toate Serviciile
          </button>
        </motion.div>
      </div>
    </section>
  );
}