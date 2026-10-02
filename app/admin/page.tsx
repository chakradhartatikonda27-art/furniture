'use client';

import React from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  ShoppingCart, 
  Package, 
  Users, 
  ArrowUpRight, 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  Truck,
  Plus,
  Tag
} from 'lucide-react';
import { PRODUCTS } from '@/lib/data/mockData';
import { useCurrency } from '@/lib/context/CurrencyContext';

const RECENT_ORDERS = [
  {
    id: 'WF-9482',
    customer: 'Rahul Sharma',
    city: 'Hyderabad, TS',
    items: 'Spoke Sofa (Cream Linen)',
    gateway: 'Razorpay',
    date: 'Today, 02:15 PM',
    amount: 1499,
    status: 'Processing',
  },
  {
    id: 'WF-9481',
    customer: 'Ananya Reddy',
    city: 'Jubilee Hills, Hyd',
    items: 'Turn Chair Oak (2x)',
    gateway: 'UPI / RuPay',
    date: 'Today, 11:40 AM',
    amount: 798,
    status: 'Shipped',
  },
  {
    id: 'WF-9480',
    customer: 'Vikram Mehta',
    city: 'Mumbai, MH',
    items: 'Press Coffee Table',
    gateway: 'Cashfree',
    date: 'Yesterday, 06:10 PM',
    amount: 450,
    status: 'Delivered',
  },
  {
    id: 'WF-9479',
    customer: 'Priya Verma',
    city: 'Bangalore, KA',
    items: 'Solace Lounge Chair',
    gateway: 'Credit Card',
    date: 'Yesterday, 03:25 PM',
    amount: 890,
    status: 'Delivered',
  },
  {
    id: 'WF-9478',
    customer: 'Suresh Kumar',
    city: 'Gachibowli, Hyd',
    items: 'Select Table Lamp',
    gateway: 'Razorpay',
    date: '01 Oct, 09:15 AM',
    amount: 280,
    status: 'Pending',
  },
];

export default function AdminDashboardPage() {
  const { formatPrice } = useCurrency();

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-slate-700">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
            Wisdom Furniture Admin Control
          </span>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight mt-1">
            Store Performance Overview
          </h1>
          <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-xl">
            Live management dashboard for Wisdom Furniture Flagship (Hyderabad, Jubilee Hills). Real-time sales, order dispatches & stock telemetry.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/admin/products"
            className="inline-flex items-center space-x-2 bg-amber-500 text-slate-950 text-xs font-black px-4 py-2.5 rounded-full hover:bg-amber-400 transition-colors shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </Link>
          <Link
            href="/admin/orders"
            className="inline-flex items-center space-x-2 bg-slate-800 text-white border border-slate-700 text-xs font-bold px-4 py-2.5 rounded-full hover:bg-slate-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>View Orders</span>
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Revenue */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Total Revenue</span>
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">{formatPrice(29800)}</div>
          <div className="text-xs font-bold text-emerald-600 flex items-center space-x-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+18.4% vs last month</span>
          </div>
        </div>

        {/* Card 2: Orders */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Total Orders</span>
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <ShoppingCart className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">142 Orders</div>
          <div className="text-xs font-bold text-slate-500 flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>12 pending dispatch</span>
          </div>
        </div>

        {/* Card 3: Active Products */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Catalog Size</span>
            <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">{PRODUCTS.length} Products</div>
          <div className="text-xs font-bold text-purple-600 flex items-center space-x-1">
            <span>Across 8 Categories</span>
          </div>
        </div>

        {/* Card 4: Customers */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Active Customers</span>
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">320 Users</div>
          <div className="text-xs font-bold text-slate-500 flex items-center space-x-1">
            <span>Hyderabad & Pan India</span>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-4">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">Recent Customer Orders</h3>
            <p className="text-xs text-slate-500">Live order feeds processed via Razorpay & Cashfree</p>
          </div>
          <Link
            href="/admin/orders"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View All Orders →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-extrabold border-b border-slate-100">
              <tr>
                <th className="py-3.5 px-6">Order ID</th>
                <th className="py-3.5 px-6">Customer & Location</th>
                <th className="py-3.5 px-6">Items Purchased</th>
                <th className="py-3.5 px-6">Payment Method</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {RECENT_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-mono font-bold text-slate-900">{order.id}</td>
                  <td className="py-4 px-6">
                    <div className="font-extrabold text-slate-900">{order.customer}</div>
                    <div className="text-[11px] text-slate-500">{order.city}</div>
                  </td>
                  <td className="py-4 px-6 font-semibold">{order.items}</td>
                  <td className="py-4 px-6">
                    <span className="inline-block px-2.5 py-1 bg-slate-100 border border-slate-200 rounded font-bold text-[10px] text-slate-800">
                      {order.gateway}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${
                        order.status === 'Delivered'
                          ? 'bg-emerald-100 text-emerald-800'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : order.status === 'Processing'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      <span>{order.status}</span>
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-black text-slate-900">
                    {formatPrice(order.amount)}
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
