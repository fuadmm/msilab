import React from "react";
import Link from "next/link";
import { PI_DATA } from "@/data/team";
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Building
} from "lucide-react";

export default function PiHighlightCard() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#165B33] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#165B33]"></span>
              Leadership & Principal Investigator
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Directing Molecular & Structural Immunology
            </h2>
          </div>
          <Link
            href="/team/pi"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#165B33] hover:text-[#114929] hover:underline transition-colors"
          >
            <span>View Full Academic Curriculum Vitae</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* PI Card Grid */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* PI Portrait / Visual Avatar Column (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative mb-5 group">
                {/* Stylized Portrait Badge with academic styling */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-tr from-[#0b331c] via-[#165B33] to-[#228b50] p-1.5 shadow-xl relative overflow-hidden">
                  <div className="w-full h-full rounded-[14px] bg-slate-900 relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={PI_DATA.image || "/PI/Mohammad%20Monirul%20Islam,%20PI,%20MSI%20Lab.jpg"} 
                      alt={PI_DATA.name} 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 text-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        Principal Investigator
                      </span>
                    </div>
                  </div>
                </div>

                {/* TUAT PhD emblem badge */}
                <div className="absolute -bottom-3 -right-2 bg-white border border-slate-200 shadow-md rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs font-bold text-slate-800">
                  <GraduationCap className="w-4 h-4 text-[#165B33]" />
                  <span>TUAT Tokyo Ph.D.</span>
                </div>
              </div>

              {/* Direct Quick Contacts */}
              <div className="w-full space-y-2 pt-2 border-t border-slate-200/80 mt-2">
                <a
                  href={`mailto:${PI_DATA.contact.email}`}
                  className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-[#165B33] transition-colors p-2 rounded-lg hover:bg-white"
                >
                  <Mail className="w-4 h-4 text-[#165B33] shrink-0" />
                  <span className="font-mono truncate">{PI_DATA.contact.email}</span>
                </a>
                <a
                  href={`tel:${PI_DATA.contact.phone}`}
                  className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-[#165B33] transition-colors p-2 rounded-lg hover:bg-white"
                >
                  <Phone className="w-4 h-4 text-[#165B33] shrink-0" />
                  <span className="font-mono">{PI_DATA.contact.phone}</span>
                </a>
                <div className="flex items-center gap-2.5 text-xs text-slate-500 p-2">
                  <Building className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Dept of Biochemistry & Mol. Biology, CU</span>
                </div>
              </div>
            </div>

            {/* PI Details & Highlights Column (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                    {PI_DATA.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#165B33] text-white">
                    Professor
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#165B33]">
                  {PI_DATA.department} · {PI_DATA.institution}
                </p>
              </div>

              {/* Institutional Leadership Roles */}
              <div className="space-y-2 bg-white/80 rounded-xl p-4 border border-slate-200/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Institutional Roles & Directorships:
                </div>
                {PI_DATA.roles.map((role, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#165B33] shrink-0 mt-0.5" />
                    <span className="font-medium">{role}</span>
                  </div>
                ))}
              </div>

              {/* Bio summary */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {PI_DATA.bio}
              </p>

              {/* Education and Credentials cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {PI_DATA.education.slice(0, 2).map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#165B33]" />
                      <span>{edu.degree}</span>
                    </div>
                    <div className="text-slate-600">{edu.field}</div>
                    <div className="text-slate-500 font-medium">{edu.institution} ({edu.years})</div>
                  </div>
                ))}
              </div>

              {/* Research Focus Tag Cloud */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Core Research Domains:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {PI_DATA.researchFocus.map((focus, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-[#165B33] border border-emerald-200/60"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/team/pi"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-all shadow-sm"
                >
                  <span>Explore Dr. Islam&apos;s Complete Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
                >
                  <span>Meet Research Group Members</span>
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
