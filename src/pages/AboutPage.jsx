import React from 'react';
import { Sparkles, Target, Eye, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { VALUES } from '../data/nexoraData';
import Card3D from '../components/Card3D';

export default function AboutPage({ openDemoModal }) {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>ABOUT NEXORA FINANCIAL INTELLIGENCE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-[1.15]">
          We Believe Financial Data Should Create <br className="hidden sm:inline" />
          <span className="gradient-text-sky-indigo">Intelligence — Not Complexity.</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Nexora was founded to solve a fundamental problem: financial data was abundant, but strategic decision-making was slow. We build neural systems that turn data into pure, decisive action.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission */}
        <Card3D className="p-8 sm:p-10 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk']">Our Mission</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            To make financial intelligence faster, smarter, and more accessible through artificial intelligence. We strip away manual spreadsheet friction, empowering enterprises with real-time foresight.
          </p>
        </Card3D>

        {/* Vision */}
        <Card3D className="p-8 sm:p-10 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk']">Our Vision</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            To build the intelligence layer that powers the next generation of financial decision-making across global enterprises, venture funds, and commercial institutions.
          </p>
        </Card3D>

      </div>

      {/* Genesis Story Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase">
          <Sparkles className="w-4 h-4" /> THE GENESIS PROTOCOL
        </div>
        <h2 className="text-3xl font-extrabold font-['Hanken_Grotesk']">Our Story</h2>
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed max-w-3xl">
          <p>
            Nexora was founded by Ranjeet Kumar, Abhishek Kantharia, and Santosh Kumar after realizing that legacy financial tools were failing modern venture-backed startups and institutions.
          </p>
          <p>
            Finance teams were trapped spending 80% of their time aggregating CSV files and formatting deck slides, rather than running high-conviction risk analysis or scenario planning.
          </p>
          <p>
            We engineered Nexora from the ground up as a native AI layer. By combining Python FastAPI backends, vector knowledge indexes, and fine-tuned predictive time-series models, Nexora gives finance leaders a real-time copilot that never sleeps.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase">Guiding Principles</span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Hanken_Grotesk']">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {VALUES.map((val) => (
            <Card3D key={val.num} className="p-6 space-y-3">
              <div className="text-2xl font-extrabold font-mono text-sky-600">{val.num}</div>
              <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk']">{val.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{val.desc}</p>
            </Card3D>
          ))}
        </div>
      </div>

    </div>
  );
}
