import React from 'react';
import Image from 'next/image';
import { MeetOurTeam } from '@/components/about/MeetOurTeam';
import { WhyShopWithUs } from '@/components/trust/WhyShopWithUs';

export default function AboutPage() {
  return (
    <div className="py-12 px-4 md:px-8 max-w-[1440px] mx-auto space-y-16">
      {/* Hero */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-hyper-gray-600">
          Our Brand Story
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-hyper-black tracking-tight">
          Architectural Furniture for Modern Sanctuaries
        </h1>
        <p className="text-base text-hyper-gray-600 leading-relaxed font-normal">
          Wisdom Furniture bridges the boundary between sculptural art and daily functional utility. Every piece is crafted from eco-certified materials.
        </p>
      </div>

      <div className="relative w-full h-[400px] md:h-[550px] rounded-hyper-xl overflow-hidden shadow-hyper-hover">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
          alt="Wisdom Furniture Showroom Studio"
          fill
          className="object-cover object-center"
        />
      </div>

      <MeetOurTeam />
      <WhyShopWithUs />
    </div>
  );
}
