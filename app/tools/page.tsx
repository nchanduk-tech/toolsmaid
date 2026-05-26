import Link from "next/link";

const tools = [
  {
    title: "PDF Compressor",
    description:
      "Compress PDF documents instantly while preserving visual quality and layout.",
    icon: "📄",
    href: "/tools/pdf-compressor",
    status: "Live",
  },
  {
    title: "JSON Formatter",
    description:
      "Beautify, validate, and format JSON payloads for APIs and development workflows.",
    icon: "🧩",
    href: "/tools/json-formatter",
    status: "Live",
  },
  {
    title: "Prompt Formatter",
    description:
      "Structure and optimize AI prompts for better readability and reusable workflows.",
    icon: "✨",
    href: "/tools/prompt-formatter",
    status: "Live",
  },
  {
    title: "Currency Converter",
    description:
      "Convert currencies quickly with modern exchange formatting utilities.",
    icon: "💱",
    href: "/tools/currency-converter",
    status: "Coming Soon",
  },
  {
    title: "Text Cleaner",
    description:
      "Clean unwanted formatting, spaces, symbols, and copied document artifacts.",
    icon: "🧹",
    href: "#",
    status: "Planned",
  },
  {
    title: "File Utilities",
    description:
      "Upcoming productivity tools for document conversion and optimization.",
    icon: "🗂️",
    href: "#",
    status: "Planned",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-16">

        {/* Header */}
        <div className="max-w-3xl mb-12">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wide mb-5">
            Productivity Utilities
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-[#0b132b]">
            All Tools
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-500">
            Modern utilities for developers, consultants,
            analysts, creators, and enterprise workflows.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

          {tools.map((tool) => {

            const isDisabled =
              tool.status !== "Live";

          return (
  <Link
    key={tool.title}
    href={tool.href}
    className="
      group rounded-3xl border border-slate-200 bg-white p-5
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl
    "
  >

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl mb-5">
                  {tool.icon}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-[#0b132b] mb-3">
                  {tool.title}
                </h2>

                {/* Description */}
                <p className="text-sm leading-7 text-slate-500">
                  {tool.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6">

                  <span
                    className={`
                      text-xs font-semibold px-3 py-1 rounded-full
                      ${
                        tool.status === "Live"
                          ? "bg-emerald-50 text-emerald-700"
                          : tool.status === "Coming Soon"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-slate-100 text-slate-600"
                      }
                    `}
                  >
                    {tool.status}
                  </span>

                  <span className="text-sm text-slate-400 group-hover:text-slate-700 transition">
                    {tool.status === "Live"
                      ? "Open →"
                      : "Soon"}
                  </span>

                </div>

              </Link>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-[32px] bg-[#081028] overflow-hidden relative p-8 text-white">

          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl">

            <div className="text-sm uppercase tracking-wider text-emerald-300 mb-3">
              SAP Enterprise Tools
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Looking for SAP utilities?
            </h2>

            <p className="text-slate-300 leading-8">
              Explore specialized SAP tooling including
              HANA sizing, OData query generation,
              transport analysis, SQL explainers,
              and enterprise diagnostics.
            </p>

            <Link
              href="/sap-suite"
              className="inline-flex items-center mt-7 h-12 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 transition font-semibold"
            >
              Open SAP Suite →
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}