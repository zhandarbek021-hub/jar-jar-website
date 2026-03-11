'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'О нас', href: '#about' },
  { name: 'Квартиры', href: '#apartments' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'Расположение', href: '#location' },
  { name: 'Контакты', href: '#contact' },
];

const legalLinks = [
  { name: 'Политика конфиденциальности', href: '#' },
  { name: 'Условия использования', href: '#' },
  { name: 'Политика cookies', href: '#' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-dark-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                Подпишитесь на обновления
              </h3>
              <p className="text-white/60">
                Получайте информацию о прогрессе строительства и специальных предложениях.
              </p>
            </div>
            <form className="flex gap-3 max-w-md">
              <input
                type="email"
                placeholder="Введите ваш email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-600 text-white rounded-xl font-medium hover:bg-gold-700 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-serif font-bold mb-4">
              <span className="text-gold-400">JAR JAR</span> RESIDENCE
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Премиум жильё в центре города. Откройте для себя новый стандарт роскоши и комфорта.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Быстрые ссылки</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/60 hover:text-gold-400 transition-colors flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {link.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Свяжитесь с нами</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <span className="text-white/60">
                Центральная улица 123<br />
                Центр города, 050000
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <a href="tel:+77771234567" className="text-white/60 hover:text-gold-400 transition-colors">
                +7 (777) 123-45-67
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <a href="mailto:info@jarjarresidence.com" className="text-white/60 hover:text-gold-400 transition-colors">
                info@jarjarresidence.com
              </a>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Часы работы</h4>
          <ul className="space-y-3 text-white/60">
            <li className="flex justify-between">
              <span>Понедельник - Пятница</span>
              <span>9:00 - 18:00</span>
            </li>
            <li className="flex justify-between">
              <span>Суббота</span>
              <span>10:00 - 16:00</span>
            </li>
            <li className="flex justify-between">
              <span>Воскресенье</span>
              <span>Закрыто</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Jar Jar Residence. Все права защищены.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
