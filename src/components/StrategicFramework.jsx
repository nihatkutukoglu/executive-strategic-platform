import { ShieldAlert, TrendingUp, Sparkles, ZapOff, Users, Clock, DollarSign, Search, AlertOctagon, Shield, Compass, Target, Rocket, Bell, BarChart2 } from 'lucide-react';
import CompetitorAnalysis from './CompetitorAnalysis';

export default function StrategicFramework() {
  return (
    <div className="w-full mt-2 pb-10">
      <div className="mb-10 lg:text-left">
        <h3 className="text-3xl font-bold text-white tracking-tight flex items-center lg:justify-start gap-4 pb-2 border-b border-slate-800">
          Stratejik Çerçeve: <span className="text-slate-500 font-normal">SWOT Analizi</span>
        </h3>
      </div>

      {/* NEW SWOT MATRIX DESIGN */}
      <div className="relative w-full max-w-[1300px] mx-auto min-h-[650px] flex flex-col md:flex-row justify-between items-center mb-14 py-10 px-2 lg:px-4 overflow-hidden group">
        
        {/* Radar / Grid Lines Background Effects */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-slate-400/50 border-dashed"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-slate-400/50 border-dashed"></div>
            <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px bg-slate-400/30 border-dashed"></div>
            <div className="absolute top-1/2 left-[5%] right-[5%] h-px bg-slate-400/30 border-dashed"></div>
            
            <div className="absolute left-1/2 top-[10%] -translate-x-1/2 w-4 h-[1px] bg-slate-400"></div>
            <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-4 h-[1px] bg-slate-400"></div>
            <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-[1px] h-4 bg-slate-400"></div>
            <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[1px] h-4 bg-slate-400"></div>
        </div>

        {/* Center Tree Image */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="relative">
            {/* Glowing effect behind tree */}
            <div className="absolute inset-0 bg-orange-200/5 rounded-full blur-[80px] scale-150"></div>
            <img 
              src="/fruit_tree_swot.png" 
              alt="Anadolu Etap Çınar" 
              className="relative h-[650px] md:h-[750px] object-contain drop-shadow-[0_0_30px_rgba(255,220,150,0.1)] transition-transform duration-1000 group-hover:scale-[1.02] -mt-10" 
            />
          </div>
        </div>

        {/* LEFT SIDE: Strengths & Weaknesses */}
        <div className="flex flex-col justify-between z-10 w-full md:w-[420px] min-h-[550px]">
          
          {/* S Card: Güçlü Yönler */}
          <div className="bg-[#1a202c]/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.5)] relative overflow-hidden transform transition-all duration-300 hover:bg-[#1a202c]">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gradient-to-b from-emerald-500 to-green-700"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Shield size={18} className="text-slate-400" />
                <h5 className="font-semibold text-[13px] tracking-wider text-slate-300">Güçlü Yönler</h5>
              </div>
              <ul className="text-white text-lg font-medium space-y-3 list-none">
                <li>S1.Entegre İş Modeli</li>
                <li>S2.Devasa Ölçek ve Kapasite</li>
                <li>S3.Coğrafi Çeşitlilik</li>
                <li>S4.Güçlü kurumsal yapı</li>
                <li>S5.Teknoloji</li>
              </ul>
            </div>
          </div>

          {/* W Card: Zayıf Yönler */}
          <div className="bg-[#1a202c]/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.5)] relative overflow-hidden transform transition-all duration-300 hover:bg-[#1a202c]">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gradient-to-b from-amber-500 to-orange-700"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Search size={18} className="text-slate-400" />
                <h5 className="font-semibold text-[13px] tracking-wider text-slate-300">Zayıf Yönler</h5>
              </div>
              <ul className="text-white text-lg font-medium space-y-3 list-none">
                <li className="text-[#ff8a9a] font-semibold drop-shadow-sm">
                  <span className="opacity-90">W1.Müşteri Geri Bildiriminde</span><br/>
                  <span className="ml-[34px] opacity-90">Dijitalleşme Eksikliği</span>
                </li>
                <li className="text-amber-50/80">W2.Yüksek Girdi Maliyetleri</li>
                <li className="text-amber-50/80">W3.Mevsimsel İşgücü Bağımlılığı</li>
                <li className="text-amber-50/80">W4.Biyolojik Riskler</li>
                <li className="text-amber-50/80">W5.Fason Tesis Kullanımı</li>
              </ul>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: Opportunities & Threats */}
        <div className="flex flex-col justify-between z-10 w-full md:w-[420px] min-h-[550px] mt-16 md:mt-0">
          
          {/* O Card: Fırsatlar */}
          <div className="bg-[#1a202c]/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.5)] relative overflow-hidden transform transition-all duration-300 hover:bg-[#1a202c]">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gradient-to-b from-blue-500 to-indigo-800"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Compass size={18} className="text-slate-400" />
                <h5 className="font-semibold text-[13px] tracking-wider text-slate-300">Fırsatlar</h5>
              </div>
              <ul className="text-white text-lg font-medium space-y-3 list-none">
                <li>01.Küresel Sağlıklı Beslenme<br/>
                  <span className="ml-[34px] block">Trendi</span>
                </li>
                <li>02.Sürdürülebilirlik</li>
                <li>03.Dijital Dönüşüm</li>
                <li>04.Ürün Çeşitlendirme</li>
              </ul>
            </div>
          </div>

          {/* T Card: Tehditler */}
          <div className="bg-[#1a202c]/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.5)] relative overflow-hidden transform transition-all duration-300 hover:bg-[#1a202c]">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gradient-to-b from-red-600 to-rose-900"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Target size={18} className="text-slate-400" />
                <h5 className="font-semibold text-[13px] tracking-wider text-slate-300">Tehditler</h5>
              </div>
              <ul className="text-white text-lg font-medium space-y-3 list-none">
                <li>T1.İklim Krizi</li>
                <li>T2.Küresel Rekabet</li>
                <li>T3.Değişen Tüketici Alışkanlığı</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* TOWS Matrix */}
      <div className="w-full flex flex-col xl:flex-row gap-6 mb-16 pt-10">
        
        {/* Left Image Section */}
        <div className="w-full xl:w-[35%] rounded-3xl overflow-hidden relative group shadow-2xl h-[400px] xl:h-auto min-h-[500px]">
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#0f172a] to-transparent opacity-80 z-10 pointer-events-none"></div>
          <img 
            src="/tows_handshake_tree.png" 
            alt="TOWS Strategy Overview" 
            className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-1000 group-hover:scale-[1.03]" 
          />
        </div>

        {/* Right Grid Section */}
        <div className="w-full xl:w-[65%] flex flex-col relative px-2">
          <h4 className="text-4xl font-extrabold text-white text-center mb-10 tracking-widest uppercase drop-shadow-lg">TOWS MATRİSİ</h4>
          
          <div className="flex w-full mb-4">
             <div className="w-[10%]"></div>
             <div className="w-[45%] text-center text-slate-400 font-semibold tracking-[0.1em] md:tracking-[0.2em] text-[13px] md:text-[15px]">FIRSATLAR (O)</div>
             <div className="w-[45%] text-center text-slate-400 font-semibold tracking-[0.1em] md:tracking-[0.2em] text-[13px] md:text-[15px]">TEHDİTLER (T)</div>
          </div>

          <div className="flex w-full">
            {/* Row Labels */}
            <div className="w-[10%] flex flex-col justify-around items-center text-slate-400 font-semibold tracking-[0.1em] md:tracking-[0.2em] text-[12px] md:text-[14px]">
               <div className="-rotate-90 whitespace-nowrap opacity-70 uppercase -translate-y-8">Güçlü Yönler (S)</div>
               <div className="-rotate-90 whitespace-nowrap opacity-70 uppercase translate-y-8">Zayıf Yönler (W)</div>
            </div>

            {/* 2x2 Grid */}
            <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
               
               {/* SO Quadrant */}
               <div className="bg-[#1a202c]/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 shadow-xl hover:bg-[#1a202c] transition-all relative overflow-hidden group">
                 <div className="absolute right-4 top-4 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity">
                   <Rocket size={30} />
                 </div>
                 <h5 className="text-emerald-400 font-bold text-[17px] mb-4 pr-8 tracking-wide">SO Stratejileri (Saldırı / Büyüme)</h5>
                 <ul className="text-slate-300 text-sm space-y-4 font-medium leading-relaxed">
                   <li><strong className="text-white">1.</strong> Devasa ölçek ve entegre model avantajıyla küresel "Sağlıklı Beslenme" pazarında pazar payını artırmak <strong>(S1, S2 + O1)</strong>.</li>
                   <li><strong className="text-white">2.</strong> Mevcut teknolojik altyapıyı "Tarım 4.0" vizyonuna entegre ederek verimlilikte dünya liderliğine oynamak <strong>(S5 + O3)</strong>.</li>
                   <li><strong className="text-white">3.</strong> Kurumsal güvenilirliği kullanarak "Yeşil Mutabakat" sertifikalarını hızla alıp AB pazarında öncü olmak <strong>(S4 + O2)</strong>.</li>
                 </ul>
               </div>

               {/* ST Quadrant */}
               <div className="bg-[#1a202c]/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 shadow-xl hover:bg-[#1a202c] transition-all relative overflow-hidden group">
                 <div className="absolute right-4 top-4 text-amber-500 opacity-60 group-hover:opacity-100 transition-opacity">
                   <Shield size={30} />
                 </div>
                 <h5 className="text-amber-500 font-bold text-[17px] mb-4 pr-8 tracking-wide">ST Stratejileri (Savunma / Korunma)</h5>
                 <ul className="text-slate-300 text-sm space-y-4 font-medium leading-relaxed">
                   <li><strong className="text-white">1.</strong> Coğrafi çeşitliliği bir "sigorta" gibi kullanarak, iklim krizinden kaynaklı bölgesel rekolte kayıplarını dengelemek <strong>(S3 + T1)</strong>.</li>
                   <li><strong className="text-white">2.</strong> Anadolu Grubu'nun finansal gücünü kullanarak ekonomik dalgalanmalara karşı vadeli alımlar ve kur risk yönetimi yapmak <strong>(S4 + T2)</strong>.</li>
                   <li><strong className="text-white">3.</strong> Teknolojik üstünlüğü kullanarak plastik içermeyen, çevreci ambalajlara hızlı geçiş yapmak ve yeni regülasyonları avantaja çevirmek <strong>(S5 + T3)</strong>.</li>
                 </ul>
               </div>

               {/* WO Quadrant */}
               <div className="bg-[#1a202c]/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 shadow-xl hover:bg-[#1a202c] transition-all relative overflow-hidden group">
                 <div className="absolute right-4 top-4 text-teal-400 opacity-60 group-hover:opacity-100 transition-opacity">
                   <BarChart2 size={30} />
                 </div>
                 <h5 className="text-teal-400 font-bold text-[17px] mb-4 pr-8 tracking-wide">WO Stratejileri (Gelişim / İyileştirme)</h5>
                 <ul className="text-slate-300 text-sm space-y-4 font-medium leading-relaxed">
                   <li><span className="text-[#ff8a9a]">1. Dijital Dönüşüm: Manuel geri bildirim sistemini bulut tabanlı bir CRM yazılımına taşımak (W1 + O3).</span></li>
                   <li><strong className="text-white">2. Girdi Optimizasyonu:</strong> Akıllı tarım teknolojileri ile gübre ve enerji gibi yüksek girdi maliyetlerini optimize ederek kârlılığı korumak. <strong>(O3+W2)</strong>.</li>
                   <li><strong className="text-white">3. Ürün Katma Değeri:</strong> Katma değeri yüksek egzotik meyvelere yönelerek, yüksek girdi maliyetlerinin kâr marjı üzerindeki baskısını hafifletmek <strong>(O4+W2)</strong>.</li>
                 </ul>
               </div>

               {/* WT Quadrant */}
               <div className="bg-[#1a202c]/50 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 shadow-xl hover:bg-[#1a202c] transition-all relative overflow-hidden group">
                 <div className="absolute right-4 top-4 text-rose-500 opacity-60 group-hover:opacity-100 transition-opacity">
                   <Bell size={30} />
                 </div>
                 <h5 className="text-rose-500 font-bold text-[17px] mb-4 pr-8 tracking-wide">WT Stratejileri (Önlem / Geri Çekilme)</h5>
                 <ul className="text-slate-300 text-sm space-y-4 font-medium leading-relaxed">
                   <li><strong className="text-white">1. Otomasyon Yatırımı:</strong> Mevsimsel işgücü bağımlılığını ve artan maliyet baskısını azaltmak için paketleme ve hasat süreçlerinde otomasyonu artırmak <strong>(W3 + T2)</strong>.</li>
                   <li><strong className="text-white">2. Standartizasyon:</strong> Fason tesis kullanımından kaynaklanan riskleri azaltmak için global rakiplerle yarışabilecek sıkı bir dijital denetim ağı kurmak <strong>(W5+ T2)</strong>.</li>
                   <li><strong className="text-white">3. Risk İzleme:</strong> Biyolojik riskleri ve iklim krizini yapay zeka destekli erken uyarı sistemleriyle izleyerek ürün kaybını minimize etmek <strong>(W4+ T1)</strong>.</li>
                 </ul>
               </div>

            </div>
          </div>
        </div>
      </div>

      {/* STRATEJİK HEDEFLER VE RİSK ANALİZİ */}
      <div className="mb-16">
        <h4 className="text-2xl font-bold text-white mb-6">Stratejik Hedefler ve İş Etkisi Yönetimi</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          <div className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800/60 transition-colors">
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <Users size={24} />
              <h5 className="font-bold text-lg text-white">1. Müşteri Odaklılık ve Sadakat Hedefleri</h5>
            </div>
            <div className="space-y-3 text-slate-300 text-sm">
              <p><strong className="text-blue-300">Hız Kaybı:</strong> Manuel sistemde şikayetin kayda alınması ve raporlanması arasındaki zaman kaybı, müşteride "önemsenmiyorum" algısı yaratır. Anlık bildirim yoksa, çözüm süreci lojistik personelinin Excel'i güncellemesine bağlı kalır. Bu durum, Net Tavsiye Skoru (NPS) ve müşteri tutundurma oranlarını düşürür.</p>
              <p><strong className="text-blue-300">İmaj Riski:</strong> Modern bir tarım ve sanayi devinin "e-posta ve manuel Excel" ile şikayet yönetmesi, dijitalleşme vizyonuyla çelişir ve kurumsal prestije zarar verir.</p>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800/60 transition-colors">
            <div className="flex items-center gap-3 mb-4 text-amber-500">
              <Clock size={24} />
              <h5 className="font-bold text-lg text-white">2. Operasyonel Verimlilik ve Maliyet Yönetimi</h5>
            </div>
            <div className="space-y-3 text-slate-300 text-sm">
              <p><strong className="text-amber-400">İş Gücü Kaybı:</strong> Mevcut süreçte bir personelin vaktini tamamen veri girişine ayırması, yüksek bir fırsat maliyeti yaratır. Kalifiye bir personelin "data entry" yapması, stratejik planlama yerine rutin işlere gömülmesine neden olur.</p>
              <p><strong className="text-amber-400">Hatalı Veri Riski:</strong> Manuel girişlerde yapılan hatalar, hatalı pivot tablolarına ve dolayısıyla yanlış yönetimsel kararlara yol açar.</p>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800/60 transition-colors">
            <div className="flex items-center gap-3 mb-4 text-red-500">
              <DollarSign size={24} />
              <h5 className="font-bold text-lg text-white">3. Finansal Kayıpların Önlenmesi (Claim & İndirim)</h5>
            </div>
            <div className="space-y-3 text-slate-300 text-sm">
              <p><strong className="text-red-400">Kronik Kusur Analizi:</strong> En kritik madde burasıdır. Hangi ürün veya bölgede sürekli "kusur görseli" oluştuğu anlık analiz edilmezse, şirket aynı hatadan dolayı tazminat ödemeye devam eder.</p>
              <p><strong className="text-red-400">Nakit Akışı Yönetimi:</strong> Faturadan talep edilen indirimlerin toplam tutarı ancak ay sonunda (veya Excel bitince) görülüyorsa, bütçe disiplini ve nakit akışı öngörülebilirliği zarar görür.</p>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800/60 transition-colors">
            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <Search size={24} />
              <h5 className="font-bold text-lg text-white">4. Tedarik Zinciri ve Kalite Geliştirme (RCA)</h5>
            </div>
            <div className="space-y-3 text-slate-300 text-sm">
              <p><strong className="text-emerald-300">Önleyici Aksiyon Eksikliği:</strong> Sistem "geriye dönük" çalıştığı için, lojistik veya üretim süreçlerindeki bir aksaklık ancak haftalar sonra fark edilir. Bu süreçte hatalı sevkiyatlar devam eder, zarar katlanır.</p>
              <p><strong className="text-emerald-300">Veriye Dayalı Yönetim:</strong> Uygulamanızın sunduğu "anlık analiz" yeteneği olmazsa, "En çok hangi konulardan şikayet gelmiş?" sorusuna anlık yanıt verilemez ve stratejik yatırım kararları hislere dayandırılır.</p>
            </div>
          </div>

        </div>

        {/* RISK TABLE */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
          <div className="border-b border-slate-700 bg-slate-800/80 p-5 flex items-center justify-between">
            <h5 className="font-bold text-white text-lg flex items-center gap-2"><AlertOctagon className="text-red-500" /> Yönetime Sunulacak Stratejik Risk Tablosu</h5>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300 border-collapse">
              <thead className="bg-[#0f172a] text-xs uppercase font-extrabold tracking-wider text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="px-6 py-5 border-r border-slate-700 w-1/3">Mevcut Durum (Manuel)</th>
                  <th className="px-6 py-5 border-r border-slate-700 w-1/3 text-emerald-500 bg-emerald-500/5">Hedeflenen Durum (Uygulama)</th>
                  <th className="px-6 py-5 w-1/3 text-amber-500 bg-amber-500/5">Zarar Gören Stratejik Hedef</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/80 font-medium">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-6 border-r border-slate-700"><span className="text-red-400 font-bold block mb-1">Gecikmeli Raporlama:</span> Veri 1-2 gün geriden gelir.</td>
                  <td className="px-6 py-6 border-r border-slate-700"><span className="text-emerald-400 font-bold block mb-1">Gerçek Zamanlı Takip:</span> Şikayet düştüğü an panelde.</td>
                  <td className="px-6 py-6 font-bold text-slate-200">Çevik Yönetim (Agility)</td>
                </tr>
                 <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-6 border-r border-slate-700"><span className="text-red-400 font-bold block mb-1">Subjektif Kanıt:</span> Sadece metin bazlı şikayet.</td>
                  <td className="px-6 py-6 border-r border-slate-700"><span className="text-emerald-400 font-bold block mb-1">Görsel Kanıt:</span> Fotoğraflı ve standart veri.</td>
                  <td className="px-6 py-6 font-bold text-slate-200">Kalite Standartları</td>
                </tr>
                 <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-6 border-r border-slate-700"><span className="text-red-400 font-bold block mb-1">Görünmez Maliyet:</span> Claim zararları toplu görülmez.</td>
                  <td className="px-6 py-6 border-r border-slate-700"><span className="text-emerald-400 font-bold block mb-1">Finansal Şeffaflık:</span> Anlık kesinti ve zarar analizi.</td>
                  <td className="px-6 py-6 font-bold text-slate-200">Kârlılık ve Verimlilik</td>
                </tr>
                 <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-6 border-r border-slate-700"><span className="text-red-400 font-bold block mb-1">Operasyonel Yük:</span> Personel Excel'e hapsolmuş durumda.</td>
                  <td className="px-6 py-6 border-r border-slate-700"><span className="text-emerald-400 font-bold block mb-1">Otomasyon:</span> Personel analiz ve aksiyona odaklı.</td>
                  <td className="px-6 py-6 font-bold text-slate-200">Dijital Dönüşüm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CompetitorAnalysis />

    </div>
  )
}
