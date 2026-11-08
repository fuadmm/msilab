export interface ResearchPillar {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  description: string;
  keyAspects: string[];
  currentProjects: string[];
}

export interface PathogenFocus {
  id: string;
  name: string;
  organism: string;
  threatLevel: string;
  coreTargets: string[];
  description: string;
  labAdvancement: string;
}

export interface ObjectiveArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  methodologies: string[];
  deliverables: string[];
}

export interface InstrumentFacility {
  id: string;
  name: string;
  model: string;
  brand: string;
  category: string;
  purpose: string;
  techniques: string[];
  specs: string;
  image: string;
  officialUrl: string;
}

export const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    id: "dengue-ed3",
    title: "Dengue Envelope Domain III (ED3) Biology",
    shortDesc: "Exploring residue-level determinants of serospecificity and cross-reactivity across all four Dengue serotypes (DENV1–4).",
    iconName: "ShieldCheck",
    description: "Exploring residue-level determinants of serospecificity and cross-reactivity across all four Dengue serotypes (DENV1–4). The lab utilizes epitope grafting and domain-based constructs to distinguish natural infection antibody profiles from artificial immunization responses.",
    keyAspects: [
      "Epitope grafting on ED3 scaffold proteins",
      "Serospecific vs. cross-reactive antibody differentiation",
      "Decoupling neutralizing titers from Antibody-Dependent Enhancement (ADE)",
      "Recombinant DENV 1–4 antigen expression in E. coli T7 SHuffle"
    ],
    currentProjects: [
      "Dual-serospecific ED3 engineered immunogens (DENV-3/DENV-4)",
      "Mapping ADE-neutralizing residue determinants on the lateral ridge",
      "Regional Dengue patient sera surveillance and serotype antibody mapping"
    ]
  },
  {
    id: "peptide-tags",
    title: "Peptide Tag Technology & Protein Solubility",
    shortDesc: "Development of Solubility Enhancing (SEP) and Solubility Controlling (SCP) peptide tags.",
    iconName: "Microscope",
    description: "Development and application of Solubility Enhancing Peptide (SEP) tags, Solubility Controlling Peptide (SCP) tags, and poly-amino acid peptide tags (poly-Ile, poly-Asp, poly-Lys). These tags manipulate aggregate sizes, suppress inclusion body misfolding, and modulate antigen immunogenicity in vivo without compromising specificity.",
    keyAspects: [
      "Patented solubility-controlling peptide tags (WO2019031446)",
      "Poly-amino acid tag formulations (poly-Ile, poly-Asp, poly-Lys)",
      "Bacterial inclusion body refolding & RP-HPLC purification",
      "In vivo immunogenicity modulation without carrier protein conjugates"
    ],
    currentProjects: [
      "SEP-tag mediated solubilization of refractory viral envelope proteins",
      "Controlled aggregation kinetics of subunit vaccine candidates",
      "Comparative biophysical analysis using ESI-TOF / MALDI-TOF MS"
    ]
  },
  {
    id: "sarscov2-immunology",
    title: "SARS-CoV-2 Variant Immunology & Booster Strategies",
    shortDesc: "Profiling cross-reacting IgG antibodies against Wuhan, Omicron (BA.4/5, JN.1), and booster regimens.",
    iconName: "Activity",
    description: "Profiling cross-reacting IgG antibodies against Wuhan, Omicron (BA.4/5, JN.1), and monovalent/multivalent RBD immunizations. The lab evaluates homologous vs. heterologous vaccine boosting regimens in both animal models and vaccinated human cohorts in Chattogram.",
    keyAspects: [
      "Wuhan vs. Omicron (BA.4/5, JN.1) RBD IgG antibody kinetics",
      "Monovalent, bivalent, and trivalent subunit formulation testing",
      "Homologous vs. heterologous mix-and-match booster profiling",
      "Swiss albino mice artificial immunization models"
    ],
    currentProjects: [
      "Regional Sinopharm booster antibody persistence in Chattogram cohorts",
      "Bacterially expressed non-glycosylated Omicron RBD constructs",
      "Thermodynamic HADDOCK docking of spike-ACE2 binding dynamics"
    ]
  },
  {
    id: "cellular-memory",
    title: "Cellular Immune Memory & Monoclonal Antibodies",
    shortDesc: "Investigating T-cell memory, Th1/Th2 cytokine expression (IFN-γ/IL-4), and developing mAbs.",
    iconName: "Dna",
    description: "Investigating T-cell memory generation, intracellular Th1/Th2 cytokine expression (IFN-γ and IL-4), and developing monoclonal antibodies (mAbs) against Dengue ED3 variants to dissect neutralisation mechanics.",
    keyAspects: [
      "Intracellular cytokine staining for IFN-γ and IL-4 (Th1/Th2 pathways)",
      "Sensitized lymphocyte culture and recall proliferation assays",
      "Monoclonal antibody development against ED3 variants",
      "Flow cytometric immunophenotyping of CD4+/CD8+ memory pools"
    ],
    currentProjects: [
      "Long-term memory T-cell longevity following subunit immunization",
      "Isolation of cross-neutralizing anti-Dengue murine mAbs",
      "Correlating humoral IgG titers with cellular cytokine secretion"
    ]
  },
  {
    id: "mentorship-outreach",
    title: "Academic Mentorship & Regional Health Impact",
    shortDesc: "Rigorous hands-on training for MS, PhD & postdocs and translational public health research.",
    iconName: "Users",
    description: "MSI Lab provides rigorous, hands-on training to undergraduate, MS, PhD, and Post-Doctoral scholars in state-of-the-art protein expression, purification, and immunological testing. Conducting translational research directly relevant to Chattogram and Bangladesh, providing empirical data on viral epidemiology.",
    keyAspects: [
      "Over two dozen postgraduate theses completed under Dr. Islam's supervision",
      "Direction of 100,000+ COVID-19 real-time PCR diagnostics for the nation",
      "Active research synergy with Kuroda Lab at TUAT Tokyo and World Bank HEAT",
      "Animal Ethics Review Board oversight and biosafe laboratory protocols"
    ],
    currentProjects: [
      "Postgraduate thesis mentoring in recombinant protein engineering",
      "Bilateral academic exchange programs with Japanese universities",
      "Field sero-epidemiology studies across regional clinical centers"
    ]
  }
];

