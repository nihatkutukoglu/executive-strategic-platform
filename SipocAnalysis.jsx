import { useState } from 'react';
import { Layers, Box, Cpu, FileOutput, Users, X } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const sipocItems = [
  { id: 's', letter: 'S', title: 'Supplier', icon: Layers, color: 'text-purple-400', bg: 'bg-purple-500/10', details: ['Sözleşmeli Çiftçiler (Meyve Bahçeleri)', 'Lojistik Taşeronları (Nakliye & Soğuk Zincir)', 'Ambalaj ve Paketleme Tedarikçileri', 'Kalite Laboratuvarı & SAP Sistemleri', 'Surway / Hakem Birimi'] },
  { id: 'i', letter: 'I', title: 'Input', icon: Box, color: 'text-blue-400', bg: 'bg-blue-500/10', details: ['Ham Meyve / Sebze (Hasat Ürünleri)', 'Taşıma İrsaliyeleri ve Fatura Bilgileri', 'SAP / Roots İzlenebilirlik Verileri', 'Casus / Isı-Nakliye Takip Verileri', 'Müşteri Şikayet Bildirimi (Mail / Fotoğraf)'] },
  { id: 'p', letter: 'P', title: 'Process', icon: Cpu, color: 'text-yellow-400', bg: 'bg-yellow-500/10', details: ['Hasat → Fabrika Kabul → Yıkama & Seçme', 'Sıkma, İşleme ve Pastörizasyon', 'Kalite Kontrol ve SAP İzlenebilirlik', 'Paketleme → Soğuk Hava Depolama', 'Şikayet Değerlendirme (Roots / Surway)', 'Sevkiyat ve Müşteri Bilgilendirme'] },
  { id: 'o', letter: 'O', title: 'Output', icon: FileOutput, color: 'text-green-400', bg: 'bg-green-500/10', details: ['Meyve Suyu ve Konsantre Ürünleri', 'Dijital Kalite Sertifikası', 'Sevkiyata Hazır Paletler', 'Müşteriye Kabul / Red Bildirimi', 'Düzeltici Faaliyet Raporu'] },
  { id: 'c', letter: 'C', title: 'Customer', icon: Users, color: 'text-teal-400', bg: 'bg-teal-500/10', details: ['Zincir Marketler (Migros, BİM, A101)', 'İhracat Distribütörleri', 'HoReCa (Otel, Restoran, Kafe)', 'Son Tüketici', 'Üst Yönetim (Kalite Raporlama)'] },
];

export default function SipocAnalysis() {
  const [activeSipoc, setActiveSipoc] = useState(null);

  return (
    <div className="w-full mt-2 pb-10">
      <h3 className="text-3xl font-bold text-white tracking-tight mb-2">SIPOC Analizi</h3>
      <p className="text-anadolu-muted text-sm mb-8">Anadolu Etap üretim ve şikayet yönetim sürecinin uçtan uca bileşen haritası.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {sipocItems.map((item) => {
          const Icon = item.icon;
          return (
            <Tilt key={item.id} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2} glareBorderRadius="1rem" transitionSpeed={1000} className="h-full">
              <div 
                onClick={() => setActiveSipoc(item)}
                className={`bg-anadolu-card border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer h-full transition-transform hover:scale-[1.02]`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${item.bg}`}>
                  <Icon size={28} className={item.color} />
                </div>
                <div className={`text-2xl font-black mb-1 opacity-50 ${item.color}`}>{item.letter}</div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">{item.title}</h4>
              </div>
            </Tilt>
          )
        })}
      </div>

      {activeSipoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setActiveSipoc(null)}></div>
          <div className="bg-slate-900/90 border border-slate-700 rounded-3xl p-8 max-w-lg w-full relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] border-t-4" style={{ borderTopColor: 'rgba(255,255,255,0.2)' }}>
            <button className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-slate-700" onClick={() => setActiveSipoc(null)}><X size={20} /></button>
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 rounded-2xl ${activeSipoc.bg}`}><activeSipoc.icon size={32} className={activeSipoc.color} /></div>
              <div><h3 className="text-3xl font-black text-white">{activeSipoc.title}</h3><p className="text-slate-400 font-medium">Süreç Kapsamı</p></div>
            </div>
            <ul className="space-y-4">
              {activeSipoc.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className={`w-2 h-2 rounded-full ${activeSipoc.color.replace('text', 'bg')}`}></div><span className="text-white text-lg font-medium">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
