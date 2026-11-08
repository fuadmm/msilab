const fs = require('fs');
const path = require('path');

// Resolve paths relative to project root
const projectRoot = path.resolve(__dirname, '..');
const dpPath = path.join(projectRoot, 'src', 'data', 'detailedProfiles.ts');
const cvDir = path.join(projectRoot, 'public', 'cv');

if (!fs.existsSync(dpPath)) {
  console.error(`Error: detailedProfiles.ts not found at ${dpPath}`);
  process.exit(1);
}

// Read detailedProfiles.ts
const dpCode = fs.readFileSync(dpPath, 'utf8');
const dpStart = dpCode.indexOf('export const DETAILED_PROFILES');
const dpJsonStart = dpCode.indexOf('{', dpStart);
const dpJsonEnd = dpCode.lastIndexOf('};');
const detailedProfiles = eval('(' + dpCode.slice(dpJsonStart, dpJsonEnd + 1) + ')');

// Ensure public/cv directory exists
if (!fs.existsSync(cvDir)) {
  fs.mkdirSync(cvDir, { recursive: true });
}

// Generate Markdown CV files for all researchers in public/cv/
Object.keys(detailedProfiles).forEach(id => {
  const p = detailedProfiles[id];
  let sections = [];

  sections.push(`# Curriculum Vitae: ${p.name}
**${p.role}**  
**Institution:** ${p.currentInstitution || p.institution || 'University of Chittagong'}  
**Contact:** ${p.institutionalEmail || p.email || p.personalEmail || 'Available upon request'} ${p.phone ? '| Tel: ' + p.phone : ''}  
**Profile Links:** ${[
    p.profileUrl ? `[University Profile](${p.profileUrl})` : '',
    p.researchgate ? `[ResearchGate](${p.researchgate})` : '',
    p.linkedin ? `[LinkedIn](${p.linkedin})` : '',
    p.googleScholar ? `[Google Scholar](${p.googleScholar})` : ''
  ].filter(Boolean).join(' | ')}`);

  sections.push(`## 1. Executive Summary & Research Profile
${p.bioSnippet || 'Researcher at Laboratory of Molecular & Structural Immunology (MSI Lab), Department of Biochemistry & Molecular Biology, University of Chittagong.'}`);

  if (p.thesisTitle && p.thesisTitle.trim()) {
    let thesisSec = `## 2. Academic Thesis & Research Defense
* **Thesis Title:** "${p.thesisTitle}"
* **Primary Supervisor:** ${p.supervisor || 'Professor M. Monirul Islam, PhD'}`;
    if (p.coSupervisors) {
      thesisSec += `\n* **Co-Supervisor(s):** ${p.coSupervisors}`;
    }
    if (p.senioritySession) {
      thesisSec += `\n* **Academic Session / Level:** ${p.senioritySession}`;
    }
    if (p.submissionDate) {
      thesisSec += `\n* **Submission / Defense Date:** ${p.submissionDate}`;
    }
    if (p.shortAbstract) {
      thesisSec += `\n* **Scientific Abstract:**\n> ${p.shortAbstract}`;
    }
    sections.push(thesisSec);
  }

  if (p.education && p.education.length > 0) {
    sections.push(`## ${p.thesisTitle ? '3' : '2'}. Academic Qualifications
${p.education.map(e => `* **${e.degree}** in ${e.field} — *${e.institution}* (${e.years || 'Ongoing'})`).join('\n')}`);
  }

  if (p.experiences && p.experiences.length > 0) {
    const secNum = (p.thesisTitle ? 1 : 0) + (p.education && p.education.length > 0 ? 1 : 0) + 2;
    sections.push(`## ${secNum}. Professional Experiences & Appointments
${p.experiences.map(exp => `* **${exp.title}**, ${exp.institution} (${exp.years})${exp.details ? ' — ' + exp.details : ''}`).join('\n')}`);
  }

  if (p.skills && p.skills.length > 0) {
    const secNum = sections.length;
    sections.push(`## ${secNum}. Technical Skills & Laboratory Methodologies
${p.skills.map(s => `* ${s}`).join('\n')}`);
  }

  if (p.publications && p.publications.length > 0) {
    const secNum = sections.length;
    sections.push(`## ${secNum}. Key Publications & Scholarly Works
${p.publications.map((pub, i) => `${i + 1}. ${pub}`).join('\n')}`);
  }

  if (p.awards && p.awards.length > 0) {
    const secNum = sections.length;
    sections.push(`## ${secNum}. Honors, Grants, Scholarships & Awards
${p.awards.map(a => `* ${a}`).join('\n')}`);
  }

  const pdfPath = path.join(cvDir, `${id}_cv.pdf`);
  if (!fs.existsSync(pdfPath)) {
    const cvMd = sections.join('\n\n---\n\n') + '\n';
    fs.writeFileSync(path.join(cvDir, `${id}_cv.md`), cvMd);
  }
});

console.log(`Generated/validated ${Object.keys(detailedProfiles).length} researcher CV files in public/cv/!`);

module.exports = { detailedProfiles };