export const PATHOGENS_DATA: PathogenFocus[] = [
  {
    id: "sars-cov-2",
    name: "SARS-CoV-2 (Coronaviridae)",
    organism: "Severe Acute Respiratory Syndrome Coronavirus 2",
    threatLevel: "Global Pandemic / Endemic Respiratory Threat",
    coreTargets: ["Spike Glycoprotein (S)", "Receptor Binding Domain (RBD)", "Nucleocapsid (N)"],
    description: "Rapidly mutating positive-sense RNA virus. We focus on neutralizing antibody persistence, molecular interaction with human ACE2, and designing cost-effective non-glycosylated bacterial subunit antigens that resist variant evasion.",
    labAdvancement: "Engineered stable bacterially expressed Omicron BA.5 RBD eliciting comparable neutralizations to mammalian-cell-derived antigens (Molecules 2024)."
  },
  {
    id: "dengue-virus",
    name: "Dengue Virus (Flaviviridae: DENV 1–4)",
    organism: "Mosquito-borne arbovirus (4 antigenically distinct serotypes)",
    threatLevel: "High Endemic Outbreak Threat in Bangladesh & Tropics",
    coreTargets: ["Envelope Domain III (ED3)", "Non-structural Protein 1 (NS1)", "Envelope Dimer Interface"],
    description: "Dengue causes severe plasma leakage and dengue shock syndrome due to Antibody-Dependent Enhancement (ADE). We investigate structural differences among the four serotypes to engineer balanced tetravalent vaccines that induce protective neutralizing antibodies without ADE risk.",
    labAdvancement: "Uncovered structural drivers of DENV1–4 ED3 immunogenicity and developed peptide-tagged constructs preventing severe cross-reactivity (APJTM 2024, IJMS 2023)."
  },
  {
    id: "vibrio-cholerae",
    name: "Vibrio cholerae (Vibrionaceae)",
    organism: "Gram-negative mucosal bacterium (O1 and O139 serogroups)",
    threatLevel: "Major Endemic Enteric Pathogen in South Asia",
    coreTargets: ["Cholera Toxin Subunit B (CTB)", "Toxin-Coregulated Pilus (TCP)", "Outer Membrane Proteins"],
    description: "Etiological agent of acute watery cholera diarrhea. Our research examines mucosal secretory IgA kinetics, memory B-cell induction in gut-associated lymphoid tissue, and using engineered CTB as a molecular mucosal delivery vehicle.",
    labAdvancement: "Recombinant production and immunological characterization of bacterial adhesin-toxoid complexes for enhanced mucosal protection."
  }
];

