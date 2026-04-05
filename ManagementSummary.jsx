import { useState } from 'react';
import KpiCard from './KpiCard';
import { Clock, AlertTriangle, Activity, CheckCircle, Zap, Shield, XCircle } from 'lucide-react';

export default function ManagementSummary() {
  const [integrationRatio, setIntegrationRatio] = useState(0);

  const savedHours = ((integrationRatio / 100) * 18).toFixed(1);
  const savedCost = new Intl.NumberFormat('tr-TR', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format((integrationRatio / 100) * 850000); 

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-2">
        <KpiCard title="Ortalama Teslimat Süresi" value="42.5 Saat" change="12%" trend="down" icon={Clock} colorClass="text-blue-400" />
        <KpiCard title="Süreç Gecikmesi" value="14 Dakika" change="8%" trend="down" icon={Activity} colorClass="text-red-400" />
        <KpiCard title="Hata Payı" value="%1.2" change="0.4%" trend="up" icon={AlertTriangle} colorClass="text-orange-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
        
        {/* MoSCoW Matrix */}
        <div className="bg-anadolu-card border border-slate-800 rounded-2xl p-8 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/50 via-blue-500/50 to-yellow-500/50"></div>
          
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">MoSCoW Önceliklendirme Matrisi</h3>
          <p className="text-sm text-anadolu-muted mb-6">Süreç iyileştirme aksiyonlarının stratejik önceliklendirmesi</p>
          
          <div className="flex flex-col gap-4">
            
            {/* MUST HAVE */}
            <div className="p-5 rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent hover:bg-green-500/15 hover:border-green-400 hover:shadow-[0_10px_25px_rgba(34,197,94,0.15)] transition-all duration-300 ease-in-out cursor-default">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-green-500 font-black uppercase text-xs tracking-widest">
                  <CheckCircle size={18} /> Must Have
                </div>
                <span className="text-[10px] text-green-400/70 font-semibold uppercase tracking-wider bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">Olmazsa Olmaz</span>
              </div>
              <p className="text-white text-sm font-semibold leading-relaxed mb-2">ERP Kalite Modülü Entegrasyonu</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Verinin <span className="text-green-400 font-medium">"kişilerin hafızasında"</span> kalmasını engelleyip sisteme girmesini sağlar. Manuel süreçlerdeki %18'lik bekleme süresini ve veri kayıplarını sıfırlamak için kritiktir. Şikayet ve kalite verileri merkezi bir platformda toplanarak kurumsal hafıza oluşturulur.
              </p>
            </div>

            {/* SHOULD HAVE */}
            <div className="p-5 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent hover:bg-blue-500/15 hover:border-blue-400 hover:shadow-[0_10px_25px_rgba(59,130,246,0.15)] transition-all duration-300 ease-in-out cursor-default">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-blue-500 font-black uppercase text-xs tracking-widest">
                  <Shield size={18} /> Should Have
                </div>
                <span className="text-[10px] text-blue-400/70 font-semibold uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">Olsa Çok İyi Olur</span>
              </div>
              <p className="text-white text-sm font-semibold leading-relaxed mb-2">Dijital İmza Geçişi</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Onay süreçlerini hızlandırır ve fiziksel imza bağımlılığını ortadan kaldırır. Uzaktan çalışma senaryolarında süreç kesintisini önler, evrak kayıp riskini sıfırlar.
              </p>
            </div>

            {/* COULD HAVE */}
            <div className="p-5 rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent hover:bg-yellow-500/15 hover:border-yellow-400 hover:shadow-[0_10px_25px_rgba(234,179,8,0.15)] transition-all duration-300 ease-in-out cursor-default">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-yellow-500 font-black uppercase text-xs tracking-widest">
                  <Zap size={18} /> Could Have
                </div>
                <span className="text-[10px] text-yellow-400/70 font-semibold uppercase tracking-wider bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-500/20">Vakit/Bütçe Kalırsa</span>
              </div>
              <p className="text-white text-sm font-semibold leading-relaxed mb-2">AI Destekli Numune Tahmini</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Verimliliği artırır ama ana sistemler (Must/Should) tamamlanmadan lüks kaçabilir. Must Have tamamlandıktan sonra toplanan veri ile eğitilebilir.
              </p>
            </div>

            {/* WON'T HAVE */}
            <div className="p-5 rounded-xl border border-slate-600/30 bg-gradient-to-br from-slate-600/10 to-transparent hover:bg-slate-600/20 hover:border-slate-500 hover:shadow-[0_10px_25px_rgba(148,163,184,0.1)] transition-all duration-300 ease-in-out cursor-default">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-slate-400 font-black uppercase text-xs tracking-widest">
                  <XCircle size={18} /> Won't Have
                </div>
                <span className="text-[10px] text-slate-400/70 font-semibold uppercase tracking-wider bg-slate-600/10 px-2 py-0.5 rounded-full border border-slate-600/20">Şu An Gündem Dışı</span>
              </div>
              <p className="text-slate-300 text-sm font-semibold leading-relaxed mb-2">Fiziksel Laboratuvarı Büyütmek</p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Mevcut altyapı yeterli; dijital dönüşüm önceliği fiziksel genişleme yerine süreç optimizasyonuna yönlendirilmiştir.
              </p>
            </div>

          </div>
        </div>

        {/* Impact Slider */}
        <div className="bg-anadolu-card border border-slate-800 rounded-2xl p-8 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Ya Çözersek?</h3>
            <p className="text-sm text-anadolu-muted">ERP entegrasyon seviyesinin doğrudan operasyonel ve finansal etkisi.</p>
          </div>

          <div className="my-8">
            <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">
              <span>Mevcut</span>
              <span className="text-red-400 px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">
                Entegrasyon: %{integrationRatio}
              </span>
              <span>Tam Çözüm</span>
            </div>
            
            <div className="relative w-full h-3 bg-slate-800 rounded-full hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-all duration-100" 
                style={{ width: `${integrationRatio}%` }}
              ></div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={integrationRatio} 
                onChange={(e) => setIntegrationRatio(e.target.value)}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div 
                className="absolute top-1/2 -mt-2.5 w-5 h-5 bg-white rounded-full shadow border-2 border-red-500 pointer-events-none transition-all duration-75"
                style={{ left: `calc(${integrationRatio}% - 10px)` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0f172a] border border-slate-700/50 rounded-xl p-5 text-center transition-all duration-300 hover:border-slate-500 hover:shadow-lg">
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-2">
                Kurtarılan Bekleme (Saat)
              </p>
              <div className="text-4xl font-bold text-white tabular-nums tracking-tighter">
                 {savedHours}
              </div>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 text-center relative overflow-hidden group shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.25)] hover:border-red-400 hover:bg-red-500/20 transition-all duration-300 ease-in-out cursor-default">
              <p className="text-[11px] text-red-500 font-bold uppercase tracking-widest mb-2 relative z-10 transition-colors group-hover:text-red-400">
                Aylık Kurtarılan Maliyet (₺)
              </p>
              <div className="text-4xl font-bold text-red-400 tabular-nums tracking-tighter relative z-10 drop-shadow-md">
                 {savedCost}
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
