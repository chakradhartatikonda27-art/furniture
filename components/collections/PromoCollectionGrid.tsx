'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const PromoCollectionGrid: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Large Image Card */}
        <div className="lg:col-span-6 relative rounded-hyper-xl overflow-hidden min-h-[480px] lg:min-h-[580px] group shadow-hyper-card flex flex-col justify-end p-8 md:p-12">
          <Image
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop"
            alt="Dining & Kitchen"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="relative z-10 text-white space-y-4 max-w-lg">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-300">
              Dining & Kitchen
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Difference in the Details
            </h2>
            <p className="text-sm md:text-base text-slate-200 font-normal leading-relaxed">
              Highlighting the unique touches that set every piece apart, crafted to elevate your style effortlessly.
            </p>
            <div className="pt-2">
              <Link
                href="/collections/dining-kitchen"
                className="inline-flex items-center space-x-2 bg-white text-hyper-black font-bold text-sm px-6 py-3.5 rounded-full hover:bg-hyper-gray-100 transition-colors shadow-md group/btn"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right 2x2 Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1: Select Table Lamps */}
          <Link
            href="/collections/lighting"
            className="relative rounded-hyper-lg overflow-hidden min-h-[270px] p-6 group bg-hyper-gray-100 flex flex-col justify-between border border-hyper-gray-200 hover:border-hyper-black transition-all shadow-hyper-card"
          >
            <Image
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop"
              alt="Select Table Lamps"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            <div className="relative z-10">
              <span className="bg-hyper-yellow-badge text-hyper-black text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Up to $100 Off
              </span>
            </div>

            <div className="relative z-10 text-white">
              <h3 className="text-xl font-extrabold">Select Table Lamps</h3>
              <p className="text-xs text-slate-200 mt-1 font-medium">Get up to $100 Off</p>
            </div>
          </Link>

          {/* Card 2: Select Lounge Chairs */}
          <Link
            href="/collections/chairs"
            className="relative rounded-hyper-lg overflow-hidden min-h-[270px] p-6 group bg-hyper-gray-100 flex flex-col justify-between border border-hyper-gray-200 hover:border-hyper-black transition-all shadow-hyper-card"
          >
            <Image
              src="https://images.unsplash.com/photo-1580481072645-022f9a6d1279?q=80&w=800&auto=format&fit=crop"
              alt="Select Lounge Chairs"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            <div className="relative z-10">
              <span className="bg-white text-hyper-black text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Special Offer
              </span>
            </div>

            <div className="relative z-10 text-white">
              <h3 className="text-xl font-extrabold">Select Lounge Chairs</h3>
              <p className="text-xs text-slate-200 mt-1 font-medium">From $200</p>
            </div>
          </Link>

          {/* Card 3: Select Side Tables */}
          <Link
            href="/collections/press-tables"
            className="relative rounded-hyper-lg overflow-hidden min-h-[270px] p-6 group bg-hyper-gray-100 flex flex-col justify-between border border-hyper-gray-200 hover:border-hyper-black transition-all shadow-hyper-card"
          >
            <Image
              src="https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=800&auto=format&fit=crop"
              alt="Select Side Tables"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            <div className="relative z-10">
              <span className="bg-hyper-red-sale text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Save $1,000
              </span>
            </div>

            <div className="relative z-10 text-white">
              <h3 className="text-xl font-extrabold">Select Side Tables</h3>
              <p className="text-xs text-slate-200 mt-1 font-medium">Get up to $1,000</p>
            </div>
          </Link>

          {/* Card 4: Select Home Decors */}
          <Link
            href="/collections/accessories"
            className="relative rounded-hyper-lg overflow-hidden min-h-[270px] p-6 group bg-hyper-gray-100 flex flex-col justify-between border border-hyper-gray-200 hover:border-hyper-black transition-all shadow-hyper-card"
          >
            <Image
              src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop"
              alt="Select Home Decors"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            <div className="relative z-10">
              <span className="bg-hyper-green-new text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                BOGO Deal
              </span>
            </div>

            <div className="relative z-10 text-white">
              <h3 className="text-xl font-extrabold">Select Home Decors</h3>
              <p className="text-xs text-slate-200 mt-1 font-medium">Buy One Get One</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
