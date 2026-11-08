import React from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b2817] text-slate-200 border-t-4 border-[#165B33]">
      {/* Upper Footer: Main Pillars & Institutional details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Lab Branding & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-lg overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/All%20logos/msi%20lab.png" alt="MSI Lab" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  MSI Lab
                </span>
                <span className="text-xs text-emerald-300 font-medium">
                  Molecular &amp; Structural Immunology
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300/90 leading-relaxed pr-2">
              Dedicated to elucidating immune mechanisms at atomic resolution and translating discoveries into stable vaccines and diagnostic countermeasures.
            </p>

            <div className="pt-2 space-y-2">
              <a 
                href="https://cu.ac.bd/dbmb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 group transition-colors"
                title="Department of Biochemistry & Molecular Biology, University of Chittagong"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/All%20logos/bmbcu%20logo.png" alt="Department of Biochemistry & Molecular Biology Seal" className="w-6 h-6 rounded-full bg-white object-contain shrink-0" />
                <span className="text-xs font-semibold text-emerald-300 group-hover:text-white transition-colors">
                  Department of Biochemistry &amp; Molecular Biology
                </span>
              </a>
              <a 
                href="https://cu.ac.bd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 group transition-colors"
                title="University of Chittagong, Bangladesh"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/All%20logos/University_of_Chittagong_logo.svg.jpg" alt="University of Chittagong Seal" className="w-6 h-6 rounded-full bg-white object-contain shrink-0" />
                <span className="text-xs font-semibold text-emerald-300 group-hover:text-white transition-colors">
                  University of Chittagong, Bangladesh
                </span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://www.linkedin.com/company/110175191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a66c2]/20 hover:bg-[#0a66c2] border border-[#0a66c2]/40 text-xs font-semibold text-white transition-all shadow-sm group"
                title="Follow MSI Lab on LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0 text-[#0a66c2] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Follow MSI Lab on LinkedIn ↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Site Menus (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Site Menus
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/objectives" className="hover:text-white hover:underline transition-colors">
                  Research Objectives
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-white hover:underline transition-colors">
                  State-of-the-Art Facilities
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white hover:underline transition-colors">
                  Team &amp; Alumni
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-white hover:underline transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/collaborations" className="hover:text-white hover:underline transition-colors">
                  Strategic Collaborations
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white hover:underline transition-colors">
                  News &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/apply" className="inline-flex items-center gap-1 text-emerald-300 font-bold hover:text-white transition-colors">
                  <span>Join Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Research Pillars (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Research Pillars
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300/90 leading-relaxed">
              <li>• Advanced Viral Immunology</li>
              <li>• Dengue Envelope Domain III (ED3)</li>
              <li>• SARS-CoV-2 Pan-Sarbecovirus</li>
              <li>• COVID-19 RT-PCR Surveillance</li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact &amp; Office
            </h3>
            
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed text-slate-300/90">
                  Room 304, <a href="https://cu.ac.bd/dbmb" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 underline underline-offset-2 transition-colors">Department of Biochemistry &amp; Molecular Biology</a><br />
                  <a href="https://cu.ac.bd" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 underline underline-offset-2 transition-colors">University of Chittagong</a>, Chattogram-4331
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs">
                  Email:{" "}
                  <a href="mailto:islammm@cu.ac.bd" className="text-emerald-300 hover:text-white font-mono transition-colors">
                    islammm@cu.ac.bd
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-emerald-200 font-mono">
                  Tel:{" "}
                  <a href="tel:+8801750180422" className="hover:text-white transition-colors">
                    +8801750180422
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <svg className="w-4 h-4 text-[#0a66c2] shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xs">
                  LinkedIn:{" "}
                  <a 
                    href="https://www.linkedin.com/company/110175191" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-300 hover:text-white transition-colors font-medium"
                  >
                    MSI Lab Official Page ↗
                  </a>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer: Copyright & Credit */}
      <div className="border-t border-white/10 bg-[#071d10] py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © MSI Lab · <a href="https://cu.ac.bd/dbmb" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">Department of Biochemistry &amp; Molecular Biology</a> · <a href="https://cu.ac.bd" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">University of Chittagong</a>. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Designed by</span>
            <strong className="text-emerald-300">
              @MushtakFuad
            </strong>
            <span className="mx-1 text-slate-600">·</span>
            <a href="https://cu.ac.bd" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">University of Chittagong</a>
            <span className="mx-1 text-slate-600">·</span>
            <a href="https://www.linkedin.com/company/110175191" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white transition-colors font-medium">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
