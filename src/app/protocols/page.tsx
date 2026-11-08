import React from "react";
import type { Metadata } from "next";
import ProtocolsSection from "@/components/research/ProtocolsSection";
import { FileText, Download, ShieldCheck, Cpu, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Laboratory Protocols & SOP Collections | MSI Lab",
  description:
    "Bench-validated standard operating procedures (SOPs) and laboratory protocols utilized by the Laboratory of Molecular & Structural Immunology (MSI Lab) across viral diagnostics, clinical serology, in vivo models, molecular docking, and phytochemical extractions.",
};

export default function ProtocolsPage() {
  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Header Banner - Uniform Light Gray Style */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f4] via-white to-slate-50 border-b border-slate-200 py-16 sm:py-20">
        <div className="absolute inset-0 bg-lab-grid pointer-events-none opacity-60"></div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#165B33]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#165B33] bg-emerald-100/80 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Open Science &amp; Reproducibility · 11 Verified SOPs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Laboratory Protocols &amp; SOPs
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Standardized, bench-verified experimental protocols and computational pipelines developed and utilized by MSI Lab researchers across viral surveillance, clinical serology, in vivo challenge, molecular docking, and phytochemical extractions. Available for open academic download.
            </p>

          </div>
        </div>
      </section>

      {/* Bench-Verified SOPs Highlight Banner - Matching Publication Banner Aesthetic */}
      <section className="bg-gradient-to-br from-[#0c3920] via-[#165B33] to-[#1e7845] text-white border-b border-emerald-950 py-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold backdrop-blur-xs border border-emerald-400/20">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Standardized Operating Procedures &amp; Quality Rigor</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Bench-Verified Protocols &amp; Reproducible Science
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                Peer-reviewed experimental protocols calibrated against clinical samples and verified across dozens of runs for 
                viral RNA isolation, real-time qPCR, recombinant bacterial expression, and indirect ELISA.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Verified</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">11 SOPs</div>
                <div className="text-[10px] text-emerald-200/70">Bench Tested</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Format</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">DOCX</div>
                <div className="text-[10px] text-emerald-200/70">Open Download</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Standard</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">GLP</div>
                <div className="text-[10px] text-emerald-200/70">Biosafety II</div>
              </div>
              <a
                href="#protocols-list"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-[#165B33] hover:bg-emerald-50 text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all"
              >
                <span>Browse SOPs</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Protocols Interactive Section */}
      <div id="protocols-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <ProtocolsSection />
      </div>
    </div>
  );
}
