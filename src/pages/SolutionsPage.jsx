import React from 'react';
import { Building2, Briefcase, DollarSign, Cpu, ArrowRight, ShieldCheck } from 'lucide-react';
import Card3D from '../components/Card3D';

export default function SolutionsPage({ openDemoModal }) {
  const SOLUTIONS = [
    {
      title: "CFO & Finance Teams",
      icon: Briefcase,
      desc: "Automate monthly P&L consolidation, continuous cash runway forecasting, and executive board decks.",
      features: ["Real-time ERP Synchronization", "Automated OpEx Anomaly Alerts", "Scenario Sensitivity Modeling"]
    },
    {
      title: "Hedge Funds & Asset Managers",
      icon: DollarSign,
      desc: "High-frequency quantitative analysis, portfolio risk stress testing, and real-time news sentiment integration.",
      features: ["Sub-second Risk Telemetry", "Monte Carlo Value-at-Risk (VaR)", "RAG Market Intelligence"]
    },
    {
      title: "VC & Private Equity",
      icon: Building2,
      desc: "Track portfolio company burn rates, runway trajectory, and unit economics across all venture investments.",
      features: ["Multi-Entity Portfolio Mesh", "Automated LP Reporting", "Cash Burn Velocity Warning"]
    },
    {
      title: "Enterprise FinTech & Banking",
      icon: Cpu,
      desc: "Embed Nexora's neural AI decision layer directly into your SaaS or commercial banking portal via high-speed APIs.",
      features: ["SOC2 Type II Isolation", "Custom Fine-tuned LLM Models", "White-label AI Copilot API"]
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
          Tailored Institutional Solutions
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Engineered for Your <span className="gradient-text-sky-indigo">Specific Sector.</span>
        </h1>
        <p className="text-slate-600 text-base">
          Discover how Nexora's AI decision layer adapts to the specialized needs of institutional investors, CFOs, and fintech platforms.
        </p>
      </div>

      {/* Solutions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SOLUTIONS.map((sol, idx) => {
          const Icon = sol.icon;
          return (
            <Card3D key={idx} className="p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk']">{sol.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{sol.desc}</p>

                <div className="space-y-2 pt-2">
                  {sol.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-mono font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={openDemoModal}
                  className="text-xs font-bold font-mono text-sky-700 hover:text-sky-800 flex items-center gap-1.5"
                >
                  Schedule Industry Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card3D>
          );
        })}
      </div>

    </div>
  );
}
