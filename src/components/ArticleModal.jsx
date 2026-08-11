import React from 'react';
import { X, Clock, Calendar, User, Share2 } from 'lucide-react';

export default function ArticleModal({ article, isOpen, onClose }) {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="space-y-3 border-b border-slate-100 pb-6">
            <span className="px-3 py-1 rounded bg-sky-50 text-sky-700 border border-sky-200 text-xs font-mono font-bold uppercase">
              {article.category}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-snug pt-1">
              {article.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono font-semibold">
              <span className="flex items-center gap-1.5 text-slate-800">
                <User className="w-3.5 h-3.5 text-sky-600" /> {article.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readTime}
              </span>
            </div>
          </div>

          <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line font-normal space-y-4">
            {article.content}
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <button 
              onClick={() => alert('Article link copied to clipboard!')}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-bold flex items-center gap-2 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-sky-600" /> Share Publication
            </button>

            <button 
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md"
            >
              Close Publication
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
