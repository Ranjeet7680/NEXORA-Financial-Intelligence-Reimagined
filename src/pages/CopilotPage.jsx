import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, Send, Sparkles, User, RefreshCw, BarChart2, TrendingUp, 
  ShieldAlert, CheckCircle2, ArrowRight, Mic, MicOff, Volume2, VolumeX, Radio, Zap 
} from 'lucide-react';

export default function CopilotPage() {
  const PRESET_QUERIES = [
    "What is our projected cash flow for Q4 2026?",
    "Detect financial risks & abnormal expense spikes in Q3",
    "Compare EBITDA margins against last year's performance",
    "Generate executive summary deck for board meeting"
  ];

  const [messages, setMessages] = useState([
    {
      id: 'msg-1',
      sender: 'user',
      text: "What is our projected cash flow for Q4 2026?"
    },
    {
      id: 'msg-2',
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
  
  // Voice Recognition State
  const [isListening, setIsListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('Tap Mic to speak');
  const [speechSupported, setSpeechSupported] = useState(true);
  const recognitionRef = useRef(null);

  // Voice Synthesis State
  const [speakingMsgId, setSpeakingMsgId] = useState(null);

  useEffect(() => {
    // Initialize Web Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = 'en-US';

      rec.onstart = () => {
        setIsListening(true);
        setVoiceStatus('Listening... Speak your financial query now');
      };

      rec.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setInputValue(transcript);
      };

      rec.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
        setVoiceStatus(`Speech Error: ${event.error}. Try typing below.`);
      };

      rec.onend = () => {
        setIsListening(false);
        setVoiceStatus('Voice capture complete. Click Send or Mic.');
      };

      recognitionRef.current = rec;
    } else {
      setSpeechSupported(false);
      setVoiceStatus('Voice Recognition unsupported in this browser.');
    }

    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (e) {}
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggleListening = () => {
    if (!speechSupported) {
      alert('Web Speech API is not supported in your browser. Please type your query in the input bar.');
      return;
    }

    if (isListening) {
      try { recognitionRef.current.stop(); } catch (e) {}
      setIsListening(false);
    } else {
      try {
        setInputValue('');
        recognitionRef.current.start();
      } catch (e) {
        console.error('Failed to start speech recognition:', e);
      }
    }
  };

  const speakMessageText = (msgId, textContent) => {
    if (!window.speechSynthesis) {
      alert('Speech Synthesis is not supported in your browser.');
      return;
    }

    if (speakingMsgId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingMsgId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textContent);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setSpeakingMsgId(null);
    };

    utterance.onerror = () => {
      setSpeakingMsgId(null);
    };

    setSpeakingMsgId(msgId);
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    if (isListening && recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (e) {}
      setIsListening(false);
    }

    const userMsgId = `msg-${Date.now()}`;
    const newMsgList = [...messages, { id: userMsgId, sender: 'user', text: query }];
    setMessages(newMsgList);
    setInputValue('');
    setIsProcessing(true);

    setTimeout(() => {
      let aiResponseData = {
        title: `AI Telemetry: "${query.substring(0, 28)}..."`,
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

      const aiMsgId = `msg-ai-${Date.now()}`;
      const aiResponseText = `Based on Nexora's neural model evaluation for "${query}", here is the executive analysis: Gross revenue is projected at ₹24.8 Cr with net liquidity reserve of ₹8.17 Cr. Anomaly score indicates 99.8% confidence.`;

      setMessages(prev => [
        ...prev,
        {
          id: aiMsgId,
          sender: 'ai',
          text: aiResponseText,
          data: aiResponseData
        }
      ]);
      setIsProcessing(false);

      // Auto-read aloud AI response if query was sent via voice
      if (textToSend && window.speechSynthesis) {
        speakMessageText(aiMsgId, aiResponseText);
      }
    }, 1100);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold">
          <Radio className="w-4 h-4 text-sky-600 animate-pulse" />
          <span>NEXORA AI VOICE COPILOT v2.5</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Conversational & Voice <span className="gradient-text-sky-indigo">Financial AI System.</span>
        </h1>
        <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          Ask complex financial questions using natural language or continuous voice input. Get instant data-backed forecasts, speech readout, and variance analysis in real time.
        </p>
      </div>

      {/* Main Copilot Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Suggestions & Preset Queries */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Quick Voice Assistant Trigger Card */}
          <div 
            onClick={toggleListening}
            className={`p-5 rounded-2xl border transition-all cursor-pointer shadow-md flex items-center justify-between group ${
              isListening 
                ? 'bg-rose-50 border-rose-300 ring-2 ring-rose-500/20' 
                : 'bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white border-slate-800 hover:border-sky-500/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all ${
                isListening 
                  ? 'bg-rose-500 text-white animate-ping' 
                  : 'bg-sky-500/20 text-sky-400 border border-sky-400/30 group-hover:scale-105'
              }`}>
                {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6 animate-pulse" />}
              </div>
              <div>
                <h4 className={`text-xs sm:text-sm font-bold font-['Hanken_Grotesk'] ${isListening ? 'text-rose-900' : 'text-white'}`}>
                  {isListening ? 'Stop Listening' : 'Tap to Speak Query'}
                </h4>
                <p className={`text-[10px] font-mono ${isListening ? 'text-rose-700' : 'text-sky-300/80'}`}>
                  {isListening ? 'Recording voice...' : 'Speech Recognition System'}
                </p>
              </div>
            </div>
            <div className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold border ${
              isListening 
                ? 'bg-rose-100 text-rose-800 border-rose-200' 
                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            }`}>
              {isListening ? 'LIVE MIC' : 'VOICE ON'}
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-mono uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600" /> Quick Prompts
            </h3>
            <p className="text-xs text-slate-500">Tap any preset query to trigger instant copilot synthesis:</p>
            
            <div className="space-y-2">
              {PRESET_QUERIES.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="w-full p-3 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-300 text-left text-xs text-slate-700 hover:text-sky-700 transition-all font-medium flex items-center justify-between group shadow-xs min-h-[44px]"
                >
                  <span className="line-clamp-2">"{q}"</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2.5 text-xs shadow-sm">
            <div className="flex items-center gap-2 font-mono text-sky-700 font-bold">
              <ShieldAlert className="w-4 h-4 text-emerald-600" /> ZERO-HALLUCINATION GUARANTEE
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Nexora Copilot runs deterministic SQL calculations over raw ledger events first, then uses RAG to translate metrics into plain English executive commentary.
            </p>
          </div>
        </div>

        {/* Right Interactive Voice & Text Chat Interface */}
        <div className="lg:col-span-8 glass-panel rounded-2xl border border-slate-200 overflow-hidden flex flex-col h-[520px] sm:h-[650px] shadow-xl">
          
          {/* Chat Window Header */}
          <div className="p-3.5 sm:p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <Bot className="w-5 h-5" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold font-mono flex items-center gap-2">
                  Nexora Copilot <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold">Voice Ready</span>
                </h4>
                <p className="text-[10px] text-slate-400 font-mono line-clamp-1">{voiceStatus}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setMessages([])}
                className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono flex items-center gap-1 transition-colors"
                title="Clear Session"
              >
                <RefreshCw className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Clear</span>
              </button>
            </div>
          </div>

          {/* Voice Listening Active Indicator Banner */}
          {isListening && (
            <div className="p-3 bg-rose-500 text-white flex items-center justify-between text-xs font-mono animate-pulse">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-white animate-spin" />
                <span>LISTENING TO VOICE INPUT... Speak clearly into your microphone</span>
              </div>
              <button onClick={toggleListening} className="underline font-bold text-white">Stop</button>
            </div>
          )}

          {/* Chat Message Stream */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-5 bg-slate-50/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[90%] sm:max-w-[85%] space-y-3 ${
                  msg.sender === 'user'
                    ? 'bg-slate-900 text-white p-3.5 sm:p-4 rounded-2xl rounded-tr-none text-xs sm:text-sm font-medium shadow-md'
                    : 'bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl rounded-tl-none text-slate-800 text-xs sm:text-sm space-y-4 shadow-sm'
                }`}>
                  
                  {/* Message Header bar with Audio Readout Button for AI */}
                  <div className="flex items-start justify-between gap-2">
                    <p className="leading-relaxed">{msg.text}</p>
                    {msg.sender === 'ai' && (
                      <button
                        onClick={() => speakMessageText(msg.id, msg.text)}
                        title="Speech Readout (Read Aloud)"
                        className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all shrink-0 ${
                          speakingMsgId === msg.id 
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold animate-bounce' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                        }`}
                      >
                        {speakingMsgId === msg.id ? <VolumeX className="w-3.5 h-3.5 text-emerald-700" /> : <Volume2 className="w-3.5 h-3.5 text-sky-600" />}
                        <span className="hidden sm:inline text-[10px] font-mono">{speakingMsgId === msg.id ? 'Stop' : 'Read'}</span>
                      </button>
                    )}
                  </div>

                  {/* AI Data Card Payload */}
                  {msg.data && (
                    <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900 text-white space-y-3 text-xs border border-slate-800 shadow-md">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-mono">
                        <span className="font-bold text-sky-400 truncate max-w-[200px]">{msg.data.title}</span>
                        <span className="text-emerald-400 font-bold shrink-0">{msg.data.growth}</span>
                      </div>

                      <div className="text-xl sm:text-2xl font-extrabold text-white font-['Hanken_Grotesk']">{msg.data.val}</div>

                      <div className="space-y-1 font-mono text-[10px] sm:text-[11px]">
                        {msg.data.breakdown.map((b, i) => (
                          <div key={i} className="flex justify-between text-slate-300 p-1.5 rounded bg-slate-800/80">
                            <span>{b.label}:</span>
                            <span className="text-sky-400 font-bold">{b.amount}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1 pt-2 border-t border-slate-800">
                        <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">Key Recommendations:</span>
                        {msg.data.insights.map((ins, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-slate-300 text-[10px] sm:text-[11px]">
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
                <Sparkles className="w-4 h-4 animate-spin text-sky-600 shrink-0" />
                <span>Executing RAG query against BigQuery financial data lakehouse...</span>
              </div>
            )}
          </div>

          {/* Chat Input & Voice Bar */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2 sm:gap-3">
              
              {/* Mic Toggle Button */}
              <button
                type="button"
                onClick={toggleListening}
                className={`p-3 rounded-xl border transition-all flex items-center justify-center shrink-0 ${
                  isListening 
                    ? 'bg-rose-500 text-white border-rose-600 animate-pulse shadow-md' 
                    : 'bg-sky-50 hover:bg-sky-100 text-sky-700 border-sky-200'
                }`}
                title={isListening ? 'Stop Mic' : 'Start Voice Input'}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={isListening ? 'Listening to voice...' : 'Ask about revenue, expense anomalies, cash flow...'}
                className="flex-1 px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-sky-500 font-medium"
              />

              <button
                type="submit"
                disabled={isProcessing || !inputValue.trim()}
                className="px-4 sm:px-5 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-slate-800 transition-all flex items-center gap-1.5 disabled:opacity-50 shrink-0"
              >
                <span className="hidden sm:inline">Send</span>
                <Send className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
}

