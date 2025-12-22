'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type Season = 'spring' | 'summer' | 'fall' | 'winter';

const seasons = [
  {
    id: 'spring' as Season,
    label: 'Spring',
    description: 'Vibrant tulips, pansies, and fresh greenery',
    image: '/images/season-spring.jpg',
    color: '#8dd0ad',
  },
  {
    id: 'summer' as Season,
    label: 'Summer',
    description: 'Bold geraniums, petunias, and trailing vines',
    image: '/images/season-summer.jpg',
    color: '#a78461',
  },
  {
    id: 'fall' as Season,
    label: 'Fall',
    description: 'Warm mums, ornamental kale, and autumn foliage',
    image: '/images/season-fall.jpg',
    color: '#b99d7e',
  },
  {
    id: 'winter' as Season,
    label: 'Winter',
    description: 'Evergreens, berries, and festive accents',
    image: '/images/season-winter.jpg',
    color: '#267854',
  },
];

export default function SeasonalPreview() {
  const [hoveredSeason, setHoveredSeason] = useState<Season | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="w-full section-spacing bg-white overflow-hidden">
      <div className="container-padding max-w-[1800px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-forest-900 mb-16"
        >
          See the Transformation
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 h-[600px] lg:h-[700px]">
          {seasons.map((season, index) => (
            <motion.div
              key={season.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSeason(season.id)}
              onMouseLeave={() => setHoveredSeason(null)}
              className="relative group cursor-pointer overflow-hidden"
              style={{
                flex: hoveredSeason === season.id ? '2' : '1',
                transition: 'flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
                {season.label} image
              </div>

              <div 
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${season.color}dd 0%, ${season.color}99 40%, transparent 100%)`,
                  opacity: hoveredSeason === season.id ? 0.95 : 0.85,
                }}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredSeason === season.id || hoveredSeason === null ? 1 : 0.5,
                    y: hoveredSeason === season.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-3xl md:text-4xl lg:text-5xl mb-3 font-serif font-bold">
                    {season.label}
                  </h3>
                  
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: hoveredSeason === season.id ? 1 : 0,
                      height: hoveredSeason === season.id ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-white/95 text-base md:text-lg overflow-hidden"
                  >
                    {season.description}
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredSeason === season.id ? 1 : 0,
                    y: hoveredSeason === season.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-4"
                >
                  <div className="inline-flex items-center gap-2 text-white font-medium">
                    <span className="text-sm">Explore</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              <div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-white/30 transition-opacity duration-300"
                style={{ opacity: index === 0 ? 0 : 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
