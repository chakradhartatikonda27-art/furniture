'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag, ChevronRight } from 'lucide-react';
import { SPACE_INSPIRATIONS } from '@/lib/data/mockData';

export const SpacesGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 px-4 md:px-8 max-w-[1440px] mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-hyper-black">
          Get Inspired by Spaces
        </h2>
      </div>

      {/* Main Showcase Image Frame - Matching Reference Screenshot #1 */}
      <div className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] rounded-hyper-xl overflow-hidden shadow-hyper-card border border-hyper-gray-200 group">
        <Image
          src={SPACE_INSPIRATIONS[activeIndex]?.image || SPACE_INSPIRATIONS[0].image}
          alt={SPACE_INSPIRATIONS[activeIndex]?.title || 'Space Inspiration'}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />

        {/* Tag Icon Badge on Bottom Right of Image (Matching Screenshot #1) */}
        <div className="absolute bottom-5 right-5 z-20">
          <Link
            href={`/collections/${SPACE_INSPIRATIONS[activeIndex]?.roomType || 'living-room'}`}
            className="inline-flex items-center space-x-1.5 bg-white text-hyper-black text-xs font-black px-4 py-2 rounded-full shadow-lg border border-hyper-gray-200 hover:bg-hyper-gray-100 transition-all hover:scale-105 active:scale-95"
          >
            <Tag className="w-4 h-4 text-hyper-black fill-current" />
            <span>{SPACE_INSPIRATIONS[activeIndex]?.tagCount || 3}</span>
          </Link>
        </div>
      </div>

      {/* Progress Line Indicator (Matching Screenshot #1) */}
      <div className="flex items-center space-x-2 pt-1">
        {SPACE_INSPIRATIONS.map((space, idx) => (
          <button
            key={space.id}
            onClick={() => setActiveIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === activeIndex ? 'w-24 bg-hyper-black' : 'w-12 bg-hyper-gray-200 hover:bg-hyper-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
