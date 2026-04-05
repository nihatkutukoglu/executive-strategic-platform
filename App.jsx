import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProcessMap from './components/ProcessMap';
import ManagementSummary from './components/ManagementSummary';
import RootCauseAnalysis from './components/RootCauseAnalysis';
import DataProjection from './components/DataProjection';
import ProjectTeam from './components/ProjectTeam';
import StrategicFramework from './components/StrategicFramework';
import ProcessTransformation from './components/ProcessTransformation';
import RicePrioritization from './components/RicePrioritization';

function App() {
  const [activeTab, setActiveTab] = useState('process-transformation');

  return (
    <div className="min-h-screen bg-anadolu-dark flex font-sans text-anadolu-text selection:bg-red-500/30 overflow-x-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col ml-64 min-w-0 bg-[#0a0f1c] min-h-screen">
        <Header />
        
        <main className="p-8 flex-1 flex flex-col">
          <div className="mx-auto w-full max-w-[1400px] flex-1 flex flex-col">
            
            <div key={activeTab} className="animate-[fadeIn_0.5s_ease-out] w-full flex-1 flex flex-col">
              {activeTab === 'team-intro' && <ProjectTeam />}
              {activeTab === 'strategic-framework' && <StrategicFramework />}
              {activeTab === 'summary' && <ManagementSummary />}
              {activeTab === 'process-transformation' && <ProcessTransformation />}
              {activeTab === 'rice-prioritization' && <RicePrioritization />}
              {activeTab === 'data-projection' && <DataProjection />}
              {activeTab === 'process-map' && <ProcessMap />}
              {activeTab === 'root-cause' && <RootCauseAnalysis />}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
