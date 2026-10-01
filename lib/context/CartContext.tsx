'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, ProductColor } from '../types';
import { CartService } from '../services/CartService';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, color?: ProductColor, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  remainingFreeShipping: number;
  totalItemsCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('hyper_cart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse cart local storage', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('hyper_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, color?: ProductColor, quantity: number = 1) => {
    const selectedColor = color || product.colors[0];
    setItems((prev) => CartService.addItem(prev, product, selectedColor, quantity));
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => CartService.removeItem(prev, id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) => CartService.updateQuantity(prev, id, quantity));
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = CartService.calculateSubtotal(items);
  const remainingFreeShipping = CartService.calculateRemainingForFreeShipping(subtotal);
  const totalItemsCount = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        remainingFreeShipping,
        totalItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
