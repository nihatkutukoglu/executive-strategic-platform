import { useState, useEffect } from 'react';
import { ReactFlow, useNodesState, useEdgesState, Background, Controls, MarkerType } from '@xyflow/react';
import { X, Layers, Box, Cpu, FileOutput, Users, AlertTriangle } from 'lucide-react';
import '@xyflow/react/dist/style.css';

/* ================================================================
   Görsel 1: AS-IS Şikayet Süreci (Darboğazlar)
   ================================================================ */

const nodeStyle = { background: '#1e293b', color: '#f8fafc', border: '1px solid #334155', borderRadius: '8px', padding: '10px', fontSize: '10px', fontWeight: '600', width: 140, textAlign: 'center' };
const bottleneckStyle = { background: '#7f1d1d', color: '#fecaca', border: '2px solid #ef4444', borderRadius: '8px', padding: '10px', fontSize: '10px', fontWeight: '700', width: 140, textAlign: 'center', boxShadow: '0 0 10px rgba(239,68,68,0.3)' };
const diamondStyle = { background: '#854d0e', color: '#fef08a', border: '2px solid #eab308', borderRadius: '4px', padding: '8px', fontSize: '10px', fontWeight: '600', width: 120, textAlign: 'center' };
const circleStyle = { background: '#14532d', color: '#bbf7d0', border: '2px solid #22c55e', borderRadius: '50%', padding: '15px 10px', fontSize: '10px', fontWeight: '700', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' };
const redCircleStyle = { ...circleStyle, background: '#7f1d1d', color: '#fecaca', border: '2px solid #ef4444' };

const asIsNodes = [
  // MÜŞTERİ
  { id: 'm1', position: { x: 0, y: 50 }, data: { label: 'Ürün teslim alındı.' }, style: circleStyle },
  { id: 'm2', position: { x: 130, y: 65 }, data: { label: '? Ürün hasarlı mı?' }, style: diamondStyle },
  { id: 'm3', position: { x: 300, y: 50 }, data: { label: '⌛ Şikayeti mail ile bildir.' }, style: bottleneckStyle },
  { id: 'm4', position: { x: 650, y: 50 }, data: { label: 'Müşteri maili alır.' }, style: nodeStyle },
  { id: 'm5', position: { x: 1050, y: 30 }, data: { label: 'Süreç tamamlandı.' }, style: redCircleStyle },
  { id: 'm6', position: { x: 1050, y: 120 }, data: { label: 'Süreç tamamlandı.' }, style: redCircleStyle },
  
  // SATIŞ BİRİMİ
  { id: 's1', position: { x: 0, y: 170 }, data: { label: 'Şikayeti mailden al, roots sistemine manuel giriş yap.' }, style: nodeStyle },
  { id: 's2', position: { x: 480, y: 170 }, data: { label: "Roots'tan onay ver." }, style: nodeStyle },
  { id: 's3', position: { x: 650, y: 170 }, data: { label: '⌛ Müşteriye manuel onay maili at.' }, style: bottleneckStyle },
  { id: 's4', position: { x: 900, y: 170 }, data: { label: 'Müşteriye red maili atar.' }, style: nodeStyle },

  // LOJİSTİK BİRİMİ
  { id: 'l1', position: { x: 0, y: 290 }, data: { label: "⚠️ Roots'tan kaydı kontrol et." }, style: bottleneckStyle },
  { id: 'l2', position: { x: 160, y: 290 }, data: { label: 'Casus kontrolü yap.' }, style: nodeStyle },
  { id: 'l3', position: { x: 320, y: 295 }, data: { label: '? Isı dalgalanması var mı?' }, style: diamondStyle },
  { id: 'l4', position: { x: 480, y: 310 }, data: { label: 'Rootstan kalite birimine aktar.' }, style: nodeStyle },
  { id: 'l5', position: { x: 480, y: 250 }, data: { label: 'Rootstan onay ver.' }, style: nodeStyle },

  // KALİTE BİRİMİ
  { id: 'k1', position: { x: 0, y: 410 }, data: { label: "Roots'tan kaydı kontrol et." }, style: nodeStyle },
  { id: 'k2', position: { x: 160, y: 410 }, data: { label: 'Fatura bilgisine göre sap sistemine git, izlenebilirlik oluştur.' }, style: nodeStyle },
  { id: 'k3', position: { x: 340, y: 410 }, data: { label: 'Ürünün numunesini ve paketleme formunu kontrol et.' }, style: nodeStyle },
  { id: 'k4', position: { x: 500, y: 415 }, data: { label: '? Sorun var mı?' }, style: diamondStyle },
  { id: 'k5', position: { x: 670, y: 380 }, data: { label: "⌛ Roots'tan satış birimine yönlendir." }, style: bottleneckStyle },
  { id: 'k6', position: { x: 670, y: 450 }, data: { label: "⌛ Surway'e manuel mail at." }, style: bottleneckStyle },
  { id: 'k7', position: { x: 900, y: 410 }, data: { label: "Roots'tan red verip, satış birimine yönlendirir." }, style: nodeStyle },

  // SURWAY
  { id: 'su1', position: { x: 670, y: 550 }, data: { label: 'Maili teslim alır.' }, style: nodeStyle },
  { id: 'su2', position: { x: 840, y: 550 }, data: { label: 'Ürünü kontrol için müşteriye gider.' }, style: nodeStyle },
  { id: 'su3', position: { x: 1010, y: 555 }, data: { label: '? Üründe kusur var mı?' }, style: diamondStyle },
  { id: 'su4', position: { x: 1160, y: 520 }, data: { label: 'Kaliteye ürün kusurlu maili atar.' }, style: nodeStyle },
  { id: 'su5', position: { x: 1160, y: 580 }, data: { label: 'Kaliteye ürün kusurlu değil maili atar.' }, style: nodeStyle },
  
  // Swimlane Labels
  { id: 'L1', position: { x: -80, y: 60 }, data: { label: 'MÜŞTERİ' }, style: { background: 'transparent', border: 'none', color: '#94a3b8', transform: 'rotate(-90deg)', fontSize: '10px', width: 60, fontWeight: 'bold' } },
  { id: 'L2', position: { x: -80, y: 180 }, data: { label: 'SATIŞ BR.' }, style: { background: 'transparent', border: 'none', color: '#94a3b8', transform: 'rotate(-90deg)', fontSize: '10px', width: 60, fontWeight: 'bold' } },
  { id: 'L3', position: { x: -80, y: 300 }, data: { label: 'LOJİSTİK BR.' }, style: { background: 'transparent', border: 'none', color: '#94a3b8', transform: 'rotate(-90deg)', fontSize: '10px', width: 60, fontWeight: 'bold' } },
  { id: 'L4', position: { x: -80, y: 420 }, data: { label: 'KALİTE BR.' }, style: { background: 'transparent', border: 'none', color: '#94a3b8', transform: 'rotate(-90deg)', fontSize: '10px', width: 60, fontWeight: 'bold' } },
  { id: 'L5', position: { x: -80, y: 560 }, data: { label: 'SURWAY' }, style: { background: 'transparent', border: 'none', color: '#94a3b8', transform: 'rotate(-90deg)', fontSize: '10px', width: 60, fontWeight: 'bold' } },
];

const asIsEdges = [
  { id: 'e-m1m2', source: 'm1', target: 'm2', type: 'step', style: { stroke: '#64748b' } },
  { id: 'e-m2m3', source: 'm2', target: 'm3', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-m3s1', source: 'm3', target: 's1', type: 'smoothstep', animated: true, className: 'slow-edge-animation', style: { stroke: '#ef4444', strokeWidth: 3 }, label: 'DARBOĞAZ' },
  { id: 'e-s1l1', source: 's1', target: 'l1', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-l1l2', source: 'l1', target: 'l2', type: 'step', style: { stroke: '#64748b' } },
  { id: 'e-l2l3', source: 'l2', target: 'l3', type: 'step', style: { stroke: '#64748b' } },
  { id: 'e-l3l4', source: 'l3', target: 'l4', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-l3l5', source: 'l3', target: 'l5', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-l5s2', source: 'l5', target: 's2', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-s2s3', source: 's2', target: 's3', type: 'smoothstep', animated: true, className: 'slow-edge-animation', style: { stroke: '#ef4444', strokeWidth: 3 }, label: 'DARBOĞAZ' },
  { id: 'e-s3m4', source: 's3', target: 'm4', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-m4m5', source: 'm4', target: 'm5', type: 'smoothstep', style: { stroke: '#64748b' } },
  
  { id: 'e-l4k1', source: 'l4', target: 'k1', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-k1k2', source: 'k1', target: 'k2', type: 'step', style: { stroke: '#64748b' } },
  { id: 'e-k2k3', source: 'k2', target: 'k3', type: 'step', style: { stroke: '#64748b' } },
  { id: 'e-k3k4', source: 'k3', target: 'k4', type: 'step', style: { stroke: '#64748b' } },
  { id: 'e-k4k5', source: 'k4', target: 'k5', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-k4k6', source: 'k4', target: 'k6', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-k5s2', source: 'k5', target: 's2', type: 'smoothstep', animated: true, className: 'slow-edge-animation', style: { stroke: '#ef4444', strokeWidth: 3 } },
  { id: 'e-k6su1', source: 'k6', target: 'su1', type: 'smoothstep', animated: true, className: 'slow-edge-animation', style: { stroke: '#ef4444', strokeWidth: 3 }, label: 'DARBOĞAZ' },
  
  { id: 'e-su1su2', source: 'su1', target: 'su2', type: 'step', style: { stroke: '#64748b' } },
  { id: 'e-su2su3', source: 'su2', target: 'su3', type: 'step', style: { stroke: '#64748b' } },
  { id: 'e-su3su4', source: 'su3', target: 'su4', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-su3su5', source: 'su3', target: 'su5', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-su4k5', source: 'su4', target: 'k5', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-su5k7', source: 'su5', target: 'k7', type: 'smoothstep', style: { stroke: '#64748b' } },
  
  { id: 'e-k7s4', source: 'k7', target: 's4', type: 'smoothstep', style: { stroke: '#64748b' } },
  { id: 'e-s4m6', source: 's4', target: 'm6', type: 'smoothstep', style: { stroke: '#64748b' } },
];

/* ================================================================
   Görsel 2: TO-BE Yönetici Paneli & Uygulama
   ================================================================ */

const panelStyle = { background: '#1e3a8a', color: '#fff', border: '3px solid #3b82f6', borderRadius: '12px', padding: '16px', fontSize: '13px', fontWeight: '800', width: 280, textAlign: 'center', boxShadow: '0 0 25px rgba(59,130,246,0.5)' };
const greenNode = { background: '#14532d', color: '#bbf7d0', border: '2px solid #22c55e', borderRadius: '8px', padding: '10px', fontSize: '10px', fontWeight: '700', width: 140, textAlign: 'center', boxShadow: '0 0 10px rgba(34,197,94,0.3)' };
const blueNode = { background: '#1e3a8a', color: '#bfdbfe', border: '2px solid #3b82f6', borderRadius: '8px', padding: '10px', fontSize: '10px', fontWeight: '600', width: 140, textAlign: 'center' };

const toBeNodes = [
  // PANEL
  { id: 'panel', position: { x: 450, y: -40 }, data: { label: 'YÖNETİCİ PANELİ (MERKEZİ PLATFORM)' }, style: panelStyle },

  // MÜŞTERİ
  { id: 'tb_m1', position: { x: 0, y: 80 }, data: { label: 'Ürün' }, style: circleStyle },
  { id: 'tb_m2', position: { x: 130, y: 95 }, data: { label: '? Hasarlı mı?' }, style: diamondStyle },
  { id: 'tb_m3', position: { x: 300, y: 80 }, data: { label: '📱 Uygulama Üzerinden Şikayet Bildir' }, style: greenNode },
  { id: 'tb_m4', position: { x: 800, y: 60 }, data: { label: '✉️ Otomatik Müşteri Bildirimi' }, style: blueNode },
  { id: 'tb_m5', position: { x: 1000, y: 95 }, data: { label: 'Süreç Tamamlandı' }, style: redCircleStyle },
  { id: 'tb_m6', position: { x: 1000, y: 195 }, data: { label: 'Süreç Tamamlandı' }, style: redCircleStyle },

  // SATIŞ PORTAL
  { id: 'tb_s1', position: { x: 300, y: 180 }, data: { label: 'Şikayeti Doğrula (Panel Üzerinden)' }, style: blueNode },
  { id: 'tb_s2', position: { x: 800, y: 200 }, data: { label: '✉️ Otomatik Müşteri Bildirimi (Kabul/Red)' }, style: blueNode },

  // LOJİSTİK PANEL
  { id: 'tb_l1', position: { x: 50, y: 280 }, data: { label: 'Panelden Lojistik ve Casus Verisi Görüntüle' }, style: blueNode },
  { id: 'tb_l2', position: { x: 250, y: 295 }, data: { label: '? Isı dalgalanması var mı?' }, style: diamondStyle },
  { id: 'tb_l3', position: { x: 430, y: 250 }, data: { label: 'Isı/Nakliye Anomali Kontrolü' }, style: blueNode },
  { id: 'tb_l4', position: { x: 430, y: 320 }, data: { label: 'Lojistik Onay Ver (Panelden)' }, style: blueNode },
  { id: 'tb_l5', position: { x: 620, y: 250 }, data: { label: 'Anomali Raporu Oluştur (Sisteme İşle)' }, style: blueNode },

  // KALİTE PANEL
  { id: 'tb_k1', position: { x: 50, y: 400 }, data: { label: 'Panelden SAP/İzlenebilirlik Verisi Görüntüle' }, style: greenNode },
  { id: 'tb_k2', position: { x: 250, y: 415 }, data: { label: '? Sorun var mı?' }, style: diamondStyle },
  { id: 'tb_k3', position: { x: 430, y: 390 }, data: { label: 'Kalite Kararı Ver (Sisteme İşle)' }, style: blueNode },
  { id: 'tb_k4', position: { x: 430, y: 450 }, data: { label: 'Kalite Kararı Ver (Sisteme İşle)' }, style: blueNode },

  // SURWAY
  { id: 'tb_su1', position: { x: 430, y: 530 }, data: { label: '📱 Uygulama Üzerinden Görev Al' }, style: greenNode },
  { id: 'tb_su2', position: { x: 620, y: 530 }, data: { label: 'Kusurlu/Kusursuz İşaretle' }, style: blueNode },
  { id: 'tb_su3', position: { x: 790, y: 560 }, data: { label: 'Nihai Kararı İşle (Portaldan)' }, style: blueNode },

  // Swimlane Labels
  { id: 'tL1', position: { x: -80, y: 90 }, data: { label: 'MÜŞTERİ' }, style: { background: 'transparent', border: 'none', color: '#94a3b8', transform: 'rotate(-90deg)', fontSize: '10px', width: 60, fontWeight: 'bold' } },
  { id: 'tL2', position: { x: -80, y: 190 }, data: { label: 'SATIŞ BR.' }, style: { background: 'transparent', border: 'none', color: '#94a3b8', transform: 'rotate(-90deg)', fontSize: '10px', width: 60, fontWeight: 'bold' } },
  { id: 'tL3', position: { x: -80, y: 310 }, data: { label: 'LOJİSTİK BR.' }, style: { background: 'transparent', border: 'none', color: '#94a3b8', transform: 'rotate(-90deg)', fontSize: '10px', width: 60, fontWeight: 'bold' } },
  { id: 'tL4', position: { x: -80, y: 420 }, data: { label: 'KALİTE BR.' }, style: { background: 'transparent', border: 'none', color: '#94a3b8', transform: 'rotate(-90deg)', fontSize: '10px', width: 60, fontWeight: 'bold' } },
  { id: 'tL5', position: { x: -80, y: 540 }, data: { label: 'SURWAY' }, style: { background: 'transparent', border: 'none', color: '#94a3b8', transform: 'rotate(-90deg)', fontSize: '10px', width: 60, fontWeight: 'bold' } },
];

const toBeEdges = [
  { id: 'te-m1m2', source: 'tb_m1', target: 'tb_m2', type: 'step', style: { stroke: '#3b82f6' } },
  { id: 'te-m2m3', source: 'tb_m2', target: 'tb_m3', type: 'smoothstep', style: { stroke: '#3b82f6' } },
  { id: 'te-m3s1', source: 'tb_m3', target: 'tb_s1', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#22c55e', strokeWidth: 3 } },
  { id: 'te-m3panel', source: 'tb_m3', target: 'panel', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#22c55e', strokeWidth: 3, strokeDasharray: '5 5' } },
  
  { id: 'te-s1panel', source: 'tb_s1', target: 'panel', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5 5' } },
  { id: 'te-s1l1', source: 'tb_s1', target: 'tb_l1', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-l1l2', source: 'tb_l1', target: 'tb_l2', type: 'step', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-l2l3', source: 'tb_l2', target: 'tb_l3', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-l2l4', source: 'tb_l2', target: 'tb_l4', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-l3l5', source: 'tb_l3', target: 'tb_l5', type: 'step', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-l4k1', source: 'tb_l4', target: 'tb_k1', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#22c55e', strokeWidth: 2 } },
  
  { id: 'te-k1k2', source: 'tb_k1', target: 'tb_k2', type: 'step', style: { stroke: '#22c55e', strokeWidth: 2 } },
  { id: 'te-k2k3', source: 'tb_k2', target: 'tb_k3', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-k2k4', source: 'tb_k2', target: 'tb_k4', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-k3s2', source: 'tb_k3', target: 'tb_s2', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-k4su1', source: 'tb_k4', target: 'tb_su1', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#22c55e', strokeWidth: 3 } },
  
  { id: 'te-su1su2', source: 'tb_su1', target: 'tb_su2', type: 'step', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-su2su3', source: 'tb_su2', target: 'tb_su3', type: 'step', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-su3s2', source: 'tb_su3', target: 'tb_s2', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-panelm4', source: 'panel', target: 'tb_m4', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5 5' } },
  { id: 'te-m4m5', source: 'tb_m4', target: 'tb_m5', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'te-s2m6', source: 'tb_s2', target: 'tb_m6', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // Some extra panel connections
  { id: 'te-panells', source: 'panel', target: 'tb_l1', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#22c55e', strokeWidth: 1, strokeDasharray: '3 3' } },
  { id: 'te-panelk1', source: 'panel', target: 'tb_k1', type: 'smoothstep', animated: true, className: 'fast-edge-animation', style: { stroke: '#22c55e', strokeWidth: 1, strokeDasharray: '3 3' } },
];



export default function ProcessTransformation() {
  const [isToBe, setIsToBe] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(asIsNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(asIsEdges);

  useEffect(() => {
    if (isToBe) {
      setNodes(toBeNodes);
      setEdges(toBeEdges);
    } else {
      setNodes(asIsNodes);
      setEdges(asIsEdges);
    }
  }, [isToBe, setNodes, setEdges]);

  return (
    <div className="w-full mt-2 pb-10">
      
      {/* Header & Toggle */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h3 className="text-3xl font-bold text-white tracking-tight">Süreç Dönüşümü: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500">As-Is vs To-Be</span></h3>
          <p className="text-anadolu-muted mt-2 text-sm max-w-2xl">Mevcut manuel şikayet yönetim sürecinden, Yönetici Paneli merkezli otomatize edilmiş süreç mimarisine anlık geçiş vitrini.</p>
        </div>

        {/* Dynamic Massive Toggle Container */}
        <div className="flex flex-col items-end">
          <div className="relative flex items-center bg-slate-800/80 border border-slate-700 rounded-full p-2 shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)] cursor-pointer hover:border-slate-500 transition-colors" onClick={() => setIsToBe(!isToBe)}>
            <div className={`absolute top-2 bottom-2 w-[50%] rounded-full transition-all duration-500 ease-in-out shadow-lg ${isToBe ? 'translate-x-[95%] bg-gradient-to-r from-blue-600 to-blue-400' : 'translate-x-0 bg-gradient-to-r from-red-600 to-orange-500'}`}></div>
            
            <div className={`relative z-10 w-40 text-center py-3 font-black uppercase tracking-wider text-sm transition-colors duration-300 ${!isToBe ? 'text-white' : 'text-slate-400'}`}>
              As-Is (Mevcut)
            </div>
            <div className={`relative z-10 w-40 text-center py-3 font-black uppercase tracking-wider text-sm transition-colors duration-300 ${isToBe ? 'text-white' : 'text-slate-400'}`}>
              To-Be (Gelecek)
            </div>
          </div>
          <div className={`mt-4 text-sm font-medium w-full text-right transition-colors duration-500 ${isToBe ? 'text-green-400' : 'text-red-400 max-w-[340px]'}`}>
            {isToBe 
              ? 'Hedeflenen Sistem: Tarım 4.0 vizyonuyla dijitalleşmiş, yalın ve çevik süreç mimarisi.' 
              : 'Mevcut Sistem: Manuel süreçler ve entegrasyon eksikliği nedeniyle artan operasyonel maliyet.'}
          </div>
        </div>
      </div>

      {/* React Flow Container */}
      <div className={`w-full h-[600px] border-2 rounded-3xl overflow-hidden shadow-2xl relative transition-all duration-700 ease-in-out ${isToBe ? 'bg-[#0f172a] border-blue-500/30' : 'bg-[#1a0f14] border-red-500/30'}`}>
         
         <div className="absolute top-6 left-6 z-10 pointer-events-none max-w-lg">
            <h4 className={`text-2xl font-black drop-shadow-lg ${isToBe ? 'text-blue-400' : 'text-red-500'}`}>
              {isToBe ? '✅ Otomatize Şikayet Bildirim Yönetimi' : '⚠️ Mevcut Manuel Şikayet Süreci'}
            </h4>
            {!isToBe && (
              <p className="text-gray-300 text-sm mt-3 border-l-2 border-red-500/80 pl-3 bg-[#1a0f14]/80 p-2 rounded-r-lg shadow-sm">
                Operasyonel Darboğaz Analizi: Sürecin yavaşladığı değil, sistemin performansını ve müşteri memnuniyetini sınırlayan kritik kırılma noktaları.
              </p>
            )}
            <p className={`text-xs mt-1 font-medium ${isToBe ? 'text-blue-300/60' : 'text-red-400/60'}`}>
              {isToBe ? 'Müşteri → Uygulama → Yönetici Paneli → Otomatik Bildirim' : 'Müşteri → Satış → Lojistik → Kalite → Hakem (Aşırı E-posta Yükü)'}
            </p>
         </div>

         <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          fitViewOptions={{ padding: 0.1 }}
          proOptions={{ hideAttribution: true }}
          minZoom={0.5} maxZoom={1.5}
        >
          <Background color={isToBe ? "#1e3a8a" : "#7f1d1d"} variant="dots" gap={20} size={isToBe ? 2 : 1.5} />
          <Controls className="bg-slate-800 border-none fill-white text-white rounded-lg shadow-xl" showInteractive={false} />
        </ReactFlow>
      </div>



    </div>
  );
}
