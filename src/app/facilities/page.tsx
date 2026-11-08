import React from "react";
import { Metadata } from "next";
import { INSTRUMENTS_DATA } from "@/data/research";
import { 
  FlaskConical, 
  Microscope, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Dna,
  Layers,
  FileText
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "State-of-the-Art Research Facilities | Laboratory of Molecular & Structural Immunology (MSI Lab)",
  description: "Explore the advanced laboratory infrastructure, flow cytometers, HPLC/UHPLC systems, real-time qPCR, benchtop NGS, and biophysical instruments at MSI Lab, University of Chittagong.",
};

const SUPPORTING_SUITES = [
  {
    title: "BSL-2 Tissue & Cell Culture Suite",
    desc: "Certified Class II biosafety laminar flow cabinets, CO2 incubators, inverted phase-contrast microscopy, and aseptic processing for viral neutralization and mammalian cell infection models.",
    tag: "Biosafety Level 2"
  },
  {
    title: "Cryogenic Specimen & Biobank Facility",
    desc: "Ultra-low temperature (-80°C) deep freezers, liquid nitrogen vapor cryo-tanks, and temperature-logged cold storage for long-term clinical serum samples, viral isolates, and hybridomas.",
    tag: "Cold-Chain Integrity"
  },
  {
    title: "Recombinant Protein & Media Preparation Suite",
    desc: "Equipped with automated autoclaves, refrigerated high-speed centrifuges, orbital shaking incubators, and sterile filtration assemblies for microbial expression systems.",
    tag: "Bioprocessing"
  },
  {
    title: "Computational Immunoinformatics & Structural Modeling",
    desc: "Dedicated GPU-accelerated computing workstations for molecular dynamics simulations (GROMACS, AMBER), Rosetta de novo protein tag engineering, and Cryo-EM structure analysis.",
    tag: "In Silico Synergy"
  }
];

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f4] via-white to-slate-50 border-b border-slate-200 py-16 sm:py-20">
        <div className="absolute inset-0 bg-lab-grid pointer-events-none opacity-60"></div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#165B33]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#165B33] bg-emerald-100/80 border border-emerald-200">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Core Infrastructure &amp; Platforms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              State-of-the-Art Research Facilities
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Supported by the World Bank Higher Education and Agricultural Transformation (HEAT) Project, 
              the Ministry of Science &amp; Technology (MOST), and Chittagong University, our core facility 
              integrates advanced flow cytometry, HPLC/UHPLC systems, NGS genomic sequencing, real-time qPCR, 
              and biophysical characterization.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/facilities/service-request"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <Cpu className="w-4 h-4" />
                <span>Apply for Instrument Usage / Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#inventory"
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
              >
                Browse Instrument Inventory
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Infrastructure Live Status Banner - Matching Publication Banner Aesthetic */}
      <section className="bg-gradient-to-br from-[#0c3920] via-[#165B33] to-[#1e7845] text-white border-b border-emerald-950 py-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold backdrop-blur-xs border border-emerald-400/20">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Certified Core Infrastructure &amp; Biocontainment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                National Center of Excellence for Structural &amp; Viral Immunology
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                Empowered by the World Bank HEAT Project (HEAT-11009-CU) and MOST grants, providing certified BSL-2 biocontainment, 
                high-resolution flow cytometry, multi-channel UHPLC separation, and quantitative NGS genomics to researchers nationwide.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Platforms</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">16+</div>
                <div className="text-[10px] text-emerald-200/70">Benchtop Suites</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Safety</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">BSL-2</div>
                <div className="text-[10px] text-emerald-200/70">Certified Suite</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Access</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">Open</div>
                <div className="text-[10px] text-emerald-200/70">Research Service</div>
              </div>
              <Link
                href="/facilities/service-request"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-[#165B33] hover:bg-emerald-50 text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all"
              >
                <span>Apply for Usage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Instruments Matrix */}
      <section id="inventory" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#165B33] uppercase tracking-wider mb-2">
                <Microscope className="w-4 h-4" />
                <span>Primary Instrument Inventory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                High-Resolution Experimental Platforms
              </h2>
            </div>
            <div className="space-y-2 max-w-xl">
              <p className="text-xs sm:text-sm text-slate-600">
                Each platform is operated under rigorous SOPs, calibrated routinely, and integrated into our 
                investigations on viral immunology, structural vaccinology, and recombinant antigen production.
              </p>
              <Link
                href="/facilities/service-request"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#165B33] hover:text-[#0e3f22] underline underline-offset-4"
              >
                <span>Looking to run samples? Submit an Instrument Usage Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {INSTRUMENTS_DATA.map((inst) => (
              <div
                key={inst.id}
                className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Instrument Image Container */}
                  <div className="relative h-60 bg-gradient-to-b from-slate-50 to-slate-100/70 p-6 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
                        {inst.brand}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#165B33] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/60 inline-block mb-1.5">
                        {inst.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#165B33] transition-colors leading-snug">
                        {inst.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {inst.model}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {inst.purpose}
                    </p>

                    {/* Associated Experimental Techniques */}
                    <div className="pt-2 space-y-2 border-t border-slate-100">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Microscope className="w-3.5 h-3.5 text-[#165B33]" />
                        <span>Key Techniques & Applications:</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {inst.techniques.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-medium text-slate-700 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 transition-colors px-2 py-0.5 rounded-md border border-slate-200/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 text-[11px] text-slate-600 leading-relaxed">
                      <span className="font-bold text-slate-800 block mb-0.5">Specifications:</span>
                      {inst.specs}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Dual CTAs */}
                <div className="px-6 pb-6 pt-2 space-y-2">
                  <Link
                    href={`/facilities/service-request?instrument=${inst.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-all shadow-2xs group/btn"
                  >
                    <FlaskConical className="w-3.5 h-3.5" />
                    <span>Apply for this Instrument</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href={inst.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                  >
                    <span>Manufacturer Portal & Specifications</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Supporting Infrastructure & Biosafety Suites */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-[#165B33] bg-emerald-100/70 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#165B33]" />
              <span>Quality Assurance & Lab Standards</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Supporting Infrastructure & Safety Environment
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our instrumentation is housed within strictly regulated laboratory environments complying 
              with national and international bio-risk management protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPORTING_SUITES.map((suite, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                    {suite.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {suite.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {suite.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-[#165B33] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Fully Operational</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Collaboration / Access CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
            Access Our Core Research Facilities
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We collaborate with academic institutions, diagnostic developers, and pharmaceutical researchers 
            seeking access to advanced flow cytometry, chromatographic purity analysis, or molecular testing.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/facilities/service-request"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <Cpu className="w-4 h-4" />
              <span>Apply for Instrument Service &amp; Usage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/collaborations"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Strategic Collaborations</span>
            </Link>
            <Link
              href="/research#protocols"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#165B33] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Laboratory Protocols &amp; SOPs (11)</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
