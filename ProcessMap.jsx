// React Flow integration
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import BottleneckNode from './BottleneckNode';

const nodeTypes = { bottleneck: BottleneckNode };

const baseStyle = { 
  background: '#1e293b', 
  color: '#f8fafc', 
  border: '1px solid #334155', 
  borderRadius: '8px', 
  padding: '16px', 
  fontWeight: '600',
  fontSize: '12px',
  width: 200,
  textAlign: 'center',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
};

const initialNodes = [
  // Ana süreç adımları
  { id: '1', position: { x: 50, y: 250 }, data: { label: 'Müşteri Şikayeti Alınır (Mail)' }, style: baseStyle },
  { id: '2', position: { x: 310, y: 250 }, data: { label: 'Roots Sistemine Manuel Giriş' }, style: baseStyle },
  { id: '3', type: 'bottleneck', position: { x: 570, y: 250 }, data: { label: 'Roots Onay Bekleme', bottleneckInfo: '⚠️ DARBOĞAZ: Ort. 2 Saat Bekleme, %100 Kapasite' } },
  { id: '4', position: { x: 830, y: 150 }, data: { label: 'Lojistik: Casus & Isı Kontrolü' }, style: baseStyle },
  { id: '5', position: { x: 830, y: 350 }, data: { label: 'Kalite: SAP İzlenebilirlik & Numune Kontrol' }, style: baseStyle },
  { id: '6', type: 'bottleneck', position: { x: 1100, y: 250 }, data: { label: 'Manuel E-Posta Bildirimi', bottleneckInfo: '⚠️ DARBOĞAZ: Günde +40 dk Kayıp, Veri Hatası Riski' } },
  { id: '7', position: { x: 1370, y: 150 }, data: { label: 'Surway Hakem Değerlendirme' }, style: baseStyle },
  { id: '8', position: { x: 1370, y: 350 }, data: { label: 'Müşteriye Kabul / Red Bildirimi' }, style: baseStyle },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: '#22c55e', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    style: { stroke: '#ef4444', strokeWidth: 5 },
    className: 'slow-edge-animation',
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    style: { stroke: '#64748b', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#64748b' },
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    animated: true,
    style: { stroke: '#64748b', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#64748b' },
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    animated: true,
    style: { stroke: '#ef4444', strokeWidth: 4 },
    className: 'slow-edge-animation',
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    animated: true,
    style: { stroke: '#ef4444', strokeWidth: 4 },
    className: 'slow-edge-animation',
    markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' },
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    animated: true,
    style: { stroke: '#64748b', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#64748b' },
  },
  {
    id: 'e6-8',
    source: '6',
    target: '8',
    animated: true,
    style: { stroke: '#64748b', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#64748b' },
  },
];

export default function ProcessMap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="bg-anadolu-card border border-slate-800 rounded-2xl flex-1 mt-6 lg:mt-0 shadow-lg overflow-hidden relative w-full h-[700px]">
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">Mevcut Süreç Darboğaz Haritası</h3>
        <p className="text-sm text-anadolu-muted drop-shadow-md bg-anadolu-dark/50 px-2 py-1 rounded inline-block">Şikayet yönetim süreci darboğaz noktaları: Manuel Mail & Roots Bağımlılığı</p>
      </div>
      
      <div className="w-full h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          proOptions={{ hideAttribution: true }}
          minZoom={0.5}
          maxZoom={1.5}
        >
          <Background color="#475569" variant="dots" gap={20} size={1.5} />
          <Controls className="bg-slate-800 border-none fill-white text-white rounded-lg overflow-hidden shadow-xl" showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  );
}
