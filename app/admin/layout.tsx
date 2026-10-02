'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  FolderTree, 
  Users, 
  Tag, 
  Settings, 
  ExternalLink, 
  Menu, 
  X, 
  Bell, 
  Search, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { CurrencyProvider } from '@/lib/context/CurrencyContext';

const NAV_ITEMS = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Categories', href: '/admin/categories', icon: FolderTree },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Coupons & Sales', href: '/admin/coupons', icon: Tag },
  { name: 'Store Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
        {/* Top Navigation Bar */}
        <header className="bg-slate-900 text-white h-16 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50 border-b border-slate-800 shadow-md">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
            >
              {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            <Link href="/admin" className="flex items-center space-x-2 text-xl font-black tracking-tight text-white">
              <span>WISDOM</span>
              <span className="text-[10px] font-extrabold uppercase bg-amber-500 text-slate-950 px-2 py-0.5 rounded tracking-wider">
                Admin OS
              </span>
            </Link>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-slate-800 border border-slate-700 rounded-full px-3 py-1.5 text-xs text-slate-300">
              <Search className="w-3.5 h-3.5 text-slate-400 mr-2" />
              <span>Search products, orders, customers...</span>
            </div>

            <button className="relative p-2 text-slate-300 hover:text-white rounded-full hover:bg-slate-800">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full animate-ping" />
            </button>

            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center space-x-1 bg-white text-slate-900 text-xs font-bold px-3.5 py-1.5 rounded-full hover:bg-slate-200 transition-colors shadow-sm"
            >
              <span>Live Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                WF
              </div>
              <div className="hidden md:block text-left">
                <div className="text-xs font-bold text-white">Wisdom Admin</div>
                <div className="text-[10px] text-slate-400 font-medium">Hyderabad HQ</div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-1 relative">
          {/* Sidebar Navigation */}
          <aside
            className={`fixed md:sticky top-16 left-0 z-40 w-64 bg-slate-900 text-slate-300 h-[calc(100vh-4rem)] border-r border-slate-800 transition-transform duration-300 ease-in-out flex flex-col justify-between p-4 ${
              isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}
          >
            <div className="space-y-6">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 pt-2">
                Management Modules
              </div>

              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileSidebarOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                        <span>{item.name}</span>
                      </div>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-slate-950" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Footer Info */}
            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Store System Active</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Jubilee Hills, Hyderabad Flagship • Razorpay & Cashfree Active
              </div>
            </div>
          </aside>

          {/* Main Content Viewport */}
          <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full overflow-x-hidden">
            {children}
          </main>
        </div>
      </div>
    </CurrencyProvider>
  );
}
