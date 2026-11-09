export interface ProtocolItem {
  id: string;
  title: string;
  category: "virology" | "immunology" | "computational" | "plant";
  categoryLabel: string;
  description: string;
  keySteps: string[];
  equipment: string[];
  filename: string;
  fileSize: string;
  downloadUrl: string;
  associatedProjects: string[];
}

export const PROTOCOLS_DATA: ProtocolItem[] = [
  {
    id: "rt-qpcr-1step",
    title: "1-Step RT-qPCR Mastermix & Amplification Protocol",
    category: "virology",
    categoryLabel: "Virology & Diagnostics",
    description: "Standard operating procedure for one-step real-time reverse transcription PCR, covering RNase-free glassware preparation, primer-probe mastermix assembly, and thermal cycling parameters for viral pathogen surveillance.",
    keySteps: [
      "Baking glassware at 180–200°C for ≥4 hours to destroy RNases",
      "TE buffer & DEPC-treated nuclease-free water preparation",
      "Multiplex primer and hydrolysis probe mastermix formulation",
      "qTOWER³ G linear thermal cycling and threshold baseline calibration"
    ],
    equipment: ["Analytik Jena qTOWER³ G qPCR", "Benchmark SureAir™ PCR Workstation", "Refrigerated Microcentrifuge"],
    filename: "1-Step RT-qPCR Protocol.docx",
    fileSize: "26 KB",
    downloadUrl: "/Protocols%20Collection/1-Step%20RT-qPCR%20Protocol.docx",
    associatedProjects: ["dengue-seroprevalence-genomic-surveillance", "chikungunya-genomics-pathogenesis"]
  },
  {
    id: "rna-blood",
    title: "Extraction & Purification of Viral RNA from Whole Blood",
    category: "virology",
    categoryLabel: "Virology & Diagnostics",
    description: "Phase-by-phase extraction protocol isolating high-purity total and viral genomic RNA from human clinical whole blood samples with beta-mercaptoethanol lysis optimization.",
    keySteps: [
      "RNA Lysis Buffer (RLA) preparation with β-mercaptoethanol (BME)",
      "Clinical specimen homogenization and cellular disruption",
      "Silica-membrane spin column purification and on-column DNase digestion",
      "Elution in nuclease-free water and A260/A280 spectrophotometric validation"
    ],
    equipment: ["Class II Biosafety Cabinet", "Refrigerated Microcentrifuge", "Vortex Mixer"],
    filename: "RNA Extraction From Blood.docx",
    fileSize: "20 KB",
    downloadUrl: "/Protocols%20Collection/RNA%20Extraction%20From%20Blood.docx",
    associatedProjects: ["dengue-seroprevalence-genomic-surveillance", "chikungunya-genomics-pathogenesis"]
  },
  {
    id: "rna-serum",
    title: "Extraction & Purification of Total RNA from Serum",
    category: "virology",
    categoryLabel: "Virology & Diagnostics",
    description: "Optimized protocol for recovery of cell-free circulating viral genomic RNA from patient serum samples, calibrated for acute viremic titers in arboviral infections.",
    keySteps: [
      "Preparation of serum lysis buffers with optimized reducing agents",
      "Inactivation of serum RNases and viral envelope capsid lysis",
      "Alcohol-mediated nucleic acid precipitation and column bind-wash-elute cycles",
      "Direct preservation at -80°C in Cryogenic Specimen Biobank"
    ],
    equipment: ["Class II Biosafety Cabinet", "Cryogenic Biobank (-80°C)", "Microcentrifuge"],
    filename: "RNA Extraction From Serum.docx",
    fileSize: "19 KB",
    downloadUrl: "/Protocols%20Collection/RNA%20Extraction%20From%20Serum.docx",
    associatedProjects: ["dengue-seroprevalence-genomic-surveillance", "chikungunya-genomics-pathogenesis"]
  },
  {
    id: "rna-spleen",
    title: "Extraction & Purification of Total RNA from Murine Spleen Tissue",
    category: "virology",
    categoryLabel: "Virology & Diagnostics",
    description: "Specialized protocol detailing tissue mass constraints (≤15 mg) and shear parameters required to prevent high-viscosity lysates when isolating immune lymphoid RNA from immunized mouse spleens.",
    keySteps: [
      "Strict starting mass limit (≤15 mg spleen tissue) to prevent lysate viscosity overload",
      "Rapid mechanical micro-pestle or bead homogenization in lysis buffer",
      "Viscosity reduction and cellular debris pelleting",
      "RNA purification for downstream cytokine profiling and IgG repertoire sequencing"
    ],
    equipment: ["Benchmark Pulse 650 Homogenizer", "Class II Biosafety Cabinet", "qTOWER³ G qPCR"],
    filename: "RNA Extraction From Spleen.docx",
    fileSize: "19 KB",
    downloadUrl: "/Protocols%20Collection/RNA%20Extraction%20From%20Spleen.docx",
    associatedProjects: ["dengue-seroprevalence-genomic-surveillance", "jev-subunit-vaccine-murine-evaluation"]
  },
  {
    id: "indirect-elisa",
    title: "Indirect ELISA Protocol, Calculations & Serological Data Analysis",
    category: "immunology",
    categoryLabel: "Immunology & Serology",
    description: "Comprehensive guide covering molarity and buffer math (% w/v, mM mass, C1V1=C2V2, RPM vs. RCF), antigen coating, blocking, serial serum dilution, and optical density (OD450) sigmoid curve fitting.",
    keySteps: [
      "Stock buffer formulation (10x PBS, coating buffer pH 9.6, wash buffer PBST)",
      "Solid-phase antigen coating and BSA/casein blocking optimization",
      "Serial dilution series of clinical plasma or murine immune sera",
      "HRP-conjugated secondary antibody incubation and TMB chromogenic kinetics",
      "OD450 measurement on Tecan Infinite 200 PRO and endpoint titer calculation"
    ],
    equipment: ["Tecan Infinite 200 PRO Microplate Reader", "Multichannel Pipettes", "Borosil Ultrapure Water"],
    filename: "ELISA Protocol & Data Analysis.docx",
    fileSize: "58 KB",
    downloadUrl: "/Protocols%20Collection/ELISA%20Protocol%20%26%20Data%20Analysis.docx",
    associatedProjects: ["dengue-seroprevalence-genomic-surveillance", "jev-subunit-vaccine-murine-evaluation"]
  },
  {
    id: "flow-cytometry",
    title: "Flow Cytometry Immunophenotyping & Whole Blood RBC Lysis",
    category: "immunology",
    categoryLabel: "Immunology & Serology",
    description: "Standard flow cytometry procedure for blood sample preparation, red blood cell ammonium chloride lysis, cell suspension washing, fluorophore-conjugated antibody staining, and cytometer gating.",
    keySteps: [
      "Blood aliquot preparation (20–30 µL) in 10 mL / 5 mL FACS tubes",
      "RBC lysis buffer addition and 5-minute room temperature incubation",
      "Low-speed centrifugation (1600 rpm / 4°C) and pellet washing",
      "Surface antigen antibody fluorophore cocktail staining (CD3/CD4/CD8/CD19)",
      "Acquisition and population gating on Beckman Coulter CytoFLEX"
    ],
    equipment: ["Beckman Coulter CytoFLEX Flow Cytometer", "Refrigerated Centrifuge", "FACS Tubes"],
    filename: "Flow Cytometry Protocol.docx",
    fileSize: "21 KB",
    downloadUrl: "/Protocols%20Collection/Flow%20Cytometry%20Protocol.docx",
    associatedProjects: ["dengue-seroprevalence-genomic-surveillance", "jev-subunit-vaccine-murine-evaluation"]
  },
  {
    id: "mice-study",
    title: "In Vivo Murine Immunization, Challenge & Buffer Preparation",
    category: "immunology",
    categoryLabel: "Immunology & Serology",
    description: "Protocol detailing 10x PBS buffer chemistry, antigen-adjuvant formulation, immunization dosing schedules in BALB/c and AG129 mice, and blood/spleen harvesting for vaccine evaluation.",
    keySteps: [
      "10x Phosphate-buffered saline (PBS, pH 7.4) preparation (Na2HPO4, NaH2PO4, KCl, NaCl)",
      "Subunit antigen emulsion with nano-adjuvants",
      "Subcutaneous and intramuscular prime-boost vaccination scheduling",
      "Retro-orbital / tail-vein blood collection and aseptic organ harvesting"
    ],
    equipment: ["Class II Biosafety Cabinet", "Animal Facility Suite", "Precision Balances"],
    filename: "Mice Study Protocol.docx",
    fileSize: "539 KB",
    downloadUrl: "/Protocols%20Collection/Mice%20Study%20Protocol.docx",
    associatedProjects: ["dengue-seroprevalence-genomic-surveillance", "jev-subunit-vaccine-murine-evaluation"]
  },
  {
    id: "ag-ab-docking",
    title: "Antigen-Antibody Docking & Interface Thermodynamics using HADDOCK 2.4",
    category: "computational",
    categoryLabel: "Computational Structural Biology",
    description: "End-to-end computational pipeline for structural preparation in PyMOL/ChimeraX, PDB cleaning, active/passive restraint definition, rigid-body docking, semi-flexible refinement, and PRODIGY binding free energy analysis.",
    keySteps: [
      "PDB sequence trimming, heteroatom/water removal, and chain renaming in PyMOL",
      "Epitope and paratope CDR loop residue definition (active/passive restraints)",
      "HADDOCK 2.4 webserver parameter configuration (it0, it1, and water refinement)",
      "Cluster analysis, Z-score ranking, and interfacial buried surface area (BSA) calculation",
      "PRODIGY biophysical contact mapping and binding affinity (ΔG / Kd) prediction"
    ],
    equipment: ["HADDOCK 2.4 Server", "PRODIGY Biophysical Suite", "PyMOL & UCSF ChimeraX", "High-Performance Workstation"],
    filename: "Ag-Ab Docking Protocol.docx",
    fileSize: "26 KB",
    downloadUrl: "/Protocols%20Collection/Ag-Ab%20Docking%20Protocol.docx",
    associatedProjects: ["sars-cov-2-epitope-escape-structural-biology", "chimeric-pan-dengue-vaccine-design"]
  },
  {
    id: "aquilaria-cutting",
    title: "Clonal Propagation of Aquilaria malaccensis via Stem Cuttings",
    category: "plant",
    categoryLabel: "Plant Molecular Biology",
    description: "Field-ready protocol developed by the MSI Lab for the vegetative clonal propagation and rooting induction of critically endangered agarwood (Aquilaria malaccensis) stem cuttings.",
    keySteps: [
      "Donor mother-plant selection and juvenile orthotropic branch harvesting",
      "Nodal cutting preparation, leaf surface area reduction, and anti-fungal washing",
      "Auxin hormone conditioning under humidity-controlled mist propagation chambers",
      "Adventitious rooting monitoring, survival rate quantification, and hardening"
    ],
    equipment: ["Plant Growth Suite", "Laminar Flow Hood", "Precision Micropipettes"],
    filename: "Aquilaria Malaccensis Cutting Protocol Design.docx",
    fileSize: "6.6 MB",
    downloadUrl: "/Protocols%20Collection/Aquilaria%20Malaccensis%20Cutting%20Protocol%20Design.docx",
    associatedProjects: ["aquilaria-malaccensis-resin-induction"]
  },
  {
    id: "iba-quick-dip",
    title: "IBA Quick-Dip Hormone Preparation Guide for Stem Cuttings",
    category: "plant",
    categoryLabel: "Plant Molecular Biology",
    description: "Preparation guide for synthetic auxin Indole-3-butyric acid (IBA) stock solutions, dissolution chemistry, potassium hydroxide/ethanol co-solvents, and concentration titration for agarwood rooting.",
    keySteps: [
      "IBA chemical dissolution in absolute ethanol / 1M KOH",
      "Preparation of concentrated stock solutions (1000–5000 ppm)",
      "Basal stem quick-dip exposure timing (5–10 seconds)",
      "Safety precautions and hormone storage longevity protocols"
    ],
    equipment: ["Analytical Balance", "pH Meter", "Chemical Fume Hood"],
    filename: "IBA_Quick_Dip_Preparation_Guide.docx",
    fileSize: "31 KB",
    downloadUrl: "/Protocols%20Collection/IBA_Quick_Dip_Preparation_Guide.docx",
    associatedProjects: ["aquilaria-malaccensis-resin-induction"]
  },
  {
    id: "rna-agarwood",
    title: "CTAB-Based Total RNA Extraction from Recalcitrant Agarwood Heartwood",
    category: "plant",
    categoryLabel: "Plant Molecular Biology",
    description: "Specialized modified CTAB protocol for extracting intact, high-quality total RNA from woody, polyphenol- and polysaccharide-dense Aquilaria malaccensis tissues for terpene synthase RT-qPCR.",
    keySteps: [
      "Liquid nitrogen grinding of resinous heartwood into ultra-fine powder",
      "Modified CTAB lysis buffer with 2% PVP to bind and precipitate polyphenols",
      "Chloroform:isoamyl alcohol (24:1) phase separation and lithium chloride RNA precipitation",
      "RNA integrity assessment by denaturing agarose gel and RT-qPCR gene expression analysis"
    ],
    equipment: ["Liquid Nitrogen Cryocooler", "Benchmark Pulse 650 Homogenizer", "qTOWER³ G qPCR"],
    filename: "RNA Extraction From Agarwood.docx",
    fileSize: "31 KB",
    downloadUrl: "/Protocols%20Collection/RNA%20Extraction%20From%20Agarwood.docx",
    associatedProjects: ["aquilaria-malaccensis-resin-induction"]
  }
];
