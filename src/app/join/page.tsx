import React from "react";
import { Metadata } from "next";
import JoinApplicationForm from "@/components/join/JoinApplicationForm";
import { 
  FlaskConical, 
  GraduationCap, 
  Award, 
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Join the Lab | Recruitment & Applications | MSI Lab",
  description: "Apply to join the Laboratory of Molecular & Structural Immunology (MSI Lab) as an Undergraduate Research Fellow, Postgraduate Fellow, Doctorate/MPhil Candidate, or Non-thesis Intern.",
};

export default function JoinPage() {
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
              <Sparkles className="w-3.5 h-3.5" />
              <span>Opportunities &amp; Fellowships</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Join Our Immunology Research Group
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              We are looking for motivated students and researchers eager to explore molecular immunology, 
              viral structural biology, and therapeutic protein engineering at the University of Chittagong.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Expectations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Positions Available Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-[#165B33] flex items-center justify-center font-bold text-xs">
              01
            </span>
            <h3 className="font-bold text-sm text-[#0f172a]">Doctorate & MPhil</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Full-time multi-year investigations into Dengue/JEV ED3 vaccines, antibody kinetics, and patented peptide tags.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-[#165B33] flex items-center justify-center font-bold text-xs">
              02
            </span>
            <h3 className="font-bold text-sm text-[#0f172a]">Postgraduate (MSc)</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Master&apos;s thesis research involving recombinant expression, ELISA serology, and FPLC protein purification.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-[#165B33] flex items-center justify-center font-bold text-xs">
              03
            </span>
            <h3 className="font-bold text-sm text-[#0f172a]">Undergraduate Trainees</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              BSc 3rd/4th year trainees participating in plasmid extraction, real-time PCR, and molecular bioinformatics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-[#165B33] flex items-center justify-center font-bold text-xs">
              04
            </span>
            <h3 className="font-bold text-sm text-[#0f172a]">Internship Program</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Short-term clinical or computational internship for visiting medical, biotechnology, or pharmacy students.
            </p>
          </div>
        </div>

        {/* Multi-step Application Wizard */}
        <section>
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl font-bold text-[#0f172a]">
              Submit Your Online Application
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Complete the 4-step form below. Our admissions committee reviews applications on a rolling quarterly cycle.
            </p>
          </div>

          <JoinApplicationForm />
        </section>

        {/* What MSI Lab Offers Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0f172a]">
              <FlaskConical className="w-4 h-4 text-[#165B33]" />
              <span>Modern Instrumentation</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct access to Analytik Jena qTOWER³ G Real-Time qPCR, Thermo &amp; Hitachi HPLC systems, CytoFLEX flow cytometry, and dedicated biosafety suites.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0f172a]">
              <GraduationCap className="w-4 h-4 text-[#165B33]" />
              <span>International Mentorship</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Collaboration with Kuroda Lab at TUAT Tokyo, recommendation letters for PhD applications abroad, and paper co-authorship.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0f172a]">
              <Award className="w-4 h-4 text-[#165B33]" />
              <span>Grant Opportunities</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Eligibility for student fellowships under the World Bank HEAT project and Ministry of Science & Technology (MOST) allocations.
            </p>
          </div>
        </div>

        {/* Lab Instrumentation Callout */}
        <section className="pt-4 pb-2">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
              Instrumentation Accessible to MSI Lab Researchers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              All accepted fellows receive direct mentorship and instrument operational clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-2xs space-y-1.5">
              <div className="font-bold text-[#165B33] text-sm sm:text-base">Real-Time qPCR</div>
              <div className="text-xs text-slate-600 leading-relaxed">
                Analytik Jena qTOWER³ G for viral RNA amplification &amp; Ct tracking
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-2xs space-y-1.5">
              <div className="font-bold text-[#165B33] text-sm sm:text-base">HPLC Chromatography</div>
              <div className="text-xs text-slate-600 leading-relaxed">
                Thermo Vanquish Core &amp; Hitachi Chromaster for SEC, ion-exchange &amp; peptide purification
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-2xs space-y-1.5">
              <div className="font-bold text-[#165B33] text-sm sm:text-base">ELISA Microplate Suite</div>
              <div className="text-xs text-slate-600 leading-relaxed">
                Tecan Infinite 200 PRO multimode reader for quantitative serology &amp; kinetics
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-2xs space-y-1.5">
              <div className="font-bold text-[#165B33] text-sm sm:text-base">Flow Cytometry</div>
              <div className="text-xs text-slate-600 leading-relaxed">
                Beckman Coulter CytoFLEX for multiparametric single-cell immunophenotyping
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
