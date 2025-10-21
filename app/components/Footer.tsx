'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mulțumim pentru mesaj! Vă vom contacta în curând.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer id="contact" className="relative min-h-screen flex flex-col items-end justify-end pt-40 pb-0">
      <div className="absolute bottom-0 left-0 w-full h-full min-h-screen z-0">
        <Image src="/footer part.png" alt="" fill className="object-cover object-bottom" priority />
      </div>

      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="absolute right-4 md:right-12 bottom-24 md:bottom-32 z-10 w-[90%] md:w-96 glass-strong rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-sky-cyan/30 animate-float mb-20 md:mb-24">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Contactează-ne</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Numele Tău" required className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-cyan focus:border-transparent transition-all text-gray-900 placeholder-gray-600" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email-ul Tău" required className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-cyan focus:border-transparent transition-all text-gray-900 placeholder-gray-600" />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Număr de Telefon" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-cyan focus:border-transparent transition-all text-gray-900 placeholder-gray-600" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mesajul Tău" required rows={4} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-cyan focus:border-transparent transition-all resize-none text-gray-900 placeholder-gray-600" />
          <button type="submit" className="w-full py-3 md:py-4 bg-gradient-to-r from-sky-cyan to-sky-dark text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-sky-cyan/50 transition-all duration-300 hover:-translate-y-1">Trimite Mesaj</button>
        </form>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="relative z-10 w-[95%] md:w-[90%] max-w-6xl mx-auto mb-6 glass-strong rounded-full shadow-2xl border-2 border-white/40 px-6 md:px-12 py-4 md:py-6 bg-white/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 text-center md:text-left">
          <div className="flex items-center gap-3 flex-1">
            <div className="relative w-24 h-10">
              <Image src="/sky.ro_logo_sig.png" alt="Sky.ro" fill className="object-contain" />
            </div>
            <span className="text-gray-900 mx-2 hidden md:inline font-bold">|</span>
            <span className="text-sm md:text-base text-gray-900 font-medium drop-shadow-sm">Servicii Profesionale cu Drone</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm text-gray-900 font-medium">
            <span className="drop-shadow-sm">contact@sky.ro</span>
            <span className="hidden md:inline font-bold">•</span>
            <span className="drop-shadow-sm">+40 XXX XXX XXX</span>
            <span className="hidden md:inline font-bold">•</span>
            <span className="drop-shadow-sm">București, România</span>
          </div>
          <div className="text-xs text-gray-800 font-medium drop-shadow-sm">© 2024 Sky.ro</div>
        </div>
      </motion.div>
    </footer>
  );
}