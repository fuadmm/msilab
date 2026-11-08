import React from "react";
import Link from "next/link";
import { 
  UnifiedMemberProfile, 
  getAllTeamMembers 
} from "@/data/team";
import TeamNavTabs from "@/components/team/TeamNavTabs";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  ArrowRight,
  ExternalLink,
  FileText,
  Briefcase,
  FlaskConical,
  CheckCircle2
} from "lucide-react";

interface MemberProfileViewProps {
  member: UnifiedMemberProfile;
}

export default function MemberProfileView({ member }: MemberProfileViewProps) {
  const allMembers = getAllTeamMembers();
  const currentIndex = allMembers.findIndex((m) => m.id === member.id);
  const prevMember = currentIndex > 0 ? allMembers[currentIndex - 1] : allMembers[allMembers.length - 1];
  const nextMember = currentIndex < allMembers.length - 1 ? allMembers[currentIndex + 1] : allMembers[0];

  const initials = member.name
    .replace("Dr. ", "")
    .replace("Prof. ", "")
    .split(" ")
    .map((n) => n[0])
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .join("");

  return (
    <div className="flex flex-col">
      {/* Header Banner - Uniform with Home Page Upper Phase */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f4] via-white to-slate-50 border-b border-slate-200 py-16 sm:py-20">
        {/* Background scientific decorative grids & glowing radial gradients */}
        <div className="absolute inset-0 bg-lab-grid pointer-events-none opacity-60"></div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#165B33]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl space-y-4">
            
            {/* Breadcrumb Trail */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-[#165B33] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/team" className="hover:text-[#165B33] transition-colors">People &amp; Alumni</Link>
              <span>/</span>
              <Link 
                href={member.memberType === "alumni" ? "/team/alumni" : member.memberType === "pi" ? "/team/pi" : "/team/current"} 
                className="hover:text-[#165B33] transition-colors"
              >
                {member.memberType === "alumni" ? "Alumni Network" : member.memberType === "pi" ? "Principal Investigator" : "Current Members"}
              </Link>
              <span>/</span>
              <span className="font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-none">{member.name}</span>
            </div>

            {/* Badge Chip matching Home Page */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#165B33] text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#165B33]"></span>
              <span>
                {member.memberType === "pi" 
                  ? "Principal Investigator Profile" 
                  : member.memberType === "alumni" 
                  ? "MSI Lab Alumni Profile" 
                  : "Researcher Profile"}
              </span>
            </div>

            {/* <h1> Heading in Standard Outfit Font Hierarchy */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-[1.18]">
              {member.name}
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {member.role || "Research Fellow"} • {member.currentInstitution || member.institution || "Department of Biochemistry & Molecular Biology, University of Chittagong"}
            </p>

            {/* Sub-Navigation Tabs */}
            <div className="pt-2">
              <TeamNavTabs />
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Navigation Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href={member.memberType === "alumni" ? "/team/alumni" : member.memberType === "pi" ? "/team/pi" : "/team/current"}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#165B33] hover:text-[#0b331c] bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl border border-emerald-200 transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to {member.memberType === "alumni" ? "Alumni Directory" : member.memberType === "pi" ? "PI Profile" : "Current Team"}</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Profile ID: <span className="font-mono text-slate-700 font-semibold">{member.id}</span></span>
          </div>
        </div>

        {/* Main Profile Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-emerald-50/60 to-transparent pointer-events-none -mr-20 -mt-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            
            {/* Avatar / Portrait Column (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="relative group mx-auto lg:mx-0">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-tr from-[#0b331c] via-[#165B33] to-[#228b50] p-1.5 shadow-xl overflow-hidden">
                  <div className="w-full h-full rounded-[22px] bg-slate-900 relative overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="text-4xl sm:text-5xl font-extrabold text-emerald-300">
                        {initials}
                      </div>
                    )}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-3 inset-x-0 flex justify-center">
                  <span className="bg-[#165B33] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md border border-emerald-400/30 uppercase tracking-wider">
                    {member.memberType === "pi" ? "Principal Investigator" : member.memberType === "alumni" ? "MSI Lab Alumni" : "Current Researcher"}
                  </span>
                </div>
              </div>

              {/* Quick Badges below photo */}
              <div className="w-full pt-2 flex flex-wrap justify-center lg:justify-start gap-1.5 text-center">
                {member.senioritySession && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#165B33] border border-emerald-200">
                    <Calendar className="w-3 h-3" />
                    {member.senioritySession}
                  </span>
                )}
                {member.isLabManager && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-[#165B33] text-white">
                    <ShieldCheck className="w-3 h-3" />
                    Lab Manager
                  </span>
                )}
              </div>

              {/* Direct Contact Card (Sidebar) */}
              <div className="w-full bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3 text-xs text-left">
                <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px] pb-1 border-b border-slate-200">
                  Direct Contact &amp; Links
                </div>

                {member.institutionalEmail && (
                  <a
                    href={`mailto:${member.institutionalEmail}`}
                    title="Institutional Academic Email"
                    className="flex items-center gap-2.5 text-slate-700 hover:text-[#165B33] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#165B33] shrink-0" />
                    <span className="font-mono font-medium truncate">{member.institutionalEmail}</span>
                  </a>
                )}

                {member.personalEmail && (
                  <a
                    href={`mailto:${member.personalEmail}`}
                    title="Personal Email"
                    className="flex items-center gap-2.5 text-slate-600 hover:text-[#165B33] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-mono truncate">{member.personalEmail}</span>
                  </a>
                )}

                {!member.institutionalEmail && !member.personalEmail && member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2.5 text-slate-700 hover:text-[#165B33] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#165B33] shrink-0" />
                    <span className="font-mono truncate">{member.email}</span>
                  </a>
                )}

                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2.5 text-slate-700 hover:text-[#165B33] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#165B33] shrink-0" />
                    <span className="font-mono">{member.phone}</span>
                  </a>
                )}

                {member.location && (
                  <div className="flex items-start gap-2.5 text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{member.location}</span>
                  </div>
                )}

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#0a66c2] hover:text-[#004182] font-semibold pt-1 border-t border-slate-200/60 transition-colors"
                  >
                    <span className="w-5 h-5 rounded flex items-center justify-center bg-[#0a66c2] text-white shrink-0">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                      </svg>
                    </span>
                    <span>Connect on LinkedIn ↗</span>
                  </a>
                )}

                {member.researchgate && (
                  <a
                    href={member.researchgate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#009b8e] hover:text-[#007066] font-semibold pt-1 border-t border-slate-200/60 transition-colors"
                  >
                    <span className="w-5 h-5 rounded flex items-center justify-center bg-[#00CCBB] text-white shrink-0 p-0.5 shadow-xs">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/>
                      </svg>
                    </span>
                    <span>ResearchGate Profile ↗</span>
                  </a>
                )}

                {member.profileUrl && (
                  <a
                    href={member.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#165B33] hover:text-[#0b331c] font-semibold pt-1 border-t border-slate-200/60 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0 text-[#165B33]" />
                    <span>Official University Profile ↗</span>
                  </a>
                )}

                {member.googleScholar && (
                  <a
                    href={member.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#4285F4] hover:text-[#3367d6] font-semibold pt-1 border-t border-slate-200/60 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                    </svg>
                    <span>Google Scholar ↗</span>
                  </a>
                )}
              </div>

              {/* Action Links */}
              <div className="w-full space-y-2">
                <a
                  href={member.cvUrl || `/cv/${member.id}_cv.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#165B33] to-[#10b981] hover:from-[#114929] hover:to-[#059669] shadow-xs transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Curriculum Vitae (CV) ↗</span>
                </a>
                <Link
                  href="/publications"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#165B33]" />
                  <span>Lab Publications</span>
                </Link>
                <Link
                  href="/projects"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
                >
                  <span>Active Research Projects →</span>
                </Link>
              </div>
            </div>

            {/* Details & Academic Profile Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Profile Sub-Header Info */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#165B33] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {member.role || "Research Fellow"}
                  </span>
                  {member.senioritySession && (
                    <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-200">
                      {member.senioritySession}
                    </span>
                  )}
                  {member.batch && (
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {member.batch}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                  Academic Credentials &amp; Research Portfolio
                </h2>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-sm text-slate-600">
                  {member.currentPosition && (
                    <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#165B33]" />
                      <span>{member.currentPosition}</span>
                    </div>
                  )}
                  {member.currentInstitution && (
                    <span className="text-slate-500">• {member.currentInstitution}</span>
                  )}
                  {!member.currentInstitution && member.institution && (
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      <span>{member.institution}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Project Scope if available */}
              {member.projectResponsibility && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border border-emerald-200 text-xs sm:text-sm text-[#0f3b20] leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold text-[#165B33] uppercase tracking-wider text-[11px] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Primary Project Responsibility</span>
                  </div>
                  {member.projectResponsibility}
                </div>
              )}

              {/* Academic Thesis Spotlight Card (When thesis title exists) */}
              {member.thesisTitle && (
                <div className="bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 rounded-2xl border-2 border-emerald-200/80 p-6 sm:p-7 shadow-xs space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#165B33]">
                      <GraduationCap className="w-4 h-4" />
                      <span>Academic Thesis &amp; Research Defense</span>
                    </div>
                    {member.submissionDate && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-[#165B33]" />
                        <span>Submitted: <strong>{member.submissionDate}</strong></span>
                      </div>
                    )}
                  </div>

                  {/* Thesis Title */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Thesis Title
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      &ldquo;{member.thesisTitle}&rdquo;
                    </div>
                  </div>

                  {/* Supervisors Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 text-xs">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Primary Supervisor</span>
                      <span className="font-bold text-slate-800 text-xs sm:text-sm">{member.supervisor || "Md. Monirul Islam, PhD"}</span>
                    </div>
                    {member.coSupervisors && (
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 text-xs">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Co-Supervisor(s)</span>
                        <span className="font-bold text-slate-800 text-xs sm:text-sm">{member.coSupervisors}</span>
                      </div>
                    )}
                    {member.senioritySession && (
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 text-xs">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Academic Session / Seniority</span>
                        <span className="font-bold text-[#165B33] text-xs sm:text-sm">{member.senioritySession}</span>
                      </div>
                    )}
                    {member.submissionDate && (
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 text-xs">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Defense / Submission Date</span>
                        <span className="font-semibold text-slate-700 text-xs sm:text-sm">{member.submissionDate}</span>
                      </div>
                    )}
                  </div>

                  {/* Thesis Abstract */}
                  {member.shortAbstract && (
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-emerald-100 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#165B33] uppercase tracking-wider">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Research Abstract &amp; Key Findings</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {member.shortAbstract}
                      </p>
                    </div>
                  )}

                  {/* Key Objectives */}
                  {member.keyObjectives && member.keyObjectives.length > 0 && (
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-emerald-100 space-y-2.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#165B33] uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Key Research Objectives</span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside leading-relaxed pl-1">
                        {member.keyObjectives.map((obj, i) => (
                          <li key={i}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Methodology & Experimental Design */}
                  {member.methodology && (
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                        <FlaskConical className="w-3.5 h-3.5 text-[#165B33]" />
                        <span>Methodology &amp; Experimental Design</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2.5">
                        {Object.entries(member.methodology).map(([key, val]) => (
                          <div key={key} className="bg-slate-50/70 p-3 rounded-lg border border-slate-200/60 text-xs">
                            <span className="font-bold text-[#165B33] block text-[11px] uppercase tracking-wider mb-0.5">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className="text-slate-700 leading-relaxed">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expected Impact */}
                  {member.expectedImpact && (
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50/60 p-4 sm:p-5 rounded-xl border border-emerald-200 text-xs sm:text-sm leading-relaxed">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#065f46] uppercase tracking-wider mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#165B33]" />
                        <span>Expected Impact &amp; Translational Value</span>
                      </div>
                      <p className="text-emerald-950 font-medium">
                        {member.expectedImpact}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Research Focus & Activities */}
              {member.researchInterest && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#165B33]"></span>
                    <span>Research Focus &amp; Laboratory Expertise</span>
                  </h3>
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {member.researchInterest}
                  </div>
                </div>
              )}

              {/* Bio Snippet if available */}
              {member.bioSnippet && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    Biographical Profile
                  </h3>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {member.bioSnippet}
                  </div>
                </div>
              )}

              {/* Education & Awards (for PI or members with listed education) */}
              {member.education && member.education.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#165B33]" />
                    <span>Academic Qualifications</span>
                  </h3>
                  <div className="space-y-2.5">
                    {member.education.map((edu, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm space-y-0.5">
                        <div className="font-bold text-slate-900">{edu.degree} — {edu.field}</div>
                        <div className="text-slate-600">{edu.institution}</div>
                        {edu.years && <div className="text-[11px] font-mono text-emerald-700">{edu.years}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {member.awards && member.awards.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Honors &amp; Research Awards</span>
                  </h3>
                  <ul className="space-y-2">
                    {member.awards.map((award, idx) => (
                      <li key={idx} className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60 text-xs sm:text-sm text-slate-800 flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Professional Appointments & Career Trajectory */}
              {member.experiences && member.experiences.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#165B33]" />
                    <span>Professional Appointments &amp; Career Trajectory</span>
                  </h3>
                  <div className="space-y-2.5">
                    {member.experiences.map((exp, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm space-y-0.5">
                        <div className="font-bold text-slate-900">{exp.title}</div>
                        <div className="text-slate-600">{exp.institution}</div>
                        {exp.years && <div className="text-[11px] font-mono text-emerald-700">{exp.years}</div>}
                        {exp.details && <div className="text-xs text-slate-500 pt-1">{exp.details}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical & Laboratory Competencies */}
              {member.skills && member.skills.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#165B33]" />
                    <span>Technical Competencies &amp; Laboratory Methodologies</span>
                  </h3>
                  <div className="flex flex-wrap gap-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-2xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#165B33]"></span>
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Publications & Scholarly Works */}
              {member.publications && member.publications.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#165B33]" />
                    <span>Key Publications &amp; Scholarly Works</span>
                  </h3>
                  <div className="space-y-2">
                    {member.publications.map((pub, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5">
                        <span className="font-mono font-bold text-[#165B33] text-xs pt-0.5">{idx + 1}.</span>
                        <span className="leading-relaxed">{pub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comprehensive CV Download & View Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white border-2 border-emerald-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#165B33] uppercase tracking-wider">
                    <FileText className="w-4 h-4" />
                    <span>Full Curriculum Vitae (CV)</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">
                    Comprehensive Academic &amp; Research Portfolio
                  </div>
                  <div className="text-xs text-slate-600">
                    Includes verified appointments, publications, thesis defense, laboratory methods, and honors.
                  </div>
                </div>
                <a
                  href={member.cvUrl || `/cv/${member.id}_cv.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#165B33] hover:bg-[#0e3f22] shadow-sm transition-all shrink-0"
                >
                  <FileText className="w-4 h-4" />
                  <span>View / Download CV ↗</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Prev / Next Researcher Quick Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevMember && (
            <Link
              href={`/team/member/${prevMember.id}`}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-50 text-slate-600 group-hover:text-[#165B33] flex items-center justify-center shrink-0 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-bold text-slate-400">Previous Researcher</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#165B33] transition-colors truncate">
                  {prevMember.name}
                </div>
              </div>
            </Link>
          )}

          {nextMember && (
            <Link
              href={`/team/member/${nextMember.id}`}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition-all flex items-center justify-end text-right gap-3 group sm:ml-auto w-full"
            >
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-bold text-slate-400">Next Researcher</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#165B33] transition-colors truncate">
                  {nextMember.name}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-50 text-slate-600 group-hover:text-[#165B33] flex items-center justify-center shrink-0 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
