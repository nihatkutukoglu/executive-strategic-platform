import { useState } from 'react';
import { Camera, LayoutDashboard, Settings, X, Divide } from 'lucide-react';

export default function RicePrioritization() {
  const [reach, setReach] = useState(800);
  const [impact, setImpact] = useState(3);
  const [confidence, setConfidence] = useState(1.0);
  const [effort, setEffort] = useState(2);

  const calculateRice = () => {
    return ((reach * impact * confidence) / Math.max(effort, 0.1)).toFixed(0);
  };

  const finalScore = calculateRice();

  return (
    <div className="w-full mt-2 pb-10">
      <div className="mb-10 text-center">
        <h3 className="text-3xl md:text-5xl font-bold font-black text-white tracking-tight drop-shadow-lg">Yatırım Kararının Rasyonelleşmesi: MoSCoW ve RICE Analizi</h3>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left Column: MoSCoW Must Have */}
        <div className="w-full xl:w-1/3 bg-gradient-to-b from-[#1c322b] to-[#0f172a] border border-[#2d4a3e] rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Glassmorphism Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="bg-gradient-to-r from-emerald-800/40 to-[#1c322b] border border-emerald-500/20 rounded-2xl p-6 text-center mb-10 shadow-lg relative z-10">
            <h4 className="text-2xl font-bold text-white leading-tight mb-2">Sistemin Olmazsa Olmazları</h4>
            <p className="text-emerald-400 font-bold tracking-wider">(MoSCoW - Must Have)</p>
          </div>

          <div className="space-y-8 relative z-10">
            <div className="flex gap-5">
              <Camera className="text-emerald-400 shrink-0 mt-1" size={32} />
              <p className="text-slate-200 font-medium text-lg md:text-xl leading-snug">Fotoğraf kanıtlı şikayet formu,</p>
            </div>
            
            <div className="flex gap-5">
              <LayoutDashboard className="text-emerald-400 shrink-0 mt-1" size={32} />
              <p className="text-slate-200 font-medium text-lg md:text-xl leading-snug">Dashboard ekranı ve ERP arka yüzü (SAP) entegrasyonudur.</p>
            </div>

            <div className="flex gap-5 opacity-60">
              <Settings className="text-slate-400 shrink-0 mt-1" size={32} />
              <p className="text-slate-300 text-lg md:text-xl leading-snug font-medium">Duygu analizi veya müşteri portalı ikinci plandadır.</p>
            </div>
          </div>
        </div>

        {/* Right Column: RICE Score Calculator */}
        <div className="w-full xl:w-2/3 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-[#334155] rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
          {/* Glassmorphism Background Decoration */}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3"></div>

          <div className="bg-gradient-to-r from-yellow-600/30 via-yellow-500/20 to-transparent border border-yellow-500/30 rounded-2xl p-5 text-center mb-10 shadow-lg relative z-10 w-full max-w-2xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-black text-white drop-shadow-md">RICE Skoru Neden {finalScore}?</h4>
          </div>

          {/* Interactive Parameters List */}
          <div className="space-y-4 flex-1 mb-10 relative z-10">
            
            {/* Reach */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 px-2 hover:bg-slate-800/40 rounded-2xl transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h5 className="text-2xl font-bold text-white drop-shadow-md">Reach <span className="text-slate-400 font-medium">(Erişim):</span></h5>
                  <span className="text-yellow-400 font-black text-xl bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">Değer: {reach}</span>
                </div>
                <p className="text-slate-300 text-lg md:text-xl">Aktif sevkiyat yapan <strong className="text-white">{reach}</strong> kurumsal mağaza noktası hedeflendi.</p>
              </div>
              <input type="range" min="100" max="2000" step="100" value={reach} onChange={(e) => setReach(Number(e.target.value))} className="w-full md:w-48 appearance-none h-2 bg-slate-700 rounded-full outline-none accent-yellow-500" />
            </div>

            <div className="flex justify-center -my-2 text-yellow-500 opacity-80"><X strokeWidth={3} /></div>

            {/* Impact */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 px-2 hover:bg-slate-800/40 rounded-2xl transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h5 className="text-2xl font-bold text-white drop-shadow-md">Impact <span className="text-slate-400 font-medium">(Etki):</span></h5>
                  <span className="text-yellow-400 font-black text-xl bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">Değer: {impact}</span>
                </div>
                <p className="text-slate-300 text-lg md:text-xl">Nakliye hasar firelerini engelleyeceğinden Maksimum <strong className="text-white">"{impact}"</strong> değeri aldı.</p>
              </div>
              <input type="range" min="1" max="5" step="1" value={impact} onChange={(e) => setImpact(Number(e.target.value))} className="w-full md:w-48 appearance-none h-2 bg-slate-700 rounded-full outline-none accent-yellow-500" />
            </div>

            <div className="flex justify-center -my-2 text-yellow-500 opacity-80"><X strokeWidth={3} /></div>

            {/* Confidence */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 px-2 hover:bg-slate-800/40 rounded-2xl transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h5 className="text-2xl font-bold text-white drop-shadow-md">Confidence <span className="text-slate-400 font-medium">(Güven):</span></h5>
                  <span className="text-yellow-400 font-black text-xl bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">Değer: {confidence.toFixed(1)}</span>
                </div>
                <p className="text-slate-300 text-lg md:text-xl">Fotoğraflı kanıt olacağından yanılma payı tamamen %0.</p>
              </div>
              <input type="range" min="0.1" max="1.0" step="0.1" value={confidence} onChange={(e) => setConfidence(Number(e.target.value))} className="w-full md:w-48 appearance-none h-2 bg-slate-700 rounded-full outline-none accent-yellow-500" />
            </div>

            <div className="flex justify-center -my-2 text-yellow-500 opacity-80"><Divide strokeWidth={3} /></div>

            {/* Effort */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 px-2 hover:bg-slate-800/40 rounded-2xl transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h5 className="text-2xl font-bold text-white drop-shadow-md">Effort <span className="text-slate-400 font-medium">(Efor):</span></h5>
                  <span className="text-yellow-400 font-black text-xl bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">Değer: {effort}</span>
                </div>
                <p className="text-slate-300 text-lg md:text-xl">1 Yazılımcı ve 1 Analistle sadece <strong className="text-white">{effort} Kişi/Ay</strong> sürecektir.</p>
              </div>
              <input type="range" min="1" max="12" step="1" value={effort} onChange={(e) => setEffort(Number(e.target.value))} className="w-full md:w-48 appearance-none h-2 bg-slate-700 rounded-full outline-none accent-yellow-500" />
            </div>

          </div>

          <div className="bg-[#1e293b] border-2 border-[#475569] rounded-2xl p-6 md:p-8 text-center transform hover:scale-[1.02] transition-transform shadow-2xl relative z-10 w-full lg:w-[90%] mx-auto">
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter">
                {reach} <span className="text-yellow-500 text-3xl lg:text-5xl">x</span> {impact} <span className="text-yellow-500 text-3xl lg:text-5xl">x</span> {confidence.toFixed(1)} <span className="text-yellow-500 text-3xl lg:text-5xl">/</span> {effort} = <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">{finalScore}</span>
             </h2>
          </div>
        </div>

      </div>

      <div className="mt-8 bg-gradient-to-r from-[#1c322b] to-[#1e293b] border-l-8 border-l-emerald-500 border border-[#2d4a3e] rounded-r-2xl p-6 shadow-xl">
        <p className="text-slate-200 font-medium text-lg md:text-xl text-center leading-relaxed">
          Yönetim Kurulu raporunda; <strong className="text-emerald-400 text-2xl mx-1">{finalScore}</strong> skorunun minimum harcama ile maksimum finansal kaybı (fireler) önlediğinin en büyük matematiksel kanıtı olduğu vurgulanmıştır.
        </p>
      </div>

    </div>
  );
}
