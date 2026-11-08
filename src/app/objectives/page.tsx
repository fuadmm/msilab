import React from "react";
import { Metadata } from "next";
import { OBJECTIVES_DATA, INSTRUMENTS_DATA } from "@/data/research";
import { 
  Target, 
  CheckCircle2, 
  Microscope, 
  ArrowRight,
  FlaskConical,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Objectives | Laboratory of Molecular & Structural Immunology (MSI Lab)",
  description: "Major research objectives of MSI Lab at University of Chittagong: Strategic viral interventions, molecular immune signaling, protein technology, and multidisciplinary synergy.",
};

export default function ObjectivesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Banner - Uniform with Home Page Upper Phase */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f4] via-white to-slate-50 border-b border-slate-200 py-16 sm:py-20">
        <div className="absolute inset-0 bg-lab-grid pointer-events-none opacity-60"></div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#165B33]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#165B33] text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#165B33]"></span>
              <span>Institutional Research Roadmap</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-[1.18]">
              Major Objectives of Our Research Projects
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Addressing urgent tropical infectious diseases through multi-scale structural biology, 
              protein engineering, and translational vaccinology across four tightly integrated core domains.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Core Objective Areas */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {OBJECTIVES_DATA.map((obj) => (
            <div 
              key={obj.id}
              id={obj.id}
              className="p-6 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:border-[#165B33]/50 hover:shadow-lg transition-all scroll-mt-28"
            >
              {/* Card Visual Header with Thematic Background Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8 h-48 sm:h-56 w-full border border-slate-200/80 shadow-sm group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${obj.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-7 h-7 rounded-lg bg-[#165B33] text-white flex items-center justify-center font-extrabold text-xs shadow-sm">
                        {obj.number}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-black/40 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-xs">
                        {obj.tag}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-sm">
                      {obj.title}
                    </h3>
                  </div>
                  <span className="hidden sm:inline-flex text-xs font-semibold text-emerald-200/90 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                    Core Domain
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Title and Description (6 cols) */}
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="text-sm sm:text-base font-bold text-[#165B33]">
                    {obj.subtitle}
                  </h4>

                  <p className="text-sm text-slate-700 leading-relaxed pt-1">
                    {obj.description}
                  </p>

                  <div className="pt-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Expected Scientific Deliverables:
                    </h5>
                    <div className="space-y-2">
                      {obj.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-[#165B33] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Methodologies & Techniques (6 cols) */}
                <div className="lg:col-span-6 bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
                      <Microscope className="w-4 h-4 text-[#165B33]" />
                      <span>Methodological Arsenal</span>
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                      Experimental & In Silico
                    </span>
                  </div>

                  <div className="space-y-3">
                    {obj.methodologies.map((method, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 transition-colors flex items-start gap-3 text-xs sm:text-sm text-slate-700 shadow-2xs"
                      >
                        <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-[#165B33] font-bold text-xs mt-0.5">
                          {mIdx + 1}
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900 block">{method}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 text-xs text-slate-500 flex items-center justify-between">
                    <span>Complies with CU Animal Ethics Review Board</span>
                    <Link
                      href="/team"
                      className="font-bold text-[#165B33] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Assigned Researchers</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Teaser Banner with Background Image */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-800/40">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity scale-105"
              style={{ backgroundImage: `url('/images/objectives/facilities-suite-bg.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#072212]/96 via-[#165B33]/92 to-[#0b331c]/88" />
            
            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-emerald-200 bg-white/10 backdrop-blur-xs border border-white/20">
                <FlaskConical className="w-3.5 h-3.5 text-emerald-300" />
                <span>Core Laboratory Infrastructure</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Explore Our State-of-the-Art Research Facilities
              </h2>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Discover our dedicated inventory of 16+ advanced scientific platforms—including the Beckman CytoFLEX Flow Cytometer, Illumina MiniSeq NGS, Hitachi &amp; Thermo HPLC systems, Haier Refrigerated Centrifuges, Haier Biosafety Suites, ASTEC CO₂ Incubators, and Euromex Fluorescence Microscopy.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
              <Link
                href="/facilities"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-[#165B33] bg-white hover:bg-emerald-50 transition-all shadow-md inline-flex items-center gap-2 group"
              >
                <span>View Full Facilities Directory</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action with Background Image */}
      <section className="relative py-16 bg-[#072212] overflow-hidden border-t border-emerald-950/40">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url('/images/objectives/objectives-hero-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#072212]/95 via-[#0b331c]/90 to-[#072212]/95" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Collaborate on Our Active Research Grants
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            We collaborate with academic groups, clinical trial units, and industry biomanufacturers 
            seeking expertise in peptide tags, recombinant antigen formulation, or immune assays.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3.5">
            <Link
              href="/collaborations"
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0b331c] bg-white hover:bg-emerald-50 shadow-md transition-all active:scale-95"
            >
              Explore Collaborative Frameworks
            </Link>
            <Link
              href="/apply"
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all active:scale-95"
            >
              Apply as a Fellow
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
