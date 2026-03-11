'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Главная', href: '#hero' },
  { name: 'О проекте', href: '#about' },
  { name: 'Расположение', href: '#location' },
  { name: 'Квартиры', href: '#apartments' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'Контакты', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center space-x-2 group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
            >
              <motion.div
                className="text-xl md:text-2xl font-serif font-bold tracking-tight"
                style={{
                  color: isScrolled ? '#1a1a1a' : '#ffffff',
                }}
              >
                <span className="text-gold-500">JAR JAR</span> RESIDENCE
              </motion.div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors hover:text-gold-600',
                    isScrolled ? 'text-dark-700' : 'text-white'
                  )}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className={cn(
                  'btn-primary px-6 py-3 text-sm font-medium rounded-full',
                  isScrolled ? '' : 'bg-gold-600 hover:bg-gold-700'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Записаться на консультацию
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                isScrolled
                  ? 'text-dark-900 hover:bg-dark-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 text-dark-600 hover:bg-dark-100 rounded-lg"
                >
                  <X size={24} />
                </button>

                {/* Logo */}
                <div className="mb-8 pt-4">
                  <div className="text-xl font-serif font-bold text-dark-900">
                    <span className="text-gold-600">JAR JAR</span> RESIDENCE
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left px-4 py-3 text-dark-700 hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors text-lg font-medium"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-dark-100">
                  <a
                    href="tel:+77771234567"
                    className="flex items-center space-x-3 text-dark-900 hover:text-gold-600 transition-colors"
                  >
                    <div className="p-3 bg-gold-100 rounded-full">
                      <Phone size={20} className="text-gold-600" />
                    </div>
                    <div>
                      <div className="text-sm text-dark-500">Позвоните нам</div>
                      <div className="font-semibold">+7 (777) 123-45-67</div>
                    </div>
                  </a>

                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="mt-4 w-full btn-primary py-4 rounded-full font-medium"
                  >
                    Записаться на консультацию
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
