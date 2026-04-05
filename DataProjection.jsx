import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

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

export default function DataProjection() {
  return (
    <div className="w-full mt-2">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-white tracking-tight">Veri Projeksiyonu</h3>
        <p className="text-anadolu-muted mt-2 text-sm">ERP kalite entegrasyonu sonrası süreçlerin iyileştirme hedefleri ve trend analizi.</p>
      </div>

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
                <Tooltip 
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
                <Tooltip 
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
