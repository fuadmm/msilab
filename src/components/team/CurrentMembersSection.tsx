import React from "react";
import Link from "next/link";
import { CURRENT_MEMBERS, TeamMember } from "@/data/team";
import { 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  BookOpen, 
  ArrowRight
} from "lucide-react";

interface CurrentMembersSectionProps {
  filterCategory?: "all" | "doctoral" | "masters" | "staff" | "undergraduate";
}

export default function CurrentMembersSection({ filterCategory = "all" }: CurrentMembersSectionProps) {
  const doctoral = CURRENT_MEMBERS.filter((m) => m.category === "doctoral");
  const masters = CURRENT_MEMBERS.filter((m) => m.category === "masters");
  const staff = CURRENT_MEMBERS.filter((m) => m.isLabManager || m.role.toLowerCase().includes("research assistant"));
  const undergraduate = CURRENT_MEMBERS.filter((m) => m.category === "undergraduate");

  const showAll = filterCategory === "all";

  const MemberCard = ({ member }: { member: TeamMember }) => {
    const initials = member.name
      .split(" ")
      .map((n) => n[0])
      .filter((_, i, arr) => i === 0 || i === arr.length - 1)
      .join("");

    return (
      <div 
        className={`bg-white rounded-2xl border p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group ${
          member.isLabManager 
            ? "border-emerald-400 ring-1 ring-emerald-300/50 bg-gradient-to-b from-emerald-50/20 via-white to-white" 
            : "border-slate-200 hover:border-emerald-300"
        }`}
      >
        <div className="space-y-4">
          {/* Special Badge for Lab Manager / Project Lead */}
          {member.isLabManager && (
            <div className="flex flex-wrap items-center gap-1.5 pb-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#165B33] text-white">
                <ShieldCheck className="w-3 h-3" />
                Lab Manager
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300/60">
                <Sparkles className="w-3 h-3" />
                HEAT-11009-CU Core Lead
              </span>
            </div>
          )}

          {/* Member Card Header */}
          <div className="flex items-start gap-4">
            <Link 
              href={`/team/member/${member.id}`}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#165B33] to-[#0b331c] text-emerald-200 flex items-center justify-center font-bold text-lg shadow-sm shrink-0 group-hover:scale-105 transition-transform overflow-hidden border-2 border-emerald-100"
            >
              {member.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
              ) : (
                initials
              )}
            </Link>
            <div className="space-y-1">
              <Link href={`/team/member/${member.id}`}>
                <h3 className="font-extrabold text-base text-[#0f172a] group-hover:text-[#165B33] transition-colors leading-snug">
                  {member.name}
                </h3>
              </Link>
              <div className="text-xs font-bold text-[#165B33]">
                {member.role}
              </div>
              {member.batch ? (
                <div className="text-[11px] font-mono text-emerald-700 font-semibold">
                  {member.batch} · BMB CU
                </div>
              ) : member.cohort ? (
                <div className="text-[11px] font-mono text-slate-500">
                  {member.cohort}
                </div>
              ) : null}
            </div>
          </div>

          {/* Department or Institution */}
          {member.institution && (
            <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <span className="font-medium">{member.institution}</span>
            </div>
          )}
          {member.department && (
            <div className="text-xs text-slate-500 font-medium">
              Dept: {member.department}
            </div>
          )}

          {/* Project Responsibility Highlight if applicable */}
          {member.projectResponsibility && (
            <div className="p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-200 text-xs text-[#0f3b20] font-medium leading-relaxed">
              <span className="font-bold text-[#165B33] block text-[11px] uppercase tracking-wider mb-0.5">Project Scope:</span>
              {member.projectResponsibility}
            </div>
          )}

          {/* Thesis Spotlight if applicable */}
          {member.thesisTitle && (
            <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/90 text-xs space-y-1">
              <div className="flex items-center gap-1 text-[10px] font-extrabold text-[#165B33] uppercase tracking-wider">
                <BookOpen className="w-3 h-3" />
                <span>Research Thesis:</span>
              </div>
              <p className="text-slate-800 text-[11px] font-semibold italic line-clamp-2">
                &ldquo;{member.thesisTitle}&rdquo;
              </p>
              {member.submissionDate && (
                <span className="text-[10px] text-slate-500 block font-mono">Date / Defense: {member.submissionDate}</span>
              )}
            </div>
          )}

          {/* Research Focus */}
          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Research Focus &amp; Activities:
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {member.researchInterest}
            </p>
          </div>
        </div>

        {/* Member Links & Contact */}
        {(member.email || member.personalEmail || member.institutionalEmail || member.linkedin || member.phone) && (
          <div className="pt-3.5 mt-4 border-t border-slate-100 flex flex-col gap-2">
            {member.institutionalEmail && (
              <a
                href={`mailto:${member.institutionalEmail}`}
                title="Institutional Academic Email"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-700 hover:text-[#165B33] transition-colors truncate font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#165B33] shrink-0" />
                <span className="truncate">{member.institutionalEmail}</span>
              </a>
            )}

            {member.institutionalEmail && member.personalEmail && member.personalEmail !== member.institutionalEmail && (
              <a
                href={`mailto:${member.personalEmail}`}
                title="Personal Email"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500 hover:text-[#165B33] transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{member.personalEmail}</span>
              </a>
            )}

            {!member.institutionalEmail && (member.email || member.personalEmail) && (
              <a
                href={`mailto:${member.email || member.personalEmail}`}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-700 hover:text-[#165B33] transition-colors truncate font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#165B33] shrink-0" />
                <span className="truncate">{member.email || member.personalEmail}</span>
              </a>
            )}

            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                title="Phone"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-600 hover:text-[#165B33] transition-colors truncate"
              >
                <Phone className="w-3.5 h-3.5 text-[#165B33] shrink-0" />
                <span className="truncate">{member.phone}</span>
              </a>
            )}

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0a66c2] hover:text-[#004182] transition-colors mt-0.5 group/link"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span className="group-hover/link:underline">LinkedIn Profile ↗</span>
              </a>
            )}

            {member.researchgate && (
              <a
                href={member.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#00ccbb] hover:text-[#009e91] transition-colors mt-0.5 group/link"
              >
                <span className="w-3.5 h-3.5 rounded-xs bg-[#00ccbb] text-white flex items-center justify-center shrink-0 font-black text-[8px] leading-none">
                  RG
                </span>
                <span className="group-hover/link:underline">ResearchGate Profile ↗</span>
              </a>
            )}
          </div>
        )}

        {/* Dedicated Individual Profile Page Button */}
        <div className="pt-2.5 mt-2 border-t border-slate-100">
          <Link
            href={`/team/member/${member.id}`}
            className="w-full inline-flex items-center justify-between text-[11px] font-bold text-[#165B33] hover:text-[#0b331c] group/btn transition-colors py-0.5"
          >
            <span>View Academic Profile &amp; Research</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-16">
      
      {/* 1. PhD Students & Doctoral Fellows Section */}
      {(showAll || filterCategory === "doctoral") && (
        <section id="doctoral" className="space-y-6 scroll-mt-28">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#165B33]"></span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                PhD Students &amp; Doctoral Fellows
              </h2>
            </div>
            <span className="text-xs font-bold bg-emerald-50 text-[#165B33] px-3 py-1 rounded-full border border-emerald-200">
              {doctoral.length} Doctoral Fellows
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {doctoral.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </section>
      )}

      {/* 3. Research Assistants & Laboratory Staff Section */}
      {(showAll || filterCategory === "staff") && (
        <section id="staff" className="space-y-6 scroll-mt-28">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-teal-600"></span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                Research Assistants &amp; Laboratory Staff
              </h2>
            </div>
            <span className="text-xs font-bold bg-teal-50 text-teal-800 px-3 py-1 rounded-full border border-teal-200">
              {staff.length} Research Staff &amp; Officers
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            Our research assistants and laboratory operations staff oversee daily wet-lab execution, core instrument platforms, 
            biosafety protocols, and World Bank grant workflows under project management leadership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((m) => (
              <MemberCard key={`staff-${m.id}`} member={m} />
            ))}
          </div>
        </section>
      )}

      {/* 4. Master's Fellows & Graduate Scholars Section */}
      {(showAll || filterCategory === "masters") && (
        <section id="masters" className="space-y-8 scroll-mt-28">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#10b981]"></span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                Master&apos;s Fellows &amp; Graduate Scholars (M.Sc.)
              </h2>
            </div>
            <span className="text-xs font-bold bg-emerald-50 text-[#165B33] px-3 py-1 rounded-full border border-emerald-200">
              {masters.length} M.Sc. Scholars
            </span>
          </div>

          {/* MS Session 2023-2024 (Seniors First) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                MS Session 2023–2024
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Department of Biochemistry &amp; Molecular Biology, University of Chittagong
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {masters.filter(m => (m.cohort?.includes("2023") || m.batch?.includes("2023"))).map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </div>

          {/* MS Session 2024-2025 */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300">
                MS Session 2024–2025
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Department of Biochemistry &amp; Molecular Biology, University of Chittagong
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {masters.filter(m => (m.cohort?.includes("2024") || m.batch?.includes("2024"))).map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Undergraduate Students Section */}
      {(showAll || filterCategory === "undergraduate") && (
        <section id="undergraduate" className="space-y-8 scroll-mt-28">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#3b82f6]"></span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                Undergraduate Research Fellows (B.Sc.)
              </h2>
            </div>
            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
              {undergraduate.length} Undergraduate Fellows
            </span>
          </div>

          {/* B.Sc. Session 2021-2022 (Seniors First) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                B.Sc. Session 2021–2022
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Department of Biochemistry &amp; Molecular Biology, University of Chittagong
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {undergraduate.filter(m => (m.cohort?.includes("2021") || m.batch?.includes("2021"))).map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </div>

          {/* B.Sc. Session 2022-2023 */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300">
                B.Sc. Session 2022–2023
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Department of Biochemistry &amp; Molecular Biology, University of Chittagong
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {undergraduate.filter(m => (m.cohort?.includes("2022") || m.batch?.includes("2022"))).map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
