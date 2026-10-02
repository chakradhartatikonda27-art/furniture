'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown, MessageSquare, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
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
            <Link href="/" className="text-3xl font-black tracking-tighter text-hyper-black flex items-center space-x-2">
              <span>WISDOM</span>
              <span className="text-xs font-bold bg-hyper-black text-white px-2 py-0.5 rounded uppercase tracking-wider">
                Furniture
              </span>
            </Link>
            <p className="text-sm text-hyper-gray-600 leading-relaxed max-w-sm">
              Wisdom Furniture brings modern luxury, ergonomic craftsmanship, seating, tables, and home decor to homes worldwide.
            </p>

            {/* Social & Support Icons (WhatsApp, Instagram, YouTube) */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://wa.me/919876543210?text=Hi%20Wisdom%20Furniture,%20I%20have%20an%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Direct Support"
                className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>

              <a
                href="https://instagram.com/wisdom_furniture"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @Wisdom_Furniture"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com/@wisdomfurniture"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube Channel"
                className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm"
              >
                <Youtube className="w-4 h-4 fill-current" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Page"
                className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-hyper-black">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-hyper-gray-600">
              <li>
                <Link href="/pages/about" className="hover:text-hyper-black transition-colors">About Wisdom</Link>
              </li>
              <li>
                <Link href="/pages/contact" className="hover:text-hyper-black transition-colors">Contact Concierge</Link>
              </li>
              <li>
                <Link href="/pages/faq" className="hover:text-hyper-black transition-colors">FAQs & Support</Link>
              </li>
              <li>
                <Link href="/pages/about" className="hover:text-hyper-black transition-colors">Design Journal</Link>
              </li>
              <li>
                <Link href="/pages/contact" className="hover:text-hyper-black transition-colors">Showrooms</Link>
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
                <Link href="/collections/press-tables" className="hover:text-hyper-black transition-colors">Dining & Tables</Link>
              </li>
              <li>
                <Link href="/products/bow-chair" className="hover:text-hyper-black transition-colors">Bow Oak Chairs</Link>
              </li>
              <li>
                <Link href="/collections/spoke-sofa" className="hover:text-hyper-black transition-colors">Bouclé Sofas</Link>
              </li>
              <li>
                <Link href="/products/turn-chair-vivid" className="hover:text-hyper-black transition-colors">Turn Chairs 40% Off</Link>
              </li>
              <li>
                <Link href="/products/cross-chair-heritage" className="hover:text-hyper-black transition-colors">Cross Bar Chairs</Link>
              </li>
            </ul>
          </div>

          {/* Shop Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-hyper-black">
              Support & Payments
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-hyper-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Razorpay Gateway Active</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Cashfree Payments Supported</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>Visa, Mastercard & Amex Cards</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Instant UPI & Net Banking</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Bar: Country Selector & Payment Gateways Badges */}
        <div className="pt-8 border-t border-hyper-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 relative">
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

          {/* Payment Gateways Badges (Razorpay, Cashfree, Credit/Debit Cards, UPI/RuPay) */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-extrabold text-hyper-black">
            <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-md border border-blue-200 shadow-2xs">
              Razorpay
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-800 rounded-md border border-purple-200 shadow-2xs">
              Cashfree
            </span>
            <span className="px-3 py-1 bg-hyper-gray-100 rounded-md border border-hyper-gray-200">
              Credit / Debit Cards
            </span>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-md border border-emerald-200 shadow-2xs">
              UPI / RuPay
            </span>
            <span className="px-3 py-1 bg-hyper-gray-100 rounded-md border border-hyper-gray-200">
              PayPal
            </span>
            <span className="px-3 py-1 bg-amber-50 text-amber-900 rounded-md border border-amber-200">
              Net Banking
            </span>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-6 border-t border-hyper-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-hyper-gray-600 gap-3">
          <div>© 2026 Wisdom Furniture. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <Link href="/pages/faq" className="hover:text-hyper-black transition-colors">Terms of Service</Link>
            <Link href="/pages/faq" className="hover:text-hyper-black transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
