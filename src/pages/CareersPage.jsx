import React from 'react';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CAREERS } from '../data/nexoraData';
import Card3D from '../components/Card3D';

export default function CareersPage({ onApplyJob }) {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
          <Briefcase className="w-4 h-4 text-sky-600" />
          <span>JOIN THE NEXORA ENGINEERING TEAM</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Build the Future <span className="gradient-text-sky-indigo">With Us.</span>
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          We're looking for builders, researchers, designers, and problem-solvers who want to work at the intersection of AI and finance.
        </p>
      </div>

      {/* Open Roles Cards */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-xl font-bold text-slate-900 font-['Hanken_Grotesk']">Current Open Positions ({CAREERS.length})</h2>
          <span className="text-xs font-mono text-sky-700 font-bold">Remote & Hybrid Options Available</span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {CAREERS.map((job) => (
            <Card3D 
              key={job.id}
              className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
                    {job.department}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{job.location}</span>
                  <span className="text-xs font-mono text-slate-500">• {job.type}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors font-['Hanken_Grotesk']">
                  {job.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {job.desc}
                </p>

                <div className="space-y-1 pt-1">
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-mono font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => onApplyJob(job)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 font-bold text-white text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  Join Nexora <ArrowRight className="w-4 h-4 text-sky-400" />
                </button>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

    </div>
  );
}
