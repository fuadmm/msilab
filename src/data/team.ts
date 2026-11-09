import { DETAILED_PROFILES } from "@/data/detailedProfiles";
export interface PIProfile {
  name: string;
  title: string;
  department: string;
  institution: string;
  roles: string[];
  education: {
    degree: string;
    field: string;
    institution: string;
    years?: string;
  }[];
  contact: {
    email: string;
    phone: string;
    office: string;
    researchgate?: string;
    linkedin?: string;
  };
  bio: string;
  image?: string;
  researchFocus: string[];
  awards: string[];
  senioritySession?: string;
  supervisor?: string;
  coSupervisors?: string;
  thesisTitle?: string;
  submissionDate?: string;
  shortAbstract?: string;
  cvUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'doctoral' | 'masters' | 'undergraduate';
  cohort?: string;
  batch?: string;
  email?: string;
  personalEmail?: string;
  institutionalEmail?: string;
  phone?: string;
  linkedin?: string;
  researchgate?: string;
  profileUrl?: string;
  googleScholar?: string;
  image?: string;
  institution?: string;
  department?: string;
  researchInterest: string;
  projectResponsibility?: string;
  isLabManager?: boolean;
  bioSnippet?: string;
  senioritySession?: string;
  supervisor?: string;
  coSupervisors?: string;
  thesisTitle?: string;
  submissionDate?: string;
  shortAbstract?: string;
  education?: { degree: string; field: string; institution: string; years?: string }[];
  experiences?: { title: string; institution: string; years: string; details?: string }[];
  skills?: string[];
  publications?: string[];
  awards?: string[];
  cvUrl?: string;
  keyObjectives?: string[];
  methodology?: Record<string, string>;
  expectedImpact?: string;
}

export interface Alumni {
  id: string;
  name: string;
  formerRole: string;
  currentPosition: string;
  currentInstitution: string;
  location?: string;
  image?: string;
  category: 'academic' | 'phd_candidate' | 'industry_gov';
  senioritySession?: string;
  supervisor?: string;
  coSupervisors?: string;
  thesisTitle?: string;
  submissionDate?: string;
  shortAbstract?: string;
  email?: string;
  personalEmail?: string;
  institutionalEmail?: string;
  phone?: string;
  linkedin?: string;
  researchgate?: string;
  profileUrl?: string;
  googleScholar?: string;
  researchInterest?: string;
  bioSnippet?: string;
  education?: { degree: string; field: string; institution: string; years?: string }[];
  experiences?: { title: string; institution: string; years: string; details?: string }[];
  skills?: string[];
  publications?: string[];
  awards?: string[];
  cvUrl?: string;
}

export interface UnifiedMemberProfile {
  id: string;
  name: string;
  role: string;
  memberType: 'pi' | 'current' | 'alumni';
  category?: string;
  senioritySession?: string;
  supervisor?: string;
  coSupervisors?: string;
  thesisTitle?: string;
  submissionDate?: string;
  shortAbstract?: string;
  institution?: string;
  department?: string;
  currentPosition?: string;
  currentInstitution?: string;
  location?: string;
  email?: string;
  personalEmail?: string;
  institutionalEmail?: string;
  phone?: string;
  linkedin?: string;
  researchgate?: string;
  profileUrl?: string;
  googleScholar?: string;
  image?: string;
  researchInterest?: string;
  projectResponsibility?: string;
  isLabManager?: boolean;
  cohort?: string;
  batch?: string;
  bioSnippet?: string;
  awards?: string[];
  education?: { degree: string; field: string; institution: string; years?: string }[];
  experiences?: { title: string; institution: string; years: string; details?: string }[];
  skills?: string[];
  publications?: string[];
  cvUrl?: string;
  keyObjectives?: string[];
  methodology?: Record<string, string>;
  expectedImpact?: string;
}

export const PI_DATA: PIProfile = {
  name: "Prof. Dr. Mohammad Monirul Islam",
  title: "Professor & Principal Investigator",
  department: "Department of Biochemistry & Molecular Biology",
  institution: "University of Chittagong",
  senioritySession: "PhD Research",
  supervisor: "Prof. Yutaka Kuroda",
  thesisTitle: "Structure, Function, and Immunogenicity Studies on Protein Variants (Dengue ED3 & BPTI)",
  submissionDate: "Foundational Work",
  shortAbstract: "Established the core structural principles of dengue Envelope Protein Domain 3 (ED3) serospecificity and developed solubility-enhancing/controlling peptide tags (SEP/SCP tags).",
  roles: [
    "Professor, Department of Biochemistry & Molecular Biology, University of Chittagong",
    "Lab-In-Charge, COVID-19 Testing Lab, Faculty of Biological Sciences, University of Chittagong",
    "Head, Animal Ethics Review Board, University of Chittagong"
  ],
  education: [
    {
      degree: "Ph.D. in Biotechnology & Life Sciences",
      field: "Structural Immunology & Protein Engineering",
      institution: "Tokyo University of Agriculture and Technology (TUAT), Tokyo, Japan",
      years: "2005 – 2009"
    },
    {
      degree: "Master of Science (M.Sc.)",
      field: "Biochemistry & Molecular Biology",
      institution: "University of Dhaka, Dhaka, Bangladesh",
      years: "1999 – 2000"
    },
    {
      degree: "Bachelor of Science (B.Sc. Hons)",
      field: "Biochemistry & Molecular Biology",
      institution: "University of Dhaka, Dhaka, Bangladesh",
      years: "1995 – 1999"
    }
  ],
  contact: {
    email: "islammm@cu.ac.bd",
    phone: "+8801750180422",
    office: "Room 304, Department of Biochemistry & Molecular Biology, University of Chittagong, Chattogram-4331, Bangladesh",
    researchgate: "https://www.researchgate.net/profile/Md-Islam-2210",
    linkedin: "https://www.linkedin.com/company/110175191"
  },
  bio: "Prof. Dr. Mohammad Monirul Islam leads the Laboratory of Molecular & Structural Immunology (MSI Lab) at the University of Chittagong. With over two decades of experience across structural biology, molecular immunology, and protein technology, his research focuses on understanding the biophysical mechanisms governing host-pathogen interactions, vaccine development against emerging tropical viruses (Dengue, SARS-CoV-2, JEV), and the development of novel peptide tags for solubility and immunogenicity control.",
  image: "/PI/Mohammad%20Monirul%20Islam,%20PI,%20MSI%20Lab.jpg",
  researchFocus: [
    "Structural Immunology of Flaviviruses (Dengue, Japanese Encephalitis)",
    "SARS-CoV-2 Spike / Receptor Binding Domain (RBD) Variants & Cross-Neutralization",
    "Protein Engineering and Solubility-Controlling Peptide Tags",
    "Mucosal Immunity and Host Response to Vibrio cholerae",
    "Monoclonal and Bispecific Antibody Development"
  ],
  awards: [
    "Monbukagakusho (MEXT) Japanese Government Research Scholarship (2005–2009)",
    "Principal Investigator, World Bank / HEAT Advanced Vaccine Research Grant",
    "Chittagong University Outstanding Leadership in COVID-19 Molecular Diagnostics Award",
    "Multiple high-impact publications in PNAS, Frontiers in Immunology, Vaccine, IJMS, and Molecules"
  ],
  cvUrl: "/cv/dr-m-monirul-islam_cv.pdf"
};

