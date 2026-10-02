'use client';

import React, { useState } from 'react';
import { ShoppingCart, Search, Filter, CheckCircle2, Clock, Truck, XCircle } from 'lucide-react';
import { useCurrency } from '@/lib/context/CurrencyContext';

interface OrderItem {
  id: string;
  customer: string;
  email: string;
  city: string;
  items: string;
  gateway: string;
  date: string;
  amount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
}

const INITIAL_ORDERS: OrderItem[] = [
  { id: 'WF-9482', customer: 'Rahul Sharma', email: 'rahul@example.com', city: 'Jubilee Hills, Hyderabad', items: 'Spoke Sofa (Cream Linen)', gateway: 'Razorpay', date: 'Today, 02:15 PM', amount: 1499, status: 'Processing' },
  { id: 'WF-9481', customer: 'Ananya Reddy', email: 'ananya@example.com', city: 'Banjara Hills, Hyderabad', items: 'Turn Chair Oak (2x)', gateway: 'UPI / RuPay', date: 'Today, 11:40 AM', amount: 798, status: 'Shipped' },
  { id: 'WF-9480', customer: 'Vikram Mehta', email: 'vikram@example.com', city: 'Bandra, Mumbai', items: 'Press Coffee Table', gateway: 'Cashfree', date: 'Yesterday, 06:10 PM', amount: 450, status: 'Delivered' },
  { id: 'WF-9479', customer: 'Priya Verma', email: 'priya@example.com', city: 'Indiranagar, Bangalore', items: 'Solace Lounge Chair', gateway: 'Credit Card', date: 'Yesterday, 03:25 PM', amount: 890, status: 'Delivered' },
  { id: 'WF-9478', customer: 'Suresh Kumar', email: 'suresh@example.com', city: 'Gachibowli, Hyderabad', items: 'Select Table Lamp', gateway: 'Razorpay', date: '01 Oct, 09:15 AM', amount: 280, status: 'Pending' },
  { id: 'WF-9477', customer: 'Kavita Singh', email: 'kavita@example.com', city: 'South Delhi, ND', items: 'Bow Chair Natural Oak', gateway: 'Cashfree', date: '30 Sep, 04:50 PM', amount: 589, status: 'Delivered' },
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<OrderItem[]>(INITIAL_ORDERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const { formatPrice } = useCurrency();

  const handleStatusChange = (orderId: string, newStatus: OrderItem['status']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
          Customer Orders Feed
        </h1>
        <p className="text-xs md:text-sm text-slate-500 mt-1">
          Monitor incoming customer orders, shipping dispatch status, and payment logs via Razorpay & Cashfree.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search order ID, customer name or city..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-slate-900"
          />
        </div>

        {/* Status Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar w-full md:w-auto">
          {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                statusFilter === status ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-extrabold border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-6">Order ID & Date</th>
                <th className="py-3.5 px-6">Customer Info</th>
                <th className="py-3.5 px-6">Items</th>
                <th className="py-3.5 px-6">Gateway</th>
                <th className="py-3.5 px-6">Order Status</th>
                <th className="py-3.5 px-6 text-right">Total Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-mono font-bold text-slate-900 text-sm">{order.id}</div>
                    <div className="text-[11px] text-slate-400">{order.date}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-extrabold text-slate-900">{order.customer}</div>
                    <div className="text-[11px] text-slate-500">{order.email}</div>
                    <div className="text-[10px] text-slate-400 font-medium">{order.city}</div>
                  </td>
                  <td className="py-4 px-6 font-semibold">{order.items}</td>
                  <td className="py-4 px-6">
                    <span className="inline-block px-2.5 py-1 bg-slate-100 border border-slate-200 rounded font-bold text-[10px] text-slate-800">
                      {order.gateway}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value as OrderItem['status'])}
                      className={`text-xs font-extrabold rounded-full px-3 py-1 border focus:outline-none cursor-pointer ${
                        order.status === 'Delivered'
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-800 border-blue-300'
                          : order.status === 'Processing'
                          ? 'bg-amber-100 text-amber-800 border-amber-300'
                          : order.status === 'Pending'
                          ? 'bg-rose-100 text-rose-800 border-rose-300'
                          : 'bg-slate-100 text-slate-800 border-slate-300'
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="py-4 px-6 text-right font-black text-slate-900 text-sm">
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
