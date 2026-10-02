'use client';

import React, { useState } from 'react';
import { Search, Truck, CheckCircle2, Clock, MapPin, Package, ShieldCheck } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [trackingResult, setTrackingResult] = useState<{
    id: string;
    customer: string;
    destination: string;
    status: string;
    gateway: string;
    estDelivery: string;
    timeline: { step: string; desc: string; done: boolean; date: string }[];
  } | null>(null);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setTrackingResult({
      id: orderId.toUpperCase().startsWith('WF-') ? orderId.toUpperCase() : `WF-${orderId.toUpperCase()}`,
      customer: 'Wisdom Furniture Client',
      destination: 'Jubilee Hills, Hyderabad, Telangana 500033',
      status: 'In Transit - Out for Delivery',
      gateway: 'Razorpay / Verified Payment',
      estDelivery: 'Monday, 05 Oct 2026 (10:00 AM - 02:00 PM IST)',
      timeline: [
        { step: 'Order Confirmed & Paid', desc: 'Verified via Gateway (Razorpay/Cashfree)', done: true, date: '01 Oct, 02:15 PM' },
        { step: 'Hyderabad Studio Assembly', desc: 'Crafted & White Glove QC Passed', done: true, date: '02 Oct, 09:30 AM' },
        { step: 'Dispatched from Hyderabad HQ', desc: 'Handed to Wisdom Express Carrier (Tracking: HYD-EX-8492)', done: true, date: '02 Oct, 01:45 PM' },
        { step: 'In-Home Delivery & Setup', desc: 'Technician arriving for assembly at Jubilee Hills', done: false, date: '05 Oct, 10:00 AM' },
      ],
    });
  };

  return (
    <div className="py-12 px-4 md:px-8 max-w-[1000px] mx-auto space-y-10">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-hyper-gray-600">
          Wisdom Logistics Telemetry
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-hyper-black tracking-tight">
          Track Your Furniture Shipment
        </h1>
        <p className="text-sm text-hyper-gray-600">
          Enter your Wisdom Furniture Order ID (e.g. WF-9482) to view real-time delivery status & White-Glove dispatch progress.
        </p>
      </div>

      {/* Tracking Search Form */}
      <div className="bg-white p-6 sm:p-8 rounded-hyper-xl border border-hyper-gray-200 shadow-hyper-card max-w-2xl mx-auto">
        <form onSubmit={handleTrackSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-hyper-black uppercase block mb-1">Order ID</label>
              <input
                type="text"
                required
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="e.g. WF-9482"
                className="w-full bg-hyper-gray-50 border border-hyper-gray-200 rounded-hyper p-3.5 text-sm focus:outline-none focus:border-hyper-black font-mono font-bold"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-hyper-black uppercase block mb-1">Email or Phone</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. client@example.com"
                className="w-full bg-hyper-gray-50 border border-hyper-gray-200 rounded-hyper p-3.5 text-sm focus:outline-none focus:border-hyper-black"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-hyper-black text-white font-extrabold text-sm py-4 rounded-full hover:bg-slate-800 transition-colors shadow-md flex items-center justify-center space-x-2"
          >
            <Search className="w-4 h-4 text-hyper-yellow-badge" />
            <span>Track Order Status</span>
          </button>
        </form>
      </div>

      {/* Tracking Result View */}
      {trackingResult && (
        <div className="bg-white p-6 sm:p-8 rounded-hyper-xl border border-hyper-gray-200 shadow-hyper-card space-y-6 animate-fade-in max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-hyper-gray-200 gap-4">
            <div>
              <span className="text-[11px] font-black uppercase text-hyper-blue-bright tracking-wider">Order Found</span>
              <h3 className="text-2xl font-black text-hyper-black">{trackingResult.id}</h3>
              <div className="text-xs text-hyper-gray-600 mt-1 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-hyper-black" />
                <span>{trackingResult.destination}</span>
              </div>
            </div>

            <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-full font-black text-xs inline-flex items-center space-x-1.5 self-start">
              <Truck className="w-4 h-4 text-emerald-600" />
              <span>{trackingResult.status}</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-hyper-black">Shipment Progress</h4>

            <div className="relative border-l-2 border-hyper-gray-200 pl-6 space-y-6 ml-3">
              {trackingResult.timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div
                    className={`absolute -left-[31px] top-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      item.done
                        ? 'bg-hyper-black text-white ring-4 ring-white'
                        : 'bg-hyper-gray-200 text-hyper-gray-600 ring-4 ring-white'
                    }`}
                  >
                    {item.done ? '✓' : i + 1}
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-sm font-extrabold text-hyper-black">{item.step}</div>
                    <div className="text-xs text-hyper-gray-600">{item.desc}</div>
                    <div className="text-[10px] text-hyper-gray-400 font-mono">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estimated Delivery Note */}
          <div className="p-4 bg-hyper-pastel-beige rounded-hyper border border-amber-200 text-xs font-semibold text-amber-900 flex items-center space-x-3">
            <Clock className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <div>
              <span className="font-bold">Estimated Delivery: </span>
              <span>{trackingResult.estDelivery}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
