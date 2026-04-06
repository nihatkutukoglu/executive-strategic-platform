import { CheckCircle, Zap, Shield, XCircle, TrendingUp, Smile, Star } from 'lucide-react';
import { motion } from 'framer-motion';

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

          <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden rounded-xl border border-slate-700/50 bg-[#0a0f1c] min-h-[350px]">
            {/* Background glowing effects */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.05, 0.2, 0.05] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent pointer-events-none"
            />
            
            <div className="relative z-10 w-full flex flex-col items-center h-full justify-between mt-4">
              
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center w-full"
              >
                 <h4 className="text-emerald-400 font-bold text-xl flex items-center justify-center gap-3 mb-2 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                   <TrendingUp size={28} />
                   Müşteri Memnuniyetinde Kesintisiz Artış
                 </h4>
                 <p className="text-slate-400 text-sm">Dijital dönüşüm ile şikâyetlerin proaktif çözümü</p>
              </motion.div>

              <div className="flex items-end justify-center w-full flex-1 gap-3 md:gap-5 my-8 min-h-[160px]">
                {[45, 52, 60, 68, 85, 98].map((val, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${val}%`, opacity: 1 }}
                    transition={{ duration: 1.2, delay: i * 0.15, type: "spring", stiffness: 50 }}
                    className={`w-10 md:w-14 rounded-t-lg relative flex justify-center ${i === 5 ? 'bg-gradient-to-t from-emerald-600 to-green-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]' : 'bg-slate-700/40 border-t border-slate-600/50'}`}
                  >
                     {i === 5 && (
                        <motion.div 
                           initial={{ scale: 0, opacity: 0, y: 10 }}
                           animate={{ scale: 1, opacity: 1, y: 0 }}
                           transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                           className="absolute -top-10 text-emerald-300 font-black text-2xl flex flex-col items-center drop-shadow-lg"
                        >
                          <span>%{val}</span>
                        </motion.div>
                     )}
                     <div className="absolute -bottom-7 text-slate-500 font-medium text-xs">
                        Ay {i+1}
                     </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="w-full max-w-sm bg-slate-800/80 rounded-xl p-4 border border-emerald-500/30 flex items-center justify-between shadow-xl mt-6 relative overflow-hidden group"
              >
                 <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors pointer-events-none"></div>
                 <div className="flex items-center gap-3 relative z-10">
                   <div className="p-3 bg-emerald-500/20 rounded-full text-emerald-400">
                     <Smile size={24} />
                   </div>
                   <div>
                     <p className="text-emerald-300 font-bold text-[15px]">Sadık Müşteri (Retention)</p>
                     <p className="text-slate-400 text-[11px] uppercase tracking-wider mt-1">Churn Oranında Radikal Düşüş</p>
                   </div>
                 </div>
                 
                 <div className="flex gap-1 relative z-10">
                   {[1,2,3,4,5].map(star => (
                     <motion.div
                       key={star}
                       initial={{ opacity: 0, scale: 0, rotate: -45 }}
                       animate={{ opacity: 1, scale: 1, rotate: 0 }}
                       transition={{ delay: 2.5 + (star * 0.1), type: "spring" }}
                       className="text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]"
                     >
                       <Star size={16} fill="currentColor" />
                     </motion.div>
                   ))}
                 </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
