"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Search
} from "lucide-react";
import SearchDialog from "@/components/search/SearchDialog";

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string; description?: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Facilities", href: "/facilities" },
  { label: "Research", href: "/projects" },
  { 
    label: "People", 
    href: "/team",
    subItems: [
      { label: "All Members Overview", href: "/team", description: "Complete organizational directory" },
      { label: "Principal Investigator", href: "/team/pi", description: "Prof. Dr. Mohammad Monirul Islam" },
      { label: "Doctoral Fellows (Ph.D.)", href: "/team/doctoral", description: "Doctoral candidates & clinical scholars" },
      { label: "Master's Fellows (M.Sc.)", href: "/team/masters", description: "Postgraduate thesis researchers (2023–2025)" },
      { label: "Research Assistants & Staff", href: "/team/staff", description: "Lab manager, project leads & operations staff" },
      { label: "Undergraduate Fellows (B.Sc.)", href: "/team/undergraduate", description: "Undergraduate student researchers & fellows" },
      { label: "Alumni Network", href: "/team/alumni", description: "Graduates across global research institutes" },
    ]
  },
  { label: "Publications", href: "/publications" },
  { label: "Collaborations", href: "/collaborations" },
  { 
    label: "More", 
    href: "#",
    subItems: [
      { label: "Protocols", href: "/protocols", description: "Bench-verified protocols & laboratory SOPs" },
      { label: "Objectives", href: "/objectives", description: "Mission, vision & research roadmap" },
      { label: "Gallery", href: "/gallery", description: "Facilities, field research & seminars" },
      { label: "Events", href: "/news", description: "Lab seminars, press & announcements" },
      { label: "Instrument Service Application", href: "/facilities/service-request", description: "Online application form for sample analysis & services" },
      { label: "Join Us (Fellowships)", href: "/apply", description: "Student & fellow recruitment" },
    ]
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global search shortcut (Ctrl+K, Cmd+K, or '/')
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (
        e.key === "/" && 
        document.activeElement?.tagName !== "INPUT" && 
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    if (item.href === "/projects" && (pathname.startsWith("/projects") || pathname.startsWith("/research"))) return true;
    if (item.subItems) {
      return item.subItems.some((sub) => pathname === sub.href || pathname.startsWith(sub.href));
    }
    return pathname.startsWith(item.href);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#072212]/95 backdrop-blur-md shadow-md border-b border-emerald-900/60" 
          : "bg-[#0b331c] border-b border-emerald-900/40"
      }`}
    >
      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Lab Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl bg-white border border-white/20 flex items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-transform duration-200 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/All%20logos/msi%20lab.png" alt="MSI Lab Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white transition-colors">
                MSI Lab
              </span>
              <span className="text-xs text-white/90 font-medium tracking-tight">
                Molecular &amp; Structural Immunology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);

              if (item.subItems) {
                const isDropdownOpen = activeDropdown === item.label;

                return (
                  <div 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.href === "#" ? (
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(isDropdownOpen ? null : item.label)}
                        className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                          active
                            ? "text-white bg-white/20 font-bold shadow-xs"
                            : "text-white hover:text-white hover:bg-white/15"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                          active
                            ? "text-white bg-white/20 font-bold shadow-xs"
                            : "text-white hover:text-white hover:bg-white/15"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                      </Link>
                    )}

                    {/* Dropdown panel */}
                    {isDropdownOpen && (
                      <div className={`absolute ${item.label === "More" ? "right-0" : "left-0"} top-full pt-1 w-72 z-50`}>
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 py-2 divide-y divide-slate-100 animate-in fade-in slide-in-from-top-2 duration-150">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`block px-4 py-2.5 hover:bg-emerald-50/60 transition-colors ${
                                pathname === sub.href ? "bg-emerald-50 text-[#165B33]" : "text-slate-700"
                              }`}
                            >
                              <div className="font-semibold text-sm text-[#0f172a] hover:text-[#165B33]">
                                {sub.label}
                              </div>
                              {sub.description && (
                                <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                  {sub.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? "text-white bg-white/20 font-bold shadow-xs"
                      : "text-white hover:text-white hover:bg-white/15"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Official Lab LinkedIn Link */}
            <a
              href="https://www.linkedin.com/company/110175191"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-sky-400 hover:text-white hover:bg-emerald-900/60 transition-colors ml-1"
              aria-label="MSI Lab on LinkedIn"
              title="Visit MSI Lab on LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Desktop Search Trigger Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="ml-2 flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/40 hover:border-emerald-400/70 text-emerald-100 hover:text-white transition-all text-xs font-semibold cursor-pointer shadow-xs group"
              title="Search MSI Lab (Ctrl+K or /)"
            >
              <Search className="w-3.5 h-3.5 text-emerald-300 group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline text-white/90">Search...</span>
              <span className="xl:hidden text-white/90">Search</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-emerald-900/90 text-emerald-200 rounded border border-emerald-700/60 font-bold">
                Ctrl K
              </kbd>
            </button>
          </nav>

          {/* Mobile Right Controls: Search + LinkedIn + Hamburger Menu */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href="https://www.linkedin.com/company/110175191"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-sky-400 hover:bg-white/10 transition-colors"
              aria-label="MSI Lab on LinkedIn"
              title="MSI Lab LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Search"
              title="Search MSI Lab"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer (Exact 1:1 Mirror of Desktop Navigation) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-emerald-900/60 bg-[#072212]/98 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1 max-h-[85vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);

              if (item.subItems) {
                const isOpen = mobileDropdown === item.label;

                return (
                  <div key={item.label} className="border-b border-white/10 pb-1">
                    <button
                      type="button"
                      onClick={() => setMobileDropdown(isOpen ? null : item.label)}
                      className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold text-white transition-all cursor-pointer ${
                        active || isOpen ? "bg-white/15 font-bold" : "hover:bg-white/10"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-emerald-300 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-1 ml-2 pl-3 border-l-2 border-emerald-500/50 space-y-1 py-1.5 bg-black/25 rounded-r-lg">
                        {item.subItems.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setMobileDropdown(null);
                              }}
                              className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                                isSubActive
                                  ? "text-emerald-300 font-bold bg-white/15"
                                  : "text-white/80 hover:text-white hover:bg-white/10"
                              }`}
                            >
                              <div className="font-semibold text-sm">{sub.label}</div>
                              {sub.description && (
                                <div className="text-xs text-white/50 mt-0.5 line-clamp-1">
                                  {sub.description}
                                </div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.label} className="border-b border-white/10 pb-1">
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setMobileDropdown(null);
                    }}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold text-white transition-all ${
                      active ? "bg-white/20 font-bold border-l-4 border-emerald-400" : "hover:bg-white/10"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
                  </Link>
                </div>
              );
            })}

            {/* Official Lab LinkedIn Link in Mobile Menu */}
            <div className="border-b border-white/10 pb-1">
              <a
                href="https://www.linkedin.com/company/110175191"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold text-sky-300 hover:bg-white/10 transition-all"
              >
                <span className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </span>
                <span className="text-xs text-sky-400 font-mono">↗</span>
              </a>
            </div>

            {/* Search Trigger in Mobile Drawer */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 hover:text-white font-semibold text-sm transition-all cursor-pointer shadow-xs"
              >
                <Search className="w-4 h-4 text-emerald-300" />
                <span>Search MSI Lab</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Interactive Search Modal Dialog */}
      <SearchDialog 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </header>
  );
}