export const CURRENT_MEMBERS: TeamMember[] = [
  {
    id: "minhajur-rahman",
    name: "Minhajur Rahman",
    role: "Doctoral Fellow (Ph.D. Candidate) · Associate Professor",
    category: "doctoral",
    institution: "Associate Professor, Department of Botany, University of Chittagong",
    department: "Department of Botany",
    email: "minhaj_bot@cu.ac.bd",
    institutionalEmail: "minhaj_bot@cu.ac.bd",
    phone: "+8801819624004",
    linkedin: "https://www.linkedin.com/in/minhajur-rahman-22a522b1/",
    researchgate: "https://www.researchgate.net/profile/Minhajur_Rahman",
    profileUrl: "https://cu.ac.bd/public_profile/index.php?ein=5453",
    image: "/Current%20Members%20and%20Alumni/Minhajur%20Rahman.jpg",
    senioritySession: "Doctoral Research",
    supervisor: "Prof. Dr. Mohammad Monirul Islam",
    thesisTitle: "Rational Design of Dengue Subunit Vaccines Integrated with Potential Plant Adjuvants and Pharmacognostical Biomolecules",
    submissionDate: "Ongoing Doctoral Research",
    shortAbstract: "Investigating the rational design of dengue subunit vaccines integrated with botanical adjuvants and natural product immunomodulators, bridging botanical pharmacognosy with structural molecular immunology.",
    researchInterest: "Natural Product Chemistry, Pharmacognosy, Functional and Medicinal Food, In silico pharmacology, Phytopharmacology, and rational design of dengue vaccines with potential plant adjuvants.",
    bioSnippet: "Minhajur Rahman is an Associate Professor in the Department of Botany at the University of Chittagong and a Doctoral Fellow at the Laboratory of Molecular & Structural Immunology (MSI Lab). With over a decade of university teaching and research experience, he specializes in pharmacognosy, natural product chemistry, in silico pharmacology, and phytopharmacology. He has secured multiple competitive research grants from the Ministry of Science and Technology (MOST) and CU as Principal Investigator, publishing over 25 peer-reviewed articles and book chapters.",
    education: [
      { degree: "Ph.D. Candidate", field: "Biochemistry & Molecular Biology (Structural Immunology)", institution: "University of Chittagong", years: "2021 – Present" },
      { degree: "M.Phil.", field: "Pharmacognosy & Phytochemistry", institution: "University of Chittagong", years: "2015 – 2019" },
      { degree: "M.S. (Thesis)", field: "Botany (Pharmacognosy Specialization)", institution: "University of Chittagong", years: "2007 – 2008" },
      { degree: "B.Sc. (Honours)", field: "Botany", institution: "University of Chittagong", years: "2003 – 2007" }
    ],
    experiences: [
      { title: "Associate Professor", institution: "Department of Botany, University of Chittagong", years: "2020 – Present" },
      { title: "Assistant Professor", institution: "Department of Botany, University of Chittagong", years: "2015 – 2020" },
      { title: "Lecturer", institution: "Department of Botany, University of Chittagong", years: "2012 – 2015" },
      { title: "Doctoral Fellow", institution: "Laboratory of Molecular & Structural Immunology (MSI Lab), CU", years: "2021 – Present" }
    ],
    skills: ["Natural Product Chemistry", "Pharmacognosy", "Phytopharmacology", "In Silico Molecular Docking", "Adjuvant Design", "HPLC & TLC Phytochemical Profiling", "Antioxidant & Thrombolytic Bioassays", "ELISA Serology"],
    publications: [
      "Phytochemical profiling, antioxidant, anti-inflammatory, and thrombolytic properties of medicinal flora in Chittagong region.",
      "Investigation of medicinal orchid species and plant-microbe interactions for therapeutic bioactive compounds.",
      "In silico pharmacology and molecular docking of plant secondary metabolites against viral surface antigens.",
      "Comprehensive evaluation of plant adjuvants for enhancing humoral and cellular responses to recombinant protein antigens."
    ],
    awards: [
      "Principal Investigator (PI) Research Grants, Ministry of Science and Technology (MOST), Bangladesh",
      "Research Fellowship & Grants, University of Chittagong Research Authority",
      "Merit Scholarship, University of Chittagong (Postgraduate M.Phil. & M.S.)"
    ],
    cvUrl: "/cv/minhajur-rahman_cv.md"
  },
  {
    id: "dr-shamsun-nahar",
    name: "Dr. Shamsun Nahar Binte Mannan",
    role: "Doctoral Fellow (Ph.D. Candidate)",
    category: "doctoral",
    institution: "Associate Professor & Head, Department of Skin & VD, Chattogram Maa-O-Shishu Hospital Medical College",
    image: "/Current%20Members%20and%20Alumni/Dr.%20Shamsun%20Nahar.jpg",
    researchInterest: "Multiplex PCR-based molecular detection of sexually transmitted infections (STIs) in pregnant women in Chittagong for early clinical intervention and appropriate maternal-fetal treatment."
  },
  {
    id: "dr-md-aqiv-javed",
    name: "Dr. Md. Aqiv Javed (Rafi)",
    role: "Doctoral Fellow (Ph.D. Candidate)",
    category: "doctoral",
    institution: "Consultant (ENT) & Ex-Resident Surgeon, Cumilla Medical College & Hospital · BCS (Health)",
    image: "/Current%20Members%20and%20Alumni/Dr.%20Md.%20Aqiv%20Javed.jpg",
    researchInterest: "Molecular otorhinolaryngology, auditory neurobiology, and clinical biomarker discovery in Head & Neck pathologies and hearing sciences. Investigating molecular and cellular pathways in sensorineural hearing loss and inner-ear disorders."
  },
  {
    id: "dr-sharmin-ara-begum",
    name: "Dr. Sharmin Ara Begum",
    role: "Doctoral Fellow (Ph.D. Candidate)",
    category: "doctoral",
    institution: "Assistant Professor, Department of Physiology, Army Medical College, Chattogram (AMCC)",
    researchInterest: "Cardiopulmonary and respiratory physiology, spirometric lung function dynamics, environmental impacts on respiratory parameters, and clinical physiological biomarkers in maternal and systemic health."
  },
  {
    id: "mushtak-fuad",
    name: "Mohammad Mushtak Fuad",
    role: "Lab Manager & Research Assistant",
    cohort: "MS Session 2023–2024",
    batch: "MS Session 2023–2024",
    category: "masters",
    email: "mushtakfuad@gmail.com",
    personalEmail: "mushtakfuad@gmail.com",
    phone: "+8801704332114",
    linkedin: "https://www.linkedin.com/in/mushtakfuad/",
    researchgate: "https://www.researchgate.net/profile/Mohammad-Mushtak-Fuad",
    department: "Biochemistry & Molecular Biology",
    image: "/Current%20Members%20and%20Alumni/mohammad%20muhstak%20fuad.jpg",
    isLabManager: true,
    projectResponsibility: "Currently handling core research and operations of the HEAT-11009-CU project",
    researchInterest: "Currently handling core wet-lab operations and project execution for the World Bank / HEAT-11009-CU research project. Structural vaccinology, Dengue ED3 epitope mapping, recombinant antigen formulation, and laboratory management.",
    senioritySession: "MS Session 2023–2024",
    supervisor: "Professor M. Monirul Islam, PhD",
    thesisTitle: "Immunological and Computational Evaluation of Vaccine Strategies Against SARS-CoV-2 Variants in Chattogram, Bangladesh",
    submissionDate: "June 7, 2026",
    shortAbstract: "Integrated clinical human serology with HADDOCK molecular docking and PRODIGY thermodynamics to explain antibody waning and structural mechanics of variant escape."
  },
  {
    id: "sadia-binte-alam",
    name: "Sadia Binte Alam",
    role: "Postgraduate Research Assistant",
    cohort: "MS Session 2023–2024",
    batch: "MS Session 2023–2024",
    category: "masters",
    email: "sadiabinte316@gmail.com",
    personalEmail: "sadiabinte316@gmail.com",
    linkedin: "https://www.linkedin.com/in/sadia-binte-alam-3a271b207",
    researchgate: "https://www.researchgate.net/profile/Sadia-Alam-21",
    department: "Biochemistry & Molecular Biology",
    image: "/Current%20Members%20and%20Alumni/sadia%20binte%20alam.jpg",
    researchInterest: "SARS-CoV-2 variant neutralization dynamics, recombinant antigen expression, and ELISA serology.",
    senioritySession: "MS Session 2023–2024",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "A Comprehensive Analysis of Serospecificity and Sero-Cross-Reactivity against SARS-CoV-2 Variants Following Heterologous Mix and Match Vaccination Strategy in Mice Model",
    submissionDate: "June 7, 2026",
    shortAbstract: "Investigated mix-and-match booster combinations using variant RBDs in mice to identify optimal vaccination regimens for broad coronavirus protection."
  },
  {
    id: "refath-alam-erin",
    name: "Refath Alam Erin",
    role: "Postgraduate Research Assistant",
    cohort: "MS Session 2023–2024",
    batch: "MS Session 2023–2024",
    category: "masters",
    email: "refatherin2510@gmail.com",
    personalEmail: "refatherin2510@gmail.com",
    linkedin: "https://www.linkedin.com/in/refath-alam-erin/",
    department: "Biochemistry & Molecular Biology",
    image: "/Current%20Members%20and%20Alumni/refath%20alam%20erin.jpg",
    supervisor: "Prof. Dr. Mohammad Monirul Islam",
    thesisTitle: "A Mystic Exploration of JEV Immunogenicity: Anti JEV-ED3 Antibody Responses Against Wild-type & Destabilizing Mutants of JEV-ED3",
    submissionDate: "June 7, 2026",
    shortAbstract: "Evaluated anti-JEV-ED3 antibody responses and immune marker expression (CD86, TLR4, CD80, MHC-II) in BALB/c mice immunized with E. coli-expressed wild-type and destabilized mutants (C5I, P47A, P47G, F21A), demonstrating that structural destabilization (F21A) and trace cobalt elicit up to 8- to 11-fold higher antibody titers via Th2-polarized responses.",
    researchInterest: "Flavivirus subunit vaccinology, Japanese encephalitis virus (JEV) ED3 immunoengineering, protein stability–immunogenicity relationships, and RT-qPCR immune profiling."
  },
  {
    id: "sarvani-datta",
    name: "Sarvani Datta",
    role: "Graduate Research Assistant",
    cohort: "MS Session 2024–2025",
    batch: "MS Session 2024–2025",
    category: "masters",
    email: "dattabani00@gmail.com",
    personalEmail: "dattabani00@gmail.com",
    linkedin: "https://www.linkedin.com/in/sarvani-datta-03b675198",
    department: "Biochemistry & Molecular Biology",
    image: "/Current%20Members%20and%20Alumni/sarvani%20datta.jpg",
    supervisor: "Prof. Dr. Mohammad Monirul Islam",
    thesisTitle: "Comparative Analyses of Agarwood Formation and Resin Composition",
    submissionDate: "Ongoing Master's Research",
    shortAbstract: "Evaluates artificial agarwood resin induction in Aquilaria trees by examining both the anatomical extent (area) of resin deposition and the resulting chemical composition under combined biotic and abiotic stresses.",
    researchInterest: "Artificial agarwood resin induction, Aquilaria malaccensis histopathology, GC-MS chemical profiling of sesquiterpenes and chromones, combined biotic (Fusarium spp.) and abiotic stress elicitation, plant metabolomics.",
    skills: [
      "Gas Chromatography–Mass Spectrometry (GC-MS) Metabolomics",
      "Histopathological Microtome Sectioning & Anatomical Microscopy",
      "Profiling Quality-Defining Sesquiterpenes & 2-(2-phenylethyl)chromones",
      "Fusarium spp. Inoculum Preparation & Cellulase Formulation",
      "Trunk Drill Hole Inoculation & Divalent Metal Ion Elicitor Flow",
      "Spreadsheet-based Statistical Modeling & Yield Comparison"
    ]
  },
  {
    id: "jafrina-akter-eva",
    name: "Jafrina Akter Eva",
    role: "Graduate Research Assistant",
    cohort: "MS Session 2024–2025",
    batch: "MS Session 2024–2025",
    category: "masters",
    email: "jafrinaaktereva201@gmail.com",
    personalEmail: "jafrinaaktereva201@gmail.com",
    linkedin: "https://www.linkedin.com/in/jafrina-akter-eva/",
    department: "Biochemistry & Molecular Biology",
    image: "/Current%20Members%20and%20Alumni/Jafrina%20Akter%20Eva.png",
    supervisor: "Prof. Dr. Mohammad Monirul Islam",
    thesisTitle: "Understanding Artificial Agarwood Induction Pathways and Mechanisms",
    submissionDate: "Ongoing Master's Research",
    shortAbstract: "Investigates the molecular and transcriptional mechanisms underlying artificial agarwood induction in Aquilaria malaccensis, specifically tracking the activation of early defense signaling cascades and downstream sesquiterpene biosynthetic pathways.",
    researchInterest: "Plant molecular biology, artificial agarwood induction pathways in Aquilaria malaccensis, early defense signaling (WRKY1, LOX1, MAPK3, MYC2), sesquiterpene biosynthesis (DXPS, MK, FPS, SS4, DGS, DGS1, DSS), Promega One-Step RT-qPCR, CTAB-IPA RNA extraction.",
    skills: [
      "Promega One-Step RT-qPCR Relative Gene Expression",
      "CTAB-IPA Total RNA Extraction from Recalcitrant Wood Tissues",
      "2^-ΔΔCt Relative Quantification Normalized to GAPDH",
      "Quantification of Early Defense Genes (WRKY1, LOX1, MAPK3, MYC2)",
      "Sesquiterpene Biosynthetic Gene Profiling (DXPS, MK, FPS, SS4, DGS, DGS1, DSS)",
      "One-Way ANOVA (p < 0.05) & Molecular Inducer Biomarker Screening"
    ]
  },
  {
    id: "misbah-ul-islam",
    name: "Misbah Ul Islam",
    role: "Undergraduate Research Assistant",
    cohort: "BSc Session 2021–2022",
    batch: "Session 2021–2022",
    category: "undergraduate",
    department: "Biochemistry & Molecular Biology",
    email: "misbahulislam065@gmail.com",
    personalEmail: "misbahulislam065@gmail.com",
    linkedin: "https://www.linkedin.com/in/misbah-ul-islam-514ba1294/",
    image: "/Current%20Members%20and%20Alumni/Misbah%20Ul%20Islam.jpg",
    researchInterest: "Recombinant plasmid design, bacterial protein expression, and bioinformatic modeling."
  },
  {
    id: "mohammad-arifur-rahman",
    name: "Mohammad Arifur Rahman",
    role: "Undergraduate Research Assistant",
    cohort: "BSc Session 2021–2022",
    batch: "Session 2021–2022",
    category: "undergraduate",
    department: "Biochemistry & Molecular Biology",
    email: "arifbinkamal01@gmail.com",
    personalEmail: "arifbinkamal01@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohammad-arifur-rahman-6a0810325/",
    image: "/Current%20Members%20and%20Alumni/Mohammad%20Arifur%20Rahman.jpg",
    researchInterest: "Immuno-assay protocols, gel filtration chromatography, and SARS-CoV-2 surveillance data."
  },
  {
    id: "nusrat-jahan-mim",
    name: "Nusrat Jahan Mim",
    role: "Undergraduate Research Assistant",
    cohort: "BSc Session 2021–2022",
    batch: "Session 2021–2022",
    category: "undergraduate",
    department: "Biochemistry & Molecular Biology",
    email: "xiaonusratmim@gmail.com",
    personalEmail: "xiaonusratmim@gmail.com",
    linkedin: "https://www.linkedin.com/in/nusrat-jahan-763782359/",
    image: "/Current%20Members%20and%20Alumni/Nusrat%20Jahan%20Mim.jpg",
    researchInterest: "Viral antigen stability testing, peptide tag solubility assays, and spectroscopic analysis."
  },
  {
    id: "sadiya-rahman-faiza",
    name: "Sadiya Rahman Faiza",
    role: "Undergraduate Research Assistant",
    cohort: "BSc Session 2021–2022",
    batch: "Session 2021–2022",
    category: "undergraduate",
    department: "Biochemistry & Molecular Biology",
    email: "srfaiza03@gmail.com",
    personalEmail: "srfaiza03@gmail.com",
    linkedin: "https://www.linkedin.com/in/sadiyafaizah/",
    image: "/Current%20Members%20and%20Alumni/Sadiya%20Rahman%20Faiza.jpg",
    researchInterest: "Host cytokine expression profiling, molecular biology techniques, and literature curation."
  },
  {
    id: "md-shourov-hossain-shuvo",
    name: "Md. Shourov Hossain Shuvo",
    role: "Undergraduate Research Assistant",
    cohort: "BSc Session 2022–2023",
    batch: "Session 2022–2023",
    category: "undergraduate",
    department: "Biochemistry & Molecular Biology",
    institution: "University of Chittagong",
    email: "erenyeager4500ad@gmail.com",
    personalEmail: "erenyeager4500ad@gmail.com",
    linkedin: "https://www.linkedin.com/in/sourov-hossain-shuvo-827996442",
    image: "/Current%20Members%20and%20Alumni/Md.Shourov%20Hossain%20Shuvo.jpeg",
    researchInterest: "Molecular immunology, structural biology, recombinant DNA technology, and host-pathogen interactions."
  },
  {
    id: "mahina-mostafa-chowdhury",
    name: "Mahina Mostafa Chowdhury",
    role: "Undergraduate Research Assistant",
    cohort: "BSc Session 2022–2023",
    batch: "Session 2022–2023",
    category: "undergraduate",
    department: "Biochemistry & Molecular Biology",
    institution: "University of Chittagong",
    email: "mahinamostafachowdhury7@gmail.com",
    personalEmail: "mahinamostafachowdhury7@gmail.com",
    institutionalEmail: "23604021@std.cu.ac.bd",
    linkedin: "https://www.linkedin.com/in/mahina-mostafa-chowdhury-3a3726327/",
    image: "/Current%20Members%20and%20Alumni/Mahina%20Mostafa%20Chowdhury.jpeg",
    researchInterest: "Biomolecular chemistry, protein biochemistry, viral pathogenesis, and diagnostic assay workflows."
  },
  {
    id: "nazia-sultana",
    name: "Nazia Sultana",
    role: "Undergraduate Research Assistant",
    cohort: "BSc Session 2022–2023",
    batch: "Session 2022–2023",
    category: "undergraduate",
    department: "Biochemistry & Molecular Biology",
    institution: "University of Chittagong",
    email: "nazia.sultana0858@gmail.com",
    personalEmail: "nazia.sultana0858@gmail.com",
    institutionalEmail: "23604017@std.cu.ac.bd",
    linkedin: "https://www.linkedin.com/in/nazia-sultana-1a29aa442",
    image: "/Current%20Members%20and%20Alumni/Nazia%20Sultana.png",
    researchInterest: "Immunological signaling pathways, antibody engineering, molecular genetics, and surveillance screening."
  },
  {
    id: "shanjida-islam-eva",
    name: "Shanjida Islam Eva",
    role: "Undergraduate Research Assistant",
    cohort: "BSc Session 2022–2023",
    batch: "Session 2022–2023",
    category: "undergraduate",
    department: "Biochemistry & Molecular Biology",
    institution: "University of Chittagong",
    email: "evabmb11@gmail.com",
    personalEmail: "evabmb11@gmail.com",
    linkedin: "https://www.linkedin.com/in/shanjida-islam-eva-824307443/",
    image: "/Current%20Members%20and%20Alumni/Shanjida%20Islam%20Eva.jpeg",
    researchInterest: "Vaccine formulation, clinical immunology, protein purification techniques, and molecular diagnostics."
  }
];

