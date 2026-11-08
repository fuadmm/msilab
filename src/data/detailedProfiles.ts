export interface ProfileDetail {
  name: string;
  role: string;
  currentPosition?: string;
  currentInstitution?: string;
  institution?: string;
  department?: string;
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
  senioritySession?: string;
  supervisor?: string;
  coSupervisors?: string;
  thesisTitle?: string;
  submissionDate?: string;
  shortAbstract?: string;
  bioSnippet?: string;
  education?: { degree: string; field: string; institution: string; years?: string }[];
  experiences?: { title: string; institution: string; years: string; details?: string }[];
  skills?: string[];
  publications?: string[];
  awards?: string[];
  isLabManager?: boolean;
  projectResponsibility?: string;
  cvUrl?: string;
  researchInterest?: string;
  keyObjectives?: string[];
  methodology?: Record<string, string>;
  expectedImpact?: string;
}

export const DETAILED_PROFILES: Record<string, ProfileDetail> = {
  "minhajur-rahman": {
    "name": "Minhajur Rahman",
    "role": "Doctoral Fellow (Ph.D. Candidate) · Associate Professor",
    "currentPosition": "Associate Professor, Department of Botany",
    "currentInstitution": "University of Chittagong",
    "institution": "Associate Professor, Department of Botany, University of Chittagong",
    "department": "Department of Botany",
    "email": "minhaj_bot@cu.ac.bd",
    "institutionalEmail": "minhaj_bot@cu.ac.bd",
    "phone": "+8801819624004",
    "linkedin": "https://www.linkedin.com/in/minhajur-rahman-22a522b1/",
    "researchgate": "https://www.researchgate.net/profile/Minhajur_Rahman",
    "profileUrl": "https://cu.ac.bd/public_profile/index.php?ein=5453",
    "googleScholar": "https://scholar.google.com/citations?pli=1&user=NXWTRTMAAAAJ",
    "image": "/Current%20Members%20and%20Alumni/Minhajur%20Rahman.jpg",
    "senioritySession": "Doctoral Research",
    "supervisor": "Prof. Dr. Mohammad Monirul Islam",
    "thesisTitle": "Rational Design of Dengue Subunit Vaccines Integrated with Potential Plant Adjuvants and Pharmacognostical Biomolecules",
    "submissionDate": "Ongoing Doctoral Research",
    "shortAbstract": "Investigating the rational design of dengue subunit vaccines integrated with botanical adjuvants and natural product immunomodulators, bridging botanical pharmacognosy with structural molecular immunology.",
    "bioSnippet": "Minhajur Rahman is an Associate Professor in the Department of Botany at the University of Chittagong and a Doctoral Fellow at the Laboratory of Molecular & Structural Immunology (MSI Lab). With over a decade of university teaching and research experience, he specializes in pharmacognosy, natural product chemistry, in silico pharmacology, and phytopharmacology. He has secured multiple competitive research grants from the Ministry of Science and Technology (MOST) and CU as Principal Investigator, publishing over 25 peer-reviewed articles and book chapters.",
    "education": [
      {
        "degree": "Ph.D. Candidate",
        "field": "Biochemistry & Molecular Biology (Structural Immunology)",
        "institution": "University of Chittagong",
        "years": "2021 – Present"
      },
      {
        "degree": "M.Phil.",
        "field": "Pharmacognosy & Phytochemistry",
        "institution": "University of Chittagong",
        "years": "2015 – 2019"
      },
      {
        "degree": "M.S. (Thesis)",
        "field": "Botany (Pharmacognosy Specialization)",
        "institution": "University of Chittagong",
        "years": "2007 – 2008"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Botany",
        "institution": "University of Chittagong",
        "years": "2003 – 2007"
      }
    ],
    "experiences": [
      {
        "title": "Associate Professor",
        "institution": "Department of Botany, University of Chittagong",
        "years": "2020 – Present"
      },
      {
        "title": "Assistant Professor",
        "institution": "Department of Botany, University of Chittagong",
        "years": "2015 – 2020"
      },
      {
        "title": "Lecturer",
        "institution": "Department of Botany, University of Chittagong",
        "years": "2012 – 2015"
      },
      {
        "title": "Doctoral Fellow",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2021 – Present"
      }
    ],
    "skills": [
      "Phytochemical screening, thin-layer chromatography (TLC), column chromatography, in vitro micropropagation, bacterial isolation from rhizosphere, antioxidant assays (DPPH, FRAP), spectrophotometry, plant stress physiological testing.",
      "GraphPad Prism, SPSS statistical software, MEGA phylogenetics, NCBI BLAST."
    ],
    "publications": [
      "Published in Current Applied Science and Technology (2024) on chrysanthemum rhizobacteria plant growth-promoting traits",
      "Advancement in Medicinal Plant Research",
      "Scientifica (Hindawi)",
      "Chittagong University Journal of Biological Sciences."
    ],
    "awards": [
      "Life Member, Bangladesh Botanical Society",
      "Member, Chittagong University Teachers' Association (CUTA)",
      "Government Postgraduate Research Grants."
    ],
    "researchInterest": "Ethnomedicinal botany, medicinal orchid secondary metabolites, plant-microbe interactions, rhizobacteria-mediated abiotic stress tolerance, and plant tissue micropropagation."
  },
  "mamunur-rashid": {
    "name": "Dr. Muhammad Mamunur Rashid Mahib",
    "role": "Postdoctoral & Senior Research Fellow · Associate Professor",
    "currentPosition": "Associate Professor, Department of Biochemistry & Molecular Biology",
    "currentInstitution": "University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "mahib@cu.ac.bd",
    "institutionalEmail": "mahib@cu.ac.bd",
    "phone": "+8801821078048",
    "profileUrl": "https://cu.ac.bd/public_profile/index.php?ein=5212",
    "googleScholar": "https://scholar.google.com/citations?user=xdRnLzEAAAAJ&hl=en",
    "image": "/Current%20Members%20and%20Alumni/mahib%20cu.jpg",
    "senioritySession": "MS Session 2009–2010",
    "supervisor": "Md. Monirul Islam, PhD",
    "thesisTitle": "Cloning and Expression of Dengue Envelope Protein Domain 3 (ED3) Variants",
    "submissionDate": "July 7, 2012",
    "shortAbstract": "Engineered and expressed serotype-specific recombinant DENV ED3 variants to study conformation-dependent epitope presentation and solubility behavior.",
    "bioSnippet": "Dr. Muhammad Mamunur Rashid Mahib is an Associate Professor of Biochemistry and Molecular Biology at the University of Chittagong. He earned his Ph.D. from Kanazawa University, Japan (2020) and completed postdoctoral training at MaineHealth Institute for Research, USA. His research focuses on cellular signaling pathways, innate immune signaling, cell death (apoptosis and necroptosis), and infectious disease pathogenesis.",
    "education": [
      {
        "degree": "Postdoctoral Fellow",
        "field": "Cellular Signaling & Immunology",
        "institution": "MaineHealth Institute for Research, Maine, USA",
        "years": "2021 – 2022"
      },
      {
        "degree": "Ph.D.",
        "field": "Cellular & Molecular Biology",
        "institution": "Kanazawa University, Japan",
        "years": "2016 – 2020"
      },
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2009 – 2010"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2005 – 2009"
      }
    ],
    "experiences": [
      {
        "title": "Associate Professor",
        "institution": "Dept. of Biochemistry & Molecular Biology, University of Chittagong",
        "years": "2023 – Present"
      },
      {
        "title": "Postdoctoral Research Fellow",
        "institution": "MaineHealth Institute for Research, USA",
        "years": "2021 – 2022"
      },
      {
        "title": "Assistant Professor",
        "institution": "Dept. of Biochemistry & Molecular Biology, University of Chittagong",
        "years": "2017 – 2023"
      },
      {
        "title": "Senior Research Fellow",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2010 – 2016"
      }
    ],
    "skills": [
      "Murine echocardiography, isolated perfused Langendorff heart systems, primary cardiomyocyte isolation and culture, immunoblotting/Western blot, confocal immunofluorescence microscopy, flow cytometry, subcellular organelle fractionation, ELISA.",
      "ImageJ/Fiji image quantification, GraphPad Prism non-linear regression, FlowJo flow cytometry analytics."
    ],
    "publications": [
      "Published extensively in high-impact international journals focusing on ischemic heart failure, pyroptotic cell death mechanisms, and caveolar signaling in cardiomyocytes."
    ],
    "awards": [
      "Prime Minister Gold Medal (Bangladesh University Grants Commission)",
      "Japanese Government (MEXT) Doctoral Fellowship",
      "Postdoctoral Research Award at MaineHealth Institute for Research."
    ],
    "researchInterest": "Cardiovascular pathology, regulated cell death pathways (pyroptosis, apoptosis, necroptosis), lipotoxic cardiomyopathy, caspase signaling cascades, ischemia-reperfusion injury, caveolin-1/3 regulation, and Rab27a-mediated exosome/extracellular vesicle dynamics."
  },
  "dr-md-golam-kabir": {
    "name": "Prof. Dr. Md. Golam Kabir",
    "role": "Professor · Senior Monoclonal Antibody Scientist",
    "currentPosition": "Professor, Department of Biochemistry & Molecular Biology",
    "currentInstitution": "University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "phone": "01786233770",
    "profileUrl": "https://cu.ac.bd/public_profile/index.php?ein=3780",
    "researchgate": "https://www.researchgate.net/profile/Md-Kabir-160",
    "image": "/Current%20Members%20and%20Alumni/golam%20kabir.jpg",
    "senioritySession": "Post-Doctoral",
    "supervisor": "Md. Monirul Islam, PhD",
    "thesisTitle": "Production and Characterization of Monoclonal Antibodies (mAbs) Against Dengue ED3 Variants",
    "submissionDate": "December 19, 2022",
    "shortAbstract": "Developed and characterized monoclonal antibodies targeted against mutated Dengue ED3 variants to evaluate cross-neutralization and epitope binding dynamics.",
    "bioSnippet": "Prof. Dr. Md. Golam Kabir is a Professor in the Department of Biochemistry and Molecular Biology at the University of Chittagong. He obtained his Ph.D. in Biotechnology and Life Science from Tokyo University of Agriculture and Technology (TUAT), Japan (2018). His research encompasses pathogenesis, monoclonal antibody engineering against viral envelope antigens, life sciences, and nutritional biochemistry.",
    "education": [
      {
        "degree": "Ph.D.",
        "field": "Biotechnology and Life Science",
        "institution": "Tokyo University of Agriculture and Technology (TUAT), Japan",
        "years": "2013 – 2018"
      },
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2002 – 2003"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "1997 – 2001"
      }
    ],
    "experiences": [
      {
        "title": "Professor",
        "institution": "Dept. of Biochemistry & Molecular Biology, University of Chittagong",
        "years": "2020 – Present"
      },
      {
        "title": "Associate Professor",
        "institution": "Dept. of Biochemistry & Molecular Biology, University of Chittagong",
        "years": "2015 – 2020"
      },
      {
        "title": "Senior Monoclonal Antibody Scientist",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2021 – 2023"
      }
    ],
    "skills": [
      "Clinical chemistry automated profiling, enzymatic kinetics, Thioflavin-T (ThT) amyloid fluorescence assays, Congo red birefringence, in vivo streptozotocin-induced diabetic rodent models.",
      "SPSS, GraphPad Prism, ImageJ, BioEdit."
    ],
    "publications": [
      "Published extensively in Biochimica et Biophysica Acta (BBA) - Proteins and Proteomics, Journal of Taibah University Medical Sciences, Bioinformation",
      "supervised >50 MSc theses."
    ],
    "awards": [
      "Senior Faculty Professorship",
      "Principal Investigator on multiple Ministry of Science & Technology (MoST) competitive grants."
    ],
    "researchInterest": "Clinical biochemistry, metabolic syndrome, dyslipidemia, insulin resistance pathology, cross-beta amyloid aggregation biophysics, and phytomedicinal therapeutic screening."
  },
  "md-waseque-mia": {
    "name": "Md. Waseque Mia",
    "role": "Assistant Professor · Former M.Sc. Research Fellow",
    "currentPosition": "Assistant Professor, Department of Biochemistry & Molecular Biology",
    "currentInstitution": "Shahjalal University of Science and Technology (SUST)",
    "location": "Sylhet, Bangladesh",
    "email": "waseqbd-bmb@sust.edu",
    "institutionalEmail": "waseqbd-bmb@sust.edu",
    "profileUrl": "https://www.sust.edu/departments/bmb/faculty/waseqbd-bmb@sust.edu",
    "researchgate": "https://www.researchgate.net/profile/Md-Mia-10",
    "googleScholar": "https://scholar.google.com/citations?user=8aWCZr8AAAAJ&hl=en",
    "image": "/Current%20Members%20and%20Alumni/waseque_mia.jpg",
    "senioritySession": "MS Session 2012–2013",
    "supervisor": "Md. Monirul Islam, PhD",
    "thesisTitle": "Design and Characterization of Japanese Encephalitis Virus (JEV) ED3 Mutants",
    "submissionDate": "May 20, 2015",
    "shortAbstract": "Engineered JEV ED3 variants using solubility-controlling peptide tags and characterized thermal denaturation and immune sera reactivity.",
    "bioSnippet": "Md. Waseque Mia is an Assistant Professor in the Department of Biochemistry and Molecular Biology at Shahjalal University of Science and Technology (SUST), Sylhet. He completed his M.S. and B.Sc. (Hons) at the University of Chittagong, conducting research on Japanese Encephalitis Virus (JEV) ED3 protein engineering at MSI Lab. His academic focus spans immunology, cancer cell biology, molecular epidemiology, and public health risk assessments.",
    "education": [
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2012 – 2013"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2007 – 2011"
      }
    ],
    "experiences": [
      {
        "title": "Assistant Professor",
        "institution": "Dept. of Biochemistry & Molecular Biology, SUST",
        "years": "2018 – Present"
      },
      {
        "title": "Lecturer",
        "institution": "Dept. of Biochemistry & Molecular Biology, SUST",
        "years": "2015 – 2018"
      },
      {
        "title": "M.Sc. Research Fellow",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2013 – 2015"
      }
    ],
    "skills": [
      "Clinical chemistry serum assays, spectrophotometric enzyme activity kinetics, clinical diagnostic testing, microbial isolation, and disc diffusion antimicrobial susceptibility testing.",
      "SIFT, PolyPhen-2, PROVEAN, AutoDock molecular docking, PyMOL macromolecular visualization, GraphPad Prism."
    ],
    "publications": [
      "Published high-impact structural study in PLOS ONE (2023) evaluating nonsynonymous mutations in human thyroid peroxidase dimer",
      "Journal of Advanced Biotechnology and Experimental Therapeutics (JABET)."
    ],
    "awards": [
      "Faculty Research Grants, SUST Research Centre",
      "National Science and Technology Fellowships during postgraduate tenure."
    ],
    "researchInterest": "Clinical biochemistry, dyslipidemia, metabolic syndrome, nonsynonymous single nucleotide polymorphisms (nsSNPs) affecting human enzymes, and antimicrobial resistance (AMR) profiles."
  },
  "payal-barua": {
    "name": "Dr. Payal Barua",
    "role": "Postdoctoral Researcher · Former M.Sc. Research Fellow",
    "currentPosition": "Postdoctoral / Immunology Researcher",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "institution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "department": "Department of Biochemistry & Molecular Biology",
    "location": "Chittagong, Bangladesh",
    "image": "/Current%20Members%20and%20Alumni/Payal%20Barua.jpg",
    "senioritySession": "MS Session 2010–2011",
    "supervisor": "Md. Monirul Islam, PhD",
    "thesisTitle": "Immunosensitization Against the EDIII of Dengue E-Protein and Study of Dengue Sero-Specificity Using Sensitized Lymphocyte Culture",
    "submissionDate": "March 31, 2013",
    "shortAbstract": "Explored cell-mediated cellular immune responses and sero-specificity using sensitized lymphocyte cultures stimulated with Dengue EDIII.",
    "bioSnippet": "Dr. Payal Barua is an immunology researcher and alumnus of the Laboratory of Molecular & Structural Immunology (MSI Lab), Department of Biochemistry and Molecular Biology at the University of Chittagong. Her research explores cell-mediated immune responses, lymphocyte sensitization, cytokine secretion dynamics, and sero-specificity in dengue virus infection.",
    "education": [
      {
        "degree": "Ph.D.",
        "field": "Biomedical Sciences & Molecular Immunology",
        "institution": "University of Chittagong",
        "years": "2014 – 2018"
      },
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2010 – 2011"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2005 – 2010"
      }
    ],
    "experiences": [
      {
        "title": "Postdoctoral / Immunology Researcher",
        "institution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
        "years": "2018 – Present"
      },
      {
        "title": "Doctoral Research Fellow",
        "institution": "Faculty of Biological Sciences, University of Chittagong",
        "years": "2014 – 2018"
      },
      {
        "title": "M.Sc. Research Fellow",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2011 – 2013"
      }
    ],
    "skills": [
      "Recombinant protein expression in insect/mammalian systems, cross-linking mass spectrometry (XL-MS), isothermal titration calorimetry (ITC), biolayer interferometry (BLI).",
      "PyMOL, ChimeraX, MaxQuant proteomics software, Rosetta, BioRender."
    ],
    "publications": [
      "High-impact peer-reviewed papers resolving multi-protein macromolecular complexes and structural drug binding sites."
    ],
    "awards": [
      "International Doctoral Fellowship",
      "Postdoctoral Research Fellow",
      "Keynote Speaker at Structural Biology Symposium."
    ],
    "researchInterest": "Macromolecular structural elucidation, protein-protein interaction (PPI) networks, affinity pull-down assays, mass spectrometry proteomics, and allosteric drug target discovery."
  },
  "wang-kyaw-twan": {
    "name": "Dr. Wang Kyaw Twan",
    "role": "Postdoctoral Fellow · Senior Research Fellow",
    "currentPosition": "Postdoctoral Fellow, National Cancer Institute (NCI-Frederick / NIH)",
    "currentInstitution": "National Institutes of Health (NIH), Frederick, Maryland, USA",
    "location": "Frederick, Maryland, USA",
    "linkedin": "https://www.linkedin.com/in/wang-kyaw-twan-ph-d-9b96986b/",
    "researchgate": "https://www.researchgate.net/profile/Wang-Kyaw-Twan",
    "image": "/Current%20Members%20and%20Alumni/Wang%20Kyaw%20Twan.jpg",
    "senioritySession": "MS Session 2012–2013",
    "supervisor": "Md. Monirul Islam, PhD",
    "thesisTitle": "Mapping the Determinants of Cross-Reactivity of Dengue 4 ED3 Antibodies",
    "submissionDate": "January 7, 2015",
    "shortAbstract": "Mapped critical surface-exposed residues mediating broad cross-reactivity in DENV4 ED3, guiding serotype-specific epitope shielding.",
    "bioSnippet": "Dr. Wang Kyaw Twan is a Postdoctoral Fellow at the National Cancer Institute (NCI-Frederick / CCR, NIH) in Maryland, USA, working in the laboratory of Christopher J. Westlake. He earned his Ph.D. in Life Science & Biotechnology from Tokyo University of Agriculture and Technology (TUAT), Japan. His research investigates primary ciliary dyskinesia, axonemal dyneins, embryonic nodal cilia dynamics, and protein engineering.",
    "education": [
      {
        "degree": "Postdoctoral Fellow",
        "field": "Cell Biology & Cilia Pathogenesis",
        "institution": "National Cancer Institute (NCI-Frederick / CCR, NIH), USA",
        "years": "2020 – Present"
      },
      {
        "degree": "Ph.D.",
        "field": "Biotechnology & Life Science",
        "institution": "Tokyo University of Agriculture and Technology (TUAT), Japan",
        "years": "2015 – 2019"
      },
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2012 – 2013"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2007 – 2011"
      }
    ],
    "experiences": [
      {
        "title": "Postdoctoral Fellow",
        "institution": "National Cancer Institute (NCI-Frederick / CCR, NIH), USA",
        "years": "2020 – Present"
      },
      {
        "title": "Doctoral Researcher",
        "institution": "Tokyo University of Agriculture and Technology (TUAT), Japan",
        "years": "2015 – 2019"
      },
      {
        "title": "Senior Research Fellow",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2013 – 2015"
      }
    ],
    "skills": [
      "Air-liquid interface (ALI) culture of human bronchial epithelial cells, high-speed video microscopy (HSVM) of ciliary beat dynamics, axonemal immunofluorescence, cryo-sectioning, and RNA-seq transcriptomics.",
      "High-throughput video tracking algorithms, DESeq2 bulk RNA-seq differential pipelines, R statistical programming, PyMOL."
    ],
    "publications": [
      "Pioneering translational investigations into genetic mutations altering human mucociliary clearance at leading international medical institutions",
      "presentations at American Thoracic Society (ATS)."
    ],
    "awards": [
      "International Doctoral Scholarship",
      "Postdoctoral Research Fellowship at Washington University School of Medicine in St. Louis."
    ],
    "researchInterest": "Airway ciliary biology, ciliopathies, primary ciliary dyskinesia (PCD), axonemal dynein macromolecular complexes, and respiratory mucosal epithelial homeostasis."
  },
  "nafsoon-rahman": {
    "name": "Dr. Nafsoon Rahman (Mouly)",
    "role": "Assistant Professor · Former Doctoral Fellow & Co-Inventor (WO2019031446)",
    "currentPosition": "Assistant Professor, Department of Biochemistry & Molecular Biology",
    "currentInstitution": "Jagannath University (JnU), Dhaka",
    "location": "Dhaka, Bangladesh",
    "email": "nafsoonrahman@bmb.jnu.ac.bd",
    "institutionalEmail": "nafsoonrahman@bmb.jnu.ac.bd",
    "personalEmail": "nafsoon.vncbmbcu91@gmail.com",
    "phone": "+8801715503350",
    "profileUrl": "https://jnu.ac.bd/fm/pview/10834/home",
    "image": "/Current%20Members%20and%20Alumni/nafsoon%20rahman%20jnu.jpg",
    "senioritySession": "MS Session 2013–2014",
    "supervisor": "Md. Monirul Islam, PhD",
    "thesisTitle": "Development of a New Dengue Diagnostic Tool and Comparison of Serum Antibody Responses Against Natural Dengue Infection and Artificial Immunization",
    "submissionDate": "October 20, 2014",
    "shortAbstract": "Developed an EDIII-based ELISA diagnostic tool and compared antibody specificity patterns between natural human dengue infections and artificially immunized mice.",
    "bioSnippet": "Dr. Nafsoon Rahman (Mouly) is an Assistant Professor in the Department of Biochemistry and Molecular Biology at Jagannath University (JnU). She received her Ph.D. in Protein Engineering from Tokyo University of Agriculture and Technology (TUAT), Japan (2020), and her M.Sc. (2015) and B.Sc. (2014) from the University of Chittagong. She is a co-inventor of international patent WO2019031446 for solubility-controlling peptide tags applied to biotherapeutics and diagnostics.",
    "education": [
      {
        "degree": "Ph.D.",
        "field": "Protein Engineering",
        "institution": "Tokyo University of Agriculture and Technology (TUAT), Japan",
        "years": "2016 – 2020"
      },
      {
        "degree": "M.Sc.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2014 – 2015"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2010 – 2014"
      }
    ],
    "experiences": [
      {
        "title": "Assistant Professor",
        "institution": "Dept. of Biochemistry & Molecular Biology, Jagannath University",
        "years": "2021 – Present"
      },
      {
        "title": "Lecturer",
        "institution": "Dept. of Biochemistry & Molecular Biology, Jagannath University",
        "years": "2020 – 2021"
      },
      {
        "title": "Co-Inventor & Researcher",
        "institution": "TUAT & MSI Lab Consortium",
        "years": "2016 – 2020"
      }
    ],
    "skills": [
      "Heterologous protein expression in E. coli, Ni-NTA affinity chromatography, circular dichroism (CD), dynamic light scattering (DLS), analytical size-exclusion chromatography (SEC-HPLC), microplate neutralization assays.",
      "PyMOL, ChimeraX, Expasy ProtParam, GraphPad Prism, BLAST."
    ],
    "publications": [
      "Co-inventor of Japanese Patent JP No. 7194442 ('Antigen composition for flavivirus diagnostics and vaccines'). Published in Frontiers in Immunology, FEBS Open Bio, and Protein Expression and Purification."
    ],
    "awards": [
      "Japanese Government (MEXT) Doctoral Scholarship",
      "Jagannath University Faculty Research Grants",
      "Life Member of Bangladesh Biochemical Society."
    ],
    "researchInterest": "Protein engineering, solubilizing peptide tag design (SCP-tags), sub-visible protein aggregate biophysics, colloidal stability, and Dengue virus ED3 recombinant subunit vaccines."
  },
  "hasan-nazmul": {
    "name": "Md. Nazmul Hasan",
    "role": "Lecturer (on study leave) & PhD Researcher at Purdue University",
    "currentPosition": "Lecturer, HSTU · PhD Researcher, Purdue University",
    "currentInstitution": "Hajee Mohammad Danesh Science & Technology University (HSTU) / Purdue University, USA",
    "location": "West Lafayette, Indiana, USA / Dinajpur, Bangladesh",
    "email": "bmb.nazmul@gmail.com",
    "phone": "+8801515284213",
    "profileUrl": "https://hstu.ac.bd/teacher/nazmulbmb",
    "image": "/Current%20Members%20and%20Alumni/nazmul%20hasan%20hstu.jpg",
    "senioritySession": "MS Session 2016–2017",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "SCP-tag, a tool to increase immunogenicity of poorly immunogenic dengue envelope protein domain 3 in mice model without compromising antibody specificity",
    "submissionDate": "July 15, 2018",
    "shortAbstract": "Applied short solubility-controlling peptide (SCP) tags to enhance the immunogenicity of poorly immunogenic dengue ED3 proteins in mice without losing antibody specificity.",
    "bioSnippet": "Md. Nazmul Hasan is a Lecturer in the Department of Biochemistry & Molecular Biology at Hajee Mohammad Danesh Science & Technology University (HSTU) and currently a PhD Researcher in Molecular and Cellular Biology at Purdue University, USA (since August 2023). He previously served as Lab Consultant for the COVID-19 ERPP Project of DGHS at Cumilla Medical College.",
    "education": [
      {
        "degree": "Ph.D. Researcher",
        "field": "Molecular Biology & Structural Immunology",
        "institution": "Purdue University, Indiana, USA",
        "years": "2023 – Present"
      },
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2016 – 2018"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2012 – 2016"
      }
    ],
    "experiences": [
      {
        "title": "PhD Researcher",
        "institution": "Purdue University, USA",
        "years": "2023 – Present"
      },
      {
        "title": "Lecturer",
        "institution": "Dept. of Biochemistry & Molecular Biology, HSTU",
        "years": "2022 – Present (Study Leave)"
      },
      {
        "title": "Lab Consultant",
        "institution": "COVID-19 ERPP Project, DGHS, Cumilla Medical College",
        "years": "2021 – 2022"
      },
      {
        "title": "Graduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2016 – 2019"
      }
    ],
    "skills": [
      "Single-particle cryo-EM grid preparation, protein crystallization, recombinant protein expression in bacterial and insect cell systems, affinity chromatography, Western blotting.",
      "Relion / CryoSPARC cryo-EM processing, GROMACS/AMBER molecular dynamics, PyMOL, UCSF ChimeraX, IEDB epitope suite."
    ],
    "publications": [
      "Multiple research papers on in silico vaccine design against emerging viral pathogens and structural epitope mapping in international journals."
    ],
    "awards": [
      "Purdue University Graduate Research Assistantship",
      "HSTU Faculty Study Leave Fellowship",
      "NST Research Fellow."
    ],
    "researchInterest": "Structural virology, cryo-electron microscopy of viral envelope complexes, immunoinformatics, reverse vaccinology, and molecular epidemiology of flaviviruses and emerging zoonotic RNA viruses."
  },
  "abu-bakar-siddik": {
    "name": "Abu Bakar Siddik",
    "role": "Graduate Research Assistant & Ph.D. Candidate",
    "currentPosition": "Ph.D. Candidate & Graduate Research Assistant",
    "currentInstitution": "Department of Molecular Biosciences, University of Texas at Austin, USA",
    "location": "Austin, Texas, USA",
    "researchgate": "https://www.researchgate.net/profile/Abu-Bakar-Siddik-7",
    "image": "/Current%20Members%20and%20Alumni/Abu%20Bakar%20Siddik.jpg",
    "senioritySession": "MS Session 2017–2018",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "Effects of poly-Ile and poly-Asp tags on the immunogenicity of an epitope-grafted DENV3 envelope protein domain 3 (3ED3) in Swiss albino mice",
    "submissionDate": "July 10, 2019",
    "shortAbstract": "Analyzed how hydrophobic (poly-Ile) and charged (poly-Asp) peptide tags influence protein oligomerization and immune responses against epitope-grafted 3ED3 in mice.",
    "bioSnippet": "Abu Bakar Siddik is a Ph.D. Candidate and Graduate Research Assistant in the Department of Molecular Biosciences at the University of Texas at Austin (UT Austin). At MSI Lab, he investigated the biophysical properties and secondary structural transitions of engineered dengue envelope proteins, as well as the effects of charged and hydrophobic peptide tags.",
    "education": [
      {
        "degree": "Ph.D. Candidate",
        "field": "Molecular Biosciences & Structural Biology",
        "institution": "University of Texas at Austin (UT Austin), USA",
        "years": "2021 – Present"
      },
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2017 – 2019"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2012 – 2017"
      }
    ],
    "experiences": [
      {
        "title": "Graduate Research Assistant",
        "institution": "Department of Molecular Biosciences, UT Austin, USA",
        "years": "2021 – Present"
      },
      {
        "title": "Graduate Research Fellow",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2017 – 2020"
      }
    ],
    "skills": [
      "Polychromatic flow cytometry (FACS), immune cell phenotyping, human clinical cohort serology, ELISPOT, antibody-secreting cell (ASC) enumeration, PBMC isolation, and serum bactericidal assays.",
      "FlowJo, GraphPad Prism, R for immunophenotyping biostatistics, FlowSOM."
    ],
    "publications": [
      "High-impact co-authored research papers in leading infectious disease and immunology journals from multi-year clinical trials at icddr,b."
    ],
    "awards": [
      "UT Austin Graduate Dean's Fellowship",
      "Former Research Officer at icddr,b with NIH/Gates Foundation grant involvement."
    ],
    "researchInterest": "Cellular immunology, memory T-cell differentiation, mucosal immunity, enteric vaccine evaluation, and host-pathogen immune interactions."
  },
  "imrul-tipo": {
    "name": "Imrul Hasan Tipo",
    "role": "Lecturer, USTC & PhD Fellow, University of Alabama",
    "currentPosition": "Lecturer, Department of Biochemistry and Biotechnology",
    "currentInstitution": "University of Science and Technology Chittagong (USTC)",
    "location": "Chittagong, Bangladesh / Tuscaloosa, Alabama, USA",
    "email": "tipo@ustc.ac.bd",
    "institutionalEmail": "tipo@ustc.ac.bd",
    "profileUrl": "https://ustc.ac.bd/fm-imrul-hasan-tipo/",
    "image": "/Current%20Members%20and%20Alumni/imrul%20hasan%20tipo%20ustc.jpg",
    "senioritySession": "MS Session 2019–2020",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "Four Different DENV ED3s Generated Different T cell Memory In Artificial Immunization In Mice Model",
    "submissionDate": "May 2022",
    "shortAbstract": "Measured T cell memory generation and cytokine responses in mice artificially immunized with recombinant ED3 proteins representing all four dengue serotypes.",
    "bioSnippet": "Imrul Hasan Tipo is a Lecturer in the Department of Biochemistry and Biotechnology at University of Science and Technology Chittagong (USTC) and a Ph.D. Fellow in Biological Sciences at the University of Alabama, USA. He received his BSc (Hons) and MS (Thesis) in Biochemistry and Molecular Biology from the University of Chittagong. He has co-authored significant papers in the International Journal of Molecular Sciences and medRxiv on dengue vaccine immunology and pandemic transmission dynamics.",
    "education": [
      {
        "degree": "Ph.D. Fellow",
        "field": "Biological Sciences",
        "institution": "University of Alabama, Tuscaloosa, USA",
        "years": "2024 – Present"
      },
      {
        "degree": "M.S. (Thesis)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2019 – 2022"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2014 – 2019"
      }
    ],
    "experiences": [
      {
        "title": "Lecturer",
        "institution": "Dept. of Biochemistry & Biotechnology, USTC",
        "years": "October 2023 – Present"
      },
      {
        "title": "Ph.D. Fellow",
        "institution": "University of Alabama, USA",
        "years": "2024 – Present"
      },
      {
        "title": "Graduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2019 – 2023"
      }
    ],
    "skills": [
      "In vivo murine immunization, indirect/sandwich ELISA, SDS-PAGE, recombinant protein expression in bacterial hosts, Ni-NTA chromatography, clinical hematology parameters.",
      "GraphPad Prism non-linear regression, PyMOL, SPSS, MEGA."
    ],
    "publications": [
      "Published in International Journal of Molecular Sciences (IJMS, 2023) on Dengue ED3 conformational variations",
      "medRxiv (2025) epidemiological studies."
    ],
    "awards": [
      "National Science & Technology (NST) Fellowship (Ministry of Science and Technology, Bangladesh)",
      "USTC Institutional Teaching & Research Award."
    ],
    "researchInterest": "Flavivirus immunology, cross-reactive antibody binding among Dengue serotypes (DENV1â€“4), recombinant ED3 domain immunogenicity, tumor T-cell exhaustion markers, and clinical dengue hematology."
  },
  "din-islam": {
    "name": "Dr. Md. Din Islam",
    "role": "Postdoctoral Researcher · Former Doctoral Fellow",
    "currentPosition": "Postdoctoral Researcher, Graduate Institute of Microbiology and Public Health",
    "currentInstitution": "National Chung Hsing University (NCHU), Taichung, Taiwan",
    "location": "Taichung, Taiwan",
    "researchgate": "https://www.researchgate.net/profile/Md-Islam-2210",
    "image": "/Current%20Members%20and%20Alumni/din%20islam.jpg",
    "senioritySession": "MS Session 2019–2020",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "A Mystery of DENV Immunogenicity: Anti-DENV ED3 Responses Against Monovalent and Multivalent DENV ED3s",
    "submissionDate": "May 15, 2022",
    "shortAbstract": "Assessed differential immunogenicity and antibody titers induced by single (monovalent) versus combined (multivalent) DENV ED3 immunization schemes in mice.",
    "bioSnippet": "Dr. Md. Din Islam is a Postdoctoral Researcher at the Graduate Institute of Microbiology and Public Health, National Chung Hsing University (NCHU), Taiwan. He completed his Ph.D. in Veterinary Medicine / Virology at NCHU and his M.S. and B.Sc. in Biochemistry & Molecular Biology at the University of Chittagong. His expertise spans virology, oncolytic Orf virus genetic engineering, and dengue subunit vaccine immunology.",
    "education": [
      {
        "degree": "Ph.D.",
        "field": "Veterinary Medicine & Virology",
        "institution": "National Chung Hsing University (NCHU), Taiwan",
        "years": "2020 – 2024"
      },
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2019 – 2022"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2014 – 2019"
      }
    ],
    "experiences": [
      {
        "title": "Postdoctoral Researcher",
        "institution": "Graduate Institute of Microbiology & Public Health, NCHU, Taiwan",
        "years": "2024 – Present"
      },
      {
        "title": "Doctoral Fellow",
        "institution": "National Chung Hsing University, Taiwan",
        "years": "2020 – 2024"
      },
      {
        "title": "Graduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2019 – 2022"
      }
    ],
    "skills": [
      "Batch fermentation, Ni-NTA and GST affinity chromatography, Western blotting, plaque reduction neutralization tests (PRNT), cross-reactivity profiling ELISA.",
      "SnapGene, PyMOL, GraphPad Prism, NCBI BLAST."
    ],
    "publications": [
      "Engineered multi-epitope recombinant constructs covering Dengue envelope domains ED1â€“4 for sensitive diagnostic differentiation."
    ],
    "awards": [
      "Taiwan Government / NCHU International Doctoral Scholarship."
    ],
    "researchInterest": "Heterologous protein expression (E. coli, Pichia pastoris), design of pan-serotype diagnostic flavivirus antigens, monoclonal antibody characterization, and antibody-antigen neutralization kinetics."
  },
  "sanjida-yesmin": {
    "name": "Dr. Sanjida Yesmin",
    "role": "Postdoctoral / Ph.D. Researcher (MEXT Scholar)",
    "currentPosition": "Postdoctoral / Ph.D. Researcher",
    "currentInstitution": "Tokyo University of Agriculture and Technology (TUAT), Tokyo, Japan",
    "location": "Tokyo, Japan",
    "researchgate": "https://www.researchgate.net/profile/Sanjida-Yesmin",
    "image": "/Current%20Members%20and%20Alumni/sanjida%20yeasmin.jpg",
    "senioritySession": "MS Session 2019–2020",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "Anti-DENV ED3 IgG Responses Against Heterotypic Secondary DENV ED3 Immunization in Mice Model",
    "submissionDate": "May 2022",
    "shortAbstract": "Investigated secondary heterotypic immune responses and sero-cross-reactivity patterns in mice prime-boosted with different dengue serotype ED3 domains.",
    "bioSnippet": "Dr. Sanjida Yesmin is a Postdoctoral / Ph.D. Researcher in Protein Engineering and Molecular Immunology at Tokyo University of Agriculture and Technology (TUAT), Japan, supported by the Japanese Government (MEXT) scholarship. Her research investigates antibody-dependent enhancement (ADE), neutralizing antibody epitope mapping, solubility-controlling peptide tags, and prime-boost vaccination strategies against flaviviruses.",
    "education": [
      {
        "degree": "Ph.D.",
        "field": "Protein Engineering & Immunology",
        "institution": "Tokyo University of Agriculture and Technology (TUAT), Japan",
        "years": "2022 – Present"
      },
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2019 – 2022"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2014 – 2019"
      }
    ],
    "experiences": [
      {
        "title": "Researcher (MEXT Scholar)",
        "institution": "Tokyo University of Agriculture and Technology (TUAT), Japan",
        "years": "2022 – Present"
      },
      {
        "title": "Graduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2019 – 2022"
      }
    ],
    "skills": [
      "Dynamic light scattering (DLS), analytical size exclusion chromatography (SEC-HPLC), circular dichroism (CD), fluorescence spectroscopy, nanoDSF thermal shift assays, micro-flow imaging (MFI).",
      "Zetasizer software, OriginLab, GraphPad Prism, PyMOL."
    ],
    "publications": [
      "Presentations at the Biophysical Society of Japan (BSJ) and Protein Science Society of Japan",
      "papers on antibody formulation stability."
    ],
    "awards": [
      "Monbukagakusho (MEXT) Doctoral Scholarship, Government of Japan."
    ],
    "researchInterest": "Protein biophysics, colloidal stability, aggregation kinetics of therapeutic monoclonal antibodies, sub-visible aggregate characterization, and formulation excipient design."
  },
  "mahabubul-mowla": {
    "name": "Mahabubul Mowla",
    "role": "Lecturer, USTC · Former MSI Lab Research Fellow",
    "currentPosition": "Lecturer, Department of Biochemistry and Biotechnology",
    "currentInstitution": "University of Science and Technology Chittagong (USTC)",
    "location": "Chittagong, Bangladesh",
    "email": "mahabubul@ustc.ac.bd",
    "institutionalEmail": "mahabubul@ustc.ac.bd",
    "profileUrl": "https://ustc.ac.bd/fm-mahabubul-mowla/",
    "image": "/Current%20Members%20and%20Alumni/mahabubul%20mowla%20ustc.jpg",
    "senioritySession": "MS Session 2020–2021",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "Anti-Dengue Cytokine and Antibody Responses in Recombinant ED3 Immunized Mice",
    "submissionDate": "July 2023",
    "shortAbstract": "Investigated cellular cytokine profiles and IgG antibody responses in mice immunized with recombinant dengue envelope protein domain 3 variants.",
    "bioSnippet": "Mahabubul Mowla is a Lecturer in the Department of Biochemistry and Biotechnology at University of Science and Technology Chittagong (USTC). He held 1st Position in both his M.S. and B.Sc. in Biochemistry & Molecular Biology at the University of Chittagong. He served as a Research Fellow at MSI Lab, as well as a Molecular Biologist at BITID and Chevron Clinical Laboratory during the COVID-19 pandemic.",
    "education": [
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology (1st Position)",
        "institution": "University of Chittagong",
        "years": "2020 – 2023"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology (1st Position)",
        "institution": "University of Chittagong",
        "years": "2015 – 2020"
      }
    ],
    "experiences": [
      {
        "title": "Lecturer",
        "institution": "Dept. of Biochemistry & Biotechnology, USTC",
        "years": "2023 – Present"
      },
      {
        "title": "Research Fellow",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2021 – 2023"
      },
      {
        "title": "Molecular Biologist",
        "institution": "Bangladesh Institute of Tropical & Infectious Disease (BITID) & Chevron Lab",
        "years": "2020 – 2021"
      },
      {
        "title": "Lecturer in Chemistry",
        "institution": "South Asian College Chittagong",
        "years": "2021 – 2022"
      }
    ],
    "skills": [
      "Clinical biomarker profiling, enzymatic assay kits, UV-Vis spectrophotometry, SDS-PAGE, Bradford protein assay.",
      "GraphPad Prism, Microsoft Excel advanced statistical modeling, BLAST."
    ],
    "publications": [
      "Academic curricula development in advanced biochemistry and research papers in clinical metabolism."
    ],
    "awards": [
      "USTC Faculty Teaching Excellence",
      "Chittagong University Merit Scholarship during undergraduate studies."
    ],
    "researchInterest": "Metabolic biochemistry, regulation of hepatic gluconeogenesis and glycogenolysis, lipid accumulation, clinical biomarkers of diabetic nephropathy, and immunology."
  },
  "antara-saha": {
    "name": "Antara Saha",
    "role": "Graduate Research Assistant & Ph.D. Student",
    "currentPosition": "Graduate Research Assistant & Ph.D. Student",
    "currentInstitution": "Department of Biochemistry & Biophysics, Texas A&M University, USA",
    "location": "College Station, Texas, USA",
    "researchgate": "https://www.researchgate.net/profile/Antara-Saha-5",
    "image": "/Current%20Members%20and%20Alumni/antara%20saha.jpg",
    "senioritySession": "MS Session 2020–2021",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "Anti-Dengue Cytokine Responses against Four Different DENV ED3s in Mice Model",
    "submissionDate": "July 20, 2023",
    "shortAbstract": "Quantified intracellular Th1/Th2 cytokine expression profiles (IFN-γ and IL-4) in response to immunization with DENV1–4 ED3 proteins in mice.",
    "bioSnippet": "Antara Saha is a Graduate Research Assistant and Ph.D. Student in the Department of Biochemistry & Biophysics at Texas A&M University, USA. She earned her M.S. and B.Sc. in Biochemistry & Molecular Biology from the University of Chittagong. At MSI Lab, she investigated cellular Th1/Th2 cytokine memory and long-term anti-ED3 IgG responses across all four dengue serotypes.",
    "education": [
      {
        "degree": "Ph.D. Student",
        "field": "Biochemistry & Biophysics",
        "institution": "Texas A&M University, College Station, Texas, USA",
        "years": "2023 – Present"
      },
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2020 – 2023"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2015 – 2020"
      }
    ],
    "experiences": [
      {
        "title": "Graduate Research Assistant",
        "institution": "Department of Biochemistry & Biophysics, Texas A&M University, USA",
        "years": "2023 – Present"
      },
      {
        "title": "Graduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2020 – 2023"
      }
    ],
    "skills": [
      "Vapor-diffusion protein crystallization, recombinant protein expression in bacterial and insect cell systems, SEC, surface plasmon resonance (SPR), biolayer interferometry (BLI).",
      "CCP4 crystallographic suite, Coot model building, Phenix, PyMOL, ChimeraX."
    ],
    "publications": [
      "Structural determinants of antibody neutralization against arboviruses",
      "international symposium poster presentations."
    ],
    "awards": [
      "Fully funded Graduate Teaching & Research Assistantship at Texas A&M University",
      "NST Research Fellow."
    ],
    "researchInterest": "Structural biochemistry, macromolecular crystallographic analysis, flavivirus Envelope Domain III (ED3) epitope presentation, and viral antigen conformation."
  },
  "dr-moushumi-ghosh-roy": {
    "name": "Dr. Moushumi Ghosh Roy",
    "role": "Assistant Professor & Doctoral Scholar",
    "currentPosition": "Assistant Professor, Department of Pharmacy",
    "currentInstitution": "BGC Trust University Bangladesh, Chittagong",
    "location": "Chittagong, Bangladesh",
    "researchgate": "https://www.researchgate.net/profile/Moushumi-Ghosh-Roy",
    "image": "/Current%20Members%20and%20Alumni/moushumi_ghosh_roy.jpg",
    "senioritySession": "PhD Candidate",
    "supervisor": "Dr. Anjuvan Singh",
    "coSupervisors": "Dr. M. Monirul Islam",
    "thesisTitle": "Mimicking natural anti-DENV antibody response in mice model using dengue envelope protein domain 3",
    "submissionDate": "August 2023",
    "shortAbstract": "Correlated human natural dengue serotype prevalence and clinical symptoms in Chattogram with multi-valent ED3 artificial immunization and T-cell responses in mice.",
    "bioSnippet": "Dr. Moushumi Ghosh Roy is an Assistant Professor in the Department of Pharmacy at BGC Trust University Bangladesh. She completed her Ph.D. in Pharmaceutical Biotechnology at Lovely Professional University, India, and her M.S. and B.Sc. in Biochemistry & Molecular Biology at the University of Chittagong. Her research focuses on dengue clinical epidemiology, outbreak sero-prevalence, co-circulating serotypes in Bangladesh, and subunit vaccine immunogenicity.",
    "education": [
      {
        "degree": "Ph.D.",
        "field": "Pharmaceutical Biotechnology & Molecular Virology",
        "institution": "Lovely Professional University, India",
        "years": "2018 – 2023"
      },
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2010 – 2012"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2005 – 2010"
      }
    ],
    "experiences": [
      {
        "title": "Assistant Professor",
        "institution": "Department of Pharmacy, BGC Trust University Bangladesh",
        "years": "2020 – Present"
      },
      {
        "title": "Lecturer",
        "institution": "Department of Pharmacy, BGC Trust University Bangladesh",
        "years": "2015 – 2020"
      },
      {
        "title": "Doctoral Research Fellow",
        "institution": "MSI Lab, University of Chittagong & Lovely Professional University",
        "years": "2018 – 2023"
      }
    ],
    "skills": [
      "Diagnostic IgM/IgG ELISA, NS1 antigen testing, MTT cell viability bioassays, crude extract Soxhlet preparation, disc diffusion assays.",
      "SPSS, GraphPad Prism, PubMed/NCBI database analysis."
    ],
    "publications": [
      "Epidemiological surveillance studies on urban dengue outbreaks and pharmacological validation of native medicinal herbs in peer-reviewed journals."
    ],
    "awards": [
      "BGC Trust University Research Grant",
      "Active Member of Pharmacy & Life Sciences Academic Committees."
    ],
    "researchInterest": "Sero-epidemiology of concurrent multi-serotype dengue infections, pharmacological evaluation of natural phytocompounds, cytotoxic bioassays, and membrane transport."
  },
  "sabrina-akter": {
    "name": "Sabrina Akter",
    "role": "Lecturer, USTC · Former MSI Lab Research Associate",
    "currentPosition": "Lecturer, Department of Biochemistry and Biotechnology",
    "currentInstitution": "University of Science and Technology Chittagong (USTC)",
    "location": "Chittagong, Bangladesh",
    "email": "sabrina@ustc.ac.bd",
    "institutionalEmail": "sabrina@ustc.ac.bd",
    "profileUrl": "https://ustc.ac.bd/fm-sabrina-akter/",
    "image": "/Current%20Members%20and%20Alumni/sabrina%20akter.jpg",
    "senioritySession": "MS Session 2021–2022",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "Serospecificity and sero-cross-reactivity of anti-SARS-CoV-2 antibodies developed against the Receptor Binding Domain (RBD) of Wuhan and Omicron strains in mice model",
    "submissionDate": "September 30, 2024",
    "shortAbstract": "Evaluated serospecificity and cross-reactive IgG antibody responses in mice immunized with recombinant Wuhan and Omicron (BA.4/5, JN.1) SARS-CoV-2 RBDs.",
    "bioSnippet": "Sabrina Akter is a Lecturer in the Department of Biochemistry and Biotechnology at University of Science and Technology Chittagong (USTC). She completed her Master's and Bachelor's (Honours) degrees in Biochemistry and Molecular Biology from the University of Chittagong. Prior to joining USTC, she worked as a Research Associate at the Laboratory of Molecular & Structural Immunology (MSI Lab), focusing on coronavirus variant cross-neutralization.",
    "education": [
      {
        "degree": "M.Sc.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2021 – 2024"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2016 – 2021"
      }
    ],
    "experiences": [
      {
        "title": "Lecturer",
        "institution": "Dept. of Biochemistry & Biotechnology, USTC",
        "years": "2024 – Present"
      },
      {
        "title": "Research Associate",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2022 – 2024"
      }
    ],
    "skills": [
      "Murine immunization protocols, indirect ELISA, SDS-PAGE, Western blot, bacterial recombinant expression (BL21 DE3), affinity purification (His-tag Ni-NTA).",
      "GraphPad Prism, PyMOL, NCBI Primer-BLAST."
    ],
    "publications": [
      "Preclinical papers on coronavirus variant antibody neutralization and subunit construct immunogenicity."
    ],
    "awards": [
      "National Science & Technology (NST) Fellowship, Ministry of Science and Technology, Bangladesh."
    ],
    "researchInterest": "SARS-CoV-2 spike protein receptor-binding domain cross-reactivity, recombinant subunit vaccine immunology, antibody titer kinetics in animal models, and clinical serology."
  },
  "rafiqul-shanta": {
    "name": "Md. Rafiqul Islam Shanta",
    "role": "Research Fellow, BFRI · Former Graduate Research Assistant",
    "currentPosition": "Research Fellow, Bangladesh Forest Research Institute (BFRI)",
    "currentInstitution": "Bangladesh Forest Research Institute (BFRI), Chittagong",
    "location": "Chittagong, Bangladesh",
    "linkedin": "https://www.linkedin.com/in/rafiqul-islam-691710153/",
    "image": "/Current%20Members%20and%20Alumni/rafiqul%20islam%20shanto.jpg",
    "senioritySession": "MS Session 2021–2022",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "Anti-SARS-CoV2 IgG Responses in the Sinopharm-Vaccinated Individuals in Chattogram, Bangladesh and the Impact of Homologous and Heterologous Boosting",
    "submissionDate": "September 30, 2024",
    "shortAbstract": "Profiled antibody waning and cross-recognition of Omicron vs. Wuhan strains in Sinopharm-vaccinated human cohorts receiving homologous vs. heterologous booster shots.",
    "bioSnippet": "Md. Rafiqul Islam Shanta is a Research Fellow at the Bangladesh Forest Research Institute (BFRI). He earned his M.S. and B.Sc. in Biochemistry & Molecular Biology from the University of Chittagong. His research at MSI Lab investigated clinical antibody waning kinetics and booster vaccination strategies in Sinopharm-vaccinated human populations.",
    "education": [
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2021 – 2024"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2016 – 2021"
      }
    ],
    "experiences": [
      {
        "title": "Research Fellow",
        "institution": "Bangladesh Forest Research Institute (BFRI)",
        "years": "2024 – Present"
      },
      {
        "title": "Graduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2022 – 2024"
      }
    ],
    "skills": [
      "Clinical Human Serology",
      "Sinopharm Booster Kinetic Profiling",
      "ELISA Protocols",
      "Biochemical Assays",
      "Statistical Analysis & GraphPad Prism"
    ],
    "publications": [
      "Anti-SARS-CoV2 IgG Responses in the Sinopharm-Vaccinated Individuals in Chattogram, Bangladesh and the Impact of Homologous and Heterologous Boosting.",
      "Longitudinal assessment of antibody waning against ancestral vs. variant strains in vaccinated hospital cohorts."
    ],
    "awards": [
      "BFRI Research Fellowship Grant",
      "National Science and Technology (NST) Fellowship, Bangladesh"
    ]
  },
  "asma-mazumder": {
    "name": "Asma Rashid Mazumder",
    "role": "Researcher & Educator · Former M.Sc. Research Assistant",
    "currentPosition": "Researcher & Educator, Higher Secondary & Tertiary Education Sector",
    "currentInstitution": "Higher Secondary & Tertiary Education Sector, Chittagong",
    "location": "Chittagong, Bangladesh",
    "researchgate": "https://www.researchgate.net/profile/Asma-Mazumder",
    "image": "/Current%20Members%20and%20Alumni/asma%20rashid%20mozumder.jpg",
    "senioritySession": "MS Session 2022–2023",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "Trivalent SARS-CoV-2 RBD Immunization in Mice Induces Wuhan, Omicron BA.5, and JN.1 Cross-Reacting anti-SARS-CoV-2 Antibodies",
    "submissionDate": "August 3, 2025",
    "shortAbstract": "Evaluated the immunogenicity of a trivalent RBD formulation (Wuhan + BA.5 + JN.1) in mice, demonstrating broad cross-reactivity across multiple SARS-CoV-2 variants.",
    "bioSnippet": "Asma Rashid Mazumder is an academic researcher and educator. She completed her M.S. and B.Sc. (Honours) in Biochemistry and Molecular Biology at the University of Chittagong. Her thesis at MSI Lab pioneered multivalent coronavirus subunit formulation, demonstrating broad cross-reactive protection against divergent Omicron lineages.",
    "education": [
      {
        "degree": "M.S.",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2022 – 2025"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2017 – 2022"
      }
    ],
    "experiences": [
      {
        "title": "Educator & Researcher",
        "institution": "Higher Secondary & Tertiary Education Sector",
        "years": "2024 – Present"
      },
      {
        "title": "M.Sc. Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2022 – 2025"
      }
    ],
    "skills": [
      "In vivo mouse immunization schedules, indirect ELISA endpoint titer determinations, cross-adsorption assays, SDS-PAGE, serum titration curves.",
      "GraphPad Prism, PyMOL, Excel data regression."
    ],
    "publications": [
      "Co-authored conference communications demonstrating cross-reactive antibody breadth across divergent coronavirus lineages."
    ],
    "awards": [
      "University Postgraduate Research Fellowship",
      "Lab of Molecular & Structural Immunology Core Member."
    ],
    "researchInterest": "Humoral immune responses, cross-neutralizing antibody decay against SARS-CoV-2 Omicron sublineages, mouse immunization regimens, and multivalent antigen designs."
  },
  "mushtak-fuad": {
    "name": "Mohammad Mushtak Fuad",
    "role": "Lab Manager & Graduate Research Assistant",
    "currentPosition": "Lab Manager & HEAT-11009-CU Core Lead",
    "currentInstitution": "Laboratory of Molecular & Structural Immunology (MSI Lab), University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "mushtakfuad@gmail.com",
    "personalEmail": "mushtakfuad@gmail.com",
    "phone": "+8801704332114",
    "linkedin": "https://www.linkedin.com/in/mushtakfuad/",
    "researchgate": "https://www.researchgate.net/profile/Mohammad-Mushtak-Fuad",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/mohammad%20muhstak%20fuad.jpg",
    "isLabManager": true,
    "projectResponsibility": "Currently handling core wet-lab operations and project execution for the World Bank / HEAT-11009-CU research project.",
    "senioritySession": "MS Session 2023–2024",
    "supervisor": "Professor M. Monirul Islam, PhD",
    "thesisTitle": "Immunological and Computational Evaluation of Vaccine Strategies Against SARS-CoV-2 Variants in Chattogram, Bangladesh",
    "submissionDate": "June 7, 2026",
    "shortAbstract": "Integrated clinical human serology with HADDOCK molecular docking and PRODIGY thermodynamics to explain antibody waning and structural mechanics of variant escape.",
    "bioSnippet": "Mohammad Mushtak Fuad is the Laboratory Manager and Graduate Research Assistant at the Laboratory of Molecular & Structural Immunology (MSI Lab), University of Chittagong. He leads operational and experimental workflows for the World Bank / HEAT-11009-CU advanced research grant. His research bridges clinical immunology, host-pathogen interactions, computational structural vaccinology, HADDOCK docking, and multi-omics modeling.",
    "education": [
      {
        "degree": "M.S. (Thesis)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2023 – 2026"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2018 – 2023"
      }
    ],
    "experiences": [
      {
        "title": "Laboratory Manager & Operations Lead",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2023 – Present"
      },
      {
        "title": "Core Research Fellow",
        "institution": "World Bank / HEAT-11009-CU Advanced Vaccine Project",
        "years": "2023 – Present"
      },
      {
        "title": "Graduate Research Assistant",
        "institution": "Dept. of Biochemistry & Molecular Biology, CU",
        "years": "2023 – Present"
      }
    ],
    "skills": [
      "In vivo murine immunization, splenocyte harvesting, indirect ELISA, RT-qPCR, SDS-PAGE, recombinant protein expression and Ni-NTA purification in E. coli, Hitachi Chromaster HPLC, GC-MS volatile compound profiling.",
      "PyMOL, UCSF ChimeraX, HADDOCK 2.4, PRODIGY, Python (scikit-learn, pandas, NumPy), GraphPad Prism non-linear regression, AutoDock."
    ],
    "publications": [
      "Biologically Gated Multi-Omic Framework for Immunotherapy Response in Metastatic Melanoma (Manuscript Under Review).",
      "Lead author of 4 peer-reviewed conference proceedings (ICLS 2025 SUST, ICBHA 2025 SAU, IBC 2025 Brac University)."
    ],
    "awards": [
      "HEAT-11009-CU MS Research Scholarship, World Bank & Government of Bangladesh (2026)",
      "National Science & Technology (NST) Fellowship, Ministry of Science and Technology (2025)",
      "Best Stall & Best Laboratory Award, CRIS (2025)",
      "Dutch-Bangla Bank Merit Scholarship (2017–2025)"
    ],
    "researchInterest": "Computational structural immunology (molecular docking via HADDOCK 2.4, PRODIGY binding affinity, epitope solvent accessibility), viral immune evasion (SARS-CoV-2 RBD variants), multi-omics machine learning framework for immunotherapy response in metastatic melanoma, and secondary metabolite profiling."
  },
  "sadia-binte-alam": {
    "name": "Sadia Binte Alam",
    "role": "Postgraduate Research Assistant",
    "currentPosition": "Postgraduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "sadiabinte316@gmail.com",
    "personalEmail": "sadiabinte316@gmail.com",
    "linkedin": "https://www.linkedin.com/in/sadia-binte-alam-3a271b207",
    "researchgate": "https://www.researchgate.net/profile/Sadia-Alam-21",
    "department": "Biochemistry & Molecular Biology",
    "cvUrl": "/cv/sadia-binte-alam_cv.pdf",
    "image": "/Current%20Members%20and%20Alumni/sadia%20binte%20alam.jpg",
    "senioritySession": "MS Session 2023–2024",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "A Comprehensive Analysis of Serospecificity and Sero-Cross-Reactivity against SARS-CoV-2 Variants Following Heterologous Mix and Match Vaccination Strategy in Mice Model",
    "submissionDate": "June 7, 2026",
    "shortAbstract": "Investigated mix-and-match booster combinations using variant RBDs in mice to identify optimal vaccination regimens for broad coronavirus protection.",
    "bioSnippet": "Sadia Binte Alam is a Postgraduate Research Assistant at the Laboratory of Molecular & Structural Immunology (MSI Lab), University of Chittagong. Her thesis evaluates mix-and-match vaccination strategies using variant recombinant receptor binding domains in mice to counter immune evasion.",
    "education": [
      {
        "degree": "M.S. (Thesis)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2023 – 2026"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2018 – 2023"
      }
    ],
    "experiences": [
      {
        "title": "Postgraduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2023 – Present"
      }
    ],
    "skills": [
      "Clinical specimen handling, biological sample preparation, diagnostic microplate screening.",
      "Python (scikit-learn, pandas, NumPy, seaborn, Matplotlib), R statistical environment, Jupyter Notebooks."
    ],
    "publications": [
      "Computational predictive pipelines for complex disease classification and risk factor stratification."
    ],
    "awards": [
      "University Academic Merit Scholarship",
      "Participant in International Biomedical Data Hackathons."
    ],
    "researchInterest": "Biomedical data science, supervised machine learning (Random Forest, SVM, LightGBM), electronic healthcare record feature selection, diagnostic classification, and predictive biomarker modeling."
  },
  "refath-alam-erin": {
    "name": "Refath Alam Erin",
    "role": "Postgraduate Research Assistant",
    "currentPosition": "Postgraduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "refatherin2510@gmail.com",
    "personalEmail": "refatherin2510@gmail.com",
    "linkedin": "https://www.linkedin.com/in/refath-alam-erin/",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/refath%20alam%20erin.jpg",
    "senioritySession": "MS Session 2023–2024",
    "supervisor": "Prof. Dr. Mohammad Monirul Islam",
    "thesisTitle": "A Mystic Exploration of JEV Immunogenicity: Anti JEV-ED3 Antibody Responses Against Wild-type & Destabilizing Mutants of JEV-ED3",
    "submissionDate": "June 7, 2026",
    "shortAbstract": "Japanese encephalitis virus (JEV), a positive-sense single-stranded RNA flavivirus, is a major cause of endemic viral encephalitis. Its envelope protein domain III (JEV-ED3) plays a crucial role in receptor binding, membrane fusion, and the induction of neutralizing antibodies, making it a promising subunit vaccine candidate. In this study, anti-JEV-ED3 antibody responses were evaluated against Escherichia coli-expressed wild-type and structurally modified variants in a murine model. Destabilized variants (JEV-ED3-C5I, -P47A, -P47G, and -F21A) were generated through site-directed mutagenesis and expressed in E. coli BL21 as inclusion bodies. BALB/c mice were immunized subcutaneously with three biweekly doses (15 µg/mouse) of JEV-ED3-WT (with or without 5 µM cobalt) or adjuvant-free mutant variants. IgG responses were measured using indirect ELISA, and immune marker expression was analyzed via one-step RT-qPCR. All variants were non-toxic and immunogenic. Notably, JEV-ED3-WT supplemented with cobalt (WT-Co) and the F21A variant produced the highest antibody titers, exhibiting more than 11-fold and 8-fold increases, respectively, compared to wild-type protein, predominantly inducing a Th2-skewed humoral response with elevated IgG1. Furthermore, RT-qPCR demonstrated positive correlation between higher anti-ED3 titers and increased expression of CD86, TLR4, CD80, and MHC class II, underscoring the stability–immunogenicity paradigm for rational flavivirus subunit vaccine design.",
    "keyObjectives": [
      "Synthesize and express recombinant Japanese encephalitis virus envelope protein domain III (JEV-ED3) wild-type and site-directed destabilizing variants (C5I, P47A, P47G, F21A) as inclusion bodies in E. coli BL21.",
      "Evaluate in vivo safety, tolerance, and longitudinal IgG antibody responses across three biweekly subcutaneous doses (15 µg/mouse) in BALB/c murine models.",
      "Investigate the immuno-potentiating efficacy of trace cobalt (5 µM Co2+) co-formulation compared to adjuvant-free mutant constructs.",
      "Quantify Th1 vs. Th2 humoral polarization (IgG subclass profiling with elevated IgG1) and correlate antibody titers with transcriptional expression of CD86, TLR4, CD80, and MHC class II via one-step RT-qPCR.",
      "Elucidate the conformational stability–immunogenicity relationship to rationally optimize subunit vaccine immunogens against emerging JEV lineages."
    ],
    "methodology": {
      "Antigen Engineering & Expression": "Wild-type JEV-ED3 sequence was obtained from UniProt and synthesized by Eurofins. Destabilized variants (C5I, P47A, P47G, and F21A) were constructed via site-directed mutagenesis, confirmed by Sanger DNA sequencing, and heterologously expressed in Escherichia coli BL21 as inclusion bodies.",
      "Murine Immunization Schedule": "BALB/c mice were immunized subcutaneously with three biweekly doses (15 µg/mouse) of JEV-ED3-WT (with or without 5 µM cobalt) or adjuvant-free mutant variants (C5I, P47A, P47G, F21A), monitored for systemic tolerance.",
      "Serological Antibody Titration": "Serial tail bleeds were collected post-immunization, and total IgG and subclass-specific (IgG1 vs. IgG2a) antibody titers were quantitatively evaluated using indirect ELISA.",
      "Molecular Immune Marker Profiling": "Total cellular RNA was isolated and analyzed via one-step reverse transcription quantitative real-time PCR (one-step RT-qPCR) to measure transcriptional modulation of critical immune markers: CD86, TLR4, CD80, and MHC class II.",
      "Immunological Data Correlation": "Anti-ED3 antibody titers and fold-changes relative to wild-type (>11-fold for WT-Co, >8-fold for F21A) were statistically correlated with immune marker transcript expression and Th2 polarization."
    },
    "expectedImpact": "Demonstrates that controlled structural destabilization (F21A mutation) or trace cobalt supplementation can overcome the intrinsic low immunogenicity of wild-type JEV-ED3, eliciting marked antibody increases (>8- to 11-fold) through Th2-biased pathways and immune receptor up-regulation, providing a foundational blueprint for next-generation rational flavivirus subunit vaccines.",
    "bioSnippet": "Refath Alam Erin is a Postgraduate Research Assistant at the Laboratory of Molecular & Structural Immunology (MSI Lab), Department of Biochemistry & Molecular Biology, University of Chittagong (MS Session 2023–2024). Her thesis research investigates Japanese Encephalitis Virus (JEV) envelope protein domain III (ED3) subunit vaccinology, elucidating the stability–immunogenicity paradigm using wild-type and destabilizing mutant constructs (C5I, F21A, P47A, P47G) alongside trace cobalt adjuvants in murine models.",
    "education": [
      {
        "degree": "M.S. (Thesis)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2023 – 2026"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2018 – 2023"
      }
    ],
    "experiences": [
      {
        "title": "Postgraduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2023 – Present"
      }
    ],
    "skills": [
      "Recombinant Protein Expression in E. coli BL21 (Inclusion Bodies)",
      "Site-Directed Mutagenesis & DNA Sequencing Verification",
      "In Vivo BALB/c Murine Immunization & Tail Bleeding Protocols",
      "Indirect ELISA & Endpoint Humoral Antibody Titer Quantification",
      "One-Step RT-qPCR Quantitative Gene Expression Profiling",
      "Immune Activation Marker Profiling (CD86, TLR4, CD80, MHC-II)",
      "Th1/Th2 Humoral Immune Polarization & IgG Subclass Analysis",
      "Total RNA Isolation & Spectrophotometric Purity Assessment",
      "Flavivirus Envelope Domain III (ED3) Subunit Immunoengineering"
    ],
    "publications": [
      "A Mystic Exploration of JEV Immunogenicity: Anti JEV-ED3 Antibody Responses Against Wild-type & Destabilizing Mutants of JEV-ED3 (Master's Thesis Dissertation Defense: June 7, 2026, Department of Biochemistry & Molecular Biology, University of Chittagong).",
      "Co-investigator in academic postgraduate molecular biology and structural vaccinology research dissertations at MSI Lab."
    ],
    "awards": [
      "Chittagong University Academic Excellence Recognition",
      "Laboratory Safety Certification."
    ],
    "researchInterest": "Flavivirus subunit vaccinology, Japanese encephalitis virus (JEV) ED3 immunoengineering, protein stability–immunogenicity relationships, murine immunization models, indirect ELISA serology, and RT-qPCR immune marker quantification."
  },
  "sarvani-datta": {
    "name": "Sarvani Datta",
    "role": "Graduate Research Assistant",
    "currentPosition": "Graduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "dattabani00@gmail.com",
    "personalEmail": "dattabani00@gmail.com",
    "linkedin": "https://www.linkedin.com/in/sarvani-datta-03b675198",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/sarvani%20datta.jpg",
    "senioritySession": "MS Session 2024–2025",
    "supervisor": "Prof. Dr. Mohammad Monirul Islam",
    "thesisTitle": "Comparative Analyses of Agarwood Formation and Resin Composition",
    "submissionDate": "Ongoing Master's Research",
    "shortAbstract": "Evaluates artificial agarwood resin induction in Aquilaria trees by examining both the anatomical extent (area) of resin deposition and the resulting chemical composition under combined biotic and abiotic stresses.",
    "bioSnippet": "Sarvani Datta is a Graduate Research Assistant at MSI Lab, Department of Biochemistry & Molecular Biology, University of Chittagong. Her MS research evaluates artificial agarwood resin induction in Aquilaria trees by examining both the anatomical extent of resin deposition and the resulting chemical composition under combined biotic and abiotic stresses, identifying quality-defining sesquiterpenes and chromones via GC-MS.",
    "keyObjectives": [
      "Compare the chemical profiles of agarwood resin induced by different combinations of biotic and abiotic stressors.",
      "Identify specific agarwood quality markers and establish which stressor formulations yield high-quality resin.",
      "Determine the optimal treatment combination that provides the best balance between resin yield and chemical quality for practical, large-scale production."
    ],
    "methodology": {
      "Induction Treatments": "Healthy trees are treated through drilled trunk holes with formulations combining Fusarium spp. inoculums (whole fungal extract, supernatant, and pellet fractions), optimized concentrations of commercial cellulases, and free divalent metal ions via local injection and continuous flow.",
      "Sampling Schedule": "Wood tissue samples are harvested at tri-monthly intervals over an 8-month timeframe.",
      "Histopathological Analysis": "Tissue sections are microscopically examined to assess anatomical structural changes, measuring the size of the induced area and the spatial pattern of resin formation.",
      "Chemical Profiling": "Gas Chromatography–Mass Spectrometry (GC-MS) is employed to characterize the resin's chemical profile and detect major quality-defining sesquiterpenes and chromones.",
      "Data Analysis": "Statistical comparisons of resin yield and chemical profiles among treatment groups are conducted using spreadsheet-based models."
    },
    "expectedImpact": "Identifies an optimized, reproducible artificial induction strategy to increase agarwood yields without compromising resin quality, supporting commercial cultivation and reducing harvesting pressure on wild Aquilaria populations.",
    "education": [
      {
        "degree": "M.S. Candidate",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2024 – Present"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2019 – 2024"
      }
    ],
    "experiences": [
      {
        "title": "Graduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2024 – Present",
        "details": "Leading histological sectioning, resin area quantification, and GC-MS chemical profiling for the Aquilaria agarwood resin bio-induction research project."
      }
    ],
    "skills": [
      "Gas Chromatography–Mass Spectrometry (GC-MS) Metabolomics",
      "Histopathological Microtome Sectioning & Anatomical Microscopy",
      "Chemical Profiling of Sesquiterpenes & 2-(2-phenylethyl)chromones",
      "Fusarium spp. Inoculum Preparation & Cellulase Formulation",
      "Trunk Drill Hole Inoculation & Divalent Metal Ion Elicitor Flow",
      "Spreadsheet-based Statistical Modeling & Yield Comparison"
    ],
    "publications": [
      "Comparative anatomical and chemical profiling of artificially induced Aquilaria resin (in preparation)."
    ],
    "awards": [
      "Undergraduate Merit Scholarship, Faculty of Biological Sciences, University of Chittagong."
    ],
    "researchInterest": "Artificial agarwood resin induction, Aquilaria malaccensis histopathology, GC-MS chemical profiling of sesquiterpenes and chromones, combined biotic (Fusarium spp.) and abiotic stress elicitation, plant metabolomics."
  },
  "jafrina-akter-eva": {
    "name": "Jafrina Akter Eva",
    "role": "Graduate Research Assistant",
    "currentPosition": "Graduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "jafrinaaktereva201@gmail.com",
    "personalEmail": "jafrinaaktereva201@gmail.com",
    "linkedin": "https://www.linkedin.com/in/jafrina-akter-eva/",
    "department": "Biochemistry & Molecular Biology",
    "cvUrl": "/cv/jafrina-akter-eva_cv.pdf",
    "image": "/Current%20Members%20and%20Alumni/Jafrina%20Akter%20Eva.png",
    "senioritySession": "MS Session 2024–2025",
    "supervisor": "Prof. Dr. Mohammad Monirul Islam",
    "thesisTitle": "Understanding Artificial Agarwood Induction Pathways and Mechanisms",
    "submissionDate": "Ongoing Master's Research",
    "shortAbstract": "Investigates the molecular and transcriptional mechanisms underlying artificial agarwood induction in Aquilaria malaccensis, specifically tracking the activation of early defense signaling cascades and downstream sesquiterpene biosynthetic pathways.",
    "bioSnippet": "Jafrina Akter Eva is a Graduate Research Assistant at MSI Lab, Department of Biochemistry & Molecular Biology, University of Chittagong. Her MS research investigates the molecular and transcriptional mechanisms underlying artificial agarwood induction in Aquilaria malaccensis, specifically tracking early defense signaling cascades and downstream sesquiterpene biosynthetic pathways using RT-qPCR.",
    "keyObjectives": [
      "Profile the transcriptional regulation of stress-responsive defense and resin biosynthesis genes following diverse artificial treatments.",
      "Quantify differential expression changes at 3-month and 6-month post-inoculation intervals.",
      "Measure early defense signaling genes (WRKY1, LOX1, MAPK3, MYC2) and key sesquiterpene biosynthetic genes (DXPS, MK, FPS, SS4, DGS, DGS1, DSS).",
      "Provide a mechanistic basis for rationally formulating synergistic inducers to accelerate resin synthesis."
    ],
    "methodology": {
      "Induction Treatments": "Aquilaria malaccensis trunks receive standardized inducer formulations consisting of fungal inoculants, cellulase enzymes, and chemical signalers (such as cobalt) introduced through uniform drill holes.",
      "Sampling & RNA Extraction": "Vascular wood tissues surrounding inoculation sites are collected at 3 and 6 months post-treatment. Total RNA is isolated via the CTAB-IPA precipitation method and stored at -80°C.",
      "Gene Expression Quantification": "Promega One-Step RT-qPCR is used to measure relative gene expression via the 2^-ΔΔCt method, normalized against GAPDH as an endogenous reference gene.",
      "Statistical Analysis": "Differences in relative transcript abundance across treatment groups are evaluated using one-way ANOVA (p < 0.05)."
    },
    "expectedImpact": "Demonstrates how early defense regulators trigger sustained biosynthetic gene expression over 3 to 6 months. This work establishes validated molecular biomarkers to screen and optimize artificial inducer formulations, facilitating sustainable production and germplasm conservation.",
    "education": [
      {
        "degree": "M.S. Candidate",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2024 – Present"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2020 – 2024"
      }
    ],
    "experiences": [
      {
        "title": "Graduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2024 – Present",
        "details": "Leading CTAB-IPA total RNA isolation, Promega One-Step RT-qPCR, and transcriptional signaling pathway quantification for the Aquilaria agarwood molecular induction project."
      }
    ],
    "skills": [
      "Promega One-Step RT-qPCR Relative Gene Expression",
      "CTAB-IPA Total RNA Extraction from Recalcitrant Wood Tissues",
      "2^-ΔΔCt Relative Quantification Normalized to GAPDH",
      "Quantification of Early Defense Genes (WRKY1, LOX1, MAPK3, MYC2)",
      "Sesquiterpene Biosynthetic Gene Profiling (DXPS, MK, FPS, SS4, DGS, DGS1, DSS)",
      "One-Way ANOVA (p < 0.05) & Molecular Inducer Biomarker Screening"
    ],
    "publications": [
      "Transcriptional regulation of sesquiterpene synthases during elicitor-mediated agarwood induction (in preparation)."
    ],
    "awards": [
      "Chittagong University Biochemistry Research Fellowship",
      "Clinical Diagnostic Training Certification."
    ],
    "researchInterest": "Plant molecular biology, artificial agarwood induction pathways in Aquilaria malaccensis, early defense signaling (WRKY1, LOX1, MAPK3, MYC2), sesquiterpene biosynthesis (DXPS, MK, FPS, SS4, DGS, DGS1, DSS), Promega One-Step RT-qPCR, CTAB-IPA RNA extraction."
  },
  "misbah-ul-islam": {
    "name": "Misbah Ul Islam",
    "role": "Undergraduate Research Assistant",
    "currentPosition": "Undergraduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "misbahulislam065@gmail.com",
    "personalEmail": "misbahulislam065@gmail.com",
    "linkedin": "https://www.linkedin.com/in/misbah-ul-islam-514ba1294/",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/Misbah%20Ul%20Islam.jpg",
    "senioritySession": "BSc Session 2021–2022",
    "bioSnippet": "Misbah Ul Islam is an Undergraduate Research Assistant at the Laboratory of Molecular & Structural Immunology (MSI Lab), Department of Biochemistry and Molecular Biology, University of Chittagong.",
    "education": [
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2021 – Present"
      }
    ],
    "experiences": [
      {
        "title": "Undergraduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2023 – Present"
      }
    ],
    "skills": [
      "Restriction enzyme digestion, ligation protocols, recombinant E. coli culturing, UV-Vis spectrophotometry, SDS-PAGE purity checks.",
      "SnapGene, NCBI BLAST, NEBcutter, PyMOL."
    ],
    "publications": [],
    "awards": [
      "Graduate Researcher Award, Department of Biochemistry & Molecular Biology, CU."
    ],
    "researchInterest": "Recombinant plasmid vector design, bacterial transformation, chemical competence preparation, IPTG induction, and enzymatic kinetics."
  },
  "mohammad-arifur-rahman": {
    "name": "Mohammad Arifur Rahman",
    "role": "Undergraduate Research Assistant",
    "currentPosition": "Undergraduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "arifbinkamal01@gmail.com",
    "personalEmail": "arifbinkamal01@gmail.com",
    "linkedin": "https://www.linkedin.com/in/mohammad-arifur-rahman-6a0810325/",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/Mohammad%20Arifur%20Rahman.jpg",
    "senioritySession": "BSc Session 2021–2022",
    "bioSnippet": "Mohammad Arifur Rahman is an Undergraduate Research Assistant at the Laboratory of Molecular & Structural Immunology (MSI Lab), University of Chittagong.",
    "education": [
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2021 – Present"
      }
    ],
    "experiences": [
      {
        "title": "Undergraduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2023 – Present"
      }
    ],
    "skills": [
      "FPLC/gravity column chromatography, Western blotting, Coomassie/silver staining, cell lysis optimization, membrane ultrafiltration.",
      "UNICORN FPLC control software, Image Lab, GraphPad Prism."
    ],
    "publications": [],
    "awards": [
      "Professional Life Sciences Practitioner Certification",
      "University Alumni Fellowship."
    ],
    "researchInterest": "Preparative protein purification (affinity, ion-exchange, size-exclusion chromatography), immunoblotting, immunological screening assays, and bioprocess parameter monitoring."
  },
  "nusrat-jahan-mim": {
    "name": "Nusrat Jahan Mim",
    "role": "Undergraduate Research Assistant",
    "currentPosition": "Undergraduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "xiaonusratmim@gmail.com",
    "personalEmail": "xiaonusratmim@gmail.com",
    "linkedin": "https://www.linkedin.com/in/nusrat-jahan-763782359/",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/Nusrat%20Jahan%20Mim.jpg",
    "senioritySession": "BSc Session 2021–2022",
    "bioSnippet": "Nusrat Jahan Mim is an Undergraduate Research Assistant at MSI Lab, Department of Biochemistry & Molecular Biology, University of Chittagong.",
    "education": [
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2021 – Present"
      }
    ],
    "experiences": [
      {
        "title": "Undergraduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2023 – Present"
      }
    ],
    "skills": [
      "RT-qPCR, DNA extraction kits, gel electrophoresis, microplate diagnostics, clinical biosafety level compliance.",
      "QuantStudio Design & Analysis software, NCBI BLAST, Primer3."
    ],
    "publications": [],
    "awards": [
      "Biosafety & Good Laboratory Practice (GLP) Certified Specialist."
    ],
    "researchInterest": "Real-time PCR thermal cycler optimization, pathogen diagnostic detection, clinical laboratory safety protocols, and sample biobanking."
  },
  "sadiya-rahman-faiza": {
    "name": "Sadiya Rahman Faiza",
    "role": "Undergraduate Research Assistant",
    "currentPosition": "Undergraduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "srfaiza03@gmail.com",
    "personalEmail": "srfaiza03@gmail.com",
    "linkedin": "https://www.linkedin.com/in/sadiyafaizah/",
    "department": "Biochemistry & Molecular Biology",
    "cvUrl": "/cv/sadiya-rahman-faiza_cv.pdf",
    "image": "/Current%20Members%20and%20Alumni/Sadiya%20Rahman%20Faiza.jpg",
    "senioritySession": "BSc Session 2021–2022",
    "bioSnippet": "Sadiya Rahman Faiza is an Undergraduate Research Assistant at the Laboratory of Molecular & Structural Immunology (MSI Lab), University of Chittagong.",
    "education": [
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2021 – Present"
      }
    ],
    "experiences": [
      {
        "title": "Undergraduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2023 – Present"
      }
    ],
    "skills": [
      "Standard biochemical assays, microplate spectrophotometry, nucleic acid extraction.",
      "NCBI BLAST, AutoDock Vina, PyMOL visualization, MEGA phylogenetic software, UniProt database querying."
    ],
    "publications": [],
    "awards": [
      "Bioinformatics Training Fellowship",
      "Graduate Honor Roll, University of Chittagong."
    ],
    "researchInterest": "Bioinformatics sequence analysis, multiple sequence alignments (Clustal Omega, MUSCLE), phylogenetic evolutionary reconstruction, molecular docking, and ligand screening."
  },
  "mahina-mostafa-chowdhury": {
    "name": "Mahina Mostafa Chowdhury",
    "role": "Undergraduate Research Assistant",
    "currentPosition": "Undergraduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "mahinamostafachowdhury7@gmail.com",
    "personalEmail": "mahinamostafachowdhury7@gmail.com",
    "institutionalEmail": "23604021@std.cu.ac.bd",
    "linkedin": "https://www.linkedin.com/in/mahina-mostafa-chowdhury-3a3726327/",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/Mahina%20Mostafa%20Chowdhury.jpeg",
    "senioritySession": "BSc Session 2022–2023",
    "bioSnippet": "Mahina Mostafa Chowdhury is an Undergraduate Research Assistant at the Laboratory of Molecular & Structural Immunology (MSI Lab), University of Chittagong.",
    "education": [
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2022 – Present"
      }
    ],
    "experiences": [
      {
        "title": "Undergraduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2024 – Present"
      }
    ],
    "skills": [
      "Primer design (NCBI Primer-BLAST), genomic DNA extraction, restriction endonuclease digestion, fluorescent gel documentation.",
      "Primer-BLAST, Hardy-Weinberg equilibrium calculators, SPSS statistical software, ImageJ."
    ],
    "publications": [],
    "awards": [
      "Genetics Research Excellence Award",
      "University Merit Scholarship."
    ],
    "researchInterest": "Human genetic polymorphism detection, PCR-RFLP genotyping, primer design for gene screening, agarose gel electrophoresis, and hereditary disease association."
  },
  "shanjida-islam-eva": {
    "name": "Shanjida Islam Eva",
    "role": "Undergraduate Research Assistant",
    "currentPosition": "Undergraduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "evabmb11@gmail.com",
    "personalEmail": "evabmb11@gmail.com",
    "linkedin": "https://www.linkedin.com/in/shanjida-islam-eva-824307443/",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/Shanjida%20Islam%20Eva.jpeg",
    "senioritySession": "BSc Session 2022–2023",
    "bioSnippet": "Shanjida Islam Eva is an Undergraduate Research Assistant at the Laboratory of Molecular & Structural Immunology (MSI Lab), Department of Biochemistry and Molecular Biology, University of Chittagong.",
    "education": [
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2022 – Present"
      }
    ],
    "experiences": [
      {
        "title": "Undergraduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2024 – Present"
      }
    ],
    "skills": [
      "Soxhlet extraction, vacuum rotary evaporation, UV-Vis spectrophotometric antioxidant kinetics, TLC, and HPLC.",
      "ChemDraw, GraphPad Prism non-linear regression, PubChem database mining."
    ],
    "publications": [],
    "awards": [
      "Pharmaceutical Research Fellowship",
      "Chittagong University Biochemistry Alumna Honor."
    ],
    "researchInterest": "Natural product bioactive isolation, phytochemical solvent partitioning, in vitro antioxidant assays (DPPH, ABTS, FRAP), formulation stability, and pharmacological characterization."
  },
  "dr-m-monirul-islam": {
    "name": "Prof. Dr. Mohammad Monirul Islam",
    "role": "Professor & Principal Investigator",
    "currentPosition": "Professor & Head of Laboratory",
    "currentInstitution": "University of Chittagong",
    "institution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "department": "Department of Biochemistry & Molecular Biology",
    "email": "islammm@cu.ac.bd",
    "institutionalEmail": "islammm@cu.ac.bd",
    "phone": "+8801750180422",
    "researchgate": "https://www.researchgate.net/profile/Md-Islam-2210",
    "profileUrl": "https://cu.ac.bd",
    "cvUrl": "/cv/dr-m-monirul-islam_cv.pdf",
    "image": "/PI/Mohammad%20Monirul%20Islam,%20PI,%20MSI%20Lab.jpg",
    "senioritySession": "PhD Research (TUAT, Tokyo)",
    "supervisor": "Prof. Yutaka Kuroda",
    "thesisTitle": "Structure, Function, and Immunogenicity Studies on Protein Variants (Dengue ED3 & BPTI)",
    "submissionDate": "Foundational Work (2009)",
    "shortAbstract": "Established the structural biophysical mechanisms governing flaviviral envelope domain 3 (ED3) serospecificity, and invented engineered solubility-enhancing peptide tags (SEP/SCP tags) for difficult-to-express viral subunit antigens.",
    "bioSnippet": "Prof. Dr. Mohammad Monirul Islam leads the Laboratory of Molecular & Structural Immunology (MSI Lab) at the University of Chittagong. With over two decades of experience spanning structural biology, molecular immunology, and protein technology, his research focuses on understanding biophysical mechanisms governing host-pathogen interactions, vaccine development against emerging tropical viruses (Dengue, SARS-CoV-2, JEV), and the development of novel peptide tags for solubility and immunogenicity control.",
    "education": [
      {
        "degree": "Ph.D. in Biotechnology & Life Sciences",
        "field": "Structural Immunology & Protein Engineering",
        "institution": "Tokyo University of Agriculture and Technology (TUAT), Tokyo, Japan",
        "years": "2005 – 2009"
      },
      {
        "degree": "Master of Science (M.Sc.)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Dhaka, Dhaka, Bangladesh",
        "years": "1999 – 2000"
      },
      {
        "degree": "Bachelor of Science (B.Sc. Hons)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Dhaka, Dhaka, Bangladesh",
        "years": "1995 – 1999"
      }
    ],
    "experiences": [
      {
        "title": "Professor & Principal Investigator",
        "institution": "Dept. of Biochemistry & Molecular Biology, University of Chittagong",
        "years": "2018 – Present"
      },
      {
        "title": "Lab-In-Charge",
        "institution": "COVID-19 RT-PCR Testing Lab, Faculty of Biological Sciences, University of Chittagong",
        "years": "2020 – 2022"
      },
      {
        "title": "Associate Professor",
        "institution": "Dept. of Biochemistry & Molecular Biology, University of Chittagong",
        "years": "2013 – 2018"
      },
      {
        "title": "Assistant Professor & Lecturer",
        "institution": "Dept. of Biochemistry & Molecular Biology, University of Chittagong",
        "years": "2003 – 2013"
      }
    ],
    "skills": [
      "Structural Immunology",
      "Protein Engineering",
      "X-ray Crystallography & NMR Analysis",
      "Recombinant Antigen Expression",
      "Solubility Tag Design (SEP/SCP)",
      "Flavivirus ED3 Serology",
      "Monoclonal Antibody Characterization",
      "RT-PCR Diagnostics"
    ],
    "publications": [
      "Structure-guided engineering of dengue virus envelope domain III reveals critical residues controlling serospecificity and neutralizing epitope exposure.",
      "Development and validation of solubility-enhancing peptide (SEP) tags for high-level expression of aggregation-prone viral subunit vaccine antigens.",
      "Epidemiological and genomic surveillance of SARS-CoV-2 variants during the COVID-19 pandemic in southeastern Bangladesh.",
      "Immunogenicity and cross-reactive protective efficacy of multivalent dengue subunit vaccine formulations in murine models."
    ],
    "awards": [
      "Monbukagakusho (MEXT) Japanese Government Research Scholarship (2005–2009)",
      "Principal Investigator, World Bank / Higher Education Acceleration and Transformation (HEAT) Advanced Research Grant",
      "University of Chittagong Outstanding Leadership Award in Molecular COVID-19 Diagnostics (2021)",
      "Dean's Award for Research Excellence, Faculty of Biological Sciences, University of Chittagong"
    ]
  },
  "md-shourov-hossain-shuvo": {
    "name": "Md. Shourov Hossain Shuvo",
    "role": "Undergraduate Research Assistant",
    "currentPosition": "Undergraduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "erenyeager4500ad@gmail.com",
    "personalEmail": "erenyeager4500ad@gmail.com",
    "linkedin": "https://www.linkedin.com/in/sourov-hossain-shuvo-827996442",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/Md.Shourov%20Hossain%20Shuvo.jpeg",
    "senioritySession": "Session 2022–2023",
    "bioSnippet": "Md. Shourov Hossain Shuvo is an Undergraduate Research Assistant at the Laboratory of Molecular & Structural Immunology (MSI Lab), Department of Biochemistry & Molecular Biology, University of Chittagong. His academic interests encompass recombinant DNA technology, protein handling, and molecular immunology.",
    "education": [
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2022 – Present"
      }
    ],
    "experiences": [
      {
        "title": "Undergraduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2023 – Present"
      }
    ],
    "skills": [
      "Molecular Biology Protocols",
      "Recombinant DNA Technology",
      "Protein Handling & Buffer Preparation",
      "Laboratory Safety & Equipment Operation"
    ],
    "publications": [],
    "awards": []
  },
  "nazia-sultana": {
    "name": "Nazia Sultana",
    "role": "Undergraduate Research Assistant",
    "currentPosition": "Undergraduate Research Assistant, MSI Lab",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "email": "nazia.sultana0858@gmail.com",
    "personalEmail": "nazia.sultana0858@gmail.com",
    "institutionalEmail": "23604017@std.cu.ac.bd",
    "linkedin": "https://www.linkedin.com/in/nazia-sultana-1a29aa442",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/Nazia%20Sultana.png",
    "senioritySession": "Session 2022–2023",
    "bioSnippet": "Nazia Sultana is an Undergraduate Research Assistant at MSI Lab, Department of Biochemistry & Molecular Biology, University of Chittagong. She focuses on antibody engineering, molecular genetics, and recombinant screening techniques.",
    "education": [
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2022 – Present"
      }
    ],
    "experiences": [
      {
        "title": "Undergraduate Research Assistant",
        "institution": "Laboratory of Molecular & Structural Immunology (MSI Lab), CU",
        "years": "2023 – Present"
      }
    ],
    "skills": [
      "Recombinant Technology Support",
      "Screening Assays",
      "Agarose Gel Electrophoresis",
      "Bioinformatic Curation"
    ],
    "publications": [],
    "awards": []
  },
  "dr-shamsun-nahar": {
    "name": "Dr. Shamsun Nahar Binte Mannan",
    "role": "Associate Professor & Head, Dept. of Skin & VD · Doctoral Fellow (Ph.D. Candidate)",
    "currentPosition": "Associate Professor & Head, Department of Skin & VD",
    "currentInstitution": "Chattogram Maa-O-Shishu Hospital Medical College",
    "location": "Chittagong, Bangladesh",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/Dr.%20Shamsun%20Nahar.jpg",
    "senioritySession": "Ph.D. Researcher",
    "supervisor": "Prof. Dr. Mohammad Monirul Islam",
    "bioSnippet": "Dr. Shamsun Nahar Binte Mannan is a Doctoral Fellow (Ph.D. Candidate) at MSI Lab, Department of Biochemistry & Molecular Biology, University of Chittagong. She serves as Associate Professor & Head of the Department of Skin & VD at Chattogram Maa-O-Shishu Hospital Medical College. Her doctoral investigation focuses on multiplex PCR-based molecular detection of sexually transmitted infections in pregnant women.",
    "education": [
      {
        "degree": "MBBS",
        "field": "Medicine & Surgery",
        "institution": "University of Chittagong",
        "years": "Completed"
      },
      {
        "degree": "DDV",
        "field": "Dermatology & Venereology",
        "institution": "Chittagong Medical College Hospital",
        "years": "Postgraduate"
      },
      {
        "degree": "Advanced Clinical Training",
        "field": "Aesthetic Dermatology, Laser Medicine & Cosmetology",
        "institution": "Specialized Clinical Institutes",
        "years": "Fellowship"
      }
    ],
    "experiences": [
      {
        "title": "Associate Professor & Head",
        "institution": "Dept. of Skin & VD, CMOSHMC",
        "years": "Present"
      },
      {
        "title": "Doctoral Fellow",
        "institution": "MSI Lab, Dept. of Biochemistry & Molecular Biology, CU",
        "years": "Present"
      }
    ],
    "skills": [
      "Potassium hydroxide (KOH) direct mount microscopy for fungal hyphae/spores, Slit-skin smear (SSS) for Hansen's disease, comedone extraction and acne subcision, superficial chemical peels (glycolic, salicylic, TCA), intralesional triamcinolone acetonide infiltration for keloids and hypertrophic scars, cryosurgery, dermabrasion, and skin prick testing.",
      "Polarized light dermoscopy systems, clinical dermatological documentation software, skin barrier assessment tools, dermatopathology diagnostic review."
    ],
    "publications": [
      "Clinical reports on emerging antifungal resistance in superficial dermatophytosis, protocols for multimodal treatment of melasma in South Asian skin types, and clinical presentations at National Dermatological Conferences."
    ],
    "awards": [
      "Life Member, Bangladesh Dermatological Society (BDS)",
      "Member, Bangladesh Medical Association (BMA)",
      "Member, South Asian Regional Association of Dermatologists (SARAD)."
    ],
    "researchInterest": "Medical and aesthetic dermatology, cutaneous mycology (recalcitrant tinea infections), chronic urticaria, allergic contact eczema, acne scar revision, melasma and facial hyperpigmentation, pediatric dermatoses, sexually transmitted diseases (STDs), autoimmune bullous disorders, and laser cutaneous therapies.",
    "profileUrl": "https://www.doctorbangladesh.com/dr-shamsun-nahar-skin/"
  },
  "dr-md-aqiv-javed": {
    "name": "Dr. Md. Aqiv Javed Rafi",
    "role": "Consultant Dermatologist & Venereologist / Medical Officer",
    "currentPosition": "Consultant Dermatologist & Venereologist, CMCH",
    "currentInstitution": "Chittagong Medical College & Hospital (CMCH)",
    "location": "Chittagong, Bangladesh",
    "department": "Biochemistry & Molecular Biology",
    "image": "/Current%20Members%20and%20Alumni/Dr.%20Md.%20Aqiv%20Javed.jpg",
    "senioritySession": "Ph.D. Researcher",
    "supervisor": "Prof. Dr. Mohammad Monirul Islam",
    "bioSnippet": "Dr. Md. Aqiv Javed (Rafi) is a Doctoral Fellow at MSI Lab, University of Chittagong. A Consultant in ENT and BCS (Health) cadre specialist with international fellowships, his doctoral work investigates molecular pathways in sensorineural hearing loss, auditory neurobiology, and inner-ear biomarker discovery.",
    "education": [
      {
        "degree": "MBBS",
        "field": "Medicine & Surgery",
        "institution": "University of Chittagong",
        "years": "Completed"
      },
      {
        "degree": "BCS (Health)",
        "field": "Government Health Service Cadre",
        "institution": "Ministry of Health & Family Welfare",
        "years": "Appointed"
      },
      {
        "degree": "DDV",
        "field": "Dermatology & Venereology",
        "institution": "Chittagong Medical College Hospital",
        "years": "Postgraduate"
      }
    ],
    "experiences": [
      {
        "title": "Consultant (ENT)",
        "institution": "BCS (Health), Ministry of Health & Family Welfare",
        "years": "Present"
      },
      {
        "title": "Doctoral Fellow",
        "institution": "MSI Lab, Dept. of Biochemistry & Molecular Biology, CU",
        "years": "Present"
      }
    ],
    "skills": [
      "Polarized/non-polarized dermoscopy, diagnostic patch testing for contact dermatitis, skin punch and shave biopsies, electrocautery, radiofrequency ablation, chemical cautery, cryotherapy for viral warts and benign cutaneous lesions, intralesional corticosteroid injections, and Wood's lamp examination.",
      "High-resolution digital dermatoscope imaging software, clinical photographic lesion tracking systems, dermatopathology histopathological correlation, diagnostic allergy panels."
    ],
    "publications": [
      "Clinical observational studies, case series presentations on atypical cutaneous manifestations of systemic diseases, management audits on recalcitrant dermatophytosis, and clinical seminars on modern biologic therapies in psoriasis."
    ],
    "awards": [
      "Life Member, Bangladesh Dermatological Society (BDS)",
      "Member, Bangladesh Medical Association (BMA)",
      "Member, International Society of Dermatology (ISD)",
      "Government health service honors under BCS (Health)."
    ],
    "researchInterest": "Clinical dermatology, cutaneous allergic disorders, venereology and sexually transmitted infections (STIs), trichology (androgenetic alopecia, alopecia areata, telogen effluvium), psoriasis, atopic dermatitis, eczema, chronic urticaria, acne vulgaris, and dermatosurgical interventions.",
    "profileUrl": "https://www.doctorbangladesh.com/dr-md-aqiv-javed-rafi/"
  },
  "dr-sharmin-ara-begum": {
    "name": "Dr. Sharmin Ara Begum",
    "role": "Doctoral Fellow (Ph.D. Candidate)",
    "currentPosition": "Assistant Professor, Dept. of Physiology",
    "currentInstitution": "Army Medical College, Chattogram (AMCC) / University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "department": "Biochemistry & Molecular Biology",
    "senioritySession": "Ph.D. Researcher",
    "supervisor": "Prof. Dr. Mohammad Monirul Islam",
    "bioSnippet": "Dr. Sharmin Ara Begum is an Assistant Professor of Physiology at Army Medical College, Chattogram and a Doctoral Fellow at MSI Lab, University of Chittagong. Her research focuses on cardiopulmonary and respiratory physiology, spirometric dynamics, and systemic biomarkers in maternal and occupational health.",
    "education": [
      {
        "degree": "Ph.D. Candidate",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "Ongoing"
      },
      {
        "degree": "MBBS, M.Phil (Physiology)",
        "field": "Medical Physiology",
        "institution": "University of Chittagong",
        "years": "Completed"
      }
    ],
    "experiences": [
      {
        "title": "Assistant Professor",
        "institution": "Department of Physiology, Army Medical College, Chattogram",
        "years": "Present"
      },
      {
        "title": "Doctoral Fellow",
        "institution": "MSI Lab, Dept. of Biochemistry & Molecular Biology, CU",
        "years": "Present"
      }
    ],
    "skills": [
      "Cardiopulmonary Function Testing",
      "Spirometric Dynamics",
      "Systemic Physiological Biomarkers",
      "Respiratory Clinical Diagnostics"
    ],
    "publications": [
      "Evaluation of spirometric lung function parameters and occupational respiratory dynamics."
    ],
    "awards": [
      "Member, Bangladesh Society of Physiologists (BSP)"
    ]
  },
  "md-rafiqul-islam": {
    "name": "Md. Rafiqul Islam",
    "role": "M.Sc. Research Fellow (Alumnus)",
    "currentPosition": "Researcher & Academic Fellow",
    "currentInstitution": "Department of Biochemistry & Molecular Biology, University of Chittagong",
    "location": "Chittagong, Bangladesh",
    "senioritySession": "MS Session 2009–2010",
    "supervisor": "Md. Monirul Islam, PhD",
    "thesisTitle": "Identification of Residue Determinants of Dengue 4 Sero-specificity and / or Cross-Reactivity",
    "submissionDate": "July 7, 2012",
    "shortAbstract": "Identified specific amino acid residue determinants on DENV4 ED3 that dictate serospecificity and cross-reactivity by evaluating mutated variants in mice.",
    "bioSnippet": "Md. Rafiqul Islam was an M.Sc. Research Fellow at MSI Lab (MS Session 2009–2010). His foundational work pinpointed specific amino acid residue determinants on Dengue virus serotype 4 envelope domain III responsible for sero-specificity and cross-reactive antibody recognition.",
    "education": [
      {
        "degree": "M.S. in Biochemistry & Molecular Biology",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2009 – 2012"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2005 – 2009"
      }
    ],
    "experiences": [
      {
        "title": "M.Sc. Research Fellow",
        "institution": "MSI Lab, University of Chittagong",
        "years": "2010 – 2012"
      }
    ],
    "skills": [
      "TaqMan probe real-time PCR, automated magnetic bead nucleic acid extractors, viral load monitoring, clinical biochemistry calibrators, Levey-Jennings QC charting.",
      "QuantStudio Real-Time PCR software, Laboratory Information Management Systems (LIMS)."
    ],
    "publications": [
      "Led execution and validation of >50,000 diagnostic molecular assays during major regional public health epidemics."
    ],
    "awards": [
      "Certified Molecular Diagnostics Specialist",
      "Professional Member of Bangladesh Biosafety and Biosecurity Association."
    ],
    "researchInterest": "Clinical molecular diagnostics, automated chemiluminescence enzyme immunoassays (CLEIA), real-time RT-qPCR diagnostic pipelines, and laboratory ISO 15189 compliance."
  },
  "nishat-akther": {
    "name": "Nishat Akther",
    "role": "M.Sc. Research Fellow (Alumna)",
    "currentPosition": "Biomedical Researcher & Educator",
    "currentInstitution": "University of Chittagong Alumni Network",
    "location": "Chittagong, Bangladesh",
    "senioritySession": "MS Session 2010–2011",
    "supervisor": "Md. Monirul Islam, PhD",
    "thesisTitle": "Residue Specificity on the EDIII of E-Protein and Dengue Sero-Specificity: Sero-Specific and Sero-Cross-Reactive Serum Antibody Responses in Mice Model",
    "submissionDate": "March 31, 2013",
    "shortAbstract": "Evaluated serum antibody responses against mutated DENV EDIII constructs in mice to differentiate sero-specific vs. cross-reactive immune pathways.",
    "bioSnippet": "Nishat Akther conducted M.Sc. research at MSI Lab on residue-level specificity within the envelope protein domain III (EDIII) across dengue serotypes, mapping sero-specific and cross-reactive antibody repertoires in murine models.",
    "education": [
      {
        "degree": "M.S. in Biochemistry & Molecular Biology",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2010 – 2013"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2006 – 2010"
      }
    ],
    "experiences": [
      {
        "title": "M.Sc. Research Fellow",
        "institution": "MSI Lab, University of Chittagong",
        "years": "2011 – 2013"
      }
    ],
    "skills": [
      "Dengue EDIII Cloning",
      "Serological Titration",
      "Epitope Specificity Mapping",
      "Animal Handling & Immunization"
    ],
    "publications": [
      "Residue specificity on the EDIII of E-protein dictates dengue sero-specificity and cross-reactivity in mice."
    ],
    "awards": [
      "University of Chittagong Postgraduate Fellowship"
    ]
  },
  "meherun-nesa": {
    "name": "Meherun Nesa",
    "role": "M.Sc. Research Fellow (Alumna)",
    "currentPosition": "Diagnostic Immunology Researcher",
    "currentInstitution": "University of Chittagong Alumni Network",
    "location": "Chittagong, Bangladesh",
    "senioritySession": "MS Session 2014–2015",
    "supervisor": "Md. Monirul Islam, PhD",
    "coSupervisors": "Dr. M. M. R. Mahib",
    "thesisTitle": "The EDIII, A Generic Tool To Detect All Natural Anti-Dengue Antibodies",
    "submissionDate": "September 25, 2016",
    "shortAbstract": "Evaluated envelope protein domain III (EDIII) as a universal diagnostic reagent capable of capturing all natural anti-dengue antibodies in patient sera.",
    "bioSnippet": "Meherun Nesa investigated recombinant envelope domain III (EDIII) as a generic diagnostic capture antigen for detecting natural anti-dengue antibodies across all four circulating serotypes in clinical patient sera.",
    "education": [
      {
        "degree": "M.S. in Biochemistry & Molecular Biology",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2014 – 2016"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2010 – 2014"
      }
    ],
    "experiences": [
      {
        "title": "M.Sc. Research Fellow",
        "institution": "MSI Lab, University of Chittagong",
        "years": "2015 – 2016"
      }
    ],
    "skills": [
      "Clinical Sera Screening",
      "Diagnostic ELISA Standardization",
      "Cross-Reactive Serology",
      "Recombinant EDIII Preparation"
    ],
    "publications": [
      "Evaluation of recombinant EDIII as a generic diagnostic antigen for natural anti-dengue antibody detection."
    ],
    "awards": [
      "Postgraduate Academic Scholarship, University of Chittagong"
    ]
  },
  "tanjina-tanima": {
    "name": "Tanjina Afrin (Tanima)",
    "role": "M.Sc. Researcher (Alumna)",
    "currentPosition": "Assistant Director / Audit Officer",
    "currentInstitution": "Office of the Comptroller & Auditor General (CAG) of Bangladesh",
    "location": "Dhaka, Bangladesh",
    "senioritySession": "MS Session 2014–2015",
    "supervisor": "Md. Monirul Islam, PhD",
    "coSupervisors": "Dr. M. M. R. Mahib",
    "image": "/Current%20Members%20and%20Alumni/tanima.jpg",
    "thesisTitle": "Effects SEP-Tag-dependent protein oligomerization on immune response modulation in mice",
    "submissionDate": "September 25, 2016",
    "shortAbstract": "Studied how SEP-tag-induced oligomerization and aggregate formation alter immunogenicity and antibody response kinetics in animal models.",
    "bioSnippet": "Tanjina Afrin (Tanima) researched solubility-enhancing peptide (SEP) tags and their role in modulating protein oligomerization and immune response kinetics in murine vaccination models. She currently serves as an Assistant Director in the Bangladesh Civil Service audit cadre.",
    "education": [
      {
        "degree": "M.S. in Biochemistry & Molecular Biology",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2014 – 2016"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2010 – 2014"
      }
    ],
    "experiences": [
      {
        "title": "Assistant Director / Audit Officer",
        "institution": "CAG Bangladesh",
        "years": "Present"
      },
      {
        "title": "M.Sc. Researcher",
        "institution": "MSI Lab, University of Chittagong",
        "years": "2015 – 2016"
      }
    ],
    "skills": [
      "Protein Oligomerization Analysis",
      "SEP-Tag Fusion Technology",
      "Humoral Immunity Profiling",
      "Dynamic Light Scattering (DLS)"
    ],
    "publications": [
      "Effects of SEP-tag-dependent protein oligomerization on immune response modulation in mice."
    ],
    "awards": [
      "National Science and Technology (NST) Fellowship, Bangladesh"
    ]
  },
  "mamtaz-mishu": {
    "name": "Mamtaz Sultana (Mishu)",
    "role": "M.Sc. Research Fellow (Alumna)",
    "currentPosition": "Scientific Officer",
    "currentInstitution": "Bangladesh Council of Scientific and Industrial Research (BCSIR)",
    "location": "Chittagong, Bangladesh",
    "senioritySession": "MS Session 2015–2016",
    "supervisor": "M. Monirul Islam, PhD",
    "coSupervisors": "Dr. M. M. R. Mahib",
    "image": "/Current%20Members%20and%20Alumni/mishu.jpg",
    "thesisTitle": "Investigation of natural anti-dengue antibodies using epitope-grafted ED3s possessing the sero-specificity of both DENV-3 and DENV-4",
    "submissionDate": "September 13, 2017",
    "shortAbstract": "Characterized natural human anti-dengue antibodies using engineered, epitope-grafted dual-specificity DENV-3/DENV-4 ED3 variants to increase diagnostic accuracy.",
    "bioSnippet": "Mamtaz Sultana (Mishu) investigated engineered epitope-grafted dual-specificity ED3 domains capable of simultaneously recognizing DENV-3 and DENV-4 antibodies. She is currently a Scientific Officer at BCSIR, Bangladesh.",
    "education": [
      {
        "degree": "M.S. in Biochemistry & Molecular Biology",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2015 – 2017"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2011 – 2015"
      }
    ],
    "experiences": [
      {
        "title": "Scientific Officer",
        "institution": "BCSIR Laboratories, Chattogram",
        "years": "Present"
      },
      {
        "title": "M.Sc. Research Fellow",
        "institution": "MSI Lab, University of Chittagong",
        "years": "2016 – 2017"
      }
    ],
    "skills": [
      "Epitope Grafting Engineering",
      "Dual-Specificity Antigen Design",
      "Clinical Patient Serum Neutralization",
      "Protein Purification"
    ],
    "publications": [
      "Engineered epitope-grafted ED3 variants possessing dual DENV-3/DENV-4 sero-specificity in clinical serodiagnostics."
    ],
    "awards": [
      "BCSIR Scientific Fellowship Award",
      "National Science and Technology (NST) Fellowship"
    ]
  },
  "fayaz-rezvanul-haq": {
    "name": "Fayaz Rezvanul Haq",
    "role": "M.Sc. Researcher (Alumnus)",
    "currentPosition": "Protein Formulation Researcher",
    "currentInstitution": "Biopharmaceutical Sector / University of Chittagong Alumni",
    "location": "Chittagong, Bangladesh",
    "senioritySession": "MS Session 2017–2018",
    "supervisor": "M. Monirul Islam, PhD",
    "thesisTitle": "Effects of poly-Ile and poly-Lys tags on the aggregate sizes and immunogenicity of an epitope-grafted DEN4 ED3",
    "submissionDate": "July 10, 2019",
    "shortAbstract": "Evaluated particle size distribution and antibody titer induction of DEN4 ED3 modified with poly-isoleucine and poly-lysine tags in Swiss albino mice.",
    "bioSnippet": "Fayaz Rezvanul Haq evaluated how hydrophobic poly-isoleucine and positively charged poly-lysine peptide tags dictate protein aggregate sizing and modulate in vivo immunogenicity using epitope-grafted DENV-4 ED3 constructs in mice.",
    "education": [
      {
        "degree": "M.S. in Biochemistry & Molecular Biology",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2017 – 2019"
      },
      {
        "degree": "B.Sc. (Honours)",
        "field": "Biochemistry & Molecular Biology",
        "institution": "University of Chittagong",
        "years": "2013 – 2017"
      }
    ],
    "experiences": [
      {
        "title": "M.Sc. Research Assistant",
        "institution": "MSI Lab, University of Chittagong",
        "years": "2018 – 2019"
      }
    ],
    "skills": [
      "Poly-Amino Acid Tag Formulation",
      "Aggregate Particle Size Analysis",
      "ELISA Humoral Response Titration",
      "Fast Protein Liquid Chromatography (FPLC)"
    ],
    "publications": [
      "Aggregate size manipulation and immunogenicity enhancement of dengue ED3 using poly-isoleucine and poly-lysine peptide tags."
    ],
    "awards": [
      "University Postgraduate Research Award"
    ]
  }
};
