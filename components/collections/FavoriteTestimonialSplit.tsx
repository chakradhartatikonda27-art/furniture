'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { PRODUCTS, TESTIMONIALS } from '@/lib/data/mockData';

export const FavoriteTestimonialSplit: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const favoriteProduct = PRODUCTS[0]; // Spoke Sofa or Bow Chair

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  return (
    <section className="py-12 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Large Lifestyle Image + Floating Product Card */}
        <div className="lg:col-span-7 relative min-h-[480px] md:min-h-[560px] rounded-hyper-xl overflow-hidden group shadow-hyper-card flex items-end p-6 md:p-8">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop"
            alt="Favorite Product Lifestyle"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Floating Product Card */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-hyper-lg border border-white/40 shadow-2xl max-w-sm flex items-center space-x-4 animate-slide-up">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-hyper overflow-hidden bg-hyper-gray-100 flex-shrink-0">
              <Image
                src={favoriteProduct.thumbnail}
                alt={favoriteProduct.name}
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-1 flex-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-hyper-gray-600 block">
                {favoriteProduct.category}
              </span>
              <Link href={`/products/${favoriteProduct.slug}`} className="block">
                <h4 className="text-sm md:text-base font-extrabold text-hyper-black hover:text-hyper-blue-bright transition-colors line-clamp-1">
                  {favoriteProduct.name}
                </h4>
              </Link>
              <div className="text-sm font-black text-hyper-black">
                ${favoriteProduct.price.toLocaleString()}
              </div>

              {/* Color Swatches */}
              <div className="flex items-center space-x-1 pt-1">
                {favoriteProduct.colors.map((c) => (
                  <span
                    key={c.name}
                    className="w-3.5 h-3.5 rounded-full border border-slate-300"
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Light Lavender/Blue Background + Testimonial */}
        <div className="lg:col-span-5 bg-hyper-lavender rounded-hyper-xl p-8 md:p-12 flex flex-col justify-between border border-blue-100 relative shadow-sm">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full text-xs font-bold text-hyper-blue-bright shadow-sm border border-blue-100">
              <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
              <span>Our Favorite Products</span>
            </div>

            <blockquote className="text-xl md:text-3xl font-black text-hyper-black leading-snug tracking-tight">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>
          </div>

          <div className="pt-8 border-t border-blue-200/60 flex items-center justify-between">
            {/* Customer info */}
            <div>
              <div className="text-base font-extrabold text-hyper-black">
                {currentTestimonial.name}
              </div>
              <div className="text-xs font-semibold text-hyper-gray-600">
                {currentTestimonial.location}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold text-hyper-gray-600">
                {currentTestimonialIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-9 h-9 rounded-full bg-white text-hyper-black flex items-center justify-center shadow-sm hover:bg-hyper-black hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-9 h-9 rounded-full bg-white text-hyper-black flex items-center justify-center shadow-sm hover:bg-hyper-black hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
