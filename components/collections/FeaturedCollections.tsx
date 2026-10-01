'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COLLECTIONS, PRODUCTS } from '@/lib/data/mockData';

export const FeaturedCollections: React.FC = () => {
  const [selectedSlug, setSelectedSlug] = useState(COLLECTIONS[0].slug);

  const activeCollection = COLLECTIONS.find((c) => c.slug === selectedSlug) || COLLECTIONS[0];
  const relatedProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-16 px-4 md:px-8 max-w-[1440px] mx-auto bg-hyper-gray-50 rounded-hyper-xl my-8 border border-hyper-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column Controls */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-hyper-gray-600 block mb-2">
              Curated Collections
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-hyper-black tracking-tight">
              Featured Collections
            </h2>
          </div>

          {/* Vertical Collection Selector */}
          <div className="space-y-4">
            {COLLECTIONS.map((item) => {
              const isSelected = item.slug === selectedSlug;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedSlug(item.slug)}
                  className={`w-full text-left font-black text-2xl md:text-3xl tracking-tight transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'text-hyper-black translate-x-2'
                      : 'text-hyper-gray-300 hover:text-hyper-gray-600'
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      isSelected ? 'w-12 bg-hyper-black' : 'w-0 bg-transparent group-hover:w-6 group-hover:bg-hyper-gray-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <p className="text-sm md:text-base text-hyper-gray-600 leading-relaxed max-w-md">
            {activeCollection.description}
          </p>

          {/* Small Supporting Thumbnails */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-hyper-gray-400 block mb-3">
              Included Pieces
            </span>
            <div className="flex items-center space-x-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-hyper bg-white border border-hyper-gray-200 overflow-hidden shadow-sm hover:border-hyper-black transition-all"
                >
                  <Image
                    src={p.thumbnail}
                    alt={p.name}
                    fill
                    className="object-cover object-center hover:scale-110 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Large Lifestyle Image */}
        <div className="lg:col-span-7">
          <div className="relative w-full h-[450px] md:h-[580px] rounded-hyper-xl overflow-hidden shadow-hyper-hover group">
            <Image
              src={activeCollection.heroImage || activeCollection.image}
              alt={activeCollection.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white z-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold">{activeCollection.name}</h3>
                <p className="text-xs md:text-sm text-slate-200 font-medium">
                  {activeCollection.productsCount} Exclusive Items
                </p>
              </div>

              <Link
                href={`/collections/${activeCollection.slug}`}
                className="inline-flex items-center space-x-2 bg-white text-hyper-black font-bold text-sm px-6 py-3.5 rounded-full hover:bg-hyper-gray-100 transition-all shadow-md group/btn"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
