'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Circle, Building, Hammer, Key, Home } from 'lucide-react';

const milestones = [
  {
    year: '2024',
    quarter: 'Q2',
    title: 'Начало строительства',
    description: 'Церемония закладки фундамента и начало строительных работ.',
    icon: Building,
    status: 'completed',
  },
  {
    year: '2024',
    quarter: 'Q4',
    title: 'Фундамент завершён',
    description: 'Фундамент и подземные конструкции завершены.',
    icon: Hammer,
    status: 'completed',
  },
  {
    year: '2025',
    quarter: 'Q2',
    title: 'Монолитные работы',
    description: 'Основная конструкция здания и каркас возведены.',
    icon: Building,
    status: 'in-progress',
  },
  {
    year: '2025',
    quarter: 'Q4',
    title: 'Фасадные работы',
    description: 'Наружный фасад и остекление завершены.',
    icon: Home,
    status: 'upcoming',
  },
  {
    year: '2026',
    quarter: 'Q2',
    title: 'Отделка',
    description: 'Внутренние работы, ландшафт и удобства завершены.',
    icon: CheckCircle2,
    status: 'upcoming',
  },
  {
    year: '2026',
    quarter: 'Q4',
    title: 'Сдача',
    description: 'Финальные проверки и передача резидентам.',
    icon: Key,
    status: 'upcoming',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500 text-green-500';
    case 'in-progress':
      return 'bg-gold-500 text-gold-500';
    case 'upcoming':
      return 'bg-gray-300 text-gray-400';
    default:
      return 'bg-gray-300 text-gray-400';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return CheckCircle2;
    case 'in-progress':
      return Circle;
    case 'upcoming':
      return Circle;
    default:
      return Circle;
  }
};

export default function Construction() {
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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="construction"
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
          <span className="section-subtitle">Ход строительства</span>
          <h2 className="section-title">Прогресс строительства</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Следите за нашим прогрессом по созданию Jar Jar Residence.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-dark-600 uppercase tracking-wide">
                Общий прогресс
              </span>
              <span className="text-2xl font-serif font-bold text-primary-600">35%</span>
            </div>
            <div className="h-3 bg-dark-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '35%' } : {}}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary-500 to-gold-500 rounded-full"
              />
            </div>
            <p className="text-sm text-dark-500 mt-3">
              Текущий этап: Монолитные работы
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-200 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {milestones.map((milestone, index) => {
              const StatusIcon = getStatusIcon(milestone.status);
              const MilestoneIcon = milestone.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 w-10 h-10 rounded-full ${getStatusColor(milestone.status).split(' ')[0]} flex items-center justify-center -translate-x-1/2 z-10`}>
                    <StatusIcon className="w-5 h-5 text-white" fill="currentColor" />
                  </div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3 md:justify-start">
                        <span className={`text-2xl font-serif font-bold ${getStatusColor(milestone.status).split(' ')[1].replace('text-', 'text-').replace('green-500', 'text-green-600').replace('gold-500', 'text-gold-600').replace('gray-400', 'text-gray-400')}`}>
                          {milestone.year}
                        </span>
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold uppercase tracking-wide">
                          {milestone.quarter}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-dark-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-dark-600 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty Space for Even Layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Инвестируйте в своё будущее сегодня
            </h3>
            <p className="text-white/80 mb-6">
              Ранние покупатели пользуются специальными скидками и гибкими условиями оплаты. Застеките свою мечту о доме до повышения цен.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-full font-semibold hover:bg-dark-900 hover:text-white transition-all duration-300"
            >
              Получить раннюю цену
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
