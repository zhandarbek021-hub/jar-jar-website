'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2074&auto=format&fit=crop')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-hero-gradient" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-custom"
      >
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium tracking-widest uppercase">
              Премиум жилье в центре города
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-6 leading-tight"
          >
            JAR JAR
            <br />
            <span className="text-gold-400">RESIDENCE</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl text-balance"
          >
            Откройте для себя новый стандарт роскошной жизни. Современная архитектура встречается с премиум инфраструктурой в самом престижном районе города.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => document.getElementById('apartments')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary px-8 py-4 rounded-full font-semibold text-lg group"
            >
              Смотреть квартиры
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-secondary px-8 py-4 rounded-full font-semibold text-lg"
            >
              Записаться на консультацию
            </button>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold-400">12</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Этажей</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold-400">240</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Квартир</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold-400">2026</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Сдача</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        style={{ y }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/60 hover:text-white transition-colors cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Прокрутить</span>
        <ChevronDown className="w-6 h-6 scroll-indicator" />
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
