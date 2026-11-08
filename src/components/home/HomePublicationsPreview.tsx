import React from "react";
import Link from "next/link";
import { PUBLICATIONS_DATA } from "@/data/publications";
import { ArrowRight, Award } from "lucide-react";

export default function HomePublicationsPreview() {
  const featured = PUBLICATIONS_DATA.slice(0, 4);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#165B33] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#165B33]"></span>
              Peer-Reviewed Scientific Output
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Featured Publications & Discoveries
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Selected research contributions in high-impact international journals.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://scholar.google.com/citations?user=dKS4v_gAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/80 transition-colors"
            >
              <span>766+ Scholar Citations</span>
            </a>
            <Link
              href="/publications"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#165B33] bg-emerald-50 hover:bg-emerald-100/80 transition-colors"
            >
              <span>View All 48+ Publications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((pub) => (
            <div
              key={pub.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-3">
                
                {/* Journal & Year badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#165B33]/10 text-[#165B33]">
                    {pub.journal}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    {pub.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#165B33] transition-colors leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-xs text-slate-600 line-clamp-1">
                  <span className="font-semibold text-slate-700">Authors:</span> {pub.authors.join(", ")}
                </p>

                {/* Abstract snippet */}
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {pub.abstract}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pub.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action buttons */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                  DOI: {pub.doi || "WO2019031446"}
                </span>
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#165B33] hover:underline"
                >
                  <span>Read details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Patent Highlight Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#165B33] text-white flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#165B33]">
                International Patent Highlight
              </div>
              <h4 className="text-sm font-bold text-[#0f172a]">
                Method for Controlling the Solubility and Immunogenicity of Recombinant Proteins (WO2019031446)
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Inventors: Y. Kuroda, T. Kamioka, N. Rahman, M. M. Islam, S. Miura · World Intellectual Property Organization
              </p>
            </div>
          </div>
          <Link
            href="/publications"
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-colors"
          >
            Patent Citation
          </Link>
        </div>

      </div>
    </section>
  );
}
