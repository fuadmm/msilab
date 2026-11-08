import React from "react";
import { Metadata } from "next";
import { COLLABORATIONS_DATA } from "@/data/collaborations";
import { 
  Handshake, 
  ExternalLink, 
  CheckCircle2, 
  MapPin, 
  FolderKanban,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collaborations & Strategic Alliances | MSI Lab",
  description: "Bilateral collaborations with Kuroda Lab (TUAT Tokyo), World Bank HEAT project, Bangladesh MOHFW, MOST, BFRI, and University of Chittagong.",
};

export default function CollaborationsPage() {
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
              <Handshake className="w-3.5 h-3.5" />
              <span>International &amp; National Alliances</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Research Collaborations &amp; Grant Alliances
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              We collaborate with premier international universities, governmental ministries, 
              and multilateral funding agencies to bridge molecular science with clinical public health impact.
            </p>
          </div>
        </div>
      </section>

      {/* Global Alliances Highlight Banner - Matching Publication Banner Aesthetic */}
      <section className="bg-gradient-to-br from-[#0c3920] via-[#165B33] to-[#1e7845] text-white border-b border-emerald-950 py-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold backdrop-blur-xs border border-emerald-400/20">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Global Consortia &amp; Inter-Institutional Linkages</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Strategic Research Alliances &amp; International Cooperations
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                Partnering with Tokyo University of Agriculture and Technology (TUAT), World Bank HEAT, 
                Bangladesh MOHFW, and BFRI to advance viral disease diagnostics, therapeutics, and translational biotechnology.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Partners</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">8 Key</div>
                <div className="text-[10px] text-emerald-200/70">Institutions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Consortia</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">4 Global</div>
                <div className="text-[10px] text-emerald-200/70">Initiatives</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl px-4 py-2.5 text-center min-w-[85px]">
                <div className="text-[11px] font-semibold text-emerald-200 uppercase tracking-wider">Synergy</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">Joint</div>
                <div className="text-[10px] text-emerald-200/70">Patents &amp; Papers</div>
              </div>
              <a
                href="#partners"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-[#165B33] hover:bg-emerald-50 text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all"
              >
                <span>View Partners</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recognized & Funded By Logos Ribbon */}
      <section className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-5">
            Recognized & Funded By Major Global & National Institutions
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://www.worldbank.org/en/country/bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#165B33]/60 hover:shadow-xs transition-all group"
            >
              <img src="/All%20logos/world%20bank%20logo.png" alt="World Bank" className="h-8 object-contain" />
              <span className="text-xs font-bold text-slate-700 group-hover:text-[#165B33]">World Bank</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#165B33]" />
            </a>
            <a
              href="https://heat.ugc.gov.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#165B33]/60 hover:shadow-xs transition-all group"
            >
              <img src="/All%20logos/heat%20logo.png" alt="HEAT Project" className="h-8 object-contain" />
              <span className="text-xs font-bold text-slate-700 group-hover:text-[#165B33]">HEAT Bangladesh</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#165B33]" />
            </a>
            <a
              href="https://ugc.gov.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#165B33]/60 hover:shadow-xs transition-all group"
            >
              <img src="/All%20logos/ugc%20bangladesh.png" alt="UGC Bangladesh" className="h-8 object-contain" />
              <span className="text-xs font-bold text-slate-700 group-hover:text-[#165B33]">UGC Bangladesh</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#165B33]" />
            </a>
            <a
              href="https://bangladesh.gov.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#165B33]/60 hover:shadow-xs transition-all group"
            >
              <img src="/All%20logos/peoples%20govt%20of%20bangladesh.png" alt="Govt of Bangladesh" className="h-8 object-contain" />
              <span className="text-xs font-bold text-slate-700 group-hover:text-[#165B33]">Govt. of Bangladesh</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#165B33]" />
            </a>
            <a
              href="http://web.tuat.ac.jp/~ykuroda/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#165B33]/60 hover:shadow-xs transition-all group"
            >
              <img src="/Colaborators/kuroda%20lab.png" alt="Kuroda Lab TUAT" className="h-8 object-contain" />
              <span className="text-xs font-bold text-slate-700 group-hover:text-[#165B33]">TUAT Tokyo (Kuroda Lab)</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#165B33]" />
            </a>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COLLABORATIONS_DATA.map((partner) => (
              <div
                key={partner.id}
                className="rounded-3xl border border-slate-200 p-8 sm:p-9 bg-white hover:border-[#165B33]/50 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  
                  {/* Top Badge and Location */}
                  <div className="flex items-start justify-between gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#165B33] border border-emerald-200/80">
                      {partner.category === "international_academic"
                        ? "International Academic Alliance"
                        : partner.category === "funding_agency"
                        ? "Multilateral Grant Partner"
                        : partner.category === "national_gov"
                        ? "Government Health & Science Wing"
                        : "National Research Directorate"}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#165B33]" />
                      <span>{partner.location}</span>
                    </div>
                  </div>

                  {/* Partner Name & Institution with clickable Logo */}
                  <div className="flex items-start gap-4">
                    {partner.logo && (
                      <a
                        href={partner.website || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-xl bg-white border border-slate-200 p-2 shadow-xs shrink-0 flex items-center justify-center overflow-hidden hover:border-[#165B33] hover:scale-105 transition-all"
                        title={partner.website ? `Visit ${partner.websiteLabel || partner.name}` : partner.name}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                      </a>
                    )}
                    <div className="space-y-1">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] group-hover:text-[#165B33] transition-colors leading-snug">
                        {partner.website ? (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-start gap-1.5"
                          >
                            <span>{partner.name}</span>
                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#165B33] shrink-0 mt-1" />
                          </a>
                        ) : (
                          partner.name
                        )}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600">
                        {partner.institution}
                      </p>
                      {partner.leadContact && (
                        <p className="text-xs text-emerald-800 font-medium pt-0.5">
                          Focal Liaison: {partner.leadContact}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Collaboration Scope */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Collaboration Scope:
                    </div>
                    <div className="space-y-1.5">
                      {partner.scope.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#165B33] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Joint Projects */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <FolderKanban className="w-3.5 h-3.5 text-slate-400" />
                      <span>Joint Projects & Outcomes:</span>
                    </div>
                    <div className="space-y-1">
                      {partner.jointProjects.map((proj, pIdx) => (
                        <div key={pIdx} className="text-xs text-emerald-950 bg-emerald-50/60 p-2 rounded-lg border border-emerald-100 font-medium">
                          {proj}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Hyperlinks Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Official Portals & Resources:
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#165B33] hover:bg-[#0e3f22] px-3.5 py-1.5 rounded-lg shadow-2xs hover:shadow-xs transition-all"
                      >
                        <span>{partner.websiteLabel || "Visit Official Portal"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {partner.secondaryWebsite && (
                      <a
                        href={partner.secondaryWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 px-3 py-1.5 rounded-lg transition-all"
                      >
                        <span>{partner.secondaryWebsiteLabel || "Institutional Portal"}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      </a>
                    )}
                    {partner.additionalLinks && partner.additionalLinks.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 hover:text-emerald-900 bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/60 px-2.5 py-1 rounded-md transition-all"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 text-emerald-600" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Institutional Partnership Invitation */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl font-bold text-[#0f172a]">
            Establish a Joint Research Program
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            MSI Lab welcomes collaborative research proposals, biomanufacturing tech-transfer explorations, 
            and dual doctoral student mentorship frameworks.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:islammm@cu.ac.bd?subject=MSI%20Lab%20Research%20Collaboration%20Inquiry"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-colors shadow-sm"
            >
              Inquire with Principal Investigator (islammm@cu.ac.bd)
            </a>
            <Link
              href="/join"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              Researcher Fellowships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
