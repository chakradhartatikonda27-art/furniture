'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { createFurnitureSvgDataUri } from '@/lib/utils/imageUtils';

const FEATURE_CARDS = [
  {
    id: 1,
    title: 'Comfortable',
    description: 'Bow Chair is available in Natural or Black-stained Oak with full EU Ecolabel certification.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    fallback: createFurnitureSvgDataUri('chair', 'Comfortable', '#F3F4F6'),
  },
  {
    id: 2,
    title: 'Price transparency',
    description: "Fair pricing ensures you know exactly what you're paying for, with no hidden costs or markups.",
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=800&auto=format&fit=crop',
    fallback: createFurnitureSvgDataUri('table', 'Price Transparency', '#F9FAFB'),
  },
  {
    id: 3,
    title: 'All eco-certified',
    description: 'All products consider a more holistic environmental impact and are designed for a longer lifetime.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop',
    fallback: createFurnitureSvgDataUri('chair', 'All Eco-Certified', '#EFF6FF'),
  },
  {
    id: 4,
    title: 'Sustainability',
    description: 'Committed to sustainable practices, ethical sourcing, and reducing environmental impact.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    fallback: createFurnitureSvgDataUri('room', 'Sustainability', '#FEF3C7'),
  },
];

const PILLS = [
  'All Eco-Certified',
  'Product Protection',
  'Make It Yours',
  'Unique Tailored',
];

export const WhyShopWithUs: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  return (
    <section className="py-16 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-hyper-gray-600 block">
          Our Architectural Philosophy
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-hyper-black tracking-tight leading-tight">
          This approach resulted in the beautiful structure
        </h2>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {PILLS.map((pill) => (
            <div
              key={pill}
              className="inline-flex items-center space-x-2 bg-hyper-gray-100 px-4 py-2 rounded-full text-xs font-bold text-hyper-black border border-hyper-gray-200"
            >
              <Check className="w-3.5 h-3.5 text-hyper-green-new" />
              <span>{pill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Visual Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURE_CARDS.map((card) => {
          const isFailed = failedImages[card.id];
          return (
            <div
              key={card.id}
              className="bg-white rounded-hyper-xl p-6 border border-hyper-gray-200 hover:border-hyper-black hover:shadow-hyper-hover transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="relative w-full aspect-[4/3] rounded-hyper overflow-hidden bg-hyper-gray-100">
                <Image
                  src={isFailed ? card.fallback : card.image}
                  alt={card.title}
                  fill
                  onError={() => setFailedImages((prev) => ({ ...prev, [card.id]: true }))}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-extrabold text-hyper-black">{card.title}</h3>
                <p className="text-sm text-hyper-gray-600 leading-relaxed">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
