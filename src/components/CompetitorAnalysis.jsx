import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, Area } from 'recharts';

const data = [
  { metric: 'Dijitalleşme', Anadolu: 30, Sektor: 70, fullMark: 100 },
  { metric: 'Lojistik Hızı', Anadolu: 85, Sektor: 65, fullMark: 100 },
  { metric: 'Süreç Çevikliği', Anadolu: 30, Sektor: 60, fullMark: 100 },
  { metric: 'Kalite Standardı', Anadolu: 90, Sektor: 75, fullMark: 100 },
  { metric: 'Maliyet Verim.', Anadolu: 45, Sektor: 65, fullMark: 100 },
];

const exportData = [
  { name: 'Taze Meyve', value: 28.5 },
  { name: 'Meyve Suy.', value: 46.3 },
  { name: 'Meyve Pür.', value: 25.2 },
];
const exportColors = ['#f97316', '#3b82f6', '#22c55e'];

const competitorData = [
  { name: 'Tunaylar', volume: 8000 },
  { name: 'Dimes', volume: 12000 },
  { name: 'Juss', volume: 14000 },
  { name: 'Göknur', volume: 15000 },
  { name: 'A. Etap', volume: 18000 },
  { name: 'Mey İçki', volume: 20000 },
];

const trendData = [
  { year: '2019', volume: 14000 },
  { year: '2020', volume: 16000 },
  { year: '2021', volume: 18000 },
  { year: '2022', volume: 20000 },
  { year: '2023', volume: 22000 },
];

export default function CompetitorAnalysis() {
  return (
    <div className="w-full pb-10">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-white tracking-tight">Rakip Analizi & Konumlandırma</h3>
        <p className="text-anadolu-muted mt-2 text-sm">3D Radar haritasıyla endüstri standartlarına karşı Anadolu Etap'ın rekabetçi konumu ve pazar gücü göstergeleri.</p>
        <p className="text-gray-400 mt-3 text-sm italic border-l-2 border-red-500 pl-3">Sektörel Kıyaslama: Dijitalleşme ve süreç çevikliği metriklerinde pazar standartlarının gerisinde kalınan fırsat alanları.</p>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 h-[450px] bg-anadolu-card border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-red-500/10 transition-colors duration-500"></div>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: '#cbd5e1', fontSize: 13, fontWeight: 'bold' }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar name="Anadolu Etap" dataKey="Anadolu" stroke="#ef4444" strokeWidth={4} fill="#ef4444" fillOpacity={0.4} />
              <Radar name="Sektör Ortalaması" dataKey="Sektor" stroke="#64748b" strokeWidth={2} fill="#64748b" fillOpacity={0.2} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-anadolu-card border border-slate-800 rounded-2xl p-8 shadow-xl flex flex-col justify-center transform hover:scale-[1.02] transition-transform">
          <h4 className="text-xl font-bold text-white mb-6">Rekabet Avantajı Fırsatı</h4>
          <p className="text-slate-300 leading-relaxed text-sm mb-8">
            Anadolu Etap, <strong>Lojistik Hızı</strong> ve <strong>Kalite Standardı</strong> konusunda sektörün çok ilerisindedir. Ancak <span className="text-red-400 font-bold">Dijitalleşme ve Çeviklik</span> kalemlerindeki eksiklik (bkz. boşluklar), potansiyel liderliğe ket vurmaktadır.
          </p>
          <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/20 box-shadow-glow">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 block mb-2">Stratejik Karar:</span>
            <span className="text-sm text-white font-medium leading-relaxed block">
              Acil ve tam kapsamlı ERP entegrasyonu ile bu açığın kapatılması pazarda tartışmasız bir tekel konumuna yol açacaktır.
            </span>
          </div>
        </div>
      </div>

      {/* Pazar Verileri: 3 Yeni Grafik Alanı */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        
        {/* Grafik 1: İhracat Verileri Dağılımı */}
        <div className="h-[350px] bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
          <h4 className="text-sm font-black text-slate-300 uppercase tracking-widest mb-4">İhracat Dağılımı (%)</h4>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={exportData} 
                  cx="50%" 
                  cy="50%" 
                  innerRadius={70} 
                  outerRadius={100} 
                  paddingAngle={5} 
                  dataKey="value"
                  label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
                  labelLine={false}
                >
                  {exportData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={exportColors[index % exportColors.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`%${value}`, 'Oran']}
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px', fontWeight: 'bold' }} 
                  itemStyle={{ color: '#fff' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '11px', color: '#cbd5e1' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Grafik 2: Rakip Üretim Hacimleri */}
        <div className="h-[350px] bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
          <h4 className="text-sm font-black text-slate-300 uppercase tracking-widest mb-4">Üretim Hacimleri (Ton)</h4>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={competitorData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} axisLine={{stroke: '#334155'}} tickLine={false} />
                <YAxis tick={{fill: '#94a3b8', fontSize: 10}} axisLine={{stroke: '#334155'}} tickLine={false} width={60} />
                <Tooltip 
                  cursor={{fill: '#1e293b', opacity: 0.8}} 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }} 
                  formatter={(value) => [`${value.toLocaleString()} Ton`, 'Hacim']}
                />
                <Bar dataKey="volume" radius={[4, 4, 0, 0]} animationDuration={1500}>
                  {competitorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'A. Etap' ? '#22c55e' : '#475569'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Grafik 3: Son 5 Yıl Büyüme Trendi */}
        <div className="h-[350px] bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
          <h4 className="text-sm font-black text-slate-300 uppercase tracking-widest mb-4">Büyüme Trendi (Son 5 Yıl)</h4>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="year" tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} axisLine={{stroke: '#334155'}} tickLine={false} />
                <YAxis tick={{fill: '#94a3b8', fontSize: 10}} axisLine={{stroke: '#334155'}} tickLine={false} width={60} domain={['dataMin - 1000', 'dataMax + 1000']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }} 
                  formatter={(value) => [`${value.toLocaleString()} Ton`, 'Üretim']}
                />
                <Area type="monotone" dataKey="volume" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorVolume)" animationDuration={1500} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  )
}
