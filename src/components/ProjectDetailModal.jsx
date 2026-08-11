import React from 'react';
import { X, ExternalLink, Code, Users, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

export default function ProjectDetailModal({ project, isOpen, onClose, onNavigateToDemo }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
              project.statusColor === 'emerald' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
              project.statusColor === 'amber' ? 'bg-amber-50 text-amber-800 border-amber-200' :
              project.statusColor === 'blue' ? 'bg-sky-50 text-sky-800 border-sky-200' :
              'bg-purple-50 text-purple-800 border-purple-200'
            }`}>
              🟢 Status: {project.status} ({project.version})
            </span>
            <span className="text-[10px] font-mono text-slate-600 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-semibold">
              Phase: {project.roadmapPhase}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 font-['Hanken_Grotesk']">{project.name}</h3>
          <p className="text-sm text-sky-700 font-mono font-bold">{project.subtitle}</p>
        </div>

        {/* Description */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">Project Overview</h4>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">Domains & Focus</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 text-xs font-mono font-bold">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-sky-600" /> Technology Architecture Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 text-xs font-mono font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-indigo-600" /> Core Engineering Team
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {project.team.map((member, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-sky-500 text-white font-bold flex items-center justify-center text-[10px]">
                    {member.charAt(0)}
                  </div>
                  {member}
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-sky-600" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              View Repository
            </a>

            <button
              onClick={() => {
                onClose();
                if (project.demoUrl.startsWith('http')) {
                  window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                } else {
                  onNavigateToDemo(project.demoUrl.replace('/', ''));
                }
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              Launch Live Demo {project.demoUrl.startsWith('http') ? <ExternalLink className="w-4 h-4 text-sky-400" /> : <ArrowRight className="w-4 h-4 text-sky-400" />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
