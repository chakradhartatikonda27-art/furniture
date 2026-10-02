'use client';

import React, { useState } from 'react';
import { Tag, Plus, Check, Trash2, Zap } from 'lucide-react';

interface Coupon {
  id: string;
  code: string;
  discountPct: number;
  description: string;
  expiry: string;
  usageCount: number;
  status: 'Active' | 'Expired';
}

const INITIAL_COUPONS: Coupon[] = [
  { id: '1', code: 'FLASH30', discountPct: 30, description: 'Flash sale 30% discount on modern table office & seating', expiry: '31 Oct 2026', usageCount: 48, status: 'Active' },
  { id: '2', code: 'WISDOM40', discountPct: 40, description: 'Exclusive 40% off Turn Chairs Scandinavian collection', expiry: '15 Nov 2026', usageCount: 82, status: 'Active' },
  { id: '3', code: 'HYDSOFA15', discountPct: 15, description: '15% discount for Hyderabad studio flagship visitors', expiry: '20 Dec 2026', usageCount: 29, status: 'Active' },
  { id: '4', code: 'WELCOME10', discountPct: 10, description: '10% off first order for newsletter subscribers', expiry: 'No Expiry', usageCount: 145, status: 'Active' },
];

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>(INITIAL_COUPONS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCoupon, setNewCoupon] = useState({ code: '', discountPct: 20, description: '', expiry: '31 Dec 2026' });

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Coupon = {
      id: Date.now().toString(),
      code: newCoupon.code.toUpperCase(),
      discountPct: Number(newCoupon.discountPct),
      description: newCoupon.description,
      expiry: newCoupon.expiry,
      usageCount: 0,
      status: 'Active',
    };
    setCoupons((prev) => [created, ...prev]);
    setIsModalOpen(false);
    setNewCoupon({ code: '', discountPct: 20, description: '', expiry: '31 Dec 2026' });
  };

  const handleDelete = (id: string) => {
    setCoupons((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
            Promotional Coupons & Sales
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Create and manage promotional discount codes for Wisdom Furniture shoppers.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center space-x-2 bg-slate-900 text-white font-extrabold text-xs px-5 py-3 rounded-full hover:bg-slate-800 transition-colors shadow-md"
        >
          <Plus className="w-4 h-4 text-amber-400" />
          <span>Create New Coupon</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coupons.map((c) => (
          <div
            key={c.id}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-mono font-black text-xl text-slate-900 bg-amber-100 text-slate-950 px-3 py-1 rounded-lg border border-amber-300 tracking-wider">
                    {c.code}
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                    {c.status}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium pt-1">{c.description}</p>
              </div>

              <button
                onClick={() => handleDelete(c.id)}
                className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <div>
                Discount: <span className="text-slate-900 font-black text-sm">{c.discountPct}% OFF</span>
              </div>
              <div>Used: <span className="text-slate-900 font-black">{c.usageCount} times</span></div>
              <div>Expires: <span className="text-slate-700 font-medium">{c.expiry}</span></div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 z-50 space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">Create New Coupon Code</h3>
            <form onSubmit={handleAddCoupon} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Coupon Code</label>
                <input
                  type="text"
                  required
                  value={newCoupon.code}
                  onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
                  placeholder="e.g. FESTIVE25"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900 uppercase font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Discount Percentage (%)</label>
                <input
                  type="number"
                  required
                  value={newCoupon.discountPct}
                  onChange={(e) => setNewCoupon({ ...newCoupon, discountPct: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Description</label>
                <input
                  type="text"
                  required
                  value={newCoupon.description}
                  onChange={(e) => setNewCoupon({ ...newCoupon, description: e.target.value })}
                  placeholder="e.g. Special 20% discount on sofas"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div className="pt-4 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-full"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-slate-900 text-white font-black rounded-full"
                >
                  Create Coupon
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
