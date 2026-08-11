import React, { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, DollarSign, PieChart, Filter, Download, ArrowUpRight } from 'lucide-react';
import Card3D from '../components/Card3D';

export default function AnalyticsPage() {
  const [period, setPeriod] = useState('Q4 2026');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const METRICS = [
    { id: 'revenue', title: 'Total Revenue', val: '₹10,000', change: '0.0%', trend: 'up', icon: DollarSign, color: 'sky' },
    { id: 'profit', title: 'Net Profit', val: '₹0', change: '0.0%', trend: 'up', icon: TrendingUp, color: 'indigo' },
    { id: 'cashflow', title: 'Free Cash Flow', val: '₹0', change: '0.0%', trend: 'up', icon: BarChart3, color: 'emerald' },
    { id: 'opex', title: 'Operating Expenses', val: '₹10,000', change: '0.0%', trend: 'down', icon: PieChart, color: 'amber' },
  ];

  const EXPENSE_BREAKDOWN = [
    { category: 'Research & AI Engineering', amount: '₹4,000', pct: '40.0%' },
    { category: 'Infrastructure & Cloud Compute', amount: '₹3,000', pct: '30.0%' },
    { category: 'Operations & Compliance', amount: '₹2,000', pct: '20.0%' },
    { category: 'Sales & Customer Acquisition', amount: '₹1,000', pct: '10.0%' },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-slate-200 pb-6 pt-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase">
            Platform Analytics Core
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] mt-1">
            Financial Analytics & Ledger Breakdown
          </h1>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-mono">
            {['Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026'].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  period === p ? 'bg-white text-sky-700 font-bold shadow-xs border border-slate-200' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button 
            onClick={() => alert('Exporting Q4 Financial Analytics Deck (PDF/CSV)...')}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs text-white font-mono flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-sky-400" /> Export Deck
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((m) => {
          const Icon = m.icon;
          const isSelected = selectedMetric === m.id;
          return (
            <Card3D 
              key={m.id}
              onClick={() => setSelectedMetric(m.id)}
              className={`p-6 cursor-pointer space-y-4 ${
                isSelected ? 'border-sky-400 ring-2 ring-sky-200' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono font-semibold">{m.title}</span>
                <div className={`p-2 rounded-lg ${
                  m.color === 'sky' ? 'bg-sky-50 text-sky-600' :
                  m.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                  m.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                  'bg-amber-50 text-amber-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="text-3xl font-extrabold text-slate-900 font-['Hanken_Grotesk']">{m.val}</div>

              <div className="flex items-center justify-between text-xs font-mono">
                <span className={m.trend === 'up' ? 'text-emerald-600 font-bold' : 'text-sky-700 font-bold'}>
                  {m.change} YoY
                </span>
                <span className="text-slate-400">vs target</span>
              </div>
            </Card3D>
          );
        })}
      </div>

      {/* Main Analytics Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Chart */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-slate-200 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk']">
                Financial Trend Breakdown — {period}
              </h3>
              <p className="text-xs text-slate-500 font-mono">Monthly Recurring Revenue (MRR) vs Operating Expense</p>
            </div>
            <span className="text-xs font-mono text-sky-700 px-2.5 py-1 rounded bg-sky-50 border border-sky-200 font-bold">
              Live SQL Telemetry
            </span>
          </div>

          <div className="h-64 w-full flex items-end justify-between gap-3 pt-6 px-4 bg-slate-50/80 rounded-xl border border-slate-200">
            {[
              { m: 'Jan', rev: 1.8, exp: 1.2 },
              { m: 'Feb', rev: 2.1, exp: 1.3 },
              { m: 'Mar', rev: 2.4, exp: 1.4 },
              { m: 'Apr', rev: 2.8, exp: 1.5 },
              { m: 'May', rev: 3.2, exp: 1.7 },
              { m: 'Jun', rev: 3.7, exp: 1.8 },
              { m: 'Jul', rev: 4.1, exp: 2.0 },
              { m: 'Aug', rev: 4.7, exp: 2.1 },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full flex items-end justify-center gap-1.5 h-48">
                  <div 
                    style={{ height: `${(d.rev / 5) * 100}%` }}
                    className="w-1/2 bg-sky-500 rounded-t shadow-md transition-all duration-300"
                  ></div>
                  <div 
                    style={{ height: `${(d.exp / 5) * 100}%` }}
                    className="w-1/2 bg-amber-400 rounded-t transition-all duration-300"
                  ></div>
                </div>
                <span className="text-[10px] font-mono text-slate-600 font-semibold">{d.m}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 text-xs font-mono text-slate-600 font-semibold pt-2">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-sky-500"></span> Gross Revenue (₹ Cr)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-amber-400"></span> Operating Expenses (₹ Cr)
            </span>
          </div>
        </div>

        {/* Right OpEx Breakdown */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-slate-200 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk']">
              OpEx Distribution
            </h3>
            <p className="text-xs text-slate-500 font-mono">Departmental allocation for {period}</p>
          </div>

          <div className="space-y-4">
            {EXPENSE_BREAKDOWN.map((exp, idx) => (
              <div key={idx} className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-800 font-bold">{exp.category}</span>
                  <span className="text-sky-700 font-bold">{exp.amount}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div 
                    style={{ width: exp.pct }} 
                    className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full"
                  ></div>
                </div>
                <div className="text-[10px] text-right font-mono text-slate-500">{exp.pct} of total OpEx</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
