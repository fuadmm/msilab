export interface GalleryItem {
  id: string;
  title: string;
  groupId: string;
  groupTitle: string;
  category: 'lab' | 'botanical' | 'field' | 'seminar';
  categoryLabel: string;
  date: string;
  location: string;
  image: string;
  thumbnail: string;
  rawImage: string;
  description: string;
  tags: string[];
}

export interface GalleryGroup {
  id: string;
  title: string;
  purpose: string;
  category: 'lab' | 'botanical' | 'field' | 'seminar';
  categoryLabel: string;
  date: string;
  location: string;
  photoCount: number;
  tags: string[];
  photos: GalleryItem[];
}

export interface GalleryCategory {
  key: 'all' | 'lab' | 'botanical' | 'field' | 'seminar';
  label: string;
  description: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    key: 'all',
    label: 'All Collections',
    description: 'Complete photographic archive organized by scientific purpose and research activity.'
  },
  {
    key: 'lab',
    label: 'Laboratory Facilities & Suites',
    description: 'Specialized molecular diagnostics, RT-PCR instrumentation, and sample preparation suites.'
  },
  {
    key: 'botanical',
    label: 'Botanical Garden Research',
    description: 'Bio-induction media formulation and tree inoculation trials at the CU Botanical Garden.'
  },
  {
    key: 'field',
    label: 'Hill Tracts Expeditions',
    description: 'Field expeditions and tree inoculation across the Agarwood plantations of Rangamati & Marishya.'
  },
  {
    key: 'seminar',
    label: 'Academic Seminars & Defenses',
    description: 'Master\'s thesis defenses, examination panels, and scientific colloquia.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // GROUP 1: HEAT-11009-CU Advanced Molecular Suites (5 photos)
  {
    id: 'lab-signage',
    title: 'HEAT-11009-CU Research Facility Signage',
    groupId: 'group-heat-lab',
    groupTitle: 'HEAT-11009-CU Advanced Molecular Biology & Diagnostic Suites',
    category: 'lab',
    categoryLabel: 'Laboratory Facilities',
    date: 'April 2026',
    location: 'Dept. of Biochemistry & Molecular Biology, University of Chittagong',
    image: '/images/gallery/lab-signage-facilities.jpg',
    thumbnail: '/images/gallery/thumb-lab-signage-facilities.jpg',
    rawImage: '/images/gallery/lab-signage-facilities.jpg',
    description: 'Official entrance signage designating the Higher Education Acceleration and Transformation (HEAT-11009-CU) molecular research suites, including RT-PCR, Proteomics, and Cell Culture facilities.',
    tags: ['HEAT Project', 'RT-PCR Lab', 'Proteomics', 'Cell Culture']
  },
  {
    id: 'lab-pcr-suite',
    title: 'Molecular Diagnostics & Thermal Cycling Suite',
    groupId: 'group-heat-lab',
    groupTitle: 'HEAT-11009-CU Advanced Molecular Biology & Diagnostic Suites',
    category: 'lab',
    categoryLabel: 'Laboratory Facilities',
    date: 'April 2026',
    location: 'RT-PCR & Molecular Biology Suite',
    image: '/images/gallery/lab-pcr-molecular-suite.jpg',
    thumbnail: '/images/gallery/thumb-lab-pcr-molecular-suite.jpg',
    rawImage: '/images/gallery/lab-pcr-molecular-suite.jpg',
    description: 'Dedicated PCR workstation configured for genetic amplification, target primer validation, and high-precision diagnostic assays for infectious pathogens.',
    tags: ['Molecular Biology', 'Thermal Cycler', 'Diagnostics']
  },
  {
    id: 'lab-biosafety',
    title: 'Class II Biosafety Workstation & Culture Suite',
    groupId: 'group-heat-lab',
    groupTitle: 'HEAT-11009-CU Advanced Molecular Biology & Diagnostic Suites',
    category: 'lab',
    categoryLabel: 'Laboratory Facilities',
    date: 'April 2026',
    location: 'Cell Culture & Bio-containment Unit',
    image: '/images/gallery/lab-biosafety-cleanbench.jpg',
    thumbnail: '/images/gallery/thumb-lab-biosafety-cleanbench.jpg',
    rawImage: '/images/gallery/lab-biosafety-cleanbench.jpg',
    description: 'HEPA-filtered laminar airflow biosafety station providing sterile biocontainment for aseptic microbial inoculant culture and mammalian cell line maintenance.',
    tags: ['Biosafety Cabinet', 'Laminar Flow', 'Aseptic Technique']
  },
  {
    id: 'lab-electrophoresis',
    title: 'Horizontal Gel Electrophoresis & Power Unit',
    groupId: 'group-heat-lab',
    groupTitle: 'HEAT-11009-CU Advanced Molecular Biology & Diagnostic Suites',
    category: 'lab',
    categoryLabel: 'Laboratory Facilities',
    date: 'April 2026',
    location: 'Molecular Biology Lab',
    image: '/images/gallery/lab-electrophoresis-gel-doc.jpg',
    thumbnail: '/images/gallery/thumb-lab-electrophoresis-gel-doc.jpg',
    rawImage: '/images/gallery/lab-electrophoresis-gel-doc.jpg',
    description: 'Submerged agarose gel electrophoresis tanks and programmable power supplies for resolving and validating PCR amplicons and RNA integrity.',
    tags: ['Electrophoresis', 'Agarose Gel', 'Amplicon Validation']
  },
  {
    id: 'lab-cold-storage',
    title: 'Low-Temperature Biological Specimen Archive',
    groupId: 'group-heat-lab',
    groupTitle: 'HEAT-11009-CU Advanced Molecular Biology & Diagnostic Suites',
    category: 'lab',
    categoryLabel: 'Laboratory Facilities',
    date: 'April 2026',
    location: 'Specimen Bio-Bank',
    image: '/images/gallery/lab-cold-storage-archive.jpg',
    thumbnail: '/images/gallery/thumb-lab-cold-storage-archive.jpg',
    rawImage: '/images/gallery/lab-cold-storage-archive.jpg',
    description: 'Ultra-cold freezer infrastructure maintaining long-term repository integrity for microbial isolates, bio-inoculant strains, and clinical serum specimens.',
    tags: ['Bio-Bank', 'Cold Storage', 'Specimen Archive']
  },

  // GROUP 2: Biochemistry Core Analytical & Sample Prep Workstations (3 photos)
  {
    id: 'lab-centrifugation',
    title: 'Benchtop Centrifugation & Vortexing Station',
    groupId: 'group-biochem-core',
    groupTitle: 'Biochemistry Core Analytical & Sample Preparation Facility',
    category: 'lab',
    categoryLabel: 'Laboratory Facilities',
    date: 'April 2026',
    location: 'Sample Preparation Room',
    image: '/images/gallery/lab-centrifugation-prep.jpg',
    thumbnail: '/images/gallery/thumb-lab-centrifugation-prep.jpg',
    rawImage: '/images/gallery/lab-centrifugation-prep.jpg',
    description: 'High-speed refrigerated centrifugation and microtube vortexing equipment for biomolecule fractionation, phase separation, and lysate clearance.',
    tags: ['Centrifugation', 'Sample Prep', 'Fractionation']
  },
  {
    id: 'lab-analytical-balance',
    title: 'Analytical Weighing & Reagent Formulation Station',
    groupId: 'group-biochem-core',
    groupTitle: 'Biochemistry Core Analytical & Sample Preparation Facility',
    category: 'lab',
    categoryLabel: 'Laboratory Facilities',
    date: 'April 2026',
    location: 'Biochemistry Core Laboratory',
    image: '/images/gallery/lab-analytical-balance.jpg',
    thumbnail: '/images/gallery/thumb-lab-analytical-balance.jpg',
    rawImage: '/images/gallery/lab-analytical-balance.jpg',
    description: 'Precision analytical microbalance equipped with draft shielding for formulating biochemical buffers, culture media, and quantitative inducing agents.',
    tags: ['Analytical Balance', 'Reagent Prep', 'Buffer Chemistry']
  },
  {
    id: 'lab-proteomics',
    title: 'Proteomics & Optical Density Analytics Station',
    groupId: 'group-biochem-core',
    groupTitle: 'Biochemistry Core Analytical & Sample Preparation Facility',
    category: 'lab',
    categoryLabel: 'Laboratory Facilities',
    date: 'April 2026',
    location: 'Proteomics Facility',
    image: '/images/gallery/lab-proteomics-spectrophotometry.jpg',
    thumbnail: '/images/gallery/thumb-lab-proteomics-spectrophotometry.jpg',
    rawImage: '/images/gallery/lab-proteomics-spectrophotometry.jpg',
    description: 'Spectrophotometric and quantitative analytical setup for protein characterization, kinetic measurements, and enzymatic activity validation.',
    tags: ['Proteomics', 'Spectrophotometry', 'Enzyme Kinetics']
  },

  // GROUP 3: CU Botanical Garden Agarwood Bio-Induction Trials (3 photos kept: #9, #10, #15)
  {
    id: 'botanical-media',
    title: 'Bio-Induction Media Preparation',
    groupId: 'group-botanical-trials',
    groupTitle: 'CU Botanical Garden Agarwood Bio-Induction Research',
    category: 'botanical',
    categoryLabel: 'Botanical Garden',
    date: 'October 25, 2025',
    location: 'CU Botanical Garden Field Base',
    image: '/images/gallery/botanical-media-preparation.jpg',
    thumbnail: '/images/gallery/thumb-botanical-media-preparation.jpg',
    rawImage: '/images/gallery/botanical-media-preparation.jpg',
    description: 'Formulating specialized fungal liquid broths and elicitor media cocktails prior to field-scale agarwood resin induction experiments.',
    tags: ['Media Prep', 'Bio-Induction', 'Fungal Broth']
  },
  {
    id: 'botanical-injection-setup',
    title: 'On-Site Inoculant Infusion Rig Assembly',
    groupId: 'group-botanical-trials',
    groupTitle: 'CU Botanical Garden Agarwood Bio-Induction Research',
    category: 'botanical',
    categoryLabel: 'Botanical Garden',
    date: 'October 25, 2025',
    location: 'Botanical Garden, University of Chittagong',
    image: '/images/gallery/botanical-onsite-injection-setup.jpg',
    thumbnail: '/images/gallery/thumb-botanical-onsite-injection-setup.jpg',
    rawImage: '/images/gallery/botanical-onsite-injection-setup.jpg',
    description: 'Custom gravity-assisted continuous delivery apparatus engineered to supply controlled bio-elicitor dosages into drilled trunk conduits.',
    tags: ['Infusion Rig', 'Field Equipment', 'Bioreactor Delivery']
  },
  {
    id: 'botanical-team-monitoring',
    title: 'Research Team Fieldwork & Trial Logging',
    groupId: 'group-botanical-trials',
    groupTitle: 'CU Botanical Garden Agarwood Bio-Induction Research',
    category: 'botanical',
    categoryLabel: 'Botanical Garden',
    date: 'October 29, 2025',
    location: 'Botanical Garden, University of Chittagong',
    image: '/images/gallery/botanical-field-team-monitoring.jpg',
    thumbnail: '/images/gallery/thumb-botanical-field-team-monitoring.jpg',
    rawImage: '/images/gallery/botanical-field-team-monitoring.jpg',
    description: 'MSI Lab researchers working collaboratively on site to record tree diameter at breast height (DBH), GPS coordinates, and inoculant infusion volumes.',
    tags: ['Team Fieldwork', 'Data Logging', 'Tree Biometrics']
  },

  // GROUP 4: Rangamati & Marishya Forest Plantation Expedition (2 photos kept: #17, #22)
  {
    id: 'field-reservoir',
    title: 'Suspended Infusion Reservoirs on Plantation Trees',
    groupId: 'group-marishya-expedition',
    groupTitle: 'Rangamati & Marishya Agarwood Plantation Expedition',
    category: 'field',
    categoryLabel: 'Hill Tracts Expedition',
    date: 'February 5, 2026',
    location: 'Marishya Agarwood Plantation, Rangamati',
    image: '/images/gallery/field-marishya-reservoir-setup.jpg',
    thumbnail: '/images/gallery/thumb-field-marishya-reservoir-setup.jpg',
    rawImage: '/images/gallery/field-marishya-reservoir-setup.jpg',
    description: 'Suspended volumetric reservoirs supplying continuous microbial inoculants down through multi-tier vascular ports in remote plantation groves.',
    tags: ['Hanging Reservoirs', 'Plantation Trial', 'Marishya']
  },
  {
    id: 'field-tagging',
    title: 'Longitudinal Specimen Tagging & Trial Tracking',
    groupId: 'group-marishya-expedition',
    groupTitle: 'Rangamati & Marishya Agarwood Plantation Expedition',
    category: 'field',
    categoryLabel: 'Hill Tracts Expedition',
    date: 'February 5, 2026',
    location: 'Marishya Agarwood Plantation, Rangamati',
    image: '/images/gallery/field-marishya-tree-tagging.jpg',
    thumbnail: '/images/gallery/thumb-field-marishya-tree-tagging.jpg',
    rawImage: '/images/gallery/field-marishya-tree-tagging.jpg',
    description: 'Systematic tagging and cataloging of treated specimens to enable longitudinal resin sampling and GC-MS chemical profiling over 3 to 12 months.',
    tags: ['Specimen Tagging', 'Longitudinal Study', 'GC-MS Tracking']
  },

  // GROUP 5: Master's Research Defense & Scientific Colloquium (2 photos kept: #23, #28)
  {
    id: 'seminar-presentation',
    title: 'Master\'s Thesis Defense & Scientific Colloquium',
    groupId: 'group-seminar-defense',
    groupTitle: 'Academic Research Defense & Departmental Scientific Colloquium',
    category: 'seminar',
    categoryLabel: 'Academic Seminar',
    date: 'September 3, 2026',
    location: 'Seminar Hall, Dept. of Biochemistry & Molecular Biology',
    image: '/images/gallery/seminar-research-presentation.jpg',
    thumbnail: '/images/gallery/thumb-seminar-research-presentation.jpg',
    rawImage: '/images/gallery/seminar-research-presentation.jpg',
    description: 'Oral research defense presenting epidemiological and serological findings on vector-borne viral infections, cytokine profiles, and prognostic biomarkers.',
    tags: ['Thesis Defense', 'Infectious Disease', 'Biomarkers']
  },
  {
    id: 'seminar-closing',
    title: 'Academic Concluding Remarks & Future Perspectives',
    groupId: 'group-seminar-defense',
    groupTitle: 'Academic Research Defense & Departmental Scientific Colloquium',
    category: 'seminar',
    categoryLabel: 'Academic Seminar',
    date: 'September 3, 2026',
    location: 'Dept. of Biochemistry & Molecular Biology, University of Chittagong',
    image: '/images/gallery/seminar-closing-remarks.jpg',
    thumbnail: '/images/gallery/thumb-seminar-closing-remarks.jpg',
    rawImage: '/images/gallery/seminar-closing-remarks.jpg',
    description: 'Panel summation reinforcing institutional research goals, inter-hospital clinical collaborations, and high-impact biotechnology directions for MSI Lab.',
    tags: ['Closing Remarks', 'Institutional Goals', 'Future Directions']
  }
];

