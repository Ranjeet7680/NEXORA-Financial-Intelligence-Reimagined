import React, { useState } from 'react';
import { TrendingUp, Cpu, LineChart, Layers, ArrowRight, Zap } from 'lucide-react';
import Card3D from '../components/Card3D';

export default function ForecastingPage() {
  const [scenario, setScenario] = useState('base');

  const SCENARIOS = {
    optimistic: { label: 'Optimistic (P90)', rev: '₹31.2 Cr', cash: '₹11.4 Cr', color: 'emerald' },
    base: { label: 'Base Case (P50)', rev: '₹24.8 Cr', cash: '₹8.17 Cr', color: 'sky' },
    conservative: { label: 'Conservative (P10)', rev: '₹19.6 Cr', cash: '₹5.8 Cr', color: 'amber' }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-bold">
          <TrendingUp className="w-4 h-4 text-indigo-600 animate-bounce" />
          <span>TIME-SERIES BAYESIAN FORECASTING</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Multi-Scenario <span className="gradient-text-sky-indigo">Predictive Models.</span>
        </h1>
        <p className="text-slate-600 text-base">
          Leverage advanced neural probability models to forecast multi-scenario revenue, simulate cash flows with Monte Carlo distributions, and define confidence bands.
        </p>
      </div>

      {/* Scenario Selector & Display */}
      <div className="glass-panel p-8 rounded-2xl border border-slate-200 space-y-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-['Hanken_Grotesk']">Revenue & Cash Flow Probability Model</h3>
            <p className="text-xs text-slate-500 font-mono">10,000 Monte Carlo Iterations • Neural Confidence Band</p>
          </div>

          <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-mono">
            {Object.keys(SCENARIOS).map((key) => (
              <button
                key={key}
                onClick={() => setScenario(key)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  scenario === key
                    ? 'bg-white text-sky-700 font-bold border border-slate-200 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {SCENARIOS[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Forecast Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs text-slate-500 font-mono font-semibold">Projected Annual Revenue</span>
            <div className="text-3xl font-extrabold text-sky-700 font-['Hanken_Grotesk']">
              {SCENARIOS[scenario].rev}
            </div>
            <span className="text-[10px] text-emerald-600 font-mono font-bold">Confidence Level: 94.2%</span>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs text-slate-500 font-mono font-semibold">Estimated Free Cash Reserves</span>
            <div className="text-3xl font-extrabold text-indigo-600 font-['Hanken_Grotesk']">
              {SCENARIOS[scenario].cash}
            </div>
            <span className="text-[10px] text-sky-700 font-mono font-bold">Runway: 24+ Months</span>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs text-slate-500 font-mono font-semibold">Model Latency & Variance</span>
            <div className="text-3xl font-extrabold text-emerald-600 font-['Hanken_Grotesk']">
              ± 2.4%
            </div>
            <span className="text-[10px] text-slate-500 font-mono font-bold">Sub-second Bayes Sync</span>
          </div>
        </div>

        {/* Visual Ribbon Chart */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono text-slate-500 font-semibold">
            <span>BAYESIAN CONFIDENCE INTERVAL RIBBON (P10 - P90)</span>
            <span>Q1 2027 Projections</span>
          </div>

          <div className="h-40 w-full bg-slate-900 rounded-xl border border-slate-800 p-4 flex items-end justify-between gap-3 relative overflow-hidden text-white">
            <div className="absolute inset-x-0 bottom-6 top-10 bg-gradient-to-r from-sky-500/20 via-indigo-500/30 to-sky-500/20 pointer-events-none border-y border-sky-400/40"></div>

            {[35, 42, 58, 65, 78, 84, 92, 100].map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 z-10">
                <div className="w-full flex items-end justify-center h-28 relative">
                  <div 
                    style={{ height: `${val}%` }}
                    className="w-2 rounded-t bg-sky-400 shadow-md"
                  ></div>
                </div>
                <span className="text-[9px] font-mono text-slate-400">M{idx+1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Underlying AI Models */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk']">Underlying Forecasting Models</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card3D className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk']">Transformer Neural Nets</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Attention-mechanism time-series architectures that model long-range macroeconomic dependencies and seasonal shocks.
            </p>
          </Card3D>

          <Card3D className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-bold">
              <LineChart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk']">Bayesian Inference</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Probabilistic frameworks that update priors continuously as raw ledger events stream in, establishing true P10/P50/P90 probability bands.
            </p>
          </Card3D>

          <Card3D className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk']">Monte Carlo Simulations</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              10,000+ parallel trial runs measuring interest rate shifts, supply chain delays, and customer churn impact.
            </p>
          </Card3D>
        </div>
      </div>

    </div>
  );
}
