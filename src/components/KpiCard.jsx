export default function KpiCard({ title, value, change, trend = "up", icon: Icon, colorClass = "text-blue-400" }) {
  const isPositive = trend === "up";
  
  return (
    <div className="bg-anadolu-card border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 hover:scale-105 hover:border-slate-600 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out cursor-default">
      {/* Background glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-300 ease-in-out pointer-events-none"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-anadolu-muted mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
        </div>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-800/50 border border-slate-700 shadow-sm group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300`}>
          <Icon size={28} className={colorClass} />
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-6">
        <span className={`text-xs font-bold px-2 py-1 rounded-md ${isPositive ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
          {isPositive ? '↓' : '↑'} {change}
        </span>
        <span className="text-sm text-anadolu-muted font-medium">geçen haftaya göre</span>
      </div>
    </div>
  );
}
