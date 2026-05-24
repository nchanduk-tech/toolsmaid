'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tools, categories, type ToolCategory } from '@/lib/tools-registry';

const categoryColors: Record<string, string> = {
  sap:       'bg-blue-50 text-blue-700',
  pdf:       'bg-amber-50 text-amber-700',
  developer: 'bg-violet-50 text-violet-700',
  converter: 'bg-pink-50 text-pink-700',
  finance:   'bg-green-50 text-green-700',
};

const cardAccent: Record<string, string> = {
  sap:       'hover:border-blue-300',
  pdf:       'hover:border-amber-300',
  developer: 'hover:border-violet-300',
  converter: 'hover:border-pink-300',
  finance:   'hover:border-green-300',
};

export default function ToolsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = tools.filter(t => {
    const matchCat = activeCategory === 'all' || t.category === activeCategory;
    const matchSearch =
      search === '' ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">

      {/* Search */}
      <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 mb-6">
        <span className="text-gray-400 text-lg">🔍</span>
        <input
          type="text"
          placeholder="Search tools — try 'HANA', 'PDF', 'OData'..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
        />
      </div>

      {/* Category pills */}
      <div className="flex gap-2 flex-wrap mb-8">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-sm px-4 py-2 rounded-full border transition-all ${
              activeCategory === cat.id
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800'
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-medium">
        {filtered.length} tool{filtered.length !== 1 ? 's' : ''} available
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map(tool => (
          <Link
            key={tool.id}
            href={tool.href}
            className={`group bg-white border border-gray-200 rounded-2xl p-5 transition-all hover:shadow-md hover:-translate-y-0.5 ${cardAccent[tool.category]}`}
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wide ${categoryColors[tool.category]}`}>
                {tool.category}
              </span>
              <div className="flex gap-1">
                {tool.isNew && (
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">New</span>
                )}
                {tool.isAI && (
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">AI</span>
                )}
              </div>
            </div>

            <div className="text-3xl mb-3">{tool.icon}</div>
            <h3 className="font-medium text-gray-900 mb-2 leading-snug">{tool.name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{tool.description}</p>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
              <div className="flex gap-1 flex-wrap">
                {tool.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-xs text-gray-400">{tag}</span>
                ))}
              </div>
              <span className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all text-sm">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}