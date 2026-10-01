'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/lib/data/mockData';
import { ProductCard } from '@/components/products/ProductCard';

export const ShopOffersCarousel: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const offerProducts = PRODUCTS; // Contains Spoke Sofa, Turn Chair, Axis Storage, etc.

  const maxVisible = 4;
  const maxIndex = Math.max(0, offerProducts.length - maxVisible);

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  const progressPercentage = ((scrollIndex + 1) / (maxIndex + 1)) * 100;

  return (
    <section className="py-16 px-4 md:px-8 max-w-[1440px] mx-auto border-t border-hyper-gray-200">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-hyper-red-sale block mb-2">
            Limited Time Promotions
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-hyper-black tracking-tight">
            Shop Our Offers
          </h2>
          <p className="text-sm md:text-base text-hyper-gray-600 mt-1">
            Traditional divides between personal and professional space.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="/collections/sale-items"
            className="text-sm font-bold text-hyper-black hover:text-hyper-blue-bright flex items-center space-x-1 group"
          >
            <span>Shop All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Carousel Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              disabled={scrollIndex === 0}
              aria-label="Previous Products"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                scrollIndex === 0
                  ? 'border-hyper-gray-200 text-hyper-gray-300 cursor-not-allowed'
                  : 'border-hyper-black text-hyper-black hover:bg-hyper-black hover:text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={scrollIndex >= maxIndex}
              aria-label="Next Products"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                scrollIndex >= maxIndex
                  ? 'border-hyper-gray-200 text-hyper-gray-300 cursor-not-allowed'
                  : 'border-hyper-black text-hyper-black hover:bg-hyper-black hover:text-white'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid / Carousel Track */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
        {offerProducts.slice(scrollIndex, scrollIndex + 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bottom Progress Bar Indicator */}
      <div className="mt-8 w-full bg-hyper-gray-200 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-hyper-black h-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </section>
  );
};
