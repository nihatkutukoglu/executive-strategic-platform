import { useState } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RootCauseAnalysis() {
  const [openIndex, setOpenIndex] = useState(0);

  const whys = [
    { question: "Neden üretim hattında gecikmeler yaşanıyor?", answer: "Hasat sonrası meyve bekleme süresi uzuyor, fabrika kabulünde yığılma oluşuyor. Kalite kontrol reddi geri dönüşlere neden oluyor." },
    { question: "Neden kalite kontrolünde yığılma oluyor?", answer: "Numune testleri ve onay süreçleri tamamen manuel. Her adımda ıslak imza bekleniyor, günde +40 dk e-posta kayıp süresi yaşanıyor." },
    { question: "Neden manuel onay ve ıslak imza zorunlu?", answer: "Roots sistemi %100 kapasite kullanımında çalışıyor ve dijital onay entegrasyonu mevcut değil. Ortalama 2 saat onay bekleme süresi var." },
    { question: "Neden dijital entegrasyon yapılmamış?", answer: "Tarım 4.0 ve dijital dönüşüm bütçesi ayrılmamış. Müşteri geri bildirim sistemi hâlâ manuel süreçlere bağlı (W5)." }
  ];

  /* 
   * KUSURSUZ SİMETRİ VE BAĞIMSIZ DOM RENDER MANTIĞI:
   * Omurga tam merkezdedir (%50).
   * Her kılçığın en/boy oranı, açısı ve X/Y kayması (offset) trigonometrik olarak hesaplanmış statik değerlerdir.
   * Kartlar KESİNLİKLE rotasyon almaz, böylece yazılar %100 jilet gibi keskin çıkar. (Blur = 0)
  */
  const layouts = [
    { id: 1, title: 'İnsan', position: 'top', origin: '25%', height: 160, angle: 35, xOffset: 92, yOffset: 131, data: ['İşçi yorgunluğu (Fazla mesai)', 'Operatör hatası (Eğitim eksikliği)'], color: 'from-blue-500 to-cyan-400', glow: 'rgba(56,189,248,0.5)' },
    { id: 2, title: 'Makine', position: 'top', origin: '55%', height: 160, angle: 35, xOffset: 92, yOffset: 131, data: ['Paketleme makinesinde arıza (Eski makine)', 'Etiketleme hatası (Sensör kirliliği)'], color: 'from-purple-500 to-pink-500', glow: 'rgba(217,70,239,0.5)' },
    { id: 3, title: 'Çevre', position: 'bottom', origin: '40%', height: 160, angle: 35, xOffset: 92, yOffset: 131, data: ['Depo nem oranının yüksekliği (Klima arızası)', 'Çalışma alanı dar (Kötü yerleşim)'], color: 'from-orange-500 to-amber-400', glow: 'rgba(251,191,36,0.5)' },
    { id: 4, title: 'Yöntem / Süreç', position: 'bottom', origin: '70%', height: 160, angle: 35, xOffset: 92, yOffset: 131, data: ['Manuel kalite kontrolü (Zaman kaybı)', 'İletişim kopukluğu (ERP entegrasyonu yok)'], color: 'from-emerald-500 to-green-400', glow: 'rgba(52,211,153,0.5)' },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  }

  return (
    <div className="w-full mt-2 pb-10">
      
      {/* 1. EPIK Balık Kılçığı Diyagramı (Ishikawa) */}
      <div className="bg-[#0a0f1c] border border-slate-800/80 rounded-3xl p-10 lg:p-14 shadow-2xl mb-12 relative overflow-hidden group">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="mb-4 relative z-10 w-[80%]">
          <h3 className="text-3xl font-bold text-white tracking-tight">Kök Neden Analizi (Ishikawa)</h3>
          <p className="text-anadolu-muted mt-2 text-sm">Darboğazların temel nedenlerini görselleştiren interaktif balık kılçığı matrisi.</p>
        </div>
        
        {/* The Graphic Canvas - min-h-[850px] ile tüm kartların ekrana DEHŞET BİR BOŞLUKLA sığması garantilendi! */}
        <div className="relative w-full min-h-[850px]">
          
          {/* Merkezi Omurga (Spine) - Kusursuz Dikey Merkezleme (top: 50%) */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }} 
            animate={{ width: 'calc(100% - 200px)', opacity: 1 }} 
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute top-1/2 left-0 h-3 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-l-full shadow-[0_0_25px_rgba(239,68,68,0.5)] z-10 -translate-y-1/2"
          >
            {/* Arrow Tip */}
            <div className="absolute right-[-2px] translate-x-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-red-600"></div>
          </motion.div>

          {/* Ana Sorun Kartı (Siparişte Gecikme) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="absolute top-1/2 right-0 z-40 -translate-y-1/2"
          >
            <div className="border border-red-500/50 bg-red-950/80 backdrop-blur-md shadow-[0_0_50px_rgba(239,68,68,0.7)] text-white p-6 rounded-3xl w-48 text-center flex flex-col items-center relative overflow-hidden">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-red-400 mb-2">Ana Sorun</span>
              <span className="text-xl font-black leading-tight drop-shadow-md text-white">Siparişte<br/>Gecikme</span>
            </div>
          </motion.div>

          {/* Independent Bones (Sadece Çapraz Çizgiler) */}
          {layouts.map((node, i) => {
            const isTop = node.position === 'top';
            return (
              <motion.div 
                key={`bone-${node.id}`} 
                initial={{ opacity: 0, scaleY: 0 }} 
                animate={{ opacity: 1, scaleY: 1 }} 
                transition={{ delay: 1.5 + i * 0.3, type: 'spring' }}
                className={`absolute w-1.5 z-20 bg-gradient-to-${isTop ? 't' : 'b'} ${node.color} rounded-full`}
                style={{ 
                  left: node.origin, 
                  [isTop ? 'bottom' : 'top']: '50%', // Üst kılçıklar alt noktasını merkez çizgisine (%50) koyar.
                  height: `${node.height}px`,
                  transformOrigin: isTop ? 'bottom center' : 'top center',
                  transform: `rotate(${isTop ? '-35deg' : '35deg'})`,
                  boxShadow: `0 0 10px ${node.glow}`
                }}
              />
            )
          })}
          
          {/* Independent Cards (Kusursuz Okunabilirlik - 0 Rotasyon) */}
          {layouts.map((node, i) => {
            const isTop = node.position === 'top';
            return (
              <motion.div
                key={`card-${node.id}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + i * 0.3, type: 'spring' }}
                className="absolute z-50"
                style={{
                  // Kemik ucuna tam isabet eden bağımsız koordinatlar
                  left: `calc(${node.origin} - ${node.xOffset}px)`,
                  top: `calc(50% ${isTop ? '-' : '+'} ${node.yOffset}px)`,
                  // Üst kartlar alttan kılçığa değer (-100%), Alt kartlar üstten değer (0%)
                  transform: `translate(-50%, ${isTop ? '-100%' : '0%'})`
                }}
              >
                <div className="bg-slate-900/95 border border-slate-700/60 p-5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.8)] min-w-[210px] w-max max-w-[260px] relative">
                  
                  <h4 className={`text-xl font-black mb-3 pb-2 border-b border-slate-700/50 bg-gradient-to-r ${node.color} bg-clip-text text-transparent flex items-center justify-between`}>
                    {node.title}
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${node.color} shadow-[0_0_10px_currentColor]`}></div>
                  </h4>
                  
                  <ul className="space-y-3 font-medium text-slate-300 w-full overflow-hidden">
                    {node.data.map((text, idx) => {
                      const [main, sub] = text.split('(');
                      return (
                        <li key={idx} className="flex gap-2.5 leading-relaxed items-start w-full">
                          <div className="mt-1.5 min-w-[6px] w-[6px] h-[6px] flex-shrink-0 rounded-full bg-slate-500"></div>
                          <div className="flex-1 min-w-0">
                            {/* Yazının taşmasını engelleyen jilet kesimi CSS kuralı */}
                            <span className="block text-[13.5px] font-semibold text-white truncate break-words line-clamp-2" style={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', whiteSpace: 'normal' }}>
                              {main.trim()}
                            </span>
                            {sub && (
                              <span className="block text-[11px] text-slate-400 mt-0.5 truncate break-words line-clamp-2" style={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', whiteSpace: 'normal' }}>
                                ({sub}
                              </span>
                            )}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                  
                </div>
              </motion.div>
            )
          })}

        </div>
      </div>

      {/* 2. 5 Neden (5 Whys) Akordeon */}
      <div className="bg-anadolu-card border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-red-500/10 rounded-max border border-red-500/20 shadow-lg rounded-2xl">
            <AlertCircle className="text-red-500" size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">5 Neden (5 Whys) Derinlemesine İnceleme</h3>
            <p className="text-anadolu-muted mt-1 text-sm">Üretim hattı darboğazlarının kök nedenine adım adım iniş.</p>
          </div>
        </div>

        <div className="space-y-4 relative z-10 w-full max-w-4xl mx-auto">
          {whys.map((why, index) => (
            <div key={index} className="border border-slate-700/50 rounded-2xl overflow-hidden bg-slate-800/30 transition-all hover:bg-slate-700/50 hover:shadow-lg hover:border-slate-600 duration-300 ease-in-out cursor-pointer" onClick={() => toggle(index)}>
              <div className="w-full flex justify-between items-center p-6">
                <div className="flex gap-4 items-center">
                  <span className="text-slate-500 font-bold text-xl">{index + 1}.</span>
                  <span className="font-semibold text-white text-lg">{why.question}</span>
                </div>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-anadolu-muted pl-16 border-l-2 border-red-500/30 ml-6 relative before:content-[''] before:absolute before:-left-2 before:top-2 before:w-4 before:h-px before:bg-red-500/30">
                  <p className="flex flex-col gap-1.5">
                    <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Tespit</span> 
                    <span className="text-slate-200 text-[15px]">{why.answer}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Kök Neden Cildi */}
          <div className="mt-8 border-2 border-red-500 bg-gradient-to-br from-red-500/10 to-red-900/10 rounded-2xl p-8 relative shadow-[0_0_30px_rgba(239,68,68,0.15)] flex gap-6 items-start transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all duration-300 ease-in-out cursor-default">
              <div className="text-red-500 font-black text-5xl leading-none pt-1">5.</div>
              <div>
                <span className="inline-block px-3 py-1 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest rounded-md mb-3 shadow-md">Kök Neden (Root Cause)</span>
                <p className="text-white text-xl font-bold leading-relaxed">
                  Tarım 4.0 ve dijital dönüşüm yatırımı yapılmamış, eski süreç tasarımı güncellenmemiş. <span className="text-red-400 block mt-2 text-lg">Önerilen Çözüm: Bulut tabanlı CRM + Otomatik E-Posta & Entegre Veri Yönetimi (W5 + O3) → İşlem süresinde %85 düşüş, hata oranlarında %95 azalma hedefi.</span>
                </p>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}
