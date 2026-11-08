"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ALUMNI_DATA } from "@/data/team";
import { 
  MapPin, 
  Building2, 
  Search, 
  Globe2, 
  Briefcase,
  GraduationCap,
  ArrowRight
} from "lucide-react";

export default function AlumniSection() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredAlumni = ALUMNI_DATA.filter((alumni) => {
    const q = search.toLowerCase();
    const matchesSearch = 
      alumni.name.toLowerCase().includes(q) ||
      alumni.currentInstitution.toLowerCase().includes(q) ||
      alumni.currentPosition.toLowerCase().includes(q) ||
      (alumni.thesisTitle && alumni.thesisTitle.toLowerCase().includes(q)) ||
      (alumni.senioritySession && alumni.senioritySession.toLowerCase().includes(q)) ||
      (alumni.shortAbstract && alumni.shortAbstract.toLowerCase().includes(q)) ||
      (alumni.location && alumni.location.toLowerCase().includes(q));

    const matchesCategory = 
      selectedCategory === "all" || alumni.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      
      {/* Intro Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border border-slate-200 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#165B33] uppercase tracking-wider">
          <Globe2 className="w-4 h-4" />
          <span>Global Network &amp; Alumni Impact</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
          Where Our Graduates Excel
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          MSI Lab alumni pursue distinguished careers in academia, doctoral research across top US, Japanese, and Taiwanese universities, and national scientific institutes.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search alumni, thesis topic, university..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#165B33] focus:ring-1 focus:ring-[#165B33] transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {[
            { id: "all", label: `All Alumni (${ALUMNI_DATA.length})` },
            { id: "phd_candidate", label: "PhD Abroad" },
            { id: "academic", label: "Faculty / Academia" },
            { id: "industry_gov", label: "Gov & Research Institutes" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#165B33] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/70"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((alumni) => {
          const initials = alumni.name
            .replace("Dr. ", "")
            .replace("Prof. ", "")
            .split(" ")
            .map((n) => n[0])
            .filter((_, i, arr) => i === 0 || i === arr.length - 1)
            .join("");

          return (
            <div
              key={alumni.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header with badge */}
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`/team/member/${alumni.id}`}
                    className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-emerald-50 text-slate-700 group-hover:text-[#165B33] flex items-center justify-center font-bold text-sm transition-colors shrink-0 overflow-hidden"
                  >
                    {alumni.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      initials
                    )}
                  </Link>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      alumni.category === "phd_candidate"
                        ? "bg-blue-50 text-blue-700"
                        : alumni.category === "academic"
                        ? "bg-emerald-50 text-[#165B33]"
                        : "bg-amber-50 text-amber-700"
                    }`}>
                      {alumni.category === "phd_candidate"
                        ? "PhD Fellow"
                        : alumni.category === "academic"
                        ? "Faculty"
                        : "Scientific Officer / Gov"}
                    </span>
                    {alumni.senioritySession && (
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded-md border border-emerald-100">
                        {alumni.senioritySession}
                      </span>
                    )}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <Link href={`/team/member/${alumni.id}`}>
                    <h3 className="font-extrabold text-base text-[#0f172a] group-hover:text-[#165B33] transition-colors leading-snug">
                      {alumni.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Former {alumni.formerRole}
                  </p>
                </div>

                {/* Current Role and Institution */}
                <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#165B33] shrink-0" />
                    <span>{alumni.currentPosition}</span>
                  </div>
                  <div className="text-slate-600 flex items-start gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{alumni.currentInstitution}</span>
                  </div>
                </div>

                {/* Thesis Preview if available */}
                {alumni.thesisTitle && (
                  <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200/80 text-xs space-y-1">
                    <div className="flex items-center gap-1 text-[10px] font-extrabold text-[#165B33] uppercase tracking-wider">
                      <GraduationCap className="w-3 h-3" />
                      <span>Thesis Defense:</span>
                    </div>
                    <p className="text-slate-700 text-[11px] font-medium italic line-clamp-2">
                      &ldquo;{alumni.thesisTitle}&rdquo;
                    </p>
                    {alumni.submissionDate && (
                      <div className="text-[10px] text-slate-500 font-mono">
                        Submitted: {alumni.submissionDate}
                      </div>
                    )}
                  </div>
                )}

              </div>

              {/* Location footer and Profile button */}
              <div className="pt-3 mt-4 border-t border-slate-100 space-y-2">
                {alumni.location && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{alumni.location}</span>
                  </div>
                )}
                <Link
                  href={`/team/member/${alumni.id}`}
                  className="w-full inline-flex items-center justify-between text-[11px] font-bold text-[#165B33] hover:text-[#0b331c] group/link transition-colors pt-1"
                >
                  <span>View Thesis &amp; Research</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAlumni.length === 0 && (
        <div className="text-center py-12 text-slate-500 text-sm bg-white rounded-2xl border border-slate-200">
          No alumni matched your filter or search query.
        </div>
      )}

    </div>
  );
}
