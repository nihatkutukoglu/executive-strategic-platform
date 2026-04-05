export default function ProcessMapContainer() {
  return (
    <div className="mt-8 bg-anadolu-card border border-slate-800 rounded-2xl p-6 h-[500px] flex flex-col shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Mevcut Süreç Analizi</h3>
          <p className="text-sm text-anadolu-muted mt-1">Tedarik zinciri değer akış haritası ve darboğaz analiz noktaları</p>
        </div>
        <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-sm font-medium rounded-xl text-white transition-colors border border-slate-700 shadow-sm">
          Detaylı Görünüm
        </button>
      </div>
      
      {/* Container for React Flow / Dynamic Process Map */}
      <div className="flex-1 border-2 border-dashed border-slate-700/50 rounded-xl flex items-center justify-center bg-[#0B1120] relative overflow-hidden group">
        
        {/* Decorative Grid Background for tech vibe */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, 
               backgroundSize: `32px 32px` 
             }}>
        </div>

        <div className="z-10 text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-3xl bg-slate-800 flex items-center justify-center mb-6 border border-slate-700 shadow-2xl group-hover:scale-105 transition-transform duration-500">
            <svg className="w-10 h-10 text-anadolu-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">React Flow Haritası Bekleniyor</h4>
          <p className="text-anadolu-muted max-w-md text-center leading-relaxed">
            Bu alana gelecekte hareketli süreç haritası entegre edilecektir. Darboğaz noktaları, WIP (Work In Progress) seviyeleri ve döngü süreleri canlı olarak burada görselleştirilecek.
          </p>
        </div>
      </div>
    </div>
  );
}