export const OBJECTIVES_DATA: ObjectiveArea[] = [
  {
    id: "strategic-interventions",
    number: "01",
    title: "Strategic Interventions Against Viral Diseases",
    subtitle: "Countering SARS-CoV-2 and Dengue via Multimodal Structural & Molecular Platforms",
    description: "Deploying high-resolution Cryo-EM models, single-cell transcriptomics, high-throughput sequencing, ELISA, and real-time PCR to map neutralizing epitopes, trace emerging escape mutations, and develop stable subunit candidates.",
    image: "/images/objectives/domain-01-vaccines.jpg",
    tag: "Viral Vaccinology",
    methodologies: [
      "Cryo-EM 3D Reconstruction & Molecular Dynamics Simulations",
      "Single-cell RNA sequencing (scRNA-seq) of antigen-specific B & T cells",
      "High-throughput multiplex real-time RT-PCR and viral load quantification",
      "Neutralization assays (microneutralization & pseudo-typed virus platforms)"
    ],
    deliverables: [
      "Epitope catalog of conserved cross-neutralizing binding footprints",
      "Scalable subunit vaccine prototypes for regional endemic viral threats",
      "Clinical sero-surveillance reports for public health stakeholders"
    ]
  },
  {
    id: "molecular-mechanisms",
    number: "02",
    title: "Deciphering Molecular Immune Mechanisms",
    subtitle: "Elucidating Intracellular Cascades & Engineering Precision Modulators",
    description: "Unraveling the biophysical signaling events that distinguish protective immune responses from pathogenic hyper-inflammation, and creating engineered bispecific modulators and small molecules to fine-tune immune checkpoints.",
    image: "/images/objectives/domain-02-host-signaling.jpg",
    tag: "Host Signaling & PRRs",
    methodologies: [
      "Multi-color Flow Cytometry (FACS) for intracellular cytokine staining",
      "Phospho-proteomic profiling of downstream kinase networks",
      "Surface Plasmon Resonance (SPR) and Bio-layer Interferometry (BLI) kinetics",
      "In vitro cell-based reporter assays for NF-kB and type-I interferon activation"
    ],
    deliverables: [
      "Mechanistic models of T-cell exhaustion during chronic viral infections",
      "Engineered bispecific antibody constructs with enhanced effector recruitment",
      "Small-molecule lead inhibitors targeting viral protease-host interactions"
    ]
  },
  {
    id: "protein-technology-advances",
    number: "03",
    title: "Advancements in Protein Technology",
    subtitle: "Patented Peptide Tags, Solubilization Systems & Engineered Monoclonal Antibodies",
    description: "Developing proprietary molecular tools—including patented solubility-controlling peptide tags (WO2019031446)—that solve protein aggregation, increase yields in low-cost bacterial expression systems, and fine-tune in vivo immunogenicity.",
    image: "/images/objectives/domain-03-protein-technology.jpg",
    tag: "Patent WO2019031446",
    methodologies: [
      "Recombinant expression in specialized E. coli and mammalian host systems",
      "Fast Protein Liquid Chromatography (FPLC) & High-Performance Liquid Chromatography (HPLC)",
      "Circular Dichroism (CD) spectroscopy & differential scanning fluorimetry (DSF)",
      "Site-directed mutagenesis and computational Rosetta de novo design"
    ],
    deliverables: [
      "Commercial-ready expression cassettes incorporating solubility peptide tags",
      "Monoclonal antibody candidates against therapeutic targets with reduced immunogenicity",
      "Thermostable diagnostic reagents functional without cold-chain storage"
    ]
  },
  {
    id: "multidisciplinary-synergy",
    number: "04",
    title: "Promoting Multidisciplinary Synergy",
    subtitle: "Cross-Border Collaborations with WHO, CDC, TUAT Japan & National Partners",
    description: "Bridging clinical epidemiology, biophysics, chemistry, and computational biology through enduring alliances with international universities, global health organizations, and national research institutes.",
    image: "/images/objectives/domain-04-public-health.jpg",
    tag: "Global Public Health",
    methodologies: [
      "Bilateral researcher exchange programs and joint Ph.D. co-supervision",
      "Joint sample sharing protocols in compliance with ethics review frameworks",
      "Multidisciplinary computational-experimental design feedback cycles",
      "Policy synthesis and translation for public health deployment"
    ],
    deliverables: [
      "High-impact peer-reviewed joint scientific publications",
      "Direct policy contributions to regional viral response guidelines",
      "Sustained pipeline of globally competitive young researchers"
    ]
  }
];

