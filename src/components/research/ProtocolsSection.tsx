"use client";

import React, { useState } from "react";
import { PROTOCOLS_DATA, ProtocolItem } from "@/data/protocols";
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  Microscope, 
  Layers, 
  Sparkles,
  Dna,
  FlaskConical
} from "lucide-react";

export default function ProtocolsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Protocols", count: PROTOCOLS_DATA.length },
    { id: "virology", label: "Virology & Diagnostics", count: PROTOCOLS_DATA.filter(p => p.category === "virology").length },
    { id: "immunology", label: "Immunology & Serology", count: PROTOCOLS_DATA.filter(p => p.category === "immunology").length },
    { id: "computational", label: "Computational Biology", count: PROTOCOLS_DATA.filter(p => p.category === "computational").length },
    { id: "plant", label: "Plant Molecular Biology", count: PROTOCOLS_DATA.filter(p => p.category === "plant").length },
  ];

  const filteredProtocols = PROTOCOLS_DATA.filter((p) => {
    const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesQuery = 
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.equipment.some(e => e.toLowerCase().includes(q)) ||
      p.keySteps.some(s => s.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  return (
    <section className="mt-20 pt-16 border-t border-slate-200">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#165B33] bg-emerald-100/80 border border-emerald-200">
            <FlaskConical className="w-3.5 h-3.5 text-[#165B33]" />
            <span>Open Science &amp; Reproducibility · 11 Standard Operating Procedures</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Laboratory Protocol Collections &amp; SOPs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Standardized, peer-reviewed experimental protocols utilized by MSI Lab researchers across viral surveillance, clinical serology, in vivo challenge, molecular docking, and phytochemical extractions. Available for open academic download.
          </p>
        </div>

        {/* Quick count pill */}
        <div className="shrink-0">
          <div className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-2xs text-xs font-bold text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Bench-Verified Laboratory SOPs</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs mb-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Domain:</span>
            </span>
            {categories.map((c) => {
              const isActive = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#165B33] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  <span>{c.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search protocols, equipment, or steps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#165B33] focus:ring-1 focus:ring-[#165B33] transition-colors"
            />
          </div>

        </div>

        {/* Showing counter */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            Displaying <strong className="text-slate-900">{filteredProtocols.length}</strong> of {PROTOCOLS_DATA.length} verified laboratory protocols
          </span>
          {(selectedCategory !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-[#165B33] font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Protocols Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProtocols.map((protocol) => (
          <article
            key={protocol.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:border-[#165B33]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between p-6 group"
          >
            <div className="space-y-4">
              
              {/* Category & File Format Pill */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#165B33] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/60 font-mono">
                  {protocol.categoryLabel}
                </span>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-mono flex items-center gap-1">
                  <FileText className="w-3 h-3 text-blue-600" />
                  <span>DOCX · {protocol.fileSize}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold text-[#0f172a] group-hover:text-[#165B33] transition-colors leading-snug">
                {protocol.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {protocol.description}
              </p>

              {/* Key Procedural Steps */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Core Procedural Workflow:
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-600">
                  {protocol.keySteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instruments Required */}
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Platform &amp; Equipment:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {protocol.equipment.map((eq, eIdx) => (
                    <span
                      key={eIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-50 text-slate-700 border border-slate-200"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Download CTA Button */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={protocol.downloadUrl}
                download
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#165B33] bg-emerald-50 hover:bg-[#165B33] hover:text-white border border-emerald-200/80 hover:border-[#165B33] transition-all shadow-2xs group/btn"
              >
                <Download className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
                <span>Download SOP (.DOCX)</span>
              </a>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}
