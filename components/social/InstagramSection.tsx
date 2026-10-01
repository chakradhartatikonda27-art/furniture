'use client';

import React from 'react';
import Image from 'next/image';
import { INSTAGRAM_POSTS } from '@/lib/data/mockData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="bg-hyper-blue-royal py-16 px-4 md:px-8 text-white my-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Social Inspiration
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            We&apos;re on Gram
          </h2>
        </div>

        {/* Horizontal Card Feed */}
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-6 -mx-4 px-4 md:mx-0 md:px-0">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[260px] md:w-[320px] bg-slate-900 rounded-hyper-lg overflow-hidden border border-slate-800 group shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-800">
                <Image
                  src={post.image}
                  alt={post.handle}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay IG Handle & Avatar */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full flex items-center justify-between border border-white/10">
                  <div className="flex items-center space-x-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/30">
                      <Image
                        src={post.avatar}
                        alt={post.handle}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold text-white">{post.handle}</span>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-300">
                    ♥ {post.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Handle Link */}
        <div className="text-center pt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-black text-white hover:text-hyper-yellow-badge underline underline-offset-8 transition-colors"
          >
            @Garage_store
          </a>
        </div>
      </div>
    </section>
  );
};
