'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useUI } from '@/lib/context/UIContext';

export const NavigationBar: React.FC = () => {
  const { setIsCategoryDropdownOpen, isCategoryDropdownOpen } = useUI();

  return (
    <nav className="hidden lg:block bg-white border-b border-hyper-gray-200 px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-medium text-sm text-hyper-black tracking-tight">
        <div className="flex items-center space-x-8">
          {/* Shop By Categories */}
          <div className="relative group">
            <button
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              className="flex items-center space-x-1.5 py-1 text-hyper-black hover:text-slate-600 transition-colors font-semibold"
            >
              <span>Shop By Categories</span>
              <ChevronDown className="w-4 h-4 text-hyper-gray-600 group-hover:rotate-180 transition-transform" />
            </button>
          </div>

          {/* Shop By Room */}
          <Link href="/collections/heritage-living" className="flex items-center space-x-1.5 py-1 text-hyper-black hover:text-slate-600 transition-colors font-semibold">
            <span>Shop By Room</span>
            <ChevronDown className="w-4 h-4 text-hyper-gray-600" />
          </Link>

          {/* Tables & Desks */}
          <Link href="/collections/press-tables" className="flex items-center space-x-1.5 py-1 text-hyper-black hover:text-slate-600 transition-colors font-semibold">
            <span>Tables & Desks</span>
            <ChevronDown className="w-4 h-4 text-hyper-gray-600" />
          </Link>

          {/* Chairs & Stools */}
          <Link href="/collections/chairs" className="flex items-center space-x-1.5 py-1 text-hyper-black hover:text-slate-600 transition-colors font-semibold">
            <span>Chairs & Stools</span>
            <ChevronDown className="w-4 h-4 text-hyper-gray-600" />
          </Link>

          {/* Pages */}
          <Link href="/pages/about" className="flex items-center space-x-1.5 py-1 text-hyper-black hover:text-slate-600 transition-colors font-semibold">
            <span>Pages</span>
            <ChevronDown className="w-4 h-4 text-hyper-gray-600" />
          </Link>

          {/* Theme Features */}
          <Link href="/collections/modern-essentials" className="flex items-center space-x-1.5 py-1 text-hyper-black hover:text-slate-600 transition-colors font-semibold">
            <span>Theme Features</span>
            <ChevronDown className="w-4 h-4 text-hyper-gray-600" />
          </Link>
        </div>

        {/* On Sale in Red */}
        <Link
          href="/collections/sale-items"
          className="text-hyper-red-sale font-bold tracking-wide uppercase text-xs bg-red-50 hover:bg-red-100 px-3.5 py-1.5 rounded-full transition-colors"
        >
          On Sale
        </Link>
      </div>
    </nav>
  );
};
