'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X, ChevronRight } from 'lucide-react';
import { useUI } from '@/lib/context/UIContext';
import { SearchService, SearchResult } from '@/lib/services/SearchService';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, selectedCategory } = useUI();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult>({ products: [], categories: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults({ products: [], categories: [] });
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      SearchService.search(query, selectedCategory).then((res) => {
        setResults(res);
        setLoading(false);
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [query, selectedCategory]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={closeSearch}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-hyper-xl shadow-2xl overflow-hidden z-50 animate-slide-up border border-hyper-gray-200">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-hyper-gray-200 flex items-center space-x-3 bg-hyper-gray-50">
          <Search className="w-5 h-5 text-hyper-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search in ${selectedCategory}... (e.g. chair, sofa, table)`}
            autoFocus
            className="w-full bg-transparent text-hyper-black text-base font-medium placeholder-hyper-gray-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-bold text-hyper-gray-400 hover:text-hyper-black"
            >
              Clear
            </button>
          )}
          <button
            onClick={closeSearch}
            className="p-1 text-hyper-gray-600 hover:text-hyper-black rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions area */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          {loading && (
            <div className="text-center py-8 text-xs font-bold text-hyper-gray-400">
              Searching HYPER Catalog...
            </div>
          )}

          {!loading && query && results.products.length === 0 && results.categories.length === 0 && (
            <div className="text-center py-12 space-y-2">
              <div className="text-base font-bold text-hyper-black">No products found</div>
              <div className="text-xs text-hyper-gray-600">
                Try searching for &quot;chair&quot;, &quot;sofa&quot;, or &quot;table&quot;.
              </div>
            </div>
          )}

          {!loading && !query && (
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-hyper-gray-400">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {['Bow Chair', 'Spoke Sofa', 'Turn Chair', 'Press Tables', 'Task Chair Luxe'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="bg-hyper-gray-100 hover:bg-hyper-black hover:text-white text-hyper-black text-xs font-bold px-3.5 py-2 rounded-full transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Category Suggestions */}
          {!loading && results.categories.length > 0 && (
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-hyper-gray-400">
                Matched Categories
              </div>
              <div className="flex flex-wrap gap-2">
                {results.categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/collections/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={closeSearch}
                    className="bg-hyper-blue-soft text-hyper-blue-bright text-xs font-bold px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors flex items-center space-x-1"
                  >
                    <span>{cat}</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Product Match List */}
          {!loading && results.products.length > 0 && (
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-hyper-gray-400">
                Products ({results.products.length})
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {results.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={closeSearch}
                    className="flex items-center space-x-3 p-2.5 rounded-hyper bg-hyper-gray-50 hover:bg-hyper-gray-100 border border-hyper-gray-100 transition-colors group"
                  >
                    <div className="relative w-14 h-14 rounded-hyper overflow-hidden bg-white flex-shrink-0">
                      <Image
                        src={product.thumbnail}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-hyper-gray-400 uppercase tracking-wider">
                        {product.category}
                      </div>
                      <div className="text-sm font-bold text-hyper-black group-hover:text-hyper-blue-bright transition-colors truncate">
                        {product.name}
                      </div>
                      <div className="text-xs font-black text-hyper-black">
                        ${product.price.toLocaleString()}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