export const INSTRUMENTS_DATA: InstrumentFacility[] = [
  {
    id: "cytoflex-flow-cytometer",
    name: "Beckman Coulter CytoFLEX Flow Cytometer",
    model: "CytoFLEX Research Cytometer",
    brand: "Beckman Coulter Life Sciences",
    category: "Cellular Immunology & Single-Cell Phenotyping",
    purpose: "Multiparametric single-cell immunophenotyping, high-sensitivity nanoparticle & extracellular vesicle resolution, and intracellular cytokine dynamics.",
    techniques: [
      "Multiparametric Single-Cell Immunophenotyping",
      "Extracellular Vesicle (EV) Analysis (down to 80 nm)",
      "Intracellular Cytokine Staining (ICS)",
      "T-Cell & B-Cell Activation / Apoptosis Profiling"
    ],
    specs: "Wavelength Division Multiplexing (WDM) optics, up to 3 active lasers (488/638/405 nm), 13 fluorescence channels, 15,000 events/sec, >7 decades linear dynamic range.",
    image: "/facilities/cytoflex.png",
    officialUrl: "https://www.beckman.com/flow-cytometry/research-flow-cytometers/cytoflex"
  },
  {
    id: "hitachi-chromaster-hplc",
    name: "Hitachi Chromaster HPLC System",
    model: "Chromaster Series (5110 Pump / 5210 Autosampler / 5430 DAD)",
    brand: "Hitachi High-Tech Science",
    category: "Analytical Chromatography & Phytochemical Profiling",
    purpose: "High-resolution chromatographic separation of botanical bioactive extracts, antiviral natural metabolites, and purity verification of recombinant molecules.",
    techniques: [
      "Reversed-Phase HPLC (RP-HPLC)",
      "Natural Product / Phytochemical Fractionation",
      "Metabolite Fingerprinting & Peak Purity Analysis",
      "Quantitative Retention Time Profiling"
    ],
    specs: "Low-pulsation quaternary solvent delivery (up to 40 MPa / 400 bar), sub-ambient autosampler cooling (4°C), high-sensitivity Diode Array Detector (DAD, 190–900 nm).",
    image: "/facilities/chromaster.jpg",
    officialUrl: "https://www.hitachi-hightech.com/global/en/products/analytical-systems/hplc/hplc/chromaster.html"
  },
  {
    id: "thermo-vanquish-core-hplc",
    name: "Thermo Scientific Vanquish Core HPLC System",
    model: "Vanquish Core LC System",
    brand: "Thermo Fisher Scientific",
    category: "Biomolecular Liquid Chromatography & QC",
    purpose: "Routine analytical liquid chromatography, recombinant antigen purity verification, peptide formulation quality control, and method translation.",
    techniques: [
      "Ion-Exchange & Size-Exclusion HPLC",
      "Antigen & Peptide Tag Quality Control",
      "High-Throughput Assay Quantification",
      "Automated Mobile Phase Monitoring"
    ],
    specs: "Operational pressure up to 700 bar (10,000 psi), quaternary solvent blending, SmartInject precision technology, temperature-controlled column compartment (5°C to 85°C).",
    image: "/facilities/vanquish_core.jpg",
    officialUrl: "https://www.thermofisher.com/bd/en/home/industrial/chromatography/liquid-chromatography-lc/hplc-uhplc-systems/vanquish-core-hplc-system.html"
  },
  {
    id: "haier-biomedical-freeze-dryer",
    name: "Haier Biomedical Laboratory Freeze Dryer",
    model: "Pilot Laboratory Freeze-Drying System",
    brand: "Haier Biomedical",
    category: "Lyophilization & Formulation Stabilization",
    purpose: "Sublimation vacuum freeze-drying of recombinant antigens, vaccine candidates, and thermolabile diagnostic enzymes for cold-chain-free preservation.",
    techniques: [
      "Vacuum Sublimation Lyophilization",
      "Cold-Chain-Free Antigen Stabilization",
      "Diagnostic Enzyme & PCR Mastermix Drying",
      "Moisture-Depleted Peptide Preservation"
    ],
    specs: "Ultra-low trap temperature down to -80°C / -55°C, high-efficiency vacuum pump (<1 Pa ultimate vacuum), multi-port manifold valves for flasks & vials, automated defrosting.",
    image: "/facilities/freeze_dryer.png",
    officialUrl: "https://www.haiermedical.com/freeze-dryer/Freeze-Dryer.html"
  },
  {
    id: "haier-biomedical-refrigerated-centrifuge",
    name: "Haier Biomedical Benchtop High-Speed Refrigerated Centrifuge",
    model: "LX-185T100R / LX-165T2R Series",
    brand: "Haier Biomedical",
    category: "Refrigerated Centrifugation & Biomolecular Fractionation",
    purpose: "High-speed refrigerated separation and purification of cellular fractions, macromolecular proteins, blood, body fluids, DNA/RNA, plasmids, bacteria, and viral particles.",
    techniques: [
      "Cellular Fractionation & Organelle Pelleting",
      "Plasmid DNA & Total RNA Isolation",
      "Recombinant Protein Harvesting & Clarification",
      "Blood, Serum & Biological Fluid Clarification"
    ],
    specs: "Max speed up to 18,500 rpm (LX-185T100R) / 16,500 rpm (LX-165T2R), max capacity 4 × 100 mL, precision fuzzy PID temperature control (-20°C to +40°C), Smart Anti-Vibration safety lock, real-time vibration sensor monitoring, whisper-quiet operation (≤52 dB(A)).",
    image: "/facilities/haier_centrifuge.png",
    officialUrl: "https://www.haiermedical.com/centrifuge/Benchtop-high-speed-refrigerated-centrifuge.html"
  },
  {
    id: "analytik-jena-qtower-3g",
    name: "Analytik Jena qTOWER³ G Real-Time qPCR System",
    model: "qTOWER³ G (qTOWER 3G) Real-Time Thermal Cycler",
    brand: "Analytik Jena (Endress+Hauser)",
    category: "Molecular Diagnostics & Quantitative PCR",
    purpose: "Multiplex molecular detection of tropical viral pathogens (Dengue, Chikungunya, SARS-CoV-2), linear thermal gradient optimization, and viral copy number kinetics.",
    techniques: [
      "Multiplex Real-Time RT-qPCR (up to 6 targets)",
      "Linear Temperature Gradient Optimization (40°C Span)",
      "Absolute Viral Load Quantification",
      "High-Resolution Melt (HRM) Genotyping"
    ],
    specs: "Patented fiber-optic shuttle system, 96-well silver block with gold coating, temperature uniformity ±0.15°C, fast ramp rates up to 8°C/sec, linear gradient over 12 columns.",
    image: "/facilities/qtower_3g.jpg",
    officialUrl: "https://www.analytik-jena.com/products/life-science/pcr-qpcr-thermal-cycler/real-time-thermal-cycler-qpcr/qtower3-series/"
  },
  {
    id: "illumina-miniseq-ngs",
    name: "Illumina MiniSeq Sequencing System",
    model: "MiniSeq System",
    brand: "Illumina",
    category: "Next-Generation Sequencing (NGS) & Viral Surveillance",
    purpose: "Targeted whole-genome sequencing of clinical arbovirus isolates, DENV/CHIKV phylogenetic lineage tracing, and deep mutational epitope scanning.",
    techniques: [
      "Targeted Viral Whole-Genome Sequencing (WGS)",
      "Epitope Escape Mutational Tracking",
      "Metagenomic Pathogen Identification",
      "Amplicon Sequencing & RNA-Seq Validation"
    ],
    specs: "Sequencing by Synthesis (SBS) technology, paired-end read lengths up to 2 x 150 bp, output up to 7.5 Gb per run (up to 25 million paired-end reads), integrated onboard cluster generation.",
    image: "/facilities/miniseq.png",
    officialUrl: "https://www.illumina.com/systems/sequencing-platforms/miniseq.html"
  },

  {
    id: "jasco-fp8600-spectrofluorometer",
    name: "JASCO FP-8600 High-Sensitivity Spectrofluorometer",
    model: "FP-8600 Series",
    brand: "JASCO Corporation",
    category: "Biophysical Protein Folding & Fluorimetry",
    purpose: "Probing intrinsic protein fluorescence, conformational folding transitions, thermal/chemical denaturation, and receptor-ligand binding kinetics.",
    techniques: [
      "Intrinsic Tryptophan / Tyrosine Fluorescence",
      "Thermal & Chemical Unfolding (Denaturation)",
      "Fluorescence Resonance Energy Transfer (FRET)",
      "Fluorophore-Tagged Binding Affinity Equilibria"
    ],
    specs: "Wide wavelength coverage: Ex 200–1010 nm / Em 200–1010 nm, highest sensitivity with S/N > 2,500:1 (RMS), scan speed up to 60,000 nm/min, Peltier temperature control.",
    image: "/facilities/jasco_fp8600.png",
    officialUrl: "https://www.jasco.co.uk/fp-8600.html"
  },
  {
    id: "tecan-infinite-200-pro",
    name: "Tecan Infinite 200 PRO Multimode Microplate Reader",
    model: "Infinite 200 PRO Platform",
    brand: "Tecan Life Sciences",
    category: "High-Throughput Serology & Multimode Detection",
    purpose: "High-throughput ELISA serosurveys, neutralizing antibody titer quantification, cell cytotoxicity, and fluorometric/luminescent binding assays.",
    techniques: [
      "High-Throughput Quantitative ELISA (IgM/IgG)",
      "Multimode Absorbance, Fluorescence & Luminescence",
      "Enzymatic Reaction Kinetics & IC50 Determination",
      "Cell Viability & Cytotoxicity Assays"
    ],
    specs: "Quad4 Monochromators™ / filter optics (230–1000 nm), orbital/linear plate shaking, temperature control up to 42°C, compatible with 6- to 384-well microplates.",
    image: "/facilities/tecan_infinite200.jpg",
    officialUrl: "https://lifesciences.tecan.com/plate_readers/infinite_200_pro"
  },
  {
    id: "borosil-omniatap-xs-touch",
    name: "Borosil Scientific OmniTap XS Touch Water Purification",
    model: "OmniTap XS Touch Series",
    brand: "Borosil Scientific / Stakpure",
    category: "Critical Utilities & Ultrapure Buffer Formulation",
    purpose: "Continuous on-demand production of Type 1 (18.2 MΩ·cm) ultrapure water for molecular biology, HPLC mobile phases, cell culture, and NGS workflows.",
    techniques: [
      "Type 1 Ultrapure Water Dispensing (18.2 MΩ·cm)",
      "Pyrogen-Free & Endotoxin-Depleted Buffer Preparation",
      "HPLC & FPLC Mobile Phase Formulation",
      "Nuclease-Free (RNase/DNase-Free) Reagent Prep"
    ],
    specs: "Resistivity 18.2 MΩ·cm at 25°C, TOC < 5 ppb, dual-wavelength UV photo-oxidation (185/254 nm), 0.22 µm sterile capsule filter, ergonomic touchscreen touch-dispense tap.",
    image: "/facilities/omniatap_xs.png",
    officialUrl: "https://www.borosilscientific.com/product/omniatap-xs-touch/"
  },
  {
    id: "benchmark-pulse-650",
    name: "Benchmark Scientific Pulse 650 Ultrasonic Homogenizer",
    model: "Pulse 650™ (DP0650) with Soundproof Enclosure",
    brand: "Benchmark Scientific",
    category: "Cell Lysis, Homogenization & Sonication",
    purpose: "High-power ultrasonic cavitation for bacterial and mammalian cell disruption, genomic DNA shearing, inclusion body extraction, and nanoparticle emulsification under temperature-controlled, soundproof conditions.",
    techniques: [
      "Ultrasonic Bacterial & Yeast Cell Disruption",
      "Genomic DNA & Chromatin Shearing for NGS",
      "Inclusion Body Extraction & Antigen Solubilization",
      "Nanoparticle Dispersion & Emulsification"
    ],
    specs: "650 W maximum power (variable 6.5–650 W), 20–25 kHz operating frequency, volume range 0.1–500 mL, 7-inch color touchscreen, motorized probe lift, soundproof chamber with UV-C decontamination.",
    image: "/facilities/pulse_650.jpg",
    officialUrl: "https://www.benchmarkscientific.com/product/pulse-650-ultrasonic-homogenizer/"
  },
  {
    id: "haier-biomedical-bsc",
    name: "Haier Biomedical Class II Biological Safety Cabinet",
    model: "Smart IoT Series (Touchscreen X Series)",
    brand: "Haier Biomedical",
    category: "Biosafety & Aseptic Cell Culture Infrastructure",
    purpose: "Primary biocontainment and sterile barrier for handling infectious arboviruses (Dengue, Chikungunya, SARS-CoV-2), continuous mammalian cell line propagation, and live viral microneutralization.",
    techniques: [
      "Class II Type A2 Biosafety Containment",
      "Aseptic Mammalian Cell Culture & Propagation",
      "Live Viral Plaque & Neutralization Assays",
      "Sterile Recombinant Protein Formulation"
    ],
    specs: "Dual ULPA filtration (U15, 99.9995% @ 0.12 µm), 7-inch interactive color LCD touchscreen, real-time inflow/downflow velocity monitoring, DC ECM dual energy-saving blowers, motorized 10° ergonomic tilted sash with UV interlock.",
    image: "/facilities/haier_bsc.png",
    officialUrl: "https://www.haiermedical.com/biological-safety-cabinet/biological-safety-cabinet-touchscreen.html"
  },
  {
    id: "rocker-300-vacuum-pump",
    name: "Rocker 300 Oil-Free Laboratory Vacuum Pump",
    model: "Rocker 300 (Part No. 167300-22)",
    brand: "Rocker Scientific",
    category: "Laboratory Vacuum Filtration & Biomolecular Aspiration",
    purpose: "Clean, oil-free vacuum generation for sterile media bottle filtration (0.22 µm), microbial membrane filtration, cell culture supernatant aspiration, and protein concentration.",
    techniques: [
      "Vacuum Membrane & Bottle Filtration (0.22 µm)",
      "Cell Culture Supernatant Aspiration",
      "Suspended Solid & Microbial Testing",
      "Solid-Phase Extraction & Sample Cleanup"
    ],
    specs: "Piston-driven oil-free design (zero oil mist contamination), Prote™ overflow cartridge protection, built-in vacuum regulator & moisture trap gauge, max vacuum 105 mbar (abs.), max flow rate 23 L/min, quiet operation (50 dB).",
    image: "/facilities/rocker_300.jpg",
    officialUrl: "https://www.rocker.com.tw/en/product/laboratory-pump-en/oil-free-vacuum-pump-en/rocker-300-oil-free-vacuum-pump/"
  },
  {
    id: "astec-wci-co2-incubator",
    name: "ASTEC Water Jacketed CO₂ Incubator WCI Series",
    model: "WCI-180 / WCI Series",
    brand: "ASTEC Bio (Japan)",
    category: "Cell Culture & In Vitro Viral Infection Incubation",
    purpose: "Providing ultra-stable 37°C temperature homogeneity and precise 5% CO₂ atmosphere for continuous propagation of primary mammalian cell lines, hybridomas, and live viral infection assays.",
    techniques: [
      "Mammalian Cell Line Propagation & Culture",
      "Viral Plaque Formation & Neutralization Assays",
      "Stable Water Jacket Temperature Buffer (±0.1°C)",
      "Infrared (IR) CO₂ Sensor Concentration Control"
    ],
    specs: "Water-jacketed thermal insulation prevents chamber condensation and temperature fluctuation, solid-state dual-beam IR CO₂ sensor (0–20%), stainless steel interior with copper-alloy shelving, automatic door heater.",
    image: "/facilities/astec_wci.webp",
    officialUrl: "https://www.astec-bio.com/global/product/1831/"
  },
  {
    id: "euromex-oxion-microscope",
    name: "Euromex Oxion Biological & Epi-Fluorescence Microscope",
    model: "Oxion Series (Fluorescence Configuration)",
    brand: "Euromex Microscopen (Netherlands)",
    category: "Fluorescence Microscopy & Cellular Imaging",
    purpose: "Direct immunofluorescence visualization of intracellular viral antigens, fluorophore-conjugated antibody staining (FITC/GFP/Texas Red), cytopathic morphology, and cell viability assays.",
    techniques: [
      "Epi-Fluorescence Immunocytochemistry",
      "Intracellular Viral Antigen Localization",
      "Brightfield & Phase Contrast Cytology",
      "High-Resolution Photomicrography (IOS Optics)"
    ],
    specs: "Siedentopf trinocular head 30° inclined, Plan Fluarex IOS infinity-corrected objectives (4x/10x/40x/100x oil), 100 W mercury-vapor / FluoLED epi-illumination with multi-filter turret, 3 W NeoLED transmitted light, coaxial coarse/fine focusing.",
    image: "/facilities/euromex_oxion.jpg",
    officialUrl: "https://www.medicalexpo.com/prod/euromex/product-93717-580353.html"
  },
  {
    id: "benchmark-sureair-pcr-workstation",
    name: "Benchmark Scientific SureAir™ PCR Workstation",
    model: "SureAir™ Laminar Flow PCR Workstation",
    brand: "Benchmark Scientific / Thomas Scientific",
    category: "Aseptic PCR Preparation & Nucleic Acid Decontamination",
    purpose: "Creating a sterile, ISO Class 5 clean-air zone for preparing sensitive viral RT-qPCR mastermixes, enzymatic reactions, and preventing amplicon carryover contamination.",
    techniques: [
      "Aerosol-Free qPCR Mastermix Dispensing",
      "UVC (254 nm) Surface DNA/RNA Decontamination",
      "ISO Class 5 Vertical Laminar Airflow",
      "Pre-PCR Sample & Reagent Partitioning"
    ],
    specs: "Integrated ISO 5 HEPA filter (99.97% @ 0.3 µm efficiency), 254 nm germicidal UVC lamp with 15-minute auto-shutoff timer and interlocked front shield, energy-efficient glare-free LED illumination, built-in pipette rack and electrical utility access ports.",
    image: "/facilities/sureair_pcr.jpg",
    officialUrl: "https://www.thomassci.com/p/sureair-pcr-workstation"
  }
];
