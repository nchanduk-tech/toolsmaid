import Link from 'next/link';

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      
      <div className="mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-black">
          All Tools
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Professional utilities for SAP consultants, developers,
          analysts, and productivity workflows.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* HANA Calculator */}
        <Link
          href="/tools/hana-memory-calculator"
          className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
        >
          <div className="text-4xl mb-4">🧮</div>

          <h2 className="text-xl font-semibold text-black mb-2">
            SAP HANA Memory Calculator
          </h2>

          <p className="text-gray-600 text-sm">
            Estimate SAP HANA memory sizing including row store,
            column store, compression, and BTP sizing.
          </p>
        </Link>

        {/* Placeholder */}
        <div className="border border-dashed border-gray-300 rounded-2xl p-6 opacity-70">
          <div className="text-4xl mb-4">🔗</div>

          <h2 className="text-xl font-semibold text-black mb-2">
            OData Query Builder
          </h2>

          <p className="text-gray-600 text-sm">
            Coming soon.
          </p>
        </div>

        <div className="border border-dashed border-gray-300 rounded-2xl p-6 opacity-70">
          <div className="text-4xl mb-4">⚠️</div>

          <h2 className="text-xl font-semibold text-black mb-2">
            SAP Error Explainer
          </h2>

          <p className="text-gray-600 text-sm">
            Coming soon.
          </p>
        </div>

      </div>

    </main>
  );
}