"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fafc] to-[#f6f8fb]" />

      <div className="relative max-w-6xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>

            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide uppercase mb-7">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Enterprise-grade utilities
            </div>

            {/* TITLE */}
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#020817] leading-[1.05]">
              Smart tools for{" "}
              <span className="text-emerald-600 italic font-semibold">
                smarter
              </span>{" "}
              workflows
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 text-base leading-8 text-slate-500 max-w-xl">
              Premium utilities for SAP consultants, developers,
              architects, analysts, and enterprise teams —
              designed to simplify technical operations,
              automation, diagnostics, and productivity.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 mt-10">

              <Link
                href="/tools"
                className="h-12 px-7 rounded-2xl bg-[#081028] text-white text-sm font-semibold flex items-center justify-center hover:scale-[1.02] hover:bg-[#101c42] transition-all duration-300 shadow-lg shadow-slate-900/10"
              >
                Explore Tools →
              </Link>

              <Link
                href="/sap-suite"
                className="h-12 px-7 rounded-2xl border border-slate-200 bg-white text-slate-700 text-sm font-medium flex items-center justify-center hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
              >
                Open SAP Suite
              </Link>

            </div>

            {/* LIVE STATS */}
            <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-slate-200">

              {[
                {
                  value: "12+",
                  label: "Production tools",
                },
                {
                  value: "SAP",
                  label: "Enterprise suite",
                },
                {
                  value: "AI",
                  label: "Powered workflows",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-3xl font-bold text-slate-900">
                    {item.value}
                  </div>

                  <div className="text-sm text-slate-400 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="hidden lg:block relative h-[520px]">

            {/* Glow */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

            {/* CARD 1 */}
            <div
              className="absolute top-2 right-6 w-55 bg-white border border-slate-200 rounded-2xl p-4 shadow-lg"
              style={{
                animation: "floatA 5s ease-in-out infinite",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">🧠</div>

                <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                  Live
                </span>
              </div>

              <div className="text-sm text-slate-500 mb-1">
                SAP HANA Memory
              </div>

              <div className="text-2xl font-bold text-slate-900">
                256 GB
              </div>

              <div className="text-sm text-slate-400 mt-2">
                Recommended sizing output
              </div>

              <div className="mt-5 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-[82%] bg-emerald-500 rounded-full" />
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="absolute top-40 left-0 w-72 bg-[#081028] rounded-2xl p-4 shadow-2xl text-white"
              style={{
                animation: "floatB 6s ease-in-out infinite",
              }}
            >
              <div className="flex items-center justify-between">

                <div className="text-3xl">
                  🔗
                </div>

                <div className="text-xs px-3 py-1 rounded-full bg-white/10 text-emerald-300">
                  OData
                </div>

              </div>

              <div className="mt-4 text-sm text-slate-200">
                Generated Query
              </div>

              <div className="mt-2 font-mono text-sm text-emerald-400 break-all leading-7">
                $filter=Status eq 'A'
                and Company eq '1000'
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Query validation active
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="absolute bottom-0 right-10 w-64 bg-white border border-slate-200 rounded-3xl p-5 shadow-xl"
              style={{
                animation: "floatA 5.5s ease-in-out infinite",
              }}
            >
              <div className="flex items-center justify-between mb-4">

                <div className="text-3xl">
                  📄
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-700 font-medium">
                  Optimized
                </span>

              </div>

              <div className="text-sm text-slate-500">
                PDF Compression
              </div>

              <div className="mt-2 text-2xl font-bold text-slate-900">
                2.4MB → 380KB
              </div>

              <div className="mt-2 text-sm text-slate-400">
                Instant optimization completed
              </div>

              <div className="mt-5 flex gap-2">
                <div className="h-2 w-16 rounded-full bg-emerald-500" />
                <div className="h-2 w-8 rounded-full bg-slate-200" />
              </div>
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes floatA {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes floatB {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(12px);
          }
        }
      `}</style>

    </section>
  );
}