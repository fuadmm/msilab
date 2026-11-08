import React from "react";
import Link from "next/link";
import { RESEARCH_PILLARS } from "@/data/research";
import { 
  ShieldCheck, 
  Dna, 
  Microscope, 
  Users, 
  CheckCircle2, 
  Activity,
  Layers
} from "lucide-react";

export default function ResearchPillarsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "dengue-ed3":
      case "advanced-immunology":
        return <ShieldCheck className="w-6 h-6 text-[#165B33]" />;
      case "peptide-tags":
      case "protein-technology":
        return <Microscope className="w-6 h-6 text-[#165B33]" />;
      case "sarscov2-immunology":
      case "pathogen-focus":
        return <Activity className="w-6 h-6 text-[#165B33]" />;
      case "cellular-memory":
      case "host-pathogen":
        return <Dna className="w-6 h-6 text-[#165B33]" />;
      case "mentorship-outreach":
      case "training-outreach":
        return <Users className="w-6 h-6 text-[#165B33]" />;
      default:
        return <Layers className="w-6 h-6 text-[#165B33]" />;
    }
  };

  return (
    <section className="relative py-20 bg-slate-50/70 border-b border-slate-200 overflow-hidden">
      {/* Light scientific relevant background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-[0.14] mix-blend-multiply"
        style={{ backgroundImage: "url('/images/research-domains-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/95 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-[#165B33] bg-emerald-50 border border-emerald-200">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Scientific Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Our Five Research Pillars
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Bridging fundamental biophysics, molecular microbiology, and clinical translation 
            to build durable immunological defenses against emerging tropical diseases.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_PILLARS.map((pillar, index) => (
            <div 
              key={pillar.id}
              className={`rounded-2xl border border-slate-200 p-7 bg-white hover:border-[#165B33]/60 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group ${
                index === 2 ? "md:col-span-2 lg:col-span-1 bg-gradient-to-b from-emerald-50/30 to-white" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Header of Pillar Card */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#165B33] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#165B33] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#165B33] mt-1">
                    {pillar.shortDesc}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Key Aspects */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Investigations:
                  </div>
                  {pillar.keyAspects.slice(0, 3).map((aspect, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#165B33] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{aspect}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b331c] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">Interested in conducting research with us?</h4>
            <p className="text-xs text-emerald-200">
              We welcome motivated doctoral fellows, MSc graduate researchers, and undergraduate trainees.
            </p>
          </div>
          <Link
            href="/join"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#10b981] hover:bg-[#059669] text-white shadow-sm transition-colors"
          >
            Submit Research Application
          </Link>
        </div>

      </div>
    </section>
  );
}
