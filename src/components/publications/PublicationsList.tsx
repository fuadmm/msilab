"use client";

import React, { useState } from "react";
import { PUBLICATIONS_DATA, SCHOLAR_METRICS } from "@/data/publications";
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Copy, 
  Check, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Tag,
  Award,
  TrendingUp,
  BarChart3,
  Sparkles
} from "lucide-react";

export default function PublicationsList() {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});

  const allTopics = [
    "all",
    "SARS-CoV-2",
    "Dengue Virus",
    "Japanese Encephalitis",
    "Protein Technology",
    "Immunology",
    "Infectious Diseases",
    "Patents"
  ];

  // Dynamically extract all years from publications, sorted descending
  const availableYears = Array.from(new Set(PUBLICATIONS_DATA.map(p => p.year.toString())))
    .sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
  const allYears = ["all", ...availableYears];

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyBibtex = (bibtex?: string, id?: string) => {
    if (!bibtex || !id) return;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filtered = PUBLICATIONS_DATA.filter((pub) => {
    const matchesSearch = 
      pub.title.toLowerCase().includes(search.toLowerCase()) ||
      pub.authors.some(a => a.toLowerCase().includes(search.toLowerCase())) ||
      pub.journal.toLowerCase().includes(search.toLowerCase()) ||
      (pub.doi && pub.doi.toLowerCase().includes(search.toLowerCase()));

    const matchesTopic = 
      selectedTopic === "all" || (pub.topics as string[]).includes(selectedTopic);

    const matchesYear = 
      selectedYear === "all" || pub.year.toString() === selectedYear;

    return matchesSearch && matchesTopic && matchesYear;
  });

  return (
    <div className="space-y-8">
      
      {/* Google Scholar Profile Live Metrics Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c3920] via-[#165B33] to-[#1e7845] text-white p-6 sm:p-8 shadow-sm">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold backdrop-blur-xs border border-emerald-400/20">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>Google Scholar Verified Records</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Prof. Mohammad Monirul Islam, Ph.D.
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl leading-relaxed">
              Principal Investigator, Laboratory of Molecular &amp; Structural Immunology. Track record of international peer-reviewed discoveries across structural vaccinology, protein engineering, and viral immunology.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            {/* Stat: Citations */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[90px]">
              <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Citations</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {SCHOLAR_METRICS.totalCitations}+
              </div>
              <div className="text-[10px] text-emerald-200/70">
                {SCHOLAR_METRICS.citationsSince2021} since 2021
              </div>
            </div>

            {/* Stat: h-index */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[75px]">
              <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>h-index</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {SCHOLAR_METRICS.hIndex}
              </div>
              <div className="text-[10px] text-emerald-200/70">
                {SCHOLAR_METRICS.hIndexSince2021} since 2021
              </div>
            </div>

            {/* Stat: i10-index */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[75px]">
              <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>i10-index</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {SCHOLAR_METRICS.i10Index}
              </div>
              <div className="text-[10px] text-emerald-200/70">
                {SCHOLAR_METRICS.i10IndexSince2021} since 2021
              </div>
            </div>

            {/* Action Link */}
            <a
              href={SCHOLAR_METRICS.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-[#165B33] hover:bg-emerald-50 text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all"
            >
              <span>View Google Scholar</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Search and Filters Controller */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
        
        {/* Search input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by publication title, author (e.g., Islam, Kuroda, Qadri), or journal (Vaccine, PNAS, FEBS)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33] focus:ring-1 focus:ring-[#165B33] transition-colors"
          />
        </div>

        {/* Filter controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          {/* Topic Filter */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              <span>Filter by Research Domain:</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {allTopics.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTopic(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedTopic === t
                      ? "bg-[#165B33] text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {t === "all" ? "All Domains" : t}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filter */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter by Publication Year:</span>
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
              {allYears.map((y) => (
                <button
                  key={y}
                  onClick={() => setSelectedYear(y)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedYear === y
                      ? "bg-[#165B33] text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {y === "all" ? "All Years" : y}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Active counter */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing <strong className="text-slate-900">{filtered.length}</strong> of {PUBLICATIONS_DATA.length} published records
          </span>
          {(search || selectedTopic !== "all" || selectedYear !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedTopic("all");
                setSelectedYear("all");
              }}
              className="text-[#165B33] font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {filtered.map((pub) => {
          const isExpanded = expandedAbstracts[pub.id] ?? false;
          const isCopied = copiedId === pub.id;

          return (
            <article
              key={pub.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs hover:border-[#165B33]/50 hover:shadow-sm transition-all space-y-4"
            >
              {/* Top Meta Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                    pub.type === "patent"
                      ? "bg-purple-50 text-purple-700 border border-purple-200"
                      : pub.type === "preprint"
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-emerald-50 text-[#165B33] border border-emerald-200"
                  }`}>
                    {pub.journal}
                  </span>
                  
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {pub.year}
                  </span>
                  
                  {pub.volume && (
                    <span className="text-xs text-slate-400">
                      Vol. {pub.volume} {pub.pages ? `(${pub.pages})` : ""}
                    </span>
                  )}

                  {typeof pub.citations === "number" && pub.citations > 0 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                      <span>{pub.citations} Citations</span>
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {pub.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0f172a] leading-snug">
                {pub.title}
              </h2>

              {/* Authors */}
              <p className="text-xs sm:text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Authors:</span>{" "}
                {pub.authors.map((author, aIdx) => {
                  const isPI = author.includes("Islam") || author.includes("MM Islam") || author.includes("Mohammad Monirul Islam");
                  return (
                    <span key={aIdx}>
                      <span className={isPI ? "font-bold text-[#165B33] underline decoration-emerald-300" : ""}>
                        {author}
                      </span>
                      {aIdx < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </p>

              {/* Abstract preview or full */}
              {pub.abstract && (
                <div className="space-y-2">
                  <p className={`text-xs text-slate-600 leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}>
                    <strong className="text-slate-800">Abstract: </strong>
                    {pub.abstract}
                  </p>

                  {/* Highlights (if expanded) */}
                  {isExpanded && pub.highlights && (
                    <div className="pt-2 p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        Core Findings &amp; Methodological Highlights:
                      </span>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                        {pub.highlights.map((h, hIdx) => (
                          <li key={hIdx}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={() => toggleAbstract(pub.id)}
                    className="text-xs font-bold text-[#165B33] hover:underline inline-flex items-center gap-1 pt-0.5"
                  >
                    <span>{isExpanded ? "Show Less" : "Read Full Abstract & Highlights"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}

              {/* Action Toolbar */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                
                <div className="text-slate-500 font-mono text-[11px] truncate max-w-sm">
                  {pub.doi ? `DOI: ${pub.doi}` : (pub.citations ? `Citations: ${pub.citations}` : "")}
                </div>

                <div className="flex items-center gap-2">
                  {/* BibTeX copy button */}
                  {pub.bibtex && (
                    <button
                      onClick={() => copyBibtex(pub.bibtex, pub.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                      title="Copy BibTeX citation"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied BibTeX!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>BibTeX</span>
                        </>
                      )}
                    </button>
                  )}

                  {/* External DOI link */}
                  {pub.links?.doiUrl && (
                    <a
                      href={pub.links.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#165B33] hover:bg-[#114929] text-white font-bold transition-colors"
                    >
                      <span>Publisher Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {/* Google Scholar link */}
                  {pub.links?.scholarUrl && (
                    <a
                      href={pub.links.scholarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[#165B33] hover:text-[#165B33] text-slate-700 font-semibold transition-colors"
                    >
                      <span>Scholar Citation</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}
                </div>

              </div>

            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">No Publications Found</h3>
          <p className="text-xs text-slate-500">
            No papers matched your search criteria. Try clearing the filter options.
          </p>
        </div>
      )}

    </div>
  );
}
