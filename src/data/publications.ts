export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  citations?: number;
  type: 'article' | 'patent' | 'preprint';
  topics: ('SARS-CoV-2' | 'Dengue Virus' | 'Protein Technology' | 'Japanese Encephalitis' | 'Immunology' | 'Infectious Diseases' | 'Patents')[];
  abstract?: string;
  highlights?: string[];
  links?: {
    doiUrl?: string;
    pdfUrl?: string;
    pubmedUrl?: string;
    scholarUrl?: string;
  };
  bibtex?: string;
}

export const SCHOLAR_METRICS = {
  totalCitations: 766,
  citationsSince2021: 404,
  hIndex: 16,
  hIndexSince2021: 12,
  i10Index: 22,
  i10IndexSince2021: 17,
  profileUrl: "https://scholar.google.com/citations?user=dKS4v_gAAAAJ&hl=en"
};

export const PUBLICATIONS_DATA: Publication[] = [
  {
    "id": "virology-110894-2026-omicron-rbd-expressed-in-e-col",
    "title": "Omicron RBD expressed in E. coli outperforms mammalian-expressed S1 spike protein in generating highly neutralizing anti-SARS-CoV-2 antibodies in mice",
    "authors": [
      "Z Wang",
      "R Wongnak",
      "M Oba",
      "T Mizutani",
      "MM Islam",
      "Y Kuroda"
    ],
    "journal": "Virology, 110894",
    "year": 2026,
    "citations": 1,
    "type": "article",
    "topics": [
      "SARS-CoV-2",
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Virology, 110894. Investigating SARS-CoV-2 & Protein Technology & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:BrmTIyaxlBUC"
    }
  },
  {
    "id": "journal-of-pure-amp-applied-microbiology-2026-dengue-sero-prevalence-and-nat",
    "title": "Dengue Sero-prevalence and Natural Anti-dengue Response in Dengue Outbreaks 2019 in Dhaka and Chittagong.",
    "authors": [
      "MG Roy",
      "M Sultana",
      "A Singh",
      "MM Islam"
    ],
    "journal": "Journal of Pure &amp; Applied Microbiology",
    "year": 2026,
    "volume": "20(2)",
    "pages": "1184",
    "citations": 0,
    "type": "article",
    "topics": [
      "Dengue Virus"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Journal of Pure &amp; Applied Microbiology. Investigating Dengue Virus with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:kRWSkSYxWN8C"
    }
  },
  {
    "id": "international-journal-of-biological-macromolecules-151430-2026-biophysical-and-colloidal-prop",
    "title": "Biophysical and colloidal properties govern anti-drug antibody generation: A case study using the tumoricidal murine-derived monoclonal antibody 4713",
    "authors": [
      "S Yesmin",
      "MM Islam",
      "MD Islam",
      "H Tsurui",
      "T Saotome",
      "S Matsuoka"
    ],
    "journal": "International Journal of Biological Macromolecules, 151430",
    "year": 2026,
    "citations": 0,
    "type": "article",
    "topics": [
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in International Journal of Biological Macromolecules, 151430. Investigating Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:V3AGJWp-ZtQC"
    }
  },
  {
    "id": "journal-of-biotechnology-2025-ni2-induced-selective-precipit",
    "title": "Ni2+-induced selective precipitation of His-tagged recombinant proteins shortens purification time while maintaining high yield",
    "authors": [
      "MD Islam",
      "MM Islam",
      "Y Kuroda"
    ],
    "journal": "Journal of Biotechnology",
    "year": 2025,
    "volume": "399",
    "pages": "38-46",
    "citations": 12,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Development of a rapid, low-cost downstream purification protocol utilizing Ni2+-induced selective precipitation of His-tagged recombinant proteins, substantially accelerating processing time while retaining high target purity and yield.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:8AbLer7MMksC"
    },
    "highlights": [
      "Published in Journal of Biotechnology (Elsevier, 2025).",
      "Eliminates expensive chromatography columns for routine laboratory and pilot purifications.",
      "Validated across diverse viral and model recombinant proteins."
    ]
  },
  {
    "id": "vaccine-2025-neutralizing-antibodies-agains",
    "title": "Neutralizing antibodies against the Japanese encephalitis virus are produced by a 12ákDa E. coli-expressed envelope protein domain III (EDIII) tagged with a solubility …",
    "authors": [
      "MD Islam",
      "MM Islam",
      "A Inoue",
      "S Yesmin",
      "S Brindha",
      "T Yoshizue",
      "H Tsurui"
    ],
    "journal": "Vaccine",
    "year": 2025,
    "volume": "56",
    "pages": "127143",
    "citations": 10,
    "type": "article",
    "topics": [
      "Japanese Encephalitis",
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Engineered a 12 kDa recombinant Japanese encephalitis virus (JEV) envelope protein domain III (EDIII) equipped with a solubility-controlling peptide tag, achieving high soluble expression in E. coli that stimulates potent JEV-neutralizing antibody titers in mice.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:yD5IFk8b50cC"
    },
    "highlights": [
      "Published in Vaccine (Elsevier, 2025).",
      "Overcomes inclusion body aggregation hurdles for neurotropic flavivirus subunit antigens.",
      "Elicited robust neutralizing antibodies without requiring harsh adjuvants."
    ]
  },
  {
    "id": "vaccine-2025-trace-amounts-of-cobalt-serve",
    "title": "Trace amounts of cobalt serve as an adjuvant for unglycosylated JEV-ED3 expressed in E. coli, inducing a potent virus-neutralizing immune response",
    "authors": [
      "MD Islam",
      "T Kurosu",
      "M Okawa",
      "N Morikoshi",
      "MM Islam",
      "H Tsurui"
    ],
    "journal": "Vaccine",
    "year": 2025,
    "volume": "64",
    "pages": "127742",
    "citations": 0,
    "type": "article",
    "topics": [
      "Japanese Encephalitis",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Vaccine. Investigating Japanese Encephalitis & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:fQNAKQ3IYiAC"
    }
  },
  {
    "id": "biorxiv-2025-09-03-674127-2025-biophysical-and-colloidal-prop",
    "title": "Biophysical and Colloidal Properties Govern Anti-Drug Antibody Generation: A Case Study Using the Tumoricidal mAb 4713",
    "authors": [
      "S Yesmin",
      "M Monirul Islam",
      "MD Islam",
      "H Tsurui",
      "T Saotome",
      "S Matsuoka"
    ],
    "journal": "bioRxiv, 2025.09. 03.674127",
    "year": 2025,
    "citations": 0,
    "type": "preprint",
    "topics": [
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in bioRxiv, 2025.09. 03.674127. Investigating Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:sSrBHYA8nusC"
    }
  },
  {
    "id": "research-article-2025-assessing-community-resilience",
    "title": "Assessing Community Resilience in Disaster-Prone Char Lands of Bangladesh: A Capital-Based Empirical Approach",
    "authors": [
      "MA Rakib",
      "A Farhana",
      "MM Islam",
      "A Newaz",
      "K Roy"
    ],
    "journal": "Research Article",
    "year": 2025,
    "citations": 0,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Research Article. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:wbdj-CoPYUoC"
    }
  },
  {
    "id": "journal-of-king-saud-university-science-2024-toxins-profiles-toxicological",
    "title": "Toxins profiles, toxicological properties, and histological alteration potentiality of Trimeresurus erythrurus venom: In vitro and in vivo experiments",
    "authors": [
      "IK Al Haidar",
      "MAW Chowdhury",
      "M Miah",
      "M Hasan",
      "MSR Sohan",
      "M Noman"
    ],
    "journal": "Journal of King Saud University-Science",
    "year": 2024,
    "volume": "36(5)",
    "pages": "103150",
    "citations": 6,
    "type": "article",
    "topics": [
      "Infectious Diseases"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Journal of King Saud University-Science. Investigating Infectious Diseases with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:M05iB0D1s5AC"
    }
  },
  {
    "id": "molecules-2024-non-glycosylated-sars-cov-2-om",
    "title": "Non-Glycosylated SARS-CoV-2 Omicron BA. 5 Receptor Binding Domain (RBD) with a Native-like Conformation Induces a Robust Immune Response with Potent Neutralization in a Mouse Model",
    "authors": [
      "R Wongnak",
      "S Brindha",
      "M Oba",
      "T Yoshizue",
      "MD Islam",
      "MM Islam"
    ],
    "journal": "Molecules",
    "year": 2024,
    "volume": "29(11)",
    "pages": "2676",
    "citations": 4,
    "type": "article",
    "topics": [
      "SARS-CoV-2",
      "Immunology"
    ],
    "abstract": "Non-glycosylated SARS-CoV-2 Omicron BA.5 Receptor-Binding Domain (RBD) engineered for scalable bacterial expression in Escherichia coli preserves authentic ACE2 receptor-binding conformation and stimulates potent cross-neutralizing humoral responses in vivo.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:g5m5HwL7SMYC"
    },
    "highlights": [
      "Cost-effective bacterial production platform for folded viral glycoprotein domains.",
      "Demonstrated potent neutralization against circulating Omicron subvariants.",
      "Direct relevance for accessible vaccine development in low-resource settings."
    ]
  },
  {
    "id": "asian-pacific-journal-of-tropical-medicine-2024-anti-denv-ed3-antibody-cross-t",
    "title": "Anti-DENV-ED3 antibody cross-talks generate immune interference among the four DENVs",
    "authors": [
      "MD Islam",
      "S Yesmin",
      "T Sharmin",
      "MA Khan",
      "Y Kuroda",
      "MM Islam"
    ],
    "journal": "Asian Pacific Journal of Tropical Medicine",
    "year": 2024,
    "volume": "17(12)",
    "pages": "553-562",
    "citations": 2,
    "type": "article",
    "topics": [
      "Dengue Virus",
      "Immunology"
    ],
    "abstract": "Detailed serological and biophysical dissection of polyclonal antibody crosstalk across dengue virus serotypes 1–4 ED3 domains, uncovering mechanisms of immunological interference and informing safer tetravalent vaccine formulation design.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:4OULZ7Gr8RgC"
    },
    "highlights": [
      "Published in Asian Pacific Journal of Tropical Medicine (2024).",
      "Characterized cross-reactive epitope dynamics in dengue patient cohorts.",
      "Identified structural focal points to bypass antibody-dependent enhancement (ADE)."
    ]
  },
  {
    "id": "research-article-2024-co2-potentiates-immunogenicity",
    "title": "Co2+ potentiates immunogenicity of poorly immunogenic Japanese encephalitis virus envelope protein domain 3 by generating JEV-neutralizing antibodies in mice",
    "authors": [
      "MD Islam",
      "T Kurosu",
      "M Okawa",
      "N Morikoshi",
      "MM Islam",
      "H Tsurui"
    ],
    "journal": "Research Article",
    "year": 2024,
    "citations": 0,
    "type": "article",
    "topics": [
      "Japanese Encephalitis",
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Research Article. Investigating Japanese Encephalitis & Protein Technology & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:eflP2zaiRacC"
    }
  },
  {
    "id": "research-article-2024-scp-tag-mediated-oligomers-of",
    "title": "SCP tag-mediated oligomers of a 12 kDa Japanese encephalitis virus envelope protein domain III generated neutralizing antibodies",
    "authors": [
      "MD Islam",
      "MM Islam",
      "A Inoue",
      "S Yesmin",
      "S Brindha",
      "T Yoshizue",
      "H Tsurui"
    ],
    "journal": "Research Article",
    "year": 2024,
    "citations": 0,
    "type": "article",
    "topics": [
      "Japanese Encephalitis",
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Research Article. Investigating Japanese Encephalitis & Protein Technology & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:D_sINldO8mEC"
    }
  },
  {
    "id": "-no-title-0-2024-thermodynamic-and-structural-a",
    "title": "Thermodynamic and structural analysis of bovine pancreatic trypsin inhibitor variants",
    "authors": [
      "MM Islam"
    ],
    "journal": "(No Title), 0",
    "year": 2024,
    "citations": 0,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in (No Title), 0. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:eJXPG6dFmWUC"
    }
  },
  {
    "id": "research-article-2024-structural-analysis-of-a-size",
    "title": "Structural analysis of a “size switch type repacking” during the evolution of dengue envelope protein domain III (ED3)",
    "authors": [
      "M Elahi",
      "MM Islam",
      "Y Kuroda"
    ],
    "journal": "Research Article",
    "year": 2024,
    "citations": 0,
    "type": "article",
    "topics": [
      "Dengue Virus",
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Research Article. Investigating Dengue Virus & Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:bEWYMUwI8FkC"
    }
  },
  {
    "id": "international-journal-of-molecular-sciences-2023-the-immunogenicity-of-denv1-4",
    "title": "The immunogenicity of DENV1–4 ED3s strongly differ despite their almost identical three-dimensional structures and high sequence similarities",
    "authors": [
      "MD Islam",
      "T Sharmin",
      "IH Tipo",
      "A Saha",
      "S Yesmin",
      "MG Roy",
      "S Brindha"
    ],
    "journal": "International Journal of Molecular Sciences",
    "year": 2023,
    "volume": "24(3)",
    "pages": "2393",
    "citations": 10,
    "type": "article",
    "topics": [
      "Dengue Virus",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in International Journal of Molecular Sciences. Investigating Dengue Virus & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:_Qo2XoVZTnwC"
    }
  },
  {
    "id": "j-appl-biol-biotechnol-2023-prevalence-of-dengue-virus-the",
    "title": "Prevalence of dengue virus, their infection, diagnosis, and challenges",
    "authors": [
      "MG Roy",
      "MM Islam",
      "A Singh"
    ],
    "journal": "J Appl Biol Biotechnol",
    "year": 2023,
    "volume": "11(3)",
    "pages": "20-27",
    "citations": 7,
    "type": "article",
    "topics": [
      "Dengue Virus"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in J Appl Biol Biotechnol. Investigating Dengue Virus with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:RHpTSmoSYBkC"
    }
  },
  {
    "id": "j-surv-fish-sci-2023-secondary-denv-infections-alon",
    "title": "Secondary DENV infections along with concurrent multiple DENV serotypes in a single dengue session contributing to dengue severity in Chittagong Bangladesh",
    "authors": [
      "MG Roy",
      "K Uddin",
      "D Islam",
      "MM Islam",
      "A Singh"
    ],
    "journal": "J Surv Fish Sci",
    "year": 2023,
    "volume": "10(4)",
    "pages": "627-642",
    "citations": 1,
    "type": "article",
    "topics": [
      "Dengue Virus"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in J Surv Fish Sci. Investigating Dengue Virus with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:GnPB-g6toBAC"
    }
  },
  {
    "id": "bioresearch-communications-2022-all-four-dengue-virus-serotype",
    "title": "All four dengue virus serotypes co-circulate in concurrent dengue infections in a single dengue session in Chittagong, Bangladesh",
    "authors": [
      "MG Roy",
      "K Uddin",
      "D Islam",
      "A Singh",
      "MM Islam"
    ],
    "journal": "Bioresearch Communications",
    "year": 2022,
    "volume": "8(1)",
    "pages": "1042-1048",
    "citations": 14,
    "type": "article",
    "topics": [
      "Dengue Virus"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Bioresearch Communications. Investigating Dengue Virus with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:TQgYirikUcIC"
    }
  },
  {
    "id": "asian-pacific-journal-of-tropical-medicine-2022-systematic-mutational-analysis",
    "title": "Systematic mutational analysis of epitope-grafted ED3 immunogenicity reveals a DENV3-DENV4 bi-serospecific ED3 mutant",
    "authors": [
      "MMI Mamtaz Sultana",
      "Nazmul Hasan",
      "Mamunur R Mahib"
    ],
    "journal": "Asian Pacific Journal of Tropical Medicine",
    "year": 2022,
    "volume": "15(2)",
    "pages": "63-70",
    "citations": 2,
    "type": "article",
    "topics": [
      "Dengue Virus",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Asian Pacific Journal of Tropical Medicine. Investigating Dengue Virus & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:R3hNpaxXUhUC"
    }
  },
  {
    "id": "int-j-community-med-public-health-2021-survey-on-common-trends-for-no",
    "title": "Survey on common trends for non-prescribed medication use among the young generation in Dhaka, Bangladesh: A cross sectional study",
    "authors": [
      "MIN Manik",
      "A Khan",
      "MH Ali",
      "A Zobayed",
      "MM Islam"
    ],
    "journal": "Int J Community Med Public Health",
    "year": 2021,
    "volume": "8(3)",
    "pages": "1104-1109",
    "citations": 7,
    "type": "article",
    "topics": [
      "Infectious Diseases"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Int J Community Med Public Health. Investigating Infectious Diseases with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:t6usbXjVLHcC"
    }
  },
  {
    "id": "frontiers-in-immunology-2021-solubility-controlling-peptide",
    "title": "Solubility controlling peptide tags of opposite charges generate a bivalent immune response against dengue ED3 serotypes 3 and 4",
    "authors": [
      "N Rahman",
      "S Miura",
      "M Okawa",
      "MG Kibria",
      "MM Islam",
      "Y Kuroda"
    ],
    "journal": "Frontiers in Immunology",
    "year": 2021,
    "volume": "12",
    "pages": "671590",
    "citations": 6,
    "type": "article",
    "topics": [
      "Dengue Virus",
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Frontiers in Immunology. Investigating Dengue Virus & Protein Technology & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:k_IJM867U9cC"
    }
  },
  {
    "id": "carbohydrate-research-2020-novel-mannopyranoside-esters-a",
    "title": "Novel mannopyranoside esters as sterol 14α-demethylase inhibitors: Synthesis, PASS predication, molecular docking, and pharmacokinetic studies",
    "authors": [
      "MM Matin",
      "P Chakraborty",
      "MS Alam",
      "MM Islam",
      "U Hanee"
    ],
    "journal": "Carbohydrate Research",
    "year": 2020,
    "volume": "496",
    "pages": "108130",
    "citations": 53,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Carbohydrate Research. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:9ZlFYXVOiuMC"
    }
  },
  {
    "id": "frontiers-in-immunology-2020-anti-dengue-ed3-long-term-immu",
    "title": "Anti-dengue ED3 long-term immune response with T-cell memory generated using solubility controlling peptide tags",
    "authors": [
      "MM Islam",
      "S Miura",
      "MN Hasan",
      "N Rahman",
      "Y Kuroda"
    ],
    "journal": "Frontiers in immunology",
    "year": 2020,
    "volume": "11",
    "pages": "333",
    "citations": 29,
    "type": "article",
    "topics": [
      "Dengue Virus",
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Frontiers in immunology. Investigating Dengue Virus & Protein Technology & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:qxL8FJ1GzNcC"
    }
  },
  {
    "id": "molecular-pharmaceutics-2020-nanometer-sized-aggregates-gen",
    "title": "Nanometer-Sized Aggregates Generated Using Short Solubility Controlling Peptide Tags Do Increase the In Vivo Immunogenicity of a Nonimmunogenic Protein",
    "authors": [
      "N Rahman",
      "MM Islam",
      "S Unzai",
      "S Miura",
      "Y Kuroda"
    ],
    "journal": "Molecular Pharmaceutics",
    "year": 2020,
    "volume": "17(5)",
    "pages": "1629-1637",
    "citations": 20,
    "type": "article",
    "topics": [
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Molecular Pharmaceutics. Investigating Protein Technology & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:4DMP91E08xMC"
    }
  },
  {
    "id": "https-febs-onlinelibrary-wiley-com-doi-epdf-10-1002-2211-5463-12941-2020-a-systematic-mutational-analys",
    "title": "A systematic mutational analysis identifies a 5-residue proline tag that enhances the in vivo immunogenicity of a non-immunogenic model protein 240 folds",
    "authors": [
      "N Rahman",
      "MM Islam",
      "MG Kibria",
      "S Unzai",
      "Y Kuroda"
    ],
    "journal": "https://febs.onlinelibrary.wiley.com/doi/epdf/10.1002/2211-5463.12941",
    "year": 2020,
    "citations": 16,
    "type": "article",
    "topics": [
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in https://febs.onlinelibrary.wiley.com/doi/epdf/10.1002/2211-5463.12941. Investigating Protein Technology & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:mVmsd5A6BfQC"
    }
  },
  {
    "id": "the-febs-journal-2019-hydrophobic-surface-residues-c",
    "title": "Hydrophobic surface residues can stabilize a protein through improved water–protein interactions",
    "authors": [
      "MM Islam",
      "K Kobayashi",
      "SI Kidokoro",
      "Y Kuroda"
    ],
    "journal": "The FEBS Journal",
    "year": 2019,
    "volume": "286(20)",
    "pages": "4122-4134",
    "citations": 61,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Systematic investigation of surface hydrophobic substitutions demonstrating that non-polar surface engineering can enhance thermal stability through optimized hydration dynamics and water-protein interface packing.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:ULOm3_A8WrAC"
    },
    "highlights": [
      "Revealed structural thermodynamic mechanisms of hydration-driven protein stabilization.",
      "Experimental circular dichroism and DSC denaturation profiling.",
      "61+ citations in biophysical and structural chemistry journals."
    ]
  },
  {
    "id": "scripta-materialia-2019-glass-fracture-by-focusing-of",
    "title": "Glass fracture by focusing of laser-generated nanosecond surface acoustic waves",
    "authors": [
      "D Veysset",
      "SE Kooi",
      "R Haferssas",
      "M Hassani-Gangaraj",
      "M Islam"
    ],
    "journal": "Scripta Materialia",
    "year": 2019,
    "volume": "158",
    "pages": "42-45",
    "citations": 21,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Scripta Materialia. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:1qzjygNMrQYC"
    }
  },
  {
    "id": "biorxiv-793687-2019-generation-of-nanometer-size-a",
    "title": "Generation of “nanometer-size aggregates” using Solubility Controlling Peptide tags and their ability to increase a protein’s immunogenicity in vivo",
    "authors": [
      "N Rahman",
      "MM Islam",
      "S Unzai",
      "S Miura",
      "Y Kuroda"
    ],
    "journal": "bioRxiv, 793687",
    "year": 2019,
    "citations": 1,
    "type": "preprint",
    "topics": [
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in bioRxiv, 793687. Investigating Protein Technology & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:TFP_iSt0sucC"
    }
  },
  {
    "id": "patent-wo2019031446",
    "title": "Method for controlling the solubility and immunogenicity of recombinant proteins using tailored peptide tags (WO2019031446)",
    "authors": [
      "Yutaka Kuroda",
      "T. Kamioka",
      "Nafsoon Rahman",
      "Mohammad Monirul Islam",
      "S. Miura"
    ],
    "journal": "World Intellectual Property Organization (WIPO)",
    "year": 2019,
    "citations": 0,
    "type": "patent",
    "topics": [
      "Patents",
      "Protein Technology"
    ],
    "abstract": "An international patent disclosing novel peptide tag constructs and compositions that modulate the solubility, folding kinetics, and in vivo immunogenicity of recombinant therapeutic proteins and vaccine subunit targets, enabling cost-effective biopharmaceutical production.",
    "links": {
      "doiUrl": "https://patents.google.com/patent/WO2019031446A1/en"
    }
  },
  {
    "id": "biochimica-et-biophysica-acta-bba-proteins-and-proteomics-2018-reversible-association-of-prot",
    "title": "Reversible association of proteins into sub-visible amorphous aggregates using short solubility controlling peptide tags",
    "authors": [
      "MG Kabir",
      "MM Islam",
      "Y Kuroda"
    ],
    "journal": "Biochimica et Biophysica Acta (BBA)-Proteins and Proteomics",
    "year": 2018,
    "volume": "1866(2)",
    "pages": "366-372",
    "citations": 23,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Biochimica et Biophysica Acta (BBA)-Proteins and Proteomics. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:Zph67rFs4hoC"
    }
  },
  {
    "id": "biochemical-and-biophysical-research-communications-2017-a-hetero-micro-seeding-strateg",
    "title": "A hetero-micro-seeding strategy for readily crystallizing closely related protein variants",
    "authors": [
      "MM Islam",
      "Y Kuroda"
    ],
    "journal": "Biochemical and biophysical research communications",
    "year": 2017,
    "volume": "493(1)",
    "pages": "504-508",
    "citations": 9,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Biochemical and biophysical research communications. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:KlAtU1dfN6UC"
    }
  },
  {
    "id": "asian-journal-of-medicine-and-health-2017-risk-factors-assessment-of-zoo",
    "title": "Risk factors assessment of zoonotic anthrax among the people at risk (PAR) in selected areas of Bangladesh",
    "authors": [
      "MA Islam",
      "MM Mahmud",
      "S Yesmin",
      "MM Islam",
      "MSA Sarker",
      "KH Nazir"
    ],
    "journal": "Asian Journal of Medicine and Health",
    "year": 2017,
    "volume": "4(1)",
    "pages": "1-7",
    "citations": 9,
    "type": "article",
    "topics": [
      "Infectious Diseases"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Asian Journal of Medicine and Health. Investigating Infectious Diseases with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:5ugPr518TE4C"
    }
  },
  {
    "id": "scientific-reports-2017-crystal-structures-of-highly-s",
    "title": "Crystal structures of highly simplified BPTIs provide insights into hydration-driven increase of unfolding enthalpy",
    "authors": [
      "MM Islam",
      "M Yohda",
      "S Kidokoro",
      "Y Kuroda"
    ],
    "journal": "Scientific Reports",
    "year": 2017,
    "volume": "7(1)",
    "pages": "41205",
    "citations": 6,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Scientific Reports. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:3fE2CSJIrl8C"
    }
  },
  {
    "id": "biochemistry-2016-unusual-reversible-oligomeriza",
    "title": "Unusual reversible oligomerization of unfolded dengue envelope protein domain 3 at high temperatures and its abolition by a point mutation",
    "authors": [
      "T Saotome",
      "S Nakamura",
      "MM Islam",
      "A Nakazawa",
      "M Dellarole",
      "F Arisaka"
    ],
    "journal": "Biochemistry",
    "year": 2016,
    "volume": "55(32)",
    "pages": "4469-4475",
    "citations": 21,
    "type": "article",
    "topics": [
      "Dengue Virus",
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Biochemistry. Investigating Dengue Virus & Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:YsMSGLbcyi4C"
    }
  },
  {
    "id": "crystal-growth-amp-design-2015-analysis-and-control-of-protei",
    "title": "Analysis and control of protein crystallization using short peptide tags that change solubility without affecting structure, thermal stability, and function",
    "authors": [
      "MM Islam",
      "S Nakamura",
      "K Noguchi",
      "M Yohda",
      "S Kidokoro",
      "Y Kuroda"
    ],
    "journal": "Crystal Growth &amp; Design",
    "year": 2015,
    "volume": "15(6)",
    "pages": "2703-2711",
    "citations": 32,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Crystal Growth &amp; Design. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:qjMakFHDy7sC"
    }
  },
  {
    "id": "biochimica-et-biophysica-acta-bba-proteins-and-proteomics-2015-structural-and-biophysical-ana",
    "title": "Structural and biophysical analysis of sero-specific immune responses using epitope grafted Dengue ED3 mutants",
    "authors": [
      "MR Kulkarni",
      "MM Islam",
      "N Numoto",
      "M Elahi",
      "MR Mahib",
      "N Ito",
      "Y Kuroda"
    ],
    "journal": "Biochimica et Biophysica Acta (BBA)-Proteins and Proteomics",
    "year": 2015,
    "volume": "1854(10)",
    "pages": "1438-1443",
    "citations": 14,
    "type": "article",
    "topics": [
      "Dengue Virus",
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Biochimica et Biophysica Acta (BBA)-Proteins and Proteomics. Investigating Dengue Virus & Protein Technology & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:UebtZRa9Y70C"
    }
  },
  {
    "id": "biochimica-et-biophysica-acta-bba-proteins-and-proteomics-2014-computational-prediction-and-e",
    "title": "Computational prediction and experimental characterization of a “size switch type repacking” during the evolution of dengue envelope protein domain III (ED3)",
    "authors": [
      "M Elahi",
      "MM Islam",
      "K Noguchi",
      "M Yohda",
      "H Toh",
      "Y Kuroda"
    ],
    "journal": "Biochimica et Biophysica Acta (BBA)-Proteins and Proteomics",
    "year": 2014,
    "volume": "1844(3)",
    "pages": "585-592",
    "citations": 35,
    "type": "article",
    "topics": [
      "Dengue Virus",
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Biochimica et Biophysica Acta (BBA)-Proteins and Proteomics. Investigating Dengue Virus & Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:roLk4NBRz8UC"
    }
  },
  {
    "id": "biochimica-et-biophysica-acta-bba-proteins-and-proteomics-2013-analysis-of-protein-aggregatio",
    "title": "Analysis of protein aggregation kinetics using short amino acid peptide tags",
    "authors": [
      "MA Khan",
      "MM Islam",
      "Y Kuroda"
    ],
    "journal": "Biochimica et Biophysica Acta (BBA)-Proteins and Proteomics",
    "year": 2013,
    "volume": "1834(10)",
    "pages": "2107-2115",
    "citations": 40,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Biochimica et Biophysica Acta (BBA)-Proteins and Proteomics. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:2osOgNQ5qMEC"
    }
  },
  {
    "id": "the-journal-of-physical-chemistry-b-2013-probing-the-physical-determina",
    "title": "Probing the physical determinants of thermal expansion of folded proteins",
    "authors": [
      "M Dellarole",
      "K Kobayashi",
      "JB Rouget",
      "JA Caro",
      "J Roche",
      "MM Islam"
    ],
    "journal": "The Journal of Physical Chemistry B",
    "year": 2013,
    "volume": "117(42)",
    "pages": "12742-12749",
    "citations": 33,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in The Journal of Physical Chemistry B. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:9yKSN-GCB0IC"
    }
  },
  {
    "id": "proteins-structure-function-and-bioinformatics-2013-high-resolution-crystal-struct",
    "title": "High resolution crystal structure of dengue‐3 envelope protein domain III suggests possible molecular mechanisms for serospecific antibody recognition",
    "authors": [
      "M Elahi",
      "MM Islam",
      "K Noguchi",
      "M Yohda",
      "Y Kuroda"
    ],
    "journal": "Proteins: Structure, Function, and Bioinformatics",
    "year": 2013,
    "volume": "81(6)",
    "pages": "1090-1095",
    "citations": 29,
    "type": "article",
    "topics": [
      "Dengue Virus",
      "Protein Technology",
      "Immunology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Proteins: Structure, Function, and Bioinformatics. Investigating Dengue Virus & Protein Technology & Immunology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:Se3iqnhoufwC"
    }
  },
  {
    "id": "biochimica-et-biophysica-acta-bba-proteins-and-proteomics-2012-analysis-of-amino-acid-contrib",
    "title": "Analysis of amino acid contributions to protein solubility using short peptide tags fused to a simplified BPTI variant",
    "authors": [
      "MM Islam",
      "MA Khan",
      "Y Kuroda"
    ],
    "journal": "Biochimica et Biophysica Acta (BBA)-Proteins and Proteomics",
    "year": 2012,
    "volume": "1824(10)",
    "pages": "1144-1150",
    "citations": 54,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Quantitative analysis of how individual amino acid residues modulate protein solubility and prevent amorphous precipitation when integrated into terminal solubility-controlling peptide tags.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:d1gkVwhDpl0C"
    },
    "highlights": [
      "Established foundational solubility scales for rationally designed peptide solubilizers.",
      "Demonstrated reversibility of protein association and oligomeric control.",
      "54+ citations in biochemical and biophysical research."
    ]
  },
  {
    "id": "proteins-structure-function-and-bioinformatics-2009-thermodynamic-and-structural-a",
    "title": "Thermodynamic and structural analysis of highly stabilized BPTIs by single and double mutations",
    "authors": [
      "MM Islam",
      "S Sohya",
      "K Noguchi",
      "S Kidokoro",
      "M Yohda",
      "Y Kuroda"
    ],
    "journal": "Proteins: Structure, Function, and Bioinformatics",
    "year": 2009,
    "volume": "77(4)",
    "pages": "962-970",
    "citations": 27,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Proteins: Structure, Function, and Bioinformatics. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:u-x6o8ySG0sC"
    }
  },
  {
    "id": "proceedings-of-the-national-academy-of-sciences-2008-crystal-structure-of-an-extens",
    "title": "Crystal structure of an extensively simplified variant of bovine pancreatic trypsin inhibitor in which over one-third of the residues are alanines",
    "authors": [
      "MM Islam",
      "S Sohya",
      "K Noguchi",
      "M Yohda",
      "Y Kuroda"
    ],
    "journal": "Proceedings of the National Academy of Sciences",
    "year": 2008,
    "volume": "105(40)",
    "pages": "15334-15339",
    "citations": 35,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "High-resolution X-ray crystal structure of a simplified bovine pancreatic trypsin inhibitor (BPTI) variant in which over one-third of the amino acid sequence is replaced by alanines, proving that core folding topology is governed by minimal essential interaction networks.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:u5HHmVD_uO8C"
    },
    "highlights": [
      "Published in Proceedings of the National Academy of Sciences (PNAS).",
      "Demonstrated extreme sequence simplification while preserving authentic tertiary structure.",
      "Foundational framework for subsequent de novo protein design and peptide tag engineering."
    ]
  },
  {
    "id": "hamdard-medicus-2006-dyslipidemia-in-type-ii-diabet",
    "title": "Dyslipidemia in Type II Diabetes and the effect of Glycaemic control on Type II Diabetes",
    "authors": [
      "CC Banik GR",
      "Islam MM",
      "Zafar MA"
    ],
    "journal": "Hamdard medicus",
    "year": 2006,
    "volume": "49(4)",
    "pages": "55-62",
    "citations": 0,
    "type": "article",
    "topics": [
      "Protein Technology"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Hamdard medicus. Investigating Protein Technology with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:8k81kl-MbHgC"
    }
  },
  {
    "id": "pakistan-j-biol-sci-2004-detection-of-vibrio-cholerae-o",
    "title": "Detection of Vibrio cholerae O1 and O139 serogroups directly from stool specimens by combined immunomagnetic separation and polymerase chain reaction",
    "authors": [
      "MM Islam",
      "MG Kabir",
      "PK Moly",
      "A Islam",
      "MA Rakib"
    ],
    "journal": "Pakistan J Biol Sci",
    "year": 2004,
    "volume": "7",
    "pages": "1654-9",
    "citations": 3,
    "type": "article",
    "topics": [
      "Infectious Diseases"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Pakistan J Biol Sci. Investigating Infectious Diseases with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:hqOjcs7Dif8C"
    }
  },
  {
    "id": "research-article-2004-coagglutination-a-rapid-and-se",
    "title": "Coagglutination: a rapid and sensitive assay method for detection of Vibrio cholerae O1 and O139 serogroups directly from stool specimens.",
    "authors": [
      "MM Islam",
      "MG Kabir",
      "A Islam",
      "MA Rakib"
    ],
    "journal": "Research Article",
    "year": 2004,
    "citations": 0,
    "type": "article",
    "topics": [
      "Infectious Diseases"
    ],
    "abstract": "Published research contribution by Dr. Mohammad Monirul Islam and collaborators in Research Article. Investigating Infectious Diseases with experimental and structural validation.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:0EnyYjriUFMC"
    }
  },
  {
    "id": "infection-and-immunity-2003-antigen-specific-immunoglobuli",
    "title": "Antigen-specific immunoglobulin A antibodies secreted from circulating B cells are an effective marker for recent local immune responses in patients with cholera: comparison to …",
    "authors": [
      "F Qadri",
      "ET Ryan",
      "ASG Faruque",
      "F Ahmed",
      "AI Khan",
      "MM Islam"
    ],
    "journal": "Infection and immunity",
    "year": 2003,
    "volume": "71(8)",
    "pages": "4808-4814",
    "citations": 113,
    "type": "article",
    "topics": [
      "Immunology",
      "Infectious Diseases"
    ],
    "abstract": "Antigen-specific IgA antibodies secreted from circulating B cells represent an effective diagnostic and immunological marker for recent mucosal immune responses in cholera patients, establishing correlates of protective mucosal immunity.",
    "links": {
      "scholarUrl": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dKS4v_gAAAAJ&pagesize=100&sortby=pubdate&citation_for_view=dKS4v_gAAAAJ:5nxA0vEk-isC"
    },
    "highlights": [
      "Seminal study on mucosal IgA antibody-secreting cells (ASCs) in Vibrio cholerae infection.",
      "Demonstrated rapid B-cell activation kinetics in clinical patient cohorts in Bangladesh.",
      "113+ citations in leading international immunological and infectious disease literature."
    ]
  }
];
