'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COLLECTIONS } from '@/lib/data/mockData';

export const FeaturedCollections: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState(COLLECTIONS[0].slug);

  const activeCollection = COLLECTIONS.find((c) => c.slug === selectedSlug) || COLLECTIONS[0];

  return (
    <section className="py-12 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-hyper-black">
          Featured Collections
        </h2>

        {/* Collection Selector Tabs - Matching Reference Screenshot #2 */}
        <div className="flex flex-col space-y-3">
          {COLLECTIONS.map((item) => {
            const isSelected = item.slug === selectedSlug;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedSlug(item.slug)}
                className={`text-left font-black text-2xl sm:text-3xl md:text-4xl tracking-tight transition-all duration-300 ${
                  isSelected
                    ? 'text-hyper-black border-b-2 border-hyper-black pb-1 inline-block max-w-max'
                    : 'text-hyper-gray-300 hover:text-hyper-gray-500'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Full-width Lifestyle Image Box */}
        <div className="relative w-full h-[360px] sm:h-[480px] md:h-[600px] rounded-hyper-xl overflow-hidden shadow-hyper-card group border border-hyper-gray-200">
          <Image
            src={activeCollection.heroImage || activeCollection.image}
            alt={activeCollection.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
            <div>
              <h3 className="text-xl sm:text-3xl font-extrabold">{activeCollection.name}</h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                {activeCollection.productsCount} Exclusive Items
              </p>
            </div>

            <Link
              href={`/collections/${activeCollection.slug}`}
              className="inline-flex items-center space-x-2 bg-white text-hyper-black font-extrabold text-xs sm:text-sm px-5 py-3 rounded-full hover:bg-hyper-gray-100 transition-all shadow-md"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
