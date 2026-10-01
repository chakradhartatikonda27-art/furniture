'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CurrencyOption {
  code: string;
  name: string;
  flag: string;
  symbol: string;
  rate: number;
  locale: string;
  freeShippingThreshold: number; // Converted threshold
}

export const CURRENCIES: CurrencyOption[] = [
  { code: 'USD', name: 'United States (USD $)', flag: '🇺🇸', symbol: '$', rate: 1, locale: 'en-US', freeShippingThreshold: 500 },
  { code: 'INR', name: 'India (INR ₹)', flag: '🇮🇳', symbol: '₹', rate: 83.5, locale: 'en-IN', freeShippingThreshold: 41750 },
  { code: 'EUR', name: 'European Union (EUR €)', flag: '🇪🇺', symbol: '€', rate: 0.92, locale: 'de-DE', freeShippingThreshold: 460 },
  { code: 'GBP', name: 'United Kingdom (GBP £)', flag: '🇬🇧', symbol: '£', rate: 0.79, locale: 'en-GB', freeShippingThreshold: 395 },
  { code: 'CAD', name: 'Canada (CAD $)', flag: '🇨🇦', symbol: 'CA$', rate: 1.36, locale: 'en-CA', freeShippingThreshold: 680 },
];

interface CurrencyContextType {
  currency: CurrencyOption;
  setCurrency: (currency: CurrencyOption) => void;
  formatPrice: (amountInUSD: number) => string;
  convertPrice: (amountInUSD: number) => number;
  isCurrencyDropdownOpen: boolean;
  setIsCurrencyDropdownOpen: (open: boolean) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<CurrencyOption>(CURRENCIES[0]);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('hyper_currency');
    if (saved) {
      const found = CURRENCIES.find((c) => c.code === saved);
      if (found) setCurrencyState(found);
    }
  }, []);

  const setCurrency = (c: CurrencyOption) => {
    setCurrencyState(c);
    localStorage.setItem('hyper_currency', c.code);
  };

  const convertPrice = (amountInUSD: number): number => {
    return Math.round(amountInUSD * currency.rate);
  };

  const formatPrice = (amountInUSD: number): string => {
    const converted = amountInUSD * currency.rate;
    if (currency.code === 'INR') {
      return `${currency.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
    }
    return `${currency.symbol}${converted.toLocaleString(currency.locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
        isCurrencyDropdownOpen,
        setIsCurrencyDropdownOpen,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within a CurrencyProvider');
  return context;
};
