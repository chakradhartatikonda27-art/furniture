'use client';

import React from 'react';
import Image from 'next/image';
import { Plus, FolderTree, Edit2 } from 'lucide-react';
import { CATEGORIES } from '@/lib/data/mockData';

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
            Category Taxonomy
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Manage product category groupings, slugs, and 3x3 mobile grid positioning.
          </p>
        </div>

        <button
          onClick={() => alert('Add New Category Modal')}
          className="inline-flex items-center space-x-2 bg-slate-900 text-white font-extrabold text-xs px-5 py-3 rounded-full hover:bg-slate-800 transition-colors shadow-md"
        >
          <Plus className="w-4 h-4 text-amber-400" />
          <span>Add New Category</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4 hover:border-slate-400 transition-colors group"
          >
            <div className="relative w-16 h-16 rounded-full bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200">
              {cat.isSale ? (
                <div className="w-full h-full bg-rose-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center">
                  Sale
                </div>
              ) : (
                <Image src={cat.image} alt={cat.name} fill className="object-cover" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-extrabold text-slate-900 text-base group-hover:text-amber-600 transition-colors truncate">
                {cat.name}
              </h3>
              <div className="text-xs text-slate-500 font-mono">/{cat.slug}</div>
              <div className="text-[11px] font-bold text-slate-400 mt-1">{cat.count} Products</div>
            </div>

            <button
              onClick={() => alert(`Edit Category: ${cat.name}`)}
              className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
