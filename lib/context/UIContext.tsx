'use client';

import React, { createContext, useContext, useState } from 'react';

interface UIContextType {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;

  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  openSearch: () => void;
  closeSearch: () => void;

  isSpecialOffersOpen: boolean;
  setIsSpecialOffersOpen: (open: boolean) => void;

  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;

  isCategoryDropdownOpen: boolean;
  setIsCategoryDropdownOpen: (open: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSpecialOffersOpen, setIsSpecialOffersOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <UIContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        isSearchOpen,
        setIsSearchOpen,
        openSearch,
        closeSearch,
        isSpecialOffersOpen,
        setIsSpecialOffersOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isCategoryDropdownOpen,
        setIsCategoryDropdownOpen,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error('useUI must be used within a UIProvider');
  return context;
};
