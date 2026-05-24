import Link from 'next/link';

interface ToolLayoutProps {
  title: string;
  description: string;
  category: string;
  children: React.ReactNode;
}

export default function ToolLayout({
  title,
  description,
  category,
  children,
}: ToolLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-gray-800 transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-gray-800">{title}</span>
        </nav>

        {/* Tool header */}
        <div className="mb-8">
          <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wide">
            {category}
          </span>
          <h1 className="text-2xl font-semibold text-gray-900 mt-3 mb-2">
            {title}
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Tool content */}
        {children}

      </div>
    </div>
  );
}