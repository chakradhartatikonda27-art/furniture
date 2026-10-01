'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { CURRENCIES, useCurrency } from '@/lib/context/CurrencyContext';

export const CurrencySelectorDropdown: React.FC = () => {
  const { currency, setCurrency, isCurrencyDropdownOpen, setIsCurrencyDropdownOpen } = useCurrency();

  if (!isCurrencyDropdownOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={() => setIsCurrencyDropdownOpen(false)}
      />

      {/* Dropdown Menu */}
      <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-hyper-hover border border-hyper-gray-200 py-2 z-50 animate-slide-up text-hyper-black">
        <div className="px-4 py-2 border-b border-hyper-gray-100 text-xs font-bold text-hyper-gray-600 uppercase tracking-wider">
          Select Region & Currency
        </div>
        {CURRENCIES.map((option) => {
          const isSelected = currency.code === option.code;
          return (
            <button
              key={option.code}
              onClick={() => {
                setCurrency(option);
                setIsCurrencyDropdownOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-xs font-bold flex items-center justify-between transition-colors ${
                isSelected
                  ? 'bg-hyper-blue-soft text-hyper-blue-bright'
                  : 'hover:bg-hyper-gray-100 text-hyper-black'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-base">{option.flag}</span>
                <span>{option.name}</span>
              </div>
              {isSelected && <Check className="w-4 h-4 text-hyper-blue-bright" />}
            </button>
          );
        })}
      </div>
    </>
  );
};
