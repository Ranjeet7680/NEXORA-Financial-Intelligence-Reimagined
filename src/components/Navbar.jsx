import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, ChevronDown, Bot, BarChart2, ShieldAlert, TrendingUp, Mic, Building2, Users, Briefcase, Mail, Layers, Calendar, Cpu, Shield, Globe, Volume2 } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, openDemoModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CATEGORIZED_MENU = {
    Platform: [
      { id: 'copilot', label: 'AI Voice Copilot', badge: 'Voice AI', icon: Mic, desc: 'Voice recognition & Speech Synthesis financial copilot' },
      { id: 'analytics', label: 'Financial Analytics', icon: BarChart2, desc: 'Real-time revenue & expense breakdown' },
      { id: 'risk', label: 'Risk Intelligence', icon: ShieldAlert, desc: 'Anomaly detection & market stress testing' },
      { id: 'forecasting', label: 'Predictive Forecasting', icon: TrendingUp, desc: 'P10/P50/P90 Monte Carlo probability models' },
    ],
    Company: [
      { id: 'about', label: 'About Nexora', icon: Building2, desc: 'Mission, vision & Genesis story' },
      { id: 'team', label: 'Our Team', icon: Users, desc: 'Meet our core engineering leadership' },
      { id: 'careers', label: 'Careers', badge: 'Hiring', icon: Briefcase, desc: 'Build the future of AI finance with us' },
      { id: 'contact', label: 'Contact Us', icon: Mail, desc: 'Speak directly to core engineers' },
    ],
    Explore: [
      { id: 'projects', label: 'Projects & Products', icon: Layers, desc: 'R&D labs & 6-stage lifecycle' },
      { id: 'future', label: 'Future Roadmap', icon: Calendar, desc: '2026 - 2029+ multi-year vision' },
      { id: 'technology', label: 'Tech Architecture', icon: Cpu, desc: 'FastAPI, BigQuery, PyTorch stack' },
      { id: 'security', label: 'Security & Compliance', icon: Shield, desc: 'AES-256, SOC2 & zero-trust core' },
      { id: 'solutions', label: 'Enterprise Solutions', icon: Globe, desc: 'CFOs, Hedge Funds, VC & Banking' },
    ]
  };

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.08)]' 
        : 'bg-white/90 backdrop-blur-md border-b border-slate-200/50 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Company Official Logo & Brand Name */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white border border-slate-200 p-0.5 shadow-md shadow-sky-500/10 group-hover:scale-105 transition-transform flex items-center justify-center">
            <img 
              src="/nexora-logo.jpg" 
              alt="Nexora Official Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-wider text-slate-900 flex items-center gap-1.5 font-['Hanken_Grotesk'] leading-none">
              NEXORA
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-sky-100 text-sky-800 font-mono border border-sky-200 font-bold flex items-center gap-1">
                <Mic className="w-2.5 h-2.5 text-sky-600 animate-pulse" /> AI
              </span>
            </span>
            <span className="text-[8px] sm:text-[9px] text-slate-500 tracking-[0.16em] uppercase font-bold mt-1">
              INTELLIGENCE • INNOVATION • IMPACT
            </span>
          </div>
        </div>

        {/* Desktop Categorized Navigation Dropdowns */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200">
          
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'home' ? 'text-sky-700 bg-white shadow-xs font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            Home
          </button>

          {Object.keys(CATEGORIZED_MENU).map((catKey) => {
            const isOpen = activeDropdown === catKey;
            const isCatActive = CATEGORIZED_MENU[catKey].some(item => item.id === activeTab);
            
            return (
              <div 
                key={catKey}
                className="relative"
                onMouseEnter={() => setActiveDropdown(catKey)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(isOpen ? null : catKey)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                    isCatActive 
                      ? 'text-sky-700 bg-white shadow-xs font-bold border border-slate-200' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {catKey}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl p-3 shadow-2xl space-y-1 animate-fadeIn z-50">
                    {CATEGORIZED_MENU[catKey].map((item) => {
                      const Icon = item.icon;
                      const isItemActive = activeTab === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-3 group/item ${
                            isItemActive ? 'bg-sky-50 text-sky-800 border border-sky-200' : 'hover:bg-slate-50 text-slate-800'
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                            isItemActive ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-600 group-hover/item:text-sky-600 group-hover/item:bg-sky-50'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 font-bold text-xs font-['Hanken_Grotesk']">
                              {item.label}
                              {item.badge && (
                                <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-bold ${
                                  item.badge === 'Voice AI' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-sky-100 text-sky-800 border border-sky-200'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-500 leading-snug line-clamp-1">{item.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Button: Request Demo & AI Voice Quick Launch */}
        <div className="hidden sm:flex items-center gap-2">
          <button 
            onClick={() => handleNavClick('copilot')}
            className="px-3.5 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
          >
            <Mic className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
            <span>AI Voice Copilot</span>
          </button>

          <button 
            onClick={openDemoModal}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md shadow-slate-900/10 transition-all flex items-center gap-2"
          >
            Request Demo
            <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
        </button>
      </div>

      {/* Ultra Sleek Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 h-[calc(100dvh-100%)] min-h-[calc(100vh-65px)] bg-white border-b border-slate-200 p-4 sm:p-6 overflow-y-auto space-y-5 z-50 shadow-2xl">
          
          {/* Quick Voice Assistant Launcher Card inside Mobile Drawer */}
          <div 
            onClick={() => handleNavClick('copilot')}
            className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white border border-sky-500/30 flex items-center justify-between cursor-pointer shadow-lg group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <Mic className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2 font-bold text-xs font-['Hanken_Grotesk'] text-white">
                  <span>AI Voice Copilot System</span>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">READY</span>
                </div>
                <p className="text-[10px] text-sky-200/80 font-mono">Tap to speak or listen to real-time AI financial answers</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </div>

          <button
            onClick={() => handleNavClick('home')}
            className={`w-full p-3 rounded-xl text-left font-bold text-xs sm:text-sm flex items-center justify-between transition-all ${
              activeTab === 'home' ? 'bg-sky-50 text-sky-700 border border-sky-200 shadow-xs' : 'bg-slate-50 text-slate-800 border border-slate-100'
            }`}
          >
            <span className="flex items-center gap-2">🏠 Main Home Dashboard</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

          {Object.keys(CATEGORIZED_MENU).map((catKey) => (
            <div key={catKey} className="space-y-2">
              <div className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-sky-700 px-1 border-b border-slate-200 pb-1 flex items-center justify-between">
                <span>{catKey}</span>
                <span className="text-[9px] text-slate-400 font-normal">{CATEGORIZED_MENU[catKey].length} pages</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {CATEGORIZED_MENU[catKey].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`p-3 rounded-xl text-left transition-all flex items-center gap-3 min-h-[48px] ${
                        isActive
                          ? 'bg-sky-50 text-sky-800 border border-sky-200 font-bold shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-100'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${
                        isActive ? 'bg-sky-100 text-sky-700' : 'bg-white text-slate-600 border border-slate-200'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold font-['Hanken_Grotesk'] truncate text-slate-900">
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className={`text-[8px] px-1.5 py-0.2 rounded font-mono font-bold shrink-0 ${
                              item.badge === 'Voice AI' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Action Button inside Drawer */}
          <div className="pt-3 border-t border-slate-200">
            <button 
              onClick={() => { setMobileMenuOpen(false); openDemoModal(); }}
              className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 active:scale-98 transition-transform"
            >
              Request Demo <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>

        </div>
      )}
    </header>
  );
}
