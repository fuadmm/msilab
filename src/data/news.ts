export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'event' | 'insights' | 'breakthrough' | 'announcement' | 'opinion';
  author: string;
  summary: string;
  content: string[];
  tags: string[];
  readTime: string;
  postUrl?: string;
  imageUrl?: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: "jasso-fellowship-sadia-binte-alam",
    title: "Sadia Binte Alam Awarded Prestigious JASSO Fellowship for Kuroda Lab (TUAT), Japan",
    date: "September 13, 2026",
    category: "announcement",
    author: "Laboratory of Molecular & Structural Immunology",
    readTime: "3 min read",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7504938274042458112",
    imageUrl: "/images/events/jasso-fellowship-sadia.jpg",
    summary: "MSI Lab graduate researcher Sadia Binte Alam has been awarded the prestigious Japan Student Services Organization (JASSO) fellowship to conduct recombinant protein research at Kuroda Lab, Tokyo University of Agriculture and Technology (TUAT), Japan.",
    tags: ["JASSO", "Fellowship", "TUAT", "Sadia Binte Alam", "Recombinant Proteins", "Japan"],
    content: [
      "We are thrilled to announce that our lab member, Sadia Binte Alam, has been awarded the prestigious JAPAN STUDENT SERVICES ORGANIZATION (JASSO) Student Exchange Support Program!",
      "She will be heading to Tokyo University of Agriculture and Technology, Japan to undertake an intensive research internship on 'Generation of Recombinant Proteins' in Kuroda Lab.",
      "This remarkable opportunity is a testament to her dedication, hard work, and research excellence in protein engineering and solubility-controlling tag technology. We have no doubt that she will represent our lab with great distinction and make significant scientific contributions during her tenure in Tokyo."
    ]
  },
  {
    id: "bioinformatics-pandemic-seminar-mushtak-fuad",
    title: "Special Seminar: Integrating Bioinformatics for Better Understanding Pandemic Diseases",
    date: "September 03, 2026",
    category: "event",
    author: "M. Mushtak Fuad & MSI Research Group",
    readTime: "4 min read",
    postUrl: "https://lnkd.in/p/gnUK5BU7",
    imageUrl: "/images/events/bioinformatics-seminar-fuad.jpg",
    summary: "Graduate researcher M. Mushtak Fuad presented computational and immunological findings on SARS-CoV-2 variant vaccine strategies at a university special seminar with guest speaker Prof. Dr. Shamim Ahmed from SUST.",
    tags: ["Bioinformatics", "Seminar", "SARS-CoV-2", "SUST", "Vaccine Strategies", "Chattogram"],
    content: [
      "MSI Lab organized and participated in an academic special seminar titled “Integrating Bioinformatics for Better Understanding Pandemic Diseases”, bringing together computational biologists, structural immunologists, and graduate trainees at the University of Chittagong.",
      "Graduate researcher M. Mushtak Fuad presented his latest research on “Immunological and Computational Evaluation of Vaccine Strategies Against SARS-CoV-2 Variants in Chattogram, Bangladesh”, highlighting cross-neutralization profiling and epitope mapping across evolving viral lineages.",
      "The seminar fostered an enriching exchange of ideas, receiving valuable feedback and engaging in an insightful discussion with distinguished guest speaker Professor Dr. Shamim Ahmed, Department of Biochemistry & Molecular Biology, Shahjalal University of Science & Technology (SUST), organized under the leadership of Prof. Dr. Mohammad Monirul Islam."
    ]
  },
  {
    id: "heat-11009-inception-seminar",
    title: "Inception Seminar: Institutional Readiness for Emerging & Reemerging Pandemic Diseases (HEAT-11009)",
    date: "April 15, 2026",
    category: "event",
    author: "Prof. Dr. Mohammad Monirul Islam & MSI Research Group",
    readTime: "5 min read",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7450247665897930753",
    imageUrl: "/images/events/heat-inception-seminar.jpg",
    summary: "The Department of Biochemistry & Molecular Biology, University of Chittagong successfully hosted the Inception Seminar for the World Bank-supported HEAT-11009 Sub-Project, inaugurating advanced research into pandemic preparedness and novel antiviral strategies.",
    tags: ["HEAT Project", "World Bank", "Seminar", "Pandemic Preparedness", "University of Chittagong", "Antiviral Strategies"],
    content: [
      "We are delighted to announce that the Inception Seminar of the HEAT-11009 Sub-Project was successfully held on April 15, 2026 at the Department of Biochemistry & Molecular Biology, University of Chittagong.",
      "The seminar, titled “Institutional readiness for emerging-reemerging pandemic diseases: exploration of disease etiology at molecular level, evaluation of treatments in practice and development of novel antiviral strategies”, brought together distinguished university leadership, faculty members, researchers, and students.",
      "Keynote highlights included an insightful presentation by Prof. Dr. M. Monirul Islam on pandemic preparedness and novel antiviral strategies, followed by formal addresses from honorable Vice-Chancellor Prof. Dr. Mohammad Al-Forkan and Pro-Vice Chancellors Prof. Dr. Md. Kamal Uddin and Prof. Dr. Mohammed Shamim Uddin Khan.",
      "This seminar marks a significant milestone under the Higher Education Acceleration and Transformation (HEAT) Project, supported by the World Bank, laying a resilient foundation for cutting-edge molecular virology and institutional health security in Bangladesh."
    ]
  },
  {
    id: "marishya-rangamati-agarwood-fieldwork",
    title: "Field Research Expedition: Plant Defense Inoculation & Agarwood Resin Induction in Marishya, Rangamati",
    date: "February 07, 2026",
    category: "event",
    author: "MSI Lab Botanical & Immunology Field Team",
    readTime: "4 min read",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7425827450527604737",
    imageUrl: "/images/events/rangamati-agarwood-fieldwork.jpg",
    summary: "Our research group conducted an intensive field expedition to Marishya, Rangamati, inoculating mature Aquilaria malaccensis trees with 9 distinct biological and fungal formulations to study immune-triggered resin formation.",
    tags: ["Aquilaria malaccensis", "Fieldwork", "Rangamati", "Resin Induction", "Plant Immunology", "Biotechnology"],
    content: [
      "Our research team traveled to Marishya, Rangamati, where the hills cradle mature Aquilaria malaccensis (agarwood) trees, initiating an exciting chapter of research into exploring how natural plant immune responses can be triggered to induce protective resin formation.",
      "Standing among these mature trees, our field scientists inoculated three adult agarwood specimens with nine distinct conditional formulations, including Fusarium spp. and specialized biological elicitors. Each formulation probes how these trees react, defend, and biochemically adapt.",
      "Fieldwork like this connects fundamental immunology and host-pathogen interactions with sustainable natural resources, investigating biophysical pathways to support eco-friendly agarwood production and ecological preservation in the Chittagong Hill Tracts."
    ]
  },
  {
    id: "covid19-testing-insights",
    title: "Frontline Molecular Diagnostics: Retrospective Lessons from 100,000+ RT-PCR Tests at CU COVID-19 Lab",
    date: "November 14, 2024",
    category: "insights",
    author: "Prof. Dr. Mohammad Monirul Islam & MSI Research Team",
    readTime: "7 min read",
    summary: "Key scientific and logistical insights gathered during the operation of the COVID-19 Testing Lab at Chittagong University, from viral load dynamics to mutant variant detection in local populations.",
    tags: ["COVID-19", "Diagnostics", "Molecular Biology", "Public Health"],
    content: [
      "When the COVID-19 pandemic surged in 2020, the Faculty of Biological Sciences at the University of Chittagong established a dedicated molecular diagnostics wing under the leadership of Prof. Dr. Mohammad Monirul Islam. Over four intense years, our team handled more than 100,000 nasopharyngeal samples.",
      "Beyond providing prompt diagnostic reports for Chittagong Division hospitals, the laboratory preserved a valuable clinical repository. Correlating cycle threshold (Ct) values with patient demographic parameters revealed critical insights into viral clearance kinetics in diabetic and immunocompromised hosts.",
      "Our continuous surveillance identified early signals of Delta and Omicron sub-lineage replacements months before widespread genomic sequencing became universally accessible, showcasing the defensive power of academic laboratories in national health security.",
      "The diagnostic infrastructure now stands fully transitioned into an active research platform for Dengue serotyping, respiratory syncytial virus (RSV) tracking, and bacterial pathogen profiling."
    ]
  },
  {
    id: "dengue-crisis-perspective",
    title: "Navigating the 2023–2024 Dengue Outbreak in Bangladesh: Structural Clues to Severe Secondary Infections",
    date: "September 02, 2024",
    category: "opinion",
    author: "Prof. Dr. Mohammad Monirul Islam",
    readTime: "6 min read",
    summary: "Why antibody-dependent enhancement (ADE) made the recent dengue epidemic exceptionally severe, and how epitope-focused protein engineering provides the ultimate solution.",
    tags: ["Dengue", "ADE", "Structural Biology", "Chittagong"],
    content: [
      "The unprecedented Dengue outbreak across Bangladesh witnessed record hospitalizations and atypical clinical presentations, including rapid shock syndrome and multi-organ involvement.",
      "Serological cross-reactivity between Dengue serotypes DENV-2 and DENV-3 was particularly prominent in clinical samples examined at our university laboratory. Pre-existing antibodies from prior mild exposures bound to newly infecting viral particles without neutralizing them, actively facilitating viral uptake into Fc-gamma receptor-bearing monocytes.",
      "Our structural biology group is dedicated to solving this fundamental challenge: designing 'chimeric ED3' epitopes with targeted mutations that knock out cross-reactive, non-neutralizing binding surfaces while preserving type-specific neutralizing epitopes.",
      "By doing so, we aim to deliver vaccine immunogens that provide sterilizing immunity without priming recipients for antibody-dependent enhancement upon heterologous serotype exposure."
    ]
  }
];
