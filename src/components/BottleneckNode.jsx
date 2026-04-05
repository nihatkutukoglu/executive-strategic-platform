import { Handle, Position } from '@xyflow/react';

export default function BottleneckNode({ data }) {
  return (
    <div className="relative group w-[220px]">
      {/* Background Pulse Effect */}
      <div className="absolute -inset-1 bg-red-500 rounded-xl blur opacity-75 animate-pulse"></div>
      
      {/* Node Container */}
      <div className="relative bg-[#1e293b] border-2 border-red-500 rounded-lg p-5 font-medium text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]">
        {/* Warning Badge */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap border border-red-400 shadow-md tracking-wider">
          {data.bottleneckInfo}
        </div>
        
        {/* Node Content */}
        <div className="text-center mt-1">
          {data.label}
        </div>
        
        <Handle type="target" position={Position.Left} className="w-3 h-3 bg-red-500 border-2 border-[#1e293b]" />
        <Handle type="source" position={Position.Right} className="w-3 h-3 bg-red-500 border-2 border-[#1e293b]" />
      </div>
    </div>
  );
}
