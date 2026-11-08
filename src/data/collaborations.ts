export interface PartnerLink {
  label: string;
  url: string;
}

export interface Partner {
  id: string;
  name: string;
  institution: string;
  location: string;
  category: 'international_academic' | 'national_gov' | 'research_institute' | 'funding_agency';
  leadContact?: string;
  description: string;
  scope: string[];
  jointProjects: string[];
  website?: string;
  websiteLabel?: string;
  secondaryWebsite?: string;
  secondaryWebsiteLabel?: string;
  additionalLinks?: PartnerLink[];
  logo?: string;
}

export const COLLABORATIONS_DATA: Partner[] = [
  {
    id: "tuat-japan",
    name: "Kuroda Laboratory, Tokyo University of Agriculture and Technology (TUAT)",
    institution: "TUAT Department of Biotechnology and Life Science",
    location: "Tokyo, Japan",
    category: "international_academic",
    leadContact: "Prof. Dr. Yutaka Kuroda",
    description: "Long-standing bilateral research collaboration focusing on structural immunology, protein engineering, NMR spectroscopy, X-ray crystallography, and novel peptide solubility tags.",
    scope: [
      "Protein crystallization and Cryo-EM structural resolution",
      "Peptide-tagged vaccine candidate formulation",
      "Joint MEXT scholar mentorship & dual-lab student exchange",
      "Co-invention of international biotechnology patents"
    ],
    jointProjects: [
      "Engineering of Dengue ED3 tetravalent vaccine subunits",
      "Solubility-controlling peptide tags (WO2019031446)",
      "Cross-neutralization kinetics of engineered SARS-CoV-2 RBD"
    ],
    website: "http://web.tuat.ac.jp/~ykuroda/",
    websiteLabel: "Kuroda Lab Website",
    secondaryWebsite: "https://www.tuat.ac.jp/en/",
    secondaryWebsiteLabel: "TUAT University Portal",
    additionalLinks: [
      { label: "Kuroda Lab (Tokyo)", url: "http://web.tuat.ac.jp/~ykuroda/" },
      { label: "TUAT Official Portal", url: "https://www.tuat.ac.jp/en/" }
    ],
    logo: "/Colaborators/kuroda%20lab.png"
  },
  {
    id: "heat-world-bank",
    name: "Higher Education Acceleration & Transformation (HEAT) Project",
    institution: "World Bank & University Grants Commission (UGC) of Bangladesh",
    location: "Dhaka & Chittagong, Bangladesh",
    category: "funding_agency",
    leadContact: "Academic & Research Innovation Unit",
    description: "Flagship institutional grant empowering advanced vaccine research, genomics infrastructure, and state-of-the-art flow cytometry and molecular biology facilities at MSI Lab.",
    scope: [
      "Modernization of viral immunology infrastructure",
      "Competitive research grants for postgraduate and doctoral scholars",
      "High-throughput sequencing & biosafety level enhancements",
      "Inter-university collaborative research dissemination"
    ],
    jointProjects: [
      "HEAT Sub-project: Molecular Profiling of Emerging Arboviral Pathogens in Bangladesh",
      "Capacity building for rapid molecular outbreak response"
    ],
    website: "https://heat.ugc.gov.bd",
    websiteLabel: "HEAT Project Portal",
    secondaryWebsite: "https://projects.worldbank.org/en/projects-operations/project-detail/P168961",
    secondaryWebsiteLabel: "World Bank Project Operations (P168961)",
    additionalLinks: [
      { label: "HEAT Bangladesh Official Portal", url: "https://heat.ugc.gov.bd" },
      { label: "World Bank Project Operations", url: "https://projects.worldbank.org/en/projects-operations/project-detail/P168961" },
      { label: "UGC Bangladesh", url: "https://ugc.gov.bd" }
    ],
    logo: "/All%20logos/heat%20logo.png"
  },
  {
    id: "mohfw-bangladesh",
    name: "Ministry of Health & Family Welfare (MOHFW)",
    institution: "Government of the People's Republic of Bangladesh",
    location: "Dhaka, Bangladesh",
    category: "national_gov",
    leadContact: "Directorate General of Health Services (DGHS)",
    description: "Partnership for epidemiology surveillance, regional clinical sample coordination, and rapid COVID-19 molecular testing leadership during national emergency responses.",
    scope: [
      "COVID-19 RT-PCR molecular diagnosis and variant tracking",
      "Dengue clinical cohort surveillance in Chittagong Division",
      "Policy advisories on regional seroprevalence and vaccination efficacy"
    ],
    jointProjects: [
      "Chittagong Regional COVID-19 Testing and Genomic Tracking Lab",
      "Dengue hemorrhagic fever serological biobank"
    ],
    website: "http://www.mohfw.gov.bd",
    websiteLabel: "MOHFW Ministry Portal",
    secondaryWebsite: "https://dghs.gov.bd",
    secondaryWebsiteLabel: "DGHS Directorate Portal",
    additionalLinks: [
      { label: "MOHFW Official Portal", url: "http://www.mohfw.gov.bd" },
      { label: "DGHS Directorate General", url: "https://dghs.gov.bd" }
    ],
    logo: "/Colaborators/ministry%20of%20health.jpg"
  },
  {
    id: "most-bangladesh",
    name: "Ministry of Science & Technology (MOST)",
    institution: "Government of the People's Republic of Bangladesh",
    location: "Dhaka, Bangladesh",
    category: "national_gov",
    leadContact: "R&D Fellowship and Project Support Wing",
    description: "Continuous research grant provider supporting competitive biochemical investigations, student R&D fellowships, and reagent procurement for vaccine research.",
    scope: [
      "Special R&D allocations for biochemistry & immunology research",
      "Fellowship stipends for MSc and PhD researchers at MSI Lab",
      "National science congress representations and symposiums"
    ],
    jointProjects: [
      "Immunological characterization of Vibrio cholerae outer-membrane antigens",
      "Recombinant expression optimization for diagnostic kits"
    ],
    website: "https://most.gov.bd",
    websiteLabel: "MOST Ministry Portal",
    secondaryWebsite: "https://most.gov.bd/site/page/f4ee7709-6617-4f9e-99e0-811eb351ca0f",
    secondaryWebsiteLabel: "R&D Fellowship Support Wing",
    additionalLinks: [
      { label: "MOST Official Portal", url: "https://most.gov.bd" },
      { label: "National R&D Allocations", url: "https://most.gov.bd/site/page/f4ee7709-6617-4f9e-99e0-811eb351ca0f" }
    ],
    logo: "/Colaborators/most.png"
  },
  {
    id: "bfri-bangladesh",
    name: "Bangladesh Forest Research Institute (BFRI)",
    institution: "Government Forest & Botanical Research Directorate",
    location: "Chittagong, Bangladesh",
    category: "research_institute",
    leadContact: "Medicinal Plant & Natural Products Division",
    description: "Interdisciplinary collaboration investigating indigenous botanical extracts, secondary metabolites, and natural immunomodulatory compounds with antiviral properties.",
    scope: [
      "Screening of native plant extracts against viral surface targets",
      "Isolation and structural characterization of phytochemical immunomodulators",
      "Joint field specimen collection and bioactivity assays"
    ],
    jointProjects: [
      "Phytochemical inhibitors of Dengue NS1 and viral envelope targets",
      "Anti-inflammatory efficacy of forest biome compounds"
    ],
    website: "http://www.bfri.gov.bd",
    websiteLabel: "BFRI Official Portal",
    secondaryWebsite: "https://moef.gov.bd",
    secondaryWebsiteLabel: "Ministry of Environment, Forest & Climate Change",
    additionalLinks: [
      { label: "BFRI Official Portal", url: "http://www.bfri.gov.bd" },
      { label: "Ministry of Environment & Forest", url: "https://moef.gov.bd" }
    ],
    logo: "/Colaborators/bfri.png"
  },
  {
    id: "cu-central-lab",
    name: "University of Chittagong (CU) Central Biological Facilities",
    institution: "Faculty of Biological Sciences, University of Chittagong",
    location: "Chattogram, Bangladesh",
    category: "international_academic",
    leadContact: "Dean, Faculty of Biological Sciences",
    description: "Host university core ecosystem providing animal house ethical testing facilities, cell culture suites, autoclave facilities, and cross-departmental biotechnology platforms.",
    scope: [
      "Animal Ethics Review Board protocol execution (murine models)",
      "Undergraduate and postgraduate molecular biology training",
      "Interdepartmental seminar cycles and shared instrumentation"
    ],
    jointProjects: [
      "Institutional Bio-Repository for Tropical Infectious Diseases",
      "Inter-faculty computational biology and molecular modeling cluster"
    ],
    website: "https://cu.ac.bd",
    websiteLabel: "University of Chittagong Portal",
    secondaryWebsite: "https://cu.ac.bd/dbmb",
    secondaryWebsiteLabel: "Department of Biochemistry & Molecular Biology (CU)",
    additionalLinks: [
      { label: "University of Chittagong", url: "https://cu.ac.bd" },
      { label: "Department of Biochemistry & Molecular Biology", url: "https://cu.ac.bd/dbmb" }
    ],
    logo: "/All%20logos/University_of_Chittagong_logo.svg.jpg"
  },
  {
    id: "cmch-chittagong",
    name: "Chittagong Medical College & Hospital (CMCH)",
    institution: "Directorate General of Health Services (DGHS) & Medical Education",
    location: "Chattogram, Bangladesh",
    category: "research_institute",
    leadContact: "Clinical Pathology & Infectious Disease Units",
    description: "Premier tertiary medical center collaborating with MSI Lab on clinical cohort bio-specimen acquisition, patient consent coordination, acute viremic Dengue/Chikungunya serum sample biobanking, and sero-epidemiological tracking.",
    scope: [
      "Clinical cohort bio-specimen acquisition and clinical diagnostics",
      "Acute-phase Dengue and Chikungunya patient serum biobanking",
      "Validation of novel diagnostic biomarkers on clinical patient samples",
      "Joint clinical-immunological case investigations and cross-disciplinary rounds"
    ],
    jointProjects: [
      "Dengue Seroprevalence and Molecular Surveillance in Southeastern Bangladesh",
      "Biomarker discovery in severe Dengue hemorrhagic fever cohorts"
    ],
    website: "https://cmc.gov.bd",
    websiteLabel: "Chittagong Medical College Portal",
    additionalLinks: [
      { label: "Chittagong Medical College", url: "https://cmc.gov.bd" },
      { label: "Directorate General of Health Services", url: "https://dghs.gov.bd" }
    ],
    logo: "/Colaborators/cmch.png"
  },
  {
    id: "cmosh-chittagong",
    name: "Chattogram Maa-O-Shishu Hospital Medical College (CMOSH)",
    institution: "Chattogram Maa-O-Shishu Hospital Complex",
    location: "Agrabad, Chattogram, Bangladesh",
    category: "research_institute",
    leadContact: "Department of Dermatology, Venereology & Pediatric Immunology",
    description: "Specialized healthcare and medical research institution collaborating with MSI Lab on maternal-neonatal sero-epidemiology, pediatric infectious disease immunology, and cutaneous manifestation biomarker profiling.",
    scope: [
      "Maternal and pediatric infectious disease immune profile profiling",
      "Collaborative sample collection for arboviral sero-epidemiology",
      "Clinical correlation of viral antibody titers with disease severity",
      "Continuing biomedical education and clinical lab workshops"
    ],
    jointProjects: [
      "Pediatric Arboviral Immune Repertoire and Sero-surveillance Study",
      "Clinical trial biospecimen profiling for novel vaccine tag technologies"
    ],
    website: "http://cmoshbd.org",
    websiteLabel: "CMOSH Hospital & Medical College Portal",
    additionalLinks: [
      { label: "Chattogram Maa-O-Shishu Hospital", url: "http://cmoshbd.org" }
    ],
    logo: "/Colaborators/cmosh.png"
  }
];
