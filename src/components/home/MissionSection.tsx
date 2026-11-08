import React from "react";
import { Target, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function MissionSection() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-lab-dots opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#165B33] bg-emerald-100/80 border border-emerald-200">
              <Target className="w-3.5 h-3.5" />
              <span>Our Vision & Mission</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Translating Fundamental Structural Immunology into Life-Saving Biotherapeutics
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              At the Laboratory of Molecular & Structural Immunology (MSI Lab), our primary mission is to 
              <strong className="text-slate-900 font-semibold"> elucidate the precise mechanisms of the immune system at the molecular and structural levels</strong>, 
              unlocking the atomic blueprints that govern host defense, pathogen evasion, and immunological memory.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              By uniting X-ray crystallography insights, Cryo-EM structural models, flow cytometric immune profiling, and protein engineering, 
              we systematically translate laboratory discoveries into safe, scalable, and cost-effective vaccines and monoclonal therapeutics 
              specifically tailored for urgent infectious threats across Bangladesh and developing nations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#165B33] flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="font-bold text-sm text-[#0f172a]">Atomic-Resolution Insights</h3>
                <p className="text-xs text-slate-500">
                  Resolving structural interaction footprints between host receptors and mutating viral envelope domains.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#165B33] flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="font-bold text-sm text-[#0f172a]">Translational Innovation</h3>
                <p className="text-xs text-slate-500">
                  Patented peptide tags and subunit constructs engineered for affordable bacterial biomanufacturing.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/objectives"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#165B33] hover:underline"
              >
                <span>Read detailed four-phase research objectives</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Infographic of the Lab Pipeline */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  MSI Lab Discovery-to-Clinic Paradigm
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#165B33] text-white">
                  Continuous Pipeline
                </span>
              </div>

              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#165B33] flex items-center justify-center shrink-0 font-extrabold text-sm shadow-xs">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0f172a]">Pathogen Surveillance & Clinical Serology</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Analyzing clinical cohorts from regional hospitals for viral load, antibody titers, and mutant drift patterns.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#165B33] flex items-center justify-center shrink-0 font-extrabold text-sm shadow-xs">
                  B
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0f172a]">Structural Characterization & In Silico Modeling</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Cryo-EM modeling, molecular dynamics simulations, and epitope mapping of conserved neutralization targets.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#165B33] flex items-center justify-center shrink-0 font-extrabold text-sm shadow-xs">
                  C
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0f172a]">Protein Engineering & Peptide Tagging</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Incorporating proprietary solubility-controlling tags to achieve high-yield folding in bacterial host systems.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#165B33] flex items-center justify-center shrink-0 font-extrabold text-sm shadow-xs">
                  D
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0f172a]">In Vivo Immunogenicity & Pre-Clinical Validation</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Murine testing under Animal Ethics protocols: measuring IgG titers, neutralization curves, and T-cell recall memory.
                  </p>
                </div>
              </div>

              <div className="pt-2 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-[#165B33] flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span className="font-medium">
                  Result: Accessible, shelf-stable vaccine subunit candidates and high-affinity diagnostics.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
