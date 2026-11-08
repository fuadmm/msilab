import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  FlaskConical, 
  Dna, 
  Microscope, 
  ShieldCheck, 
  FileText, 
  Globe2,
  ChevronRight
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f4] via-white to-slate-50 border-b border-slate-200">
      {/* Background scientific decorative grids */}
      <div className="absolute inset-0 bg-lab-grid pointer-events-none opacity-60"></div>
      
      {/* Glowing subtle radial gradient */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#165B33]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#165B33] text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#165B33]"></span>
              <span>University of Chittagong · Department of Biochemistry & Molecular Biology</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-[1.18]">
                Engineering Proteins to Unravel Viral Immunity &amp;{" "}
                <span className="text-[#165B33] relative inline-block">
                  Advance Next-Generation Vaccines
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#165B33]/15 -z-10 rounded"></span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                The Molecular Structure and Immunology (MSI) Lab at the University of Chittagong combines structural protein engineering, peptide tag chemistry, and immunological evaluation to address major viral health challenges.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#065f46] text-xs font-semibold">
                <span>From Atomic Structure to Population Protection: Innovations in Dengue and SARS-CoV-2 Immunology</span>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/objectives"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#165B33] hover:bg-[#114929] shadow-md shadow-[#165B33]/20 hover:shadow-lg transition-all duration-200 active:scale-98"
              >
                <span>Explore Research Objectives</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-[#165B33]/40 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-[#165B33]" />
                <span>Publications</span>
              </Link>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-[#165B33] hover:bg-emerald-50 transition-colors"
              >
                <span>Join Our Team</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Key research metric stats (Section 1.2) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="text-2xl font-extrabold text-[#165B33]">25+</div>
                <div className="text-xs font-medium text-slate-500">Theses &amp; Dissertations</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="text-2xl font-extrabold text-[#0f172a]">4</div>
                <div className="text-xs font-medium text-slate-500">Dengue Serotypes (DENV 1–4)</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="text-2xl font-extrabold text-[#165B33]">2</div>
                <div className="text-xs font-medium text-slate-500">Patented Tag Technologies</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="text-2xl font-extrabold text-[#0f172a]">15+ Yrs</div>
                <div className="text-xs font-medium text-slate-500">Dedicated Leadership</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Visual Lab Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card frame */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 relative z-10 space-y-5">
                
                {/* Header of showcase */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#165B33]/10 flex items-center justify-center text-[#165B33]">
                      <Microscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-[#0f172a]">MSI Lab Core Discovery</h2>
                      <p className="text-xs text-slate-500">Translational Vaccinology Focus</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-100 text-[#165B33]">
                    Active Grant 2025–26
                  </span>
                </div>

                {/* Highlighted items inside the card */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#165B33] mt-0.5">
                        <Dna className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0f172a]">
                          Solubility-Controlling Peptide Tags
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Overcoming bacterial inclusion bodies to produce refractory viral antigens (WO2019031446 & Vaccine 2025).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#165B33] mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0f172a]">
                          Dengue Multi-Serotype ED3 Neutralization
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Decoupling protective antibody responses from dangerous Antibody-Dependent Enhancement (ADE).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#165B33] mt-0.5">
                        <FlaskConical className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0f172a]">
                          Non-Glycosylated SARS-CoV-2 RBD Antigens
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Affordable, high-yield Omicron BA.5 subunit immunogen synthesis preserving native ACE2 binding affinity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer of card */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Globe2 className="w-3.5 h-3.5 text-[#165B33]" />
                    <span>TUAT Tokyo & World Bank HEAT Partner</span>
                  </div>
                  <Link
                    href="/team/pi"
                    className="font-bold text-[#165B33] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Meet PI Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>

              {/* Decorative shadow layer behind card */}
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#165B33]/10 rounded-2xl -z-10 blur-xs"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
