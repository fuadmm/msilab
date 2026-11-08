"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  X, 
  User, 
  FlaskConical, 
  BookOpen, 
  Cpu, 
  FileText, 
  Compass, 
  ArrowRight, 
  Sparkles,
  Command,
  CornerDownLeft
} from "lucide-react";
import { searchLab, SearchCategory, SearchItem } from "@/data/search";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES: SearchCategory[] = [
  "All",
  "People",
  "Projects",
  "Instruments",
  "Protocols",
  "Publications",
  "Pages"
];

const SUGGESTIONS = [
  "Dengue",
  "SARS-CoV-2",
  "Centrifuge",
  "Vanquish HPLC",
  "Monirul Islam",
  "RT-qPCR",
  "HEAT-11009",
  "Session 2022–2023",
  "Vaccinology"
];

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Auto focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Compute results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchLab(query, selectedCategory);
  }, [query, selectedCategory]);

  const handleSelect = React.useCallback((item: SearchItem) => {
    onClose();
    router.push(item.href);
  }, [onClose, router]);

  // Handle ESC and Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results.length > 0) {
        e.preventDefault();
        const selected = results[selectedIndex];
        if (selected) {
          handleSelect(selected);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, results, handleSelect, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "People":
        return <User className="w-4 h-4 text-emerald-600" />;
      case "Projects":
        return <FlaskConical className="w-4 h-4 text-blue-600" />;
      case "Instruments":
        return <Cpu className="w-4 h-4 text-amber-600" />;
      case "Protocols":
        return <FileText className="w-4 h-4 text-purple-600" />;
      case "Publications":
        return <BookOpen className="w-4 h-4 text-indigo-600" />;
      default:
        return <Compass className="w-4 h-4 text-teal-600" />;
    }
  };

  const getBadgeColor = (cat: string) => {
    switch (cat) {
      case "People":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Projects":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "Instruments":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "Protocols":
        return "bg-purple-50 text-purple-800 border-purple-200";
      case "Publications":
        return "bg-indigo-50 text-indigo-800 border-indigo-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-150"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="min-h-full flex items-start justify-center p-3 sm:p-6 md:p-12 text-center">
        <div 
          className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all border border-slate-200 animate-in zoom-in-95 duration-150 flex flex-col max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header & Search Input */}
          <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-emerald-700 absolute left-3.5 pointer-events-none" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search lab members, research projects, instruments, protocols, papers..."
                className="w-full pl-11 pr-24 py-3 bg-white rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium outline-hidden shadow-2xs transition-all"
              />
              <div className="absolute right-3 flex items-center gap-1.5">
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      inputRef.current?.focus();
                    }}
                    className="p-1 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100"
                    title="Clear"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 text-[11px] font-mono text-slate-500 bg-slate-100 border border-slate-200 rounded-md">
                  ESC
                </kbd>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 text-xs no-scrollbar">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                Filter:
              </span>
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedIndex(0);
                    }}
                    className={`px-2.5 py-1 rounded-lg font-semibold text-xs transition-all shrink-0 cursor-pointer ${
                      isSelected
                        ? "bg-[#165B33] text-white shadow-2xs"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Container */}
          <div 
            ref={resultsContainerRef}
            className="flex-1 overflow-y-auto p-3 sm:p-4 divide-y divide-slate-100"
          >
            {query.trim() === "" ? (
              // Empty State with Suggestions
              <div className="py-8 px-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#165B33] flex items-center justify-center mx-auto mb-3 border border-emerald-100">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">
                  Explore MSI Lab Research Database
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mb-5 leading-relaxed">
                  Search across 50+ publications, bench protocols &amp; SOPs, high-speed centrifuges &amp; HPLC facilities, active student cohorts, and research projects.
                </p>

                <div className="space-y-2 max-w-lg mx-auto">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Quick Suggestions:
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {SUGGESTIONS.map((sug) => (
                      <button
                        key={sug}
                        type="button"
                        onClick={() => {
                          setQuery(sug);
                          inputRef.current?.focus();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-[#165B33] border border-slate-200 hover:border-emerald-200 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <Search className="w-3 h-3 text-emerald-600" />
                        <span>{sug}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : results.length === 0 ? (
              // No Results Found
              <div className="py-12 px-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3 border border-amber-200">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">
                  No matching results for &ldquo;{query}&rdquo;
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                  Try checking your spelling or selecting &ldquo;All&rdquo; in the category filter above.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSelectedCategory("All");
                    inputRef.current?.focus();
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Clear search
                </button>
              </div>
            ) : (
              // Results List
              <div className="space-y-1">
                <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Results ({results.length})</span>
                  <span className="text-[10px] lowercase font-normal text-slate-400">Press Enter to open</span>
                </div>

                {results.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      data-index={index}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`group p-3 rounded-xl cursor-pointer transition-all flex items-start justify-between gap-3 ${
                        isSelected 
                          ? "bg-emerald-50/90 border border-emerald-300/80 shadow-2xs" 
                          : "hover:bg-slate-50/80 border border-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                          isSelected ? "bg-white shadow-xs border border-emerald-200" : "bg-slate-100"
                        }`}>
                          {getCategoryIcon(item.category)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h4 className={`text-sm font-bold truncate ${
                              isSelected ? "text-[#165B33]" : "text-slate-900"
                            }`}>
                              {item.title}
                            </h4>
                            {item.badge && (
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${getBadgeColor(item.category)}`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 pt-1">
                        {isSelected ? (
                          <div className="flex items-center gap-1 text-[#165B33] text-xs font-bold">
                            <span className="hidden sm:inline">Go</span>
                            <CornerDownLeft className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer Navigation Hints */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono">↓</kbd>
                <span>navigate</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono">↵</kbd>
                <span>select</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono">esc</kbd>
                <span>close</span>
              </span>
            </div>
            <div className="font-semibold text-emerald-800 hidden sm:inline">
              MSI Lab Knowledge Portal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
