'use client';

import React, { useState } from 'react';
import { Users, Search, Mail, Phone, MapPin, Award } from 'lucide-react';
import { useCurrency } from '@/lib/context/CurrencyContext';

const CUSTOMERS = [
  { id: 'CUST-101', name: 'Rahul Sharma', email: 'rahul@example.com', phone: '+91 98765 43210', city: 'Jubilee Hills, Hyderabad', ordersCount: 5, lifetimeSpent: 4290, tier: 'VIP Client' },
  { id: 'CUST-102', name: 'Ananya Reddy', email: 'ananya@example.com', phone: '+91 98123 45678', city: 'Banjara Hills, Hyderabad', ordersCount: 3, lifetimeSpent: 1850, tier: 'VIP Client' },
  { id: 'CUST-103', name: 'Vikram Mehta', email: 'vikram@example.com', phone: '+91 97654 32109', city: 'Bandra, Mumbai', ordersCount: 2, lifetimeSpent: 920, tier: 'Standard' },
  { id: 'CUST-104', name: 'Priya Verma', email: 'priya@example.com', phone: '+91 96543 21098', city: 'Indiranagar, Bangalore', ordersCount: 4, lifetimeSpent: 2450, tier: 'VIP Client' },
  { id: 'CUST-105', name: 'Suresh Kumar', email: 'suresh@example.com', phone: '+91 95432 10987', city: 'Gachibowli, Hyderabad', ordersCount: 1, lifetimeSpent: 280, tier: 'Standard' },
  { id: 'CUST-106', name: 'Kavita Singh', email: 'kavita@example.com', phone: '+91 94321 09876', city: 'South Delhi, New Delhi', ordersCount: 2, lifetimeSpent: 1180, tier: 'Standard' },
];

export default function AdminCustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { formatPrice } = useCurrency();

  const filtered = CUSTOMERS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
          Customer Directory & VIP CRM
        </h1>
        <p className="text-xs md:text-sm text-slate-500 mt-1">
          Registered buyers, purchase histories, and location metrics for Hyderabad and nationwide clients.
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search customer name, email or city..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-slate-900"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-extrabold border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-6">Customer Name</th>
                <th className="py-3.5 px-6">Contact & Location</th>
                <th className="py-3.5 px-6">Tier Status</th>
                <th className="py-3.5 px-6">Total Orders</th>
                <th className="py-3.5 px-6 text-right">Lifetime Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-extrabold text-slate-900 text-sm">{c.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{c.id}</div>
                  </td>
                  <td className="py-4 px-6 space-y-0.5">
                    <div className="flex items-center space-x-1 font-semibold text-slate-800">
                      <Mail className="w-3 h-3 text-slate-400" />
                      <span>{c.email}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-[11px] text-slate-500">
                      <Phone className="w-3 h-3 text-slate-400" />
                      <span>{c.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{c.city}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                        c.tier === 'VIP Client'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      <Award className="w-3 h-3 text-amber-600" />
                      <span>{c.tier}</span>
                    </span>
                  </td>
                  <td className="py-4 px-6 font-extrabold text-slate-900">{c.ordersCount} Orders</td>
                  <td className="py-4 px-6 text-right font-black text-slate-900 text-sm">
                    {formatPrice(c.lifetimeSpent)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
