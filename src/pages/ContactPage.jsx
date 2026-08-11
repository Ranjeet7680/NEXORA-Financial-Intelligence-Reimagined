import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Cpu, Layers, Code2, Server, Terminal, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import Card3D from '../components/Card3D';

export default function ContactPage({ openDemoModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setEmail('');
      setCompany('');
      setSubject('');
      setMessage('');
    }, 2500);
  };

  const BUILD_STAGES = [
    {
      num: "01",
      title: "Data Audit & Ingestion Discovery",
      desc: "Mapping your company P&L, ERP ledgers, BigQuery data lakes, and transactional APIs for zero-data loss pipeline design.",
      tag: "INVENT & DISCOVER"
    },
    {
      num: "02",
      title: "Neural Model & RAG Tuning",
      desc: "Customizing RAG embeddings, GAAP calculation logic, and ML anomaly detection threshold rules for your organization.",
      tag: "AI ARCHITECTURE"
    },
    {
      num: "03",
      title: "Voice AI & WebGL Integration",
      desc: "Deploying Web Speech API voice control, Speech Synthesis readout, and interactive 3D WebGL financial node visualizers.",
      tag: "VOICE & 3D SYSTEM"
    },
    {
      num: "04",
      title: "Executive Demo & Production Rollout",
      desc: "1-on-1 executive demo walkthrough with Ranjeet Kumar & engineering leads, followed by secure production deployment.",
      tag: "1-ON-1 DEMO ROLLOUT"
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
          <Mail className="w-4 h-4 text-sky-600" />
          <span>SPEAK DIRECTLY TO ENGINEERING</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Let's Build Intelligent <br />
          <span className="gradient-text-sky-indigo">Finance Together.</span>
        </h1>
        <p className="text-slate-600 text-base">
          Have questions about our AI models, custom enterprise integrations, or deployment architecture? Contact our core engineering leadership team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Information & Demo CTA */}
        <div className="lg:col-span-5 space-y-6">
          <Card3D className="p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 font-['Hanken_Grotesk']">Direct Channels</h3>
            
            <div className="space-y-4 text-xs font-mono text-slate-700">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold">
                <Mail className="w-4 h-4 text-sky-600" />
                <span>contact@nexorafin.ai</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>+91 (0) 80-4920-1000</span>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Nexora Intelligence Labs, FinTech Hub, Tech City, India</span>
              </div>
            </div>
          </Card3D>

          <div className="p-8 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1-ON-1 EXECUTIVE SESSION</span>
            </div>
            <h4 className="text-lg font-bold font-['Hanken_Grotesk']">Need a Personalized Executive Demo?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Schedule a 1-on-1 walkthrough of the Nexora AI Copilot, Voice Engine, and Risk Intelligence suite with Lead Engineer Ranjeet Kumar.
            </p>
            <button 
              onClick={openDemoModal}
              className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-100 font-bold text-slate-950 text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              Request Executive Demo →
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-6 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk']">Send Message to Engineering Team</h3>

          {sent ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-slate-900">Message Dispatched!</h4>
              <p className="text-xs text-slate-500 font-mono">Ranjeet Kumar and the Nexora engineering team will review your inquiry shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Your Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Ranjeet Kumar"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Company / Organization</label>
                  <input 
                    type="text" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    placeholder="Nexora Corp"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Subject</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    placeholder="End-to-End System Build Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 font-semibold mb-1">Message</label>
                <textarea 
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Tell us about your financial data sources, query volume, or custom end-to-end integration requirements..."
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium resize-none"
                ></textarea>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  type="submit" 
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  Send Message →
                </button>

                <button 
                  type="button"
                  onClick={openDemoModal}
                  className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold transition-all"
                >
                  Request Executive Demo →
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

      {/* END-TO-END SYSTEM BUILD & WORKFLOW PIPELINE SECTION */}
      <section className="space-y-8 pt-8 border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            SYSTEM ARCHITECTURE PIPELINE
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-['Hanken_Grotesk']">
            End-to-End System Build & Deployment Workflow
          </h2>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From initial ERP ledger ingestion to hands-free voice AI telemetry and 1-on-1 executive demo sessions with Ranjeet Kumar and our core engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUILD_STAGES.map((st) => (
            <Card3D key={st.num} className="p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold font-mono text-sky-600">{st.num}</span>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                    {st.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 font-['Hanken_Grotesk']">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1 text-[10px] font-mono text-emerald-600 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified System Stage</span>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

    </div>
  );
}
