import React, { useState } from 'react';
import { X, CheckCircle2, Upload } from 'lucide-react';

export default function JobApplyModal({ job, isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [note, setNote] = useState('');

  if (!isOpen || !job) return null;

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
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk']">Application Received!</h3>
            <p className="text-sm text-slate-600">
              Thank you for applying to the <span className="font-bold text-sky-700">{job.title}</span> position. Ranjeet and our engineering leads will review your application.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200">
                {job.department} • {job.type}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-['Hanken_Grotesk'] mt-1">Apply for {job.title}</h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">{job.location}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Your Full Name</label>
                <input 
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ranjeet Kumar"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">GitHub / LinkedIn / Portfolio URL</label>
                <input 
                  type="url"
                  required
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="https://github.com/yourhandle"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Why Nexora?</label>
                <textarea 
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Tell us about your background in AI, full stack, or financial modeling..."
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 font-bold text-white text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                Submit Application →
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
