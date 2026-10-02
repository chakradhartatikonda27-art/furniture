'use client';

import React from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { useUI } from '@/lib/context/UIContext';

export const ToastNotification: React.FC = () => {
  const { toastMessage, openCart } = useUI();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-8 z-50 animate-slide-up bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-3 max-w-sm">
      <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-full flex-shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="flex-1 text-xs font-semibold leading-snug">
        {toastMessage}
      </div>
      <button
        onClick={openCart}
        className="text-[11px] font-black uppercase text-amber-400 hover:underline flex-shrink-0 pl-1"
      >
        View Bag
      </button>
    </div>
  );
};
