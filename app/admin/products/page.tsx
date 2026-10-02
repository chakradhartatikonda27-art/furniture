'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Search, Filter, Edit2, Trash2, Zap, Tag, Check, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/lib/data/mockData';
import { Product } from '@/lib/types';
import { useCurrency } from '@/lib/context/CurrencyContext';

export default function AdminProductsPage() {
  const [productList, setProductList] = useState<Product[]>(PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New product form state
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Chairs',
    price: 399,
    compareAtPrice: 499,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    isSale: true,
    sellingFast: false,
    description: '',
  });

  const { formatPrice } = useCurrency();

  const filteredProducts = productList.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCat;
  });

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product from Wisdom Furniture catalog?')) {
      setProductList((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleAddProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Product = {
      id: `prod-${Date.now()}`,
      name: newProduct.name,
      slug: newProduct.name.toLowerCase().replace(/\s+/g, '-'),
      category: newProduct.category,
      price: Number(newProduct.price),
      compareAtPrice: newProduct.compareAtPrice ? Number(newProduct.compareAtPrice) : undefined,
      currency: 'USD',
      images: [newProduct.image],
      thumbnail: newProduct.image,
      colors: [{ name: 'Default Oak', hex: '#E5A93C' }],
      isSale: newProduct.isSale,
      sellingFast: newProduct.sellingFast,
      description: newProduct.description || 'Modern luxury product from Wisdom Furniture.',
      tags: ['modern', 'furniture', newProduct.category.toLowerCase()],
      stock: 25,
      rating: 4.9,
      reviewsCount: 12,
      material: 'European Solid Oak',
      dimensions: 'Standard Showroom Spec',
    };

    setProductList((prev) => [created, ...prev]);
    setIsModalOpen(false);
    setNewProduct({
      name: '',
      category: 'Chairs',
      price: 399,
      compareAtPrice: 499,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
      isSale: true,
      sellingFast: false,
      description: '',
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
            Product Inventory Management
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Manage catalog items, pricing, discounts, and stock status for Wisdom Furniture.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center space-x-2 bg-slate-900 text-white font-extrabold text-xs px-5 py-3 rounded-full hover:bg-slate-800 transition-colors shadow-md"
        >
          <Plus className="w-4 h-4 text-amber-400" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search product name or category..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-slate-900"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar w-full md:w-auto">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              selectedCategory === 'All' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Items ({productList.length})
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.name)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                selectedCategory.toLowerCase() === c.name.toLowerCase()
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-extrabold border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-6">Product</th>
                <th className="py-3.5 px-6">Category</th>
                <th className="py-3.5 px-6">Badges</th>
                <th className="py-3.5 px-6">Price</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200">
                        <Image src={product.thumbnail} alt={product.name} fill className="object-cover" />
                      </div>
                      <div>
                        <div className="font-extrabold text-slate-900 text-sm">{product.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono">ID: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-6 font-bold text-slate-800">{product.category}</td>
                  <td className="py-3.5 px-6 space-x-1">
                    {product.isSale && (
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-extrabold text-[10px]">
                        Sale
                      </span>
                    )}
                    {product.sellingFast && (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-extrabold text-[10px]">
                        ⚡ Selling Fast
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-6">
                    <div className="font-black text-slate-900 text-sm">{formatPrice(product.price)}</div>
                    {product.compareAtPrice && (
                      <div className="text-[11px] text-slate-400 line-through">
                        {formatPrice(product.compareAtPrice)}
                      </div>
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-right space-x-2">
                    <button
                      onClick={() => alert(`Edit Product: ${product.name}`)}
                      className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="p-1.5 text-rose-600 hover:text-rose-800 rounded-lg hover:bg-rose-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />

          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 z-50 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-lg font-extrabold text-slate-900">Add New Wisdom Product</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProductSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="e.g. Hyderabad Craft Dining Table"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Category</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900 font-bold"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Price ($ USD)</label>
                  <input
                    type="number"
                    required
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Image URL</label>
                <input
                  type="url"
                  required
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div className="flex items-center space-x-6 pt-2">
                <label className="flex items-center space-x-2 cursor-pointer font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={newProduct.isSale}
                    onChange={(e) => setNewProduct({ ...newProduct, isSale: e.target.checked })}
                    className="w-4 h-4 rounded text-slate-900 focus:ring-slate-900"
                  />
                  <span>On Sale Badge</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={newProduct.sellingFast}
                    onChange={(e) => setNewProduct({ ...newProduct, sellingFast: e.target.checked })}
                    className="w-4 h-4 rounded text-slate-900 focus:ring-slate-900"
                  />
                  <span>Selling Fast Ticker</span>
                </label>
              </div>

              <div className="pt-4 flex justify-end space-x-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-full hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-slate-900 text-white font-black rounded-full hover:bg-slate-800"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
