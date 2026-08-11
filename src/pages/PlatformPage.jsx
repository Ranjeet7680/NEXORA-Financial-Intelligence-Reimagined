import React from 'react';
import { 
  Bot, TrendingUp, ShieldAlert, LineChart, Mic, Database, 
  ArrowRight, CheckCircle2, Cpu, Zap, Layers, Lock
} from 'lucide-react';
import { PLATFORM_CARDS } from '../data/nexoraData';
import Card3D from '../components/Card3D';

export default function PlatformPage({ setActiveTab, openDemoModal }) {
  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
          Core Capability Suite
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          One Intelligent Platform.<br />
          <span className="gradient-text-sky-indigo">Every Financial Decision.</span>
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Nexora unifies real-time ledger data, machine learning risk engines, and generative AI copilots into one seamlessly integrated intelligence environment.
        </p>
      </div>

      {/* Grid of Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PLATFORM_CARDS.map((card) => (
          <Card3D 
            key={card.id}
            className="p-8 cursor-pointer flex flex-col justify-between group space-y-6"
          >
            <div 
              onClick={() => {
                const targetTab = card.id === 'voice-system' ? 'copilot' : card.id === 'data-layer' ? 'analytics' : card.id;
                setActiveTab(targetTab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                  {card.id === 'copilot' && <Bot className="w-7 h-7" />}
                  {card.id === 'analytics' && <TrendingUp className="w-7 h-7" />}
                  {card.id === 'risk' && <ShieldAlert className="w-7 h-7 text-red-500" />}
                  {card.id === 'forecasting' && <LineChart className="w-7 h-7 text-indigo-600" />}
                  {card.id === 'voice-system' && <Mic className="w-7 h-7 text-emerald-600 animate-pulse" />}
                  {card.id === 'data-layer' && <Database className="w-7 h-7 text-amber-600" />}
                </div>
                <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {card.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors font-['Hanken_Grotesk']">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  const targetTab = card.id === 'voice-system' ? 'copilot' : card.id === 'data-layer' ? 'analytics' : card.id;
                  setActiveTab(targetTab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold font-mono text-sky-700 hover:text-sky-800 flex items-center gap-1.5"
              >
                Launch Module Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card3D>
        ))}
      </div>

      {/* Feature Deep Dive Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-mono text-sky-700 uppercase tracking-wider font-bold">
            Zero-Latency Architecture
          </span>
          <h2 className="text-3xl font-bold text-slate-900 font-['Hanken_Grotesk']">
            Connect Once. Query Everywhere.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Nexora plugs directly into your existing enterprise databases (BigQuery, PostgreSQL, Snowflake) and financial software (Stripe, QuickBooks, NetSuite) without modifying historical records.
          </p>
          
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-700 font-mono font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> GAAP Compliant
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Multi-Currency
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Real-time Telemetry
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sub-second Queries
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 text-xs font-mono shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span>DATA PIPELINE HEALTH MONITOR</span>
            <span className="text-emerald-400 font-bold">ACTIVE</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-slate-300">
              <span>PostgreSQL Production DB:</span>
              <span className="text-sky-400 font-bold">Synced (12ms)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Google BigQuery Lakehouse:</span>
              <span className="text-sky-400 font-bold">Synced (45ms)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Stripe Gateway Stream:</span>
              <span className="text-sky-400 font-bold">Live Webhook</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Copilot RAG Vector Index:</span>
              <span className="text-indigo-400 font-bold">Up to date</span>
            </div>
          </div>

          <button 
            onClick={openDemoModal}
            className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-colors"
          >
            Request Enterprise Integration Spec →
          </button>
        </div>
      </div>

    </div>
  );
}
