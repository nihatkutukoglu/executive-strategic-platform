import { Users, Target, Compass, Sparkles, Building2, MapPin, Info, Factory, Leaf, TreePine, Sprout, Apple, Droplets, Sun } from 'lucide-react';

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

      {/* 2. BÖLÜM: ŞİRKET TANITIMI */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="text-blue-500" size={28} />
          <h3 className="text-3xl font-bold text-white tracking-tight">2. BÖLÜM: ŞİRKET TANITIMI</h3>
        </div>
        
        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          Anadolu Etap <strong className="text-blue-400">2009</strong> yılında kurulmuştur ve taze meyve üretim ile paketlemesi yapmaktadır.
        </p>

        {/* Vizyon & Misyon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-anadolu-card border-t-4 border-t-blue-500 border border-slate-800 rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(59,130,246,0.1)] transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="text-xl font-bold text-white">Vizyon</h4>
            </div>
            <p className="text-slate-300 leading-relaxed font-medium">
              Avrupa’nın önde gelen meyve suyu ve taze meyve firmalarından biri olmak.
            </p>
          </div>

          <div className="bg-anadolu-card border-t-4 border-t-green-500 border border-slate-800 rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(34,197,94,0.1)] transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="text-green-500 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="text-xl font-bold text-white">Misyon</h4>
            </div>
            <p className="text-slate-300 leading-relaxed font-medium">
              Sağlıklı nesiller için sağlıklı meyveler yetiştirmek.
            </p>
          </div>
        </div>

        {/* Şirket İsmi ve Kuruluş Hikayesi */}
        <div className="bg-[#0f172a] border border-slate-700/50 rounded-2xl p-8 mb-12 shadow-inner">
          <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Info className="text-purple-400" size={24} />
            Şirket İsmi ve Hikayesi
          </h4>
          
          <div className="space-y-6">
            <div>
              <h5 className="text-lg font-bold text-blue-300 mb-2">"Anadolu"</h5>
              <p className="text-slate-300 text-sm leading-relaxed">
                İsmin ilk kısmı, Türkiye’nin en köklü ve büyük holdinglerinden biri olan Anadolu Grubu'ndan (Efes, Migros, Isuzu gibi markaların sahibi) geliyor.<br/>
                <strong className="text-white mt-1 inline-block">Neden Önemli?</strong> Anadolu Grubu, bu projeye sadece sermaye değil, "Anadolu topraklarından aldığını yine bu topraklara yatırma" felsefesini getirdi. İsimdeki "Anadolu", projenin yerli, milli ve toprağa bağlı karakterini temsil ediyor.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-bold text-green-300 mb-2">Özgörkey Mirası: "Etap"</h5>
              <p className="text-slate-300 text-sm leading-relaxed">
                İsmin ikinci yarısı olan "Etap", Özgörkey Holding'in 1990'lı yıllardan beri faaliyet gösteren tarım ve meyve suyu konsantresi şirketi olan <strong>"Etap Tarım"</strong>dan geliyor.<br/>
                <strong className="text-white mt-1 inline-block">Geçmişin Gücü:</strong> Özgörkey ailesi, tarım sektöründe zaten bu isimle biliniyordu ve ciddi bir teknik bilgi birikimine sahipti. 2009 yılındaki ortaklık kurulurken, bu tecrübeyi ve markanın sürekliliğini korumak amacıyla "Etap" ismi muhafaza edildi.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold text-purple-300 mb-2">Stratejik Birleşim (2009)</h5>
              <p className="text-slate-300 text-sm leading-relaxed">
                Anadolu Grubu ve Brezilyalı meyve devi Cutrale, Özgörkey Holding’in elindeki Etap Tarım şirketine ortak oldular. Bu üçlü yapı (Anadolu + Özgörkey + Cutrale), şirketi büyütürken iki yerli ortağın ağırlığını yansıtmak adına <strong className="text-white">Anadolu Etap</strong> markasını doğurdu.
              </p>
            </div>

            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
              <h5 className="text-md font-bold text-yellow-500 mb-2 flex items-center gap-2">
                <Sparkles size={16} /> İsmin Sembolik Anlamı
              </h5>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "İsimdeki 'Etap' kelimesi, sadece eski şirkete bir gönderme değil; aynı zamanda Anadolu Etap'ın iş modelini de simgeliyor. Meyvenin tarladan paketlemeye, oradan sofraya kadar olan tüm 'etaplarını' (aşamalarını) tek elden yönettikleri için bu isim operasyonel yapılarıyla da mükemmel bir uyum içinde."
              </p>
            </div>

            <p className="text-slate-300 text-sm font-medium border-l-4 border-blue-500 pl-4 py-1">
              <strong className="text-white">Özetle:</strong> Anadolu Grubu’nun vizyonu ile Özgörkey’in tarım tecrübesinin tek bir isim altında toplanmış hali diyebiliriz.
            </p>
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

    </div>
  )
}
