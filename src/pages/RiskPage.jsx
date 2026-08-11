import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle, Activity, Sliders, CheckCircle2 } from 'lucide-react';
import Card3D from '../components/Card3D';

export default function RiskPage() {
  const [volatilityFactor, setVolatilityFactor] = useState(25);
  const [interestRateShift, setInterestRateShift] = useState(1.5);

  const calculateRiskIndex = () => {
    return Math.min(99.9, (14 + volatilityFactor * 0.4 + interestRateShift * 2.5)).toFixed(1);
  };

  const ALERTS_STREAM = [
    { time: '10:42 AM', type: 'INFO', msg: 'KYC & AML ledger validation completed (0 flags)' },
    { time: '09:15 AM', type: 'WARNING', msg: 'Anomalous vendor wire request flagged (Retained for audit)' },
    { time: '08:00 AM', type: 'SUCCESS', msg: 'Automated Basel III Liquidity Buffer Check Passed (210% Coverage)' }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold">
          <ShieldAlert className="w-4 h-4 text-red-600 animate-pulse" />
          <span>NEXORA GUARDIAN RISK ENGINE v1.2</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Detecting the Invisible.<br />
          <span className="gradient-text-sky-indigo">
            Protecting Your Enterprise.
          </span>
        </h1>
        <p className="text-slate-600 text-base">
          Neural-grade precision in identifying financial anomalies, liquidity stress vectors, and compliance risks before they manifest.
        </p>
      </div>

      {/* Top Banner: Anomaly Index & Live Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Stat Box */}
        <Card3D className="lg:col-span-4 p-8 border-red-200 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">ANOMALY DETECTION INDEX</span>
          
          <div className="text-5xl sm:text-6xl font-extrabold text-red-600 font-['Hanken_Grotesk']">
            {calculateRiskIndex()}%
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-center gap-2 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Risk Status: Low Solvency Threat</span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Multi-layered neural models scan ledger transactions 24/7 to flag non-linear fraud and liquidity stress.
          </p>
        </Card3D>

        {/* Right Stress Testing Simulator */}
        <div className="lg:col-span-8 glass-panel p-8 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] flex items-center gap-2">
              <Sliders className="w-5 h-5 text-sky-600" /> Real-Time Market Stress Simulator
            </h3>
            <span className="text-xs font-mono text-sky-700 font-bold">Monte Carlo Interactive</span>
          </div>

          <div className="space-y-6">
            {/* Slider 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-700 font-semibold">
                <span>Market Volatility Index (VIX):</span>
                <span className="text-sky-700 font-bold">{volatilityFactor}%</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="80" 
                value={volatilityFactor}
                onChange={(e) => setVolatilityFactor(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
            </div>

            {/* Slider 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-700 font-semibold">
                <span>Interest Rate Shock (+/- %):</span>
                <span className="text-indigo-600 font-bold">+{interestRateShift}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="5" 
                step="0.25"
                value={interestRateShift}
                onChange={(e) => setInterestRateShift(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            {/* Simulated Response */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-600 font-semibold">
                <span>PROJECTED LIQUIDITY BUFFER AT STRESS LEVEL:</span>
                <span className="text-emerald-700 font-bold">₹14.2 Cr (Safe)</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Under a {volatilityFactor}% market shock and +{interestRateShift}% rate hike, Nexora predicts zero insolvency risk over a 180-day runway.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Audit Log Feed */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs font-mono">
          <span className="text-slate-900 font-bold flex items-center gap-2">
            <Activity className="w-4 h-4 text-sky-600" /> AUTOMATED GOVERNANCE & COMPLIANCE STREAM
          </span>
          <span className="text-slate-500">Immutable Ledger Logs</span>
        </div>

        <div className="space-y-2">
          {ALERTS_STREAM.map((log, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-slate-500">{log.time}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  log.type === 'INFO' ? 'bg-sky-100 text-sky-800' :
                  log.type === 'WARNING' ? 'bg-amber-100 text-amber-800' :
                  'bg-emerald-100 text-emerald-800'
                }`}>
                  {log.type}
                </span>
                <span className="text-slate-800 font-medium">{log.msg}</span>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
