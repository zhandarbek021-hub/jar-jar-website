'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const apartmentTypes = [
  'Студия',
  '1-комнатная',
  '2-комнатная',
  '3-комнатная',
  'Пентхаус',
  'Ещё не решил(а)',
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    interest: 'Ещё не решил(а)',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Номер телефона обязателен';
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For demo purposes, just show success
    setStatus('success');

    // Reset form after success
    setTimeout(() => {
      setStatus('idle');
      setFormData({
        name: '',
        phone: '',
        email: '',
        interest: 'Ещё не решил(а)',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (777) 123-45-67',
      link: 'tel:+77771234567',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@jarjarresidence.com',
      link: 'mailto:info@jarjarresidence.com',
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'Центральная улица 123, Центр города',
      link: '#location',
    },
    {
      icon: Clock,
      title: 'Часы работы',
      value: 'Пн - Сб: 9:00 - 18:00',
      link: undefined,
    },
  ];

  return (
    <section
      id="contact"
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
          <span className="section-subtitle">Свяжитесь с нами</span>
          <h2 className="section-title">Запишитесь на консультацию</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Наша команда готова помочь вам найти идеальный дом. Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-dark-50 rounded-3xl p-8 md:p-10">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-dark-900 mb-2">
                    Спасибо!
                  </h3>
                  <p className="text-dark-600">
                    Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark-700 mb-2"
                    >
                      Полное имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                        errors.name
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-dark-200 focus:border-primary-500'
                      } bg-white focus:outline-none`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-dark-700 mb-2"
                    >
                      Номер телефона *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                        errors.phone
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-dark-200 focus:border-primary-500'
                      } bg-white focus:outline-none`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ivan@example.com"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-dark-200 focus:border-primary-500'
                      } bg-white focus:outline-none`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Interest */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-dark-700 mb-2"
                    >
                      Интересующая квартира
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-dark-200 focus:border-primary-500 bg-white focus:outline-none transition-colors cursor-pointer"
                    >
                      {apartmentTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dark-700 mb-2"
                    >
                      Сообщение (необязательно)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Расскажите нам о ваших требованиях..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-dark-200 focus:border-primary-500 bg-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn btn-primary py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Отправка...
                      </span>
                    ) : (
                      'Получить консультацию'
                    )}
                  </button>

                  <p className="text-xs text-dark-500 text-center">
                    Отправляя эту форму, вы соглашаетесь с нашей{' '}
                    <a href="#" className="text-primary-600 hover:underline">
                      Политикой конфиденциальности
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`bg-white p-5 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group ${info.link ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary-600 transition-colors">
                    <info.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-sm text-dark-500 mb-1">{info.title}</div>
                  <div className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                    {info.value}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3] bg-dark-100 relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.777603066848!2d76.93192567664287!3d43.235146979137626!2m3!1f0!2f0!3m2!1s0x38836f30a642d2bb%3A0x632d253774990051!2sAlmaty%2C%20Kazakhstan!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
