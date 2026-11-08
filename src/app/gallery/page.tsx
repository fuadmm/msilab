"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Camera, 
  MapPin, 
  Calendar, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  FlaskConical, 
  Trees, 
  Compass, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  ArrowRight,
  Target,
  FolderOpen,
  LayoutGrid,
  ListFilter,
  ZoomIn,
  ZoomOut,
  ExternalLink
} from "lucide-react";
import { GALLERY_ITEMS, GALLERY_GROUPS, GALLERY_CATEGORIES, GalleryItem, GalleryGroup } from "@/data/gallery";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [activeGroupFilter, setActiveGroupFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grouped" | "compact">("grouped");
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Filter groups
  const filteredGroups = useMemo(() => {
    let groups = GALLERY_GROUPS;
    if (selectedCategory !== "all") {
      groups = groups.filter(g => g.category === selectedCategory);
    }
    if (activeGroupFilter !== "all") {
      groups = groups.filter(g => g.id === activeGroupFilter);
    }
    return groups;
  }, [selectedCategory, activeGroupFilter]);

  // Flattened items from filtered groups
  const visibleItems = useMemo(() => {
    if (viewMode === "compact") {
      if (selectedCategory === "all") return GALLERY_ITEMS;
      return GALLERY_ITEMS.filter(item => item.category === selectedCategory);
    }
    return filteredGroups.flatMap(g => g.photos);
  }, [viewMode, selectedCategory, filteredGroups]);

  // Current active index in lightbox
  const activeIndex = useMemo(() => {
    if (!activeItem) return -1;
    return visibleItems.findIndex(item => item.id === activeItem.id);
  }, [activeItem, visibleItems]);

  const handleNext = useCallback(() => {
    if (visibleItems.length === 0) return;
    const nextIdx = (activeIndex + 1) % visibleItems.length;
    setIsZoomed(false);
    setActiveItem(visibleItems[nextIdx]);
  }, [activeIndex, visibleItems]);

  const handlePrev = useCallback(() => {
    if (visibleItems.length === 0) return;
    const prevIdx = (activeIndex - 1 + visibleItems.length) % visibleItems.length;
    setIsZoomed(false);
    setActiveItem(visibleItems[prevIdx]);
  }, [activeIndex, visibleItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") {
        setActiveItem(null);
        setIsZoomed(false);
      }
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem, handleNext, handlePrev]);

  const openGroupPhotos = (group: GalleryGroup) => {
    if (group.photos.length > 0) {
      setIsZoomed(false);
      setActiveItem(group.photos[0]);
    }
  };

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case "lab":
        return <FlaskConical className="w-4 h-4" />;
      case "botanical":
        return <Trees className="w-4 h-4" />;
      case "field":
        return <Compass className="w-4 h-4" />;
      case "seminar":
        return <GraduationCap className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const getCategoryPill = (category: string) => {
    switch (category) {
      case "lab":
        return "bg-emerald-100 text-emerald-900 border-emerald-300";
      case "botanical":
        return "bg-teal-100 text-teal-900 border-teal-300";
      case "field":
        return "bg-amber-100 text-amber-900 border-amber-300";
      case "seminar":
        return "bg-blue-100 text-blue-900 border-blue-300";
      default:
        return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      
      {/* Hero Banner - Uniform with Home Page Upper Phase */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-[#f2f9f4] via-white to-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-lab-grid pointer-events-none opacity-60"></div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#165B33]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>Grouped Photographic Record</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              MSI Lab Photo Gallery
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Photographs organized into cohesive purpose-driven sets—documenting molecular research facilities, botanical garden bio-induction trials, hill tracts field expeditions, and academic symposium defenses at the University of Chittagong.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2 bg-white border border-slate-300 px-3.5 py-2 rounded-xl shadow-2xs">
                <FolderOpen className="w-4 h-4 text-emerald-700" />
                <span><strong className="text-slate-950">5</strong> Purpose-Driven Sets</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-300 px-3.5 py-2 rounded-xl shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span><strong className="text-slate-950">Curated</strong> Bench &amp; Field Archive</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-300 px-3.5 py-2 rounded-xl shadow-2xs">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span><strong className="text-slate-950">HEAT-11009-CU</strong> Facilities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 lg:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter and View Controls Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1 flex items-center gap-1.5">
                <ListFilter className="w-3.5 h-3.5 text-emerald-700" />
                Filter:
              </span>

              {GALLERY_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.key;
                const count = cat.key === "all" 
                  ? GALLERY_GROUPS.length 
                  : GALLERY_GROUPS.filter(g => g.category === cat.key).length;

                return (
                  <button
                    key={cat.key}
                    onClick={() => {
                      setSelectedCategory(cat.key);
                      setActiveGroupFilter("all");
                    }}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#165B33] text-white shadow-sm ring-2 ring-emerald-600/30"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950 border border-slate-200"
                    }`}
                  >
                    {getCategoryIcon(cat.key)}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Layout Toggle (Grouped vs Compact) */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0 self-start lg:self-auto">
              <button
                onClick={() => setViewMode("grouped")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  viewMode === "grouped"
                    ? "bg-white text-slate-950 shadow-2xs"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                <FolderOpen className="w-3.5 h-3.5 text-emerald-700" />
                <span>Grouped by Purpose</span>
              </button>
              <button
                onClick={() => setViewMode("compact")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  viewMode === "compact"
                    ? "bg-white text-slate-950 shadow-2xs"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-emerald-700" />
                <span>All Photos Grid</span>
              </button>
            </div>

          </div>
        </div>

        {/* View Mode 1: Grouped by Purpose */}
        {viewMode === "grouped" ? (
          <div className="space-y-12">
            {filteredGroups.map((group, groupIndex) => (
              <div 
                key={group.id}
                id={group.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-md"
              >
                {/* Group Header Container */}
                <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-50 via-white to-emerald-50/30 border-b border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    
                    {/* Left: Set number, title, metadata */}
                    <div className="space-y-2.5 max-w-3xl">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-900 text-white font-mono">
                          Group {String(groupIndex + 1).padStart(2, "0")}
                        </span>
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${getCategoryPill(group.category)}`}>
                          {group.categoryLabel}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                        {group.title}
                      </h2>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                          <strong className="text-slate-800">Date:</strong> {group.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                          <strong className="text-slate-800">Location:</strong> {group.location}
                        </span>
                      </div>
                    </div>

                    {/* Right: Group Action & Tags */}
                    <div className="flex flex-col items-start lg:items-end gap-2.5 shrink-0">
                      <button
                        onClick={() => openGroupPhotos(group)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-emerald-800 border-2 border-emerald-700 hover:bg-emerald-700 hover:text-white text-xs font-extrabold transition-all shadow-2xs cursor-pointer"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>View photos in this set</span>
                      </button>

                      <div className="flex flex-wrap gap-1.5 lg:max-w-xs justify-start lg:justify-end">
                        {group.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* PURPOSE CALLOUT BOX - HIGH CONTRAST */}
                  <div className="mt-5 p-4 rounded-xl bg-emerald-50/80 border-l-4 border-emerald-600 border-t border-r border-b border-emerald-200/60">
                    <div className="flex items-start gap-2.5">
                      <Target className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-emerald-950 block mb-0.5">
                          Group Research Purpose:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
                          {group.purpose}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Group Photos Grid */}
                <div className="p-6 sm:p-8 bg-slate-50/50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {group.photos.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setIsZoomed(false);
                          setActiveItem(item);
                        }}
                        className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col"
                      >
                        {/* Image Preview Container */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />

                          {/* Zoom Icon Overlay on hover */}
                          <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="w-7 h-7 rounded-full bg-slate-950/70 text-white flex items-center justify-center shadow-md">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </span>
                          </div>

                          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white font-medium bg-slate-950/60 backdrop-blur-xs px-2 py-0.5 rounded">
                            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-emerald-400 inline shrink-0" /> {item.date}</span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-3.5 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                              {item.title}
                            </h3>
                            <p className="mt-1.5 text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsZoomed(false);
                                setActiveItem(item);
                              }}
                              className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-700 hover:text-white font-bold transition-colors inline-flex items-center gap-1 cursor-pointer"
                            >
                              <span>View photo</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                            <span className="text-slate-400 font-mono text-[10px]">
                              1600px HD
                            </span>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* View Mode 2: Compact Flat Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setIsZoomed(false);
                  setActiveItem(item);
                }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryPill(item.category)}`}>
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-7 h-7 rounded-full bg-slate-950/70 text-white flex items-center justify-center shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded block w-fit mb-1.5">
                      {item.groupTitle}
                    </span>
                    <h3 className="text-sm font-bold text-slate-950 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsZoomed(false);
                        setActiveItem(item);
                      }}
                      className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-700 hover:text-white font-bold transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Enlarge photo</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <span className="text-slate-400 font-mono text-[10px]">
                      1600px HD
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Institutional Research Context Box */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>University of Chittagong Research Portfolio</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Institutional Support &amp; Ethical Research Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                All visual items represent authentic research investigations led by Prof. Dr. Mohammad Monirul Islam. Facilities documented are supported by the Higher Education Acceleration and Transformation (HEAT-11009-CU) project in partnership with the World Bank, UGC Bangladesh, and the Department of Biochemistry &amp; Molecular Biology.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/facilities"
                className="px-4 py-2.5 rounded-xl bg-[#165B33] hover:bg-[#124b2a] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <FlaskConical className="w-3.5 h-3.5" />
                Explore Facilities
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
              >
                Research Projects
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* High-Contrast Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/94 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={() => {
            setActiveItem(null);
            setIsZoomed(false);
          }}
        >
          <div 
            className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-950 flex-wrap gap-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${getCategoryPill(activeItem.category)}`}>
                  {activeItem.categoryLabel}
                </span>
                <span className="text-xs text-slate-200 font-bold bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
                  {activeItem.groupTitle}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeIndex + 1} / {visibleItems.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 border border-slate-700 cursor-pointer"
                  title="Toggle Zoom"
                >
                  {isZoomed ? <ZoomOut className="w-3.5 h-3.5 text-emerald-400" /> : <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{isZoomed ? "Reset" : "Zoom"}</span>
                </button>

                <button
                  onClick={() => {
                    setActiveItem(null);
                    setIsZoomed(false);
                  }}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer border border-slate-700"
                  aria-label="Close photo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Robust Image Viewer Stage */}
            <div className="relative flex-1 min-h-[340px] h-[56vh] bg-black flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className={`max-h-full max-w-full object-contain mx-auto transition-transform duration-200 select-none ${
                  isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 hover:bg-emerald-600 text-white border border-white/20 transition-all cursor-pointer shadow-lg z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 hover:bg-emerald-600 text-white border border-white/20 transition-all cursor-pointer shadow-lg z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* High-Contrast Description Drawer */}
            <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800 overflow-y-auto max-h-[28vh]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeItem.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-300 font-medium shrink-0">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {activeItem.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {activeItem.location}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {activeItem.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {activeItem.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-emerald-300 border border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Bar with Direct Links */}
            <div className="px-5 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 flex-wrap gap-2">
              <span>Use <strong>←</strong> and <strong>→</strong> keys to navigate, <strong>Esc</strong> to close</span>
              <div className="flex items-center gap-4">
                <a 
                  href={activeItem.image} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full HD Photo</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
