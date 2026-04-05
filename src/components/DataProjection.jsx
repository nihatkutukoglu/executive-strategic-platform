import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { Globe, Sprout, TrendingUp, DollarSign, Grape, Apple, Cherry } from 'lucide-react';

const barData = [
  {
    name: 'Bekleme Süresi (Saat)',
    'Mevcut Durum': 18,
    'Hedeflenen Durum': 2,
  },
  {
    name: 'Operasyonel Maliyet (Bin ₺)',
    'Mevcut Durum': 850,
    'Hedeflenen Durum': 120, 
  }
];

const lineData = [
  { ay: '1. Ay', oran: 15 },
  { ay: '2. Ay', oran: 11.5 },
  { ay: '3. Ay', oran: 8 },
  { ay: '4. Ay', oran: 4.8 },
  { ay: '5. Ay', oran: 2.1 },
  { ay: '6. Ay', oran: 1.2 },
];

const exportData = [
  { year: '2021', amount: '~1,500,000', value: '$1,250', rate: '8,50', total: '11,1' },
  { year: '2022', amount: '~1,400,000', value: '$1,150', rate: '16,50', total: '19,0' },
  { year: '2023', amount: '~1,450,000', value: '$1,300', rate: '23,00', total: '23,0' },
  { year: '2024', amount: '~1,450,000', value: '$1,350', rate: '32,50', total: '43,7' },
  { year: '2025 (Tahmin)', amount: '~1,350,000', value: '$1,450', rate: '36,00', total: '48,1' },
];

