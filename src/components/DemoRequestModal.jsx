import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';

export default function DemoRequestModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '10-50',
    preferredDate: '',
    note: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk']">Executive Demo Scheduled!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Ranjeet Kumar & the Nexora engineering team will confirm your calendar invite for <span className="font-mono text-sky-700 font-bold">{formData.preferredDate || 'your preferred date'}</span>.
              </p>
            </div>

            {/* End-to-End System Onboarding Workflow */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
              <div className="text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                End-to-End Demo Preparation Pipeline
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div className="p-2 rounded-lg bg-white border border-slate-200">
                  <span className="text-sky-600 font-bold">1. Data Connector</span>
                  <p className="text-slate-500 text-[9px]">ERP Ledger Ingestion</p>
                </div>
                <div className="p-2 rounded-lg bg-white border border-slate-200">
                  <span className="text-indigo-600 font-bold">2. Model Build</span>
                  <p className="text-slate-500 text-[9px]">Neural RAG Tuning</p>
                </div>
                <div className="p-2 rounded-lg bg-white border border-slate-200">
                  <span className="text-emerald-600 font-bold">3. Voice AI System</span>
                  <p className="text-slate-500 text-[9px]">Speech API Audit</p>
                </div>
                <div className="p-2 rounded-lg bg-white border border-slate-200">
                  <span className="text-purple-600 font-bold">4. Executive Deck</span>
                  <p className="text-slate-500 text-[9px]">Board Briefing Pack</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-mono font-bold border border-sky-200">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>NEXORA EXECUTIVE DEMO</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk']">Request 1-on-1 Product Demo</h3>
              <p className="text-xs text-slate-500">Experience how Nexora's AI decision engine integrates with your financial data stack.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text"
                  required
                  placeholder="Ranjeet Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Work Email</label>
                  <input 
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Company Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="Nexora Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Team / Company Size</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                  >
                    <option value="1-10">1 - 10 employees</option>
                    <option value="10-50">10 - 50 employees</option>
                    <option value="50-250">50 - 250 employees</option>
                    <option value="250+">250+ Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Preferred Date</label>
                  <input 
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 font-bold text-white text-xs shadow-md transition-all mt-2"
              >
                Confirm Demo Request →
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
