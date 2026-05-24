"use client";

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" />
            Free professional tools
          </div>
          <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight mb-5">
            Smart tools for{' '}
            <em className="text-emerald-700 font-light italic">serious</em>{' '}
            work
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
            Professional calculators, converters, and SAP utilities — built for
            developers, consultants, and analysts who need precision.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/tools"
              className="text-sm font-medium px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-colors"
            >
              Browse all tools
            </Link>
            <Link
              href="/tools#sap"
              className="text-sm px-5 py-3 border border-gray-200 rounded-xl hover:border-gray-400 transition-colors text-gray-600"
            >
              SAP tools →
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-gray-100">
            {[
              { num: '12+',  label: 'Free tools'       },
              { num: 'SAP',  label: 'Specialist suite' },
              { num: '0',    label: 'Sign-up needed'   },
            ].map(s => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-semibold">{s.num}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating cards */}
        <div className="hidden md:block relative h-80">
          {[
            {
              style: 'top-0 right-0',
              icon: '🧮', title: 'HANA Memory',
              value: '256 GB', label: 'Recommended RAM',
              badge: 'SAP Tool', badgeColor: 'bg-blue-50 text-blue-700',
            },
            {
              style: 'top-20 left-0',
              icon: '🔗', title: 'OData Builder',
              value: "$filter=Status eq 'A'", label: '',
              badge: 'SAP Tool', badgeColor: 'bg-blue-50 text-blue-700',
            },
            {
              style: 'bottom-0 right-8',
              icon: '📄', title: 'PDF Compressor',
              value: '2.4 MB → 380 KB', label: 'Compressed instantly',
              badge: 'PDF Tool', badgeColor: 'bg-amber-50 text-amber-700',
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`absolute ${card.style} bg-white border border-gray-200 rounded-2xl p-4 shadow-sm w-48`}
              style={{ animation: `float${i % 2} ${3.5 + i * 0.4}s ease-in-out infinite` }}
            >
              <div className="text-2xl mb-2">{card.icon}</div>
              <div className="text-sm font-medium text-gray-800 mb-1">{card.title}</div>
              <div className="font-serif text-lg font-semibold text-emerald-700 break-all leading-tight">{card.value}</div>
              {card.label && <div className="text-xs text-gray-400 mt-0.5">{card.label}</div>}
              <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium ${card.badgeColor}`}>
                {card.badge}
              </span>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes float0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)}  }
      `}</style>
    </section>
  );
}