export const ALUMNI_DATA: Alumni[] = [
  {
    id: "md-rafiqul-islam",
    name: "Md. Rafiqul Islam",
    formerRole: "M.Sc. Research Fellow",
    currentPosition: "Researcher & Academic Fellow",
    currentInstitution: "Department of Biochemistry & Molecular Biology, University of Chittagong",
    location: "Chittagong, Bangladesh",
    category: "academic",
    senioritySession: "MS Session 2009–2010",
    supervisor: "Md. Monirul Islam, PhD",
    thesisTitle: "Identification of Residue Determinants of Dengue 4 Sero-specificity and / or Cross-Reactivity",
    submissionDate: "July 7, 2012",
    shortAbstract: "Identified specific amino acid residue determinants on DENV4 ED3 that dictate serospecificity and cross-reactivity by evaluating mutated variants in mice."
  },
  {
    id: "mamunur-rashid",
    name: "Dr. Muhammad Mamunur Rashid Mahib",
    formerRole: "Postdoctoral & Senior Research Fellow",
    currentPosition: "Associate Professor",
    currentInstitution: "Department of Biochemistry & Molecular Biology, University of Chittagong",
    location: "Chittagong, Bangladesh",
    email: "mahib@cu.ac.bd",
    institutionalEmail: "mahib@cu.ac.bd",
    phone: "+8801821078048",
    profileUrl: "https://cu.ac.bd/public_profile/index.php?ein=5212",
    googleScholar: "https://scholar.google.com/citations?user=xdRnLzEAAAAJ&hl=en",
    image: "/Current%20Members%20and%20Alumni/mahib%20cu.jpg",
    category: "academic",
    senioritySession: "MS Session 2009–2010",
    supervisor: "Md. Monirul Islam, PhD",
    thesisTitle: "Cloning and Expression of Dengue Envelope Protein Domain 3 (ED3) Variants",
    submissionDate: "July 7, 2012",
    shortAbstract: "Engineered and expressed serotype-specific recombinant DENV ED3 variants to study conformation-dependent epitope presentation and solubility behavior.",
    researchInterest: "Cellular signaling pathways, innate immune signaling, cell death, and immunology & infectious diseases."
  },
  {
    id: "nishat-akther",
    name: "Nishat Akther",
    formerRole: "M.Sc. Research Fellow",
    currentPosition: "Biomedical Researcher & Educator",
    currentInstitution: "University of Chittagong Alumni Network",
    location: "Chittagong, Bangladesh",
    category: "academic",
    senioritySession: "MS Session 2010–2011",
    supervisor: "Md. Monirul Islam, PhD",
    thesisTitle: "Residue Specificity on the EDIII of E-Protein and Dengue Sero-Specificity: Sero-Specific and Sero-Cross-Reactive Serum Antibody Responses in Mice Model",
    submissionDate: "March 31, 2013",
    shortAbstract: "Evaluated serum antibody responses against mutated DENV EDIII constructs in mice to differentiate sero-specific vs. cross-reactive immune pathways."
  },
  {
    id: "payal-barua",
    name: "Dr. Payal Barua",
    formerRole: "M.Sc. Research Fellow",
    currentPosition: "Postdoctoral / Immunology Researcher",
    currentInstitution: "Department of Biochemistry & Molecular Biology, University of Chittagong",
    location: "Chittagong, Bangladesh",
    image: "/Current%20Members%20and%20Alumni/Payal%20Barua.jpg",
    category: "academic",
    senioritySession: "MS Session 2010–2011",
    supervisor: "Md. Monirul Islam, PhD",
    thesisTitle: "Immunosensitization Against the EDIII of Dengue E-Protein and Study of Dengue Sero-Specificity Using Sensitized Lymphocyte Culture",
    submissionDate: "March 31, 2013",
    shortAbstract: "Explored cell-mediated cellular immune responses and sero-specificity using sensitized lymphocyte cultures stimulated with Dengue EDIII.",
    researchInterest: "Cell-mediated immunity, lymphocyte proliferation, dengue immunosensitization, and sero-specific antibody profiling."
  },
  {
    id: "wang-kyaw-twan",
    name: "Dr. Wang Kyaw Twan",
    formerRole: "Senior Research Fellow",
    currentPosition: "Postdoctoral Fellow",
    currentInstitution: "National Cancer Institute (NCI-Frederick / CCR, NIH)",
    location: "Frederick, Maryland, USA",
    linkedin: "https://www.linkedin.com/in/wang-kyaw-twan-ph-d-9b96986b/",
    researchgate: "https://www.researchgate.net/profile/Wang-Twan",
    image: "/Current%20Members%20and%20Alumni/Wang%20Kyaw%20Twan.jpg",
    category: "academic",
    senioritySession: "MS Session 2012–2013",
    supervisor: "Md. Monirul Islam, PhD",
    thesisTitle: "Mapping the Determinants of Cross-Reactivity of Dengue 4 ED3 Antibodies",
    submissionDate: "January 7, 2015",
    shortAbstract: "Mapped critical surface-exposed residues mediating broad cross-reactivity in DENV4 ED3, guiding serotype-specific epitope shielding.",
    researchInterest: "Cell biology, cilia structure/pathogenesis, axonemal dynein dynamics, protein engineering, and structural biology."
  },
  {
    id: "md-waseque-mia",
    name: "Md. Waseque Mia",
    formerRole: "M.Sc. Research Assistant",
    currentPosition: "Assistant Professor",
    currentInstitution: "Department of Biochemistry & Molecular Biology, Shahjalal University of Science and Technology (SUST)",
    location: "Sylhet, Bangladesh",
    email: "waseqbd-bmb@sust.edu",
    institutionalEmail: "waseqbd-bmb@sust.edu",
    profileUrl: "https://www.sust.edu/departments/bmb/faculty/waseqbd-bmb@sust.edu",
    researchgate: "https://www.researchgate.net/profile/Md-Mia-10",
    image: "/Current%20Members%20and%20Alumni/waseque_mia.jpg",
    category: "academic",
    senioritySession: "MS Session 2012–2013",
    supervisor: "Md. Monirul Islam, PhD",
    thesisTitle: "Design and Characterization of Japanese Encephalitis Virus (JEV) ED3 Mutants",
    submissionDate: "May 20, 2015",
    shortAbstract: "Engineered JEV ED3 variants using solubility-controlling peptide tags and characterized thermal denaturation and immune sera reactivity.",
    researchInterest: "Immunology, cell biology, cancer biology, molecular and genomic evaluations, viral immunology."
  },
  {
    id: "nafsoon-rahman",
    name: "Dr. Nafsoon Rahman (Mouly)",
    formerRole: "M.Sc. Research Fellow",
    currentPosition: "Assistant Professor",
    currentInstitution: "Department of Biochemistry & Molecular Biology, Jagannath University (JnU)",
    location: "Dhaka, Bangladesh",
    email: "nafsoonrahman@bmb.jnu.ac.bd",
    institutionalEmail: "nafsoonrahman@bmb.jnu.ac.bd",
    personalEmail: "nafsoon.vncbmbcu91@gmail.com",
    phone: "+8801715503350",
    profileUrl: "https://jnu.ac.bd/fm/pview/10834/home",
    image: "/Current%20Members%20and%20Alumni/nafsoon%20rahman%20jnu.jpg",
    category: "academic",
    senioritySession: "MS Session 2013–2014",
    supervisor: "Md. Monirul Islam, PhD",
    thesisTitle: "Comprehensive Cross-Reactivity Profiles of DENV1 ED3 Immune Sera in Mouse Model",
    submissionDate: "June 25, 2016",
    shortAbstract: "Assessed heterologous antibody recognition across DENV1–4 using DENV1 ED3 immunization, defining the baseline threshold of serotype cross-binding.",
    researchInterest: "Protein engineering, solubility-controlling peptide tags, immunology, and biochemical pharmacology."
  },
  {
    id: "meherun-nesa",
    name: "Meherun Nesa",
    formerRole: "M.Sc. Research Fellow",
    currentPosition: "Diagnostic Immunology Researcher",
    currentInstitution: "University of Chittagong Alumni Network",
    location: "Chittagong, Bangladesh",
    category: "academic",
    senioritySession: "MS Session 2014–2015",
    supervisor: "Md. Monirul Islam, PhD",
    coSupervisors: "M. M. R. Mahib",
    thesisTitle: "The EDIII, A Generic Tool To Detect All Natural Anti-Dengue Antibodies",
    submissionDate: "September 25, 2016",
    shortAbstract: "Evaluated envelope protein domain III (EDIII) as a universal diagnostic reagent capable of capturing all natural anti-dengue antibodies in patient sera."
  },
  {
    id: "tanjina-tanima",
    name: "Tanjina Afrin (Tanima)",
    formerRole: "M.Sc. Researcher",
    currentPosition: "Assistant Director / Audit Officer",
    currentInstitution: "Office of the Comptroller & Auditor General (CAG)",
    location: "Dhaka, Bangladesh",
    image: "/Current%20Members%20and%20Alumni/tanima.jpg",
    category: "industry_gov",
    senioritySession: "MS Session 2014–2015",
    supervisor: "Md. Monirul Islam, PhD",
    coSupervisors: "M. M. R. Mahib",
    thesisTitle: "Effects SEP-Tag-dependent protein oligomerization on immune response modulation in mice",
    submissionDate: "September 25, 2016",
    shortAbstract: "Studied how SEP-tag-induced oligomerization and aggregate formation alter immunogenicity and antibody response kinetics in animal models."
  },
  {
    id: "mamtaz-mishu",
    name: "Mamtaz Sultana (Mishu)",
    formerRole: "M.Sc. Research Fellow",
    currentPosition: "Scientific Officer",
    currentInstitution: "Bangladesh Council of Scientific and Industrial Research (BCSIR)",
    location: "Chittagong, Bangladesh",
    image: "/Current%20Members%20and%20Alumni/mishu.jpg",
    category: "industry_gov",
    senioritySession: "MS Session 2015–2016",
    supervisor: "M. Monirul Islam, PhD",
    coSupervisors: "M. M. R. Mahib",
    thesisTitle: "Investigation of natural anti-dengue antibodies using epitope-grafted ED3s possessing the sero-specificity of both DENV-3 and DENV-4",
    submissionDate: "September 13, 2017",
    shortAbstract: "Characterized natural human anti-dengue antibodies using engineered, epitope-grafted dual-specificity DENV-3/DENV-4 ED3 variants to increase diagnostic accuracy."
  },
  {
    id: "hasan-nazmul",
    name: "Md. Nazmul Hasan",
    formerRole: "Graduate Research Assistant",
    currentPosition: "Lecturer (on study leave) & PhD Researcher at Purdue University",
    currentInstitution: "Department of Biochemistry & Molecular Biology, Hajee Mohammad Danesh Science & Technology University (HSTU) / Purdue University, USA",
    location: "West Lafayette, Indiana, USA / Dinajpur, Bangladesh",
    email: "bmb.nazmul@gmail.com",
    phone: "+8801515284213",
    profileUrl: "https://hstu.ac.bd/teacher/nazmulbmb",
    image: "/Current%20Members%20and%20Alumni/nazmul%20hasan%20hstu.jpg",
    category: "academic",
    senioritySession: "MS Session 2016–2017",
    supervisor: "Md. Monirul Islam, PhD",
    thesisTitle: "Production of Polyclonal Antibodies in Mice Against Recombinant DENV ED3 Variants",
    submissionDate: "May 15, 2019",
    shortAbstract: "Established high-titer murine immunization protocols for wild-type and solubility-tagged DENV ED3 antigens, profiling kinetics of antibody maturation.",
    researchInterest: "Structural Biology, Immunology, and Neuroscience."
  },
  {
    id: "abu-bakar-siddik",
    name: "Abu Bakar Siddik",
    formerRole: "Graduate Research Assistant",
    currentPosition: "Graduate Research Assistant & Ph.D. Candidate",
    currentInstitution: "Department of Molecular Biosciences, University of Texas at Austin",
    location: "Austin, Texas, USA",
    researchgate: "https://www.researchgate.net/profile/Abu-Bakar-Siddik-7",
    image: "/Current%20Members%20and%20Alumni/Abu%20Bakar%20Siddik.jpg",
    category: "phd_candidate",
    senioritySession: "MS Session 2017–2018",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "Biophysical Characterization and Secondary Structure Analysis of DENV ED3",
    submissionDate: "May 20, 2019",
    shortAbstract: "Characterized secondary structural stability, circular dichroism profiles, and chemical denaturation transitions of engineered dengue envelope domain 3 proteins.",
    researchInterest: "Molecular biosciences, structural biology, protein dynamics, and viral immunology."
  },
  {
    id: "fayaz-rezvanul-haq",
    name: "Fayaz Rezvanul Haq",
    formerRole: "M.Sc. Researcher",
    currentPosition: "Protein Formulation Researcher",
    currentInstitution: "Department of Biochemistry & Molecular Biology, University of Chittagong",
    location: "Chittagong, Bangladesh",
    category: "academic",
    senioritySession: "MS Session 2017–2018",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "Effects of poly-Ile and poly-Lys tags on the aggregate sizes and immunogenicity of an epitope-grafted DEN4 ED3",
    submissionDate: "July 10, 2019",
    shortAbstract: "Evaluated particle size distribution and antibody titer induction of DEN4 ED3 modified with poly-isoleucine and poly-lysine tags in Swiss albino mice."
  },
  {
    id: "imrul-tipo",
    name: "Imrul Hasan Tipo",
    formerRole: "Graduate Research Assistant",
    currentPosition: "Lecturer & PhD Fellow at University of Alabama",
    currentInstitution: "Department of Biochemistry and Biotechnology, University of Science and Technology Chittagong (USTC)",
    location: "Chittagong, Bangladesh / Tuscaloosa, Alabama, USA",
    email: "tipo@ustc.ac.bd",
    institutionalEmail: "tipo@ustc.ac.bd",
    profileUrl: "https://ustc.ac.bd/fm-imrul-hasan-tipo/",
    image: "/Current%20Members%20and%20Alumni/imrul%20hasan%20tipo%20ustc.jpg",
    category: "academic",
    senioritySession: "MS Session 2019–2020",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "Four Different DENV ED3s Generated Different T cell Memory In Artificial Immunization In Mice Model",
    submissionDate: "May 2022",
    shortAbstract: "Measured T cell memory generation and cytokine responses in mice artificially immunized with recombinant ED3 proteins representing all four dengue serotypes.",
    researchInterest: "Dengue virus ED3 immunogenicity, T cell memory generation, and SARS-CoV-2 epidemiology."
  },
  {
    id: "din-islam",
    name: "Dr. Md. Din Islam",
    formerRole: "Graduate Research Assistant",
    currentPosition: "Postdoctoral Researcher",
    currentInstitution: "Graduate Institute of Microbiology and Public Health, National Chung Hsing University (NCHU)",
    location: "Taichung, Taiwan",
    researchgate: "https://www.researchgate.net/profile/Md-Islam-2210",
    image: "/Current%20Members%20and%20Alumni/din%20islam.jpg",
    category: "academic",
    senioritySession: "MS Session 2019–2020",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "A Mystery of DENV Immunogenicity: Anti-DENV ED3 Responses Against Monovalent and Multivalent DENV ED3s",
    submissionDate: "May 15, 2022",
    shortAbstract: "Assessed differential immunogenicity and antibody titers induced by single (monovalent) versus combined (multivalent) DENV ED3 immunization schemes in mice.",
    researchInterest: "Virology, oncolytic Orf virus, dengue envelope domain 3 (ED3) serotype specificity, and recombinant subunit vaccines."
  },
  {
    id: "sanjida-yesmin",
    name: "Dr. Sanjida Yesmin",
    formerRole: "Graduate Research Assistant",
    currentPosition: "Postdoctoral / Ph.D. Researcher (MEXT Scholar)",
    currentInstitution: "Tokyo University of Agriculture and Technology (TUAT)",
    location: "Tokyo, Japan",
    researchgate: "https://www.researchgate.net/profile/Sanjida-Yesmin",
    image: "/Current%20Members%20and%20Alumni/sanjida%20yeasmin.jpg",
    category: "academic",
    senioritySession: "MS Session 2019–2020",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "Anti-DENV ED3 IgG Responses Against Heterotypic Secondary DENV ED3 Immunization in Mice Model",
    submissionDate: "May 2022",
    shortAbstract: "Investigated secondary heterotypic immune responses and sero-cross-reactivity patterns in mice prime-boosted with different dengue serotype ED3 domains.",
    researchInterest: "Dengue virus immunology, neutralizing antibody mapping, solubility-controlling peptide tags, and flavivirus vaccine development."
  },
  {
    id: "dr-md-golam-kabir",
    name: "Dr. Md. Golam Kabir",
    formerRole: "Post-Doctoral Fellow",
    currentPosition: "Professor",
    currentInstitution: "Department of Biochemistry & Molecular Biology, University of Chittagong",
    location: "Chittagong, Bangladesh",
    phone: "01786233770",
    profileUrl: "https://cu.ac.bd/public_profile/index.php?ein=3780",
    researchgate: "https://www.researchgate.net/profile/Md-Kabir-160",
    image: "/Current%20Members%20and%20Alumni/golam%20kabir.jpg",
    category: "academic",
    senioritySession: "Post-Doctoral",
    supervisor: "Md. Monirul Islam, PhD",
    thesisTitle: "Production and Characterization of Monoclonal Antibodies (mAbs) Against Dengue ED3 Variants",
    submissionDate: "December 19, 2022",
    shortAbstract: "Developed and characterized monoclonal antibodies targeted against mutated Dengue ED3 variants to evaluate cross-neutralization and epitope binding dynamics.",
    researchInterest: "Pathogenesis, nutritional biochemistry, life sciences, and monoclonal antibody characterization."
  },
  {
    id: "mahabubul-mowla",
    name: "Mahabubul Mowla",
    formerRole: "M.Sc. Research Fellow",
    currentPosition: "Lecturer",
    currentInstitution: "Department of Biochemistry and Biotechnology, University of Science and Technology Chittagong (USTC)",
    location: "Chittagong, Bangladesh",
    email: "mahabubul@ustc.ac.bd",
    institutionalEmail: "mahabubul@ustc.ac.bd",
    profileUrl: "https://ustc.ac.bd/fm-mahabubul-mowla/",
    image: "/Current%20Members%20and%20Alumni/mahabubul%20mowla%20ustc.jpg",
    category: "academic",
    senioritySession: "MS Session 2020–2021",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "Anti-Dengue Cytokine and Antibody Responses in Recombinant ED3 Immunized Mice",
    submissionDate: "July 2023",
    shortAbstract: "Investigated cellular cytokine profiles and IgG antibody responses in mice immunized with recombinant dengue envelope protein domain 3 variants.",
    researchInterest: "Anti-SARS-CoV-2 serology, ELISA, flow cytometry, qRT-PCR, molecular diagnostics, and immunology."
  },
  {
    id: "antara-saha",
    name: "Antara Saha",
    formerRole: "Graduate Research Assistant",
    currentPosition: "Graduate Research Assistant & Ph.D. Student",
    currentInstitution: "Department of Biochemistry & Biophysics, Texas A&M University",
    location: "College Station, Texas, USA",
    researchgate: "https://www.researchgate.net/profile/Antara-Saha-5",
    image: "/Current%20Members%20and%20Alumni/antara%20saha.jpg",
    category: "phd_candidate",
    senioritySession: "MS Session 2020–2021",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "Anti-Dengue Cytokine Responses against Four Different DENV ED3s in Mice Model",
    submissionDate: "July 20, 2023",
    shortAbstract: "Quantified intracellular Th1/Th2 cytokine expression profiles (IFN-γ and IL-4) in response to immunization with DENV1–4 ED3 proteins in mice.",
    researchInterest: "Dengue virus ED3 structural immunology, cellular and humoral memory, and subunit vaccine design."
  },
  {
    id: "dr-moushumi-ghosh-roy",
    name: "Dr. Moushumi Ghosh Roy",
    formerRole: "PhD Fellow",
    currentPosition: "Assistant Professor",
    currentInstitution: "Department of Pharmacy, BGC Trust University Bangladesh",
    location: "Chittagong, Bangladesh",
    researchgate: "https://www.researchgate.net/profile/Moushumi-Ghosh-Roy",
    image: "/Current%20Members%20and%20Alumni/moushumi_ghosh_roy.jpg",
    category: "academic",
    senioritySession: "PhD Candidate",
    supervisor: "Dr. Anjuvan Singh",
    coSupervisors: "Dr. M. Monirul Islam",
    thesisTitle: "Mimicking natural anti-DENV antibody response in mice model using dengue envelope protein domain 3",
    submissionDate: "August 2023",
    shortAbstract: "Correlated human natural dengue serotype prevalence and clinical symptoms in Chattogram with multi-valent ED3 artificial immunization and T-cell responses in mice.",
    researchInterest: "Dengue sero-prevalence, co-circulating DENV serotypes in Bangladesh, anti-dengue humoral response, and natural anti-ED3 IgG responses."
  },
  {
    id: "sabrina-akter",
    name: "Sabrina Akter",
    formerRole: "M.Sc. Research Associate",
    currentPosition: "Lecturer",
    currentInstitution: "Department of Biochemistry and Biotechnology, University of Science and Technology Chittagong (USTC)",
    location: "Chittagong, Bangladesh",
    email: "sabrina@ustc.ac.bd",
    profileUrl: "https://ustc.ac.bd/fm-sabrina-akter/",
    image: "/Current%20Members%20and%20Alumni/sabrina%20akter.jpg",
    category: "academic",
    senioritySession: "MS Session 2021–2022",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "Serospecificity and sero-cross-reactivity of anti-SARS-CoV-2 antibodies developed against the Receptor Binding Domain (RBD) of Wuhan and Omicron strains in mice model",
    submissionDate: "August 2024 / September 30, 2024",
    shortAbstract: "Evaluated serospecificity and cross-reactive IgG antibody responses in mice immunized with recombinant Wuhan and Omicron (BA.4/5, JN.1) SARS-CoV-2 RBDs.",
    researchInterest: "Coronavirus variant cross-reactivity, recombinant protein expression, ELISA, and immunological assays."
  },
  {
    id: "rafiqul-shanta",
    name: "Md. Rafiqul Islam Shanta",
    formerRole: "Graduate Research Assistant",
    currentPosition: "Research Fellow",
    currentInstitution: "Bangladesh Forest Research Institute (BFRI)",
    location: "Chittagong, Bangladesh",
    linkedin: "https://www.linkedin.com/in/rafiqul-islam-691710153/",
    image: "/Current%20Members%20and%20Alumni/rafiqul%20islam%20shanto.jpg",
    category: "industry_gov",
    senioritySession: "MS Session 2021–2022",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "Anti-SARS-CoV2 IgG Responses in the Sinopharm-Vaccinated Individuals in Chattogram, Bangladesh and the Impact of Homologous and Heterologous Boosting",
    submissionDate: "September 30, 2024",
    shortAbstract: "Profiled antibody waning and cross-recognition of Omicron vs. Wuhan strains in Sinopharm-vaccinated human cohorts receiving homologous vs. heterologous booster shots.",
    researchInterest: "Anti-SARS-CoV-2 humoral responses, vaccine boosting dynamics, and serological assays."
  },
  {
    id: "asma-mazumder",
    name: "Asma Rashid Mazumder",
    formerRole: "M.Sc. Research Assistant",
    currentPosition: "Researcher & Educator",
    currentInstitution: "Higher Secondary & Tertiary Education Sector",
    location: "Chittagong, Bangladesh",
    researchgate: "https://www.researchgate.net/profile/Asma-Mazumder",
    image: "/Current%20Members%20and%20Alumni/asma%20rashid%20mozumder.jpg",
    category: "academic",
    senioritySession: "MS Session 2022–2023",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "Trivalent SARS-CoV-2 RBD Immunization in Mice Induces Wuhan, Omicron BA.5, and JN.1 Cross-Reacting anti-SARS-CoV-2 Antibodies",
    submissionDate: "August 3, 2025",
    shortAbstract: "Evaluated the immunogenicity of a trivalent RBD formulation (Wuhan + BA.5 + JN.1) in mice, demonstrating broad cross-reactivity across multiple SARS-CoV-2 variants.",
    researchInterest: "SARS-CoV-2 variant RBD cross-reactivity, pre/post vaccination serology, and immunology."
  },
  {
    id: "md-ayoub-khan",
    name: "Md. Ayoub Khan",
    formerRole: "Graduate Research Assistant (Non-Thesis)",
    currentPosition: "Office Manager, HEAT-11009-CU-sub-project",
    currentInstitution: "Department of Biochemistry and Molecular Biology, University of Chittagong",
    location: "Chittagong, Bangladesh",
    email: "ayoubkhan9377@gmail.com",
    personalEmail: "ayoubkhan9377@gmail.com",
    phone: "+8801623-119377",
    image: "/Current%20Members%20and%20Alumni/md-ayoub-khan.jpeg",
    category: "academic",
    senioritySession: "MS Session 2021–2022 (Non-Thesis)",
    supervisor: "M. Monirul Islam, PhD",
    thesisTitle: "Research Project (Non-Thesis): Serotype Cross-Talks of Anti-DENV Antibodies & Intracellular Cytokine Responses in Mice Model (with Dr. Md. Din Islam)",
    submissionDate: "December 2024",
    shortAbstract: "Conducted collaborative immunological research with Dr. Md. Din Islam investigating anti-DENV ED3 cross-talks, immune interference, and cytokine responses in murine models, alongside anti-SARS-CoV-2 serosurveillance.",
    researchInterest: "Dengue virus ED3 immunogenicity, serotype cross-talks, intracellular cytokine responses in murine models, and SARS-CoV-2 serosurveillance.",
    cvUrl: "/cv/md-ayoub-khan_cv.pdf"
  }
];

