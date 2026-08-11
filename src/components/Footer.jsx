import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ setActiveTab, openDemoModal }) {
  const handleNav = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5 shadow-lg shadow-sky-500/20 flex items-center justify-center">
                <img 
                  src="/nexora-logo.jpg" 
                  alt="Nexora Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-wider text-white font-['Hanken_Grotesk']">
                  NEXORA
                </span>
                <span className="text-[9px] text-sky-400 font-mono tracking-[0.2em] uppercase font-bold">
                  INTELLIGENCE • INNOVATION • IMPACT
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Financial Intelligence, Reimagined. Turning complex institutional financial data into predictive decisions, automated risk insights, and measurable business outcomes with AI.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/in/ranjeet-kumar-78a45120b/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                title="Ranjeet Kumar - LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-sky-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
              </a>
              <a 
                href="https://github.com/Ranjeet7680" 
                target="_blank" 
                rel="noreferrer"
                aria-label="GitHub"
                title="Ranjeet Kumar - GitHub"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-sky-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
              <a 
                href="https://hack2skill.com/dashboard/user_public_profile/?userId=6817753bbd3f11d6144699e1&tabIndex=about&utm_source=hack2skill&utm_medium=homepage" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Hack2Skill"
                title="Ranjeet Kumar - Hack2Skill Profile"
                className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-500/40 flex items-center justify-center text-sky-400 hover:text-white hover:border-sky-400 transition-colors font-mono font-extrabold text-xs"
              >
                H2S
              </a>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('copilot')} className="hover:text-white transition-colors flex items-center gap-1">
                  AI Copilot <span className="text-[9px] px-1 py-0.2 rounded bg-sky-500/20 text-sky-300">AI</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('analytics')} className="hover:text-white transition-colors">
                  Analytics
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('risk')} className="hover:text-white transition-colors">
                  Risk Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('forecasting')} className="hover:text-white transition-colors">
                  Predictive Forecasting
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('copilot')} className="hover:text-white transition-colors flex items-center gap-1.5 text-sky-400">
                  AI Voice Copilot <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold font-mono">VOICE</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Nexora
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('team')} className="hover:text-white transition-colors">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  Careers <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold">Hiring</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={openDemoModal} className="hover:text-white transition-colors flex items-center gap-1 text-sky-400 font-medium">
                  Request Demo <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors">
                  Projects & Products
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('future')} className="hover:text-white transition-colors">
                  Future Roadmap
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('technology')} className="hover:text-white transition-colors">
                  Tech Architecture
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('security')} className="hover:text-white transition-colors">
                  Security & Compliance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-white transition-colors">
                  Enterprise Solutions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            © 2026 Nexora Financial Intelligence. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('security')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleNav('security')} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => handleNav('security')} className="hover:text-white transition-colors">Security Audit</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
