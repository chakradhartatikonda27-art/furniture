'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/context/CartContext';
import { useUI } from '@/lib/context/UIContext';
import { useCurrency } from '@/lib/context/CurrencyContext';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, closeCart } = useUI();
  const { items, removeFromCart, updateQuantity, subtotal, totalItemsCount } = useCart();
  const { formatPrice, currency } = useCurrency();

  if (!isCartOpen) return null;

  const thresholdUSD = 500;
  const remainingUSD = Math.max(0, thresholdUSD - subtotal);
  const progressPercentage = Math.min(100, (subtotal / thresholdUSD) * 100);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={closeCart}
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-50 animate-slide-right">
        {/* Header */}
        <div className="p-6 border-b border-hyper-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-hyper-black" />
            <h3 className="text-xl font-extrabold text-hyper-black">Your Shopping Bag</h3>
            <span className="text-xs font-extrabold bg-hyper-gray-100 text-hyper-black px-2.5 py-1 rounded-full">
              {totalItemsCount}
            </span>
          </div>

          <button
            onClick={closeCart}
            aria-label="Close Cart"
            className="p-2 text-hyper-gray-600 hover:text-hyper-black rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Free Shipping Progress Bar */}
        <div className="bg-hyper-blue-soft p-4 border-b border-blue-100 space-y-2">
          <div className="flex justify-between text-xs font-bold text-hyper-blue-bright">
            <span>
              {remainingUSD > 0
                ? `Add ${formatPrice(remainingUSD)} more for free shipping!`
                : '✌ You earned FREE Express Shipping!'}
            </span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-hyper-blue-bright h-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-hyper-gray-100 rounded-full flex items-center justify-center mx-auto text-hyper-gray-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-hyper-black">Your bag is empty</h4>
              <p className="text-xs text-hyper-gray-600 max-w-xs mx-auto">
                Explore our modern furniture collections and discover luxury pieces for your sanctuary.
              </p>
              <button
                onClick={closeCart}
                className="inline-flex items-center space-x-2 bg-hyper-black text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-slate-800 transition-colors"
              >
                <span>Start Shopping</span>
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 pb-4 border-b border-hyper-gray-100 group"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 rounded-hyper bg-hyper-gray-100 overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.thumbnail}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 space-y-1">
                  <Link
                    href={`/products/${item.product.slug}`}
                    onClick={closeCart}
                    className="text-sm font-extrabold text-hyper-black hover:text-hyper-blue-bright transition-colors line-clamp-1"
                  >
                    {item.product.name}
                  </Link>

                  {/* Swatch & Size info */}
                  <div className="flex items-center space-x-2 text-xs text-hyper-gray-600">
                    <span
                      className="w-3 h-3 rounded-full border border-slate-300"
                      style={{ backgroundColor: item.selectedColor.hex }}
                    />
                    <span>{item.selectedColor.name}</span>
                  </div>

                  <div className="text-sm font-black text-hyper-black pt-1">
                    {formatPrice(item.product.price * item.quantity)}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 pt-1">
                    <div className="flex items-center border border-hyper-gray-200 rounded-full bg-hyper-gray-50 px-2 py-0.5 space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-hyper-gray-600 hover:text-hyper-black"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-hyper-black w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-hyper-gray-600 hover:text-hyper-black"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-hyper-gray-400 hover:text-hyper-red-sale p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {items.length > 0 && (
          <div className="p-6 border-t border-hyper-gray-200 bg-hyper-gray-50 space-y-4">
            <div className="flex items-center justify-between text-base font-extrabold text-hyper-black">
              <span>Subtotal</span>
              <span className="text-xl font-black">{formatPrice(subtotal)}</span>
            </div>
            <div className="text-xs text-hyper-gray-600 flex items-center justify-between">
              <span>Selected Currency:</span>
              <span className="font-bold text-hyper-black">{currency.flag} {currency.code} ({currency.symbol})</span>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => alert(`Proceeding to Shopify Checkout in ${currency.code}...`)}
                className="w-full bg-hyper-black text-white font-extrabold text-sm py-4 rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Checkout ({currency.code})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={closeCart}
                className="w-full bg-white border border-hyper-gray-200 text-hyper-black font-bold text-xs py-3 rounded-full hover:bg-hyper-gray-100 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