export default function DataProjection() {
  return (
    <div className="w-full mt-2 space-y-12">
      
      {/* Header section */}
      <div>
        <h3 className="text-3xl font-bold text-white tracking-tight">Veri Projeksiyonu & Makro Analiz</h3>
        <p className="text-anadolu-muted mt-2 text-sm max-w-3xl">Geçmiş meyve ihracat verileri, pazar stratejileri ve ERP entegrasyonu sonrası operasyonel iyileşme hedefleri.</p>
      </div>

      {/* NEW EXPORT DATA SECTION */}
      <div className="bg-gradient-to-b from-[#18181b] to-[#0f172a] rounded-[2rem] border border-slate-700/50 shadow-2xl p-8 relative overflow-hidden">
        {/* Background glow for a premium look */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 tracking-tight drop-shadow-md">
            Son 5 Yıl Taze<br/>Meyve İhracat Verileri
          </h2>
          <div className="w-24 h-1 bg-amber-500/50 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="overflow-x-auto w-full mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-700 text-amber-500/90 text-lg">
                <th className="py-4 px-4 font-bold text-center">Yıl</th>
                <th className="py-4 px-4 font-bold text-center">İhracat Miktarı <span className="text-sm block text-slate-400 font-normal">(Ton)</span></th>
                <th className="py-4 px-4 font-bold text-center">İhracat Değeri <span className="text-sm block text-slate-400 font-normal">(Milyon $)</span></th>
                <th className="py-4 px-4 font-bold text-center">Ortalama <span className="text-sm block text-slate-400 font-normal">Kur/TL</span></th>
                <th className="py-4 px-4 font-bold text-center">Toplam <span className="text-sm block text-slate-400 font-normal">(Milyar TL)</span></th>
              </tr>
            </thead>
            <tbody className="text-slate-200 text-lg md:text-xl font-medium">
              {exportData.map((row, i) => (
                <tr key={i} className="border-b border-slate-800/60 hover:bg-white/5 transition-colors">
                  <td className={`py-5 px-4 text-center ${row.year.includes('Tahmin') ? 'text-amber-400/80' : ''}`}>{row.year}</td>
                  <td className="py-5 px-4 text-center font-semibold text-slate-300">{row.amount}</td>
                  <td className="py-5 px-4 text-center text-emerald-400 font-bold">{row.value}</td>
                  <td className="py-5 px-4 text-center text-slate-400">{row.rate}</td>
                  <td className="py-5 px-4 text-center text-amber-500 font-black tracking-wide text-2xl">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FRUITS & HIGHLIGHTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Fruits Display */}
          <div className="bg-slate-900/60 rounded-3xl p-8 border border-slate-700/50 flex flex-col justify-center relative">
             <h4 className="text-2xl font-bold font-black text-white text-center mb-10 tracking-widest uppercase">
               En Çok İhraç Edilen Meyveler
             </h4>
             
             <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12 w-full text-center">
                {/* Cherry */}
                <div className="flex flex-col items-center group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 to-red-900/40 border border-red-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                    <Apple className="text-red-500 w-12 h-12" />
                  </div>
                  <h5 className="font-bold text-white text-lg group-hover:text-red-400 transition-colors">Kiraz & Vişne</h5>
                </div>

                {/* Grapes */}
                <div className="flex flex-col items-center group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400/20 to-green-900/40 border border-green-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(74,222,128,0.1)]">
                    <Sprout className="text-green-400 w-12 h-12" />
                  </div>
                  <h5 className="font-bold text-white text-lg group-hover:text-green-400 transition-colors">Taze Üzüm</h5>
                </div>

                {/* Apples */}
                <div className="flex flex-col items-center group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-lime-900/40 border border-emerald-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <Globe className="text-emerald-500 w-12 h-12" />
                  </div>
                  <h5 className="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">Elma</h5>
                </div>
             </div>
          </div>

          {/* Market Insights */}
          <div className="flex flex-col justify-center space-y-6 bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
            <div className="flex gap-4">
              <div className="w-1.5 h-auto bg-amber-500 rounded-full"></div>
              <div>
                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                  <strong className="text-amber-400 font-bold block mb-1">En Büyük Pazar:</strong> 
                  Rusya, Almanya ve Irak vb. 60 milyon ton taze meyve-sebze ürünleri gibi önemli pazarlar başı çekmektedir.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1.5 h-auto bg-emerald-500 rounded-full"></div>
              <div>
                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                  <strong className="text-emerald-400 font-bold block mb-1">Üretim Gücü:</strong> 
                  Türkiye'nin verimli tarım bölgeleri yüksek kaliteli meyve üretimi sağlar.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1.5 h-auto bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                  <strong className="text-blue-400 font-bold block mb-1">Maliyet Etkisi:</strong> 
                  Kur artışı ihracat gelirini TL bazında katlanarak artırmaktadır.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent my-10"></div>

      {/* EXISTING CHARTS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Chart 1: Bar Chart */}
        <div className="bg-anadolu-card border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h4 className="text-xl font-bold text-white mb-8">Mevcut Durum vs. Hedeflenen Durum</h4>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 13 }} />
                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 13 }} />
                <RechartsTooltip 
                  cursor={{ fill: '#334155', opacity: 0.4 }}
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Legend wrapperStyle={{ paddingTop: '15px' }} />
                <Bar dataKey="Mevcut Durum" fill="#ef4444" radius={[4, 4, 0, 0]} maxBarSize={60} />
                <Bar dataKey="Hedeflenen Durum" fill="#22c55e" radius={[4, 4, 0, 0]} maxBarSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Line Trend */}
        <div className="bg-anadolu-card border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h4 className="text-xl font-bold text-white mb-8">6 Aylık İyileşme Projeksiyonu</h4>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineData}
                margin={{ top: 10, right: 20, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="ay" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 13 }} />
                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 13 }} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
                />
                <Legend wrapperStyle={{ paddingTop: '15px' }} />
                <Line 
                  type="monotone" 
                  dataKey="oran" 
                  name="Hata / Gecikme Oranı (%)" 
                  stroke="#3b82f6" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#1e293b' }} 
                  activeDot={{ r: 8, fill: '#60a5fa', stroke: '#1e293b', strokeWidth: 2 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