export const GALLERY_GROUPS: GalleryGroup[] = [
  {
    id: 'group-heat-lab',
    title: 'HEAT-11009-CU Advanced Molecular Biology & Diagnostic Suites',
    purpose: 'Specialized facility infrastructure establishing high-containment molecular diagnostics, RT-PCR genetic amplification, HEPA-filtered cleanbench culturing, and ultra-low temperature specimen bio-banking funded under the World Bank HEAT Project.',
    category: 'lab',
    categoryLabel: 'Laboratory Facilities',
    date: 'April 2026',
    location: 'Dept. of Biochemistry & Molecular Biology, University of Chittagong',
    photoCount: 5,
    tags: ['HEAT-11009-CU', 'Molecular Biology', 'RT-PCR', 'Biosafety Cleanbench', 'Bio-Bank Archive'],
    photos: GALLERY_ITEMS.filter(item => item.groupId === 'group-heat-lab')
  },
  {
    id: 'group-biochem-core',
    title: 'Biochemistry Core Analytical & Sample Preparation Facility',
    purpose: 'Core biochemical workstations dedicated to biomolecule fractionation, refrigerated centrifugation, precision buffer and elicitor weighing, and spectrophotometric protein characterization.',
    category: 'lab',
    categoryLabel: 'Laboratory Facilities',
    date: 'April 2026',
    location: 'Sample Preparation & Proteomics Facilities',
    photoCount: 3,
    tags: ['Analytical Balance', 'Refrigerated Centrifugation', 'Proteomics Analytics', 'Enzyme Kinetics'],
    photos: GALLERY_ITEMS.filter(item => item.groupId === 'group-biochem-core')
  },
  {
    id: 'group-botanical-trials',
    title: 'CU Botanical Garden Agarwood Bio-Induction Research',
    purpose: 'Live experimental field trials testing fungal inoculant formulations, continuous gravity-fed fluidic infusions, and aseptic tree-surgery sealing methods on Aquilaria agallocha specimens within the University botanical reserve.',
    category: 'botanical',
    categoryLabel: 'Botanical Garden Research',
    date: 'October 25–29, 2025',
    location: 'Botanical Garden, University of Chittagong',
    photoCount: 3,
    tags: ['Aquilaria Inoculation', 'Bio-Elicitors', 'Vascular Infusion', 'Field Physiology', 'Tree Biometrics'],
    photos: GALLERY_ITEMS.filter(item => item.groupId === 'group-botanical-trials')
  },
  {
    id: 'group-marishya-expedition',
    title: 'Rangamati & Marishya Agarwood Plantation Expedition',
    purpose: 'Comprehensive field expedition into the Chittagong Hill Tracts agarwood plantations, conducting mechanical tree boreholing, hanging multi-tier inoculant reservoirs, weatherproof sealing, and longitudinal specimen cataloging for GC-MS studies.',
    category: 'field',
    categoryLabel: 'Hill Tracts Expeditions',
    date: 'February 4–5, 2026',
    location: 'Marishya Plantation, Rangamati District',
    photoCount: 2,
    tags: ['Hill Tracts Fieldwork', 'Mechanical Boreholing', 'Multi-Tier Infusion', 'Weather Sealing', 'Longitudinal GC-MS'],
    photos: GALLERY_ITEMS.filter(item => item.groupId === 'group-marishya-expedition')
  },
  {
    id: 'group-seminar-defense',
    title: 'Academic Research Defense & Departmental Scientific Colloquium',
    purpose: 'Dissemination of Master\'s thesis investigations on vector-borne viral biomarkers, RT-qPCR methodology, and epidemiological surveillance before the faculty examination board and scholarly community.',
    category: 'seminar',
    categoryLabel: 'Academic Seminars & Defenses',
    date: 'September 3, 2026',
    location: 'Seminar Auditorium, Dept. of Biochemistry & Molecular Biology',
    photoCount: 2,
    tags: ['Thesis Defense', 'Viral Biomarkers', 'Faculty Examination Panel', 'Scientific Colloquium', 'Dr. Monirul Islam'],
    photos: GALLERY_ITEMS.filter(item => item.groupId === 'group-seminar-defense')
  }
];
