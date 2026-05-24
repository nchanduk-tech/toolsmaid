import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
            <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
  {/* Tools Dropdown */}
  <div className="relative group">
    <button className="hover:text-gray-900 transition-colors text-black font-medium">
      Tools
    </button>

    <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-50">
      <div className="w-80 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">

        <div className="px-5 py-3 text-xs font-semibold text-gray-500 bg-gray-50 border-b">
          SAP TOOLS
        </div>

        <Link
          href="/tools/hana-memory-calculator"
          className="block px-5 py-4 hover:bg-gray-50 text-gray-700"
        >
          SAP HANA Memory Calculator
        </Link>

        <Link
          href="/tools/odata-query-builder"
          className="block px-5 py-4 hover:bg-gray-50 text-gray-700"
        >
          OData Query Builder
        </Link>

        <Link
          href="/tools/sap-error-code-explainer"
          className="block px-5 py-4 hover:bg-gray-50 text-gray-700"
        >
          SAP Error Code Explainer
        </Link>

        <div className="px-5 py-3 text-xs font-semibold text-gray-500 bg-gray-50 border-y">
          DEVELOPER TOOLS
        </div>

        <Link
          href="/tools/json-formatter"
          className="block px-5 py-4 hover:bg-gray-50 text-gray-700"
        >
          JSON Formatter & Validator
        </Link>

        <div className="px-5 py-3 text-xs font-semibold text-gray-500 bg-gray-50 border-y">
          FINANCE TOOLS
        </div>

        <Link
          href="/tools/currency-converter"
          className="block px-5 py-4 hover:bg-gray-50 text-gray-700"
        >
          Currency Converter
        </Link>

        <div className="px-5 py-3 text-xs font-semibold text-gray-500 bg-gray-50 border-y">
          PDF TOOLS
        </div>

        <Link
          href="/tools/pdf-compressor"
          className="block px-5 py-4 hover:bg-gray-50 text-gray-700"
        >
          PDF Compressor
        </Link>
      </div>
    </div>
  </div>
<Link
  href="/tools#sap"
  className="hover:text-gray-900 transition-colors"
>
  SAP Suite
</Link>
  <Link
    href="/blog"
    className="hover:text-gray-900 transition-colors"
  >
    Blog
  </Link>
</div>
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