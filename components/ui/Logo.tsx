export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Signal bars */}
      <div className="flex items-end gap-1 h-10">
        <span className="w-1.5 h-6 bg-emerald-500 rounded-full animate-pulse"></span>
        <span className="w-1.5 h-9 bg-emerald-400 rounded-full animate-pulse delay-75"></span>
        <span className="w-1.5 h-7 bg-emerald-300 rounded-full animate-pulse delay-150"></span>
        <span className="w-1.5 h-10 bg-emerald-500 rounded-full animate-pulse delay-200"></span>
        <span className="w-1.5 h-5 bg-emerald-400 rounded-full animate-pulse delay-300"></span>
      </div>

      {/* Brand text */}
      <div className="text-3xl font-bold tracking-tight">
       <span className="text-black">Tools</span>
       <span className="text-emerald-500 italic">Maid</span>
      </div>
    </div>
  );
}