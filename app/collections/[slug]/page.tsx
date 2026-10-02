'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductService } from '@/lib/services/ProductService';
import { CollectionService } from '@/lib/services/CollectionService';
import { Product, Collection, FilterState } from '@/lib/types';
import { DROPDOWN_CATEGORIES } from '@/lib/data/mockData';

export default function DynamicCollectionPage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'all';

  const [collection, setCollection] = useState<Collection | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState<FilterState>({
    category: 'All Categories',
    minPrice: 0,
    maxPrice: 3000,
    colors: [],
    materials: [],
    isSale: false,
    isNew: false,
    sortBy: 'featured',
  });

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const colData = await CollectionService.getCollectionBySlug(slug);
      if (colData) {
        setCollection(colData);
      }

      const catProds = await ProductService.getProductsByCategory(slug);
      setProducts(catProds);
      setLoading(false);
    }
    loadData();
  }, [slug]);

  useEffect(() => {
    async function applyFilters() {
      const res = await ProductService.filterProducts(products, filters);
      setFilteredProducts(res);
    }
    applyFilters();
  }, [filters, products]);

  return (
    <div className="py-8 px-4 md:px-8 max-w-[1440px] mx-auto space-y-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs font-semibold text-hyper-gray-600 uppercase tracking-wider">
        <Link href="/" className="hover:text-hyper-black transition-colors">Home</Link>
        <span>/</span>
        <Link href="/collections" className="hover:text-hyper-black transition-colors">Collections</Link>
        <span>/</span>
        <span className="text-hyper-black font-extrabold">{collection?.name || slug}</span>
      </div>

      {/* Editorial Collection Hero Banner */}
      <div className="relative rounded-hyper-xl overflow-hidden min-h-[260px] md:min-h-[360px] bg-hyper-black text-white p-8 md:p-14 flex items-center shadow-hyper-card">
        <Image
          src={collection?.heroImage || collection?.image || 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop'}
          alt={collection?.name || slug}
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-hyper-yellow-badge">
            Curated Showroom
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white capitalize">
            {collection?.name || slug.replace('-', ' ')}
          </h1>
          <p className="text-sm md:text-base text-slate-200 font-normal max-w-lg">
            {collection?.description || 'Explore our editorial selection of handcrafted seating, tables, and architectural decor.'}
          </p>
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-hyper-gray-200 gap-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
            className="inline-flex items-center space-x-2 bg-hyper-black text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>

          <span className="text-xs font-bold text-hyper-gray-600">
            Showing {filteredProducts.length} Products
          </span>
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-hyper-gray-600 whitespace-nowrap">Sort by:</span>
          <div className="relative">
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))}
              className="appearance-none bg-hyper-gray-100 text-hyper-black text-xs font-bold py-2 pl-4 pr-8 rounded-full border border-hyper-gray-200 focus:outline-none focus:border-hyper-black cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-hyper-black absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Filter Drawer / Sidebar Toggleable */}
      {isFilterDrawerOpen && (
        <div className="bg-hyper-gray-50 p-6 rounded-hyper-lg border border-hyper-gray-200 space-y-6 animate-slide-up">
          <div className="flex items-center justify-between border-b border-hyper-gray-200 pb-3">
            <h3 className="text-sm font-extrabold text-hyper-black flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Refine Catalog</span>
            </h3>
            <button
              onClick={() =>
                setFilters({
                  category: 'All Categories',
                  minPrice: 0,
                  maxPrice: 3000,
                  colors: [],
                  materials: [],
                  isSale: false,
                  isNew: false,
                  sortBy: 'featured',
                })
              }
              className="text-xs font-bold text-hyper-red-sale hover:underline"
            >
              Reset Filters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-hyper-black uppercase tracking-wider block">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
                className="w-full bg-white text-hyper-black text-xs font-medium p-2.5 rounded-hyper border border-hyper-gray-200"
              >
                {DROPDOWN_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-hyper-black uppercase tracking-wider block">
                Max Price (${filters.maxPrice})
              </label>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={filters.maxPrice}
                onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))}
                className="w-full accent-hyper-black cursor-pointer"
              />
            </div>

            {/* Checkbox Deals */}
            <div className="space-y-2 flex flex-col justify-end">
              <label className="flex items-center space-x-2 text-xs font-bold text-hyper-black cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.isSale}
                  onChange={(e) => setFilters((prev) => ({ ...prev, isSale: e.target.checked }))}
                  className="rounded border-slate-300 text-hyper-black focus:ring-hyper-black"
                />
                <span>On Sale Items Only</span>
              </label>
              <label className="flex items-center space-x-2 text-xs font-bold text-hyper-black cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.isNew}
                  onChange={(e) => setFilters((prev) => ({ ...prev, isNew: e.target.checked }))}
                  className="rounded border-slate-300 text-hyper-black focus:ring-hyper-black"
                />
                <span>New Arrivals Only</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid: Desktop 4 columns, Tablet 3 columns, Mobile 2 columns */}
      {loading ? (
        <div className="text-center py-20 text-sm font-bold text-hyper-gray-400">
          Loading Catalog...
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-hyper-gray-50 rounded-hyper-xl space-y-3">
          <div className="text-lg font-bold text-hyper-black">No products matched your filters</div>
          <p className="text-xs text-hyper-gray-600">Try adjusting your price slider or category selection.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
