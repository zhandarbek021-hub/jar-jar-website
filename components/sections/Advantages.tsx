'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Home,
  Car,
  TreeDeciduous,
  ScanFace,
  Shield,
  Baby,
  Dumbbell,
  Store,
  Wifi,
  Tv,
  Droplets,
  Thermometer,
} from 'lucide-react';

const advantages = [
  {
    icon: ScanFace,
    title: 'Вход по Face ID',
    description: 'Продвинутая биометрическая система контроля доступа для максимальной безопасности.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Shield,
    title: 'Охрана 24/7',
    description: 'Круглосуточная охрана с видеонаблюдением и профессиональными охранниками.',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Home,
    title: 'Умный дом',
    description: 'Управляйте домом голосовыми командами и через мобильное приложение.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Car,
    title: 'Подземный паркинг',
    description: 'Двухуровневый подземный паркинг с зарядными станциями для электромобилей.',
    color: 'bg-gray-100 text-gray-600',
  },
  {
    icon: TreeDeciduous,
    title: 'Озеленённый двор',
    description: 'Прекрасные зелёные зоны с прогулочными дорожками и зонами отдыха.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Baby,
    title: 'Детская площадка',
    description: 'Безопасные и интересные игровые зоны для детей всех возрастов.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Dumbbell,
    title: 'Фитнес-зона',
    description: 'Современный тренажёрный зал с премиум оборудованием и йога-студией.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Store,
    title: 'Коммерческие помещения',
    description: 'Розничная торговля на первом этаже с кафе, магазинами и необходимыми услугами.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Wifi,
    title: 'Высокоскоростной интернет',
    description: 'Оптоволоконная инфраструктура со скоростью до 1 Гбит/с.',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: Tv,
    title: 'Кабельное ТВ',
    description: 'Премиум телевизионные пакеты включены в плату за обслуживание.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Droplets,
    title: 'Очистка воды',
    description: 'Централизованная система фильтрации воды для чистой питьевой воды.',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    icon: Thermometer,
    title: 'Климат-контроль',
    description: 'Индивидуальный контроль температуры в каждой квартире.',
    color: 'bg-rose-100 text-rose-600',
  },
];

export default function Advantages() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="advantages"
      ref={ref}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Почему мы</span>
          <h2 className="section-title">Премиум удобства</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Каждая деталь была тщательно создана, чтобы предоставить вам исключительный опыт проживания.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:shadow-card-hover transition-all duration-300">
                <div className={`w-14 h-14 ${advantage.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-dark-900 rounded-3xl p-8 md:p-12"
        >
          {[
            { value: '12', label: 'Этажей' },
            { value: '240', label: 'Квартир' },
            { value: '200+', label: 'Паркомест' },
            { value: '4.9', label: 'Рейтинг' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold-400 mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
