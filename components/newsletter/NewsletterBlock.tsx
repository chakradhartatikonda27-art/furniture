'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export const NewsletterBlock: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="bg-hyper-black text-white rounded-hyper-xl p-8 md:p-16 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden shadow-2xl">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-3 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">
            Exclusive Community
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Join Our Newsletter
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-lg mx-auto font-normal">
            Sign up to our newsletter & receive 10% off your first order.
          </p>
        </div>

        {/* Success State */}
        {status === 'success' ? (
          <div className="bg-hyper-green-new/20 border border-hyper-green-new text-green-300 p-4 rounded-full max-w-md mx-auto flex items-center justify-center space-x-2 animate-fade-in relative z-10">
            <CheckCircle2 className="w-5 h-5 text-hyper-green-new" />
            <span className="text-sm font-bold">Thank you for subscribing! Check your inbox for your 10% code.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className="w-full bg-slate-900 border border-slate-700 text-white placeholder-slate-500 rounded-full px-5 py-4 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2" />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-white text-hyper-black font-extrabold text-sm px-8 py-4 rounded-full hover:bg-hyper-gray-100 transition-colors whitespace-nowrap shadow-md"
              >
                Sign Up
              </button>
            </div>

            {status === 'error' && (
              <div className="text-xs font-semibold text-hyper-red-sale flex items-center justify-center space-x-1 pt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>
        )}

        <p className="text-xs text-slate-500 pt-2 font-medium relative z-10">
          By subscribing you agree to the Terms of Services and Privacy Policy.
        </p>
      </div>
    </section>
  );
};
