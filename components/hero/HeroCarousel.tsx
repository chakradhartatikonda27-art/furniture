'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { createFurnitureSvgDataUri } from '@/lib/utils/imageUtils';

const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: 'Modern Elegance',
    heading: 'Spoke Sofa',
    description: 'Sculptural wood legs combined with cloud-like Italian wool bouclé upholstery.',
    ctaText: 'Shop Collection',
    ctaLink: '/products/spoke-sofa',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1800&auto=format&fit=crop',
    fallback: createFurnitureSvgDataUri('sofa', 'Spoke Sofa', '#1E293B'),
  },
  {
    id: 2,
    eyebrow: 'Contemporary Grace',
    heading: 'Dining & Kitchen',
    description: 'Highlighting unique hand-turned timber touches crafted to elevate daily dining.',
    ctaText: 'Shop Collection',
    ctaLink: '/collections/dining-kitchen',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1800&auto=format&fit=crop',
    fallback: createFurnitureSvgDataUri('table', 'Dining & Kitchen', '#334155'),
  },
  {
    id: 3,
    eyebrow: 'Heritage Craft',
    heading: 'The Solace Lounge',
    description: 'Organic curves and EU Ecolabel certified European solid oak frames.',
    ctaText: 'Shop Collection',
    ctaLink: '/collections/solace-series',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop',
    fallback: createFurnitureSvgDataUri('chair', 'The Solace Lounge', '#0F172A'),
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedSlides, setFailedSlides] = useState<Record<number, boolean>>({});

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="px-4 md:px-8 py-4 max-w-[1440px] mx-auto relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-[480px] md:h-[580px] lg:h-[620px] rounded-hyper-xl overflow-hidden group shadow-hyper-card">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          const isFailed = failedSlides[slide.id];

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={isFailed ? slide.fallback : slide.image}
                alt={slide.heading}
                fill
                priority={index === 0}
                onError={() => setFailedSlides((prev) => ({ ...prev, [slide.id]: true }))}
                className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="max-w-2xl text-white space-y-4 animate-slide-up">
                  <span className="text-sm md:text-base font-semibold tracking-wide text-slate-100 block">
                    {slide.eyebrow}
                  </span>

                  <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tight leading-none text-white">
                    {slide.heading}
                  </h1>

                  <div className="pt-4">
                    <Link
                      href={slide.ctaLink}
                      className="inline-flex items-center space-x-2 bg-white text-hyper-black font-extrabold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-hyper-gray-100 transition-all shadow-lg"
                    >
                      <span>{slide.ctaText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Dots and Arrows */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4 text-white">
          <button onClick={prevSlide} aria-label="Previous Slide" className="p-1 hover:opacity-80">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
          <button onClick={nextSlide} aria-label="Next Slide" className="p-1 hover:opacity-80">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
