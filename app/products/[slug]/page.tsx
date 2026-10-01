'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Star, ShieldCheck, Truck, RefreshCw, ShoppingBag, Heart, Plus, Minus, Check } from 'lucide-react';
import { ProductService } from '@/lib/services/ProductService';
import { Product, ProductColor } from '@/lib/types';
import { useCart } from '@/lib/context/CartContext';
import { useWishlist } from '@/lib/context/WishlistContext';
import { useUI } from '@/lib/context/UIContext';
import { useCurrency } from '@/lib/context/CurrencyContext';
import { ProductCard } from '@/components/products/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'spoke-sofa';

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'materials' | 'dimensions' | 'shipping'>('desc');

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { openCart } = useUI();
  const { formatPrice, currency } = useCurrency();

  useEffect(() => {
    async function loadProduct() {
      const p = await ProductService.getProductBySlug(slug);
      if (p) {
        setProduct(p);
        setSelectedImage(p.images[0] || p.thumbnail);
        setSelectedColor(p.colors[0]);

        const all = await ProductService.getAllProducts();
        setRelatedProducts(all.filter((item) => item.id !== p.id).slice(0, 4));
      }
    }
    loadProduct();
  }, [slug]);

  if (!product) {
    return (
      <div className="py-24 text-center text-sm font-bold text-hyper-gray-400">
        Loading product details...
      </div>
    );
  }

  const isLiked = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (selectedColor) {
      addToCart(product, selectedColor, quantity);
      openCart();
    }
  };

  return (
    <div className="py-8 px-4 md:px-8 max-w-[1440px] mx-auto space-y-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs font-semibold text-hyper-gray-600 uppercase tracking-wider">
        <Link href="/" className="hover:text-hyper-black transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/collections/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-hyper-black transition-colors">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-hyper-black font-extrabold">{product.name}</span>
      </div>

      {/* Main PDP Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-square w-full rounded-hyper-xl overflow-hidden bg-hyper-gray-100 border border-hyper-gray-200 shadow-hyper-card">
            <Image
              src={selectedImage || product.thumbnail}
              alt={product.name}
              fill
              priority
              className="object-cover object-center transition-all duration-500"
            />

            {/* Wishlist Button Overlay */}
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'text-hyper-red-sale fill-hyper-red-sale' : 'text-hyper-gray-600'}`} />
            </button>
          </div>

          {/* Thumbnail Selector list */}
          {product.images && product.images.length > 1 && (
            <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-20 rounded-hyper overflow-hidden bg-hyper-gray-100 flex-shrink-0 border-2 transition-all ${
                    selectedImage === img ? 'border-hyper-black ring-2 ring-hyper-black scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: PDP Product Details & Actions */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-hyper-gray-600 block">
              {product.category} &bull; {product.collection}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-hyper-black tracking-tight leading-none">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-3 pt-1">
              <div className="flex items-center text-amber-500 space-x-1 text-sm font-extrabold">
                <Star className="w-4 h-4 fill-current" />
                <span>{product.rating}</span>
              </div>
              <span className="text-xs text-hyper-gray-400">&bull;</span>
              <span className="text-xs font-semibold text-hyper-gray-600">
                {product.reviewsCount} Customer Reviews
              </span>
            </div>
          </div>

          {/* Pricing with Currency */}
          <div className="flex items-baseline space-x-4">
            <span className="text-3xl md:text-4xl font-black text-hyper-black">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-xl font-semibold text-hyper-gray-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            {product.isSale && (
              <span className="bg-hyper-red-sale text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Sale
              </span>
            )}
          </div>

          <p className="text-sm text-hyper-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-hyper-black flex items-center justify-between">
                <span>Finish / Color:</span>
                <span className="font-extrabold text-hyper-blue-bright">{selectedColor?.name}</span>
              </label>
              <div className="flex items-center space-x-3">
                {product.colors.map((color) => {
                  const isSelected = selectedColor?.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center ${
                        isSelected ? 'border-hyper-black scale-110 ring-2 ring-hyper-black' : 'border-slate-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {isSelected && <Check className={`w-4 h-4 ${color.hex === '#1C1C1E' || color.hex === '#121212' ? 'text-white' : 'text-hyper-black'}`} />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity Controls */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-bold uppercase tracking-wider text-hyper-black block">
              Quantity
            </label>
            <div className="inline-flex items-center border border-hyper-gray-300 rounded-full bg-hyper-gray-50 px-4 py-2 space-x-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-hyper-black hover:text-blue-600"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-extrabold text-hyper-black w-6 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-hyper-black hover:text-blue-600"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-hyper-black text-white font-extrabold text-sm py-4 rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart ({formatPrice(product.price * quantity)})</span>
            </button>

            <button
              onClick={() => {
                handleAddToCart();
              }}
              className="w-full bg-hyper-blue-bright text-white font-extrabold text-sm py-4 rounded-full hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center space-x-2"
            >
              <span>Buy Now ({currency.flag} {currency.code})</span>
            </button>
          </div>

          {/* Guarantees Badges */}
          <div className="grid grid-cols-3 gap-2 pt-6 border-t border-hyper-gray-200 text-center text-[11px] font-bold text-hyper-gray-600">
            <div className="p-3 bg-hyper-gray-50 rounded-hyper flex flex-col items-center space-y-1">
              <Truck className="w-4 h-4 text-hyper-black" />
              <span>Free Express Delivery</span>
            </div>
            <div className="p-3 bg-hyper-gray-50 rounded-hyper flex flex-col items-center space-y-1">
              <ShieldCheck className="w-4 h-4 text-hyper-black" />
              <span>EU Eco-Certified</span>
            </div>
            <div className="p-3 bg-hyper-gray-50 rounded-hyper flex flex-col items-center space-y-1">
              <RefreshCw className="w-4 h-4 text-hyper-black" />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Tabs Section */}
      <div className="border-t border-hyper-gray-200 pt-10 space-y-6">
        <div className="flex items-center space-x-8 border-b border-hyper-gray-200 pb-4 overflow-x-auto no-scrollbar">
          {[
            { id: 'desc', label: 'Description' },
            { id: 'materials', label: 'Materials & Craftsmanship' },
            { id: 'dimensions', label: 'Dimensions & Weight' },
            { id: 'shipping', label: 'Shipping & Returns' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-base font-extrabold tracking-tight whitespace-nowrap transition-colors pb-2 relative ${
                activeTab === tab.id
                  ? 'text-hyper-black border-b-2 border-hyper-black'
                  : 'text-hyper-gray-400 hover:text-hyper-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl text-sm md:text-base text-hyper-gray-600 leading-relaxed">
          {activeTab === 'desc' && <p>{product.description}</p>}
          {activeTab === 'materials' && <p>{product.material}</p>}
          {activeTab === 'dimensions' && <p>{product.dimensions}</p>}
          {activeTab === 'shipping' && (
            <p>
              Complimentary White Glove delivery on orders over {formatPrice(500)}. Items are shipped in eco-friendly protective packaging. 30-day hassle-free returns.
            </p>
          )}
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="border-t border-hyper-gray-200 pt-12 space-y-8">
        <h3 className="text-2xl md:text-3xl font-black text-hyper-black">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
