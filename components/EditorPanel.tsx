
import React from 'react';
import { SlideData, IconName } from '../types';
import { AVAILABLE_ICONS, THALES_BLUE, THALES_YELLOW } from '../constants';
import { Download, RefreshCw, Type, Palette, Layout, Zap, Info, ShieldCheck, Target } from 'lucide-react';
import IconRenderer from './IconRenderer';

interface EditorPanelProps {
  data: SlideData;
  onChange: (newData: SlideData) => void;
  onReset: () => void;
  onGenerateAI: () => void;
  isGenerating: boolean;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ data, onChange, onReset, onGenerateAI, isGenerating }) => {
  const handleChange = (field: keyof SlideData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const SectionTitle = ({ icon: Icon, title }: { icon: any, title: string }) => (
    <div className="flex items-center gap-2 text-slate-800 font-bold mb-4 pt-4 first:pt-0 border-t border-slate-200 first:border-0">
      <Icon size={18} />
      <h3 className="text-sm uppercase tracking-wider">{title}</h3>
    </div>
  );

  return (
    <div className="w-full lg:w-96 bg-white border-l border-slate-200 h-screen overflow-y-auto p-6 flex flex-col shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-black text-slate-900">DIAPO #2 CONFIG</h2>
        <button onClick={onReset} className="p-2 text-slate-400 hover:text-red-500"><RefreshCw size={20} /></button>
      </div>

      <div className="space-y-6 flex-1">
        {/* Style */}
        <div>
          <SectionTitle icon={Palette} title="Charte Graphique" />
          <div className="flex gap-2">
            <button onClick={() => handleChange('accentColor', THALES_BLUE)} className="w-8 h-8 rounded-full bg-[#0055A4] border-2 border-slate-200"></button>
            <button onClick={() => handleChange('accentColor', THALES_YELLOW)} className="w-8 h-8 rounded-full bg-[#FFC107] border-2 border-slate-200"></button>
            <input 
              type="color" 
              value={data.accentColor}
              onChange={(e) => handleChange('accentColor', e.target.value)}
              className="w-8 h-8 rounded-full overflow-hidden p-0 border-none cursor-pointer"
            />
          </div>
        </div>

        {/* Sidebar Sections */}
        <div>
          <SectionTitle icon={Info} title="Histoire / Mission / Vision" />
          <div className="space-y-4">
            <textarea 
              value={data.historyText}
              onChange={(e) => handleChange('historyText', e.target.value)}
              placeholder="Texte Historique"
              className="w-full p-2 border border-slate-200 rounded text-xs h-20"
            />
            <textarea 
              value={data.missionText}
              onChange={(e) => handleChange('missionText', e.target.value)}
              placeholder="Texte Mission"
              className="w-full p-2 border border-slate-200 rounded text-xs h-20 italic bg-slate-50"
            />
            <textarea 
              value={data.visionText}
              onChange={(e) => handleChange('visionText', e.target.value)}
              placeholder="Texte Vision"
              className="w-full p-2 border border-slate-200 rounded text-xs h-20"
            />
          </div>
        </div>

        {/* Values Section */}
        <div>
          <SectionTitle icon={ShieldCheck} title="Valeurs & Secteurs" />
          <div className="space-y-2">
            {data.values.map((v, idx) => (
              <div key={idx} className="flex gap-2">
                <input 
                  type="text" 
                  value={v.title}
                  onChange={(e) => {
                    const newValues = [...data.values];
                    newValues[idx].title = e.target.value;
                    handleChange('values', newValues);
                  }}
                  className="flex-1 p-2 border border-slate-200 rounded text-xs"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div>
          <SectionTitle icon={Target} title="Chiffres Clés" />
          <div className="space-y-2">
            {data.stats.map((s, idx) => (
              <div key={idx} className="flex gap-2">
                <input 
                  type="text" 
                  value={s.value}
                  onChange={(e) => {
                    const newStats = [...data.stats];
                    newStats[idx].value = e.target.value;
                    handleChange('stats', newStats);
                  }}
                  className="w-16 p-2 border border-slate-200 rounded text-xs font-bold"
                />
                <input 
                  type="text" 
                  value={s.label}
                  onChange={(e) => {
                    const newStats = [...data.stats];
                    newStats[idx].label = e.target.value;
                    handleChange('stats', newStats);
                  }}
                  className="flex-1 p-2 border border-slate-200 rounded text-xs"
                />
              </div>
            ))}
          </div>
        </div>

        {/* AI Optimization */}
        <div className="pt-4">
          <button 
            onClick={onGenerateAI}
            disabled={isGenerating}
            className="w-full bg-slate-900 text-white p-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 disabled:opacity-50 transition-all shadow-lg active:scale-95"
          >
            {isGenerating ? <RefreshCw className="animate-spin" size={20} /> : <Zap size={20} className="text-yellow-400 fill-yellow-400" />}
            {isGenerating ? 'Optimisation...' : 'Reformuler par IA'}
          </button>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-100 pt-6">
        <button 
          onClick={() => window.print()}
          className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-blue-200 shadow-xl"
        >
          <Download size={20} />
          Télécharger le design
        </button>
      </div>
    </div>
  );
};

export default EditorPanel;
