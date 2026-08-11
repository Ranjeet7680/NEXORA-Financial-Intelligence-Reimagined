import React, { useState } from 'react';
import { 
  Sparkles, ArrowRight, TrendingUp, ShieldAlert, Bot, Database, 
  Layers, CheckCircle2, ChevronRight, Activity, Cpu, Zap, LineChart, 
  Users, Lock, Play, ArrowUpRight, Mic
} from 'lucide-react';
import { STATS, PLATFORM_CARDS, PROJECTS, TEAM_MEMBERS, DEMO_METRICS } from '../data/nexoraData';
import ThreeCanvas from '../components/ThreeCanvas';
import Card3D from '../components/Card3D';

export default function HomePage({ setActiveTab, openDemoModal }) {
  const currentDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="space-y-24 pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc]">
      
      {/* 1. HERO SECTION WITH 3D CANVAS */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        
        {/* Soft background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-sky-400/10 via-indigo-500/10 to-sky-300/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
              <span>NEXORA AI FINANCIAL ENGINE • {currentDate}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-['Hanken_Grotesk'] leading-[1.12]">
              Financial Intelligence, <br className="hidden sm:inline" />
              <span className="gradient-text-sky-indigo">Reimagined.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Turn complex financial data into intelligent insights, predictive decisions, and measurable business outcomes with neural-grade AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  setActiveTab('platform');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xl shadow-slate-900/10 hover:shadow-slate-900/25 hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
              >
                Explore Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm shadow-sm transition-all flex items-center gap-2"
              >
                View Projects
                <Layers className="w-4 h-4 text-sky-600" />
              </button>
            </div>

            {/* Trust snippet */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Real-time Streaming
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> SOC2 Type II
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 256-Bit Encryption
              </span>
            </div>

          </div>

          {/* Right Hero Visual: 3D Interactive WebGL Canvas + Live Dashboard Mockup */}
          <div className="lg:col-span-6 z-10">
            <Card3D className="p-6 bg-white/90 border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-2 font-mono text-sky-700 font-bold">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                  <span>LIVE NEXORA ENGINE PORTAL</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  🟢 Real-Time Active
                </span>
              </div>

              {/* 3D Interactive Canvas Overlay */}
              <div className="relative h-64 w-full bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-950 rounded-xl my-4 overflow-hidden border border-slate-800 shadow-inner">
                <ThreeCanvas className="absolute inset-0" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-sky-300">
                  Interactive 3D WebGL Telemetry Mesh
                </div>

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                  Mouse Drag to Rotate 3D Nodes
                </div>
              </div>

              {/* Live Metric Strip */}
              <div className="grid grid-cols-4 gap-2 my-2 text-center font-mono">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] text-slate-500 block">Health</span>
                  <span className="text-xs font-bold text-emerald-600">{DEMO_METRICS.healthScore} / 100</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] text-slate-500 block">Revenue</span>
                  <span className="text-xs font-bold text-sky-600">{DEMO_METRICS.revenue}</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] text-slate-500 block">Profit</span>
                  <span className="text-xs font-bold text-indigo-600">{DEMO_METRICS.netProfit}</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-[9px] text-slate-500 block">Cash Flow</span>
                  <span className="text-xs font-bold text-emerald-600">{DEMO_METRICS.cashFlow}</span>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between text-xs">
                <button 
                  onClick={() => setActiveTab('copilot')}
                  className="text-sky-700 font-mono hover:underline flex items-center gap-1 font-bold"
                >
                  Explore AI Voice & Copilot Intelligence <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] text-slate-400 font-mono">BigQuery Engine</span>
              </div>

            </Card3D>
          </div>

        </div>
      </section>

      {/* 2. STATS BAR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-2 p-4 rounded-2xl bg-slate-50/60 border border-slate-100 hover:border-sky-200 transition-all">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight">
                <span className="gradient-text-sky-indigo">{stat.value}</span>
              </div>
              <div className="text-sm font-bold text-slate-800">{stat.label}</div>
              <div className="text-xs text-slate-500 font-mono">{stat.suffix}</div>
              <div className="text-[10px] text-sky-700 font-mono font-semibold pt-1 border-t border-slate-200/60">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PLATFORM OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            Core Capability Suite
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Hanken_Grotesk']">
            One Intelligent Platform. <br className="hidden sm:inline" />
            <span className="gradient-text-sky-indigo">Every Financial Decision.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Unified modules engineered to give CFOs, developers, and analysts instant clarity over cash flow, risks, and forecasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLATFORM_CARDS.map((card) => (
            <Card3D 
              key={card.id}
              className="p-8 cursor-pointer flex flex-col justify-between group space-y-6"
              onClick={() => {
                const targetTab = card.id === 'voice-system' ? 'copilot' : card.id === 'data-layer' ? 'analytics' : card.id;
                setActiveTab(targetTab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                    {card.id === 'copilot' && <Bot className="w-6 h-6" />}
                    {card.id === 'analytics' && <TrendingUp className="w-6 h-6" />}
                    {card.id === 'risk' && <ShieldAlert className="w-6 h-6 text-red-500" />}
                    {card.id === 'forecasting' && <LineChart className="w-6 h-6 text-indigo-600" />}
                    {card.id === 'voice-system' && <Mic className="w-6 h-6 text-emerald-600 animate-pulse" />}
                    {card.id === 'data-layer' && <Database className="w-6 h-6 text-amber-600" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors font-['Hanken_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-sky-700 font-bold font-mono">
                <span>Explore Module</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">Nexora R&D Labs</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1 font-['Hanken_Grotesk']">
              Featured Products & Experiments
            </h2>
          </div>
          <button 
            onClick={() => { setActiveTab('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs font-bold font-mono text-sky-700 hover:underline flex items-center gap-1"
          >
            View All {PROJECTS.length} Active Projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.slice(0, 2).map((proj) => (
            <Card3D key={proj.id} className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Status: {proj.status}
                </span>
                <span className="text-xs font-mono text-slate-500">{proj.version}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk']">{proj.name}</h3>
                <p className="text-xs text-sky-700 font-mono font-bold mt-1">{proj.subtitle}</p>
                <p className="text-slate-600 text-xs mt-3 leading-relaxed">{proj.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Lead: {proj.team[0]}</span>
                <button 
                  onClick={() => { setActiveTab('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
                >
                  Project Roadmap Details <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* 5. TEAM SPOTLIGHT WITH 3D AVATAR BADGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            Core Developers
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Hanken_Grotesk']">
            Meet the People Behind Nexora
          </h2>
          <p className="text-slate-600 text-sm">
            A small team building ambitious AI-powered financial technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((dev) => (
            <Card3D key={dev.id} className="p-8 text-center space-y-5">
              
              {/* Avatar Badge / Image */}
              <div className="relative w-24 h-24 mx-auto group-hover:scale-105 transition-transform duration-300">
                {dev.avatar ? (
                  <img 
                    src={dev.avatar} 
                    alt={dev.name} 
                    className="w-24 h-24 rounded-3xl object-cover shadow-xl border-2 border-white/80 ring-2 ring-sky-500/20 shadow-sky-500/10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  style={{ display: dev.avatar ? 'none' : 'flex' }}
                  className={`w-24 h-24 rounded-3xl bg-gradient-to-tr ${dev.color} text-white font-extrabold text-2xl items-center justify-center shadow-xl shadow-sky-500/20 tracking-wider font-['Hanken_Grotesk']`}
                >
                  {dev.initials}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Hanken_Grotesk']">{dev.name}</h3>
                <p className="text-xs text-sky-700 font-mono font-bold mt-0.5">{dev.role}</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{dev.bio}</p>

              <div className="flex flex-wrap justify-center gap-1.5">
                {dev.skills.slice(0, 4).map((skill, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-center gap-3 text-xs font-mono font-bold">
                <a href={dev.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-sky-700">LinkedIn</a>
                <span className="text-slate-300">•</span>
                <a href={dev.github} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-sky-700">GitHub</a>
                {dev.hack2skill && (
                  <>
                    <span className="text-slate-300">•</span>
                    <a href={dev.hack2skill} target="_blank" rel="noreferrer" className="text-sky-600 hover:text-sky-800">Hack2Skill</a>
                  </>
                )}
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 bg-slate-900 text-white text-center space-y-6 overflow-hidden shadow-2xl">
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Hanken_Grotesk'] tracking-tight">
            Ready to Reimagine Your <br />
            <span className="gradient-text-sky-indigo">Financial Decision Layer?</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Connect your data sources in minutes or schedule a private architecture session with our engineering team.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button 
              onClick={openDemoModal}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-xl transition-all"
            >
              Request Executive Demo →
            </button>
            <button 
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm transition-all"
            >
              Contact Engineering Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
