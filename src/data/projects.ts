import projectsJson from "../../content/projects.json";

export interface ProjectMetadata {
  investigativeFocus: string;
  targetOrganisms: string[];
  modelSystems: string[];
  toolsAndInstruments: string[];
  leadPI: string;
  fundingSupport?: string;
}

export interface ProjectWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  status: string;
  tags: string[];
  keyHighlights: string[];
  methods: string[];
  image: string;
  metadata?: ProjectMetadata;
  workflow?: ProjectWorkflowStep[];
  detailedNarrative?: string[];
}

export const CATEGORY_TABS = [
  { id: "all", label: "All Research" },
  { id: "viral-immunology", label: "Viral Immunology", match: ["Viral Immunology & Molecular Epidemiology", "Viral Genomics & Pathogenesis"] },
  { id: "computational", label: "Computational Structural Biology", match: ["Computational Structural Biology"] },
  { id: "plant-biology", label: "Plant Molecular Biology", match: ["Plant Molecular Biology & Phytochemistry"] },
  { id: "vaccinology", label: "Vaccinology", match: ["Rational Vaccine Design & Immunoengineering", "Translational Vaccinology & In Vivo Immunology"] },
];

export const PROJECTS_DATA: Project[] = (projectsJson as Project[]).map((p) => {
  // Augment with rich metadata and workflows for the detail page
  let metadata: ProjectMetadata;
  let workflow: ProjectWorkflowStep[];
  let detailedNarrative: string[];

  switch (p.slug) {
    case "dengue-seroprevalence-genomic-surveillance":
      metadata = {
        investigativeFocus: "DENV Serotype Shift & Antibody Cross-talk / Pathogenesis",
        targetOrganisms: ["Dengue Virus (DENV-1, DENV-2, DENV-3, DENV-4)"],
        modelSystems: ["Longitudinal Human Cohorts", "Immunocompromised AG129 Murine Models", "BALB/c Mice"],
        toolsAndInstruments: ["Bio-Rad CFX96 Real-Time PCR", "Tecan Microplate Reader", "Illumina MiSeq", "Flow Cytometer"],
        leadPI: "Prof. Dr. Mohammad Monirul Islam",
        fundingSupport: "HEAT-11009-CU / World Bank & UGC"
      };
      workflow = [
        { step: "01", title: "Longitudinal Clinical Sampling", description: "Blood specimen collection across acute febrile cohorts in Chittagong, isolating plasma and peripheral blood mononuclear cells." },
        { step: "02", title: "Lineage Deep-Sequencing", description: "Targeted amplicon sequencing across Envelope and NS1 regions to track single nucleotide substitutions across circulating clades." },
        { step: "03", title: "Neutralization & ADE Titers", description: "PRNT50 and microneutralization assays quantifying cross-serotype neutralization versus sub-neutralizing enhancement thresholds." },
        { step: "04", title: "In Vivo Murine Challenge", description: "Translational vascular permeability and viral dissemination profiling in adapted murine models." }
      ];
      detailedNarrative = [
        "Dengue continues to exert severe epidemiological pressure throughout tropical regions, with hyper-endemic co-circulation of all four DENV serotypes creating unpredictable risk for life-threatening severe dengue (DHF/DSS). In this project, our laboratory establishes an end-to-end translational pipeline connecting frontline clinical surveillance with rigorous molecular dissection.",
        "Through coordinated patient cohorts and deep genomic sequencing, we track the evolutionary trajectories of emergent DENV lineages across Bangladesh. We specifically correlate amino acid alterations on the envelope glycoprotein with patient immunological trajectories and clinical biomarkers of vascular leakage.",
        "Using adapted murine infection systems, we validate the mechanistic determinants of antibody-dependent enhancement (ADE) versus genuine cross-protective immunity, providing vital baseline intelligence for safer regional vaccine implementation."
      ];
      break;

    case "chikungunya-genomics-pathogenesis":
      metadata = {
        investigativeFocus: "CHIKV E1/E2 Polyprotein Mutations & Chronic Joint Debilitation",
        targetOrganisms: ["Chikungunya Virus (CHIKV, ECSA / Asian Lineages)"],
        modelSystems: ["Clinical Cohorts with Acute vs. Chronic Arthralgia", "Mammalian Cell Cultures"],
        toolsAndInstruments: ["Next-Generation Sequencer (NGS)", "Multiplex Luminex Cytokine Array", "Thermal Cycler"],
        leadPI: "Prof. Dr. Mohammad Monirul Islam",
        fundingSupport: "UGC / MSI Lab Genomic Initiatives"
      };
      workflow = [
        { step: "01", title: "Genomic Surveillance", description: "Whole-genome and envelope glycoprotein targeted sequencing identifying adaptive mutations (e.g. E1-A226V, E2 mutations)." },
        { step: "02", title: "Cytokine Signature Mapping", description: "Multiplex profiling of IL-6, TNF-α, MCP-1, and pro-inflammatory mediators correlated with disease chronicity." },
        { step: "03", title: "Cellular Tropism Assays", description: "In vitro infection assays in synovial fibroblasts and osteoblasts monitoring viral entry and cytopathic kinetics." },
        { step: "04", title: "Phylodynamic Reconstruction", description: "Time-calibrated evolutionary trees tracing lineage dispersal and mutational velocity across epidemic waves." }
      ];
      detailedNarrative = [
        "Chikungunya virus (CHIKV) causes acute debilitating fevers and prolonged incapacitating arthralgia that can persist for months to years. While acute diagnostics are well understood, the genetic and immunological drivers governing transition into persistent chronic joint pain remain unresolved.",
        "Our team investigates structural and non-structural polyprotein polymorphisms among emerging CHIKV strains, evaluating how envelope mutations alter viral fitness, transmission efficiency, and persistence in host connective tissues.",
        "By integrating multiplex cytokine profiling with patient viral kinetics, we delineate predictive inflammatory signatures that foreshadow chronic arthritic sequelae, uncovering potential pharmacological and immunomodulatory intervention targets."
      ];
      break;

    case "sars-cov-2-epitope-escape-structural-biology":
      metadata = {
        investigativeFocus: "Spike RBD Interfacial Thermodynamics & Pan-Variant Monoclonal Neutralization",
        targetOrganisms: ["SARS-CoV-2 (Ancestral, BA.4/5, JN.1, KP.2/3 Subvariants)"],
        modelSystems: ["In Silico All-Atom Protein Complexes", "Recombinant Bacterial & Mammalian Expression Systems"],
        toolsAndInstruments: ["HADDOCK 2.4 Server", "PRODIGY Biophysical Suite", "PyMOL 2.5", "UCSF ChimeraX", "High-Performance Compute Cluster"],
        leadPI: "Prof. Dr. Mohammad Monirul Islam",
        fundingSupport: "HEAT-11009-CU Advanced Computing Core"
      };
      workflow = [
        { step: "01", title: "All-Atom Conformational Modeling", description: "Generation of high-resolution structural models for newly emerging Omicron lineage spike receptor-binding domains." },
        { step: "02", title: "Rigid & Flexible Docking", description: "Driven-docking protocols using HADDOCK 2.4 utilizing experimentally mapped epitope restraints against clinical mAbs." },
        { step: "03", title: "Thermodynamic ΔG Quantification", description: "PRODIGY interfacial contact analysis, buried solvent-accessible surface area calculation, and electrostatic binding energy breakdown." },
        { step: "04", title: "Epitope Escape Prediction", description: "Residue interaction network mapping to predict prospective mutation hotspots capable of evading humoral neutralization." }
      ];
      detailedNarrative = [
        "The continuous mutational diversification of SARS-CoV-2, particularly within the receptor-binding domain (RBD), presents an ongoing challenge for neutralizing antibody efficacy. Understanding how single or combinatorial mutations balance high-affinity human ACE2 engagement with evasion of neutralizing monoclonal antibodies requires atomic-level thermodynamic insight.",
        "Our computational structural biology unit utilizes advanced protein-protein docking (HADDOCK 2.4) and thermodynamic prediction tools (PRODIGY) to simulate the interfacial interaction energy across diverse antibody classes.",
        "We dissect the molecular trade-offs between van der Waals contacts, hydrogen bonding networks, and electrostatic repulsion that allow sublineages such as JN.1 and KP variants to bypass immune memory while preserving efficient host entry."
      ];
      break;

    case "aquilaria-malaccensis-resin-induction":
      metadata = {
        investigativeFocus: "Terpene Synthase Signaling Cascades & Artificial Agarwood Oleoresin Induction",
        targetOrganisms: ["Aquilaria malaccensis (Thymelaeaceae)"],
        modelSystems: ["In Vitro Plant Callus", "Juvenile & Mature Stem Heartwood Tissues"],
        toolsAndInstruments: ["Agilent GC-MS System", "Bio-Rad Real-Time PCR", "Microtome for Heartwood Histology", "HPLC"],
        leadPI: "Prof. Dr. Mohammad Monirul Islam & Minhajur Rahman (Graduate Leads: Sarvani Datta & Jafrina Akter Eva)",
        fundingSupport: "National Science & Technology (NST) / Chittagong University Core Grant"
      };
      workflow = [
        { step: "01", title: "Elicitor Formulation & Inoculation", description: "Controlled application of physical wounding alongside tailored chemical elicitors to induce defense-related heartwood transformation." },
        { step: "02", title: "Transcriptional Gene Profiling (Jafrina Akter Eva)", description: "RT-qPCR quantification of early defense cascades (WRKY1, LOX1, MAPK3, MYC2) and sesquiterpene biosynthetic genes (DXPS, MK, FPS, SS4, DGS, DGS1, DSS)." },
        { step: "03", title: "Volatile Metabolomics via GC-MS (Sarvani Datta)", description: "Profiling aromatic sesquiterpenes (e.g. agarospirol, jinkoh-eremol, chromones) defining premium-grade agarwood oil." },
        { step: "04", title: "Histochemical Tissue Verification", description: "Microscopic sectioning revealing resin deposition patterns within xylem ray parenchyma and interxylary phloem." }
      ];
      detailedNarrative = [
        "Agarwood, the resinous heartwood produced by Aquilaria malaccensis in response to fungal infection or mechanical injury, is one of the most valuable non-timber forest products in the world. Natural formation takes decades and occurs in only a small percentage of wild trees, leading to severe overharvesting and endangered status.",
        "Our laboratory investigates the precise molecular signal transduction pathways that trigger oleoresin synthesis. Graduate researchers Sarvani Datta and Jafrina Akter Eva lead the experimental thrusts: Sarvani investigates the comparative anatomical extent of resin deposition and GC-MS chemical profiling under combined biotic (Fusarium spp.) and abiotic stressors, while Jafrina quantifies the temporal transcriptional regulation of early defense cascades and sesquiterpene biosynthetic genes across 3- and 6-month intervals via RT-qPCR.",
        "Using gas chromatography-mass spectrometry (GC-MS) metabolomic profiling and gene expression quantification, we formulate reproducible, eco-friendly chemical and biological elicitors that accelerate resin formation in cultivated plantations without harming tree viability."
      ];
      break;

    case "chimeric-pan-dengue-vaccine-design":
      metadata = {
        investigativeFocus: "Structure-Guided Reverse Vaccinology & ADE-Safe Chimeric Subunits",
        targetOrganisms: ["Dengue Virus Serotypes 1–4 (DENV-1–4)"],
        modelSystems: ["In Silico Protein Modeling", "Epitope Grafting Constructs", "Molecular Dynamics Systems"],
        toolsAndInstruments: ["AlphaFold2 / ColabFold", "GROMACS MD Suite", "ImmuneSim Server", "IEDB Epitope Analysis"],
        leadPI: "Prof. Dr. Mohammad Monirul Islam",
        fundingSupport: "HEAT-11009-CU Vaccine Immunoengineering Pillar"
      };
      workflow = [
        { step: "01", title: "Cross-Serotypic Epitope Mining", description: "Identification of invariant, solvent-accessible neutralizing B-cell patches and high-affinity HLA-restricted T-cell epitopes on EDIII and NS1." },
        { step: "02", title: "Chimeric Scaffold Construction", description: "In silico assembly of multi-epitope cassettes using flexible (EAAAK, GGGGS) linkers engineered to eliminate cross-reactive ADE epitopes." },
        { step: "03", title: "Molecular Dynamics Stability Testing", description: "100+ nanosecond GROMACS simulations assessing root mean square deviation (RMSD), fluctuation (RMSF), and secondary structure conservation." },
        { step: "04", title: "Computational Immune Simulation", description: "Simulating primary and booster immunizations to project long-lived plasma B-cell differentiation, IFN-γ release, and memory cell longevity." }
      ];
      detailedNarrative = [
        "Developing a truly balanced tetravalent vaccine against Dengue virus has been hindered by antibody-dependent enhancement (ADE), where sub-neutralizing antibodies generated against one serotype facilitate severe infection by heterologous serotypes. Conventional live-attenuated formulations frequently suffer from serotypic dominance and uneven neutralization.",
        "In this project, we employ structure-guided reverse vaccinology to construct an engineered chimeric subunit immunogen. We specifically excise cross-reactive, ADE-promoting epitopes while focusing the humoral immune response onto invariant quaternary neutralizing patches of envelope domain III (EDIII).",
        "Coupled with computational adjuvant scaffolding and all-atom molecular dynamics validation, our engineered candidates aim to establish durable, bi- and tetravalent immunity with an intrinsically favorable safety profile."
      ];
      break;

    case "jev-subunit-vaccine-murine-evaluation":
      metadata = {
        investigativeFocus: "Preclinical Subunit Vaccinology & Adjuvanted Murine Immunogenicity",
        targetOrganisms: ["Japanese Encephalitis Virus (JEV, Genotypes I & III)"],
        modelSystems: ["BALB/c Murine Immunization Models", "E. coli Recombinant Expression Hosts"],
        toolsAndInstruments: ["Fast Protein Liquid Chromatography (FPLC)", "One-Step RT-qPCR Thermal Cyclers", "ELISA Microplate Spectrophotometer", "Plaque Reduction Neutralization (PRNT) Suite", "Animal Biosafety Facility"],
        leadPI: "Prof. Dr. Mohammad Monirul Islam",
        fundingSupport: "HEAT-11009-CU / International Collaboration Grants"
      };
      workflow = [
        { step: "01", title: "Mutagenesis & Recombinant Expression", description: "Generation of site-directed destabilizing mutants (C5I, P47A, P47G, F21A) and wild-type JEV-ED3 expressed in E. coli BL21 inclusion bodies." },
        { step: "02", title: "Trace-Metal Adjuvant Formulation", description: "Formulating wild-type and mutant JEV-ED3 antigens with trace cobalt (5 µM Co2+) and adjuvant-free regimens for immunopotentiation." },
        { step: "03", title: "In Vivo Murine Immunization & ELISA", description: "Biweekly subcutaneous dosing in BALB/c mice, tracking longitudinal IgG endpoint titers, Th2-skewed polarization (IgG1), and >11-fold titer enhancement." },
        { step: "04", title: "One-Step RT-qPCR Immune Profiling", description: "Quantifying transcriptional upregulation of immune recognition markers (CD86, TLR4, CD80, and MHC-II) and correlating with neutralizing titers." }
      ];
      detailedNarrative = [
        "Japanese Encephalitis Virus (JEV) is the leading cause of viral encephalitis in Asia, causing significant mortality and permanent neurological deficits in pediatric populations. While commercial live or inactivated vaccines exist, there remains an acute need for non-reactogenic, shelf-stable, and cost-effective recombinant subunit candidates.",
        "Our team, led by postgraduate researcher Refath Alam Erin and Prof. Dr. Mohammad Monirul Islam, investigated the stability–immunogenicity relationship of JEV envelope domain III (ED3). Destabilized variants (C5I, P47A, P47G, F21A) and wild-type antigens were bacterially expressed and evaluated in BALB/c murine models.",
        "In vivo trials demonstrated that structural destabilization via F21A mutation and trace cobalt adjuvantation (WT-Co) produced remarkable >8-fold and >11-fold surges in IgG titers, respectively, with strong Th2-biased IgG1 responses. Furthermore, one-step RT-qPCR verified positive correlations with elevated expression of CD86, TLR4, CD80, and MHC class II, establishing pivotal design rules for next-generation rational flavivirus subunit vaccines."
      ];
      break;

    default:
      metadata = {
        investigativeFocus: "Biomedical & Structural Research",
        targetOrganisms: ["Target Pathogens"],
        modelSystems: ["In Vitro & In Silico Systems"],
        toolsAndInstruments: ["Molecular Biology Core Suite"],
        leadPI: "Prof. Dr. Mohammad Monirul Islam"
      };
      workflow = [];
      detailedNarrative = [p.shortDescription];
  }

  return {
    ...p,
    metadata,
    workflow,
    detailedNarrative
  };
});

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS_DATA.map((p) => p.slug);
}
