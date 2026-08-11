import React, { useEffect, useState } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const STATUS_MESSAGES = [
    "Loading Nexora Neural AI Core v2.4...",
    "Connecting BigQuery Financial Data Mesh...",
    "Synthesizing Bayesian Risk & Forecasting Models...",
    "Initializing 3D WebGL Visualization Engine...",
    "Welcome to Nexora Financial Intelligence!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const bounded = Math.min(next, 100);

        if (bounded < 25) setStatusIndex(0);
        else if (bounded < 50) setStatusIndex(1);
        else if (bounded < 75) setStatusIndex(2);
        else if (bounded < 95) setStatusIndex(3);
        else setStatusIndex(4);

        return bounded;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8fafc] text-slate-900 transition-opacity duration-700 ${
      fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      
      {/* Soft background ambient glow */}
      <div className="absolute w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[140px] animate-pulse pointer-events-none"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-md w-full px-6 text-center space-y-8">
        
        {/* Animated Logo Display */}
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          
          {/* Outer Rotating Sky Blue Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-sky-200 border-t-sky-600 border-r-indigo-600 animate-spin-slow shadow-[0_0_30px_rgba(2,132,199,0.15)]"></div>
          
          {/* Inner Counter Rotating Ring */}
          <div className="absolute inset-2.5 rounded-full border border-indigo-200 border-b-indigo-500 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }}></div>

          {/* Official Company Logo Card */}
          <div className="w-32 h-32 rounded-3xl overflow-hidden bg-white p-2 border border-slate-200 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform">
            <img 
              src="/nexora-logo.jpg" 
              alt="Nexora Official Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Brand Name & Tagline */}
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-wider font-['Hanken_Grotesk'] text-slate-900">
            NEXORA
          </h1>
          <p className="text-[11px] font-mono tracking-[0.25em] text-sky-700 uppercase font-bold">
            INTELLIGENCE • INNOVATION • IMPACT
          </p>
        </div>

        {/* Progress Bar & Telemetry Status */}
        <div className="space-y-3 pt-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-600 font-semibold truncate max-w-[240px]">
              {STATUS_MESSAGES[statusIndex]}
            </span>
            <span className="text-sky-700 font-bold">{progress}%</span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-slate-200 border border-slate-300 overflow-hidden shadow-inner">
            <div 
              style={{ width: `${progress}%` }} 
              className="h-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-full transition-all duration-200 shadow-sm"
            ></div>
          </div>
        </div>

        {/* Security badge footer */}
        <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-500 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>256-Bit Encrypted Neural Telemetry Session</span>
        </div>

      </div>

    </div>
  );
}
