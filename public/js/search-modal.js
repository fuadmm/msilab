/**
 * MSI Lab — Universal Search Modal
 * Embedded interactive search for all MSI Lab pages
 */
(function() {
  const SEARCH_ITEMS = [
  {
    "id": "page-home",
    "title": "MSI Lab Home",
    "category": "Pages",
    "description": "Laboratory of Molecular & Structural Immunology portal, research overview, PI welcome and key metrics.",
    "href": "index.html",
    "badge": "Portal",
    "tags": [
      "home",
      "main",
      "welcome",
      "chittagong",
      "immunology",
      "bmb",
      "cu"
    ]
  },
  {
    "id": "page-facilities",
    "title": "Instruments & Facilities",
    "category": "Pages",
    "description": "High-precision instrumentation suite including HPLC, refrigerated centrifuges, qPCR, biosafety cabinets.",
    "href": "facilities.html",
    "badge": "Facilities",
    "tags": [
      "facilities",
      "equipment",
      "instruments",
      "hplc",
      "centrifuge",
      "qpcr"
    ]
  },
  {
    "id": "page-instrument-service",
    "title": "Instrument Usage Application Form",
    "category": "Pages",
    "description": "Application form for research service, sample analysis, and operational usage of state-of-the-art instruments.",
    "href": "facilities-apply.html",
    "badge": "Application",
    "tags": [
      "instruments",
      "application",
      "form",
      "service",
      "booking",
      "cytoflex",
      "hplc",
      "qpcr",
      "ngs",
      "freeze dryer",
      "usage",
      "facilities"
    ]
  },
  {
    "id": "page-projects",
    "title": "Research Projects",
    "category": "Pages",
    "description": "Investigating Dengue seroprevalence, SARS-CoV-2 RBD variants, Chikungunya, and recombinant protein engineering.",
    "href": "projects.html",
    "badge": "Research",
    "tags": [
      "research",
      "projects",
      "dengue",
      "covid",
      "chikungunya",
      "vaccinology"
    ]
  },
  {
    "id": "page-people",
    "title": "People & Lab Members",
    "category": "Pages",
    "description": "Principal Investigator, doctoral fellows, postgraduate researchers, undergraduate fellows, and global alumni.",
    "href": "team.html",
    "badge": "Team",
    "tags": [
      "team",
      "people",
      "members",
      "pi",
      "faculty",
      "students",
      "scholars"
    ]
  },
  {
    "id": "page-publications",
    "title": "Publications & Citations",
    "category": "Pages",
    "description": "Peer-reviewed papers in Virology, Frontiers, PLOS, Cureus, Nature journals, and patents with Google Scholar metrics.",
    "href": "publications.html",
    "badge": "Research Output",
    "tags": [
      "publications",
      "papers",
      "citations",
      "scholar",
      "articles",
      "journals",
      "patents"
    ]
  },
  {
    "id": "page-collaborations",
    "title": "Collaborations & Strategic Partnerships",
    "category": "Pages",
    "description": "Research alliances with ICDDR,B, BFRI, AMCC, Kumamoto University, and international health agencies.",
    "href": "collaborations.html",
    "badge": "Alliances",
    "tags": [
      "collaborations",
      "partners",
      "institutes",
      "icddrb",
      "bfri",
      "kumamoto"
    ]
  },
  {
    "id": "page-protocols",
    "title": "Wet-Lab Protocols & SOPs",
    "category": "Pages",
    "description": "11 bench-verified Standard Operating Procedures for RNA extraction, RT-qPCR, protein expression, and ELISA.",
    "href": "protocols.html",
    "badge": "Bench SOPs",
    "tags": [
      "protocols",
      "sops",
      "wet-lab",
      "methods",
      "extraction",
      "purification",
      "assays"
    ]
  },
  {
    "id": "page-objectives",
    "title": "Mission, Vision & Research Objectives",
    "category": "Pages",
    "description": "Strategic scientific objectives: arboviral surveillance, structural vaccinology, host-pathogen interactions.",
    "href": "objectives.html",
    "badge": "Roadmap",
    "tags": [
      "objectives",
      "mission",
      "vision",
      "roadmap",
      "goals",
      "strategy"
    ]
  },
  {
    "id": "page-gallery",
    "title": "Lab Gallery & Visual Archives",
    "category": "Pages",
    "description": "Photo archives of laboratory facilities, field research expeditions, team seminars, and instrument suites.",
    "href": "gallery.html",
    "badge": "Media",
    "tags": [
      "gallery",
      "photos",
      "facilities",
      "fieldwork",
      "seminars",
      "pictures"
    ]
  },
  {
    "id": "page-news",
    "title": "News & Events",
    "category": "Pages",
    "description": "Lab seminars, research grants (World Bank / HEAT-11009-CU), conference presentations, and announcements.",
    "href": "news.html",
    "badge": "Events",
    "tags": [
      "news",
      "events",
      "announcements",
      "seminars",
      "heat",
      "grants"
    ]
  },
  {
    "id": "page-apply",
    "title": "Join Us & Open Positions",
    "category": "Pages",
    "description": "Recruitment criteria for doctoral candidates, postgraduate fellows, undergraduate trainees, and internship applications.",
    "href": "apply.html",
    "badge": "Careers",
    "tags": [
      "apply",
      "join",
      "recruitment",
      "positions",
      "admissions",
      "internships",
      "vacancies"
    ]
  },
  {
    "id": "pi-monirul",
    "title": "Prof. Dr. Mohammad Monirul Islam",
    "category": "People",
    "description": "Professor & Principal Investigator, Department of Biochemistry & Molecular Biology, University of Chittagong. Structural vaccinology and antibody engineering.",
    "href": "member.html?id=dr-m-monirul-islam",
    "badge": "Principal Investigator",
    "tags": [
      "pi",
      "director",
      "islam",
      "monirul",
      "biochemistry",
      "chittagong",
      "prof"
    ]
  },
  {
    "id": "doc-rafi",
    "title": "Dr. Md. Aqiv Javed (Rafi)",
    "category": "People",
    "description": "Doctoral Fellow (Ph.D. Candidate) & Consultant (ENT), BCS (Health). Sensorineural hearing loss molecular pathways, auditory biomarkers.",
    "href": "member.html?id=dr-md-aqiv-javed",
    "badge": "Doctoral Fellow",
    "tags": [
      "aqiv",
      "javed",
      "rafi",
      "ent",
      "doctoral",
      "phd"
    ]
  },
  {
    "id": "doc-shamsun",
    "title": "Dr. Shamsun Nahar Bintha Mannan",
    "category": "People",
    "description": "Doctoral Fellow (Ph.D. Candidate) & Associate Professor & Head, Dept. of Dermatology & Venereology (CMOSHMC). Multiplex PCR STIs molecular detection.",
    "href": "member.html?id=dr-shamsun-nahar",
    "badge": "Doctoral Fellow",
    "tags": [
      "shamsun",
      "nahar",
      "bintha",
      "binte",
      "mannan",
      "cmoshmc",
      "dermatology",
      "venereology",
      "mph",
      "ddv",
      "sti",
      "multiplex pcr",
      "doctoral",
      "phd"
    ]
  },
  {
    "id": "msc-fuad",
    "title": "Mohammad Mushtak Fuad",
    "category": "People",
    "description": "Lab Manager & Research Assistant (MS Session 2023–2024). HEAT-11009-CU lead, structural vaccinology, Dengue ED3 epitope mapping.",
    "href": "member.html?id=mushtak-fuad",
    "badge": "Lab Manager",
    "tags": [
      "mushtak",
      "fuad",
      "manager",
      "heat",
      "dengue",
      "ed3",
      "ms session 2023-2024"
    ]
  },
  {
    "id": "msc-sadia",
    "title": "Sadia Binte Alam",
    "category": "People",
    "description": "Postgraduate Research Assistant (MS Session 2023–2024). SARS-CoV-2 variant neutralization dynamics, ELISA serology.",
    "href": "member.html?id=sadia-binte-alam",
    "badge": "MSc Scholar",
    "tags": [
      "sadia",
      "binte",
      "alam",
      "covid",
      "elisa",
      "ms session 2023-2024"
    ]
  },
  {
    "id": "msc-refath",
    "title": "Refath Alam Erin",
    "category": "People",
    "description": "Postgraduate Research Assistant (MS Session 2023–2024). JEV-ED3 immunogenicity, wild-type & destabilizing mutants (C5I, F21A), cobalt adjuvant, and murine antibody kinetics.",
    "href": "member.html?id=refath-alam-erin",
    "badge": "MSc Scholar",
    "tags": [
      "refath",
      "erin",
      "jev",
      "japanese encephalitis",
      "ed3",
      "vaccine",
      "immunogenicity",
      "mutants",
      "elisa",
      "rt-qpcr",
      "msc",
      "ms session 2023-2024"
    ]
  },
  {
    "id": "msc-sarvani",
    "title": "Sarvani Datta",
    "category": "People",
    "description": "Graduate Research Assistant (MS Session 2024–2025). Comparative analyses of agarwood formation, Aquilaria histopathology, and GC-MS resin profiling.",
    "href": "member.html?id=sarvani-datta",
    "badge": "MSc Scholar",
    "tags": [
      "sarvani",
      "datta",
      "agarwood",
      "aquilaria",
      "resin",
      "gc-ms",
      "sesquiterpenes",
      "chromones",
      "histopathology",
      "fusarium",
      "ms session 2024-2025"
    ]
  },
  {
    "id": "msc-jafrina",
    "title": "Jafrina Akter Eva",
    "category": "People",
    "description": "Graduate Research Assistant (MS Session 2024–2025). Artificial agarwood induction pathways, defense gene cascades (WRKY1, LOX1, MAPK3), sesquiterpene biosynthesis, and RT-qPCR.",
    "href": "member.html?id=jafrina-akter-eva",
    "badge": "MSc Scholar",
    "tags": [
      "jafrina",
      "akter",
      "eva",
      "agarwood",
      "aquilaria",
      "pathways",
      "rt-qpcr",
      "qpcr",
      "wrky1",
      "sesquiterpene",
      "ctab",
      "ms session 2024-2025"
    ]
  },
  {
    "id": "bsc-misbah",
    "title": "Misbah Ul Islam",
    "category": "People",
    "description": "Undergraduate Research Assistant (Session 2021–2022). Recombinant plasmid design, bacterial protein expression.",
    "href": "member.html?id=misbah-ul-islam",
    "badge": "Session 2021–2022",
    "tags": [
      "misbah",
      "islam",
      "undergrad",
      "bsc",
      "plasmid"
    ]
  },
  {
    "id": "bsc-arifur",
    "title": "Mohammad Arifur Rahman",
    "category": "People",
    "description": "Undergraduate Research Assistant (Session 2021–2022). Immunoassay protocols, gel filtration, SARS-CoV-2 surveillance.",
    "href": "member.html?id=mohammad-arifur-rahman",
    "badge": "Session 2021–2022",
    "tags": [
      "arifur",
      "rahman",
      "undergrad",
      "bsc",
      "immunoassay"
    ]
  },
  {
    "id": "bsc-mim",
    "title": "Nusrat Jahan Mim",
    "category": "People",
    "description": "Undergraduate Research Assistant (Session 2021–2022). Viral antigen stability testing, peptide solubility assays.",
    "href": "member.html?id=nusrat-jahan-mim",
    "badge": "Session 2021–2022",
    "tags": [
      "nusrat",
      "jahan",
      "mim",
      "undergrad",
      "bsc"
    ]
  },
  {
    "id": "bsc-faiza",
    "title": "Sadiya Rahman Faiza",
    "category": "People",
    "description": "Undergraduate Research Assistant (Session 2021–2022). Host cytokine expression profiling, molecular biology protocols.",
    "href": "member.html?id=sadiya-rahman-faiza",
    "badge": "Session 2021–2022",
    "tags": [
      "sadiya",
      "faiza",
      "undergrad",
      "bsc",
      "cytokine"
    ]
  },
  {
    "id": "bsc-shuvo",
    "title": "Md. Shourov Hossain Shuvo",
    "category": "People",
    "description": "Undergraduate Research Assistant (Session 2022–2023). Molecular immunology, structural biology, recombinant DNA technology.",
    "href": "member.html?id=md-shourov-hossain-shuvo",
    "badge": "Session 2022–2023",
    "tags": [
      "shourov",
      "hossain",
      "shuvo",
      "undergrad",
      "bsc",
      "session 2022-2023"
    ]
  },
  {
    "id": "bsc-mahina",
    "title": "Mahina Mostafa Chowdhury",
    "category": "People",
    "description": "Undergraduate Research Assistant (Session 2022–2023). Biomolecular chemistry, protein biochemistry, viral pathogenesis.",
    "href": "member.html?id=mahina-mostafa-chowdhury",
    "badge": "Session 2022–2023",
    "tags": [
      "mahina",
      "mostafa",
      "chowdhury",
      "undergrad",
      "bsc",
      "session 2022-2023"
    ]
  },
  {
    "id": "bsc-nazia",
    "title": "Nazia Sultana",
    "category": "People",
    "description": "Undergraduate Research Assistant (Session 2022–2023). Immunological signaling pathways, antibody engineering, molecular genetics.",
    "href": "member.html?id=nazia-sultana",
    "badge": "Session 2022–2023",
    "tags": [
      "nazia",
      "sultana",
      "undergrad",
      "bsc",
      "session 2022-2023"
    ]
  },
  {
    "id": "bsc-eva",
    "title": "Shanjida Islam Eva",
    "category": "People",
    "description": "Undergraduate Research Assistant (Session 2022–2023). Vaccine formulation, clinical immunology, protein purification techniques.",
    "href": "member.html?id=shanjida-islam-eva",
    "badge": "Session 2022–2023",
    "tags": [
      "shanjida",
      "islam",
      "eva",
      "undergrad",
      "bsc",
      "session 2022-2023"
    ]
  },
  {
    "id": "alumni-mahib",
    "title": "Dr. Mamunur Rashid Mahib",
    "category": "People",
    "description": "Alumni (Former Postdoctoral & Senior Fellow) — Now Associate Professor, University of Chittagong.",
    "href": "member.html?id=mamunur-rashid",
    "badge": "Alumni",
    "tags": [
      "mamunur",
      "rashid",
      "mahib",
      "alumni",
      "faculty"
    ]
  },
  {
    "id": "alumni-ayoub-khan",
    "title": "Md. Ayoub Khan",
    "category": "People",
    "description": "Alumni (Graduate Research Assistant, Non-Thesis) — Now Office Manager, HEAT-11009-CU-sub-project, Dept. of Biochemistry & Molecular Biology, CU.",
    "href": "member.html?id=md-ayoub-khan",
    "badge": "Alumni",
    "tags": [
      "ayoub",
      "khan",
      "ayub",
      "md ayoub khan",
      "alumni",
      "heat",
      "dengue",
      "din islam",
      "non thesis"
    ]
  },
  {
    "id": "nafsoon-rahman",
    "name": "Dr. Nafsoon Rahman",
    "role": "Assistant Professor · Former Doctoral Fellow & Co-Inventor (WO2019031446)",
    "category": "People",
    "description": "Assistant Professor, Dept. of Biochemistry & Molecular Biology, Jagannath University (JnU) — Co-Inventor of WO2019031446.",
    "href": "member.html?id=nafsoon-rahman",
    "badge": "Alumni",
    "tags": [
      "nafsoon",
      "rahman",
      "dr nafsoon rahman",
      "alumni",
      "jnu",
      "patent",
      "dengue"
    ]
  },
  {
    "id": "proj-dengue-seroprevalence-genomic-surveillance",
    "title": "Dengue Seroprevalence, Mutational Dynamics & Clinical Correlation",
    "category": "Projects",
    "description": "Comprehensive surveillance correlating clinical disease severity with DENV lineage shifts, host seroprevalence, and in vivo murine challenge models.",
    "href": "projects.html#dengue-seroprevalence-genomic-surveillance",
    "badge": "Viral Immunology & Molecular Epidemiology",
    "tags": [
      "dengue seroprevalence, mutational dynamics & clinical correlation",
      "dengue-seroprevalence-genomic-surveillance",
      "dengue (denv)",
      "seroprevalence",
      "in vivo murine models",
      "clinical correlation",
      "viral genomics"
    ]
  },
  {
    "id": "proj-chikungunya-genomics-pathogenesis",
    "title": "Chikungunya Genetic Variations, Mutational Trajectories & Disease Severity",
    "category": "Projects",
    "description": "Investigating CHIKV structural and non-structural polyprotein mutations, mapping lineage divergences, and dissecting their mechanistic links to acute vs. chronic arthralgia.",
    "href": "projects.html#chikungunya-genomics-pathogenesis",
    "badge": "Viral Genomics & Pathogenesis",
    "tags": [
      "chikungunya genetic variations, mutational trajectories & disease severity",
      "chikungunya-genomics-pathogenesis",
      "chikungunya (chikv)",
      "mutational profiling",
      "severity biomarkers",
      "molecular epidemiology"
    ]
  },
  {
    "id": "proj-sars-cov-2-epitope-escape-structural-biology",
    "title": "Atomic-Scale Structural Profiling of SARS-CoV-2 Immune Evasion & Receptor Binding",
    "category": "Projects",
    "description": "High-resolution computational docking and thermodynamic profiling elucidating the structural biophysics of spike mutation-driven antibody evasion and ACE2 binding affinity.",
    "href": "projects.html#sars-cov-2-epitope-escape-structural-biology",
    "badge": "Computational Structural Biology",
    "tags": [
      "atomic-scale structural profiling of sars-cov-2 immune evasion & receptor binding",
      "sars-cov-2-epitope-escape-structural-biology",
      "sars-cov-2",
      "haddock 2.4",
      "prodigy",
      "molecular docking",
      "epitope mapping",
      "structural biophysics"
    ]
  },
  {
    "id": "proj-aquilaria-malaccensis-resin-induction",
    "title": "Molecular Mechanisms & Elicitor-Mediated Induction of Agarwood Resin in Aquilaria malaccensis",
    "category": "Projects",
    "description": "Elucidating the biochemical cascades, terpene synthase activation, and molecular pathways governing artificial agarwood oleoresin synthesis.",
    "href": "projects.html#aquilaria-malaccensis-resin-induction",
    "badge": "Plant Molecular Biology & Phytochemistry",
    "tags": [
      "molecular mechanisms & elicitor-mediated induction of agarwood resin in aquilaria malaccensis",
      "aquilaria-malaccensis-resin-induction",
      "aquilaria malaccensis",
      "agarwood induction",
      "sesquiterpene biosynthesis",
      "rt-qpcr",
      "gc-ms"
    ]
  },
  {
    "id": "proj-chimeric-pan-dengue-vaccine-design",
    "title": "Rational Immunogen Design of a Chimeric Multi-Epitope Pan-Dengue Vaccine",
    "category": "Projects",
    "description": "In silico structure-guided reverse vaccinology engineering chimeric immunogens capable of eliciting broad cross-neutralizing antibody titers across DENV-1–4 without ADE risk.",
    "href": "projects.html#chimeric-pan-dengue-vaccine-design",
    "badge": "Rational Vaccine Design & Immunoengineering",
    "tags": [
      "rational immunogen design of a chimeric multi-epitope pan-dengue vaccine",
      "chimeric-pan-dengue-vaccine-design",
      "dengue vaccine",
      "chimeric immunogen",
      "reverse vaccinology",
      "epitope scaffolding",
      "antibody-dependent enhancement (ade)"
    ]
  },
  {
    "id": "proj-jev-subunit-vaccine-murine-evaluation",
    "title": "Preclinical Immunogenicity & Protective Efficacy of a Recombinant JEV Subunit Vaccine",
    "category": "Projects",
    "description": "Development, expression, and in vivo murine immunogenicity assessment of novel Japanese Encephalitis Virus recombinant subunit candidates formulated with nano-adjuvants.",
    "href": "projects.html#jev-subunit-vaccine-murine-evaluation",
    "badge": "Translational Vaccinology & In Vivo Immunology",
    "tags": [
      "preclinical immunogenicity & protective efficacy of a recombinant jev subunit vaccine",
      "jev-subunit-vaccine-murine-evaluation",
      "japanese encephalitis virus (jev)",
      "subunit vaccine",
      "murine immunogenicity",
      "recombinant protein",
      "neutralizing titers"
    ]
  },
  {
    "id": "inst-centrifuge-haier",
    "title": "Haier Biomedical Benchtop High-Speed Refrigerated Centrifuge (LX-185T100R / LX-165T2R)",
    "category": "Instruments",
    "description": "Haier Biomedical Refrigerated Centrifuge. 18,500 rpm / 30,000×g, -20°C to +40°C temperature control, aerosol-tight biocontainment.",
    "href": "facilities.html#inst-centrifuge-haier",
    "badge": "Centrifuge",
    "tags": [
      "centrifuge",
      "haier",
      "refrigerated",
      "high-speed",
      "lx-185t100r",
      "lx-165t2r",
      "biocontainment"
    ]
  },
  {
    "id": "inst-hplc",
    "title": "Thermo Scientific Vanquish Flex UHPLC System",
    "category": "Instruments",
    "description": "Thermo Scientific UHPLC. Recombinant peptide purity determination, reverse-phase fractionation, viral antigen quality control.",
    "href": "facilities.html#inst-hplc",
    "badge": "HPLC",
    "tags": [
      "hplc",
      "uhplc",
      "vanquish",
      "thermo",
      "chromatography",
      "fractionation"
    ]
  },
  {
    "id": "inst-cytoflex",
    "title": "Beckman Coulter CytoFLEX Flow Cytometer",
    "category": "Instruments",
    "description": "Beckman Coulter CytoFLEX Research Flow Cytometer. Multiparametric single-cell immunophenotyping, high-sensitivity nanoparticle & extracellular vesicle resolution.",
    "href": "facilities.html#inst-cytoflex",
    "badge": "Flow Cytometer",
    "tags": [
      "cytoflex",
      "flow cytometry",
      "beckman",
      "phenotyping",
      "single cell",
      "immunology",
      "laser"
    ]
  },
  {
    "id": "inst-miniseq",
    "title": "Illumina MiniSeq Next-Generation Sequencing System",
    "category": "Instruments",
    "description": "Illumina MiniSeq Benchtop NGS System. Targeted viral whole-genome sequencing, lineage tracking (DENV variants, SARS-CoV-2 escape mutants), and multiplex gene panels.",
    "href": "facilities.html#inst-miniseq",
    "badge": "Next-Gen Sequencing",
    "tags": [
      "miniseq",
      "illumina",
      "ngs",
      "sequencing",
      "genomics",
      "sbs",
      "lineage tracking"
    ]
  },
  {
    "id": "inst-qpcr",
    "title": "Analytik Jena qTOWER³ G Real-Time PCR Thermal Cycler",
    "category": "Instruments",
    "description": "Analytik Jena Real-Time qPCR. 96-well quantitative viral load detection, multiplex diagnostics for Dengue and SARS-CoV-2.",
    "href": "facilities.html#inst-qpcr",
    "badge": "qPCR",
    "tags": [
      "qpcr",
      "analytik jena",
      "qtower",
      "real-time pcr",
      "viral load"
    ]
  },
  {
    "id": "inst-spectro",
    "title": "Thermo Scientific Evolution One Plus UV-Vis Spectrophotometer",
    "category": "Instruments",
    "description": "Thermo Scientific Spectrophotometer. Protein concentration determination (A280), nucleic acid purity ratios (A260/A280).",
    "href": "facilities.html#inst-spectro",
    "badge": "Spectrophotometer",
    "tags": [
      "spectrophotometer",
      "evolution one",
      "uv-vis",
      "a280",
      "purity"
    ]
  },
  {
    "id": "proto-qpcr",
    "title": "1-Step RT-qPCR Mastermix & Amplification Protocol",
    "category": "Protocols",
    "description": "Virology & Diagnostics SOP. RNase-free glassware preparation, primer-probe formulation, qTOWER³ G linear cycling.",
    "href": "protocols.html#proto-qpcr",
    "badge": "RT-qPCR",
    "tags": [
      "rt-qpcr",
      "qpcr",
      "amplification",
      "mastermix",
      "sop"
    ]
  },
  {
    "id": "proto-rna-blood",
    "title": "Extraction & Purification of Viral RNA from Whole Blood",
    "category": "Protocols",
    "description": "Isolating high-purity total and viral genomic RNA from human clinical whole blood samples.",
    "href": "protocols.html#proto-rna-blood",
    "badge": "RNA Extraction",
    "tags": [
      "rna",
      "blood",
      "extraction",
      "purification",
      "sop"
    ]
  },
  {
    "id": "proto-rna-serum",
    "title": "Extraction & Purification of Total RNA from Serum",
    "category": "Protocols",
    "description": "Standard operating procedure for spin-column isolation of cell-free viral and circulating total RNA from human or murine serum.",
    "href": "protocols.html#proto-rna-serum",
    "badge": "RNA Extraction",
    "tags": [
      "rna",
      "serum",
      "total rna",
      "extraction",
      "purification",
      "sop"
    ]
  },
  {
    "id": "proto-docking",
    "title": "Antigen-Antibody Docking & Interface Thermodynamics using HADDOCK 2.4",
    "category": "Protocols",
    "description": "Computational structural biophysics SOP. All-atom protein-protein complex docking, buried surface area calculations, and binding free energy predictions.",
    "href": "protocols.html#proto-docking",
    "badge": "Structural Docking",
    "tags": [
      "haddock",
      "docking",
      "structural biology",
      "prodigy",
      "interface",
      "thermodynamics",
      "sop"
    ]
  },
  {
    "id": "proto-flow",
    "title": "Flow Cytometry Immunophenotyping & Whole Blood RBC Lysis",
    "category": "Protocols",
    "description": "Cellular immunology SOP. Ammonium chloride whole-blood RBC lysis, fluorochrome-conjugated monoclonal staining, and CytoFLEX gating matrix.",
    "href": "protocols.html#proto-flow",
    "badge": "Flow Cytometry",
    "tags": [
      "flow cytometry",
      "rbc lysis",
      "cytoflex",
      "immunophenotyping",
      "antibodies",
      "sop"
    ]
  },
  {
    "id": "proto-elisa",
    "title": "Indirect Serological ELISA for Antibody Titers",
    "category": "Protocols",
    "description": "Quantifying IgG and IgM antibody endpoint titers against recombinant envelope domain antigens.",
    "href": "protocols.html#proto-elisa",
    "badge": "ELISA",
    "tags": [
      "elisa",
      "antibody",
      "serology",
      "titer",
      "igg",
      "igm"
    ]
  }
];

  const CATEGORIES = ["All", "People", "Projects", "Instruments", "Protocols", "Pages"];

  let isOpen = false;
  let currentCategory = "All";
  let activeIndex = 0;
  let currentResults = [];

  // Create Modal DOM
  function createModalDOM() {
    if (document.getElementById('msi-search-modal-root')) return;

    const root = document.createElement('div');
    root.id = 'msi-search-modal-root';
    root.style.display = 'none';
    root.innerHTML = `
      <div id="msi-search-backdrop" style="position: fixed; inset: 0; background: rgba(15, 23, 42, 0.65); backdrop-filter: blur(4px); z-index: 99999; display: flex; align-items: flex-start; justify-content: center; padding: 2rem 1rem;">
        <div id="msi-search-container" style="background: #ffffff; width: 100%; max-width: 720px; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); border: 1px solid #e2e8f0; overflow: hidden; display: flex; flex-direction: column; max-height: 85vh; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          
          <!-- Header -->
          <div style="padding: 1.25rem; background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
            <div style="position: relative; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#165B33" stroke-width="2.5" style="position: absolute; left: 14px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input id="msi-search-input" type="text" placeholder="Search lab members, projects, instruments, protocols..." style="width: 100%; padding: 0.75rem 4.5rem 0.75rem 2.85rem; font-size: 1rem; border-radius: 10px; border: 1px solid #cbd5e1; outline: none; background: #ffffff; color: #0f172a;" autocomplete="off" />
              <div style="position: absolute; right: 12px; display: flex; align-items: center; gap: 6px;">
                <kbd style="font-size: 10px; font-family: monospace; background: #f1f5f9; padding: 3px 6px; border-radius: 4px; border: 1px solid #cbd5e1; color: #64748b;">ESC</kbd>
              </div>
            </div>

            <!-- Categories -->
            <div id="msi-search-categories" style="display: flex; gap: 6px; margin-top: 10px; overflow-x: auto; padding-bottom: 2px;">
              ${CATEGORIES.map(c => `<button type="button" class="msi-cat-btn ${c === 'All' ? 'active' : ''}" data-cat="${c}" style="padding: 4px 10px; font-size: 12px; font-weight: 600; border-radius: 6px; border: 1px solid #cbd5e1; background: ${c === 'All' ? '#165B33' : '#ffffff'}; color: ${c === 'All' ? '#ffffff' : '#475569'}; cursor: pointer; white-space: nowrap;">${c}</button>`).join('')}
            </div>
          </div>

          <!-- Results Body -->
          <div id="msi-search-results" style="padding: 1rem; overflow-y: auto; flex: 1;">
            <div id="msi-search-empty-state" style="padding: 2rem 1rem; text-align: center; color: #64748b;">
              <p style="font-weight: 700; color: #0f172a; margin-bottom: 4px;">Search MSI Lab Database</p>
              <p style="font-size: 13px; margin-bottom: 12px;">Search research projects, faculty, instruments, protocols, and publications.</p>
              <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 460px; margin: 0 auto;">
                ${['Dengue', 'Centrifuge', 'Vanquish HPLC', 'Prof. Islam', 'RT-qPCR', 'Session 2022–2023'].map(s => `<span class="msi-quick-tag" data-tag="${s}" style="padding: 4px 10px; background: #f1f5f9; font-size: 12px; font-weight: 600; border-radius: 6px; color: #165b33; cursor: pointer; border: 1px solid #e2e8f0;">${s}</span>`).join('')}
              </div>
            </div>
            <div id="msi-results-list" style="display: none;"></div>
          </div>

          <!-- Footer -->
          <div style="padding: 0.75rem 1.25rem; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; display: flex; justify-content: space-between; align-items: center;">
            <div>Use <kbd style="background: #fff; padding: 2px 4px; border: 1px solid #cbd5e1; border-radius: 3px;">↑</kbd> <kbd style="background: #fff; padding: 2px 4px; border: 1px solid #cbd5e1; border-radius: 3px;">↓</kbd> to navigate, <kbd style="background: #fff; padding: 2px 4px; border: 1px solid #cbd5e1; border-radius: 3px;">Enter</kbd> to select</div>
            <div style="font-weight: 700; color: #165B33;">MSI Lab Chittagong</div>
          </div>

        </div>
      </div>
    `;

    document.body.appendChild(root);

    // Event handlers
    const input = document.getElementById('msi-search-input');
    const backdrop = document.getElementById('msi-search-backdrop');
    const container = document.getElementById('msi-search-container');

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeSearch();
    });

    input.addEventListener('input', (e) => {
      runSearch(e.target.value);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSearch();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentResults.length > 0) {
          activeIndex = Math.min(activeIndex + 1, currentResults.length - 1);
          renderResults();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentResults.length > 0) {
          activeIndex = Math.max(activeIndex - 1, 0);
          renderResults();
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (currentResults[activeIndex]) {
          goTo(currentResults[activeIndex].href);
        }
      }
    });

    // Category button clicks
    document.querySelectorAll('.msi-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.msi-cat-btn').forEach(b => {
          b.style.background = '#ffffff';
          b.style.color = '#475569';
        });
        btn.style.background = '#165B33';
        btn.style.color = '#ffffff';
        currentCategory = btn.dataset.cat;
        runSearch(input.value);
      });
    });

    // Quick tag clicks
    document.querySelectorAll('.msi-quick-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        input.value = tag.dataset.tag;
        runSearch(tag.dataset.tag);
        input.focus();
      });
    });
  }

  function runSearch(query) {
    const q = query.trim().toLowerCase();
    const emptyState = document.getElementById('msi-search-empty-state');
    const resultsList = document.getElementById('msi-results-list');

    if (!q) {
      emptyState.style.display = 'block';
      resultsList.style.display = 'none';
      currentResults = [];
      activeIndex = 0;
      return;
    }

    const tokens = q.split(/\s+/);
    currentResults = SEARCH_ITEMS.filter(item => {
      if (currentCategory !== 'All' && item.category !== currentCategory) return false;
      const hay = (item.title + ' ' + item.description + ' ' + (item.tags || []).join(' ') + ' ' + (item.badge || '')).toLowerCase();
      return tokens.every(tok => hay.includes(tok));
    });

    activeIndex = 0;
    renderResults();
  }

  function renderResults() {
    const emptyState = document.getElementById('msi-search-empty-state');
    const resultsList = document.getElementById('msi-results-list');

    emptyState.style.display = 'none';
    resultsList.style.display = 'block';

    if (currentResults.length === 0) {
      resultsList.innerHTML = `<div style="text-align: center; padding: 2.5rem; color: #64748b;">No matching results found. Try another term or choose 'All'.</div>`;
      return;
    }

    resultsList.innerHTML = currentResults.map((item, idx) => {
      const isSel = idx === activeIndex;
      return `
        <div class="msi-search-row" data-href="${item.href}" style="padding: 10px 14px; border-radius: 8px; cursor: pointer; margin-bottom: 4px; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; transition: background 0.15s; background: ${isSel ? '#ecfdf5' : '#ffffff'}; border: 1px solid ${isSel ? '#a7f3d0' : 'transparent'};">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px;">
              <span style="font-weight: 700; font-size: 14px; color: ${isSel ? '#165B33' : '#0f172a'};">${item.title}</span>
              <span style="font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 9999px; background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0;">${item.badge || item.category}</span>
            </div>
            <p style="font-size: 12px; color: #64748b; margin: 0; line-height: 1.4;">${item.description}</p>
          </div>
          <span style="font-size: 12px; color: ${isSel ? '#165B33' : '#cbd5e1'}; font-weight: 700;">→</span>
        </div>
      `;
    }).join('');

    resultsList.querySelectorAll('.msi-search-row').forEach(row => {
      row.addEventListener('click', () => {
        goTo(row.dataset.href);
      });
    });
  }

  function goTo(href) {
    closeSearch();
    window.location.href = href;
  }

  function openSearch() {
    createModalDOM();
    const root = document.getElementById('msi-search-modal-root');
    root.style.display = 'block';
    isOpen = true;
    const input = document.getElementById('msi-search-input');
    input.value = '';
    runSearch('');
    setTimeout(() => input.focus(), 60);
  }

  function closeSearch() {
    const root = document.getElementById('msi-search-modal-root');
    if (root) root.style.display = 'none';
    isOpen = false;
  }

  // Keyboard shortcut listener
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (isOpen) closeSearch(); else openSearch();
    } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearch();
    }
  });

  // Inject search button into desktop header nav AND mobile navigation drawer
  function injectSearchButton() {
    // 1. Desktop Nav Search Button
    const nav = document.querySelector('.sticky-nav nav') || document.querySelector('header nav');
    if (nav && !document.getElementById('msi-nav-search-btn')) {
      const btn = document.createElement('button');
      btn.id = 'msi-nav-search-btn';
      btn.type = 'button';
      btn.title = 'Search MSI Lab (Ctrl+K or /)';
      btn.style.cssText = 'display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 8px; background: rgba(7, 34, 18, 0.85); border: 1px solid rgba(16, 185, 129, 0.45); color: #ffffff; font-size: 12px; font-weight: 600; cursor: pointer; margin-left: 6px; font-family: inherit; transition: all 0.2s ease;';
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>Search</span>
        <kbd style="font-size: 10px; font-family: monospace; background: rgba(0,0,0,0.3); padding: 1px 5px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.25); color: #a7f3d0;">Ctrl K</kbd>
      `;
      btn.onmouseenter = () => { btn.style.background = 'rgba(22, 91, 51, 0.95)'; btn.style.borderColor = '#34d399'; };
      btn.onmouseleave = () => { btn.style.background = 'rgba(7, 34, 18, 0.85)'; btn.style.borderColor = 'rgba(16, 185, 129, 0.45)'; };
      btn.addEventListener('click', openSearch);
      nav.appendChild(btn);
    }

    // 2. Mobile Header Controls & Drawer Menu (Exact 1:1 Mirror of Desktop Navigation)
    const headerContainer = document.querySelector('.sticky-nav .max-w-container') || document.querySelector('header .max-w-container');
    if (headerContainer && !document.getElementById('msi-mobile-controls')) {
      // Mobile Controls Container (search + hamburger)
      const mobileControls = document.createElement('div');
      mobileControls.id = 'msi-mobile-controls';
      mobileControls.style.cssText = 'display: none; align-items: center; gap: 8px;';

      // Only display on screens <= 1024px
      const styleTag = document.createElement('style');
      styleTag.textContent = `
        /* Prevent mobile page wobble / horizontal blow-out */
        html, body {
          overflow-x: hidden !important;
          max-width: 100vw;
        }

        /* Seamless mobile controls and navigation synchronization */
        @media (max-width: 1024px) {
          #msi-mobile-controls { display: flex !important; }
          .hide-mobile, header nav.hide-mobile, .sticky-nav nav.hide-mobile { display: none !important; }
          .pi-spotlight-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .pi-spotlight-grid > div:first-child { text-align: center; }
          .pi-spotlight-grid > div:first-child > div:first-child { margin: 0 auto 1.25rem auto !important; }
          .featured-news-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
        @media (min-width: 1025px) {
          #msi-mobile-controls { display: none !important; }
          #msi-mobile-drawer { display: none !important; }
        }

        @media (max-width: 640px) {
          .sticky-nav .max-w-container, header .max-w-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            height: 68px !important;
          }
          #msi-mobile-drawer {
            top: 68px !important;
            padding: 1rem 1rem 2.5rem 1rem !important;
          }
          .card {
            padding: 1.25rem !important;
          }
          .sticky-nav a span[style*="font-size: 0.725rem"],
          header a span[style*="font-size: 0.725rem"] {
            font-size: 0.65rem !important;
            max-width: 160px;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        /* Mobile Drawer Links & Accordions - Exact Mirror of Desktop Navigation */
        .msi-mob-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 0.25rem;
        }
        .msi-mob-link, .msi-mob-btn {
          color: #ffffff;
          font-weight: 600;
          font-size: 1.05rem;
          padding: 0.7rem 0.85rem;
          border-radius: 8px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          width: 100%;
          border: none;
          font-family: inherit;
          cursor: pointer;
          text-align: left;
          transition: all 0.15s ease;
          box-sizing: border-box;
        }
        .msi-mob-link:hover, .msi-mob-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #a7f3d0;
        }
        .msi-mob-link.active, .msi-mob-btn.active {
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-weight: 700;
          border-left: 4px solid #10b981;
        }
        .msi-mob-submenu {
          display: none;
          flex-direction: column;
          gap: 0.2rem;
          padding: 0.4rem 0.5rem 0.6rem 1rem;
          background: rgba(0, 0, 0, 0.22);
          border-radius: 8px;
          margin: 0.25rem 0 0.4rem 0;
          border-left: 2px solid rgba(16, 185, 129, 0.4);
        }
        .msi-mob-sublink {
          color: #e2e8f0;
          font-size: 0.925rem;
          font-weight: 500;
          padding: 0.5rem 0.65rem;
          text-decoration: none;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.15s ease;
        }
        .msi-mob-sublink:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #10b981;
        }
        .msi-mob-sublink.active {
          color: #10b981;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.15);
        }
        .msi-mob-chevron {
          transition: transform 0.2s ease;
        }
        .msi-mob-chevron.rotated {
          transform: rotate(180deg);
        }
      `;
      document.head.appendChild(styleTag);

      // Mobile Search Trigger
      const mobileSearchBtn = document.createElement('button');
      mobileSearchBtn.type = 'button';
      mobileSearchBtn.ariaLabel = 'Search MSI Lab';
      mobileSearchBtn.style.cssText = 'background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); color: #ffffff; width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; cursor: pointer;';
      mobileSearchBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
      mobileSearchBtn.addEventListener('click', openSearch);

      // Mobile Hamburger Toggle
      const hamburgerBtn = document.createElement('button');
      hamburgerBtn.id = 'msi-mobile-toggle-btn';
      hamburgerBtn.type = 'button';
      hamburgerBtn.ariaLabel = 'Toggle navigation menu';
      hamburgerBtn.style.cssText = 'background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); color: #ffffff; width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; cursor: pointer;';
      hamburgerBtn.innerHTML = `<svg id="msi-menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;

      mobileControls.appendChild(mobileSearchBtn);
      mobileControls.appendChild(hamburgerBtn);
      headerContainer.appendChild(mobileControls);

      // Create Mobile Drawer (Exact 1:1 Mirror of Desktop Navigation)
      const drawer = document.createElement('div');
      drawer.id = 'msi-mobile-drawer';
      drawer.style.cssText = 'display: none; position: fixed; top: 74px; left: 0; right: 0; bottom: 0; background: rgba(7, 34, 18, 0.98); backdrop-filter: blur(12px); z-index: 9999; padding: 1.25rem 1.25rem 2.5rem; overflow-y: auto; font-family: inherit; border-top: 1px solid rgba(255,255,255,0.1);';
      drawer.innerHTML = `
        <div class="msi-mob-nav-list" style="display: flex; flex-direction: column; gap: 0.35rem; max-width: 500px; margin: 0 auto; padding-bottom: 2rem;">
          
          <!-- 1. Home -->
          <div class="msi-mob-item">
            <a href="index.html" class="msi-mob-link">
              <span>Home</span>
            </a>
          </div>

          <!-- 2. Facilities -->
          <div class="msi-mob-item">
            <a href="facilities.html" class="msi-mob-link">
              <span>Facilities</span>
            </a>
          </div>

          <!-- 3. Research -->
          <div class="msi-mob-item">
            <a href="projects.html" class="msi-mob-link">
              <span>Research</span>
            </a>
          </div>

          <!-- 4. People (Dropdown) -->
          <div class="msi-mob-item">
            <button type="button" class="msi-mob-btn" id="msi-mob-people-btn">
              <span>People</span>
              <svg class="msi-mob-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div id="msi-mob-people-menu" class="msi-mob-submenu">
              <a href="team.html" class="msi-mob-sublink" style="font-weight: 700; color: #a7f3d0;">
                <span>All Members Overview</span>
              </a>
              <a href="team.html#pi" class="msi-mob-sublink">
                <span>Principal Investigator</span>
              </a>
              <a href="team.html#doctoral" class="msi-mob-sublink">
                <span>Doctoral Fellows (Ph.D.)</span>
              </a>
              <a href="team.html#masters" class="msi-mob-sublink">
                <span>Master's Fellows (M.Sc.)</span>
              </a>
              <a href="team.html#staff" class="msi-mob-sublink">
                <span>Research Assistants &amp; Staff</span>
              </a>
              <a href="team.html#undergraduate" class="msi-mob-sublink">
                <span>Undergraduate Fellows (B.Sc.)</span>
              </a>
              <a href="team.html#alumni" class="msi-mob-sublink">
                <span>Alumni Network</span>
              </a>
            </div>
          </div>

          <!-- 5. Publications -->
          <div class="msi-mob-item">
            <a href="publications.html" class="msi-mob-link">
              <span>Publications</span>
            </a>
          </div>

          <!-- 6. Collaborations -->
          <div class="msi-mob-item">
            <a href="collaborations.html" class="msi-mob-link">
              <span>Collaborations</span>
            </a>
          </div>

          <!-- 7. More (Dropdown) -->
          <div class="msi-mob-item">
            <button type="button" class="msi-mob-btn" id="msi-mob-more-btn">
              <span>More</span>
              <svg class="msi-mob-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div id="msi-mob-more-menu" class="msi-mob-submenu">
              <a href="protocols.html" class="msi-mob-sublink">
                <span>Protocols</span>
              </a>
              <a href="objectives.html" class="msi-mob-sublink">
                <span>Objectives</span>
              </a>
              <a href="gallery.html" class="msi-mob-sublink">
                <span>Gallery</span>
              </a>
              <a href="news.html" class="msi-mob-sublink">
                <span>Events</span>
              </a>
              <a href="facilities-apply.html" class="msi-mob-sublink" style="font-weight: 700; color: #a7f3d0;">
                <span>Instrument Service Application</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="apply.html" class="msi-mob-sublink">
                <span>Join Us (Fellowships)</span>
              </a>
            </div>
          </div>

          <!-- 8. LinkedIn -->
          <div class="msi-mob-item">
            <a href="https://www.linkedin.com/company/110175191" target="_blank" rel="noopener noreferrer" class="msi-mob-link" style="color: #38bdf8;">
              <span style="display: flex; align-items: center; gap: 0.65rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
              </span>
              <span style="font-size: 0.75rem; color: #38bdf8; font-family: monospace;">↗</span>
            </a>
          </div>

          <!-- 9. Search Trigger -->
          <div style="padding-top: 0.75rem;">
            <button type="button" id="msi-mob-drawer-search-btn" class="msi-mob-btn" style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); justify-content: center; gap: 0.5rem; color: #a7f3d0; font-size: 0.95rem; font-weight: 700;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>Search MSI Lab</span>
            </button>
          </div>

        </div>
      `;
      document.body.appendChild(drawer);

      let isMobileMenuOpen = false;
      function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
        drawer.style.display = isMobileMenuOpen ? 'block' : 'none';
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        hamburgerBtn.innerHTML = isMobileMenuOpen
          ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
          : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
      }

      hamburgerBtn.addEventListener('click', toggleMobileMenu);

      // Accordion toggles for People and More dropdowns
      const peopleBtn = drawer.querySelector('#msi-mob-people-btn');
      const peopleMenu = drawer.querySelector('#msi-mob-people-menu');
      const moreBtn = drawer.querySelector('#msi-mob-more-btn');
      const moreMenu = drawer.querySelector('#msi-mob-more-menu');

      function setupAccordion(btn, menu) {
        if (!btn || !menu) return;
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const isOpen = menu.style.display === 'flex';
          menu.style.display = isOpen ? 'none' : 'flex';
          const chev = btn.querySelector('.msi-mob-chevron');
          if (chev) {
            if (isOpen) chev.classList.remove('rotated');
            else chev.classList.add('rotated');
          }
        });
      }
      setupAccordion(peopleBtn, peopleMenu);
      setupAccordion(moreBtn, moreMenu);

      // Drawer search button listener
      const drawerSearchBtn = drawer.querySelector('#msi-mob-drawer-search-btn');
      if (drawerSearchBtn) {
        drawerSearchBtn.addEventListener('click', () => {
          if (isMobileMenuOpen) toggleMobileMenu();
          openSearch();
        });
      }

      // Highlight active link in mobile drawer based on current page
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      drawer.querySelectorAll('.msi-mob-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
          link.classList.add('active');
        }
      });

      // Highlight People button if on team or member page (starts collapsed like desktop)
      if (currentPath.startsWith('team') || currentPath.startsWith('member')) {
        if (peopleBtn) peopleBtn.classList.add('active');
      }

      // Highlight More button if on More pages (starts collapsed like desktop)
      const morePages = ['protocols.html', 'objectives.html', 'gallery.html', 'news.html', 'facilities-apply.html', 'apply.html'];
      if (morePages.includes(currentPath)) {
        if (moreBtn) moreBtn.classList.add('active');
      }

      // Highlight matching sublink
      drawer.querySelectorAll('.msi-mob-sublink').forEach(sublink => {
        const href = sublink.getAttribute('href');
        if (href && href.split('#')[0] === currentPath) {
          sublink.classList.add('active');
        }
      });

      // Close drawer on Escape key
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMobileMenuOpen) toggleMobileMenu();
      });

      // Close drawer when any link is clicked
      drawer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          if (isMobileMenuOpen) toggleMobileMenu();
        });
      });
    }
  }

  window.openMSISearch = openSearch;

  // Enhance global navigation dropdowns & hash scrolling across all HTML pages
  function setupNavEnhancements() {
    // 1. Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        document.querySelectorAll('.nav-dropdown-content.show').forEach(el => el.classList.remove('show'));
      }
    });

    // 2. Close dropdowns when clicking any dropdown item & smooth scroll on hash
    document.querySelectorAll('.nav-dropdown-content a').forEach(a => {
      a.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-dropdown-content.show').forEach(el => el.classList.remove('show'));
        
        const href = a.getAttribute('href') || '';
        const hashIdx = href.indexOf('#');
        if (hashIdx !== -1 && (window.location.pathname.endsWith('team.html') || window.location.pathname.endsWith('/team'))) {
          const hash = href.substring(hashIdx);
          const target = document.querySelector(hash);
          if (target) {
            e.preventDefault();
            try {
              history.pushState(null, '', hash);
            } catch (_) {}
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // 3. Smooth scroll to hash on initial page load
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      createModalDOM();
      injectSearchButton();
      setupNavEnhancements();
    });
  } else {
    createModalDOM();
    injectSearchButton();
    setupNavEnhancements();
  }
})();
