'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, CreditCard, Truck, Tag, PhoneCall } from 'lucide-react';
import { useCurrency } from '@/lib/context/CurrencyContext';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const WisdomAIBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { currency } = useCurrency();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: `Welcome to **Wisdom Furniture**! 🪑 I am your AI Concierge. How can I assist with your home decor or shopping experience today?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate AI response after short delay
    setTimeout(() => {
      let botResponse = '';
      const lower = query.toLowerCase();

      if (lower.includes('payment') || lower.includes('razorpay') || lower.includes('cashfree') || lower.includes('card') || lower.includes('upi')) {
        botResponse = `At **Wisdom Furniture**, we support seamless & 100% secure payments via **Razorpay**, **Cashfree Payments**, **Credit/Debit Cards (Visa, Mastercard, Amex)**, **UPI / RuPay**, **PayPal**, and **Net Banking**!`;
      } else if (lower.includes('currency') || lower.includes('inr') || lower.includes('rupee') || lower.includes('₹') || lower.includes('dollar')) {
        botResponse = `We support real-time multi-currency shopping! You are currently browsing in **${currency.name} (${currency.symbol})**. You can switch to INR (₹), USD ($), EUR (€), or GBP (£) anytime using the TopBar selector.`;
      } else if (lower.includes('offer') || lower.includes('discount') || lower.includes('sale') || lower.includes('coupon')) {
        botResponse = `🔥 **Active Wisdom Furniture Offers:**\n• **Turn Chairs**: 40% OFF\n• **Cross Chairs**: 30% OFF\n• **Flash Sale**: Use promo code **FLASH30** for an additional 30% discount at checkout!`;
      } else if (lower.includes('whatsapp') || lower.includes('contact') || lower.includes('phone') || lower.includes('support')) {
        botResponse = `💬 You can connect with our live human interior design team on WhatsApp at **+91 98765 43210** or email us at **concierge@wisdomfurniture.com**.`;
      } else if (lower.includes('ship') || lower.includes('delivery') || lower.includes('express')) {
        botResponse = `🚚 We offer **Free Express White-Glove Shipping** on all orders over $500 / ₹41,750! Every piece is insured and assembled in your home by expert technicians.`;
      } else if (lower.includes('sofa') || lower.includes('chair') || lower.includes('table') || lower.includes('recommend')) {
        botResponse = `✨ **Top Recommendations:**\n1. **Spoke Sofa**: Cloud-like Italian wool bouclé with sculptural oak legs.\n2. **Turn Chair**: Danish EU Ecolabel certified oak dining seating.\n3. **Press Table**: Solid turned timber coffee table.`;
      } else {
        botResponse = `Thank you for asking! **Wisdom Furniture** specializes in modern luxury seating, tables, storage, and lighting. Feel free to ask about our active discounts, payment options (Razorpay/Cashfree), or shipping!`;
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Bot Launcher (Bottom Right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Wisdom AI Bot"
          className="fixed bottom-6 right-6 z-40 bg-hyper-black text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group border border-slate-700"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white animate-pulse" />
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
            Wisdom AI Support
          </span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border border-hyper-gray-200 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-hyper-black text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center relative">
                <Bot className="w-5 h-5 text-hyper-yellow-badge" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-hyper-black" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold tracking-tight">Wisdom AI Concierge</h3>
                <span className="text-[10px] text-slate-300 font-medium">Online • Powered by Wisdom AI</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Option Pills */}
          <div className="p-2.5 bg-hyper-gray-50 border-b border-hyper-gray-200 flex space-x-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleSend('What payment methods do you accept?')}
              className="px-2.5 py-1 bg-white border border-hyper-gray-200 text-[11px] font-semibold text-hyper-black rounded-full hover:bg-hyper-gray-100 flex-shrink-0 flex items-center space-x-1"
            >
              <CreditCard className="w-3 h-3 text-blue-600" />
              <span>Razorpay & Cards</span>
            </button>
            <button
              onClick={() => handleSend('What discount offers are active?')}
              className="px-2.5 py-1 bg-white border border-hyper-gray-200 text-[11px] font-semibold text-hyper-black rounded-full hover:bg-hyper-gray-100 flex-shrink-0 flex items-center space-x-1"
            >
              <Tag className="w-3 h-3 text-red-600" />
              <span>Active Offers</span>
            </button>
            <button
              onClick={() => handleSend('Tell me about white-glove shipping')}
              className="px-2.5 py-1 bg-white border border-hyper-gray-200 text-[11px] font-semibold text-hyper-black rounded-full hover:bg-hyper-gray-100 flex-shrink-0 flex items-center space-x-1"
            >
              <Truck className="w-3 h-3 text-emerald-600" />
              <span>Free Shipping</span>
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-hyper-black text-white rounded-br-none'
                      : 'bg-white text-hyper-black border border-hyper-gray-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[9px] text-hyper-gray-400 mt-1 px-1">{msg.time}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Text Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-hyper-gray-200 flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Wisdom AI anything..."
              className="flex-1 bg-hyper-gray-100 text-xs px-3.5 py-2.5 rounded-full border border-transparent focus:border-hyper-black focus:bg-white focus:outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 bg-hyper-black text-white rounded-full hover:bg-slate-800 disabled:opacity-40 transition-all shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
