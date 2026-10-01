'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data/mockData';

export const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="bg-hyper-yellow-bg py-20 px-4 md:px-8 my-12 border-y border-amber-200/60 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 block">
            Customer Appreciation
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-hyper-black tracking-tight">
            What Clients Talk About Us
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-14 rounded-hyper-xl border border-amber-200/80 shadow-hyper-hover space-y-8 text-center relative z-10">
            {/* Stars */}
            <div className="flex justify-center space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-4xl font-black text-hyper-black leading-snug tracking-tight max-w-3xl mx-auto">
              &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center space-y-2 pt-4 border-t border-hyper-gray-200">
              {TESTIMONIALS[activeIndex].avatar && (
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 shadow-sm">
                  <Image
                    src={TESTIMONIALS[activeIndex].avatar!}
                    alt={TESTIMONIALS[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="text-lg font-extrabold text-hyper-black">
                {TESTIMONIALS[activeIndex].name}
              </div>
              <div className="text-xs font-semibold text-hyper-gray-600">
                {TESTIMONIALS[activeIndex].location}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 -mx-4 md:-mx-12 z-20 pointer-events-none">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="pointer-events-auto w-12 h-12 rounded-full bg-white text-hyper-black border border-amber-200 flex items-center justify-center shadow-lg hover:bg-hyper-black hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="pointer-events-auto w-12 h-12 rounded-full bg-white text-hyper-black border border-amber-200 flex items-center justify-center shadow-lg hover:bg-hyper-black hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
