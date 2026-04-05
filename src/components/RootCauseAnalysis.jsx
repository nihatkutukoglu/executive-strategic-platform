import { useState } from 'react';
import { ShieldAlert, TerminalSquare, AlertCircle, ArrowDownRight, Activity, Users, Settings, Target, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RootCauseAnalysis() {

  // Tam Teşekküllü SVG Ishikawa Koordinatları - DEV KANVAS (Pixel Precision)
  const branches = [
    {
      id: 1, title: 'A. LOJİSTİK VE DAĞITIM', color: '#0ea5e9', shadow: 'shadow-sky-500/50', borderCol: 'border-sky-500', 
      bone: { x1: 450, y1: 400, x2: 250, y2: 100 },
      titlePos: { left: 250, top: 60 }, 
      items: [
        { text: 'Hasarlı Teslimat', rib: {x1: 40, x2: 290, y: 160} }, 
        { text: 'Yanlış İstifleme', rib: {x1: 40, x2: 343, y: 240} },
        { text: '!SOP & Denetim Mekanizması Eksik', rib: {x1: 40, x2: 396, y: 320} }
      ]
    },
    {
      id: 2, title: 'C. İLETİŞİM VE VERİ AKIŞI', color: '#f59e0b', shadow: 'shadow-amber-500/50', borderCol: 'border-amber-500',
      bone: { x1: 950, y1: 400, x2: 750, y2: 100 },
      titlePos: { left: 750, top: 60 }, 
      items: [
        { text: 'Geç Çözüm', rib: {x1: 540, x2: 790, y: 160} }, 
        { text: 'Manuel Veri Akışı', rib: {x1: 540, x2: 843, y: 240} },
        { text: '!B2B Portal & SLA Takibi Eksik', rib: {x1: 540, x2: 896, y: 320} }
      ]
    },
    {
      id: 3, title: 'B. ÜRÜN VE AMBALAJ', color: '#10b981', shadow: 'shadow-emerald-500/50', borderCol: 'border-emerald-500',
      bone: { x1: 650, y1: 400, x2: 450, y2: 700 },
      titlePos: { left: 450, top: 740 }, 
      items: [
        { text: 'Ambalaj Ezilmesi', rib: {x1: 240, x2: 490, y: 640} }, 
        { text: 'Materyal Dayanımı Yetersiz', rib: {x1: 240, x2: 543, y: 560} },
        { text: '!Değişiklik Yönetimi Süreci Eksik', rib: {x1: 240, x2: 596, y: 480} }
      ]
    },
    {
      id: 4, title: 'D. SÜREÇ VE TEKNO. YÖNETİMİ', color: '#a855f7', shadow: 'shadow-purple-500/50', borderCol: 'border-purple-500',
      bone: { x1: 1150, y1: 400, x2: 950, y2: 700 },
      titlePos: { left: 950, top: 740 }, 
      items: [
        { text: 'Kronikleşme', rib: {x1: 740, x2: 990, y: 640} }, 
        { text: 'Anlık Çözüm Odağı', rib: {x1: 740, x2: 1043, y: 560} },
        { text: '!Sistematik Kök Neden Analizi (RCA-DÖF) Yok', rib: {x1: 740, x2: 1096, y: 480} }
      ]
    }
  ];

  return (
    <div className="w-full mt-2 pb-10 space-y-12">
      
      {/* 1. EPIK Balık Kılçığı Diyagramı (Ishikawa) */}
      <div className="bg-[#0f172a] border border-slate-700/80 rounded-[2.5rem] p-8 lg:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="mb-4 relative z-10 w-full pl-4">
          <h3 className="text-2xl font-black text-white tracking-widest uppercase">Anadolu Etap: B2B Müşteri Geri Bildirim ve RCA Projesi</h3>
          <p className="text-blue-400 mt-1 font-medium tracking-wide">Yönetim Kurulu Ishikawa Analizi: Semptomlardan Kök Nedenlere İniş.</p>
        </div>
        
        {/* TAMAMEN RESPONSIVE SVG FISHBONE CONTAINER */}
        <div className="w-full rounded-2xl border border-slate-700/50 bg-[#0B1120]/40 mt-4 shadow-inner">
          <div className="w-full h-auto aspect-[16/8] relative p-2 md:p-6">
            
            <svg className="w-full h-full pointer-events-none drop-shadow-2xl" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="spineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
                <marker id="spine-head" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                   <polygon points="0 0, 6 3, 0 6" fill="#ef4444" />
                </marker>
                {branches.map(b => (
                  <marker key={`head-${b.id}`} id={`arrowhead-${b.id}`} markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
                    <polygon points="0 0, 5 2.5, 0 5" fill={b.color} />
                  </marker>
                ))}
              </defs>

              {/* ANA OMURGA */}
              <line x1="50" y1="400" x2="1190" y2="400" stroke="url(#spineGrad)" strokeWidth="16" markerEnd="url(#spine-head)" />

              {/* KILÇIKLAR VE YATAY ÇİZGİLER (RIBS) */}
              {branches.map(b => (
                <g key={`svg-bone-${b.id}`}>
                  {/* Ana Kılçık */}
                  <line x1={b.bone.x2} y1={b.bone.y2} x2={b.bone.x1} y2={b.bone.y1} stroke={b.color} strokeWidth="8" strokeLinecap="round" />
                  {/* Ribs (Semptom Satırları) */}
                  {b.items.map((item, idx) => (
                    <line key={`svg-arrow-${idx}`} x1={item.rib.x1} y1={item.rib.y} x2={item.rib.x2} y2={item.rib.y} stroke={b.color} strokeWidth="3" strokeDasharray="6 4" markerEnd={`url(#arrowhead-${b.id})`} />
                  ))}
                </g>
              ))}

              {/* DOM HTML YAZILARI (SVG İÇİNDE FOREIGN OBJECT) */}
              
              {/* Kategori Başlıkları (A, B, C, D) */}
              {branches.map(b => (
                <foreignObject key={`foreign-title-${b.id}`} x={b.titlePos.left - 160} y={b.titlePos.top - 60} width="320" height="120">
                  <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex items-center justify-center p-4">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
                      className={`font-black uppercase text-xl`} 
                      style={{ color: b.color, textShadow: `0 0 10px ${b.color}80` }}
                    >
                       <div className={`bg-[#0B1120] border-2 px-6 py-4 rounded-xl text-center shadow-lg ${b.borderCol} ${b.shadow}`}>
                         {b.title}
                       </div>
                    </motion.div>
                  </div>
                </foreignObject>
              ))}

              {/* Alt Metinler (Sub-Items) */}
              {branches.map(b => 
                b.items.map((item, idx) => {
                  const isAlert = item.text.startsWith('!');
                  const txt = isAlert ? item.text.substring(1) : item.text;
                  return (
                    <foreignObject key={`foreign-txt-${b.id}-${idx}`} x={item.rib.x1} y={item.rib.y - 70} width="450" height="80">
                      <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex items-end justify-start pb-2 pl-4">
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + idx * 0.1 }}
                          className="whitespace-nowrap font-bold tracking-wide text-[16px] drop-shadow-md"
                        >
                           {isAlert ? (
                              <span className="bg-red-950/90 border border-red-500/80 text-red-100 px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-pulse inline-block uppercase text-sm">{txt}</span>
                           ) : (
                              <span className="text-white bg-slate-900/60 px-2 py-1 rounded-md">{txt}</span>
                           )}
                        </motion.div>
                      </div>
                    </foreignObject>
                  )
                })
              )}

              {/* ANA SORUN KIRMIZI KUTU (EN SAĞDA) */}
              <foreignObject x="1150" y="200" width="450" height="400">
                <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex items-center justify-center p-8">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 1, type: 'spring' }}
                    className="bg-[#b91c1c] border-4 border-red-400 shadow-[0_0_80px_rgba(220,38,38,0.9)] text-white py-12 px-6 rounded-[2rem] w-full min-h-[280px] text-center flex flex-col items-center justify-center relative overflow-hidden"
                  >
                    <span className="text-[20px] font-black leading-snug drop-shadow-2xl text-white uppercase tracking-widest">
                      MÜŞTERİ MEMNUNİYETSİZLİĞİ: <br/><br/>YÜKSEK SİPARİŞ İPTALLERİ VE İSRAF MALİYETLERİ <br/><br/><span className="text-red-300 text-[16px]">(SEMPTOM).</span>
                    </span>
                  </motion.div>
                </div>
              </foreignObject>

            </svg>
          </div>
        </div>
        
        {/* Yönetim Kurulu Dersleri Kutusu */}
        <div className="relative mt-8 mx-auto w-full max-w-5xl bg-[#f8fafc] border-[3px] border-slate-300 shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-2xl p-8 z-50">
          <h4 className="text-center font-black text-[#0f172a] tracking-widest text-xl mb-6 uppercase">KRİTİK YÖNETİM KURULU DERSLERİ</h4>
          <ul className="list-disc pl-8 space-y-3 text-slate-800 font-bold text-[14px] uppercase tracking-wide">
             <li>MÜŞTERİ MEMNUNİYETSİZLİĞİ: YÜKSEK SİPARİŞ İPTALLERİ VE İSRAF MALİYETLERİ SADECE BİR SEMPTOMDUR.</li>
             <li>GERÇEK SORUN, MANUEL VERİ AKIŞININ ÇEVİKLİĞİ VE İZLENEBİLİRLİĞİ ENGELLEMESİDİR.</li>
             <li>SİSTEMATİK BİR KÖK NEDEN ANALİZİ (RCA-DÖF) YOKLUĞU HATALARIN KRONİKLEŞMESİNE YOL AÇMAKTADIR.</li>
          </ul>
        </div>

      </div>

      {/* 2. FAZ 5 - KÖK NEDEN ANALİZİ (STRATEJİK TEŞHİS) */}
      <div className="bg-[#f8fafc] rounded-3xl p-8 lg:p-12 shadow-[0_15px_60px_rgba(0,0,0,0.1)] relative border-t-8 border-t-[#0ea5e9]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10 pb-6 border-b-2 border-slate-200">
           {/* Logo Mockup */}
           <div className="flex items-center justify-center p-3">
              <div className="flex text-4xl">🍎🔵🍏</div>
           </div>
           <div>
             <h2 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">FAZ 5 – KÖK NEDEN ANALİZİ (STRATEJİK TEŞHİS)</h2>
             <p className="text-slate-600 text-lg font-medium mt-1 tracking-wide">Müşteri Şikayet Yönetimi: Semptomlardan Yapısal Tasarım Hatasına İniş</p>
           </div>
        </div>

        {/* Semptom Red Box */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-6 shadow-xl mb-12 flex items-center gap-6 border-2 border-red-700/50">
           <AlertCircle className="text-white w-12 h-12 flex-shrink-0 animate-pulse" />
           <p className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
             Müşteri şikayet yönetimi süreci çok yavaş işliyor, ciddi iş yükü yaratıyor ve anlık analiz yapılamıyor.
           </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative w-full overflow-x-auto pb-4">
           
           {/* Flow Container */}
           <div className="flex-1 space-y-6 relative min-w-[700px]">
             
             {/* Soru 1 */}
             <div className="flex flex-col items-start relative z-10 w-full pl-0">
               <div className="flex items-stretch w-full max-w-[800px] bg-white shadow-lg rounded-xl border-l-[10px] border-l-slate-300 overflow-hidden transform transition-transform hover:-translate-y-1 h-24">
                 <div className="bg-slate-100 p-4 w-[40%] flex items-center border-r border-slate-200 shrink-0">
                   <p className="text-[13px] font-bold text-slate-600">Soru 1: Neden süreç yavaş işliyor ve anlık analiz yapılamıyor?</p>
                 </div>
                 <div className="p-4 flex gap-4 items-center bg-white flex-1 min-w-0">
                   <TerminalSquare className="text-slate-400 w-8 h-8 shrink-0" />
                   <span className="font-black text-slate-800 text-[17px] truncate line-clamp-2 white-space-normal">Manuel SAP Girişi</span>
                 </div>
               </div>
               <ArrowDownRight className="w-10 h-10 text-slate-300 ml-16 mt-3 mb-3" />
             </div>

             {/* Soru 2 */}
             <div className="flex flex-col items-start relative z-10 w-full pl-12">
               <div className="flex items-stretch w-full max-w-[800px] bg-white shadow-lg rounded-xl border-l-[10px] border-l-slate-300 overflow-hidden transform transition-transform hover:-translate-y-1 h-24">
                 <div className="bg-slate-100 p-4 w-[40%] flex items-center border-r border-slate-200 shrink-0">
                   <p className="text-[13px] font-bold text-slate-600">Soru 2: Neden lojistik personeli bu şikayetleri sisteme manuel olarak girmek zorunda kalıyor?</p>
                 </div>
                 <div className="p-4 flex gap-4 items-center bg-white flex-1 min-w-0">
                   <div className="flex -space-x-2 shrink-0"><div className="w-8 h-6 bg-slate-300 rounded shadow border border-white"></div><div className="w-8 h-6 bg-slate-400 rounded shadow border border-white"></div></div>
                   <span className="font-black text-slate-800 text-[17px] truncate line-clamp-2">Yapılandırılmamış Veri (E-posta)</span>
                 </div>
               </div>
               <ArrowDownRight className="w-10 h-10 text-slate-300 ml-16 mt-3 mb-3" />
             </div>

             {/* Soru 3 */}
             <div className="flex flex-col items-start relative z-10 w-full pl-24">
               <div className="flex items-stretch w-full max-w-[800px] bg-white shadow-lg rounded-xl border-l-[10px] border-l-slate-300 overflow-hidden transform transition-transform hover:-translate-y-1 h-24">
                 <div className="bg-slate-100 p-4 w-[40%] flex items-center border-r border-slate-200 shrink-0">
                   <p className="text-[13px] font-bold text-slate-600">Soru 3: Neden şikayetler standart bir veri akışı yerine e-posta ile (yapılandırılmamış formatta) geliyor?</p>
                 </div>
                 <div className="p-4 flex gap-4 items-center bg-white flex-1 min-w-0">
                   <ShieldAlert className="text-slate-400 w-8 h-8 shrink-0" />
                   <span className="font-black text-slate-800 text-[17px] truncate line-clamp-2">Müşteri Portalı Eksikliği</span>
                 </div>
               </div>
               <ArrowDownRight className="w-10 h-10 text-slate-300 ml-16 mt-3 mb-3" />
             </div>

             {/* Soru 4 */}
             <div className="flex flex-col items-start relative z-10 w-full pl-[135px]">
               <div className="flex items-stretch w-full max-w-[800px] bg-white shadow-lg rounded-xl border-l-[10px] border-l-slate-300 overflow-hidden transform transition-transform hover:-translate-y-1 h-24">
                 <div className="bg-slate-100 p-4 w-[40%] flex items-center border-r border-slate-200 shrink-0">
                   <p className="text-[13px] font-bold text-slate-600">Soru 4: Neden bugüne kadar entegre bir müşteri veri giriş portalı tasarlanmadı?</p>
                 </div>
                 <div className="p-4 flex gap-4 items-center bg-white flex-1 min-w-0">
                   <Activity className="text-slate-400 w-8 h-8 shrink-0" />
                   <span className="font-black text-slate-800 text-[17px] truncate line-clamp-2">Sadece 'Kayıt Atma' Odaklı İşletim</span>
                 </div>
               </div>
               <ArrowDownRight className="w-10 h-10 text-slate-300 ml-16 mt-3 mb-3" />
             </div>

             {/* Soru 5 */}
             <div className="flex flex-col items-start relative z-10 w-full pl-[180px]">
               <div className="flex items-stretch w-full max-w-[800px] bg-white shadow-lg rounded-xl border-l-[10px] border-l-slate-300 overflow-hidden transform transition-transform hover:-translate-y-1 h-24">
                 <div className="bg-slate-100 p-4 w-[40%] flex items-center border-r border-slate-200 shrink-0">
                   <p className="text-[13px] font-bold text-slate-600">Soru 5: Neden süreç tasarımı veri analizi yerine sadece kayıt atma üzerine kurgulanmış?</p>
                 </div>
                 <div className="p-4 flex gap-4 items-center bg-white flex-1 min-w-0">
                   <Settings className="text-slate-400 w-8 h-8 shrink-0" />
                   <span className="font-black text-slate-800 text-[17px] leading-tight">Bütüncül Veri Stratejisi Eksikliği</span>
                 </div>
               </div>
             </div>

           </div>

           {/* Analitik Çıktı Sidebar */}
           <div className="lg:w-[320px] flex-shrink-0">
             <div className="bg-white border-[3px] border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded-3xl p-8 h-[calc(100%-80px)] sticky top-10">
                <h4 className="flex items-center gap-3 text-xl font-black text-slate-800 mb-8 pb-4 border-b-[3px] border-slate-100 uppercase tracking-widest"><Target className="text-[#0ea5e9] w-6 h-6" /> ANALİTİK ÇIKTI</h4>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <Users className="text-slate-400 flex-shrink-0 w-8 h-8" />
                    <div>
                      <h5 className="font-black text-slate-800 uppercase tracking-wider text-sm mb-1 line-clamp-2">Kişiyi Değil, Sistemi Sorgula</h5>
                      <p className="text-slate-500 text-[13px] font-medium leading-relaxed">Gerçek problem personelin yavaşlığı değil, sistemin mimarisidir. Suçlu aramak yerine tasarım onarılmalıdır.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ShieldAlert className="text-slate-400 flex-shrink-0 w-8 h-8" />
                    <div>
                      <h5 className="font-black text-slate-800 uppercase tracking-wider text-sm mb-1 line-clamp-2">Gecikme Değil, Tasarım Hatası</h5>
                      <p className="text-slate-500 text-[13px] font-medium leading-relaxed">Yüzeyde görünen darboğaz, yönetsel bir tasarım probleminin kaçınılmaz sonucudur.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Activity className="text-slate-400 flex-shrink-0 w-8 h-8" />
                    <div>
                      <h5 className="font-black text-slate-800 uppercase tracking-wider text-sm mb-1 line-clamp-2">Sürdürülebilir İyileştirme</h5>
                      <p className="text-slate-500 text-[13px] font-medium leading-relaxed">Sürece ek personel atamak sorunu çözmez; çözüm, bilgi akışını müşteriyle kapsayacak şekilde yeniden tasarlamaktır.</p>
                    </div>
                  </div>
                </div>
             </div>
           </div>

        </div>

        {/* Kök Neden Yeşil Kutu */}
        <div className="mt-6 bg-gradient-to-r from-emerald-800 to-[#14532d] border-4 border-emerald-900 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center overflow-hidden transform hover:-translate-y-1 transition-transform cursor-default">
          <div className="p-8 md:p-10 flex items-center justify-center bg-black/20">
            <TerminalSquare className="w-20 h-20 text-emerald-300" />
          </div>
          <div className="p-8 md:p-10 flex-1">
            <h4 className="text-emerald-100 font-bold uppercase tracking-[0.2em] text-sm mb-3 opacity-90 border-b border-emerald-600/50 pb-2 inline-block">Kök Neden Çözümü</h4>
            <p className="text-white text-lg md:text-2xl font-medium leading-relaxed">
              <strong className="font-black text-emerald-200">KÖK NEDEN:</strong> Organizasyonun bilgi mimarisinde müşteri geri bildirimlerini stratejik bir araç olarak konumlandıran yapısal bir sistem bulunmamasıdır.<br/>
              <span className="text-emerald-400 text-base mt-2 block font-bold tracking-wide">(Sistem Mimarisindeki Yapısal Sorun)</span>
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
