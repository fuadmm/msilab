import { CURRENT_MEMBERS, ALUMNI_DATA, PI_DATA } from "./team";
import { PROJECTS_DATA } from "./projects";
import { PUBLICATIONS_DATA } from "./publications";
import { INSTRUMENTS_DATA, RESEARCH_PILLARS } from "./research";
import { PROTOCOLS_DATA } from "./protocols";
import { NEWS_DATA } from "./news";
import { COLLABORATIONS_DATA } from "./collaborations";

export type SearchCategory = "All" | "People" | "Projects" | "Publications" | "Instruments" | "Protocols" | "Pages";

export interface SearchItem {
  id: string;
  title: string;
  category: "People" | "Projects" | "Publications" | "Instruments" | "Protocols" | "Pages";
  description: string;
  href: string;
  badge?: string;
  tags?: string[];
}

export function getAllSearchItems(): SearchItem[] {
  const items: SearchItem[] = [];

  // 1. Static Pages & Sections
  items.push(
    {
      id: "page-home",
      title: "MSI Lab Home",
      category: "Pages",
      description: "Laboratory of Molecular & Structural Immunology portal, research overview, PI welcome and key metrics.",
      href: "/",
      badge: "Portal",
      tags: ["home", "main", "welcome", "chittagong", "immunology", "bmb", "cu"]
    },
    {
      id: "page-facilities",
      title: "Instruments & Facilities",
      category: "Pages",
      description: "High-precision instrumentation suite including HPLC, refrigerated centrifuges, qPCR, biosafety cabinets.",
      href: "/facilities",
      badge: "Facilities",
      tags: ["facilities", "equipment", "instruments", "hplc", "centrifuge", "qpcr"]
    },
    {
      id: "page-instrument-service",
      title: "Instrument Usage Application Form",
      category: "Pages",
      description: "Online application form for researchers and institutions to request sample analysis & usage of state-of-the-art instruments.",
      href: "/facilities/service-request",
      badge: "Application",
      tags: ["instruments", "application", "form", "service", "booking", "cytoflex", "hplc", "qpcr", "ngs", "freeze dryer", "usage", "facilities"]
    },
    {
      id: "page-projects",
      title: "Research Projects",
      category: "Pages",
      description: "Investigating Dengue seroprevalence, SARS-CoV-2 RBD variants, Chikungunya, and recombinant protein engineering.",
      href: "/projects",
      badge: "Research",
      tags: ["research", "projects", "dengue", "covid", "chikungunya", "vaccinology"]
    },
    {
      id: "page-people",
      title: "People & Lab Members",
      category: "Pages",
      description: "Principal Investigator, doctoral fellows, postgraduate researchers, undergraduate fellows, and global alumni.",
      href: "/team",
      badge: "Team",
      tags: ["team", "people", "members", "pi", "faculty", "students", "scholars"]
    },
    {
      id: "page-publications",
      title: "Publications & Citations",
      category: "Pages",
      description: "Peer-reviewed papers in Virology, Frontiers, PLOS, Cureus, Nature journals, and patents with Google Scholar metrics.",
      href: "/publications",
      badge: "Research Output",
      tags: ["publications", "papers", "citations", "scholar", "articles", "journals", "patents"]
    },
    {
      id: "page-collaborations",
      title: "Collaborations & Strategic Partnerships",
      category: "Pages",
      description: "Research alliances with ICDDR,B, BFRI, AMCC, Kumamoto University, and international health agencies.",
      href: "/collaborations",
      badge: "Alliances",
      tags: ["collaborations", "partners", "institutes", "icddrb", "bfri", "kumamoto"]
    },
    {
      id: "page-protocols",
      title: "Wet-Lab Protocols & SOPs",
      category: "Pages",
      description: "11 bench-verified Standard Operating Procedures for RNA extraction, RT-qPCR, protein expression, and ELISA.",
      href: "/protocols",
      badge: "Bench SOPs",
      tags: ["protocols", "sops", "wet-lab", "methods", "extraction", "purification", "assays"]
    },
    {
      id: "page-objectives",
      title: "Mission, Vision & Research Objectives",
      category: "Pages",
      description: "Strategic scientific objectives: arboviral surveillance, structural vaccinology, host-pathogen interactions.",
      href: "/objectives",
      badge: "Roadmap",
      tags: ["objectives", "mission", "vision", "roadmap", "goals", "strategy"]
    },
    {
      id: "page-gallery",
      title: "Lab Gallery & Visual Archives",
      category: "Pages",
      description: "Photo archives of laboratory facilities, field research expeditions, team seminars, and instrument suites.",
      href: "/gallery",
      badge: "Media",
      tags: ["gallery", "photos", "facilities", "fieldwork", "seminars", "pictures"]
    },
    {
      id: "page-news",
      title: "News & Events",
      category: "Pages",
      description: "Lab seminars, research grants (World Bank / HEAT-11009-CU), conference presentations, and announcements.",
      href: "/news",
      badge: "Events",
      tags: ["news", "events", "announcements", "seminars", "heat", "grants"]
    },
    {
      id: "page-apply",
      title: "Join Us & Open Positions",
      category: "Pages",
      description: "Recruitment criteria for doctoral candidates, postgraduate fellows, undergraduate trainees, and internship applications.",
      href: "/apply",
      badge: "Careers",
      tags: ["apply", "join", "recruitment", "positions", "admissions", "internships", "vacancies"]
    }
  );

  // 2. People (PI, Current Members, Alumni)
  items.push({
    id: "pi-profile",
    title: PI_DATA.name,
    category: "People",
    description: `${PI_DATA.title} — ${PI_DATA.institution}. Research in structural vaccinology, viral envelope antigens, protein engineering.`,
    href: "/team/pi",
    badge: "Principal Investigator",
    tags: ["pi", "director", "islam", "monirul", PI_DATA.contact.email, "immunology", "biochemistry"]
  });

  items.push(
    {
      id: "people-doctoral",
      title: "Doctoral Fellows (Ph.D. Candidates)",
      category: "People",
      description: "Doctoral scholars, Ph.D. candidates, and clinical physician researchers at MSI Lab.",
      href: "/team/doctoral",
      badge: "PhD",
      tags: ["doctoral", "phd", "candidate", "fellows", "scholars", "thesis"]
    },
    {
      id: "people-masters",
      title: "Master's Fellows & Graduate Scholars (M.Sc.)",
      category: "People",
      description: "Postgraduate scholars from Biochemistry & Molecular Biology conducting M.Sc. thesis research.",
      href: "/team/masters",
      badge: "Masters",
      tags: ["masters", "msc", "graduate", "postgraduate", "thesis", "ms"]
    },
    {
      id: "people-staff",
      title: "Research Assistants & Laboratory Staff",
      category: "People",
      description: "Laboratory manager, project leads, research assistants, and operations staff executing World Bank HEAT grant research.",
      href: "/team/staff",
      badge: "Staff & RAs",
      tags: ["staff", "assistant", "research assistant", "manager", "mushtak", "heat", "operations"]
    },
    {
      id: "people-undergrad",
      title: "Undergraduate Research Fellows (B.Sc.)",
      category: "People",
      description: "Undergraduate student researchers and interns receiving hands-on wet-lab mentorship and molecular cloning training.",
      href: "/team/undergraduate",
      badge: "Undergrad",
      tags: ["undergrad", "undergraduate", "bsc", "bachelors", "interns", "students"]
    }
  );

  CURRENT_MEMBERS.forEach((m) => {
    items.push({
      id: `member-${m.id}`,
      title: m.name,
      category: "People",
      description: `${m.role}${m.batch ? ` · ${m.batch}` : m.cohort ? ` · ${m.cohort}` : ""}. Focus: ${m.researchInterest}`,
      href: `/team/${m.id}`,
      badge: m.category === "doctoral" ? "PhD Fellow" : m.category === "masters" ? "MSc Researcher" : "BSc Fellow",
      tags: [
        m.name.toLowerCase(),
        m.role.toLowerCase(),
        m.email ? m.email.toLowerCase() : "",
        m.personalEmail ? m.personalEmail.toLowerCase() : "",
        m.institutionalEmail ? m.institutionalEmail.toLowerCase() : "",
        m.batch ? m.batch.toLowerCase() : "",
        m.cohort ? m.cohort.toLowerCase() : "",
        m.category
      ].filter(Boolean)
    });
  });

  ALUMNI_DATA.forEach((a) => {
    items.push({
      id: `alumni-${a.id}`,
      title: a.name,
      category: "People",
      description: `Alumni (${a.formerRole}) — Now ${a.currentPosition} at ${a.currentInstitution}${a.location ? `, ${a.location}` : ""}.`,
      href: `/team/${a.id}`,
      badge: "Alumni Network",
      tags: [a.name.toLowerCase(), a.currentInstitution.toLowerCase(), (a.location || "").toLowerCase(), "alumni"]
    });
  });

  // 3. Research Projects & Pillars
  PROJECTS_DATA.forEach((p) => {
    items.push({
      id: `project-${p.slug}`,
      title: p.title,
      category: "Projects",
      description: p.shortDescription,
      href: `/projects/${p.slug}`,
      badge: p.category,
      tags: [
        p.title.toLowerCase(),
        p.slug.toLowerCase(),
        ...(p.tags || []).map(t => t.toLowerCase()),
        ...(p.methods || []).map(m => m.toLowerCase()),
        p.category.toLowerCase()
      ]
    });
  });

  RESEARCH_PILLARS.forEach((rp) => {
    items.push({
      id: `pillar-${rp.id}`,
      title: rp.title,
      category: "Projects",
      description: rp.shortDesc,
      href: "/projects",
      badge: "Research Pillar",
      tags: [rp.title.toLowerCase(), ...(rp.keyAspects || []).map(k => k.toLowerCase())]
    });
  });

  // 4. Instruments & Facilities
  INSTRUMENTS_DATA.forEach((inst) => {
    items.push({
      id: `instrument-${inst.id}`,
      title: `${inst.name} (${inst.model})`,
      category: "Instruments",
      description: `${inst.brand} ${inst.category}. ${inst.purpose} Specs: ${inst.specs}`,
      href: `/facilities#${inst.id}`,
      badge: inst.brand,
      tags: [
        inst.name.toLowerCase(),
        inst.model.toLowerCase(),
        inst.brand.toLowerCase(),
        inst.category.toLowerCase(),
        ...(inst.techniques || []).map(t => t.toLowerCase())
      ]
    });
  });

  // 5. Protocols
  PROTOCOLS_DATA.forEach((proto) => {
    items.push({
      id: `protocol-${proto.id}`,
      title: proto.title,
      category: "Protocols",
      description: `${proto.categoryLabel}. ${proto.description} Key equipment: ${proto.equipment.join(", ")}`,
      href: `/protocols#${proto.id}`,
      badge: proto.categoryLabel,
      tags: [
        proto.title.toLowerCase(),
        proto.category.toLowerCase(),
        ...(proto.equipment || []).map(e => e.toLowerCase()),
        ...(proto.keySteps || []).map(s => s.toLowerCase())
      ]
    });
  });

  // 6. Publications
  PUBLICATIONS_DATA.forEach((pub) => {
    items.push({
      id: `pub-${pub.id}`,
      title: pub.title,
      category: "Publications",
      description: `${pub.authors.join(", ")} (${pub.year}). ${pub.journal}${pub.doi ? ` · DOI: ${pub.doi}` : ""}`,
      href: `/publications#${pub.id}`,
      badge: `${pub.year} · ${pub.journal}`,
      tags: [
        pub.title.toLowerCase(),
        pub.journal.toLowerCase(),
        ...pub.authors.map(a => a.toLowerCase()),
        ...pub.topics.map(t => t.toLowerCase()),
        String(pub.year)
      ]
    });
  });

  // 7. News & Events
  NEWS_DATA.forEach((news) => {
    items.push({
      id: `news-${news.id}`,
      title: news.title,
      category: "Pages",
      description: `${news.date} · ${news.category}. ${news.summary}`,
      href: `/news#${news.id}`,
      badge: news.category,
      tags: [news.title.toLowerCase(), news.category.toLowerCase(), news.date.toLowerCase(), ...(news.tags || []).map(t => t.toLowerCase())]
    });
  });

  // 8. Collaborations
  COLLABORATIONS_DATA.forEach((collab) => {
    items.push({
      id: `collab-${collab.id}`,
      title: collab.name,
      category: "Pages",
      description: `${collab.location} · ${collab.institution}. ${collab.description}`,
      href: "/collaborations",
      badge: "Partner",
      tags: [collab.name.toLowerCase(), collab.institution.toLowerCase(), collab.location.toLowerCase(), ...(collab.scope || []).map(s => s.toLowerCase()), "collaboration"]
    });
  });

  return items;
}

