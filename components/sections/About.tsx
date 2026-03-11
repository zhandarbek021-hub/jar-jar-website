'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Award, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Бизнес-класс',
    description: 'Премиум жилой комплекс для тех, кто ценит качество и комфорт.',
  },
  {
    icon: Sparkles,
    title: 'Современная архитектура',
    description: 'Современный дизайн с элегантными фасадами и тщательно спланированными планировками.',
  },
  {
    icon: Award,
    title: 'Городской образ жизни',
    description: 'Испытайте городскую жизнь в лучшем виде со всем необходимым у ваших дверей.',
  },
  {
    icon: Shield,
    title: 'Премиум инфраструктура',
    description: 'Передовые удобства и объекты для комфортного образа жизни.',
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
                alt="Jar Jar Residence Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <div className="text-4xl font-serif font-bold text-primary-600 mb-1">15+</div>
              <div className="text-dark-600 text-sm">Лет опыта</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="section-subtitle">О проекте</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="section-title">
              Где современная жизнь
              <br />
              <span className="gradient-text">Встречает элегантность</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-600 mb-8 leading-relaxed"
            >
              Jar Jar Residence — это премиум жилой комплекс бизнес-класса, устанавливающий новые стандарты городской жизни. Наши тщательно продуманные пространства сочетают современную архитектуру с функциональными планировками, создавая дома, которые вдохновляют и дарят комфорт.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-6 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-dark-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6 border-t border-dark-100">
              <p className="text-dark-600 mb-6">
                Каждая деталь была тщательно продумана для обеспечения вашего комфорта и удовлетворения. От премиум материалов до технологий умного дома — мы создали пространства, которые повышают качество вашей жизни.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-outline group"
              >
                Узнать больше о нас
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
