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
          <Link href="/tools"      className="hover:text-gray-900 transition-colors">Tools</Link>
          <Link href="/tools#sap"  className="hover:text-gray-900 transition-colors">SAP Suite</Link>
          <Link href="/blog"       className="hover:text-gray-900 transition-colors">Blog</Link>
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