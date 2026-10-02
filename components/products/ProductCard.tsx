'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Eye, Zap } from 'lucide-react';
import { Product, ProductColor } from '@/lib/types';
import { useCart } from '@/lib/context/CartContext';
import { useWishlist } from '@/lib/context/WishlistContext';
import { useUI } from '@/lib/context/UIContext';
import { useCurrency } from '@/lib/context/CurrencyContext';
import { createFurnitureSvgDataUri } from '@/lib/utils/imageUtils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(product.thumbnail);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { openCart } = useUI();
  const { formatPrice } = useCurrency();

  const isLiked = isInWishlist(product.id);
  const secondImage = product.images[1] || product.thumbnail;

  const fallbackUri = createFurnitureSvgDataUri(
    product.category.toLowerCase().includes('sofa') ? 'sofa' :
    product.category.toLowerCase().includes('chair') ? 'chair' :
    product.category.toLowerCase().includes('table') ? 'table' :
    product.category.toLowerCase().includes('storage') || product.category.toLowerCase().includes('wall') ? 'storage' :
    product.category.toLowerCase().includes('lamp') ? 'lamp' : 'accessories',
    product.name,
    '#F5F5F7'
  );

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedColor, 1);
    openCart();
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div 
      className="group relative flex flex-col bg-white rounded-hyper-lg overflow-hidden border border-hyper-gray-200 hover:border-hyper-gray-300 hover:shadow-hyper-hover transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-[#F5F5F7] overflow-hidden rounded-t-hyper-lg p-4 flex items-center justify-center">
        <Link href={`/products/${product.slug}`} className="block w-full h-full relative">
          <Image
            src={isHovered && secondImage ? secondImage : imgSrc}
            alt={product.name}
            fill
            onError={() => setImgSrc(fallbackUri)}
            className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Red Oval Sale Badge */}
        {product.isSale && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#DC2626] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
              Sale
            </span>
          </div>
        )}

        {/* Wishlist Icon */}
        <button
          onClick={handleWishlist}
          aria-label="Add to Wishlist"
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-110 active:scale-95 ${
            isLiked ? 'text-[#DC2626]' : 'text-hyper-gray-600 hover:text-hyper-black'
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-[#DC2626]' : ''}`} />
        </button>

        {/* Quick Add Shopping Bag Button (Always visible on bottom right, matching design reference) */}
        <button
          onClick={handleQuickAdd}
          aria-label="Quick Add to Cart"
          title="Add to Cart"
          className="absolute bottom-3 right-3 z-20 w-9 h-9 rounded-full bg-white text-hyper-black shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 border border-hyper-gray-200 hover:border-hyper-black"
        >
          <ShoppingBag className="w-4 h-4 text-hyper-black" />
        </button>

        {/* Selling Fast Ticker Strip */}
        {product.sellingFast && (
          <div className="absolute inset-x-0 bottom-0 bg-yellow-50/90 backdrop-blur-sm py-1 px-2 border-t border-yellow-200 z-10 overflow-hidden flex items-center justify-center space-x-2 text-[10px] font-extrabold uppercase tracking-wider text-hyper-black pr-12">
            <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>Selling Fast</span>
            <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>Selling Fast</span>
          </div>
        )}

        {/* Extended Quick Add Bar (Desktop Hover Only) */}
        {!product.sellingFast && (
          <div className="absolute inset-x-3 bottom-3 z-10 hidden md:flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pr-10">
            <button
              onClick={handleQuickAdd}
              className="flex-1 bg-hyper-black text-white text-xs font-bold py-2 px-3 rounded-full flex items-center justify-center space-x-1 hover:bg-slate-800 transition-colors shadow-md"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Quick Add</span>
            </button>
            <Link
              href={`/products/${product.slug}`}
              className="w-8 h-8 bg-white text-hyper-black rounded-full flex items-center justify-center hover:bg-hyper-gray-100 transition-colors shadow-md"
            >
              <Eye className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col flex-1 justify-between space-y-2.5">
        <div>
          <div className="text-[11px] font-bold text-hyper-gray-600 uppercase tracking-widest mb-1">
            {product.category}
          </div>
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="text-base font-extrabold text-hyper-black line-clamp-1 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Multi-Currency Pricing */}
        <div className="flex items-baseline space-x-2">
          <span className={`text-base font-black ${product.compareAtPrice ? 'text-[#DC2626]' : 'text-hyper-black'}`}>
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs font-medium text-hyper-gray-400 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        {/* Color Swatch Blocks */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center space-x-1.5 pt-1">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedColor(color);
                }}
                title={color.name}
                className={`w-4 h-4 rounded-sm border transition-transform ${
                  selectedColor.name === color.name ? 'scale-110 border-hyper-black ring-1 ring-hyper-black' : 'border-slate-300 hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
