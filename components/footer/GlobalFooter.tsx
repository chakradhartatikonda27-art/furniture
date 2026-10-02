'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useCurrency } from '@/lib/context/CurrencyContext';
import { CurrencySelectorDropdown } from '@/components/header/CurrencySelectorDropdown';

export const GlobalFooter: React.FC = () => {
  const { currency, isCurrencyDropdownOpen, setIsCurrencyDropdownOpen } = useCurrency();

  return (
    <footer className="bg-white border-t border-hyper-gray-200 pt-16 pb-12 px-4 md:px-8 text-hyper-black">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="text-3xl font-black tracking-tighter text-hyper-black">
              HYPER
            </Link>
            <p className="text-sm text-hyper-gray-600 leading-relaxed max-w-sm">
              Premium modern furniture, seating, tables, lighting, and home decor designed with an architectural editorial shopping experience.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              {['Facebook', 'X', 'Instagram', 'TikTok', 'YouTube'].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="w-9 h-9 rounded-full bg-hyper-gray-100 flex items-center justify-center text-xs font-bold text-hyper-black hover:bg-hyper-black hover:text-white transition-colors"
                >
                  {name.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-hyper-black">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-hyper-gray-600">
              <li>
                <Link href="/pages/about" className="hover:text-hyper-black transition-colors">About us</Link>
              </li>
              <li>
                <Link href="/pages/contact" className="hover:text-hyper-black transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/pages/faq" className="hover:text-hyper-black transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="/pages/about" className="hover:text-hyper-black transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/pages/contact" className="hover:text-hyper-black transition-colors">Find a Store</Link>
              </li>
            </ul>
          </div>

          {/* Collection Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-hyper-black">
              Collection
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-hyper-gray-600">
              <li>
                <Link href="/collections/press-tables" className="hover:text-hyper-black transition-colors">Tables</Link>
              </li>
              <li>
                <Link href="/products/bow-chair" className="hover:text-hyper-black transition-colors">Bow Chairs</Link>
              </li>
              <li>
                <Link href="/collections/press-tables" className="hover:text-hyper-black transition-colors">Turn Table</Link>
              </li>
              <li>
                <Link href="/products/turn-chair-vivid" className="hover:text-hyper-black transition-colors">Turn Chair</Link>
              </li>
              <li>
                <Link href="/products/cross-chair-heritage" className="hover:text-hyper-black transition-colors">Cross Bar Chair</Link>
              </li>
            </ul>
          </div>

          {/* Shop Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-hyper-black">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-hyper-gray-600">
              <li>
                <Link href="/collections/spoke-sofa" className="hover:text-hyper-black transition-colors">Sofas</Link>
              </li>
              <li>
                <Link href="/collections/outdoor" className="hover:text-hyper-black transition-colors">Outdoor</Link>
              </li>
              <li>
                <Link href="/collections/chairs" className="hover:text-hyper-black transition-colors">Seating</Link>
              </li>
              <li>
                <Link href="/collections/lighting" className="hover:text-hyper-black transition-colors">Lighting</Link>
              </li>
              <li>
                <Link href="/collections/accessories" className="hover:text-hyper-black transition-colors">Accessories</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Bar: Country Selector & Payment Badges */}
        <div className="pt-8 border-t border-hyper-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 relative">
          {/* Interactive Country Selector */}
          <div className="relative">
            <button
              onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
              className="inline-flex items-center space-x-2 bg-hyper-gray-100 px-4 py-2.5 rounded-full text-xs font-bold text-hyper-black border border-hyper-gray-200 cursor-pointer hover:bg-hyper-gray-200 transition-colors"
            >
              <span>{currency.flag} {currency.name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-hyper-gray-600" />
            </button>

            <CurrencySelectorDropdown />
          </div>

          {/* Payment Provider Badges */}
          <div className="flex items-center space-x-3 text-xs font-bold text-hyper-gray-600">
            <span className="px-3 py-1 bg-hyper-gray-100 rounded border border-hyper-gray-200">Visa</span>
            <span className="px-3 py-1 bg-hyper-gray-100 rounded border border-hyper-gray-200">Mastercard</span>
            <span className="px-3 py-1 bg-hyper-gray-100 rounded border border-hyper-gray-200">Amex</span>
            <span className="px-3 py-1 bg-hyper-gray-100 rounded border border-hyper-gray-200">PayPal</span>
            <span className="px-3 py-1 bg-hyper-gray-100 rounded border border-hyper-gray-200">UPI / RuPay</span>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-6 border-t border-hyper-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-hyper-gray-600 gap-3">
          <div>© 2026 HYPER Furniture. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <Link href="/pages/faq" className="hover:text-hyper-black transition-colors">Terms of Service</Link>
            <Link href="/pages/faq" className="hover:text-hyper-black transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
