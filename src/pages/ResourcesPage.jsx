import React, { useState } from 'react';
import { BookOpen, Search, Clock, Calendar, ArrowRight } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/nexoraData';
import Card3D from '../components/Card3D';

export default function ResourcesPage({ onSelectArticle }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const CATEGORIES = ['ALL', 'AI Finance', 'FinTech', 'Data', 'Technology'];

  const filteredArticles = BLOG_ARTICLES.filter(art => {
    const matchesCat = selectedCategory === 'ALL' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
          <BookOpen className="w-4 h-4 text-sky-600" />
          <span>NEXORA RESEARCH & PUBLICATIONS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Nexora Insights & <span className="gradient-text-sky-indigo">Thought Leadership.</span>
        </h1>
        <p className="text-slate-600 text-base">
          Research papers, architectural breakdowns, and strategic guides on artificial intelligence in institutional finance.
        </p>
      </div>

      {/* Category Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-mono">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 font-bold shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
          />
        </div>

      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((art) => (
          <Card3D 
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="p-6 cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 font-bold uppercase text-[10px]">
                  {art.category}
                </span>
                <span className="text-slate-500 flex items-center gap-1 text-[11px] font-semibold">
                  <Clock className="w-3 h-3" /> {art.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors font-['Hanken_Grotesk'] leading-snug">
                {art.title}
              </h3>

              <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono font-semibold">
              <span>By {art.author}</span>
              <span className="text-sky-700 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Card3D>
        ))}
      </div>

    </div>
  );
}
