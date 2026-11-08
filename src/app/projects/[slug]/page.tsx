import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { PROTOCOLS_DATA } from "@/data/protocols";
import ProjectBanner from "@/components/projects/ProjectBanner";
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Dna, 
  Microscope, 
  Mail, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  Target, 
  Workflow, 
  ArrowRight,
  FileText,
  Download,
  FlaskConical
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project Not Found | MSI Lab" };
  }
  return {
    title: `${project.title} | Research Projects | MSI Lab`,
    description: project.shortDescription
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const metadata = project.metadata;
  const workflow = project.workflow || [];
  const associatedProtocols = PROTOCOLS_DATA.filter((proto) => 
    proto.associatedProjects.includes(project.slug)
  );

  return (
    <div className="min-h-screen bg-slate-50/70 pb-24">
      
      {/* Top Breadcrumb & Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f4] via-white to-slate-50 border-b border-slate-200 py-16 sm:py-20">
        <div className="absolute inset-0 bg-lab-grid pointer-events-none opacity-60"></div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#165B33]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#165B33] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/projects" className="hover:text-[#165B33] transition-colors">Research</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
              {project.title}
            </span>
          </nav>

          {/* Header Metadata & Title */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100/80 text-[#165B33] border border-emerald-200">
                {project.category}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                project.status.toLowerCase().includes("active")
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "bg-emerald-50 text-emerald-800 border border-emerald-200"
              }`}>
                ● {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          {/* Back Link */}
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#165B33] hover:underline transition-colors pt-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Research Portfolio</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ================= LEFT / MAIN COLUMN (8 cols) ================= */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Visual Project Banner */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <ProjectBanner
                image={project.image}
                title={project.title}
                category={project.category}
                heightClass="h-64 sm:h-80"
              />
            </div>

            {/* Overview Narrative Section */}
            <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 shadow-2xs space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#165B33]">
                <Target className="w-4 h-4" />
                <span>Executive Research Narrative</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                Project Background &amp; Scientific Rationale
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {(project.detailedNarrative || [project.shortDescription]).map((para, pIdx) => (
                  <p key={pIdx}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Scientific Objectives & Highlights */}
            <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 shadow-2xs space-y-6">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#165B33]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Core Scientific Deliverables</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                Key Objectives &amp; Breakthrough Highlights
              </h2>
              <ul className="space-y-4">
                {project.keyHighlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-sm text-slate-800">
                    <span className="w-6 h-6 rounded-lg bg-[#165B33] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {hIdx + 1}
                    </span>
                    <span className="leading-relaxed font-medium">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Methodology & Workflow Callout Section */}
            {workflow.length > 0 && (
              <div className="bg-gradient-to-br from-[#0c3920] to-[#165B33] text-white rounded-3xl p-7 sm:p-9 shadow-md space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                    <Workflow className="w-4 h-4" />
                    <span>Featured Methodology &amp; Workflow</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-200/80 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    Experimental Architecture
                  </span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Stepwise Analytical &amp; Experimental Pipeline
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {workflow.map((item, wIdx) => (
                    <div 
                      key={wIdx} 
                      className="p-5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-2 hover:bg-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-black text-emerald-300 px-2 py-0.5 rounded bg-black/20">
                          STAGE {item.step}
                        </span>
                        <Activity className="w-3.5 h-3.5 text-emerald-300/80" />
                      </div>
                      <h4 className="font-bold text-sm text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-emerald-100/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experimental & Computational Methodologies (Pill Badges) */}
            <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 shadow-2xs space-y-5">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#165B33]">
                <Layers className="w-4 h-4" />
                <span>Technical Benchwork &amp; In Silico Protocols</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                Methodological Toolkit &amp; Instrumentation
              </h2>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {project.methods.map((method, mIdx) => (
                  <div
                    key={mIdx}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-50 text-slate-800 border border-slate-200 hover:border-[#165B33] hover:bg-emerald-50/50 transition-colors"
                  >
                    <Microscope className="w-4 h-4 text-[#165B33]" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Associated Laboratory Protocols & SOPs */}
            {associatedProtocols.length > 0 && (
              <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 shadow-2xs space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#165B33]">
                      <FlaskConical className="w-4 h-4" />
                      <span>Reproducibility &amp; Open Science</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                      Standard Operating Procedures &amp; Bench Protocols
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 hidden sm:inline-block">
                    {associatedProtocols.length} Available SOP{associatedProtocols.length > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {associatedProtocols.map((proto) => (
                    <div
                      key={proto.id}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#165B33]/60 transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#165B33] font-mono">
                            {proto.categoryLabel}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 font-mono flex items-center gap-1">
                            <FileText className="w-3 h-3 text-blue-600" />
                            <span>{proto.fileSize}</span>
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 leading-snug">
                          {proto.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {proto.description}
                        </p>
                      </div>

                      <a
                        href={proto.downloadUrl}
                        download
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#165B33] bg-white hover:bg-[#165B33] hover:text-white border border-emerald-200 hover:border-[#165B33] transition-all shadow-2xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Protocol (.DOCX)</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags and Taxonomy */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
                Taxonomy &amp; Keywords:
              </span>
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-white text-slate-600 border border-slate-200 shadow-2xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>

          {/* ================= RIGHT / SIDEBAR COLUMN (4 cols) ================= */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* Project Metadata Box */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-2xs space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-extrabold text-base text-[#0f172a] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#165B33]" />
                  <span>Project Metadata</span>
                </h3>
                <span className="text-[10px] font-mono uppercase bg-slate-100 px-2.5 py-1 rounded-full text-slate-600 font-bold">
                  Verified
                </span>
              </div>

              {metadata && (
                <div className="space-y-4 text-xs">
                  
                  {/* Investigative Focus */}
                  <div className="space-y-1">
                    <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                      Investigative Focus:
                    </span>
                    <p className="font-semibold text-slate-900 leading-snug">
                      {metadata.investigativeFocus}
                    </p>
                  </div>

                  {/* Target Pathogens / Organisms */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                      Target Pathogens / Organisms:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {metadata.targetOrganisms.map((org, oIdx) => (
                        <span key={oIdx} className="px-2 py-0.5 rounded bg-emerald-50 text-[#165B33] font-semibold">
                          {org}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Model Systems */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                      Model Systems Used:
                    </span>
                    <ul className="space-y-1 text-slate-700">
                      {metadata.modelSystems.map((sys, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#165B33]" />
                          <span>{sys}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instruments & Tools */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                      Core Instruments &amp; Software:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {metadata.toolsAndInstruments.map((tool, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Lead PI */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                      Laboratory Leadership:
                    </span>
                    <p className="font-bold text-[#165B33]">
                      {metadata.leadPI}
                    </p>
                  </div>

                  {/* Funding support */}
                  {metadata.fundingSupport && (
                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                        Funding Grant:
                      </span>
                      <p className="font-semibold text-slate-700">
                        {metadata.fundingSupport}
                      </p>
                    </div>
                  )}

                </div>
              )}

            </div>

            {/* Collaborate / Join CTA Box */}
            <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-3xl border border-emerald-200 p-6 sm:p-7 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#165B33] text-white flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base text-[#0f172a]">
                  Collaborate or Join This Project
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We welcome enthusiastic graduate researchers, postdocs, and institutional collaborators with interest in this domain.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href="/apply"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#165B33] hover:bg-[#114929] text-white text-xs font-bold shadow-xs transition-colors"
                >
                  <span>Apply to Join Research Wing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/collaborations"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
                >
                  <span>Institutional Collaboration</span>
                </Link>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Related Research Resources:
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/publications" className="text-[#165B33] font-bold hover:underline flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Related Peer-Reviewed Papers</span>
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-slate-600 font-semibold hover:text-[#165B33] flex items-center gap-1.5">
                    <Dna className="w-3.5 h-3.5" />
                    <span>Meet the Investigating Research Team</span>
                  </Link>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </main>

    </div>
  );
}
