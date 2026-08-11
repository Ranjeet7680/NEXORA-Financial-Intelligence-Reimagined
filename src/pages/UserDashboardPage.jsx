import React, { useState } from 'react';
import { 
  Bot, TrendingUp, ShieldAlert, LineChart, Activity, Database, 
  Search, RefreshCcw, Download, CheckCircle2, AlertTriangle, ArrowUpRight, Zap
} from 'lucide-react';
import { DEMO_METRICS } from '../data/nexoraData';

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchVal, setSearchVal] = useState('');
  const [copilotQuery, setCopilotQuery] = useState('');
  const [copilotResult, setCopilotResult] = useState(null);

  const handleCopilotQuery = (e) => {
    e.preventDefault();
    if (!copilotQuery.trim()) return;
    setCopilotResult({
      query: copilotQuery,
      res: `Analysis complete: Processing "${copilotQuery}" against active Q4 ledger. Revenue run-rate is tracking at ₹24.8 Cr (+18.4% YoY). Zero fraud anomalies detected across 148,920 transactions.`
    });
    setCopilotQuery('');
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d1424] to-slate-900 border border-cyan-500/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            ACTIVE ENTERPRISE WORKSPACE • NEXORA FINANCIAL INTELLIGENCE
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Hanken_Grotesk']">
            Production Intelligence Console
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <span className="text-xs text-slate-300 font-bold block">Nexora Main Workspace</span>
            <span className="text-[10px] text-slate-400 font-mono">Org ID: NX-8849-2026</span>
          </div>

          <button 
            onClick={() => alert('Exporting full ledger analytics payload...')}
            className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" /> Export Data Payload
          </button>
        </div>
      </div>

      {/* Top 4 Real-time Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
          <span className="text-xs font-mono text-slate-400">System Health Score</span>
          <div className="text-3xl font-bold text-emerald-400 font-['Hanken_Grotesk']">{DEMO_METRICS.healthScore} / 100</div>
          <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> All 10 Modules Operational
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
          <span className="text-xs font-mono text-slate-400">Current Q4 Revenue</span>
          <div className="text-3xl font-bold text-cyan-300 font-['Hanken_Grotesk']">{DEMO_METRICS.revenue}</div>
          <div className="text-[10px] font-mono text-cyan-400">{DEMO_METRICS.revenueGrowth} vs Q4 2025</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
          <span className="text-xs font-mono text-slate-400">Net Operational Profit</span>
          <div className="text-3xl font-bold text-violet-300 font-['Hanken_Grotesk']">{DEMO_METRICS.netProfit}</div>
          <div className="text-[10px] font-mono text-violet-400">{DEMO_METRICS.profitGrowth} margin expansion</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
          <span className="text-xs font-mono text-slate-400">Anomaly Index & Solvency</span>
          <div className="text-3xl font-bold text-emerald-300 font-['Hanken_Grotesk']">14 / 100</div>
          <div className="text-[10px] font-mono text-slate-400">Zero Critical Fraud Vectors</div>
        </div>
      </div>

      {/* Copilot Bar */}
      <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
          <span className="flex items-center gap-2">
            <Bot className="w-4 h-4" /> INSTANT COPILOT QUERY CONSOLE
          </span>
          <span>FastAPI RAG Sync</span>
        </div>

        <form onSubmit={handleCopilotQuery} className="flex items-center gap-3">
          <input 
            type="text"
            value={copilotQuery}
            onChange={(e) => setCopilotQuery(e.target.value)}
            placeholder="Type any financial question (e.g. 'Show revenue vs cash flow trajectory')..."
            className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500 font-mono"
          />
          <button 
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 font-bold text-slate-950 text-xs shadow-md"
          >
            Execute RAG Query
          </button>
        </form>

        {copilotResult && (
          <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/40 text-xs font-mono text-slate-200 space-y-1">
            <span className="text-cyan-400 font-bold block">query: "{copilotResult.query}"</span>
            <p className="text-slate-300">{copilotResult.res}</p>
          </div>
        )}
      </div>

    </div>
  );
}
