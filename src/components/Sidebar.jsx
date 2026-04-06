import { LayoutDashboard, GitMerge, Search, Settings, BarChart3, Users, Building2, Target, Shuffle, Layers } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'team-intro', icon: Users, label: 'Proje & Ekip' },
    { id: 'strategic-framework', icon: Building2, label: 'Stratejik Çerçeve' },
    { id: 'data-projection', icon: BarChart3, label: 'Veri Projeksiyonu' },
    { id: 'sipoc-analysis', icon: Layers, label: 'SIPOC Analizi' },
    { id: 'summary', icon: LayoutDashboard, label: 'Yönetim Özeti' },
    { id: 'rice-prioritization', icon: Target, label: 'RICE Matrisi' },
    { id: 'process-transformation', icon: Shuffle, label: 'Süreç Dönüşümü' },
    { id: 'process-map', icon: GitMerge, label: 'Süreç Haritası' },
    { id: 'root-cause', icon: Search, label: 'Kök Neden Analizi' },
  ];

  return (
    <aside className="w-64 bg-anadolu-card border-r border-slate-800 flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6 border-b border-slate-800 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-red-500/20 transition-all duration-300"></div>
        <h1 className="text-2xl font-black bg-gradient-to-br from-red-500 to-red-400 bg-clip-text text-transparent relative z-10">
          Anadolu Etap
        </h1>
        <p className="text-[10px] text-anadolu-muted mt-1.5 uppercase tracking-[0.2em] font-black relative z-10">Executive Platform</p>
      </div>
      
      <nav className="flex-1 py-4 px-3 space-y-1.5 overflow-y-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-300 ease-out text-left ${
                isActive 
                ? 'bg-gradient-to-r from-red-500/10 to-transparent text-red-500 border border-red-500/20 shadow-[0_4px_20px_rgba(239,68,68,0.08)] scale-[1.02] font-semibold' 
                : 'text-slate-400 hover:bg-slate-800/60 hover:text-white border border-transparent hover:scale-[1.02] hover:shadow-md font-medium'
              }`}
            >
              <Icon size={18} className={isActive ? 'drop-shadow-sm' : ''} />
              <span className="text-sm tracking-wide">{tab.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800/60 hover:text-white hover:scale-[1.02] transition-all duration-300 rounded-xl text-left font-medium">
          <Settings size={18} />
          <span className="text-sm tracking-wide">Ayarlar</span>
        </button>
      </div>
    </aside>
  );
}
