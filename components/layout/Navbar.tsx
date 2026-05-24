import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">

          {/* TOOLS MENU */}
          <div className="relative group">

            <button className="flex items-center gap-1 hover:text-black transition-colors font-medium text-black">
              Tools
             
            </button>

            {/* MAIN MENU */}
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">

              <div className="w-60 bg-white border border-gray-200 rounded-xl shadow-xl py-1">

                {/* SAP TOOLS */}
                <div className="relative group/sap">

                  <div className="flex items-center justify-between px-4 py-2.5 text-[11px] tracking-wide font-semibold text-gray-500 hover:bg-gray-50 cursor-pointer">
                    <span>SAP TOOLS</span>
                    <span>›</span>
                  </div>

                  <div className="absolute left-[240px] top-0 hidden group-hover/sap:block">

                    <div className="w-64 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">

                      <Link
                        href="/tools/hana-memory-calculator"
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        SAP HANA Memory Calculator
                      </Link>

                      <Link
                        href="/tools/odata-query-builder"
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        OData Query Builder
                      </Link>

                      <Link
                        href="/tools/sap-error-code-explainer"
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        SAP Error Explainer
                      </Link>

                    </div>
                  </div>
                </div>

                {/* DEVELOPER TOOLS */}
                <div className="relative group/dev">

                  <div className="flex items-center justify-between px-4 py-2.5 text-[11px] tracking-wide font-semibold text-gray-500 hover:bg-gray-50 cursor-pointer">
                    <span>DEVELOPER TOOLS</span>
                    <span>›</span>
                  </div>

                  <div className="absolute left-[240px] top-0 hidden group-hover/dev:block">

                    <div className="w-64 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">

                      <Link
                        href="/tools/json-formatter"
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        JSON Formatter
                      </Link>

                    </div>
                  </div>
                </div>

                {/* FINANCE TOOLS */}
                <div className="relative group/finance">

                  <div className="flex items-center justify-between px-4 py-2.5 text-[11px] tracking-wide font-semibold text-gray-500 hover:bg-gray-50 cursor-pointer">
                    <span>FINANCE TOOLS</span>
                    <span>›</span>
                  </div>

                  <div className="absolute left-[240px] top-0 hidden group-hover/finance:block">

                    <div className="w-64 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">

                      <Link
                        href="/tools/currency-converter"
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        Currency Converter
                      </Link>

                    </div>
                  </div>
                </div>

                {/* PDF TOOLS */}
                <div className="relative group/pdf">

                  <div className="flex items-center justify-between px-4 py-2.5 text-[11px] tracking-wide font-semibold text-gray-500 hover:bg-gray-50 cursor-pointer">
                    <span>PDF TOOLS</span>
                    <span>›</span>
                  </div>

                  <div className="absolute left-[240px] top-0 hidden group-hover/pdf:block">

                    <div className="w-64 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">

                      <Link
                        href="/tools/pdf-compressor"
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        PDF Compressor
                      </Link>

                    </div>
                  </div>
                </div>

                {/* AI TOOLS */}
                <div className="relative group/ai">

                  <div className="flex items-center justify-between px-4 py-2.5 text-[11px] tracking-wide font-semibold text-gray-500 hover:bg-gray-50 cursor-pointer">
                    <span>AI TOOLS</span>
                    <span>›</span>
                  </div>

                  <div className="absolute left-[240px] top-0 hidden group-hover/ai:block">

                    <div className="w-64 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">

                      <Link
                        href="/tools/prompt-formatter"
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        Prompt Formatter
                      </Link>

                      <Link
                        href="/tools/sql-query-explainer"
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        SQL Query Explainer
                      </Link>

                      <Link
                        href="/tools/code-explainer"
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        Code Explainer
                      </Link>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* SAP SUITE */}
          <Link
            href="/tools#sap"
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

        {/* BUTTON */}
        <Link
          href="/tools"
          className="text-sm font-medium px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Browse tools →
        </Link>

      </div>
    </nav>
  );
}