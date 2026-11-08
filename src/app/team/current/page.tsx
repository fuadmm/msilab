import React from "react";
import { Metadata } from "next";
import TeamNavTabs from "@/components/team/TeamNavTabs";
import CurrentMembersSection from "@/components/team/CurrentMembersSection";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Current Members | MSI Lab | University of Chittagong",
  description: "Doctoral fellows, postgraduate research assistants, graduate students, and undergraduate research fellows in MSI Lab.",
};

export default function CurrentMembersPage() {
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
              <Users className="w-3.5 h-3.5" />
              <span>Research Scholars &amp; Fellows</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Current Lab Members
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Meet the research scholars, assistants, and undergraduate fellows advancing our vaccine and molecular immunology programs.
            </p>

            <div className="pt-2">
              <TeamNavTabs />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CurrentMembersSection />
      </div>
    </div>
  );
}
