"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  UserCheck, 
  Users, 
  GraduationCap, 
  Grid,
  BookOpen,
  Briefcase,
  FlaskConical
} from "lucide-react";

export default function TeamNavTabs() {
  const pathname = usePathname();

  const tabs = [
    { label: "All Overview", href: "/team", icon: Grid, exact: true },
    { label: "PI Profile", href: "/team/pi", icon: UserCheck, exact: false },
    { label: "Doctoral (Ph.D.)", href: "/team/doctoral", icon: BookOpen, exact: false },
    { label: "Master's (M.Sc.)", href: "/team/masters", icon: Users, exact: false },
    { label: "Staff & RAs", href: "/team/staff", icon: Briefcase, exact: false },
    { label: "Undergraduates", href: "/team/undergraduate", icon: FlaskConical, exact: false },
    { label: "Alumni Network", href: "/team/alumni", icon: GraduationCap, exact: false },
  ];

  const isTabActive = (tab: { href: string; exact: boolean }) => {
    if (tab.exact) {
      return pathname === "/team";
    }
    return pathname === tab.href || pathname.startsWith(tab.href);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200 w-fit mx-auto shadow-2xs">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const active = isTabActive(tab);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              active
                ? "bg-white text-[#165B33] shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
            }`}
          >
            <Icon className={`w-4 h-4 ${active ? "text-[#165B33]" : "text-slate-400"}`} />
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
