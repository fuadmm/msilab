"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA, CATEGORY_TABS } from "@/data/projects";
import ProjectBanner from "@/components/projects/ProjectBanner";
import ProtocolsSection from "@/components/research/ProtocolsSection";
import { 
  Search, 
  ArrowRight, 
  Dna, 
  Filter, 
  Layers,
  ChevronRight,
  TrendingUp,
  Cpu,
  Sparkles
} from "lucide-react";

export default function ProjectsDirectoryPage() {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    // Category match
    const currentTabObj = CATEGORY_TABS.find((t) => t.id === selectedTab);
    const matchesCategory =
      selectedTab === "all" ||
      (currentTabObj?.match && currentTabObj.match.includes(project.category));

    // Search query match
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.shortDescription.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q) ||
      project.tags.some((t) => t.toLowerCase().includes(q)) ||
      project.methods.some((m) => m.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f4] via-white to-slate-50 border-b border-slate-200 py-16 sm:py-20">
        <div className="absolute inset-0 bg-lab-grid pointer-events-none opacity-60"></div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#165B33]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#165B33] bg-emerald-100/80 border border-emerald-200">
              <Dna className="w-3.5 h-3.5" />
              <span>Active Research Portfolio · MSI Lab</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Research
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Exploring cutting-edge intersections between viral genomics, reverse structural vaccinology, host-pathogen antibody dynamics, and plant secondary metabolomics at the University of Chittagong.
            </p>

          </div>
        </div>
      </section>

      {/* Research Grants & Strategic Thrusts Banner - Matching Publication Banner Aesthetic */}
      <section className="bg-gradient-to-br from-[#0c3920] via-[#165B33] to-[#1e7845] text-white border-b border-emerald-950 py-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold backdrop-blur-xs border border-emerald-400/20">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Competitive Research Grants &amp; National Initiatives</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Targeted Research Thrusts &amp; Translational Discoveries
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                Investigating Dengue lineage shifts, SARS-CoV-2 atomic escape trajectories, Chikungunya arthralgia biomarkers, 
                and Agarwood resin elicitation funded by World Bank (HEAT-11009-CU), MOST, and international academic partners.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Programs</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">6 Core</div>
                <div className="text-[10px] text-emerald-200/70">Active Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Lead Grant</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">HEAT</div>
                <div className="text-[10px] text-emerald-200/70">World Bank / UGC</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Targets</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">4 Viral</div>
                <div className="text-[10px] text-emerald-200/70">&amp; Plant Thrusts</div>
              </div>
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-[#165B33] hover:bg-emerald-50 text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all"
              >
                <span>Publications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Controls Bar: Category Tabs & Search */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </span>
              {CATEGORY_TABS.map((tab) => {
                const isActive = selectedTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-[#165B33] text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, methods, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#165B33] focus:ring-1 focus:ring-[#165B33] transition-colors"
              />
            </div>

          </div>

          {/* Result counter */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong className="text-slate-900">{filteredProjects.length}</strong> of {PROJECTS_DATA.length} active initiatives
            </span>
            {(selectedTab !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedTab("all");
                  setSearchQuery("");
                }}
                className="text-[#165B33] font-bold hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-[#165B33]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              
              <div>
                {/* Project Visual Banner */}
                <ProjectBanner
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  heightClass="h-48"
                />

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  
                  {/* Category and Status Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#165B33] font-mono truncate max-w-[200px]">
                      {project.category}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                      project.status.toLowerCase().includes("active")
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    }`}>
                      ● {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-extrabold text-[#0f172a] group-hover:text-[#165B33] transition-colors leading-snug line-clamp-2">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>

                  {/* 2-line Short Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technical Methodology Badges */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-slate-400" />
                      <span>Technical Methods:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.methods.slice(0, 3).map((method, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {method}
                        </span>
                      ))}
                      {project.methods.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-50">
                          +{project.methods.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] font-medium text-slate-400">
                    MSI Lab Portfolio
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-[#165B33] text-[#165B33] hover:text-white text-xs font-bold transition-all duration-200 group/btn"
                  >
                    <span>View Full Project &amp; Data</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 space-y-3 mt-8">
            <Layers className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No Projects Matched</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No active research projects matched your filter criteria. Try adjusting the category or search keywords.
            </p>
          </div>
        )}

        {/* Laboratory Protocol Collections & SOPs */}
        <ProtocolsSection />

      </main>

    </div>
  );
}
