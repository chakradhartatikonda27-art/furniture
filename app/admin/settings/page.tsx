'use client';

import React, { useState } from 'react';
import { Settings, ShieldCheck, CreditCard, Globe, CheckCircle2, Save } from 'lucide-react';

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [storeInfo, setStoreInfo] = useState({
    name: 'Wisdom Furniture',
    tagline: 'Modern Luxury Furniture & Home Decor',
    email: 'concierge@wisdomfurniture.com',
    phone: '+91 40 4567 8900',
    address: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033, India',
    freeShippingThreshold: 500,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
          Store Configuration & Gateways
        </h1>
        <p className="text-xs md:text-sm text-slate-500 mt-1">
          Configure Wisdom Furniture store details, payment gateways (Razorpay, Cashfree), and currency settings.
        </p>
      </div>

      {saved && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 rounded-xl flex items-center space-x-2 text-xs font-bold animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>Settings saved successfully! Updated configurations are now live on Wisdom Furniture.</span>
        </div>
      )}

      {/* Form 1: General Info */}
      <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
          <Settings className="w-4 h-4 text-slate-700" />
          <span>General Store Details</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Store Name</label>
            <input
              type="text"
              value={storeInfo.name}
              onChange={(e) => setStoreInfo({ ...storeInfo, name: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900 font-bold text-slate-900"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Concierge Email</label>
            <input
              type="email"
              value={storeInfo.email}
              onChange={(e) => setStoreInfo({ ...storeInfo, email: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
            <input
              type="text"
              value={storeInfo.phone}
              onChange={(e) => setStoreInfo({ ...storeInfo, phone: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Free Shipping Order Threshold ($ USD)</label>
            <input
              type="number"
              value={storeInfo.freeShippingThreshold}
              onChange={(e) => setStoreInfo({ ...storeInfo, freeShippingThreshold: Number(e.target.value) })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900"
            />
          </div>
        </div>

        <div className="text-xs">
          <label className="font-bold text-slate-700 block mb-1">Hyderabad Flagship Address</label>
          <input
            type="text"
            value={storeInfo.address}
            onChange={(e) => setStoreInfo({ ...storeInfo, address: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-slate-900"
          />
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center space-x-2 bg-slate-900 text-white font-extrabold text-xs px-6 py-3 rounded-full hover:bg-slate-800 transition-colors shadow-md"
          >
            <Save className="w-4 h-4 text-amber-400" />
            <span>Save General Settings</span>
          </button>
        </div>
      </form>

      {/* Payment Gateway Telemetry */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
          <CreditCard className="w-4 h-4 text-slate-700" />
          <span>Payment Gateways Telemetry</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* Razorpay */}
          <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200 flex items-center justify-between">
            <div>
              <div className="font-extrabold text-slate-900 text-sm">Razorpay Integration</div>
              <div className="text-[11px] text-slate-500">Live API Key: rzpk_live_wisdom_8492</div>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-black text-[10px] uppercase">
              Connected
            </span>
          </div>

          {/* Cashfree */}
          <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-200 flex items-center justify-between">
            <div>
              <div className="font-extrabold text-slate-900 text-sm">Cashfree Payments</div>
              <div className="text-[11px] text-slate-500">App ID: cf_wisdom_prod_2026</div>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-black text-[10px] uppercase">
              Connected
            </span>
          </div>

          {/* Cards */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <div className="font-extrabold text-slate-900 text-sm">Credit & Debit Cards</div>
              <div className="text-[11px] text-slate-500">Visa, Mastercard, Amex 3DS Active</div>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-black text-[10px] uppercase">
              Active
            </span>
          </div>

          {/* UPI */}
          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 flex items-center justify-between">
            <div>
              <div className="font-extrabold text-slate-900 text-sm">UPI / RuPay Direct</div>
              <div className="text-[11px] text-slate-500">Auto-collect & VPA active</div>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-black text-[10px] uppercase">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