export function getAllTeamMembers(): UnifiedMemberProfile[] {
  const list: UnifiedMemberProfile[] = [];

  const PDF_MEMBERS: Record<string, string> = {
    "dr-m-monirul-islam": "/cv/dr-m-monirul-islam_cv.pdf",
    "jafrina-akter-eva": "/cv/jafrina-akter-eva_cv.pdf",
    "sadia-binte-alam": "/cv/sadia-binte-alam_cv.pdf",
    "sadiya-rahman-faiza": "/cv/sadiya-rahman-faiza_cv.pdf",
    "md-ayoub-khan": "/cv/md-ayoub-khan_cv.pdf",
  };

  // 1. Principal Investigator
  list.push({
    id: "dr-m-monirul-islam",
    name: PI_DATA.name,
    role: PI_DATA.title,
    memberType: "pi",
    category: "academic",
    senioritySession: PI_DATA.senioritySession,
    supervisor: PI_DATA.supervisor,
    coSupervisors: PI_DATA.coSupervisors,
    thesisTitle: PI_DATA.thesisTitle,
    submissionDate: PI_DATA.submissionDate,
    shortAbstract: PI_DATA.shortAbstract,
    institution: PI_DATA.institution,
    department: PI_DATA.department,
    email: PI_DATA.contact.email,
    phone: PI_DATA.contact.phone,
    location: PI_DATA.contact.office,
    image: PI_DATA.image,
    bioSnippet: PI_DATA.bio,
    researchInterest: PI_DATA.researchFocus.join("; "),
    awards: PI_DATA.awards,
    education: PI_DATA.education,
    cvUrl: PI_DATA.cvUrl || PDF_MEMBERS["dr-m-monirul-islam"]
  });

  // 2. Current Members
  CURRENT_MEMBERS.forEach((m) => {
    const extra = DETAILED_PROFILES[m.id] || {};
    list.push({
      id: m.id,
      name: extra.name || m.name,
      role: extra.role || m.role,
      memberType: "current",
      category: m.category,
      senioritySession: extra.senioritySession || m.senioritySession || m.cohort || m.batch,
      supervisor: extra.supervisor || m.supervisor,
      coSupervisors: extra.coSupervisors || m.coSupervisors,
      thesisTitle: extra.thesisTitle || m.thesisTitle,
      submissionDate: extra.submissionDate || m.submissionDate,
      shortAbstract: extra.shortAbstract || m.shortAbstract,
      institution: extra.institution || m.institution || "University of Chittagong",
      department: extra.department || m.department || "Biochemistry & Molecular Biology",
      currentPosition: extra.currentPosition || m.institution,
      currentInstitution: extra.currentInstitution || m.institution,
      email: extra.email || m.email,
      personalEmail: extra.personalEmail || m.personalEmail,
      institutionalEmail: extra.institutionalEmail || m.institutionalEmail,
      phone: extra.phone || m.phone,
      linkedin: extra.linkedin || m.linkedin,
      researchgate: extra.researchgate || m.researchgate,
      profileUrl: extra.profileUrl || m.profileUrl,
      googleScholar: extra.googleScholar || m.googleScholar,
      image: extra.image || m.image,
      researchInterest: extra.researchInterest || m.researchInterest,
      projectResponsibility: m.projectResponsibility,
      isLabManager: m.isLabManager,
      cohort: m.cohort,
      batch: m.batch,
      bioSnippet: extra.bioSnippet || m.bioSnippet,
      education: extra.education || m.education,
      experiences: extra.experiences || m.experiences,
      skills: extra.skills || m.skills,
      publications: extra.publications || m.publications,
      awards: extra.awards || m.awards,
      cvUrl: extra.cvUrl || m.cvUrl || PDF_MEMBERS[m.id] || `/cv/${m.id}_cv.md`,
      keyObjectives: extra.keyObjectives || m.keyObjectives,
      methodology: extra.methodology || m.methodology,
      expectedImpact: extra.expectedImpact || m.expectedImpact
    });
  });

  // 3. Alumni
  ALUMNI_DATA.forEach((a) => {
    const extra = DETAILED_PROFILES[a.id] || {};
    list.push({
      id: a.id,
      name: extra.name || a.name,
      role: a.formerRole,
      memberType: "alumni",
      category: a.category,
      senioritySession: extra.senioritySession || a.senioritySession,
      supervisor: extra.supervisor || a.supervisor,
      coSupervisors: extra.coSupervisors || a.coSupervisors,
      thesisTitle: extra.thesisTitle || a.thesisTitle,
      submissionDate: extra.submissionDate || a.submissionDate,
      shortAbstract: extra.shortAbstract || a.shortAbstract,
      currentPosition: extra.currentPosition || a.currentPosition,
      currentInstitution: extra.currentInstitution || a.currentInstitution,
      location: a.location,
      email: extra.email || a.email,
      personalEmail: extra.personalEmail || a.personalEmail,
      institutionalEmail: extra.institutionalEmail || a.institutionalEmail,
      phone: extra.phone || a.phone,
      linkedin: extra.linkedin || a.linkedin,
      researchgate: extra.researchgate || a.researchgate,
      profileUrl: extra.profileUrl || a.profileUrl,
      googleScholar: extra.googleScholar || a.googleScholar,
      image: extra.image || a.image,
      researchInterest: a.researchInterest,
      bioSnippet: extra.bioSnippet,
      education: extra.education || a.education,
      experiences: extra.experiences || a.experiences,
      skills: extra.skills || a.skills,
      publications: extra.publications || a.publications,
      awards: extra.awards || a.awards,
      cvUrl: extra.cvUrl || a.cvUrl || PDF_MEMBERS[a.id] || `/cv/${a.id}_cv.md`
    });
  });

  return list;
}

