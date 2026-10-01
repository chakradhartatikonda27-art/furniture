'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { DROPDOWN_CATEGORIES } from '@/lib/data/mockData';
import { useUI } from '@/lib/context/UIContext';

export const CategoryDropdown: React.FC = () => {
  const { isCategoryDropdownOpen, setIsCategoryDropdownOpen, selectedCategory, setSelectedCategory } = useUI();

  if (!isCategoryDropdownOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-40 bg-black/10" 
        onClick={() => setIsCategoryDropdownOpen(false)} 
      />
      <div className="absolute left-0 top-full mt-2 w-64 max-h-96 overflow-y-auto bg-white rounded-2xl shadow-hyper-hover border border-hyper-gray-200 py-3 z-50 animate-slide-up scrollbar-thin">
        {DROPDOWN_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setIsCategoryDropdownOpen(false);
              }}
              className={`w-full text-left px-5 py-2.5 text-sm font-medium flex items-center justify-between transition-colors ${
                isSelected
                  ? 'bg-hyper-blue-soft text-hyper-blue-bright font-semibold'
                  : 'text-hyper-black hover:bg-hyper-gray-100'
              }`}
            >
              <span>{category}</span>
              {isSelected && <Check className="w-4 h-4 text-hyper-blue-bright" />}
            </button>
          );
        })}
      </div>
    </>
  );
};
