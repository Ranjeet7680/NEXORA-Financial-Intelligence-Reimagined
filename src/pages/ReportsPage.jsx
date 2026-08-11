import React, { useState } from 'react';
import { 
  BarChart2, TrendingUp, DollarSign, Activity, ShieldCheck, 
  ArrowUpRight, Bot, Layers, Download, RefreshCcw
} from 'lucide-react';
import { DEMO_METRICS } from '../data/nexoraData';
import Card3D from '../components/Card3D';

export default function ReportsPage() {
  const [activeChartTab, setActiveChartTab] = useState('revenue');

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-slate-200 pb-6 pt-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-700 font-bold mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            LIVE PRODUCT INTELLIGENCE DEMO DASHBOARD
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Hanken_Grotesk']">
            Executive Financial Health Overview
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => alert('Refreshing live telemetry metrics from BigQuery lakehouse...')}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <RefreshCcw className="w-3.5 h-3.5 text-sky-600" /> Refresh Telemetry
          </button>
          
          <button 
            onClick={() => alert('Downloading Board Executive Summary (PDF)...')}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 font-bold text-white text-xs shadow-md flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" /> Export Executive Deck
          </button>
        </div>
      </div>

      {/* 4 Core Hero Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <Card3D className="p-6 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-slate-500 font-semibold">
            <span>Financial Health</span>
            <span className="text-xs font-bold text-emerald-700 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 flex items-center gap-1">
              🟢 {DEMO_METRICS.healthStatus}
            </span>
          </div>
          <div className="text-4xl font-extrabold text-slate-900 font-['Hanken_Grotesk']">{DEMO_METRICS.healthScore} <span className="text-lg font-normal text-slate-400">/ 100</span></div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div style={{ width: `${DEMO_METRICS.healthScore}%` }} className="h-full bg-emerald-500 rounded-full"></div>
          </div>
        </Card3D>

        <Card3D className="p-6 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-slate-500 font-semibold">
            <span>Revenue</span>
            <span className="text-xs font-bold text-emerald-700">{DEMO_METRICS.revenueGrowth}</span>
          </div>
          <div className="text-4xl font-extrabold text-sky-700 font-['Hanken_Grotesk']">{DEMO_METRICS.revenue}</div>
          <div className="text-[11px] font-mono text-slate-500">YoY Operating Revenue Growth</div>
        </Card3D>

        <Card3D className="p-6 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-slate-500 font-semibold">
            <span>Net Profit</span>
            <span className="text-xs font-bold text-indigo-700">{DEMO_METRICS.profitGrowth}</span>
          </div>
          <div className="text-4xl font-extrabold text-indigo-600 font-['Hanken_Grotesk']">{DEMO_METRICS.netProfit}</div>
          <div className="text-[11px] font-mono text-slate-500">Net Profit Margin: 25.8%</div>
        </Card3D>

        <Card3D className="p-6 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono text-slate-500 font-semibold">
            <span>Cash Flow</span>
            <span className="text-xs font-bold text-emerald-700">{DEMO_METRICS.cashFlowGrowth}</span>
          </div>
          <div className="text-4xl font-extrabold text-emerald-600 font-['Hanken_Grotesk']">{DEMO_METRICS.cashFlow}</div>
          <div className="text-[11px] font-mono text-slate-500">Unrestricted Liquid Reserves</div>
        </Card3D>

      </div>

      {/* Interactive Tabs for the 6 Requested Charts */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-200 space-y-8 shadow-sm">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <h3 className="text-xl font-bold text-slate-900 font-['Hanken_Grotesk']">
            Analytical Telemetry Graphs
          </h3>

          <div className="flex flex-wrap bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-mono">
            {[
              { id: 'revenue', label: 'Revenue Growth' },
              { id: 'profitability', label: 'Profitability' },
              { id: 'cashflow', label: 'Cash Flow' },
              { id: 'expenses', label: 'Expense Analysis' },
              { id: 'risk', label: 'Risk Trend' },
              { id: 'forecast', label: 'AI Forecast' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveChartTab(t.id)}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  activeChartTab === t.id
                    ? 'bg-white text-slate-900 font-bold shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Chart Display Canvas */}
        <div className="h-72 w-full bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-col justify-between relative overflow-hidden shadow-md">
          
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 z-10">
            <span className="text-sky-400 font-bold uppercase">
              ACTIVE GRAPH: {activeChartTab.toUpperCase()} METRICS STREAM
            </span>
            <span>REAL-TIME AUDITED TELEMETRY</span>
          </div>

          {/* Simulated Chart Bars */}
          <div className="h-44 w-full flex items-end justify-between gap-3 pt-4 border-b border-slate-800 z-10">
            {[
              { month: 'Q1 2025', val: 40 },
              { month: 'Q2 2025', val: 52 },
              { month: 'Q3 2025', val: 64 },
              { month: 'Q4 2025', val: 78 },
              { month: 'Q1 2026', val: 82 },
              { month: 'Q2 2026', val: 89 },
              { month: 'Q3 2026', val: 94 },
              { month: 'Q4 2026', val: 100 },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                <div className="w-full flex items-end justify-center h-36">
                  <div 
                    style={{ height: `${activeChartTab === 'risk' ? 100 - d.val : d.val}%` }} 
                    className={`w-full rounded-t transition-all duration-500 ${
                      activeChartTab === 'risk' ? 'bg-emerald-500' :
                      activeChartTab === 'profitability' ? 'bg-indigo-500' :
                      activeChartTab === 'expenses' ? 'bg-amber-400' :
                      'bg-sky-400 shadow-md'
                    }`}
                  ></div>
                </div>
                <span className="text-[10px] font-mono text-slate-400">{d.month}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-xs font-mono text-slate-400 z-10">
            <span>Model Confidence: 99.8%</span>
            <span className="text-sky-400">P90 Forecast Upper Band</span>
          </div>

        </div>

      </div>

    </div>
  );
}
