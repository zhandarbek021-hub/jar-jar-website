'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2074&auto=format&fit=crop',
    category: 'Фасад',
    title: 'Здание',
    size: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-22b5c127f511?q=80&w=2072&auto=format&fit=crop',
    category: 'Лобби',
    title: 'Главный вход',
    size: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    category: 'Квартира',
    title: 'Гостиная',
    size: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    category: 'Квартира',
    title: 'Спальня',
    size: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    category: 'Фасад',
    title: 'Ночной вид',
    size: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2002&auto=format&fit=crop',
    category: 'Двор',
    title: 'Зелёная зона',
    size: 'col-span-2 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    category: 'Квартира',
    title: 'Кухня',
    size: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1974&auto=format&fit=crop',
    category: 'Квартира',
    title: 'Ванная',
    size: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-subtitle">Визуальный тур</span>
          <h2 className="section-title">Фотогалерея</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Оцените красоту и элегантность Jar Jar Residence через нашу отобранную фотогалерею.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${image.size}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <div>
                  <span className="text-xs text-gold-400 uppercase tracking-wide">
                    {image.category}
                  </span>
                  <div className="text-white font-semibold">{image.title}</div>
                </div>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 bg-dark-950/95 backdrop-blur-sm z-50 flex items-center justify-center"
                onKeyDown={handleKeyDown}
                tabIndex={0}
              />
              {/* Content */}
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-6xl w-full"
                >
                  {/* Image */}
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].title}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
                  />

                  {/* Info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-dark-900/80 backdrop-blur-md rounded-2xl p-4 md:p-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <span className="text-xs text-gold-400 uppercase tracking-wide">
                          {galleryImages[selectedImage].category}
                        </span>
                        <div className="font-semibold">
                          {galleryImages[selectedImage].title}
                        </div>
                      </div>
                      <div className="text-sm text-white/60">
                        {selectedImage + 1} / {galleryImages.length}
                      </div>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-outline"
          >
            Записаться на персональный тур
          </button>
        </motion.div>
      </div>
    </section>
  );
}
