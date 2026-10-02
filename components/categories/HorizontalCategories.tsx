'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES } from '@/lib/data/mockData';
import { createFurnitureSvgDataUri } from '@/lib/utils/imageUtils';

export const HorizontalCategories: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section className="py-8 px-4 md:px-8 max-w-[1440px] mx-auto border-b border-hyper-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-hyper-black">
          Shop By Categories
        </h2>
        <Link
          href="/collections"
          className="inline-flex items-center space-x-1 text-xs md:text-sm font-extrabold text-hyper-black hover:underline"
        >
          <span>Shop All Products</span>
          <ChevronRight className="w-4 h-4 text-hyper-black" />
        </Link>
      </div>

      {/* 3x3 Grid Layout (Mobile) - Matching Reference Screenshot #5 */}
      <div className="block md:hidden border border-hyper-gray-200 rounded-hyper-xl overflow-hidden bg-white">
        <div className="grid grid-cols-3 divide-x divide-y divide-hyper-gray-200">
          {CATEGORIES.slice(0, 9).map((cat) => {
            if (cat.isSale) {
              return (
                <Link
                  key={cat.id}
                  href={`/collections/${cat.slug}`}
                  className="p-4 flex flex-col items-center justify-center space-y-2.5 text-center group hover:bg-hyper-gray-50 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-hyper-red-sale flex items-center justify-center text-white font-extrabold text-xs tracking-wider uppercase shadow-md group-hover:scale-105 transition-transform">
                    Sale
                  </div>
                  <span className="text-[11px] font-extrabold text-hyper-black group-hover:text-hyper-red-sale transition-colors line-clamp-1">
                    {cat.name}
                  </span>
                </Link>
              );
            }

            const isFailed = failedImages[cat.id];
            const fallbackUri = createFurnitureSvgDataUri('chair', cat.name, '#F3F4F6');

            return (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="p-4 flex flex-col items-center justify-center space-y-2.5 text-center group hover:bg-hyper-gray-50 transition-colors"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#F5F5F7] border border-hyper-gray-200 shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src={isFailed ? fallbackUri : cat.image}
                    alt={cat.name}
                    fill
                    onError={() => setFailedImages((prev) => ({ ...prev, [cat.id]: true }))}
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-[11px] font-semibold text-hyper-black group-hover:text-blue-600 transition-colors line-clamp-1">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Horizontal Scroll Carousel (Desktop) */}
      <div className="hidden md:flex items-center space-x-6 overflow-x-auto no-scrollbar pb-4 pt-2 -mx-4 px-4 md:mx-0 md:px-0">
        {CATEGORIES.map((cat) => {
          if (cat.isSale) {
            return (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="flex flex-col items-center flex-shrink-0 group space-y-3 focus:outline-none"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-hyper-red-sale flex items-center justify-center text-white font-extrabold text-sm md:text-base tracking-wider uppercase shadow-hyper-card group-hover:scale-105 transition-transform duration-300 ring-2 ring-red-300">
                  Sale
                </div>
                <span className="text-xs md:text-sm font-bold text-hyper-red-sale tracking-wide text-center">
                  {cat.name}
                </span>
              </Link>
            );
          }

          const isFailed = failedImages[cat.id];
          const fallbackUri = createFurnitureSvgDataUri('chair', cat.name, '#F3F4F6');

          return (
            <Link
              key={cat.id}
              href={`/collections/${cat.slug}`}
              className="flex flex-col items-center flex-shrink-0 group space-y-3 focus:outline-none"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-hyper-gray-100 border border-hyper-gray-200 shadow-hyper-card group-hover:shadow-hyper-hover group-hover:scale-105 transition-all duration-300">
                <Image
                  src={isFailed ? fallbackUri : cat.image}
                  alt={cat.name}
                  fill
                  onError={() => setFailedImages((prev) => ({ ...prev, [cat.id]: true }))}
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-hyper-black group-hover:text-blue-600 transition-colors text-center whitespace-nowrap">
                {cat.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
