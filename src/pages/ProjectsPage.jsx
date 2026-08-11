import React, { useState } from 'react';
import { 
  Layers, ArrowRight, CheckCircle2, 
  Code2, Rocket, Zap, Shield, Bot, LineChart,
  Users, HeartPulse, Compass, UserCheck, ExternalLink, Globe
} from 'lucide-react';
import { PROJECTS, ROADMAP_STAGES } from '../data/nexoraData';
import Card3D from '../components/Card3D';

export default function ProjectsPage({ onSelectProject, setActiveTab }) {
  const [activeStageFilter, setActiveStageFilter] = useState('ALL');

  const filteredProjects = activeStageFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.roadmapPhase === activeStageFilter);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
          <Layers className="w-4 h-4 text-sky-600" />
          <span>NEXORA R&D LABS & LIVE AI ECOSYSTEM</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Building the Future of <br />
          <span className="gradient-text-sky-indigo">Financial & Decision Intelligence.</span>
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Explore the core AI platforms, live decision intelligence deployments, and flagship products engineered by Ranjeet and the team.
        </p>
      </div>

      {/* Interactive Project Development Lifecycle Roadmap */}
      <div className="glass-panel p-8 rounded-2xl border border-slate-200 space-y-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk']">Project Development Lifecycle & Production Track</h3>
            <p className="text-xs text-slate-500 font-mono">Standard R&D Advancement Stages (IDEA ➔ PRODUCTION LIVE)</p>
          </div>
          <span className="text-xs font-mono text-sky-700 font-bold">{PROJECTS.length} Ecosystem Applications</span>
        </div>

        {/* Horizontal Node Track */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {ROADMAP_STAGES.map((stage, idx) => {
            const isStageActive = PROJECTS.some(p => p.roadmapPhase === stage);
            const stageCount = PROJECTS.filter(p => p.roadmapPhase === stage).length;
            return (
              <button
                key={stage}
                onClick={() => setActiveStageFilter(activeStageFilter === stage ? 'ALL' : stage)}
                className={`p-4 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-2 ${
                  activeStageFilter === stage
                    ? 'bg-sky-50 border-sky-400 text-sky-900 shadow-sm font-bold'
                    : isStageActive
                    ? 'bg-white border-slate-200 text-slate-800 hover:border-sky-300'
                    : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                  isStageActive ? 'bg-sky-100 text-sky-700 border border-sky-200' : 'bg-slate-200 text-slate-600'
                }`}>
                  0{idx + 1}
                </div>
                <span className="text-xs font-bold font-mono">{stage}</span>
                {isStageActive && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">
                    {stageCount} Active
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Card3D 
            key={project.id}
            className="p-8 flex flex-col justify-between group space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:scale-105 transition-transform">
                    {project.id === 'proj-01' && <Zap className="w-6 h-6 text-sky-600" />}
                    {project.id === 'proj-02' && <Bot className="w-6 h-6 text-sky-600" />}
                    {project.id === 'proj-03' && <Shield className="w-6 h-6 text-red-500" />}
                    {project.id === 'proj-04' && <LineChart className="w-6 h-6 text-indigo-600" />}
                    {project.id === 'proj-05' && <Users className="w-6 h-6 text-emerald-600" />}
                    {project.id === 'proj-06' && <HeartPulse className="w-6 h-6 text-rose-600" />}
                    {project.id === 'proj-07' && <Compass className="w-6 h-6 text-amber-600" />}
                    {project.id === 'proj-08' && <UserCheck className="w-6 h-6 text-cyan-600" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-['Hanken_Grotesk'] group-hover:text-sky-700 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-sky-700 font-mono font-bold">{project.subtitle}</p>
                  </div>
                </div>

                <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                  project.statusColor === 'emerald' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                  project.statusColor === 'amber' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                  project.statusColor === 'blue' ? 'bg-sky-50 text-sky-800 border-sky-200' :
                  'bg-purple-50 text-purple-800 border-purple-200'
                }`}>
                  🟢 {project.status}
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors font-semibold"
              >
                <svg className="w-4 h-4 fill-current text-sky-600" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                GitHub Repo
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                >
                  View Details
                </button>

                <button
                  onClick={() => {
                    if (project.demoUrl.startsWith('http')) {
                      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                    } else {
                      const targetTab = project.demoUrl.replace('/', '');
                      setActiveTab(targetTab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  Live Demo {project.demoUrl.startsWith('http') ? <ExternalLink className="w-3.5 h-3.5 text-sky-400" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </Card3D>
        ))}
      </div>

    </div>
  );
}

