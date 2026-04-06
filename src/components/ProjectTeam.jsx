import { Users, Target, Compass, Sparkles, Building2, MapPin, Info, Factory, Leaf, TreePine, Sprout, Apple, Droplets, Sun, Package } from 'lucide-react';

export default function ProjectTeam() {
  const team = [
    { name: "Filiz Öçgel", role: "Junior Business Analyst", image: "/filiz.jpg" },
    { name: "Kaan Berke Ergüden", role: "Junior Business Analyst", image: "/kaan.jpg" },
    { name: "Nihat Kütükoğlu", role: "Junior Business Analyst", image: "/nihat.jpg" }
  ];

  return (
    <div className="w-full mt-2 pb-10">
      
      {/* 1. BÖLÜM: EKİP ÜYELERİ */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-8">
          <Users className="text-blue-500" size={28} />
          <h3 className="text-3xl font-bold text-white tracking-tight">1. BÖLÜM: EKİP ÜYELERİ</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-anadolu-card border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center text-center transform hover:scale-105 hover:border-blue-500/50 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] transition-all duration-300 group cursor-default">
              <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-5 border-2 border-slate-600 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h5 className="text-lg font-bold text-white mb-2 tracking-wide">{member.name}</h5>
              <div className="bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-blue-500/20">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. BÖLÜM: ŞİRKET TANITIMI (HERO SECTION) */}
      <div className="mb-14 relative w-full overflow-hidden rounded-[2.5rem] border border-slate-700/50 shadow-2xl">
        {/* Background Image Container */}
        <div className="absolute inset-x-0 top-0 h-[60%] bg-slate-900 z-0">
          <img src="/orchard_background.png" alt="Anadolu Etap Tarlalar" className="w-full h-full object-cover object-top opacity-[0.35] mix-blend-luminosity" />
          {/* Gradient to smooth out the image into the background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/10 via-[#0a0f1c]/70 to-[#0a0f1c] z-10 pointer-events-none"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-20 px-4 sm:px-10 py-16 flex flex-col items-center">
          
          {/* Top Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,1)] mb-3">
              ANADOLU ETAP
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-green-400 tracking-wide drop-shadow-md">
              Sağlıklı Nesiller İçin Sağlıklı Meyveler
            </h3>
          </div>

          {/* Vision & Mission Cards */}
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center mb-20 relative z-30">
             <div className="flex-1 bg-slate-900/60 backdrop-blur-xl border border-slate-500/40 rounded-3xl p-6 flex items-center gap-5 shadow-2xl group hover:bg-slate-800/80 transition-all hover:border-green-500/40">
               <div className="p-4 bg-green-500/20 rounded-2xl text-green-400 group-hover:scale-110 group-hover:bg-green-500/30 transition-transform flex-shrink-0 border border-green-500/20">
                 <Target size={32} />
               </div>
               <div>
                 <h4 className="text-white font-bold text-lg mb-1 tracking-widest shrink-0 uppercase drop-shadow-sm">VİZYON</h4>
                 <p className="text-slate-300 text-sm leading-relaxed shrink block">Avrupa’nın önde gelen meyve suyu ve taze meyve firmalarından biri olmak.</p>
               </div>
             </div>

             <div className="flex-1 bg-slate-900/60 backdrop-blur-xl border border-slate-500/40 rounded-3xl p-6 flex items-center gap-5 shadow-2xl group hover:bg-slate-800/80 transition-all hover:border-green-500/40">
               <div className="p-4 bg-green-500/20 rounded-2xl text-green-400 group-hover:scale-110 group-hover:bg-green-500/30 transition-transform flex-shrink-0 border border-green-500/20">
                 <Leaf size={32} />
               </div>
               <div>
                 <h4 className="text-white font-bold text-lg mb-1 tracking-widest shrink-0 uppercase drop-shadow-sm">MİSYON</h4>
                 <p className="text-slate-300 text-sm leading-relaxed shrink block">Sağlıklı nesiller için sağlıklı meyveler yetiştirmek.</p>
               </div>
             </div>
          </div>

          {/* Strategic Merger Diagram */}
          <div className="w-full max-w-5xl flex flex-col items-center mb-20 relative">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-16 tracking-wide text-center">
              Başarının Formülü: <span className="text-slate-300 font-medium">2009 Stratejik Birleşmesi</span>
            </h4>

            <div className="flex flex-col md:flex-row justify-between w-full relative z-10 gap-10 md:gap-0">
              
              {/* Anadolu */}
              <div className="md:w-[40%] xl:w-[35%] flex flex-col items-center md:items-end text-center md:text-right relative z-20 bg-[#0a0f1c]/50 p-4 md:p-0 rounded-xl md:bg-transparent">
                 <h5 className="text-3xl font-black text-white tracking-widest mb-1 drop-shadow">ANADOLU</h5>
                 <p className="text-slate-400 text-xs tracking-wider mb-5">Anadolu Grubu (Efes, Migros, Isuzu)</p>
                 <ul className="space-y-3 text-slate-300 text-[13px] font-medium leading-loose">
                   <li className="flex items-center md:justify-end gap-3 text-right">Yerli ve milli sermaye gücü. <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span></li>
                   <li className="flex items-center md:justify-end gap-3 text-right">Toprağa bağlı karakter. <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span></li>
                   <li className="flex items-center md:justify-end gap-3 text-right">Felsefe: Anadolu topraklarından aldığını<br/>yine bu topraklara yatırma. <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span></li>
                 </ul>
              </div>

              {/* SVG Connecting Lines - hidden on small screens */}
              <div className="hidden md:block absolute top-[5.5rem] left-[25%] right-[25%] h-32 pointer-events-none z-0">
                 <svg width="100%" height="100%" viewBox="0 0 400 150" fill="none" preserveAspectRatio="none">
                   {/* Left branching down */}
                   <path d="M 0 0 C 150 0 150 120 180 150" stroke="#34d399" strokeWidth="3" strokeDasharray="6 6" fill="transparent"/>
                   {/* Right branching down */}
                   <path d="M 400 0 C 250 0 250 120 220 150" stroke="#34d399" strokeWidth="3" strokeDasharray="6 6" fill="transparent"/>
                 </svg>
              </div>

              {/* Etap */}
              <div className="md:w-[40%] xl:w-[35%] flex flex-col items-center md:items-start text-center md:text-left relative z-20 bg-[#0a0f1c]/50 p-4 md:p-0 rounded-xl md:bg-transparent">
                 <h5 className="text-3xl font-black text-white tracking-widest mb-1 drop-shadow">ETAP</h5>
                 <p className="text-slate-400 text-xs tracking-wider mb-5">Özgörkey Holding & Etap Tarım (1990'lar)</p>
                 <ul className="space-y-3 text-slate-300 text-[13px] font-medium leading-loose">
                   <li className="flex items-center md:justify-start gap-3"><span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span> Köklü tarım sektörü mirası.</li>
                   <li className="flex items-center md:justify-start gap-3"><span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span> Marka sürekliliği.</li>
                   <li className="flex items-center md:justify-start gap-3"><span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span> Derin teknik bilgi birikimi ve tecrübe.</li>
                 </ul>
              </div>

            </div>

            {/* Bottom Merge Box */}
            <div className="mt-8 md:mt-2 w-full max-w-sm flex flex-col items-center relative z-20">
               {/* Cutrale Addition Component */}
               <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl px-5 py-3.5 mb-2 shadow-xl text-center relative w-[85%] mx-auto block xl:translate-y-2">
                 <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-green-500/50"></div>
                 <p className="text-slate-300 text-xs leading-relaxed font-medium">
                   <span className="text-green-400 font-bold text-lg leading-none">+</span> Brezilyalı meyve devi Cutrale'nin küresel vizyon ortaklığı.
                 </p>
               </div>

               {/* Birth of Brand Result */}
               <div className="bg-gradient-to-br from-[#0f172a] to-slate-900 border-x-2 border-b-2 border-t-4 border-slate-700 border-t-green-500 rounded-2xl p-6 shadow-[0_0_35px_rgba(34,197,94,0.15)] text-center w-full relative overflow-hidden mt-1">
                 <div className="absolute inset-0 bg-green-500/5"></div>
                 <h6 className="text-[19px] md:text-xl font-bold text-white tracking-widest leading-normal relative z-10">
                   <strong className="text-green-400 font-black text-2xl drop-shadow-md">ANADOLU ETAP</strong><br/>
                   <span className="opacity-80">markasının doğuşu.</span>
                 </h6>
               </div>
            </div>
            
          </div>

          {/* Operational Meaning Timeline */}
          <div className="w-full max-w-4xl flex flex-col items-center pt-10 mt-6 relative before:content-[''] before:absolute before:top-0 before:left-[10%] before:right-[10%] before:h-px before:bg-gradient-to-r before:from-transparent before:via-slate-700 before:to-transparent">
            <h4 className="text-xl md:text-[22px] font-bold text-white mb-12 tracking-wide text-center">
              "Etap" Kelimesinin Operasyonel Anlamı
            </h4>

            {/* Timeline graphics */}
            <div className="flex w-full items-center justify-between relative px-2 md:px-16 mb-8 mt-2">
              {/* Thick Glowing Connecting Line */}
              <div className="absolute left-[15%] right-[15%] top-1/2 -translate-y-1/2 h-2.5 bg-gradient-to-r from-emerald-500/30 via-green-400 to-emerald-500/30 rounded-full z-0 shadow-[0_0_20px_rgba(74,222,128,0.7)] group-hover:scale-y-110 transition-transform"></div>
              
              {/* Tarladan */}
              <div className="relative z-10 flex flex-col items-center group w-1/3">
                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900 border-4 border-green-500/80 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)] mb-5 group-hover:scale-110 transition-all duration-300 relative">
                   <div className="absolute inset-0 bg-green-500/10 rounded-full blur-md"></div>
                   <Sprout size={36} className="text-green-400 relative z-10" />
                 </div>
                 <span className="text-white font-bold tracking-widest text-[13px] md:text-base border border-slate-700/50 bg-[#0f172a] px-4 py-1 rounded-full shadow-lg">Tarladan</span>
              </div>

              {/* Pakete */}
              <div className="relative z-10 flex flex-col items-center group w-1/3">
                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900 border-4 border-green-400 flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.4)] mb-5 group-hover:scale-110 transition-all duration-300 relative">
                   <div className="absolute inset-0 bg-green-400/10 rounded-full blur-md"></div>
                   <Package size={36} className="text-green-300 relative z-10" />
                 </div>
                 <span className="text-white font-bold tracking-widest text-[13px] md:text-base border border-slate-700/50 bg-[#0f172a] px-4 py-1 rounded-full shadow-lg">Pakete</span>
              </div>

              {/* Sofraya */}
              <div className="relative z-10 flex flex-col items-center group w-1/3">
                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900 border-4 border-green-500/80 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)] mb-5 group-hover:scale-110 transition-all duration-300 relative">
                   <div className="absolute inset-0 bg-green-500/10 rounded-full blur-md"></div>
                   <Apple size={36} className="text-green-400 relative z-10" />
                 </div>
                 <span className="text-white font-bold tracking-widest text-[13px] md:text-base border border-slate-700/50 bg-[#0f172a] px-4 py-1 rounded-full shadow-lg">Sofraya</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm md:text-[15px] italic tracking-wide text-center max-w-2xl mt-4 bg-slate-800/30 py-3 px-6 rounded-2xl border border-slate-700/30">
              Meyvenin tüm etaplarını tek elden yöneten, Türkiye'nin entegre taze meyve ve paketleme gücü.
            </p>
          </div>

        </div>
      </div>

        {/* 2.1 ÜRETİM FAALİYETLERİ (ŞEKİLLİ KPI VERİLERİ) */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-2 border-b border-slate-800 pb-3 uppercase tracking-wider">
            Anadolu Etap Üretim Faaliyetleri
          </h4>
          
          {/* Ana Dev KPI Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-900/40 border border-green-500/30 rounded-3xl p-8 flex items-center justify-between shadow-[0_0_30px_rgba(34,197,94,0.15)] group hover:from-green-500/30 transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="relative z-10">
                <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2 drop-shadow-md">Toplam Tarım Arazisi</p>
                <h2 className="text-5xl lg:text-6xl font-black text-white drop-shadow-xl">22.500 <span className="text-3xl text-green-500 font-bold">Dekar</span></h2>
              </div>
              <div className="hidden sm:flex w-24 h-24 rounded-full bg-green-500/10 items-center justify-center border border-green-500/20 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500 relative z-10">
                <Leaf className="text-green-400" size={48} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-900/40 border border-blue-500/30 rounded-3xl p-8 flex items-center justify-between shadow-[0_0_30px_rgba(59,130,246,0.15)] group hover:from-blue-500/30 transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="relative z-10">
                <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2 drop-shadow-md">Ulusal Üretim Ağı</p>
                <h2 className="text-5xl lg:text-6xl font-black text-white drop-shadow-xl">5 <span className="text-3xl text-blue-500 font-bold">Farklı Bölge</span></h2>
              </div>
              <div className="hidden sm:flex w-24 h-24 rounded-full bg-blue-500/10 items-center justify-center border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 relative z-10">
                <MapPin className="text-blue-400" size={48} />
              </div>
            </div>
          </div>

          {/* Çiftlik Detayları (Grid Kartlar) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Kumkale */}
            <div className="relative overflow-hidden bg-[#0f172a] border border-slate-700/50 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 group hover:border-green-500/50 hover:shadow-[0_15px_30px_rgba(34,197,94,0.1)]">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h5 className="font-black text-white text-xl mb-1 tracking-wide">Kumkale Çiftliği</h5>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="text-red-400" size={16} />
                    <span className="text-sm font-bold uppercase tracking-wider text-red-400">Çanakkale</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-green-400 group-hover:scale-110 transition-transform">
                  <TreePine size={24} />
                </div>
              </div>
              <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 font-black mb-4 relative z-10 drop-shadow-lg">6.200 <span className="text-lg text-slate-300 uppercase tracking-widest">Dekar</span></p>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 flex gap-2 flex-wrap relative z-10">
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Şeftali</span>
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Nektarin</span>
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Kayısı</span>
              </div>
            </div>

            {/* Tahirova */}
            <div className="relative overflow-hidden bg-[#0f172a] border border-slate-700/50 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 group hover:border-green-500/50 hover:shadow-[0_15px_30px_rgba(34,197,94,0.1)]">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h5 className="font-black text-white text-xl mb-1 tracking-wide">Tahirova Çiftliği</h5>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="text-blue-400" size={16} />
                    <span className="text-sm font-bold uppercase tracking-wider text-blue-400">Balıkesir</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-green-400 group-hover:scale-110 transition-transform">
                  <Sprout size={24} />
                </div>
              </div>
              <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 font-black mb-4 relative z-10 drop-shadow-lg">10.000 <span className="text-lg text-slate-300 uppercase tracking-widest">Dekar</span></p>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 flex gap-2 flex-wrap relative z-10">
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Elma</span>
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Armut</span>
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Kiraz</span>
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Erik vb.</span>
              </div>
            </div>

            {/* Karapınar */}
            <div className="relative overflow-hidden bg-[#0f172a] border border-slate-700/50 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 group hover:border-green-500/50 hover:shadow-[0_15px_30px_rgba(34,197,94,0.1)]">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h5 className="font-black text-white text-xl mb-1 tracking-wide">Karapınar Çiftliği</h5>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="text-yellow-500" size={16} />
                    <span className="text-sm font-bold uppercase tracking-wider text-yellow-500">Konya</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-green-400 group-hover:scale-110 transition-transform">
                  <Apple size={24} />
                </div>
              </div>
              <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 font-black mb-4 relative z-10 drop-shadow-lg">3.500 <span className="text-lg text-slate-300 uppercase tracking-widest">Dekar</span></p>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 flex gap-2 flex-wrap relative z-10">
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Elma (3 Arazi)</span>
              </div>
            </div>

            {/* Kıralan */}
            <div className="relative overflow-hidden bg-[#0f172a] border border-slate-700/50 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 group hover:border-green-500/50 hover:shadow-[0_15px_30px_rgba(34,197,94,0.1)]">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h5 className="font-black text-white text-xl mb-1 tracking-wide">Kıralan Çiftliği</h5>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="text-cyan-400" size={16} />
                    <span className="text-sm font-bold uppercase tracking-wider text-cyan-400">Denizli</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-green-400 group-hover:scale-110 transition-transform">
                  <Droplets size={24} />
                </div>
              </div>
              <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 font-black mb-4 relative z-10 drop-shadow-lg">1.600 <span className="text-lg text-slate-300 uppercase tracking-widest">Dekar</span></p>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 flex gap-2 flex-wrap relative z-10">
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Vişne</span>
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Kiraz</span>
              </div>
            </div>

            {/* Ceyhan */}
            <div className="relative overflow-hidden bg-[#0f172a] border border-slate-700/50 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 group hover:border-green-500/50 hover:shadow-[0_15px_30px_rgba(34,197,94,0.1)]">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h5 className="font-black text-white text-xl mb-1 tracking-wide">Ceyhan Çiftliği</h5>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="text-orange-400" size={16} />
                    <span className="text-sm font-bold uppercase tracking-wider text-orange-400">Adana</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-green-400 group-hover:scale-110 transition-transform">
                  <Sun size={24} />
                </div>
              </div>
              <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 font-black mb-4 relative z-10 drop-shadow-lg">1.200 <span className="text-lg text-slate-300 uppercase tracking-widest">Dekar</span></p>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 flex gap-2 flex-wrap relative z-10">
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Şeftali</span>
                <span className="text-xs font-bold text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded-md">Nektarin</span>
              </div>
            </div>
            
          </div>
      </div>
    </div>
  )
}
