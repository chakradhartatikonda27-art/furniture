'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const PromoBanners: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Banner 1: Turn Chairs 40% Off */}
        <div className="bg-hyper-pastel-blue rounded-hyper-xl p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden border border-blue-100 group shadow-sm">
          <div className="space-y-4 max-w-xs z-10">
            <span className="inline-block bg-hyper-red-sale text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
              Save 40%
            </span>
            <h3 className="text-3xl font-black text-hyper-black tracking-tight">Turn Chairs</h3>
            <p className="text-sm text-hyper-gray-600 leading-relaxed">
              Elevate your space with 40% off our timeless designs!
            </p>
            <div>
              <Link
                href="/products/turn-chair"
                className="inline-flex items-center space-x-2 bg-hyper-black text-white text-xs font-bold px-6 py-3.5 rounded-full hover:bg-slate-800 transition-colors group/btn shadow-md"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mt-6 sm:mt-0 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
            <Image
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop"
              alt="Turn Chairs"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Banner 2: Cross Chairs 30% Off */}
        <div className="bg-hyper-pastel-beige rounded-hyper-xl p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden border border-amber-100 group shadow-sm">
          <div className="space-y-4 max-w-xs z-10">
            <span className="inline-block bg-amber-600 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
              Save 30%
            </span>
            <h3 className="text-3xl font-black text-hyper-black tracking-tight">Cross Chairs</h3>
            <p className="text-sm text-hyper-gray-600 leading-relaxed">
              Get 30% off elegant, timeless seating—don&apos;t miss out!
            </p>
            <div>
              <Link
                href="/products/cross-chair-heritage"
                className="inline-flex items-center space-x-2 bg-hyper-black text-white text-xs font-bold px-6 py-3.5 rounded-full hover:bg-slate-800 transition-colors group/btn shadow-md"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mt-6 sm:mt-0 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
            <Image
              src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop"
              alt="Cross Chairs"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
