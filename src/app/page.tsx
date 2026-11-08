import React from "react";
import HeroSection from "@/components/home/HeroSection";
import PiHighlightCard from "@/components/home/PiHighlightCard";
import MissionSection from "@/components/home/MissionSection";
import ResearchPillarsSection from "@/components/home/ResearchPillarsSection";
import PathogenSpotlight from "@/components/home/PathogenSpotlight";
import HomePublicationsPreview from "@/components/home/HomePublicationsPreview";
import Link from "next/link";
import { COLLABORATIONS_DATA } from "@/data/collaborations";
import { NEWS_DATA } from "@/data/news";
import { Handshake, Newspaper, ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  const latestNews = NEWS_DATA.slice(0, 3);
  const partners = COLLABORATIONS_DATA.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Banner */}
      <HeroSection />

      {/* 2. PI Highlight Card */}
      <PiHighlightCard />

      {/* 3. Welcome & Mission */}
      <MissionSection />

      {/* 4. Five Research Pillars */}
      <ResearchPillarsSection />

      {/* 5. Target Pathogens Spotlight */}
      <PathogenSpotlight />

      {/* 6. Featured Publications & Patents */}
      <HomePublicationsPreview />

      {/* 7. Institutional Collaborators Strip */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#165B33] uppercase tracking-wider mb-1.5">
                <Handshake className="w-3.5 h-3.5" />
                <span>Strategic Partnerships</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#0f172a] tracking-tight">
                Global & National Collaborations
              </h2>
            </div>
            <Link
              href="/collaborations"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#165B33] hover:underline"
            >
              <span>Explore All 8 Strategic Partners</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-2xs hover:shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {partner.location}
                    </span>
                    {partner.logo && (
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-[#0f172a] leading-snug">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {partner.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100">
                  <span className="text-[11px] font-medium text-[#165B33]">
                    {partner.jointProjects[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Latest News & Scientific Thoughts */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#165B33] uppercase tracking-wider mb-1.5">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Recent Updates & Thought Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                News, Perspectives & COVID-19 Insights
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#165B33] hover:underline"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <article
                key={news.id}
                className="overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-[#165B33]/60 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                {news.imageUrl && (
                  <div className="relative w-full h-44 overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-[#165B33] bg-emerald-50 px-2.5 py-0.5 rounded-full capitalize">
                        {news.category}
                      </span>
                      <span>{news.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#165B33] transition-colors leading-snug">
                      {news.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {news.readTime}
                    </span>
                    <Link
                      href={`/news#${news.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#165B33] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Event</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Join The Lab Call To Action */}
      <section className="py-20 bg-gradient-to-br from-[#0b331c] via-[#165B33] to-[#0a2c19] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-lab-grid opacity-20 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-200 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Recruiting Passionate Scientists</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Advance Your Career in Molecular Immunology
          </h2>

          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Join a collaborative academic lab equipped with real-time PCR, FPLC, ELISA, and flow cytometry. 
            Openings for PhD fellows, MSc thesis assistants, and motivated undergraduates.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply"
              className="px-7 py-3.5 rounded-xl font-bold text-sm bg-white text-[#165B33] hover:bg-emerald-50 transition-all shadow-lg active:scale-98"
            >
              Start Online Lab Application
            </Link>
            <Link
              href="/team"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              Meet Our Current Researchers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
