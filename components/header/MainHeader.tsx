'use client';

import React from 'react';
import Link from 'next/link';
import { Search, MapPin, User, ShoppingBag, ChevronDown, Menu } from 'lucide-react';
import { useUI } from '@/lib/context/UIContext';
import { useCart } from '@/lib/context/CartContext';
import { CategoryDropdown } from './CategoryDropdown';

export const MainHeader: React.FC = () => {
  const { openCart, openSearch, isCategoryDropdownOpen, setIsCategoryDropdownOpen, selectedCategory, setIsMobileMenuOpen } = useUI();
  const { totalItemsCount } = useCart();

  return (
    <div className="bg-white border-b border-hyper-gray-200 px-4 md:px-8 py-4 sticky top-0 z-30 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
        {/* Mobile Hamburger & Logo */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
            className="p-2 text-hyper-black hover:bg-hyper-gray-100 rounded-full transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="text-2xl font-black tracking-tighter text-hyper-black flex items-center space-x-1">
            <span>WISDOM</span>
          </Link>
        </div>

        {/* Desktop Logo */}
        <Link href="/" className="hidden lg:flex items-center space-x-1.5 text-3xl font-black tracking-tighter text-hyper-black hover:opacity-90 transition-opacity">
          <span>WISDOM</span>
        </Link>

        {/* Search Component (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-2xl relative items-center">
          <div className="flex items-center w-full bg-hyper-gray-100 rounded-full p-1.5 border border-hyper-gray-200 hover:border-hyper-gray-300 focus-within:border-hyper-black focus-within:ring-1 focus-within:ring-hyper-black transition-all">
            {/* Category Trigger */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-hyper-black bg-white rounded-full shadow-sm hover:bg-hyper-gray-50 transition-colors whitespace-nowrap"
              >
                <span>{selectedCategory}</span>
                <ChevronDown className="w-3.5 h-3.5 text-hyper-gray-600" />
              </button>

              <CategoryDropdown />
            </div>

            {/* Input & Search Trigger */}
            <div
              onClick={openSearch}
              className="flex-1 flex items-center justify-between px-4 cursor-pointer text-hyper-gray-600 text-sm font-medium"
            >
              <span>What are you looking for?</span>
              <div className="bg-hyper-black text-white p-2 rounded-full hover:bg-slate-800 transition-colors">
                <Search className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Mobile Search Icon */}
          <button
            onClick={openSearch}
            aria-label="Search"
            className="lg:hidden p-2 text-hyper-black hover:bg-hyper-gray-100 rounded-full transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Location Icon */}
          <Link
            href="/pages/contact"
            aria-label="Store Location"
            className="hidden sm:flex p-2.5 text-hyper-black hover:bg-hyper-gray-100 rounded-full transition-colors"
          >
            <MapPin className="w-5 h-5" />
          </Link>

          {/* Account Icon */}
          <button
            aria-label="Account"
            className="hidden sm:flex p-2.5 text-hyper-black hover:bg-hyper-gray-100 rounded-full transition-colors"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Shopping Bag Icon with subtle circular light-gray background */}
          <button
            onClick={openCart}
            aria-label="Shopping Bag"
            className="relative p-3 bg-hyper-gray-100 hover:bg-hyper-gray-200 rounded-full text-hyper-black transition-all transform active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-hyper-red-sale text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-fade-in shadow-sm">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
