'use client';

import React from 'react';
import Link from 'next/link';
import { X, ChevronRight, MapPin, User, Search } from 'lucide-react';
import { useUI } from '@/lib/context/UIContext';
import { DROPDOWN_CATEGORIES } from '@/lib/data/mockData';

export const MobileNavDrawer: React.FC = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, openSearch } = useUI();

  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between z-50 animate-slide-right overflow-y-auto">
        <div>
          {/* Header */}
          <div className="p-5 border-b border-hyper-gray-200 flex items-center justify-between">
            <span className="text-2xl font-black tracking-tighter text-hyper-black">WISDOM</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-hyper-gray-600 hover:text-hyper-black rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Search Button */}
          <div className="p-4 border-b border-hyper-gray-100">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openSearch();
              }}
              className="w-full flex items-center justify-between px-4 py-3 bg-hyper-gray-100 rounded-full text-hyper-gray-600 text-sm font-medium"
            >
              <span>Search furniture...</span>
              <Search className="w-4 h-4 text-hyper-black" />
            </button>
          </div>

          {/* Nav Items */}
          <div className="py-2">
            <Link
              href="/admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3.5 text-slate-950 bg-amber-400 font-extrabold text-base flex items-center justify-between border-b border-slate-100"
            >
              <span>⚡ Admin Panel</span>
              <ChevronRight className="w-4 h-4 text-slate-950" />
            </Link>

            <Link
              href="/collections/sale-items"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3.5 text-hyper-red-sale font-bold text-base flex items-center justify-between border-b border-slate-100"
            >
              <span>🔥 On Sale</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <div className="px-6 py-3 text-xs font-bold text-hyper-gray-400 uppercase tracking-wider">
              Browse Categories
            </div>

            {DROPDOWN_CATEGORIES.slice(1, 10).map((cat) => (
              <Link
                key={cat}
                href={`/collections/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2.5 text-hyper-black hover:bg-hyper-gray-50 text-sm font-medium flex items-center justify-between"
              >
                <span>{cat}</span>
                <ChevronRight className="w-4 h-4 text-hyper-gray-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-6 border-t border-hyper-gray-200 bg-hyper-gray-50 space-y-4">
          <div className="flex items-center space-x-3 text-sm font-medium text-hyper-black">
            <User className="w-5 h-5 text-hyper-gray-600" />
            <span>My Account</span>
          </div>
          <div className="flex items-center space-x-3 text-sm font-medium text-hyper-black">
            <MapPin className="w-5 h-5 text-hyper-gray-600" />
            <span>Find a Store</span>
          </div>
          <div className="text-xs text-hyper-gray-600 pt-2 border-t border-hyper-gray-200">
            🇺🇸 United States (USD $)
          </div>
        </div>
      </div>
    </div>
  );
};
