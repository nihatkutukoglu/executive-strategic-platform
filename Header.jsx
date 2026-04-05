import { useState, useEffect } from 'react';
import { ArrowUpRight, Bell, User } from 'lucide-react';

export default function Header() {
  const [loss, setLoss] = useState(24532.00);

  useEffect(() => {
    const timer = setInterval(() => {
      // Rastgele 5 TL ile 50 TL arası artış
      const increase = Math.random() * 45 + 5;
      setLoss(prev => prev + increase);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Para birimi formatlama
  const formattedLoss = new Intl.NumberFormat('tr-TR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(loss);

  return (
    <header className="h-24 bg-anadolu-card/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
      <div>
        <h2 className="text-xl font-bold text-white">Genel Sürdürülebilirlik Tablosu</h2>
        <p className="text-sm text-anadolu-muted mt-1">Bugünün operasyonel verileri canlı olarak simüle edilmektedir.</p>
      </div>

      <div className="flex items-center gap-6">
        {/* Dynamic Loss Counter */}
        <div className="flex items-center gap-4 bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 px-6 py-3 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.1)]">
          <div className="flex flex-col items-end">
            <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest mb-0.5">Anlık Operasyonel Kayıp</span>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold text-white tabular-nums tracking-tight">
                {formattedLoss}
              </span>
              <span className="text-lg font-medium text-red-400">₺</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center border border-red-500/30">
            <ArrowUpRight size={24} className="text-red-500" />
          </div>
        </div>

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
