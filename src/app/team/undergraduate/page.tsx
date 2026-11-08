import React from "react";
import { Metadata } from "next";
import TeamNavTabs from "@/components/team/TeamNavTabs";
import CurrentMembersSection from "@/components/team/CurrentMembersSection";
import { FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Undergraduate Research Fellows (B.Sc.) | MSI Lab | University of Chittagong",
  description: "Undergraduate research fellows from B.Sc. Session 2021–2022 and Session 2022–2023 cohorts at the Laboratory of Molecular & Structural Immunology (MSI Lab).",
};

export default function UndergraduatePage() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f4] via-white to-slate-50 border-b border-slate-200 py-16 sm:py-20">
        <div className="absolute inset-0 bg-lab-grid pointer-events-none opacity-60"></div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-blue-900 bg-blue-100/90 border border-blue-300">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Undergraduate Scholars &amp; Interns</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Undergraduate Research Fellows (B.Sc.)
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Undergraduate Biochemistry &amp; Molecular Biology students receiving hands-on mentorship, wet-lab training, and contributing to viral surveillance and recombinant protein cloning.
            </p>

            <div className="pt-2">
              <TeamNavTabs />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CurrentMembersSection filterCategory="undergraduate" />
      </div>
    </div>
  );
}
