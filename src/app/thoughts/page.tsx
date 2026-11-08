import React from "react";
import { Metadata } from "next";
import { NEWS_DATA } from "@/data/news";
import { Lightbulb, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scientific Thoughts & COVID-19 Insights | MSI Lab",
  description: "Commentary, perspectives, and scientific thoughts on COVID-19 testing diagnostics, Sarbecovirus pan-vaccine highlights, and Dengue ADE by MSI Lab researchers.",
};

export default function ThoughtsPage() {
  const thoughts = NEWS_DATA.filter(
    (n) => n.category === "insights" || n.category === "opinion"
  );

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
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Scientific Commentary &amp; Editorials</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Scientific Thoughts &amp; COVID-19 Insights
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              In-depth commentary by Prof. Dr. Mohammad Monirul Islam and MSI Lab researchers 
              on emerging viral pathogens, diagnostic lessons, and next-generation pan-sarbecovirus vaccines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Articles */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {thoughts.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="px-3 py-1 rounded-full font-bold bg-emerald-50 text-[#165B33] border border-emerald-200">
                {item.category === "insights" ? "Scientific Insight" : "Vaccine Opinion & Perspective"}
              </span>
              <div className="flex items-center gap-4 text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {item.readTime}
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
              {item.title}
            </h2>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <User className="w-4 h-4 text-[#165B33]" />
              <span>Author: <strong className="text-slate-900">{item.author}</strong></span>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
              {item.summary}
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-100">
              {item.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href="/publications"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#165B33] hover:underline"
              >
                <span>Related Research Publications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}

        <div className="text-center pt-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-colors"
          >
            <span>View All Laboratory News & Announcements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
