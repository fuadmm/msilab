import React from "react";
import { Metadata } from "next";
import TeamNavTabs from "@/components/team/TeamNavTabs";
import PiDetailedSection from "@/components/team/PiDetailedSection";
import CurrentMembersSection from "@/components/team/CurrentMembersSection";
import AlumniSection from "@/components/team/AlumniSection";
import ResearcherSearchDirectory from "@/components/team/ResearcherSearchDirectory";
import { Users, Sparkles, ArrowRight, Award, Search } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "People | MSI Lab | University of Chittagong",
  description: "Meet the members, principal investigator, and alumni network of the Laboratory of Molecular & Structural Immunology (MSI Lab), University of Chittagong.",
};

export default function TeamOverviewPage() {
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
              <span>Research Group & Academic Family</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              People
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Led by Prof. Dr. Mohammad Monirul Islam, our team comprises doctoral scholars, 
              postgraduate research assistants, graduate students, and undergraduate fellows.
            </p>

            <div className="pt-2">
              <TeamNavTabs />
            </div>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Cohort Highlight Banner - Matching Publication Banner Aesthetic */}
      <section className="bg-gradient-to-br from-[#0c3920] via-[#165B33] to-[#1e7845] text-white border-b border-emerald-950 py-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold backdrop-blur-xs border border-emerald-400/20">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Multidisciplinary Research Roster &amp; Alumni Network</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Academic Family &amp; Global Scholarly Community
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                A collaborative training environment fostering scientific excellence across molecular virology, 
                protein engineering, immunoinformatics, and clinical serology with alumni serving worldwide.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Cohort</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">39+</div>
                <div className="text-[10px] text-emerald-200/70">Researchers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Alumni</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">18</div>
                <div className="text-[10px] text-emerald-200/70">Global Network</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Reach</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">6</div>
                <div className="text-[10px] text-emerald-200/70">Countries</div>
              </div>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-[#165B33] hover:bg-emerald-50 text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all"
              >
                <span>Join Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Embedded Dedicated Researcher Search */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <ResearcherSearchDirectory />
      </main>
    </div>
  );
}
