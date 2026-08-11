import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { FUTURE_ROADMAP } from '../data/nexoraData';

export default function FuturePage({ openDemoModal }) {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>NEXORA FUTURE ROADMAP 2026 - 2029+</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Building Beyond <span className="gradient-text-sky-indigo">Today's Finance.</span>
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Our multi-year architectural roadmap to construct an autonomous financial decision layer for global enterprise operations.
        </p>
      </div>

      {/* Interactive Year Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3">
        {FUTURE_ROADMAP.map((era, idx) => (
          <button
            key={era.year}
            onClick={() => setActiveYearIndex(idx)}
            className={`px-6 py-3 rounded-xl font-mono text-xs font-bold transition-all border ${
              activeYearIndex === idx
                ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-105'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            {era.year} — {era.phase}
          </button>
        ))}
      </div>

      {/* Timeline Vertical / Grid Architecture */}
      <div className="space-y-8">
        {FUTURE_ROADMAP.map((era, idx) => {
          const isSelected = activeYearIndex === idx;
          return (
            <div 
              key={era.year}
              className={`p-8 rounded-3xl transition-all border ${
                isSelected 
                  ? 'bg-white border-sky-400 shadow-xl ring-2 ring-sky-100'
                  : 'glass-panel border-slate-200/80 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Year & Phase Info */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-extrabold text-slate-900 font-['Hanken_Grotesk']">{era.year}</span>
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                      era.badgeColor === 'emerald' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                      era.badgeColor === 'sky' ? 'bg-sky-50 text-sky-800 border-sky-200' :
                      era.badgeColor === 'indigo' ? 'bg-indigo-50 text-indigo-800 border-indigo-200' :
                      'bg-amber-50 text-amber-800 border-amber-200'
                    }`}>
                      Phase {idx + 1}: {era.phase}
                    </span>
                  </div>

                  <p className="text-xs text-sky-700 font-mono font-bold">{era.status}</p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">{era.desc}</p>
                </div>

                {/* Milestones Checklist */}
                <div className="lg:col-span-8 bg-slate-50/80 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-3">
                    Phase Milestones & Deliverables
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {era.items.map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-800 shadow-xs">
                        <div className="flex items-center gap-2">
                          {item.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border-2 border-sky-500 shrink-0"></span>
                          )}
                          <span>{item.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          {item.completed ? 'COMPLETED' : 'PLANNED'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Vision Statement Box */}
      <div className="p-10 rounded-3xl bg-slate-900 text-white text-center space-y-4 shadow-xl">
        <Globe className="w-10 h-10 text-sky-400 mx-auto" />
        <h2 className="text-2xl font-bold font-['Hanken_Grotesk']">The 2029+ Vision</h2>
        <p className="text-slate-300 text-sm max-w-3xl mx-auto leading-relaxed">
          "Nexora aims to evolve from an analytics platform into an intelligent financial decision layer capable of continuously understanding business performance, identifying opportunities, predicting risks, and recommending actions."
        </p>
        <div className="pt-4">
          <button 
            onClick={openDemoModal}
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold shadow-md transition-colors inline-flex items-center gap-2"
          >
            Partner on Future R&D <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
