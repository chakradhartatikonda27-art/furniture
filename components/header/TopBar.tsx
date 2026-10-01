'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useCurrency } from '@/lib/context/CurrencyContext';
import { CurrencySelectorDropdown } from './CurrencySelectorDropdown';

export const TopBar: React.FC = () => {
  const { currency, isCurrencyDropdownOpen, setIsCurrencyDropdownOpen, formatPrice } = useCurrency();

  return (
    <div className="bg-hyper-blue-royal text-white text-xs font-medium h-12 md:h-[64px] px-4 md:px-8 flex items-center justify-between transition-colors z-40 border-b border-slate-800">
      {/* Left Links */}
      <div className="hidden lg:flex items-center space-x-6 text-slate-300">
        <Link href="/pages/faq" className="hover:text-white transition-colors">
          Help Center
        </Link>
        <Link href="/pages/contact" className="hover:text-white transition-colors">
          Find a Store
        </Link>
        <Link href="/pages/contact" className="hover:text-white transition-colors">
          Contact
        </Link>
      </div>

      {/* Center Promotional Text */}
      <div className="flex-1 lg:flex-initial text-center text-xs md:text-sm font-semibold tracking-wide text-white flex items-center justify-center space-x-2">
        <span>✌ Free Express Shipping on orders {formatPrice(500)}!</span>
      </div>

      {/* Right Currency & Socials */}
      <div className="hidden md:flex items-center space-x-6 text-slate-300">
        {/* Interactive Currency Selector Trigger */}
        <div className="relative">
          <button
            onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
            className="flex items-center space-x-1.5 cursor-pointer hover:text-white transition-colors text-xs font-bold"
          >
            <span>{currency.flag} {currency.name}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          <CurrencySelectorDropdown />
        </div>

        <div className="flex items-center space-x-4 border-l border-slate-700 pl-4">
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">FB</a>
          <a href="#" aria-label="X" className="hover:text-white transition-colors">X</a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">IG</a>
          <a href="#" aria-label="TikTok" className="hover:text-white transition-colors">TT</a>
        </div>
      </div>
    </div>
  );
};
