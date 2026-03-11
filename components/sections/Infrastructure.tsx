'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Briefcase, TreePine, Baby, Car, ShoppingBag } from 'lucide-react';

const infrastructureItems = [
  {
    icon: Coffee,
    title: 'Кафе и рестораны',
    description: 'Разнообразные варианты питания от уютных кафе до ресторанов премиум класса, всё в комплексе.',
  },
  {
    icon: Briefcase,
    title: 'Коворкинг',
    description: 'Современные рабочие пространства с высокоскоростным интернетом для профессионалов, работающих из дома.',
  },
  {
    icon: TreePine,
    title: 'Парк и отдых',
    description: 'Прекрасные озеленённые сады с прогулочными дорожками, скамейками и зонами отдыха.',
  },
  {
    icon: Baby,
    title: 'Семейные зоны',
    description: 'Специальные детские площадки и семейные зоны для резидентов с детьми.',
  },
  {
    icon: Car,
    title: 'Удобный паркинг',
    description: 'Безопасный подземный паркинг с зарядными станциями для электромобилей.',
  },
  {
    icon: ShoppingBag,
    title: 'Магазины',
    description: 'Магазины на первом этаже с ежедневными товарами и специализированными товарами.',
  },
];

export default function Infrastructure() {
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
      id="infrastructure"
      ref={ref}
      className="section-padding bg-dark-900 text-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2053&auto=format&fit=crop"
                    alt="Лобби"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop"
                    alt="Двор"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
                    alt="Сад"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                    alt="Удобства"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-gold-600/20 border border-gold-600/30 rounded-full text-gold-400 text-sm font-medium tracking-widest uppercase">
                Удобства и образ жизни
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Всё, что нужно,
              <br />
              <span className="text-gold-400">В одном месте</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/70 mb-10 leading-relaxed"
            >
              В Jar Jar Residence мы считаем, что истинная роскошь — это комфорт и качество жизни. Наша комплексная инфраструктура гарантирует, что всё необходимое будет в нескольких шагах.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              {infrastructureItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-gold-600/20 transition-colors">
                    <item.icon className="w-6 h-6 text-gold-400 group-hover:text-gold-300 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 group-hover:text-gold-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary group"
              >
                Изучить все удобства
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
