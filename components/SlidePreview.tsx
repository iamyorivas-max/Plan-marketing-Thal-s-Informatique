
import React from 'react';
import { SlideData } from '../types';
import IconRenderer from './IconRenderer';

interface SlidePreviewProps {
  data: SlideData;
}

const SlidePreview: React.FC<SlidePreviewProps> = ({ data }) => {
  return (
    <div 
      className="slide-container text-white select-none relative shadow-2xl rounded-sm flex flex-col p-[4%]"
      style={{ backgroundColor: data.backgroundColor }}
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-transparent pointer-events-none"></div>

      {/* Header */}
      <div className="flex justify-between items-center mb-10 z-10">
        <h1 className="text-4xl font-black tracking-tight flex items-center gap-4">
          <span className="text-white">{data.mainTitle.split(' ')[0]}</span>
          <span className="text-white">{data.mainTitle.split(' ')[1]}</span>
          <span style={{ color: data.accentColor }}>{data.mainTitle.split(' ').slice(2).join(' ')}</span>
        </h1>
        <div className="flex items-center gap-3">
          <IconRenderer name={data.logoIcon} style={{ color: data.accentColor }} size={24} />
          <span className="text-lg font-bold tracking-widest text-gray-400 uppercase">{data.companyName}</span>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="flex-1 flex gap-8 z-10 overflow-hidden">
        
        {/* Left Sidebar (Historique, Mission, Vision) */}
        <div 
          className="w-[28%] rounded-2xl p-6 relative flex flex-col justify-between"
          style={{ backgroundColor: data.cardColor }}
        >
          {/* Vertical Accent Bar */}
          <div className="absolute left-0 top-6 bottom-6 w-1.5 rounded-full" style={{ backgroundColor: data.accentColor }}></div>
          
          <div className="space-y-8">
            {/* Historique */}
            <div className="pl-4">
              <div className="flex items-center gap-2 mb-2">
                <IconRenderer name={data.historyIcon} style={{ color: data.accentColor }} size={20} />
                <h3 className="font-bold text-xl" style={{ color: data.accentColor }}>{data.historyTitle}</h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{data.historyText}</p>
            </div>

            {/* Mission - Boxed with dashed border */}
            <div className="pl-4">
              <div className="flex items-center gap-2 mb-2">
                <IconRenderer name={data.missionIcon} style={{ color: data.accentColor }} size={20} />
                <h3 className="font-bold text-xl" style={{ color: data.accentColor }}>{data.missionTitle}</h3>
              </div>
              <div className="p-4 rounded-xl border border-dashed border-gray-600 bg-white/5">
                <p className="text-white text-xs leading-relaxed italic">{data.missionText}</p>
              </div>
            </div>

            {/* Vision */}
            <div className="pl-4">
              <div className="flex items-center gap-2 mb-2">
                <IconRenderer name={data.visionIcon} style={{ color: data.accentColor }} size={20} />
                <h3 className="font-bold text-xl" style={{ color: data.accentColor }}>{data.visionTitle}</h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{data.visionText}</p>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col justify-between">
          
          {/* Values Row */}
          <div>
            <h4 className="text-gray-400 text-sm font-bold tracking-[0.2em] mb-4">{data.valuesTitle}</h4>
            <div className="grid grid-cols-4 gap-4">
              {data.values.map((val, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-transform hover:scale-105"
                  style={{ backgroundColor: data.cardColor }}
                >
                  <IconRenderer name={val.icon} style={{ color: data.accentColor }} size={32} />
                  <span className="font-bold text-sm text-center">{val.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors Row */}
          <div>
            <h4 className="text-gray-400 text-sm font-bold tracking-[0.2em] mb-4">{data.sectorsTitle}</h4>
            <div className="flex flex-wrap gap-3">
              {data.sectors.map((sector, idx) => (
                <div 
                  key={idx}
                  className="px-5 py-2.5 rounded-full border border-gray-700 bg-white/5 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: data.accentColor }}></div>
                  <span className="text-xs font-semibold text-gray-300">{sector}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Stats Card */}
          <div 
            className="rounded-2xl p-6 flex justify-around items-center"
            style={{ backgroundColor: data.cardColor }}
          >
            {data.stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="text-4xl font-black" style={{ color: data.accentColor }}>{stat.value}</span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase leading-tight">{stat.label.split(' ')[0]}</span>
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase leading-tight">{stat.label.split(' ').slice(1).join(' ')}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SlidePreview;
