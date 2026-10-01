'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from 'lucide-react';
import { SPACE_INSPIRATIONS } from '@/lib/data/mockData';

export const SpacesGallery: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-hyper-gray-600 block mb-2">
            Architectural Showcases
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-hyper-black tracking-tight">
            Get Inspired by Spaces
          </h2>
        </div>
        <p className="text-sm text-hyper-gray-600 max-w-sm">
          Explore curated interior environments designed with our signature modern furniture and lighting catalog.
        </p>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-6 -mx-4 px-4 md:mx-0 md:px-0 snap-x">
        {SPACE_INSPIRATIONS.map((space, index) => {
          // Dynamic width ratio for editorial rhythm: card 0 large, card 1 medium, card 2+ standard
          const widthClass =
            index === 0
              ? 'w-[320px] sm:w-[480px] md:w-[600px]'
              : index === 1
              ? 'w-[280px] sm:w-[400px] md:w-[460px]'
              : 'w-[260px] sm:w-[340px] md:w-[380px]';

          return (
            <div
              key={space.id}
              className={`flex-shrink-0 snap-start ${widthClass} relative group rounded-hyper-xl overflow-hidden min-h-[420px] md:min-h-[500px] shadow-hyper-card hover:shadow-hyper-hover border border-hyper-gray-200 transition-all duration-500`}
            >
              <Image
                src={space.image}
                alt={space.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tag / Count Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center space-x-1.5 bg-white/90 backdrop-blur-md text-hyper-black text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  <Tag className="w-3.5 h-3.5 text-hyper-blue-bright" />
                  <span>🏷 {space.tagCount}</span>
                </span>
              </div>

              {/* Card Footer Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10 space-y-2">
                <h3 className="text-2xl md:text-3xl font-black">{space.title}</h3>
                {space.subtitle && (
                  <p className="text-xs md:text-sm text-slate-200 line-clamp-2 font-medium">
                    {space.subtitle}
                  </p>
                )}
                <div className="pt-2">
                  <Link
                    href={`/collections/${space.roomType}`}
                    className="inline-flex items-center text-xs font-bold text-white hover:text-hyper-yellow-badge underline underline-offset-4 transition-colors"
                  >
                    View Room Furniture →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
