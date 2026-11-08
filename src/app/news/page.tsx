"use client";

import React, { useState } from "react";
import { NEWS_DATA } from "@/data/news";
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Check,
  ChevronRight 
} from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Events & News" },
    { id: "event", label: "Events & Seminars" },
    { id: "announcement", label: "Announcements & Fellowships" },
    { id: "breakthrough", label: "Research Breakthroughs" },
    { id: "insights", label: "Scientific Insights" },
    { id: "opinion", label: "Vaccine Perspectives" },
  ];

  const filtered = NEWS_DATA.filter((item) => {
    return selectedCategory === "all" || item.category === selectedCategory;
  });

  const handleShare = (id: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.origin + `/news#${id}`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

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
              <Newspaper className="w-3.5 h-3.5" />
              <span>Events, Chronicles &amp; Updates</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Events
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Frontline perspectives on SARS-CoV-2 variant diagnostics, Nature Communications sarbecovirus 
              vaccine breakthroughs, academic symposia, and epidemic Dengue serology analyses in Bangladesh.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/thoughts"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#165B33] hover:underline"
              >
                <span>Browse Dedicated Scientific Thoughts View</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Articles Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#165B33] text-white shadow-2xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-[#165B33]/50 transition-all flex flex-col justify-between scroll-mt-28 group"
            >
              {/* Event Photo Header */}
              {item.imageUrl && (
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-5">
                
                {/* Meta Top */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md font-bold bg-emerald-50 text-[#165B33] capitalize">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-3 text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] group-hover:text-[#165B33] transition-colors leading-snug">
                  {item.title}
                </h2>

                {/* Author */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <User className="w-3.5 h-3.5 text-[#165B33]" />
                  <span>By <strong className="text-slate-800">{item.author}</strong></span>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {item.summary}
                </p>

                {/* Paragraphs */}
                <div className="space-y-3 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">MSI Lab Chronicles</span>
                  {item.postUrl && (
                    <a
                      href={item.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-[#0A66C2] hover:text-[#004182] hover:underline"
                      title="View original post on LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 fill-[#0A66C2]" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      <span>View on LinkedIn ↗</span>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => handleShare(item.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#165B33] transition-colors"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </article>
        ))}
        </div>

      </div>
    </div>
  );
}
