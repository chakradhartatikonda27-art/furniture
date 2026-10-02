'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const MeetOurTeam: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="bg-hyper-gray-50 rounded-hyper-xl p-8 md:p-14 border border-hyper-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image with Subtle Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-hyper-xl overflow-hidden shadow-hyper-card">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="HYPER Creative Studio Team"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Subtle Circular Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-6 md:right-6 bg-hyper-black text-white w-28 h-28 md:w-32 md:h-32 rounded-full p-4 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white animate-fade-in">
              <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">Studio</span>
              <span className="text-base md:text-lg font-black leading-none text-hyper-yellow-badge">HYD</span>
              <span className="text-[9px] text-slate-300 mt-1 font-semibold">Crafted 2026</span>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-hyper-gray-600 block mb-2">
                Meet Our Team
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-hyper-black tracking-tight leading-tight">
                The creative minds behind our studio
              </h2>
            </div>

            <p className="text-base text-hyper-gray-600 leading-relaxed font-normal">
              As designers we are constantly thinking about how people live and what problems we could solve for them. Every silhouette is refined until it balances structural harmony with uncompromised comfort.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-b border-hyper-gray-200 py-6">
              <div className="space-y-1">
                <div className="text-xl font-black text-hyper-black flex items-center space-x-1">
                  <span>📍</span>
                  <span>New York</span>
                </div>
                <div className="text-xs text-hyper-gray-600 font-medium">Product locally in NY</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-black text-hyper-black flex items-center space-x-1">
                  <span>☺</span>
                  <span>4.8</span>
                </div>
                <div className="text-xs text-hyper-gray-600 font-medium">Review Score</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-black text-hyper-black flex items-center space-x-1">
                  <span>🪑</span>
                  <span>50+</span>
                </div>
                <div className="text-xs text-hyper-gray-600 font-medium">Over 50 Products</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/pages/contact"
                className="inline-flex items-center space-x-2 bg-hyper-black text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-slate-800 transition-colors shadow-md group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
