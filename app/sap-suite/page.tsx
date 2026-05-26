import Link from 'next/link';

export default function SAPSuitePage() {

  return (

    <div className="min-h-screen bg-[#f6f8fb]">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="mb-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            SAP Enterprise Utilities
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            SAP Suite
          </h1>

          <p className="text-slate-500 text-lg mt-4 max-w-3xl leading-8">
            Premium productivity tools built for SAP consultants,
            architects, BASIS teams, ABAP developers, HANA engineers,
            integration specialists, and enterprise support operations.
          </p>

        </div>

        {/* TOP SECTION */}
        <div className="grid xl:grid-cols-[1.2fr_380px] gap-6 mb-8">

          {/* HERO */}
          <div className="relative overflow-hidden rounded-3xl bg-[#081028] p-8 shadow-2xl">

            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-medium mb-5">
                Enterprise Ready
              </div>

              <h2 className="text-3xl font-bold text-white leading-tight">
                Accelerate SAP operations with intelligent tooling
              </h2>

              <p className="text-slate-300 mt-4 leading-7 max-w-2xl">
                Centralized utilities for SAP troubleshooting,
                OData generation, memory sizing, SQL analysis,
                transport intelligence, and productivity automation.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-2xl font-bold text-white">12+</div>
                  <div className="text-xs text-slate-400 mt-1">
                    SAP Utilities
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-2xl font-bold text-white">HANA</div>
                  <div className="text-xs text-slate-400 mt-1">
                    Optimized
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-2xl font-bold text-white">OData</div>
                  <div className="text-xs text-slate-400 mt-1">
                    Ready
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-2xl font-bold text-white">AI</div>
                  <div className="text-xs text-slate-400 mt-1">
                    Assisted
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* SIDE PANEL */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

              <div className="flex items-center justify-between mb-5">

                <h3 className="text-lg font-semibold text-slate-900">
                  Platform Status
                </h3>

                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Stable
                </div>

              </div>

              <div className="space-y-4">

                <div>

                  <div className="flex justify-between text-sm mb-2">

                    <span className="text-slate-500">
                      Tool Coverage
                    </span>

                    <span className="font-semibold text-slate-800">
                      78%
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[78%] bg-emerald-500 rounded-full" />
                  </div>

                </div>

                <div>

                  <div className="flex justify-between text-sm mb-2">

                    <span className="text-slate-500">
                      AI Integration
                    </span>

                    <span className="font-semibold text-slate-800">
                      92%
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[92%] bg-[#081028] rounded-full" />
                  </div>

                </div>

              </div>

            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white">

              <div className="text-sm uppercase tracking-wider opacity-80 mb-2">
                Upcoming
              </div>

              <h3 className="text-2xl font-bold mb-3">
                AI SAP Assistant
              </h3>

              <p className="text-emerald-50 leading-7 text-sm">
                Intelligent SAP issue diagnosis, transport analysis,
                SQL optimization, and ABAP troubleshooting powered
                by enterprise AI workflows.
              </p>

            </div>

          </div>

        </div>

        {/* TOOLS SECTION */}
        <div>

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold text-slate-900">
                SAP Tool Collection
              </h2>

              <p className="text-slate-500 mt-1">
                Production-grade utilities for enterprise SAP teams
              </p>

            </div>

            <div className="text-sm text-slate-400">
              Continuously expanding
            </div>

          </div>

          {/* UPDATED GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

            {/* ODATA */}
            <Link
              href="/tools/odata-query-builder"
              className="group bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-xl mb-4">
                🔗
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                OData Query Builder
              </h3>

              <p className="text-slate-500 leading-6 text-sm">
                Visual SAP OData query generation with live execution.
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-medium">
                  Live
                </span>

                <span className="text-sm text-indigo-600 font-medium">
                  Open →
                </span>

              </div>

            </Link>

            {/* HANA */}
            <Link
              href="/tools/hana-memory-calculator"
              className="group bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-xl mb-4">
                🧠
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                HANA Memory Calculator
              </h3>

              <p className="text-slate-500 leading-6 text-sm">
                Estimate SAP HANA sizing and optimization metrics.
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                  Ready
                </span>

                <span className="text-sm text-emerald-600 font-medium">
                  Open →
                </span>

              </div>

            </Link>

            {/* SQL */}
            <Link
              href="/tools/sql-query-explainer"
              className="group bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-xl mb-4">
                🗄️
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                SQL Explainer
              </h3>

              <p className="text-slate-500 leading-6 text-sm">
                Understand SQL joins, plans and optimization instantly.
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="text-xs px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 font-medium">
                  Planned
                </span>

                <span className="text-sm text-slate-400">
                  Coming Soon
                </span>

              </div>

            </Link>

            {/* ERROR */}
            <Link
              href="/tools/sap-error-code-explainer"
              className="group bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-xl mb-4">
                ⚠️
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                SAP Error Explainer
              </h3>

              <p className="text-slate-500 leading-6 text-sm">
                Decode SAP dumps, RFC failures and transport issues.
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-700 font-medium">
                  Dev
                </span>

                <span className="text-sm text-slate-400">
                  Coming Soon
                </span>

              </div>

            </Link>

            {/* TRANSPORT */}
            <Link
              href="/tools/transport-analyzer"
              className="group bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-xl mb-4">
                📦
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Transport Analyzer
              </h3>

              <p className="text-slate-500 leading-6 text-sm">
                Analyze transport dependencies and release risks.
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="text-xs px-3 py-1 rounded-full bg-pink-50 text-pink-700 font-medium">
                  Planned
                </span>

                <span className="text-sm text-slate-400">
                  Coming Soon
                </span>

              </div>

            </Link>

            {/* MORE */}
            <div className="group bg-gradient-to-br from-[#081028] to-[#101c42] rounded-3xl p-5 shadow-2xl text-white relative overflow-hidden">

              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">

                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl mb-4">
                  ✨
                </div>

                <h3 className="text-lg font-bold mb-2">
                  More Tools
                </h3>

                <p className="text-slate-300 leading-6 text-sm">
                  Additional SAP AI utilities and automation tools are coming.
                </p>

                <button className="mt-5 h-10 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 transition text-sm font-semibold">
                  Explore
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}