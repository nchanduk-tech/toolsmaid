export default function FooterCTA() {
  return (
    <footer className="bg-gray-900 text-white text-center py-20 px-6">
      <h2 className="font-serif text-4xl font-light italic mb-3">More tools, every week.</h2>
      <p className="text-gray-400 text-base mb-6">Get notified when new SAP and developer tools go live.</p>
      <div className="flex items-center justify-center gap-3 max-w-sm mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 outline-none focus:border-gray-500"
        />
        <button className="px-5 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
          Notify me
        </button>
      </div>
      <p className="text-gray-600 text-xs mt-10">© 2025 ToolsMaid · Built with ♥ for SAP developers</p>
    </footer>
  );
}