'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'planters',
    number: '01',
    title: 'Planter Subscriptions',
    description: 'Year-round beauty with seasonal refreshes. Professional design, installation, and maintenance included.',
    href: '/planter-subscriptions',
    image: '/images/service-planters.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: 'seasonal',
    number: '02',
    title: 'Seasonal Decor',
    description: 'Special occasion decorations for holidays, life events, and celebrations. One-time installations.',
    href: '/seasonal-decor',
    image: '/images/service-seasonal.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 'irrigation',
    number: '03',
    title: 'Irrigation',
    description: 'Professional container plant irrigation setup and maintenance to keep your plants healthy.',
    href: '/irrigation',
    image: '/images/service-irrigation.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: 'maintenance',
    number: '04',
    title: 'Maintenance',
    description: 'Expert plant care including watering, pruning, deadheading, and health monitoring.',
    href: '/maintenance',
    image: '/images/service-maintenance.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'events',
    number: '05',
    title: 'Events & Rentals',
    description: 'Short-term planter solutions for parties, corporate events, real estate staging, and vacation rentals.',
    href: '/events-rentals',
    image: '/images/service-events.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  const [activeService, setActiveService] = useState('planters');
  const sectionRef = useRef(null);
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    services.forEach((service) => {
      const element = serviceRefs.current[service.id];
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveService(service.id);
              }
            });
          },
          { threshold: 0.6, rootMargin: '-20% 0px -20% 0px' }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToService = (serviceId: string) => {
    const element = serviceRefs.current[serviceId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={sectionRef} className="w-full section-spacing bg-cream-50">
      <div className="container-padding max-w-[1600px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-forest-900 mb-16"
        >
          What We Do
        </motion.h2>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 space-y-6"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToService(service.id)}
                className={`w-full text-left group transition-all duration-300 ${
                  activeService === service.id ? '' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeService === service.id
                        ? 'bg-forest-600 text-white scale-110'
                        : 'bg-white text-forest-600 border-2 border-gray-200'
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span
                        className={`text-sm font-mono transition-all duration-300 ${
                          activeService === service.id
                            ? 'text-forest-600 font-bold'
                            : 'text-gray-400'
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`text-lg font-semibold transition-all duration-300 ${
                          activeService === service.id
                            ? 'text-forest-900 font-bold'
                            : 'text-gray-700'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeService === service.id
                          ? 'max-h-24 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-3 ml-16 h-0.5 transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-forest-600 w-12'
                      : 'bg-gray-200 w-8'
                  }`}
                />
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  serviceRefs.current[service.id] = el;
                }}
                className="scroll-mt-32"
              >
                <Link
                  href={service.href}
                  className="group block relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                    {service.title} image placeholder
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                      <span className="text-sm font-mono text-white/70">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base mb-4 max-w-2xl">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
