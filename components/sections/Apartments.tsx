'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Bed, Maximize, Move3D } from 'lucide-react';

type ApartmentType = 'studio' | '1bed' | '2bed' | '3bed';

const apartments = {
  studio: [
    {
      id: 1,
      title: 'Студия Классик',
      area: '32 м²',
      price: '$85,000',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Студия Премиум',
      area: '38 м²',
      price: '$98,000',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
    },
  ],
  '1bed': [
    {
      id: 3,
      title: '1-комнатная Компакт',
      area: '45 м²',
      price: '$120,000',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: '1-комнатная Стандарт',
      area: '52 м²',
      price: '$135,000',
      image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 5,
      title: '1-комнатная Премиум',
      area: '60 м²',
      price: '$155,000',
      image: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?q=80&w=2070&auto=format&fit=crop',
    },
  ],
  '2bed': [
    {
      id: 6,
      title: '2-комнатная Семейная',
      area: '72 м²',
      price: '$185,000',
      image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 7,
      title: '2-комнатная Бизнес',
      area: '85 м²',
      price: '$215,000',
      image: 'https://images.unsplash.com/photo-1560185009-5bf0f99d140e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 8,
      title: '2-комнатная Люкс',
      area: '95 м²',
      price: '$245,000',
      image: 'https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?q=80&w=2070&auto=format&fit=crop',
    },
  ],
  '3bed': [
    {
      id: 9,
      title: '3-комнатная Гранд',
      area: '110 м²',
      price: '$295,000',
      image: 'https://images.unsplash.com/photo-1560185228364-67b46a75c926?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 10,
      title: '3-комнатная Пентхаус',
      area: '135 м²',
      price: '$375,000',
      image: 'https://images.unsplash.com/photo-1560185129-6f6616d0d925?q=80&w=2070&auto=format&fit=crop',
    },
  ],
};

const tabs: { key: ApartmentType; label: string }[] = [
  { key: 'studio', label: 'Студия' },
  { key: '1bed', label: '1-комнатная' },
  { key: '2bed', label: '2-комнатная' },
  { key: '3bed', label: '3-комнатная' },
];

export default function Apartments() {
  const [activeTab, setActiveTab] = useState<ApartmentType>('1bed');
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
      id="apartments"
      ref={ref}
      className="section-padding bg-dark-50"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-subtitle">Выберите свой дом</span>
          <h2 className="section-title">Планировки квартир</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Тщательно продуманные планировки для любого образа жизни и бюджета.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-dark-600 hover:bg-dark-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Apartment Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {apartments[activeTab].map((apartment) => (
              <motion.div
                key={apartment.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={apartment.image}
                      alt={apartment.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-dark-900 mb-2">
                      {apartment.title}
                    </h3>

                    {/* Features */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-dark-600">
                      <div className="flex items-center space-x-1">
                        <Maximize className="w-4 h-4" />
                        <span>{apartment.area}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bed className="w-4 h-4" />
                        <span>{activeTab === 'studio' ? '0' : activeTab === '1bed' ? '1' : activeTab === '2bed' ? '2' : '3'} спалня</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Move3D className="w-4 h-4" />
                        <span>1 ванная</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-dark-500 uppercase tracking-wide">
                          Цена от
                        </div>
                        <div className="text-2xl font-serif font-bold text-primary-600">
                          {apartment.price}
                        </div>
                      </div>
                      <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center group-hover:bg-primary-700 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-gold-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Гибкие условия оплаты
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Мы предлагаем различные варианты оплаты, включая беспроцентную рассрочку. Свяжитесь с нашей командой для персональной консультации.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-dark-900 hover:text-white transition-all duration-300"
          >
            Получить расчёт
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
