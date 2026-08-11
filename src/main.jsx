import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] text-slate-900 p-6 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xl shadow-lg">
            NEXORA
          </div>
          <div className="space-y-2 max-w-md">
            <h1 className="text-2xl font-extrabold font-['Hanken_Grotesk']">Platform Session Refresh Required</h1>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nexora Financial Intelligence encountered a temporary runtime state update. Tap below to reload your platform session.
            </p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-slate-800 transition-all"
          >
            Reload Platform Session
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
