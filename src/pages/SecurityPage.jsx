import React from 'react';
import { ShieldCheck, Lock, Key, FileCheck, Cloud, Eye, CheckCircle2 } from 'lucide-react';
import Card3D from '../components/Card3D';

export default function SecurityPage() {
  const SECURITY_FEATURES = [
    {
      title: "AES-256 Encryption",
      icon: Lock,
      desc: "All financial records, raw ledger payloads, and AI memory vectors are encrypted at rest with AES-256 and in transit via TLS 1.3."
    },
    {
      title: "Role-Based Access Control (RBAC)",
      icon: ShieldCheck,
      desc: "Fine-grained permission controls restricting access to P&L reports, salary data, and AI prompts based on corporate role."
    },
    {
      title: "Multi-Factor Authentication (MFA)",
      icon: Key,
      desc: "Mandatory WebAuthn and TOTP hardware key authentication across all admin and developer access nodes."
    },
    {
      title: "Immutable Audit Logs",
      icon: FileCheck,
      desc: "Every database query, Copilot question, and financial report generation is recorded in an immutable, cryptographic audit trail."
    },
    {
      title: "Isolated Cloud Vaults",
      icon: Cloud,
      desc: "Single-tenant containerized instances hosted on Google Cloud Platform with VPC service controls and zero public database endpoints."
    },
    {
      title: "Data Governance & Compliance",
      icon: Eye,
      desc: "Built in compliance with SOC2 Type II, ISO 27001, GDPR, and GAAP data handling guidelines."
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>ENTERPRISE SECURITY & TRUST CORE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
          Built for Financial Data.<br />
          <span className="gradient-text-sky-indigo">Designed for Trust.</span>
        </h1>
        <p className="text-slate-600 text-base">
          Nexora employs military-grade encryption, zero-trust network architecture, and strict data isolation to protect your financial intelligence.
        </p>
      </div>

      {/* Grid of 6 Security Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SECURITY_FEATURES.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <Card3D key={idx} className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-['Hanken_Grotesk']">{sec.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{sec.desc}</p>

              <div className="pt-3 flex items-center gap-1.5 text-xs text-emerald-700 font-mono font-bold">
                <CheckCircle2 className="w-4 h-4" /> Active Defense Shield
              </div>
            </Card3D>
          );
        })}
      </div>

      {/* Certifications Banner */}
      <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-slate-600">
        <div>
          <span className="text-slate-900 font-bold block text-sm font-['Hanken_Grotesk']">SOC2 TYPE II & ISO 27001 AUDITED</span>
          <span>Annual independent third-party penetration testing and compliance audit reports available on request.</span>
        </div>
        <button 
          onClick={() => alert('Security Audit Whitepaper requested. Dispatched to your email.')}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors"
        >
          Request Audit Whitepaper →
        </button>
      </div>

    </div>
  );
}
