'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const PromoBanners: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Banner 1: Turn Chairs 40% Off - Matching Reference Screenshot #3 */}
        <div className="bg-[#FAF0EE] rounded-hyper-xl p-6 sm:p-8 flex flex-row items-center justify-between relative overflow-hidden border border-rose-100 group shadow-sm">
          {/* Yellow Circular Save 40% Badge */}
          <div className="absolute top-4 right-4 z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EFF666] text-hyper-black font-black text-[11px] sm:text-xs flex flex-col items-center justify-center shadow-md leading-tight text-center border border-yellow-300">
            <span>Save</span>
            <span className="text-xs sm:text-sm font-black">40%</span>
          </div>

          <div className="space-y-3 max-w-[55%] z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-hyper-black tracking-tight">
              Turn Chairs
            </h3>
            <p className="text-xs sm:text-sm text-hyper-gray-600 leading-relaxed">
              Elevate your space with 40% off our timeless designs!
            </p>
            <div className="pt-1">
              <Link
                href="/products/turn-chair"
                className="inline-flex items-center space-x-2 bg-hyper-black text-white text-xs font-extrabold px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-md"
              >
                <span>Shop Now</span>
              </Link>
            </div>
          </div>

          <div className="relative w-36 h-36 sm:w-48 sm:h-48 flex-shrink-0 group-hover:scale-105 transition-transform duration-500 z-10">
            <Image
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop"
              alt="Turn Chairs"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
        </div>

        {/* Banner 2: Cross Chairs 30% Off - Matching Reference Screenshot #3 */}
        <div className="bg-[#EBF6F0] rounded-hyper-xl p-6 sm:p-8 flex flex-row items-center justify-between relative overflow-hidden border border-emerald-100 group shadow-sm">
          {/* Red Circular Save 30% Badge */}
          <div className="absolute top-4 right-4 z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#DC2626] text-white font-black text-[11px] sm:text-xs flex flex-col items-center justify-center shadow-md leading-tight text-center">
            <span>Save</span>
            <span className="text-xs sm:text-sm font-black">30%</span>
          </div>

          <div className="space-y-3 max-w-[55%] z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-hyper-black tracking-tight">
              Cross Chairs
            </h3>
            <p className="text-xs sm:text-sm text-hyper-gray-600 leading-relaxed">
              Get 30% off elegant, timeless seating—don&apos;t miss out!
            </p>
            <div className="pt-1">
              <Link
                href="/products/cross-chair-heritage"
                className="inline-flex items-center space-x-2 bg-hyper-black text-white text-xs font-extrabold px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-md"
              >
                <span>Shop Now</span>
              </Link>
            </div>
          </div>

          <div className="relative w-36 h-36 sm:w-48 sm:h-48 flex-shrink-0 group-hover:scale-105 transition-transform duration-500 z-10">
            <Image
              src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop"
              alt="Cross Chairs"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
