'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tools, categories } from '@/lib/tools-registry';

const categoryColors: Record<string, string> = {
  sap: 'bg-blue-50 text-blue-700 border-blue-100',
  pdf: 'bg-orange-50 text-orange-700 border-orange-100',
  developer: 'bg-violet-50 text-violet-700 border-violet-100',
  converter: 'bg-pink-50 text-pink-700 border-pink-100',
  finance: 'bg-emerald-50 text-emerald-700 border-emerald-100',
};

export default function ToolsGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = tools.filter((tool) => {
    const matchCategory =
      activeCategory === 'all' || tool.category === activeCategory;

    const matchSearch =
      search === '' ||
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      );

    return matchCategory && matchSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">

      {/* SEARCH */}
      <div className="mb-6">
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm">
          <span className="text-gray-400 text-lg">🔍</span>

          <input
            type="text"
            placeholder="Search SAP, PDF, OData, AI tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* CATEGORY PILLS */}
      <div className="flex gap-3 flex-wrap mb-7">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all border
              ${
                activeCategory === cat.id
                  ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-200 hover:bg-emerald-50'
              }`}
          >
            <span className="mr-2">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* TITLE */}
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-[#0B132B]">
          {filtered.length} Tools
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">

        {filtered.map((tool) => (
          <Link
            key={tool.id}
            href={tool.href}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
          >

            {/* TOP */}
            <div className="flex items-start justify-between mb-3">

              <span
                className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold uppercase tracking-wide ${categoryColors[tool.category]}`}
              >
                {tool.category}
              </span>

              <div className="flex gap-1.5">
                {tool.isNew && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                    New
                  </span>
                )}

                {tool.isAI && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-violet-100 text-violet-700 font-semibold">
                    AI
                  </span>
                )}
              </div>
            </div>

            {/* ICON */}
            <div className="text-2xl mb-2">
              {tool.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-[17px] font-semibold text-[#0B132B] leading-snug mb-1.5 group-hover:text-emerald-600 transition-colors">
              {tool.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[13px] text-gray-500 leading-5 line-clamp-2">
              {tool.description}
            </p>

            {/* FOOTER */}
            <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">

              <div className="flex flex-wrap gap-1.5">
                {tool.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
                →
              </div>
            </div>

            {/* LIGHT GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute top-0 right-0 h-24 w-24 bg-emerald-100 blur-3xl opacity-20 rounded-full" />
            </div>

          </Link>
        ))}

      </div>
    </section>
  );
}