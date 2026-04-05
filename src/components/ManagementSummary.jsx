import { CheckCircle, Zap, Shield, XCircle, MessageSquare, BookOpen, Users, TrendingDown } from 'lucide-react';

export default function ManagementSummary() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6 mt-2">
        
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
              <div className="mb-2">
                <p className="text-white text-sm font-semibold leading-relaxed mb-1">
                  • CRM & Geri Bildirim Paneli <a href="https://etap-erp-musteri.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline text-xs font-normal ml-1">etap-erp-musteri.vercel.app</a>
                </p>
                <p className="text-slate-400 text-xs leading-relaxed pl-3">
                  Verinin <span className="text-green-400 font-medium">"kişilerin hafızasında"</span> kalmasını engelleyip sisteme girmesini sağlar. Manuel süreçlerdeki %18'lik bekleme süresini ve veri kayıplarını sıfırlamak için kritiktir.
                </p>
              </div>
            </div>

            {/* SHOULD HAVE */}
            <div className="p-5 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent hover:bg-blue-500/15 hover:border-blue-400 hover:shadow-[0_10px_25px_rgba(59,130,246,0.15)] transition-all duration-300 ease-in-out cursor-default">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-blue-500 font-black uppercase text-xs tracking-widest">
                  <Shield size={18} /> Should Have
                </div>
                <span className="text-[10px] text-blue-400/70 font-semibold uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">Olsa Çok İyi Olur</span>
              </div>
              <div className="mb-3">
                <p className="text-white text-sm font-semibold leading-relaxed mb-1">• Dijital Yetenek ve Eğitim Modülleri</p>
                <p className="text-slate-400 text-xs leading-relaxed pl-3">
                  Mevcut dinamik iş gücünü verimli kullanmak için gereklidir ancak bir hafta gecikmesi şirketi durdurmaz.
                </p>
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-relaxed mb-1">• Kurumsal İletişim Yazılımları</p>
                <p className="text-slate-400 text-xs leading-relaxed pl-3">
                  Lokasyonlar arası kopukluğu gidererek operasyonel hızı artırır.
                </p>
              </div>
            </div>

            {/* COULD HAVE */}
            <div className="p-5 rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent hover:bg-yellow-500/15 hover:border-yellow-400 hover:shadow-[0_10px_25px_rgba(234,179,8,0.15)] transition-all duration-300 ease-in-out cursor-default">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-yellow-500 font-black uppercase text-xs tracking-widest">
                  <Zap size={18} /> Could Have
                </div>
                <span className="text-[10px] text-yellow-400/70 font-semibold uppercase tracking-wider bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-500/20">Vakit/Bütçe Kalırsa</span>
              </div>
              <div className="mb-3">
                <p className="text-white text-sm font-semibold leading-relaxed mb-1">• Akıllı Lojistik ve Drone Destekli Takip</p>
                <p className="text-slate-400 text-xs leading-relaxed pl-3">
                  Verimliliği artırır ama ana sistemler (Must/Should) tamamlanmadan lüks kaçabilir.
                </p>
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-relaxed mb-1">• Global Tedarik Ağı Genişletme</p>
                <p className="text-slate-400 text-xs leading-relaxed pl-3">
                  Mevcut ağ yeterliyse, bu uzun vadeli bir büyüme fırsatıdır.
                </p>
              </div>
            </div>

            {/* WON'T HAVE */}
            <div className="p-5 rounded-xl border border-slate-600/30 bg-gradient-to-br from-slate-600/10 to-transparent hover:bg-slate-600/20 hover:border-slate-500 hover:shadow-[0_10px_25px_rgba(148,163,184,0.1)] transition-all duration-300 ease-in-out cursor-default">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-slate-400 font-black uppercase text-xs tracking-widest">
                  <XCircle size={18} /> Won't Have
                </div>
                <span className="text-[10px] text-slate-400/70 font-semibold uppercase tracking-wider bg-slate-600/10 px-2 py-0.5 rounded-full border border-slate-600/20">Şu An Gündem Dışı</span>
              </div>
              <div>
                <p className="text-slate-300 text-sm font-semibold leading-relaxed mb-1">• Büyük Ölçekli Öz Mal Tesis İnşası</p>
                <p className="text-slate-500 text-xs leading-relaxed pl-3">
                  Ekonomik riskler ve maliyet nedeniyle şu aşamada doğrudan tesis satın almak risklidir.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Solution Impact List */}
        <div className="bg-anadolu-card border border-slate-800 rounded-2xl p-8 shadow-xl flex flex-col justify-start">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Ya Çözersek?</h3>
            <p className="text-sm text-anadolu-muted">Sürecin dijitalleşmesiyle elde edilecek temel kazanımlar ve uzun vadeli etkiler.</p>
          </div>

          <div className="flex flex-col gap-4">
            
            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-700/50 bg-[#0f172a] hover:border-slate-500 transition-all duration-300">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Firmalar Arası İletişim</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Ekosistemdeki paydaşlarla gerçek zamanlı, şeffaf ve kesintisiz bilgi akışı sağlanır.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-700/50 bg-[#0f172a] hover:border-slate-500 transition-all duration-300">
              <div className="p-2 bg-green-500/10 rounded-lg text-green-400 shrink-0">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Çalışanlara Teknoloji Eğitimi</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Personele dijital yetkinlik kazandırılarak operasyonel adaptasyon hızlandırılır.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-700/50 bg-[#0f172a] hover:border-slate-500 transition-all duration-300">
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400 shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Firmaları Şirkete Adapte Etmek</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Yeni süreçler sayesinde iş ortaklarının kurumsal standartlarımıza uyumu kolaylaşır.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-700/50 bg-[#0f172a] hover:border-slate-500 transition-all duration-300">
              <div className="p-2 bg-red-500/10 rounded-lg text-red-400 shrink-0">
                <TrendingDown size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Churn Algısı ve Müşteri Kaybı</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Süreç iyileştirmesiyle memnuniyet artar ve müşteri kayıplarında (churn) ciddi düşüş yaşanır.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
