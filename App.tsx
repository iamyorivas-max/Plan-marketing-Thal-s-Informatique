
import React, { useState } from 'react';
import { SlideData } from './types';
import { DEFAULT_SLIDE_DATA } from './constants';
import SlidePreview from './components/SlidePreview';
import EditorPanel from './components/EditorPanel';
import { GoogleGenAI, Type } from '@google/genai';
import { Maximize2, X } from 'lucide-react';

const App: React.FC = () => {
  const [slideData, setSlideData] = useState<SlideData>(DEFAULT_SLIDE_DATA);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleReset = () => {
    if (confirm('Réinitialiser tous les changements ?')) {
      setSlideData(DEFAULT_SLIDE_DATA);
    }
  };

  const generateWithAI = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Améliore ce texte marketing pour une présentation d'entreprise (Thalès Informatique).
      Renvoie uniquement un objet JSON avec les clés suivantes, optimisées pour être courtes et percutantes:
      historyText, missionText, visionText.
      
      Données actuelles:
      Historique: ${slideData.historyText}
      Mission: ${slideData.missionText}
      Vision: ${slideData.visionText}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              historyText: { type: Type.STRING },
              missionText: { type: Type.STRING },
              visionText: { type: Type.STRING },
            },
            required: ["historyText", "missionText", "visionText"],
          }
        },
      });

      const result = JSON.parse(response.text);
      setSlideData(prev => ({ ...prev, ...result }));
    } catch (error) {
      console.error('Error generating with AI:', error);
      alert('Erreur IA. Veuillez réessayer.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 relative overflow-hidden">
      {/* Main Preview Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 lg:p-8 gap-6 overflow-y-auto">
        <div className="w-full max-w-5xl flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Slide Designer #2</h1>
              <p className="text-slate-500 text-sm font-medium">Layout Corporate - Présentation d'Entreprise</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsPreviewOpen(true)}
                className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 flex items-center gap-2 hover:bg-slate-50 shadow-sm"
              >
                <Maximize2 size={16} />
                Plein Écran
              </button>
            </div>
          </div>
          
          <div className="relative group">
            <SlidePreview data={slideData} />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 rounded-sm pointer-events-none"></div>
          </div>
        </div>
      </main>

      {/* Editor Panel Sidebar */}
      <EditorPanel 
        data={slideData} 
        onChange={setSlideData} 
        onReset={handleReset}
        onGenerateAI={generateWithAI}
        isGenerating={isGenerating}
      />

      {/* Full Screen Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center p-8">
           <button 
             onClick={() => setIsPreviewOpen(false)}
             className="absolute top-8 right-8 p-3 bg-white/10 text-white rounded-full hover:bg-white/20"
           >
             <X size={24} />
           </button>
           <div className="w-full max-w-[1400px]">
             <SlidePreview data={slideData} />
           </div>
        </div>
      )}
      
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .slide-container, .slide-container * { visibility: visible !important; }
          .slide-container {
            position: fixed !important;
            left: 0 !important; top: 0 !important;
            width: 100vw !important; height: 56.25vw !important;
            box-shadow: none !important; border-radius: 0 !important;
          }
          @page { size: landscape; margin: 0; }
        }
      `}</style>
    </div>
  );
};

export default App;
