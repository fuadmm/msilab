import React, { Suspense } from "react";
import { Metadata } from "next";
import InstrumentServiceRequestForm from "@/components/facilities/InstrumentServiceRequestForm";
import { 
  FlaskConical, 
  Cpu, 
  ShieldCheck, 
  FileCheck2, 
  HelpCircle, 
  Clock, 
  CheckCircle2, 
  Building2,
  ExternalLink,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instrument Usage Application Form | Core Facilities Service | MSI Lab",
  description: "Apply for research service, sample analysis, and operational access to state-of-the-art instruments at MSI Lab, University of Chittagong. Flow cytometry, HPLC, qPCR, NGS, and biophysical suites.",
};

export default function InstrumentServiceRequestPage() {

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
              <span>Core Facility Access &amp; Analytical Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Application for Core Instrument Usage
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Request assisted sample analysis, operational block time, or collaborative research access to our 
              state-of-the-art flow cytometers, analytical HPLC/UHPLC systems, multiplex real-time qPCR, and NGS genomic suite.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Service Workflow & Highlights */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#165B33] flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="font-bold text-xs text-slate-900">Submit Application</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Detail sample metrics, target assays, and preferred instrumentation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#165B33] flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="font-bold text-xs text-slate-900">Technical Feasibility Review</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                MSI Lab committee assesses buffer compatibility and biosafety classification.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#165B33] flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="font-bold text-xs text-slate-900">Slot Allocation & Intake</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Cold-chain sample submission at Room 304, Department of Biochemistry &amp; Molecular Biology.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#165B33] flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h3 className="font-bold text-xs text-slate-900">Data &amp; Quality Report</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Receive calibrated raw data files, chromatograms, amplification curves, or gating files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Form Wizard */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
              <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-semibold text-slate-600">Loading Instrument Application...</p>
            </div>
          }>
            <InstrumentServiceRequestForm />
          </Suspense>
        </div>
      </section>

      {/* Service Guidelines & Policies Accordion / Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Facility Usage &amp; Operational Governance
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Please review our institutional policies governing sample intake, equipment qualification, and publication acknowledgements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#165B33] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Biosafety &amp; Hazard Containment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All clinical specimens (blood, plasma, saliva) and infectious arboviruses must be declared. BSL-2 activities are strictly restricted to our certified Haier Class II biosafety containment suites with prior IBC consent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#165B33] flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Consumables &amp; Mobile Phases</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Users requesting HPLC analysis must supply HPLC-grade solvents (acetonitrile, methanol, milli-Q water) and specialized analytical columns unless prior arrangements for shared consumables are confirmed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#165B33] flex items-center justify-center">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Attribution &amp; Publication</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Data generated using MSI Lab equipment must cite the facility in research publications, master&apos;s dissertations, and doctoral theses, citing the University of Chittagong and relevant support grants (World Bank HEAT / MOST).
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">
                Have specific analytical questions or need custom consultation?
              </h4>
              <p className="text-xs text-slate-600">
                Contact the facility director Prof. Dr. Mohammad Monirul Islam directly at <strong>islammm@cu.ac.bd</strong> or visit Room 304.
              </p>
            </div>
            <Link
              href="/facilities"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-colors"
            >
              View Full Instrument Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
