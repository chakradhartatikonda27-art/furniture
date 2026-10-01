import React from 'react';

const FAQS = [
  {
    q: 'What is your White Glove delivery process?',
    a: 'All orders over $500 qualify for complimentary White Glove express delivery. Our specialized freight team delivers to your room of choice, unpacks, installs, and removes all packaging.',
  },
  {
    q: 'Are all HYPER furniture pieces eco-certified?',
    a: 'Yes. Every timber component is FSC-certified solid European oak or ash, finished with low-VOC organic oil stains and EU Ecolabel certified bouclé fabrics.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day hassle-free return window on all standard catalog items. Products must be returned in original condition.',
  },
  {
    q: 'Can I request custom fabric upholstery or timber stain finishes?',
    a: 'Absolutely. Visit our NYC showroom or contact our concierge team to review custom material samples for trade and residential projects.',
  },
];

export default function FAQPage() {
  return (
    <div className="py-12 px-4 md:px-8 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-hyper-gray-600">
          Help Center
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-hyper-black tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-hyper-gray-600">
          Everything you need to know about our modern furniture craftsmanship, shipping, and care.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="bg-hyper-gray-50 p-6 rounded-hyper-xl border border-hyper-gray-200 space-y-2">
            <h3 className="text-lg font-extrabold text-hyper-black">{faq.q}</h3>
            <p className="text-sm text-hyper-gray-600 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
