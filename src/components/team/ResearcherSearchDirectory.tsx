"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CURRENT_MEMBERS, ALUMNI_DATA, PI_DATA } from "@/data/team";
import { 
  Search, 
  X, 
  Filter, 
  BookOpen, 
  Mail, 
  ArrowRight,
  Sparkles
} from "lucide-react";

type UnifiedResearcher = {
  id: string;
  name: string;
  role: string;
  category: "pi" | "doctoral" | "masters" | "staff" | "undergraduate" | "alumni";
  senioritySession?: string;
  email?: string;
  personalEmail?: string;
  institutionalEmail?: string;
  phone?: string;
  linkedin?: string;
  researchgate?: string;
  profileUrl?: string;
  image?: string;
  institution?: string;
  department?: string;
  researchInterest?: string;
  thesisTitle?: string;
  submissionDate?: string;
  isLabManager?: boolean;
};

export default function ResearcherSearchDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Build unified researchers list
  const allResearchers = useMemo<UnifiedResearcher[]>(() => {
    const list: UnifiedResearcher[] = [];

    // PI
    list.push({
      id: "pi",
      name: PI_DATA.name,
      role: PI_DATA.title,
      category: "pi",
      senioritySession: "Founding PI & Professor",
      email: PI_DATA.contact.email,
      phone: PI_DATA.contact.phone,
      linkedin: PI_DATA.contact.linkedin,
      researchgate: PI_DATA.contact.researchgate,
      image: PI_DATA.image,
      institution: PI_DATA.institution,
      department: PI_DATA.department,
      researchInterest: PI_DATA.researchFocus.join(", "),
      thesisTitle: "Structure, Function, and Immunogenicity Studies on Protein Variants (Dengue ED3 & BPTI)"
    });

    // Current members
    CURRENT_MEMBERS.forEach((m) => {
      let cat: "doctoral" | "masters" | "staff" | "undergraduate" = m.category;
      if (m.isLabManager) {
        cat = "staff";
      }
      list.push({
        id: m.id,
        name: m.name,
        role: m.role,
        category: cat,
        senioritySession: m.senioritySession,
        email: m.email,
        personalEmail: m.personalEmail,
        institutionalEmail: m.institutionalEmail,
        phone: m.phone,
        linkedin: m.linkedin,
        researchgate: m.researchgate,
        image: m.image,
        institution: m.institution,
        department: m.department,
        researchInterest: m.researchInterest,
        thesisTitle: m.thesisTitle,
        submissionDate: m.submissionDate,
        isLabManager: m.isLabManager
      });
    });

    // Alumni
    ALUMNI_DATA.forEach((a) => {
      list.push({
        id: a.id,
        name: a.name,
        role: `Alumni · Former ${a.formerRole}`,
        category: "alumni",
        senioritySession: a.senioritySession,
        email: a.email,
        personalEmail: a.personalEmail,
        institutionalEmail: a.institutionalEmail,
        phone: a.phone,
        linkedin: a.linkedin,
        researchgate: a.researchgate,
        profileUrl: a.profileUrl,
        image: a.image,
        institution: a.currentInstitution,
        department: a.currentPosition,
        researchInterest: a.shortAbstract || a.currentPosition,
        thesisTitle: a.thesisTitle,
        submissionDate: a.submissionDate
      });
    });

    return list;
  }, []);

  // Filter researchers
  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allResearchers.filter((r) => {
      // Category filter
      if (selectedCategory !== "all") {
        if (selectedCategory === "staff" && !r.isLabManager && r.category !== "staff") return false;
        if (selectedCategory !== "staff" && r.category !== selectedCategory) return false;
      }

      // Text search
      if (!q) return true;

      const matchesName = r.name.toLowerCase().includes(q);
      const matchesRole = r.role.toLowerCase().includes(q);
      const matchesSession = r.senioritySession?.toLowerCase().includes(q) || false;
      const matchesInterest = r.researchInterest?.toLowerCase().includes(q) || false;
      const matchesThesis = r.thesisTitle?.toLowerCase().includes(q) || false;
      const matchesDept = r.department?.toLowerCase().includes(q) || false;
      const matchesInst = r.institution?.toLowerCase().includes(q) || false;

      return (
        matchesName ||
        matchesRole ||
        matchesSession ||
        matchesInterest ||
        matchesThesis ||
        matchesDept ||
        matchesInst
      );
    });
  }, [allResearchers, searchQuery, selectedCategory]);

  const categories = [
    { id: "all", label: "All Members", count: allResearchers.length },
    { id: "pi", label: "PI", count: 1 },
    { id: "doctoral", label: "Doctoral (Ph.D.)", count: allResearchers.filter(r => r.category === "doctoral").length },
    { id: "masters", label: "Master's (M.Sc.)", count: allResearchers.filter(r => r.category === "masters").length },
    { id: "staff", label: "Staff & RAs", count: allResearchers.filter(r => r.isLabManager || r.category === "staff").length },
    { id: "undergraduate", label: "Undergraduates (B.Sc.)", count: allResearchers.filter(r => r.category === "undergraduate").length },
    { id: "alumni", label: "Alumni Network", count: allResearchers.filter(r => r.category === "alumni").length },
  ];

  return (
    <div className="space-y-8">
      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Search Input with quick clear */}
          <div className="relative flex-1 max-w-xl">
            <Search className="w-4 h-4 text-[#165B33] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search researchers by name, role, degree session, thesis, or topic..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#165B33] focus:ring-2 focus:ring-[#165B33]/15 transition-all bg-slate-50/50 focus:bg-white"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Results count pill */}
          <div className="flex items-center gap-2 self-start md:self-center shrink-0">
            <span className="text-xs font-semibold text-slate-500">
              Showing <span className="font-bold text-[#165B33]">{filtered.length}</span> of {allResearchers.length} researchers
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1.5 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>Category:</span>
          </span>
          {categories.map((c) => {
            const isActive = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[#165B33] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <span>{c.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-200/80 text-slate-600"
                }`}>
                  {c.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => {
            const targetUrl = r.id === "pi" ? "/team/pi" : `/team/${r.id}`;
            const initials = r.name
              .split(" ")
              .map((n) => n[0])
              .filter((_, i, arr) => i === 0 || i === arr.length - 1)
              .join("");

            return (
              <div
                key={r.id}
                className={`rounded-2xl border p-6 bg-white shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group ${
                  r.isLabManager
                    ? "border-emerald-400 ring-1 ring-emerald-300/40 bg-gradient-to-b from-emerald-50/25 via-white to-white"
                    : r.category === "pi"
                    ? "border-emerald-500 bg-gradient-to-b from-emerald-50/30 via-white to-white"
                    : "border-slate-200 hover:border-emerald-300"
                }`}
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#165B33]/10 text-[#165B33] border border-[#165B33]/20">
                      {r.category === "pi"
                        ? "Principal Investigator"
                        : r.category === "doctoral"
                        ? "Doctoral Fellow (Ph.D.)"
                        : r.category === "masters"
                        ? "Master's Scholar (M.Sc.)"
                        : r.category === "staff"
                        ? "Staff & Research Assistant"
                        : r.category === "undergraduate"
                        ? "Undergraduate Trainee"
                        : "Alumni Network"}
                    </span>
                    {r.isLabManager && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300/60">
                        <Sparkles className="w-3 h-3" />
                        <span>Manager</span>
                      </span>
                    )}
                  </div>

                  {/* Header: Photo + Name + Role */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-2xs flex items-center justify-center">
                      {r.image ? (
                        <img
                          src={r.image}
                          alt={r.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      ) : (
                        <span className="font-black text-slate-400 text-base">{initials}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={targetUrl}
                        className="text-base font-extrabold text-slate-900 hover:text-[#165B33] transition-colors line-clamp-1 block"
                      >
                        {r.name}
                      </Link>
                      <div className="text-xs font-semibold text-[#165B33] line-clamp-1 mt-0.5">
                        {r.role}
                      </div>
                      {r.senioritySession && (
                        <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                          {r.senioritySession}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Institution / Department */}
                  {(r.institution || r.department) && (
                    <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 line-clamp-1">
                      {r.department && <span>{r.department} · </span>}
                      <span>{r.institution || "University of Chittagong"}</span>
                    </div>
                  )}

                  {/* Thesis Spotlight if present */}
                  {r.thesisTitle && (
                    <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/90 text-xs space-y-0.5">
                      <div className="flex items-center gap-1 text-[10px] font-extrabold text-[#165B33] uppercase tracking-wider">
                        <BookOpen className="w-3 h-3" />
                        <span>Thesis:</span>
                      </div>
                      <p className="text-slate-800 text-[11px] font-semibold italic line-clamp-2">
                        &ldquo;{r.thesisTitle}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Research Focus */}
                  {r.researchInterest && (
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Focus:
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {r.researchInterest}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer: Contacts & Action */}
                <div className="pt-3.5 mt-4 border-t border-slate-100 space-y-2.5">
                  <div className="flex flex-col gap-1.5 text-[11px]">
                    {r.email && (
                      <a
                        href={`mailto:${r.email}`}
                        className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#165B33] transition-colors truncate font-mono"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#165B33] shrink-0" />
                        <span className="truncate">{r.email}</span>
                      </a>
                    )}
                    <div className="flex items-center gap-3 pt-0.5 flex-wrap">
                      {r.linkedin && (
                        <a
                          href={r.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0a66c2] hover:underline"
                        >
                          <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {r.researchgate && (
                        <a
                          href={r.researchgate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00ccbb] hover:underline"
                        >
                          <span className="w-3 h-3 rounded-xs bg-[#00ccbb] text-white flex items-center justify-center shrink-0 font-black text-[7px] leading-none">
                            RG
                          </span>
                          <span>ResearchGate</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <Link
                    href={targetUrl}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-[#165B33] hover:text-[#0b331c] group/link transition-colors pt-2 border-t border-slate-100"
                  >
                    <span>View Academic Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900">No researchers found</h3>
            <p className="text-xs text-slate-500">
              No matching profiles found for &ldquo;{searchQuery}&rdquo;. Try another name, topic, or clear filters.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#165B33] text-white hover:bg-[#114929] transition-all"
          >
            Clear Search &amp; Show All
          </button>
        </div>
      )}
    </div>
  );
}
