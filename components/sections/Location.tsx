'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag, TreePine, Train, GraduationCap, Briefcase, Utensils } from 'lucide-react';

const locations = [
  {
    icon: TreePine,
    name: 'Центральный парк',
    time: '5 мин',
    distance: '0.8 км',
  },
  {
    icon: Train,
    name: 'Метро',
    time: '7 мин',
    distance: '1.2 км',
  },
  {
    icon: ShoppingBag,
    name: 'ТЦ',
    time: '10 мин',
    distance: '2.0 км',
  },
  {
    icon: GraduationCap,
    name: 'Международная школа',
    time: '12 мин',
    distance: '2.5 км',
  },
  {
    icon: Briefcase,
    name: 'Бизнес-центр',
    time: '8 мин',
    distance: '1.5 км',
  },
  {
    icon: Utensils,
    name: 'Рестораны',
    time: '3 мин',
    distance: '0.5 км',
  },
];

export default function Location() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="location"
      ref={ref}
      className="section-padding bg-dark-50"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Удобное расположение</span>
          <h2 className="section-title">Всё рядом</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Расположенный в престижном районе города, Jar Jar Residence предлагает unparalleled доступ ко всем необходимым удобствам.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 shadow-2xl">
              {/* Stylized Map Background */}
              <svg
                className="w-full h-full opacity-30"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="300" fill="currentColor" className="text-primary-100" />
                <path
                  d="M0 150 Q100 100 200 150 T400 150"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary-300"
                  fill="none"
                />
                <path
                  d="M200 0 L200 300"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary-300"
                />
                <circle cx="200" cy="150" r="15" fill="currentColor" className="text-gold-500" />
                <circle cx="200" cy="150" r="30" fill="currentColor" className="text-gold-300" opacity="0.3" />
              </svg>

              {/* Location Pin */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/30">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
                <div className="w-8 h-8 bg-gold-500/50 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-ping" />
              </motion.div>
            </div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-0 bg-white p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-dark-900">Престижный район</div>
                  <div className="text-sm text-dark-600 mt-1">Центральная улица 123</div>
                  <div className="text-sm text-dark-500">Центр города</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Location Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                variants={itemVariants}
                className="glass-card p-5 hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-gold-100 transition-colors">
                      <location.icon className="w-6 h-6 text-primary-600 group-hover:text-gold-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-sm text-dark-500">{location.distance}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-serif font-bold text-gold-600">{location.time}</div>
                    <div className="text-xs text-dark-500 uppercase tracking-wide">на машине</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            Записаться на просмотр
          </button>
        </motion.div>
      </div>
    </section>
  );
}
