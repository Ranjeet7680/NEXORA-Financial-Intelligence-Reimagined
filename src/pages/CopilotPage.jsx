import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, BarChart2, TrendingUp, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CopilotPage() {
  const PRESET_QUERIES = [
    "What is our projected cash flow for Q4 2026?",
    "Detect financial risks & abnormal expense spikes in Q3",
    "Compare EBITDA margins against last year's performance",
    "Generate executive summary deck for board meeting"
  ];

  const [messages, setMessages] = useState([
    {
      sender: 'user',
      text: "What is our projected cash flow for Q4 2026?"
    },
    {
      sender: 'ai',
      text: "Synthesizing ERP telemetry, current Q3 actuals, and signed enterprise contracts...",
      data: {
        title: "Projected Net Cash Flow - Q4 2026",
        val: "₹8.17 Cr",
        growth: "+9.6% vs Q3",
        breakdown: [
          { label: "Operating Revenue", amount: "₹24.8 Cr" },
          { label: "Operating Expenses (OpEx)", amount: "₹16.63 Cr" },
          { label: "Net Cash Surplus", amount: "₹8.17 Cr" }
        ],
        insights: [
          "Marketing CAC dropped by 8.2% following AI campaign optimizations.",
          "Enterprise renewals account for 42% of incoming Q4 cash reserves.",
          "Solvency risk index remains minimal at 14/100 (Healthy)."
        ]
      }
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const newMsgList = [...messages, { sender: 'user', text: query }];
    setMessages(newMsgList);
    setInputValue('');
    setIsProcessing(true);

    setTimeout(() => {
      let aiResponseData = {
        title: `AI Analysis: "${query.substring(0, 30)}..."`,
        val: "₹18.4 Cr",
        growth: "+14.2% projected",
        breakdown: [
          { label: "Gross Revenue", amount: "₹24.8 Cr" },
          { label: "Net Operating Margin", amount: "25.8%" },
          { label: "Liquidity Reserve", amount: "₹8.17 Cr" }
        ],
        insights: [
          "Data synthesized from BigQuery financial data lakehouse.",
          "Neural anomaly score indicates 99.8% model confidence.",
          "Recommended action: Reinvest ₹1.5 Cr in R&D infrastructure."
        ]
      };

      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: `Based on Nexora's neural model evaluation for "${query}", here is the executive analysis:`,
          data: aiResponseData
        }
      ]);
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
          <Bot className="w-4 h-4 text-sky-600 animate-bounce" />
          <span>NEXORA AI COPILOT v2.4</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Conversational <span className="gradient-text-sky-indigo">Financial Intelligence.</span>
        </h1>
        <p className="text-slate-600 text-base">
          Ask questions about financial data using natural language. Get precise data-backed answers, forecasts, and automated variance analysis in real time.
        </p>
      </div>

      {/* Main Copilot Chat Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Suggestions & Preset Queries */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-panel p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600" /> Quick Prompts
            </h3>
            <p className="text-xs text-slate-500">Select any prompt below to trigger instant copilot synthesis:</p>
            
            <div className="space-y-2.5">
              {PRESET_QUERIES.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="w-full p-3 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-300 text-left text-xs text-slate-700 hover:text-sky-700 transition-all font-medium flex items-center justify-between group shadow-xs"
                >
                  <span className="line-clamp-2">"{q}"</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs shadow-sm">
            <div className="flex items-center gap-2 font-mono text-sky-700 font-bold">
              <ShieldAlert className="w-4 h-4 text-emerald-600" /> ZERO-HALLUCINATION GUARANTEE
            </div>
            <p className="text-slate-600 leading-relaxed">
              Nexora Copilot runs deterministic SQL calculations over raw ledger events first, then uses RAG to translate metrics into plain English executive commentary.
            </p>
          </div>
        </div>

        {/* Right Interactive Chat Interface */}
        <div className="lg:col-span-8 glass-panel rounded-2xl border border-slate-200 overflow-hidden flex flex-col h-[650px] shadow-xl">
          
          {/* Chat Window Header */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <Bot className="w-5 h-5" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold font-mono flex items-center gap-2">
                  Nexora Copilot <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400">Online</span>
                </h4>
                <p className="text-[10px] text-slate-400 font-mono">Context: Enterprise Multi-Entity Ledger (2026)</p>
              </div>
            </div>

            <button 
              onClick={() => setMessages([])}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Clear Session
            </button>
          </div>

          {/* Chat Message Stream */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-3 ${
                  msg.sender === 'user'
                    ? 'bg-slate-900 text-white p-4 rounded-2xl rounded-tr-none text-xs sm:text-sm font-medium shadow-md'
                    : 'bg-white border border-slate-200 p-5 rounded-2xl rounded-tl-none text-slate-800 text-xs sm:text-sm space-y-4 shadow-sm'
                }`}>
                  <p>{msg.text}</p>

                  {/* AI Data Card Payload */}
                  {msg.data && (
                    <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3 text-xs border border-slate-800">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-mono">
                        <span className="font-bold text-sky-400">{msg.data.title}</span>
                        <span className="text-emerald-400 font-bold">{msg.data.growth}</span>
                      </div>

                      <div className="text-2xl font-extrabold text-white font-['Hanken_Grotesk']">{msg.data.val}</div>

                      <div className="space-y-1.5 font-mono text-[11px]">
                        {msg.data.breakdown.map((b, i) => (
                          <div key={i} className="flex justify-between text-slate-300 p-1.5 rounded bg-slate-800/80">
                            <span>{b.label}:</span>
                            <span className="text-sky-400 font-bold">{b.amount}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1 pt-2 border-t border-slate-800">
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Key Recommendations:</span>
                        {msg.data.insights.map((ins, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-slate-300 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ins}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isProcessing && (
              <div className="flex items-center gap-3 text-sky-700 font-mono text-xs p-4 rounded-xl bg-sky-50 border border-sky-200 animate-pulse font-semibold">
                <Sparkles className="w-4 h-4 animate-spin text-sky-600" />
                Executing RAG query against BigQuery financial data lakehouse...
              </div>
            )}
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 bg-white border-t border-slate-200">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about revenue, expense anomalies, cash flow projections..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-sky-500 font-medium"
              />
              <button
                type="submit"
                disabled={isProcessing || !inputValue.trim()}
                className="px-5 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-slate-800 transition-all flex items-center gap-2 disabled:opacity-50"
              >
                Send <Send className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
}
