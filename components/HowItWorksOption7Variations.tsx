'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const steps = [
  {
    number: '1',
    title: 'Schedule a Design Consultation',
    description: 'During the consultation we will share how our service works, learn your preferences for colors and textures, and share our straight-forward payment process.',
    image: '/images/potted_plants_patio_pool.webp',
  },
  {
    number: '2',
    title: 'Make Your Selections',
    description: 'We will help you select what fits your style and budget.',
    image: '/images/seasonal-decor.jpeg',
  },
  {
    number: '3',
    title: 'Custom On-Site Installation',
    description: 'We communicate by text/email your installation week with no surprises. Everything is delivered fresh to you from our greenhouses for same-day installation. All debris is hauled away.',
    image: '/images/fall_planter.jpg',
  },
];

// Option 1: Base 7 (Control)
function Option1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 1: Base 7 (Control) - White Background</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />

              {/* Default state */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-7xl font-bold text-white/30 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Hover state */}
              <div className={`absolute inset-0 bg-gradient-to-b from-forest-900/95 to-forest-900/98 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-5xl font-bold text-white/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-wide uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Option 2: 7 with Lowered Text
function Option2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 2: Lowered Text on Hover</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />

              {/* Default state */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-7xl font-bold text-white/30 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Hover state - text moved down (65% from top instead of center) */}
              <div className={`absolute inset-0 bg-gradient-to-b from-forest-900/95 to-forest-900/98 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full flex flex-col justify-end pb-12 text-center px-8" style={{ paddingTop: '65%' }}>
                  <div className="text-5xl font-bold text-white/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-wide uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Option 3: 7 with Bigger Title
function Option3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 3: Bigger Title + Lowered Text</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />

              {/* Default state */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-7xl font-bold text-white/30 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Hover state - bigger title, text moved down slightly */}
              <div className={`absolute inset-0 bg-gradient-to-b from-forest-900/95 to-forest-900/98 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full flex flex-col justify-end pb-12 text-center px-6" style={{ paddingTop: '60%' }}>
                  <div className="text-4xl font-bold text-white/20 mb-3">{step.number}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide uppercase leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Option 4: 7 with Brighter Watermark Numbers + Hover
function Option4() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 4: Brighter Watermark Numbers</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />

              {/* Default state - brighter number (50% instead of 30%) */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-7xl font-bold text-white/50 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Hover state - number even more visible (40% instead of 20%) */}
              <div className={`absolute inset-0 bg-gradient-to-b from-forest-900/95 to-forest-900/98 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-5xl font-bold text-white/40 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-wide uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Option 5: No Numbers on Photos, Numbers in Text
function Option5() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 5: Numbers Only in Text</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />

              {/* Default state - no numbers, just title */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <h3 className="text-2xl font-semibold text-white tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Hover state - numbers in the text */}
              <div className={`absolute inset-0 bg-gradient-to-b from-forest-900/95 to-forest-900/98 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-wide uppercase">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Option 6: 7 with Bubble Numbers (No Watermark)
function Option6() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 6: Bubble Number Badges</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />

              {/* Default state - no numbers, just title */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <h3 className="text-2xl font-semibold text-white tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Hover state - bubble badge with number */}
              <div className={`absolute inset-0 bg-gradient-to-b from-forest-900/95 to-forest-900/98 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-forest-700">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-wide uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Option 7A: White Background
function Option7A() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 7A: White Background (Lowered Text)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />

              <div className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-7xl font-bold text-white/30 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-b from-forest-900/95 to-forest-900/98 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full flex flex-col justify-end pb-12 text-center px-8" style={{ paddingTop: '65%' }}>
                  <div className="text-5xl font-bold text-white/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-wide uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Option 7B: Green Background with White Cards
function Option7B() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-forest-50">
      <div className="container-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-600 uppercase tracking-wider">Option 7B: Soft Green Background (Lowered Text)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer bg-white shadow-sm"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundColor: '#e5e7eb',
                }}
              />

              <div className={`absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="text-7xl font-bold text-white/30 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-b from-forest-900/95 to-forest-900/98 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full flex flex-col justify-end pb-12 text-center px-8" style={{ paddingTop: '65%' }}>
                  <div className="text-5xl font-bold text-white/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 tracking-wide uppercase">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/95 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Option 8: Horizontal Layout
function Option8() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 bg-white border-t-2 border-gray-200">
      <div className="container-padding max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-gray-900">
            WE MAKE IT EASY
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Option 8: Horizontal Layout with Hover</p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative grid md:grid-cols-[300px_1fr] gap-0 rounded-lg overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image section */}
              <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${step.image})`,
                    backgroundColor: '#e5e7eb',
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r from-black/30 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="h-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/40">{step.number}</div>
                  </div>
                </div>
              </div>

              {/* Text section - Default: just title */}
              <div className={`relative bg-white p-8 flex items-center transition-all duration-500 ${hoveredIndex === index ? 'bg-forest-900' : 'bg-gray-50'}`}>
                <div>
                  <h3 className={`text-2xl font-semibold mb-0 transition-all duration-500 ${hoveredIndex === index ? 'text-white mb-4' : 'text-gray-900'}`}>
                    {step.title}
                  </h3>

                  {/* Description appears on hover */}
                  <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-white/95 leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main component that renders all 8 variations
export default function HowItWorksOption7Variations() {
  return (
    <>
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
      <Option6 />
      <Option7A />
      <Option7B />
      <Option8 />
    </>
  );
}
