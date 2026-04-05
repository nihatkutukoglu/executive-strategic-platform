import { Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-24 bg-anadolu-card/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
      <div>
        <h2 className="text-xl font-bold text-white">Genel Sürdürülebilirlik Tablosu</h2>
        <p className="text-sm text-anadolu-muted mt-1">Bugünün operasyonel verileri canlı olarak simüle edilmektedir.</p>
      </div>

      <div className="flex items-center gap-6">


        <div className="h-10 w-px bg-slate-800 mx-2"></div>
        
        <button className="w-10 h-10 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-anadolu-muted hover:text-white hover:bg-slate-700 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-slate-800 rounded-full"></span>
        </button>
        <button className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-anadolu-muted hover:text-white transition-colors">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}
