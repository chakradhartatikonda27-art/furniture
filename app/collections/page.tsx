import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CollectionService } from '@/lib/services/CollectionService';

export default async function CollectionsPage() {
  const collections = await CollectionService.getCollections();

  return (
    <div className="py-12 px-4 md:px-8 max-w-[1440px] mx-auto space-y-10">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-hyper-gray-600">
          Curated Catalogs
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-hyper-black tracking-tight">
          All Collections
        </h1>
        <p className="text-sm text-hyper-gray-600">
          Discover our architectural furniture collections engineered for luxury living spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col) => (
          <Link
            key={col.id}
            href={`/collections/${col.slug}`}
            className="group relative rounded-hyper-xl overflow-hidden min-h-[380px] border border-hyper-gray-200 shadow-hyper-card hover:shadow-hyper-hover transition-all duration-500 flex flex-col justify-end p-8"
          >
            <Image
              src={col.image}
              alt={col.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative z-10 text-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-hyper-yellow-badge">
                {col.productsCount} Products
              </span>
              <h2 className="text-2xl font-black">{col.name}</h2>
              <p className="text-xs text-slate-200 line-clamp-2">{col.description}</p>
              <div className="pt-2 text-xs font-bold underline underline-offset-4 text-white group-hover:text-hyper-yellow-badge transition-colors">
                Explore Collection →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
