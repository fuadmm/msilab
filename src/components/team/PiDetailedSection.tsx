import React from "react";
import { PI_DATA } from "@/data/team";
import { 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Quote,
  ExternalLink,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function PiDetailedSection() {
  return (
    <div className="space-y-12">
      {/* Hero Card for PI */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Portrait & Contacts Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="relative group">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-tr from-[#0b331c] via-[#165B33] to-[#228b50] p-1.5 shadow-xl overflow-hidden">
                <div className="w-full h-full rounded-[20px] bg-slate-900 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={PI_DATA.image || "/PI/Mohammad%20Monirul%20Islam,%20PI,%20MSI%20Lab.jpg"} 
                    alt={PI_DATA.name} 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Prof. Dr. M. M. Islam
                    </span>
                    <p className="text-[11px] text-slate-300">Head of MSI Lab</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 right-2 bg-emerald-50 border border-emerald-200 text-[#165B33] text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs">
                TUAT Ph.D. (2005–2009)
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="w-full bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3 text-xs">
              <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                Direct Academic Contact
              </div>
              <a
                href={`mailto:${PI_DATA.contact.email}`}
                className="flex items-center gap-2.5 text-slate-700 hover:text-[#165B33] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#165B33] shrink-0" />
                <span className="font-mono font-medium truncate">{PI_DATA.contact.email}</span>
              </a>
              <a
                href={`tel:${PI_DATA.contact.phone}`}
                className="flex items-center gap-2.5 text-slate-700 hover:text-[#165B33] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#165B33] shrink-0" />
                <span className="font-mono font-medium">{PI_DATA.contact.phone}</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-600">
                <MapPin className="w-4 h-4 text-[#165B33] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{PI_DATA.contact.office}</span>
              </div>
            </div>

            <div className="w-full space-y-2">
              <Link
                href="/publications"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#165B33] hover:bg-[#114929] shadow-xs transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>View PI Publications</span>
              </Link>
              <a
                href="https://scholar.google.com/citations?user=dKS4v_gAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#165B33] bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 transition-colors"
              >
                <TrendingUp className="w-4 h-4 text-[#165B33]" />
                <span>Google Scholar (766+ Citations)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://www.researchgate.net/profile/Md-Islam-2210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#009b8e] bg-teal-50/80 hover:bg-teal-100/80 border border-teal-200 transition-colors"
                  title="ResearchGate Profile"
                >
                  <span className="w-4 h-4 rounded flex items-center justify-center bg-[#00CCBB] text-white shrink-0 p-0.5">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/>
                    </svg>
                  </span>
                  <span>ResearchGate</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/110175191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#0a66c2] bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200 transition-colors"
                  title="MSI Lab Official LinkedIn"
                >
                  <span className="w-4 h-4 rounded flex items-center justify-center bg-[#0a66c2] text-white shrink-0">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </span>
                  <span>MSI LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Biography & Academic Leadership (8 cols) */}
          <div className="lg:col-span-8 space-y-7">
            
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#165B33] bg-emerald-50 mb-2">
                Principal Investigator & Professor
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                {PI_DATA.name}
              </h1>
              <p className="text-base font-semibold text-[#165B33] mt-1">
                {PI_DATA.title} · {PI_DATA.department}, {PI_DATA.institution}
              </p>
            </div>

            {/* Quote / Vision Banner */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 text-slate-800 text-sm italic relative">
              <Quote className="w-6 h-6 text-emerald-300 absolute -top-3 left-4" />
              <p className="relative z-10 leading-relaxed text-slate-700">
                &ldquo;Our laboratory&apos;s mission is to unlock the molecular secrets of how the human immune system interacts with rapidly mutating tropical viruses, turning these structural blueprints into affordable, accessible, and shelf-stable vaccines and therapeutics for developing nations.&rdquo;
              </p>
            </div>

            {/* Key Roles & Directorships */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Leadership & Administrative Responsibilities:
              </h3>
              <div className="space-y-2">
                {PI_DATA.roles.map((role, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#165B33] shrink-0 mt-0.5" />
                    <span className="font-semibold">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Background */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Education & Academic Qualifications:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {PI_DATA.education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#165B33] flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs text-slate-900">{edu.degree}</div>
                    <div className="text-[11px] text-[#165B33] font-semibold">{edu.field}</div>
                    <div className="text-[11px] text-slate-500">{edu.institution}</div>
                    {edu.years && (
                      <div className="text-[10px] font-mono font-bold text-slate-400">{edu.years}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Bio */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Academic Biography:
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {PI_DATA.bio}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                During the COVID-19 emergency, Dr. Islam mobilized faculty resources to establish the Chittagong University COVID-19 Testing Laboratory, directing over 100,000 diagnostic molecular assays while curating serological biospecimens to study viral dynamics and immune persistence. Dr. Islam also heads the university&apos;s Animal Ethics Review Board, ensuring that preclinical experimental immunology strictly complies with international ethical standards.
              </p>
            </div>

            {/* Honours and Awards */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Selected Honors, Grants & Distinctions:
              </h3>
              <div className="space-y-2">
                {PI_DATA.awards.map((award, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
