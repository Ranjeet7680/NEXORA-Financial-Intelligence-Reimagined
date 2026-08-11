import React from 'react';
import { Users, Code, Sparkles, ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/nexoraData';
import Card3D from '../components/Card3D';

export default function TeamPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
          <Users className="w-4 h-4 text-sky-600" />
          <span>ENGINEERING LEADERSHIP</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Meet the People Behind <span className="gradient-text-sky-indigo">Nexora.</span>
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          A focused engineering team building ambitious AI-powered financial technology.
        </p>
      </div>

      {/* 3 Developer Profile Cards with 3D initials badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((dev) => (
          <Card3D 
            key={dev.id}
            className="p-8 flex flex-col justify-between space-y-6 text-center"
          >
            <div className="space-y-4">
              
              {/* Avatar Badge / Image */}
              <div className="relative w-28 h-28 mx-auto group-hover:scale-105 transition-transform duration-300">
                {dev.avatar ? (
                  <img 
                    src={dev.avatar} 
                    alt={dev.name} 
                    className="w-28 h-28 rounded-3xl object-cover shadow-xl border-2 border-white/80 ring-2 ring-sky-500/20 shadow-sky-500/10"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  style={{ display: dev.avatar ? 'none' : 'flex' }}
                  className={`w-28 h-28 rounded-3xl bg-gradient-to-tr ${dev.color} text-white font-extrabold text-3xl items-center justify-center shadow-xl shadow-sky-500/20 tracking-wider font-['Hanken_Grotesk']`}
                >
                  {dev.initials}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk']">{dev.name}</h3>
                <p className="text-xs text-sky-700 font-mono font-bold mt-1">{dev.role}</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {dev.bio}
              </p>

              {/* Skills */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">TECHNICAL PROFICIENCIES</span>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {dev.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-2 font-mono text-xs font-bold">
              <div className="flex items-center justify-center gap-2">
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-sky-600" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
                  LinkedIn
                </a>

                <a
                  href={dev.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-sky-600" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                  GitHub
                </a>
              </div>

              {dev.hack2skill && (
                <a
                  href={dev.hack2skill}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  Hack2Skill Profile
                </a>
              )}
            </div>

          </Card3D>
        ))}
      </div>

    </div>
  );
}
