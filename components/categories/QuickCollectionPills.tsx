'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const QUICK_PILLS = [
  { name: 'Living Room', slug: 'living-room', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=200&auto=format&fit=crop' },
  { name: 'Planters', slug: 'planters', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=200&auto=format&fit=crop' },
  { name: 'Gravel Rug', slug: 'rugs', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=200&auto=format&fit=crop' },
  { name: 'Table Mirror', slug: 'accessories', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=200&auto=format&fit=crop' },
  { name: 'Table Wears', slug: 'bowls', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=200&auto=format&fit=crop' },
  { name: 'Dining Decor', slug: 'dining-kitchen', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=200&auto=format&fit=crop' },
];

export const QuickCollectionPills: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        {QUICK_PILLS.map((pill) => (
          <Link
            key={pill.name}
            href={`/collections/${pill.slug}`}
            className="flex items-center space-x-3 bg-hyper-gray-100 hover:bg-hyper-black hover:text-white text-hyper-black font-bold text-sm px-4 py-2.5 rounded-full border border-hyper-gray-200 transition-all duration-300 flex-shrink-0 group shadow-sm"
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={pill.image}
                alt={pill.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="whitespace-nowrap">{pill.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
