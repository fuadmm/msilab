"use client";

import React, { useState } from "react";
import { Dna, Activity, Cpu, Sprout, ShieldAlert, Sparkles } from "lucide-react";

interface ProjectBannerProps {
  image?: string;
  title: string;
  category: string;
  className?: string;
  heightClass?: string;
}

export default function ProjectBanner({
  image,
  title,
  category,
  className = "",
  heightClass = "h-52 sm:h-64"
}: ProjectBannerProps) {
  const [imageError, setImageError] = useState(false);

  // Pick category styling and icon
  const getTheme = () => {
    const cat = category.toLowerCase();
    if (cat.includes("computational") || cat.includes("structural")) {
      return {
        bg: "from-[#0f172a] via-[#1e1b4b] to-[#0f172a]",
        accent: "text-indigo-300",
        pill: "bg-indigo-500/20 text-indigo-200 border-indigo-400/30",
        icon: Cpu,
        label: "In Silico Structural Biophysics"
      };
    }
    if (cat.includes("plant") || cat.includes("phytochemistry")) {
      return {
        bg: "from-[#052e16] via-[#14532d] to-[#064e3b]",
        accent: "text-emerald-300",
        pill: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
        icon: Sprout,
        label: "Plant Molecular & Secondary Metabolomics"
      };
    }
    if (cat.includes("vaccin")) {
      return {
        bg: "from-[#042f2e] via-[#115e59] to-[#0f766e]",
        accent: "text-teal-300",
        pill: "bg-teal-500/20 text-teal-200 border-teal-400/30",
        icon: ShieldAlert,
        label: "Translational Subunit Vaccinology"
      };
    }
    // Viral immunology default
    return {
      bg: "from-[#0b331c] via-[#165B33] to-[#1e7845]",
      accent: "text-emerald-300",
      pill: "bg-emerald-400/20 text-emerald-200 border-emerald-400/30",
      icon: Activity,
      label: "Molecular Surveillance & Viral Immunology"
    };
  };

  const theme = getTheme();
  const IconComponent = theme.icon;

  if (image && !imageError) {
    return (
      <div className={`relative overflow-hidden w-full ${heightClass} ${className} bg-slate-900`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Fallback SVG Banner with decorative molecular / DNA helix motif
  return (
    <div
      className={`relative overflow-hidden w-full ${heightClass} ${className} bg-gradient-to-br ${theme.bg} text-white flex flex-col justify-between p-6 sm:p-8 select-none`}
    >
      {/* Background SVG decorative pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dna-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="#ffffff" />
            <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dna-grid)" />
      </svg>

      {/* Floating abstract decorative orbs */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-white/5 blur-2xl pointer-events-none" />

      {/* Decorative molecular nodes top-right */}
      <div className="absolute top-6 right-6 opacity-30 flex items-center gap-2 pointer-events-none">
        <Dna className="w-16 h-16 text-white stroke-1" />
      </div>

      {/* Top Banner Tag */}
      <div className="relative z-10 flex items-center justify-between">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-xs ${theme.pill}`}>
          <IconComponent className="w-3.5 h-3.5" />
          <span>{category}</span>
        </div>
        <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-white/70" />
          <span>MSI Lab Portfolio</span>
        </span>
      </div>

      {/* Bottom Title Snippet */}
      <div className="relative z-10 space-y-1.5 mt-auto">
        <div className={`text-xs font-mono font-semibold ${theme.accent}`}>
          {theme.label}
        </div>
        <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
}
