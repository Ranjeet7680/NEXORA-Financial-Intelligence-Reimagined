import React, { useState } from 'react';
import { Cpu, Code, Database, Cloud, LineChart, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { TECH_STACK } from '../data/nexoraData';
import Card3D from '../components/Card3D';

export default function TechnologyPage() {
  const [selectedLayer, setSelectedLayer] = useState('ai');

  const ARCH_LAYERS = [
    { id: 'frontend', name: 'Frontend Layer', items: TECH_STACK.frontend, icon: Code, color: 'sky', desc: 'Next.js 14, React 19, TypeScript, TailwindCSS for high-performance 3D user interfaces.' },
    { id: 'backend', name: 'Backend API Mesh', items: TECH_STACK.backend, icon: Cpu, color: 'blue', desc: 'Python FastAPI microservices with Celery background task processing and Redis latency caching.' },
    { id: 'ai', name: 'AI & Copilot Engine', items: TECH_STACK.ai, icon: Sparkles, color: 'indigo', desc: 'Fine-tuned LLMs, PyTorch neural networks, RAG pipelines, and autonomous AI agents.' },
    { id: 'data', name: 'Data Intelligence Layer', items: TECH_STACK.data, icon: Database, color: 'amber', desc: 'PostgreSQL relational store, Google BigQuery analytical lakehouse, and Vector DB.' },
    { id: 'cloud', name: 'Cloud & Infrastructure', items: TECH_STACK.cloud, icon: Cloud, color: 'emerald', desc: 'Google Cloud Platform (GCP), Vertex AI, Docker containers, and Kubernetes auto-scaling.' },
    { id: 'visualization', name: 'Telemetry & 3D WebGL', items: TECH_STACK.visualization, icon: LineChart, color: 'purple', desc: 'Three.js 3D WebGL Engine, Recharts, and D3.js for real-time financial telemetry.' },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
          <Layers className="w-4 h-4 text-sky-600" />
          <span>TECHNICAL ARCHITECTURE SPECIFICATION</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Nexora Technology <span className="gradient-text-sky-indigo">Stack & Architecture.</span>
        </h1>
        <p className="text-slate-600 text-base">
          Built on a distributed, low-latency stack designed to handle millions of financial ledger events per second with sub-second AI inference.
        </p>
      </div>

      {/* Interactive Architecture Diagram */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-200 space-y-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-['Hanken_Grotesk']">System Architecture Stack</h3>
            <p className="text-xs text-slate-500 font-mono">Click any architecture node below to inspect tech details</p>
          </div>
          <span className="text-xs font-mono text-sky-700 font-bold">Interactive 3D Blueprint</span>
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCH_LAYERS.map((layer) => {
            const Icon = layer.icon;
            const isSelected = selectedLayer === layer.id;
            return (
              <div
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-4 ${
                  isSelected
                    ? 'bg-sky-50/80 border-sky-400 shadow-md scale-[1.02]'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-200 text-sky-800 font-bold">
                      INSPECTED
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk']">{layer.name}</h4>
                <p className="text-xs text-slate-600 leading-snug">{layer.desc}</p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200">
                  {layer.items.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stack Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(TECH_STACK).map((category) => (
          <div key={category} className="glass-panel p-6 rounded-2xl border border-slate-200 space-y-4">
            <h4 className="text-sm font-bold text-sky-700 font-mono uppercase tracking-wider">
              {category} Ecosystem
            </h4>
            <div className="space-y-2">
              {TECH_STACK[category].map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-800 flex items-center justify-between font-semibold">
                  <span>{item}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
