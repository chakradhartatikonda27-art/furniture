'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-12 px-4 md:px-8 max-w-[1440px] mx-auto space-y-12">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-hyper-gray-600">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-hyper-black tracking-tight">
          Find a Store & Contact Us
        </h1>
        <p className="text-sm text-hyper-gray-600">
          Visit our flagship showroom in Soho, New York or send a direct inquiry to our interior design consultants.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column Contact Details */}
        <div className="lg:col-span-5 bg-hyper-gray-50 p-8 rounded-hyper-xl border border-hyper-gray-200 space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-hyper-black">Flagship Showroom</h3>

            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 text-hyper-black flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm font-extrabold text-hyper-black">New York Studio</div>
                <div className="text-xs text-hyper-gray-600">452 Broome Street, Soho, New York, NY 10013</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-5 h-5 text-hyper-black flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm font-extrabold text-hyper-black">Phone Inquiry</div>
                <div className="text-xs text-hyper-gray-600">+1 (212) 555-0198</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-5 h-5 text-hyper-black flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm font-extrabold text-hyper-black">Email</div>
                <div className="text-xs text-hyper-gray-600">concierge@hypergarage.com</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-5 h-5 text-hyper-black flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm font-extrabold text-hyper-black">Showroom Hours</div>
                <div className="text-xs text-hyper-gray-600">Mon - Sat: 10am - 7pm EST | Sun: 11am - 6pm EST</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-hyper-xl border border-hyper-gray-200 shadow-hyper-card space-y-6">
          <h3 className="text-2xl font-black text-hyper-black">Send Us a Message</h3>

          {submitted ? (
            <div className="bg-hyper-green-new/10 border border-hyper-green-new text-green-800 p-6 rounded-hyper text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-hyper-green-new mx-auto" />
              <div className="text-lg font-bold">Message Received!</div>
              <p className="text-xs text-hyper-gray-600">Our design concierge will reach out within 24 business hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-hyper-black uppercase block mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    className="w-full bg-hyper-gray-50 border border-hyper-gray-200 rounded-hyper p-3 text-sm focus:outline-none focus:border-hyper-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-hyper-black uppercase block mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full bg-hyper-gray-50 border border-hyper-gray-200 rounded-hyper p-3 text-sm focus:outline-none focus:border-hyper-black"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-hyper-black uppercase block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full bg-hyper-gray-50 border border-hyper-gray-200 rounded-hyper p-3 text-sm focus:outline-none focus:border-hyper-black"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-hyper-black uppercase block mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your space or product questions..."
                  className="w-full bg-hyper-gray-50 border border-hyper-gray-200 rounded-hyper p-3 text-sm focus:outline-none focus:border-hyper-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-hyper-black text-white font-extrabold text-sm py-4 rounded-full hover:bg-slate-800 transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
