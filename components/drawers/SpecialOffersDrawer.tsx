'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { useUI } from '@/lib/context/UIContext';

export const SpecialOffersDrawer: React.FC = () => {
  const { isSpecialOffersOpen, setIsSpecialOffersOpen } = useUI();
  const [isDismissed, setIsDismissed] = useState(false);

  return (
    <>
      {/* Vertical Side Tab on Right Viewport Edge (Exact Match to Reference Screenshots #1-5) */}
      {!isSpecialOffersOpen && !isDismissed && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#C82A2A] text-white py-3 px-2 rounded-l-hyper shadow-2xl flex flex-col items-center space-y-3 transition-transform hover:-translate-x-1">
          {/* Top Badge Circle '4' */}
          <button
            onClick={() => setIsSpecialOffersOpen(true)}
            className="w-5 h-5 rounded-full bg-white text-[#C82A2A] text-[11px] font-black flex items-center justify-center shadow-sm"
          >
            4
          </button>

          {/* Vertical Text */}
          <button
            onClick={() => setIsSpecialOffersOpen(true)}
            className="font-black text-[11px] tracking-wider uppercase py-2 hover:opacity-90"
            style={{ writingMode: 'vertical-rl' }}
          >
            Special Offers For You
          </button>

          {/* Dismiss / Close X Icon */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDismissed(true);
            }}
            aria-label="Dismiss Special Offers Tab"
            className="p-1 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Slide-over Drawer / Modal */}
      {isSpecialOffersOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fade-in"
            onClick={() => setIsSpecialOffersOpen(false)}
          />

          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-50 animate-slide-right overflow-y-auto">
            {/* Header */}
            <div className="bg-[#C82A2A] text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-hyper-yellow-badge fill-current" />
                <h3 className="text-xl font-extrabold tracking-tight">Special Offers For You</h3>
              </div>
              <button
                onClick={() => setIsSpecialOffersOpen(false)}
                className="p-1 text-white/80 hover:text-white rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-6 flex-1">
              <div className="space-y-4">
                {/* Offer 1 */}
                <div className="bg-[#FAF0EE] p-5 rounded-hyper-lg border border-rose-100 space-y-2">
                  <span className="bg-[#C82A2A] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                    Limited Time
                  </span>
                  <h4 className="text-lg font-extrabold text-hyper-black">Turn Chairs 40% OFF</h4>
                  <p className="text-xs text-hyper-gray-600">
                    Elevate your space with 40% off our timeless designs!
                  </p>
                  <Link
                    href="/products/turn-chair"
                    onClick={() => setIsSpecialOffersOpen(false)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-hyper-black hover:underline pt-1"
                  >
                    <span>Claim 40% Off</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Offer 2 */}
                <div className="bg-[#EBF6F0] p-5 rounded-hyper-lg border border-emerald-100 space-y-2">
                  <span className="bg-emerald-700 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                    30% Savings
                  </span>
                  <h4 className="text-lg font-extrabold text-hyper-black">Cross Chairs Heritage</h4>
                  <p className="text-xs text-hyper-gray-600">
                    Get 30% off elegant, timeless dining seating.
                  </p>
                  <Link
                    href="/products/cross-chair-heritage"
                    onClick={() => setIsSpecialOffersOpen(false)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-hyper-black hover:underline pt-1"
                  >
                    <span>Shop Cross Chairs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Offer 3 */}
                <div className="bg-hyper-blue-soft p-5 rounded-hyper-lg border border-blue-200 space-y-2">
                  <span className="bg-hyper-black text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                    Free Shipping
                  </span>
                  <h4 className="text-lg font-extrabold text-hyper-black">Express Shipping $500+</h4>
                  <p className="text-xs text-hyper-gray-600">
                    Complimentary White Glove delivery on orders exceeding $500.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-hyper-gray-200 bg-hyper-gray-50">
              <button
                onClick={() => setIsSpecialOffersOpen(false)}
                className="w-full bg-hyper-black text-white font-extrabold text-xs py-3.5 rounded-full hover:bg-slate-800 transition-colors"
              >
                Close Special Offers
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
