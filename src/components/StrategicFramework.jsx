import { ShieldAlert, TrendingUp, Sparkles, ZapOff, Users, Clock, DollarSign, Search, AlertOctagon } from 'lucide-react';
import CompetitorAnalysis from './CompetitorAnalysis';

export default function StrategicFramework() {
  return (
    <div className="w-full mt-2 pb-10">
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-white tracking-tight">Stratejik Çerçeve</h3>
        <p className="text-anadolu-muted mt-2 text-sm">Anadolu Etap operasyonlarında semptomları değil, kök nedenleri tedavi etmek için hazırlanan stratejik teşhis ve dönüşüm haritası.</p>
      </div>

      {/* SWOT Matrix */}
      <h4 className="text-2xl font-bold text-white mb-6">SWOT Analizi</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {/* Güçlü Yönler (Green) */}
        <div className="bg-anadolu-card border-t-[4px] border-t-green-500 border border-slate-800 border-x-slate-800 border-b-slate-800 rounded-xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,197,94,0.1)] transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-5 text-green-500">
            <TrendingUp size={28} className="group-hover:scale-110 transition-transform" />
            <h5 className="font-bold text-xl tracking-tight">Güçlü Yönler (Strengths)</h5>
          </div>
          <ul className="text-slate-300 text-sm space-y-3 list-none font-medium">
            <li className="flex gap-2"><span>•</span> Geniş tarım arazileri ve yüksek üretim kapasitesi</li>
            <li className="flex gap-2"><span>•</span> Modern fabrika altyapısı ve teknolojik donanım</li>
            <li className="flex gap-2"><span>•</span> Güçlü finansal yapı (Anadolu Grubu desteği)</li>
            <li className="flex gap-2"><span>•</span> Mevcut Roots ve SAP sistem altyapısı</li>
            <li className="flex gap-2"><span>•</span> Çok birimli kalite kontrol yapısı (Lojistik, Kalite, Surway)</li>
          </ul>
        </div>

        {/* Zayıf Yönler (Red) */}
        <div className="bg-anadolu-card border-t-[4px] border-t-red-500 border border-slate-800 rounded-xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)] transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-5 text-red-500">
            <ZapOff size={28} className="group-hover:scale-110 transition-transform" />
            <h5 className="font-bold text-xl tracking-tight">Zayıf Yönler (Weaknesses)</h5>
          </div>
          <ul className="text-slate-300 text-sm space-y-3 list-none font-medium">
            <li className="flex gap-2"><span>•</span> Tüm departmanlarda manuel e-posta bağımlılığı (+40 dk/gün kayıp)</li>
            <li className="flex gap-2"><span>•</span> Roots sistemi tek noktada darboğaz (%100 kapasite kullanımı)</li>
            <li className="flex gap-2"><span>•</span> Manuel onay ve kontrol süreçleri (ort. 2 saat bekleme)</li>
            <li className="flex gap-2"><span>•</span> Departmanlar arası dijital entegrasyon eksikliği</li>
            <li className="flex gap-2"><span>•</span> Mevsimsel işçi bağımlılığı ve eğitim maliyetleri</li>
            <li className="flex gap-2"><span>•</span> <strong>W5.</strong> Müşteri Geri Bildiriminde Dijitalleşme Eksikliği: Manuel geri bildirim süreci</li>
          </ul>
        </div>

        {/* Fırsatlar (Blue) */}
        <div className="bg-anadolu-card border-t-[4px] border-t-blue-500 border border-slate-800 rounded-xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-5 text-blue-500">
            <Sparkles size={28} className="group-hover:scale-110 transition-transform" />
            <h5 className="font-bold text-xl tracking-tight">Fırsatlar (Opportunities)</h5>
          </div>
          <ul className="text-slate-300 text-sm space-y-3 list-none font-medium">
            <li className="flex gap-2"><span>•</span> Otomatik e-posta ve entegre veri yönetimi çözümü</li>
            <li className="flex gap-2"><span>•</span> Merkezi Yönetici Paneli ile süreç otomasyonu</li>
            <li className="flex gap-2"><span>•</span> Organik tarım teşvikleri ve devlet destekleri</li>
            <li className="flex gap-2"><span>•</span> Mobil uygulama ile müşteri şikayet takibi</li>
            <li className="flex gap-2"><span>•</span> AI destekli tahmine dayalı analiz ve izleme sistemleri</li>
            <li className="flex gap-2"><span>•</span> <strong>O3.</strong> Dijital Dönüşüm (Tarım 4.0): Akıllı geri bildirim sistemleri ile üretim/paketleme hatalarının otomatik tespit edilmesi</li>
          </ul>
        </div>

        {/* Tehditler (Yellow) */}
        <div className="bg-anadolu-card border-t-[4px] border-t-yellow-500 border border-slate-800 rounded-xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(234,179,8,0.1)] transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-5 text-yellow-500">
            <ShieldAlert size={28} className="group-hover:scale-110 transition-transform" />
            <h5 className="font-bold text-xl tracking-tight">Tehditler (Threats)</h5>
          </div>
          <ul className="text-slate-300 text-sm space-y-3 list-none font-medium">
            <li className="flex gap-2"><span>•</span> İklim değişikliği ve kuraklık riski (ham madde tedariki)</li>
            <li className="flex gap-2"><span>•</span> Veri hatası riski ve müşteri memnuniyetsizliği</li>
            <li className="flex gap-2"><span>•</span> Tamamen dijitalleşmiş çevik rakiplerin pazara girmesi</li>
            <li className="flex gap-2"><span>•</span> Ekonomik dalgalanmalar ve maliyet artışları</li>
            <li className="flex gap-2"><span>•</span> Yasal düzenleme değişiklikleri ve uyum maliyetleri</li>
          </ul>
        </div>
      </div>

      {/* TOWS Matrix */}
      <h4 className="text-2xl font-bold text-white mb-6">TOWS Matrisi</h4>
      <div className="bg-anadolu-card border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl mb-14">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300 border-collapse">
            <thead className="bg-[#0f172a] text-xs uppercase font-extrabold border-b border-slate-700 tracking-wider">
              <tr>
                <th className="px-6 py-5 border-r border-slate-700 w-[20%] text-slate-400">İç \ Dış</th>
                <th className="px-6 py-5 border-r border-slate-700 w-[40%] text-blue-500 bg-blue-500/5">Fırsatlar (O)</th>
                <th className="px-6 py-5 w-[40%] text-yellow-500 bg-yellow-500/5">Tehditler (T)</th>
              </tr>
            </thead>
            <tbody>
              {/* Güçlü Yönler Satırı */}
              <tr className="border-b border-slate-700 group/row">
                <td className="px-6 py-8 border-r border-slate-700 bg-green-500/5 font-bold text-green-500 uppercase tracking-wider relative align-top">
                  Güçlü Yönler (S)
                  <div className="absolute inset-0 bg-slate-800/10 opacity-0 group-hover/row:opacity-100 transition-opacity pointer-events-none"></div>
                </td>
                
                {/* SO */}
                <td className="px-6 py-8 border-r border-slate-700 hover:bg-slate-800/60 hover:shadow-[inset_0_0_20px_rgba(34,197,94,0.05)] transition-all cursor-default align-top">
                  <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 font-bold text-xs rounded mb-4 border border-green-500/20 shadow-sm">SO Stratejileri (Maksi-Maksi)</span>
                  <ul className="space-y-3 list-none font-medium text-slate-300">
                    <li className="flex gap-2"><span>-</span> Mevcut Roots/SAP altyapısını merkezi Yönetici Paneli ile birleştirerek tam otomasyon sağlamak.</li>
                    <li className="flex gap-2"><span>-</span> Güçlü finansal yapıyı kullanarak otomatik e-posta ve entegre veri yönetimi yatırımı yapmak.</li>
                    <li className="flex gap-2"><span>-</span> Çok birimli kalite yapısını mobil uygulama ile müşteri self-servis şikayet takibine dönüştürmek.</li>
                  </ul>
                </td>

                {/* ST */}
                <td className="px-6 py-8 hover:bg-slate-800/60 hover:shadow-[inset_0_0_20px_rgba(234,179,8,0.05)] transition-all cursor-default align-top">
                  <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 font-bold text-xs rounded mb-4 border border-yellow-500/20 shadow-sm">ST Stratejileri (Maksi-Mini)</span>
                  <ul className="space-y-3 list-none font-medium text-slate-300">
                    <li className="flex gap-2"><span>-</span> Geniş üretim kapasitesi ve marka gücü ile rakiplere karşı müşteri sadakati oluşturmak.</li>
                    <li className="flex gap-2"><span>-</span> Modern fabrika donanımıyla iklim risklerine karşı esnek tedarik zincirleri kurmak.</li>
                  </ul>
                </td>
              </tr>

              {/* Zayıf Yönler Satırı */}
              <tr className="group/row">
                <td className="px-6 py-8 border-r border-slate-700 bg-red-500/5 font-bold text-red-500 uppercase tracking-wider relative align-top">
                  Zayıf Yönler (W)
                  <div className="absolute inset-0 bg-slate-800/10 opacity-0 group-hover/row:opacity-100 transition-opacity pointer-events-none"></div>
                </td>
                
                {/* WO */}
                <td className="px-6 py-8 border-r border-slate-700 hover:bg-slate-800/60 hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.05)] transition-all cursor-default align-top">
                  <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-500 font-bold text-xs rounded mb-4 border border-blue-500/20 shadow-sm">WO Stratejileri (Mini-Maksi)</span>
                  <ul className="space-y-3 list-none font-medium text-slate-300">
                    <li className="flex gap-2"><span>-</span> <strong>1.</strong> Dijital Dönüşüm: Manuel geri bildirim sistemini, Tarım 4.0 yatırımları kapsamında bulut tabanlı bir CRM yazılımına taşımak (W5 + O3).</li>
                    <li className="flex gap-2"><span>-</span> 2. Manuel e-posta süreçlerini otomatik bildirim sistemiyle değiştirerek günde +40 dk tasarruf sağlamak.</li>
                    <li className="flex gap-2"><span>-</span> 3. Roots darboğazını merkezi panel entegrasyonu ile çözerek 2 saatlik beklemeyi ortadan kaldırmak.</li>
                    <li className="flex gap-2"><span>-</span> 4. Mevsimsel işçi sorununu dijital eğitim modülleri ve otomatize süreçlerle hafifletmek.</li>
                  </ul>
                </td>

                {/* WT */}
                <td className="px-6 py-8 hover:bg-slate-800/60 hover:shadow-[inset_0_0_30px_rgba(239,68,68,0.1)] transition-all cursor-default align-top relative overflow-hidden group">
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-red-500/10 transition-colors"></div>
                  <span className="inline-block px-3 py-1 bg-red-500/10 text-red-500 font-bold text-xs rounded mb-4 border border-red-500/20 shadow-sm">WT Stratejileri (Mini-Mini)</span>
                  <ul className="space-y-3 list-none font-medium text-slate-300 relative z-10">
                    <li className="flex gap-2"><span>-</span> Veri hatası riskini azaltmak için manuel kontrolleri kaldırıp otomatik veri doğrulama sistemi kurmak.</li>
                    <li className="flex gap-2"><span>-</span> Departmanlar arası kopukluğu gidererek rakiplerin dijital avantajına karşı hızlı aksiyon almak.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
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