export function searchLab(query: string, selectedCategory: SearchCategory = "All"): SearchItem[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return [];

  const allItems = getAllSearchItems();
  const tokens = clean.split(/\s+/).filter(Boolean);

  return allItems
    .filter((item) => {
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }

      const titleLower = item.title.toLowerCase();
      const descLower = item.description.toLowerCase();
      const tagsJoined = (item.tags || []).join(" ");
      const searchable = `${titleLower} ${descLower} ${tagsJoined} ${item.badge?.toLowerCase() || ""}`;

      // All search tokens must match somewhere in the item
      return tokens.every((token) => searchable.includes(token));
    })
    .sort((a, b) => {
      // Prioritize title starts-with or contains
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();

      const aStarts = aTitle.startsWith(clean) ? 2 : aTitle.includes(clean) ? 1 : 0;
      const bStarts = bTitle.startsWith(clean) ? 2 : bTitle.includes(clean) ? 1 : 0;

      if (aStarts !== bStarts) return bStarts - aStarts;

      // Prioritize Pages and People for general keywords
      const priorityOrder: Record<string, number> = {
        Pages: 6,
        People: 5,
        Projects: 4,
        Instruments: 3,
        Protocols: 2,
        Publications: 1
      };

      return (priorityOrder[b.category] || 0) - (priorityOrder[a.category] || 0);
    })
    .slice(0, 40); // Cap results to top 40 best matches
}
