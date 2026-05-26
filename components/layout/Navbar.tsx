'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  /* CLOSE MENU WHEN CLICK OUTSIDE */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        {/* CENTER NAVIGATION */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">

          {/* TOOLS MENU */}
          <div
            className="relative"
            ref={menuRef}
            onMouseEnter={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
          >
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="hover:text-black transition-colors text-black font-medium"
            >
              Tools
            </button>

            {/* MAIN DROPDOWN */}
            {openMenu && (
              <div className="absolute left-0 top-full pt-3 z-50">

                <div className="w-56 bg-[#f4fbf8] border border-emerald-100 rounded-2xl shadow-2xl py-2">

                  {/* SAP TOOLS */}
                  <div className="relative group">

                    <div className="flex items-center justify-between px-4 py-3 text-[11px] tracking-wide font-semibold text-gray-700 hover:bg-emerald-100/60 cursor-pointer transition-colors">
                      <span>SAP TOOLS</span>
                      <span>›</span>
                    </div>

                    {/* NESTED MENU */}
                    <div className="absolute left-full top-0 pl-2 hidden group-hover:block z-50">

                      <div className="w-64 bg-[#f4fbf8] border border-emerald-100 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">

                        <Link
                          href="/tools/hana-memory-calculator"
                          onClick={() => setOpenMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50"
                        >
                          SAP HANA Memory Calculator
                        </Link>

                        <Link
                          href="/tools/odata-query-builder"
                          onClick={() => setOpenMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50"
                        >
                          OData Query Builder
                        </Link>

                        <Link
                          href="/tools/sap-error-code-explainer"
                          onClick={() => setOpenMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50"
                        >
                          SAP Error Explainer
                        </Link>

                      </div>
                    </div>
                  </div>

                  {/* DEVELOPER TOOLS */}
                  <div className="relative group">

                    <div className="flex items-center justify-between px-4 py-3 text-[11px] tracking-wide font-semibold text-gray-700 hover:bg-emerald-100/60 cursor-pointer transition-colors">
                      <span>DEVELOPER TOOLS</span>
                      <span>›</span>
                    </div>

                    <div className="absolute left-full top-0 pl-2 hidden group-hover:block z-50">

                      <div className="w-64 bg-[#f4fbf8] border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">

                        <Link
                          href="/tools/json-formatter"
                          onClick={() => setOpenMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50"
                        >
                          JSON Formatter
                        </Link>

                      </div>
                    </div>
                  </div>

                  {/* FINANCE TOOLS */}
                  <div className="relative group">

                    <div className="flex items-center justify-between px-4 py-3 text-[11px] tracking-wide font-semibold text-gray-700 hover:bg-emerald-100/60 cursor-pointer transition-colors">
                      <span>FINANCE TOOLS</span>
                      <span>›</span>
                    </div>

                    <div className="absolute left-full top-0 pl-2 hidden group-hover:block z-50">

                      <div className="w-64 bg-[#f4fbf8] border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">

                        <Link
                          href="/tools/currency-converter"
                          onClick={() => setOpenMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50"
                        >
                          Currency Converter
                        </Link>

                      </div>
                    </div>
                  </div>

                  {/* PDF TOOLS */}
                  <div className="relative group">

                    <div className="flex items-center justify-between px-4 py-3 text-[11px] tracking-wide font-semibold text-gray-700 hover:bg-emerald-100/60 cursor-pointer transition-colors">
                      <span>PDF TOOLS</span>
                      <span>›</span>
                    </div>

                    <div className="absolute left-full top-0 pl-2 hidden group-hover:block z-50">

                      <div className="w-64 bg-[#f4fbf8] border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">

                        <Link
                          href="/tools/pdf-compressor"
                          onClick={() => setOpenMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50"
                        >
                          PDF Compressor
                        </Link>

                      </div>
                    </div>
                  </div>

                  {/* AI TOOLS */}
                  <div className="relative group">

                    <div className="flex items-center justify-between px-4 py-3 text-[11px] tracking-wide font-semibold text-gray-700 hover:bg-emerald-100/60 cursor-pointer transition-colors">
                      <span>AI TOOLS</span>
                      <span>›</span>
                    </div>

                    <div className="absolute left-full top-0 pl-2 hidden group-hover:block z-50">

                      <div className="w-64 bg-[#f4fbf8] border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">

                        <Link
                          href="/tools/prompt-formatter"
                          onClick={() => setOpenMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50"
                        >
                          Prompt Formatter
                        </Link>

                        <Link
                          href="/tools/sql-query-explainer"
                          onClick={() => setOpenMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50"
                        >
                          SQL Query Explainer
                        </Link>

                        <Link
                          href="/tools/code-explainer"
                          onClick={() => setOpenMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50"
                        >
                          Code Explainer
                        </Link>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* SAP SUITE */}
          <Link
            href="/sap-suite"
            className="hover:text-black transition-colors"
          >
          SAP Suite
          </Link>

          {/* BLOG */}
          <Link
            href="/blog"
            className="hover:text-black transition-colors"
          >
            Blog
          </Link>

        </div>

        {/* RIGHT BUTTON */}
        <Link
          href="/tools"
          className="text-sm font-medium px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-colors"
        >
          Browse tools →
        </Link>

      </div>
    </nav>
  );
}