import { Users, Target, Compass, Sparkles } from 'lucide-react';

export default function ProjectTeam() {
  const team = [
    { name: "Nihat Kütükoğlu", role: "Junior Business Analyst" },
    { name: "Filiz Öçgel", role: "Junior Business Analyst" },
    { name: "Kaan Berke Ergüden", role: "Junior Business Analyst" }
  ];

  return (
    <div className="w-full mt-2 pb-10">
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <Sparkles className="text-blue-500 drop-shadow-md" size={32} /> Proje ve Ekip Tanıtımı
        </h3>
        <p className="text-anadolu-muted mt-2 text-sm max-w-3xl">Tarım sektöründeki operasyonel karmaşayı teknoloji ile çözme vizyonu doğrultusunda oluşturulan stratejik yönetim sunumu.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-anadolu-card border-t-4 border-t-blue-500 border border-slate-800 rounded-2xl p-8 shadow-xl transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(59,130,246,0.1)] transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-blue-500 group-hover:scale-110 transition-transform" size={24} />
            <h4 className="text-xl font-bold text-white">Vizyonumuz</h4>
          </div>
          <p className="text-slate-300 leading-relaxed font-medium">
            Dijital dönüşüm stratejilerini tarımsal süreçlere taşıyarak, veriye dayalı karar alma mekanizması ile endüstri liderliğini geleceğe ve yeniliğe taşımak.
          </p>
        </div>

        <div className="bg-anadolu-card border-t-4 border-t-purple-500 border border-slate-800 rounded-2xl p-8 shadow-xl transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(168,85,247,0.1)] transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="text-purple-500 group-hover:scale-110 transition-transform" size={24} />
            <h4 className="text-xl font-bold text-white">Misyonumuz</h4>
          </div>
          <p className="text-slate-300 leading-relaxed font-medium">
            Operasyonel darboğazları teknolojik altyapılarla hızlıca çözüp, süreç maliyetlerini minimize ederken müşteri ve çalışan memnuniyetini maksimize etmek.
          </p>
        </div>
      </div>

      <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 mb-12 relative overflow-hidden group hover:bg-slate-800/50 transition-colors duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500"></div>
        <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Neden Bu Şirket?</h4>
        <p className="text-slate-300 leading-relaxed text-lg max-w-4xl relative z-10">
          Tarım sektöründeki en köklü firmalardan biri olan Anadolu Etap, giderek artan operasyonel ağırlığa ve pazar koşullarına ayak uydurabilmek için dijitalleşmek zorundadır. <strong className="text-white">Gerçekleştirdiğimiz analizlerde tespit edilen süreç kayıpları</strong>, şirket vizyonunun önünde en büyük engeldir. Bizler, ERP entegrasyonundan otomasyonlara kadar genişleyen teknolojik spektrumumuzla bu karmaşayı sadeliğe ve karlılığa dönüştürmeyi amaçlıyoruz.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-8">
          <Users className="text-slate-400" size={28} />
          <h4 className="text-2xl font-bold text-white">Proje Ekibimiz</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-anadolu-card border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center text-center transform hover:scale-105 hover:border-blue-500/50 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] transition-all duration-300 group cursor-default">
              <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-5 border-2 border-slate-600 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <span className="text-3xl font-black text-slate-400 group-hover:text-blue-400 transition-colors duration-300">{member.name.charAt(0)}</span>
              </div>
              <h5 className="text-lg font-bold text-white mb-2 tracking-wide">{member.name}</h5>
              <div className="bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-blue-500/20">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
