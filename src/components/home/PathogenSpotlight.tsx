import React from "react";
import { PATHOGENS_DATA } from "@/data/research";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PathogenSpotlight() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#165B33] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#165B33]"></span>
              Endemic & Pandemic Disease Focus
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Target Pathogens Under Investigation
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Tackling high-burden tropical and global pathogens through atomic-level antibody profiling, 
              epitope mapping, and structural vaccine prototyping.
            </p>
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#165B33] hover:underline"
          >
            <span>See Pathogen-Specific Publications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pathogens Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PATHOGENS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header Banner */}
                <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-emerald-50/50 to-white">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-[#165B33] mb-2">
                    {item.threatLevel}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0f172a]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium italic mt-0.5">
                    {item.organism}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Core targets */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Primary Molecular Targets:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coreTargets.map((target, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-semibold"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Lab Advancement Highlight Box */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 space-y-1">
                    <div className="text-[11px] font-bold text-[#165B33] uppercase tracking-wide">
                      Key MSI Lab Milestone:
                    </div>
                    <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                      {item.labAdvancement}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 text-right">
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#165B33] hover:underline"
                >
                  <span>Explore research data</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