export function getMemberById(id: string): UnifiedMemberProfile | undefined {
  const all = getAllTeamMembers();
  // match exact id or common alias
  const normalized = id.toLowerCase().trim();
  if (normalized === "pi" || normalized === "prof-dr-mohammad-monirul-islam" || normalized === "monirul-islam") {
    return all.find((m) => m.id === "dr-m-monirul-islam");
  }
  if (normalized === "minhaj" || normalized === "minhajur" || normalized === "minhaj-rahman" || normalized === "5453" || normalized === "minhaj_bot") {
    return all.find((m) => m.id === "minhajur-rahman");
  }
  if (normalized === "mushtak" || normalized === "fuad" || normalized === "mushtakfuad" || normalized === "mohammad-mushtak-fuad" || normalized === "mohammad-muhstak-fuad" || normalized === "m-mushtak-fuad") {
    return all.find((m) => m.id === "mushtak-fuad");
  }
  if (normalized === "rafi" || normalized === "aqiv-javed" || normalized === "dr-rafi" || normalized === "aqiv") {
    return all.find((m) => m.id === "dr-md-aqiv-javed");
  }
  if (normalized === "shamsun" || normalized === "shamsun-nahar" || normalized === "shamsun-nahar-binte-mannan") {
    return all.find((m) => m.id === "dr-shamsun-nahar");
  }
  if (normalized === "ayoub" || normalized === "ayoub-khan" || normalized === "md-ayoub-khan" || normalized === "md-ayub-khan" || normalized === "ayub-khan") {
    return all.find((m) => m.id === "md-ayoub-khan");
  }
  return all.find((m) => m.id.toLowerCase() === normalized);
}
