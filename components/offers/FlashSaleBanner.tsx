'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createFurnitureSvgDataUri } from '@/lib/utils/imageUtils';

export const FlashSaleBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 30, minutes: 0, seconds: 42, ms: 59 });
  const [failedCards, setFailedCards] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.ms > 0) return { ...prev, ms: prev.ms - 1 };
        if (prev.seconds > 0) return { ...prev, seconds: 59, ms: 99 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59, ms: 99 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59, ms: 99 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const CARDS = [
    {
      id: 1,
      tag: 'Danish Design',
      title: 'Material Natural',
      label: 'Grid Chair...',
      link: '/products/bow-chair',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
      fallback: createFurnitureSvgDataUri('chair', 'Material Natural', '#D1D5DB'),
    },
    {
      id: 2,
      tag: 'Cotton Collection',
      title: 'Authority Design',
      label: 'Lunara Tea...',
      link: '/products/grind-vessel',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      fallback: createFurnitureSvgDataUri('accessories', 'Authority Design', '#9CA3AF'),
    },
    {
      id: 3,
      tag: 'Minimalism Style',
      title: 'Steels Lighting',
      label: 'Sculpt Tabl...',
      link: '/products/select-table-lamp',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
      fallback: createFurnitureSvgDataUri('lamp', 'Steels Lighting', '#6B7280'),
    },
    {
      id: 4,
      tag: 'Danish Design',
      title: 'Nightstand',
      label: 'Pixel...',
      link: '/products/pixel-shelves',
      image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=800&auto=format&fit=crop',
      fallback: createFurnitureSvgDataUri('storage', 'Nightstand', '#4B5563'),
    },
  ];

  return (
    <section className="py-8 px-4 md:px-8 max-w-[1440px] mx-auto space-y-8">
      {/* Flash Sale Header Strip */}
      <div className="bg-[#EFF666] text-hyper-black rounded-hyper-xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm border border-yellow-300">
        <div className="font-extrabold text-base md:text-xl tracking-tight">
          Flash Sale now on!
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center space-x-3 text-2xl md:text-4xl font-black font-mono tracking-wider">
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(timeLeft.ms).padStart(2, '0')}</span>
        </div>

        <div className="text-xs md:text-sm font-semibold text-center lg:text-left max-w-xs">
          Save on modern table office, best sellers + more
        </div>

        <button className="bg-hyper-black text-white font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-full hover:bg-slate-800 transition-colors shadow-md whitespace-nowrap">
          Use Code: FLASH30
        </button>
      </div>

      {/* 4 Cards Grid Matching Screenshot 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.map((card) => {
          const isFailed = failedCards[card.id];
          return (
            <div
              key={card.id}
              className="relative rounded-hyper-xl overflow-hidden min-h-[320px] p-6 group flex flex-col justify-between border border-hyper-gray-200 shadow-hyper-card"
            >
              <Image
                src={isFailed ? card.fallback : card.image}
                alt={card.title}
                fill
                onError={() => setFailedCards((prev) => ({ ...prev, [card.id]: true }))}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative z-10 text-white space-y-1">
                <span className="text-xs font-semibold text-slate-300">{card.tag}</span>
                <h3 className="text-2xl font-black">{card.title}</h3>
              </div>

              <div className="relative z-10 flex items-center justify-between bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/20">
                <div className="flex items-center space-x-2 px-2 text-xs font-bold text-white truncate">
                  <span>{card.label}</span>
                </div>
                <Link href={card.link} className="bg-white text-hyper-black font-extrabold text-xs px-4 py-1.5 rounded-full hover:bg-hyper-gray-100 transition-colors">
                  Shop
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
