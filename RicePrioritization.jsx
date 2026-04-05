import { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

export default function RicePrioritization() {
  const [params, setParams] = useState({
    erp: { name: 'ERP Entegrasyonu', reach: 8, impact: 9, confidence: 9, effort: 4 },
    ai: { name: 'AI Numune Tahmini', reach: 5, impact: 7, confidence: 5, effort: 7 },
    cloud: { name: 'Bulut Depolama', reach: 10, impact: 5, confidence: 8, effort: 3 },
    sign: { name: 'Dijital İmza', reach: 10, impact: 8, confidence: 9, effort: 2 },
    iot: { name: 'IoT Isı Sensörleri', reach: 4, impact: 6, confidence: 7, effort: 6 }
  });

  const handleSlider = (key, field, value) => {
    setParams(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: parseInt(value)
      }
    }));
  };

  // Convert params to array and calculate current RICE for ScatterChart
  const data = Object.keys(params).map(key => {
    const item = params[key];
    const riceScore = ((item.reach * item.impact * item.confidence) / Math.max(item.effort, 1)).toFixed(1);
    
    // Color mapping based on general ROI
    let fill = '#3b82f6'; // blue
    if (riceScore > 100) fill = '#22c55e'; // green (high priority)
    else if (riceScore < 30) fill = '#ef4444'; // red (low priority)

    return {
      id: key,
      name: item.name,
      x: item.effort,
      y: item.impact,
      z: parseFloat(riceScore),
      fill: fill
    };
  });

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-2xl">
          <p className="text-white font-bold mb-2">{data.name}</p>
          <div className="text-slate-300 text-sm space-y-1">
            <p>Efor (Çaba): <span className="font-bold text-white">{data.x}/10</span></p>
            <p>Etki (Impact): <span className="font-bold text-white">{data.y}/10</span></p>
            <p className="text-purple-400 font-black mt-2 pt-2 border-t border-slate-700">RICE Skoru: {data.z}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full mt-2 pb-10">
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-white tracking-tight">RICE Önceliklendirme Matrisi</h3>
        <p className="text-anadolu-muted mt-2 text-sm max-w-3xl">Reach (Erişim), Impact (Etki), Confidence (Güven) ve Effort (Efor) bazlı interaktif yatırım strateji grafiği.</p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        
        {/* Scatter Chart Area */}
        <div className="flex-1 bg-anadolu-card border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-xl font-bold text-white">Etki vs Efor Dağılımı</h4>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1 text-green-500"><div className="w-3 h-3 rounded-full bg-green-500"></div> Öncelikli</span>
              <span className="flex items-center gap-1 text-blue-500"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Dengeli</span>
              <span className="flex items-center gap-1 text-red-500"><div className="w-3 h-3 rounded-full bg-red-500"></div> Efor İstiyor</span>
            </div>
          </div>
          
          <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" dataKey="x" name="Efor" unit="/10" domain={[0, 10]} stroke="#94a3b8" label={{ value: "← Low Effort | EFOR / ZAMAN | High Effort →", position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} />
                <YAxis type="number" dataKey="y" name="Etki" unit="/10" domain={[0, 10]} stroke="#94a3b8" label={{ value: "Etki (Impact)", angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} />
                <ZAxis type="number" dataKey="z" range={[200, 4000]} name="RICE Skoru" />
                <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                
                {data.map((entry, index) => (
                  <Scatter key={index} name={entry.name} data={[entry]} fill={entry.fill} className="transition-all duration-500 ease-out drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                ))}
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dynamic Controls Area */}
        <div className="w-full xl:w-[450px] bg-anadolu-card border border-slate-800 rounded-2xl p-8 shadow-xl flex flex-col max-h-[700px] overflow-y-auto">
          <h4 className="text-xl font-bold text-white mb-6">Parametre Simulasyonu</h4>
          
          <div className="space-y-8">
            {Object.keys(params).map((key) => {
              const item = params[key];
              const score = data.find(d => d.id === key).z;
              return (
                <div key={key} className="p-5 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800/60 transition-colors">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-bold text-white">{item.name}</h5>
                    <div className="bg-slate-900 border border-slate-700 px-3 py-1 rounded-md text-xs font-black text-purple-400">
                      Skor: {score}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Impact Control */}
                    <div>
                      <div className="flex justify-between mb-1.5 text-[10px] uppercase font-bold text-slate-400">
                        <span>Etki (Y)</span>
                        <span className="text-white">{item.impact}/10</span>
                      </div>
                      <input type="range" min="1" max="10" value={item.impact} onChange={(e) => handleSlider(key, 'impact', e.target.value)} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                    </div>

                    {/* Effort Control */}
                    <div>
                      <div className="flex justify-between mb-1.5 text-[10px] uppercase font-bold text-slate-400">
                        <span>Efor (X)</span>
                        <span className="text-white">{item.effort}/10</span>
                      </div>
                      <input type="range" min="1" max="10" value={item.effort} onChange={(e) => handleSlider(key, 'effort', e.target.value)} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500" />
                    </div>

                    {/* Reach Control */}
                    <div>
                      <div className="flex justify-between mb-1.5 text-[10px] uppercase font-bold text-slate-400">
                        <span>Erişim</span>
                        <span className="text-white">{item.reach}/10</span>
                      </div>
                      <input type="range" min="1" max="10" value={item.reach} onChange={(e) => handleSlider(key, 'reach', e.target.value)} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500" />
                    </div>

                    {/* Confidence Control */}
                    <div>
                      <div className="flex justify-between mb-1.5 text-[10px] uppercase font-bold text-slate-400">
                        <span>Güven</span>
                        <span className="text-white">{item.confidence}/10</span>
                      </div>
                      <input type="range" min="1" max="10" value={item.confidence} onChange={(e) => handleSlider(key, 'confidence', e.target.value)} className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-500" />
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
