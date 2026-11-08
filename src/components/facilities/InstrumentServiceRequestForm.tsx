"use client";

import React, { useState } from "react";
import { 
  FlaskConical, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Upload, 
  AlertTriangle, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Printer, 
  ExternalLink, 
  Sparkles, 
  Info, 
  Dna, 
  Microscope,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { INSTRUMENTS_DATA } from "@/data/research";

export interface ServiceFormData {
  // Step 1: Applicant Profile
  fullName: string;
  designation: string; // "Faculty / PI" | "Postdoctoral Fellow" | "PhD Candidate" | "MSc Scholar" | "Industry Scientist" | "Other"
  institutionType: string; // "University of Chittagong" | "Other Public University" | "Private University" | "Research Institute / Hospital" | "Industry / Diagnostic Lab"
  department: string;
  institutionName: string;
  email: string;
  phone: string;
  fundingGrant: string; // "HEAT Project" | "MOST Grant" | "UGC Fellowship" | "Institutional" | "Self-funded" | "Industry R&D"

  // Step 2: Instrument & Operational Requirements
  primaryInstrumentId: string;
  auxiliaryFacilities: string[];
  serviceMode: "assisted" | "self-operated" | "collaborative";
  sampleCount: string;
  preferredDateStart: string;
  preferredDateEnd: string;
  targetAnalysisType: string;

  // Step 3: Sample & Biosafety Profile
  sampleType: string; // "Purified Recombinant Protein" | "Phytochemical / Botanical Extract" | "Serum / Biological Fluid" | "Cultured Cells / Cell Pellet" | "Viral / Bacterial Nucleic Acid" | "Synthetic Peptide" | "Other"
  biosafetyLevel: "BSL-1" | "BSL-2" | "Non-biological / Chemical";
  hazardDetails: string;
  storageRequirement: "Room Temp" | "4°C Refrigerator" | "-20°C Freezer" | "-80°C Ultra-Low" | "Desiccated / Light-Sensitive";
  bufferMatrix: string;

  // Step 4: Scientific Rationale & Declaration
  researchObjective: string;
  fileName: string;
  fileSize: string;
  agreedToTerms: boolean;
  agreedToAcknowledgment: boolean;
}

const INITIAL_SERVICE_FORM: ServiceFormData = {
  fullName: "",
  designation: "Faculty / PI",
  institutionType: "University of Chittagong",
  department: "Department of Biochemistry & Molecular Biology",
  institutionName: "University of Chittagong",
  email: "",
  phone: "",
  fundingGrant: "HEAT Project / MOST Grant",

  primaryInstrumentId: "cytoflex-flow-cytometer",
  auxiliaryFacilities: [],
  serviceMode: "assisted",
  sampleCount: "10-25 samples",
  preferredDateStart: "",
  preferredDateEnd: "",
  targetAnalysisType: "Standard Analytical Profiling",

  sampleType: "Purified Recombinant Protein",
  biosafetyLevel: "BSL-1",
  hazardDetails: "None (Non-infectious, purified research specimen)",
  storageRequirement: "4°C Refrigerator",
  bufferMatrix: "PBS / Aqueous Buffer (pH 7.4)",

  researchObjective: "",
  fileName: "",
  fileSize: "",
  agreedToTerms: false,
  agreedToAcknowledgment: false,
};

const AUXILIARY_OPTIONS = [
  { id: "omniatap-water", label: "Type 1 Ultrapure Water (18.2 MΩ·cm)", desc: "Borosil OmniTap XS Touch" },
  { id: "haier-centrifuge", label: "High-Speed Refrigerated Centrifugation", desc: "Haier LX-185T100R (-20°C to 40°C)" },
  { id: "haier-bsc", label: "BSL-2 Biosafety Cabinet Workstation", desc: "Class II Type A2 sterile hood" },
  { id: "pulse-sonicator", label: "Pulse 650 Ultrasonic Homogenizer", desc: "Cell disruption & sonication chamber" },
  { id: "freeze-dryer", label: "Lyophilizer / Vacuum Freeze-Drying", desc: "Moisture removal & antigen stabilization" },
  { id: "vacuum-pump", label: "Rocker 300 Vacuum Filtration System", desc: "Sterile filtration & buffer degassing" },
];

interface FormProps {
  initialInstrumentId?: string;
}

export default function InstrumentServiceRequestForm({ initialInstrumentId }: FormProps) {
  const searchParams = useSearchParams();
  const queryInstrument = searchParams?.get("instrument") || initialInstrumentId;

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<ServiceFormData>(() => ({
    ...INITIAL_SERVICE_FORM,
    primaryInstrumentId: queryInstrument || INITIAL_SERVICE_FORM.primaryInstrumentId,
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  const selectedInstrument = INSTRUMENTS_DATA.find((i) => i.id === formData.primaryInstrumentId) || INSTRUMENTS_DATA[0];

  const validateStep = (step: number): boolean => {
    const err: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) err.fullName = "Full name of applicant / PI is required.";
      if (!formData.email.trim()) {
        err.email = "Institutional or academic email is required.";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        err.email = "Please enter a valid email address.";
      }
      if (!formData.phone.trim()) err.phone = "Contact phone number is required.";
      if (!formData.department.trim()) err.department = "Department / Faculty is required.";
      if (!formData.institutionName.trim()) err.institutionName = "Institution name is required.";
    }

    if (step === 2) {
      if (!formData.primaryInstrumentId) err.primaryInstrumentId = "Please select an instrument.";
      if (!formData.sampleCount.trim()) err.sampleCount = "Estimated sample count is required.";
      if (!formData.targetAnalysisType.trim()) err.targetAnalysisType = "Analysis type or target assay is required.";
    }

    if (step === 3) {
      if (!formData.sampleType.trim()) err.sampleType = "Sample classification is required.";
      if (!formData.bufferMatrix.trim()) err.bufferMatrix = "Buffer matrix and solvent composition are required.";
      if (!formData.hazardDetails.trim()) err.hazardDetails = "Biosafety notes or hazard declaration are required.";
    }

    if (step === 4) {
      if (!formData.researchObjective.trim() || formData.researchObjective.trim().length < 30) {
        err.researchObjective = "Please provide an executive summary of your research objective (minimum 30 characters).";
      }
      if (!formData.agreedToTerms) {
        err.agreedToTerms = "You must acknowledge the MSI Lab Equipment Usage Policy.";
      }
      if (!formData.agreedToAcknowledgment) {
        err.agreedToAcknowledgment = "You must agree to standard institutional scientific acknowledgement.";
      }
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  const [mailtoUrl, setMailtoUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    const randomSeq = Math.floor(1000 + Math.random() * 9000);
    const generatedId = `MSI-SRV-2026-${randomSeq}`;
    setTrackingId(generatedId);

    // Prepare direct email dispatch body
    const emailSubject = encodeURIComponent(`[MSI Lab Instrument Application: ${generatedId}] - ${formData.fullName}`);
    const emailBody = encodeURIComponent(
`Dear MSI Lab Leadership (Prof. Dr. Mohammad Monirul Islam & Lab Manager Mohammad Mushtak Fuad),

I have submitted a formal Instrument Usage Application for research facility services at the Laboratory of Molecular & Structural Immunology (MSI Lab), Department of Biochemistry & Molecular Biology, University of Chittagong.

=== APPLICATION SUMMARY ===
Tracking ID: ${generatedId}
Applicant Name: ${formData.fullName} (${formData.designation})
Department & Institution: ${formData.department}, ${formData.institutionName} (${formData.institutionType})
Contact Email: ${formData.email}
Phone / WhatsApp: ${formData.phone}
Grant Reference: ${formData.fundingGrant || "Not specified / Departmental"}

=== INSTRUMENT & SERVICE SPECIFICATIONS ===
Primary Instrument: ${selectedInstrument?.name} (Model: ${selectedInstrument?.model})
Service Delivery Mode: ${formData.serviceMode.toUpperCase()}
Sample Count / Injections: ${formData.sampleCount}
Target Assay / Parameter: ${formData.targetAnalysisType}
Preferred Dates: ${formData.preferredDateStart || "Flexible"} to ${formData.preferredDateEnd || "Flexible"}
Auxiliary Facilities: ${formData.auxiliaryFacilities.length > 0 ? formData.auxiliaryFacilities.join(", ") : "None requested"}

=== SPECIMEN & BIOSAFETY PROFILE ===
Specimen Type: ${formData.sampleType}
Biosafety Level: ${formData.biosafetyLevel}
Buffer / Solvent Matrix: ${formData.bufferMatrix}
Storage Requirement: ${formData.storageRequirement}
Hazard Notes: ${formData.hazardDetails}

=== RESEARCH OBJECTIVE ===
${formData.researchObjective}

Attached Document Reference: ${formData.fileName || "None attached directly; available upon request"}

I confirm compliance with MSI Lab equipment guidelines and agree to standard institutional scientific attribution in subsequent publications.

Sincerely,
${formData.fullName}
${formData.institutionName}`
    );

    const generatedMailto = `mailto:islammm@cu.ac.bd?cc=mushtakfuad@gmail.com,msilab.cu@gmail.com&subject=${emailSubject}&body=${emailBody}`;
    setMailtoUrl(generatedMailto);

    try {
      await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "instrument-service",
          trackingId: generatedId,
          ...formData,
        }),
      });
    } catch (err) {
      console.warn("Application persisted locally, mailto fallback available:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        fileName: file.name,
        fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      }));
    }
  };

  const toggleAuxiliary = (id: string) => {
    setFormData((prev) => {
      const exists = prev.auxiliaryFacilities.includes(id);
      return {
        ...prev,
        auxiliaryFacilities: exists
          ? prev.auxiliaryFacilities.filter((item) => item !== id)
          : [...prev.auxiliaryFacilities, id],
      };
    });
  };

  // SUCCESS CONFIRMATION STATE
  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8 animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#165B33] flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#165B33] bg-emerald-50 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5" />
            Application Logged Successfully
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Instrument Service Request Received
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Your application has been logged into the MSI Lab Instrument Management System. 
            The technical facility committee will review the analytical feasibility and operational calendar.
          </p>
        </div>

        {/* Tracking Voucher */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs text-slate-500 font-mono uppercase block">Service Request ID</span>
              <span className="text-xl sm:text-2xl font-black text-[#165B33] font-mono tracking-wider">
                {trackingId}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 font-mono block">Status</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-amber-800 bg-amber-100/80">
                Pending Technical Review
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-500 block">Principal Applicant:</span>
              <span className="font-bold text-slate-900">{formData.fullName} ({formData.designation})</span>
            </div>
            <div>
              <span className="text-slate-500 block">Affiliated Institution:</span>
              <span className="font-bold text-slate-900">{formData.institutionName}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Primary Instrument Requested:</span>
              <span className="font-bold text-[#165B33]">{selectedInstrument?.name}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Service Mode:</span>
              <span className="font-bold text-slate-900 capitalize">{formData.serviceMode} Analysis</span>
            </div>
            <div>
              <span className="text-slate-500 block">Sample Quantity:</span>
              <span className="font-bold text-slate-900">{formData.sampleCount}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Biosafety Level:</span>
              <span className="font-bold text-slate-900">{formData.biosafetyLevel}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
            <span>Direct Faculty Desk: Room 304, BMB, University of Chittagong</span>
            <span className="font-mono text-emerald-800">islammm@cu.ac.bd</span>
          </div>
        </div>

        {/* Direct Direction Card */}
        <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-2">
          <div className="font-bold text-[#165B33] flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Application Directed & Logged For MSI Lab Leadership:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl bg-white border border-emerald-200/60 space-y-0.5">
              <span className="font-bold text-slate-800 block">Prof. Dr. M. Monirul Islam</span>
              <span className="text-slate-500 block">Principal Investigator</span>
              <a href="mailto:islammm@cu.ac.bd" className="font-mono text-[#165B33] hover:underline font-semibold block">islammm@cu.ac.bd</a>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-emerald-200/60 space-y-0.5">
              <span className="font-bold text-slate-800 block">Mohammad Mushtak Fuad</span>
              <span className="text-slate-500 block">Laboratory Manager</span>
              <a href="mailto:mushtakfuad@gmail.com" className="font-mono text-[#165B33] hover:underline font-semibold block">mushtakfuad@gmail.com</a>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-emerald-200/60 space-y-0.5">
              <span className="font-bold text-slate-800 block">MSI Lab Central Desk</span>
              <span className="text-slate-500 block">Communications & Records</span>
              <a href="mailto:msilab.cu@gmail.com" className="font-mono text-[#165B33] hover:underline font-semibold block">msilab.cu@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Expected Next Steps Alert */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
          <div className="font-bold flex items-center gap-2 text-slate-900">
            <Info className="w-4 h-4 text-[#165B33]" />
            <span>Next Steps in Service Coordination:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
            <li>Our lab management will review sample specifications and contact you at <strong>{formData.email}</strong> within <strong>2–3 business days</strong>.</li>
            <li>You can also click the <strong>&ldquo;Send via Email Client&rdquo;</strong> button below to transmit your attached requisition letter directly to all three addresses.</li>
            <li>Sample delivery must follow designated cold-chain and containment protocols at Room 304, Department of Biochemistry &amp; Molecular Biology.</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {mailtoUrl && (
            <a
              href={mailtoUrl}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email Client to PI &amp; Team</span>
            </a>
          )}
          <button
            type="button"
            onClick={() => window.print()}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors inline-flex items-center gap-2 shadow-2xs"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>Print Receipt / Voucher</span>
          </button>
          <Link
            href="/facilities"
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors inline-flex items-center gap-2"
          >
            <span>Back to Facilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData(INITIAL_SERVICE_FORM);
              setCurrentStep(1);
            }}
            className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Step Indicator */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { num: 1, title: "Applicant Profile", icon: User },
            { num: 2, title: "Instrument Selection", icon: Cpu },
            { num: 3, title: "Sample & Biosafety", icon: ShieldCheck },
            { num: 4, title: "Methodology & Review", icon: FileText },
          ].map((st) => {
            const Icon = st.icon;
            const isCompleted = currentStep > st.num;
            const isCurrent = currentStep === st.num;
            return (
              <div 
                key={st.num}
                onClick={() => {
                  if (st.num < currentStep) setCurrentStep(st.num);
                }}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all ${
                  isCurrent
                    ? "bg-emerald-50/80 text-[#165B33] font-bold"
                    : isCompleted
                    ? "text-emerald-700 cursor-pointer hover:bg-slate-50"
                    : "text-slate-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isCurrent
                      ? "bg-[#165B33] text-white shadow-sm ring-2 ring-emerald-200"
                      : isCompleted
                      ? "bg-emerald-100 text-[#165B33]"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                </div>
                <span className="text-[11px] sm:text-xs tracking-tight line-clamp-1">
                  {st.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Form Container */}
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        
        {/* STEP 1: APPLICANT PROFILE */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                Step 1 of 4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Applicant & Institutional Affiliation
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Provide the details of the Principal Investigator, graduate scholar, or institutional researcher requesting service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#165B33]" />
                  <span>Full Name of Applicant / Principal Investigator *</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Prof. / Dr. / Ms. / Mr. Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                    errors.fullName ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-[#165B33]"
                  }`}
                />
                {errors.fullName && <p className="text-xs text-rose-500">{errors.fullName}</p>}
              </div>

              {/* Designation */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Designation / Academic Standing *
                </label>
                <select
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33] bg-white"
                >
                  <option value="Faculty / PI">Faculty Member / Principal Investigator</option>
                  <option value="Postdoctoral Fellow">Postdoctoral Research Fellow</option>
                  <option value="PhD Candidate">Doctoral Candidate (Ph.D.)</option>
                  <option value="MSc Scholar">Master&apos;s Fellow (M.Sc. / M.Phil.)</option>
                  <option value="Undergraduate Trainee">Undergraduate Honors Researcher (B.Sc.)</option>
                  <option value="Industry Scientist">Industry / Diagnostic R&D Scientist</option>
                  <option value="Other">Other Research Professional</option>
                </select>
              </div>

              {/* Institution Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Organization / Sector Classification *
                </label>
                <select
                  value={formData.institutionType}
                  onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33] bg-white"
                >
                  <option value="University of Chittagong">University of Chittagong (Internal)</option>
                  <option value="Other Public University">Other Public University (Bangladesh)</option>
                  <option value="Private University">Private University / Medical College</option>
                  <option value="Research Institute / Hospital">National Research Institute / Hospital (ICDDR,B / BCSIR / BFRI / etc.)</option>
                  <option value="Industry / Diagnostic Lab">Pharmaceutical / Clinical Diagnostic Entity</option>
                  <option value="International Institution">International Partner Institution</option>
                </select>
              </div>

              {/* Department */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#165B33]" />
                  <span>Department / Faculty *</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Biochemistry & Molecular Biology, Botany, Genetic Eng."
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                    errors.department ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-[#165B33]"
                  }`}
                />
                {errors.department && <p className="text-xs text-rose-500">{errors.department}</p>}
              </div>

              {/* Institution Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Institution / Organization Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., University of Chittagong"
                  value={formData.institutionName}
                  onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                    errors.institutionName ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-[#165B33]"
                  }`}
                />
                {errors.institutionName && <p className="text-xs text-rose-500">{errors.institutionName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#165B33]" />
                  <span>Official / Academic Email *</span>
                </label>
                <input
                  type="email"
                  placeholder="name@university.ac.bd or email@institution.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                    errors.email ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-[#165B33]"
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#165B33]" />
                  <span>Contact Phone / WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  placeholder="+8801XXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                    errors.phone ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-[#165B33]"
                  }`}
                />
                {errors.phone && <p className="text-xs text-rose-500">{errors.phone}</p>}
              </div>

              {/* Grant / Funding Reference */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold text-slate-800">
                  Supporting Research Grant / Project Reference
                </label>
                <input
                  type="text"
                  placeholder="e.g., World Bank HEAT-11009-CU, MOST Grant 2025/2026, UGC Project, Departmental Fund"
                  value={formData.fundingGrant}
                  onChange={(e) => setFormData({ ...formData, fundingGrant: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33]"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: INSTRUMENT SELECTION & OPERATIONAL REQUIREMENTS */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                Step 2 of 4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Core Instrumentation &amp; Operational Setup
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select your primary research instrument, auxiliary support facilities, and preferred operational mode.
              </p>
            </div>

            {/* Primary Instrument Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#165B33]" />
                <span>Primary State-of-the-Art Instrument Requested *</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto p-1 border border-slate-200 rounded-2xl">
                {INSTRUMENTS_DATA.map((inst) => {
                  const isSelected = formData.primaryInstrumentId === inst.id;
                  return (
                    <div
                      key={inst.id}
                      onClick={() => setFormData({ ...formData, primaryInstrumentId: inst.id })}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                        isSelected
                          ? "bg-emerald-50/70 border-[#165B33] ring-2 ring-emerald-500/20"
                          : "bg-white border-slate-200 hover:border-emerald-200 hover:bg-slate-50/60"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">
                            {inst.brand}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-[#165B33] shrink-0" />
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 mt-1.5 line-clamp-1">
                          {inst.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                          {inst.category}
                        </p>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        Model: {inst.model}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Selected Instrument Highlight */}
            {selectedInstrument && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <Info className="w-5 h-5 text-[#165B33] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <div className="font-bold text-slate-900">
                    Selected: {selectedInstrument.name}
                  </div>
                  <div className="text-slate-600 leading-relaxed">
                    <strong>Primary Techniques:</strong> {selectedInstrument.techniques.join(" • ")}
                  </div>
                  <div className="text-slate-500">
                    <strong>Specifications:</strong> {selectedInstrument.specs}
                  </div>
                </div>
              </div>
            )}

            {/* Operational Mode Selection */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-slate-800">
                Service &amp; Operational Delivery Mode *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "assisted",
                    title: "Assisted Service",
                    badge: "Most Common",
                    desc: "Full run conducted by MSI Lab senior operators; raw data files + QA summary provided.",
                  },
                  {
                    id: "self-operated",
                    title: "Self-Operated Time",
                    badge: "Trained Users",
                    desc: "Applicant conducts run independently after safety clearance and instrument qualification.",
                  },
                  {
                    id: "collaborative",
                    title: "Joint Collaboration",
                    badge: "Intellectual Co-Op",
                    desc: "Integrated scientific partnership with MSI Lab researchers; co-authorship agreement.",
                  },
                ].map((mode) => {
                  const isSelected = formData.serviceMode === mode.id;
                  return (
                    <div
                      key={mode.id}
                      onClick={() => setFormData({ ...formData, serviceMode: mode.id as any })}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? "bg-emerald-50/70 border-[#165B33] ring-2 ring-emerald-500/20"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{mode.title}</span>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                          {mode.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                        {mode.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Auxiliary Facilities */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#165B33]" />
                <span>Auxiliary Core Facilities Required (Optional Checkboxes)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {AUXILIARY_OPTIONS.map((aux) => {
                  const isChecked = formData.auxiliaryFacilities.includes(aux.id);
                  return (
                    <label
                      key={aux.id}
                      onClick={() => toggleAuxiliary(aux.id)}
                      className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                        isChecked ? "bg-emerald-50/60 border-emerald-300" : "bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}} // handled by parent onClick
                        className="mt-0.5 accent-[#165B33] rounded"
                      />
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">{aux.label}</div>
                        <div className="text-[11px] text-slate-500">{aux.desc}</div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Parameters & Sample Scope */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Estimated Number of Samples / Injections *
                </label>
                <input
                  type="text"
                  placeholder="e.g., 16 samples (in duplicate = 32 runs)"
                  value={formData.sampleCount}
                  onChange={(e) => setFormData({ ...formData, sampleCount: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Target Assay / Detection Parameter *
                </label>
                <input
                  type="text"
                  placeholder="e.g., RP-HPLC @ 280/214nm, Real-Time SYBR Green qPCR, CD4/CD8 flow"
                  value={formData.targetAnalysisType}
                  onChange={(e) => setFormData({ ...formData, targetAnalysisType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#165B33]" />
                  <span>Preferred Target Date (Start)</span>
                </label>
                <input
                  type="date"
                  value={formData.preferredDateStart}
                  onChange={(e) => setFormData({ ...formData, preferredDateStart: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33] bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#165B33]" />
                  <span>Preferred Target Date (Completion Deadline)</span>
                </label>
                <input
                  type="date"
                  value={formData.preferredDateEnd}
                  onChange={(e) => setFormData({ ...formData, preferredDateEnd: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33] bg-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: SAMPLE & BIOSAFETY PROFILE */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                Step 3 of 4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Sample Characterization & Biosafety Compliance
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                To guarantee laboratory safety and prevent instrument contamination, detail your sample composition and handling specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Sample Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5 text-[#165B33]" />
                  <span>Primary Specimen Classification *</span>
                </label>
                <select
                  value={formData.sampleType}
                  onChange={(e) => setFormData({ ...formData, sampleType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33] bg-white"
                >
                  <option value="Purified Recombinant Protein">Purified Recombinant Protein / Antigen</option>
                  <option value="Phytochemical / Botanical Extract">Botanical Extract / Phytochemical Fraction</option>
                  <option value="Serum / Biological Fluid">Serum / Plasma / Biological Fluid (De-identified)</option>
                  <option value="Cultured Cells / Cell Pellet">Cultured Mammalian or Microbial Cells</option>
                  <option value="Viral / Bacterial Nucleic Acid">Extracted DNA / RNA / PCR Amplicons</option>
                  <option value="Synthetic Peptide">Engineered Peptide Conjugates</option>
                  <option value="Agarwood Resin Extract">Inoculated Plant Tissue / Resin</option>
                  <option value="Chemical / Small Molecule">Synthetic Organic Compound</option>
                  <option value="Other">Other Biological Substrate</option>
                </select>
              </div>

              {/* Biosafety Level */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#165B33]" />
                  <span>Biosafety Containment Level *</span>
                </label>
                <select
                  value={formData.biosafetyLevel}
                  onChange={(e) => setFormData({ ...formData, biosafetyLevel: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33] bg-white"
                >
                  <option value="BSL-1">BSL-1 (Non-pathogenic, recombinant E. coli, standard proteins)</option>
                  <option value="BSL-2">BSL-2 (Clinical human specimens, arbovirus isolates, viral lysates)</option>
                  <option value="Non-biological / Chemical">Non-biological / Pure Botanical Chemical (Chemical Safety)</option>
                </select>
              </div>

              {/* Storage Requirements */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Pre-Run Storage Conditions *
                </label>
                <select
                  value={formData.storageRequirement}
                  onChange={(e) => setFormData({ ...formData, storageRequirement: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33] bg-white"
                >
                  <option value="Room Temp">Ambient Temperature (20–25°C)</option>
                  <option value="4°C Refrigerator">Refrigerated (2–8°C)</option>
                  <option value="-20°C Freezer">Standard Freezer (-20°C)</option>
                  <option value="-80°C Ultra-Low">Ultra-Low Freezer (-80°C Cryo)</option>
                  <option value="Desiccated / Light-Sensitive">Desiccated / Light-Sensitive Foil Wrap</option>
                </select>
              </div>

              {/* Solvent / Buffer Matrix */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Buffer / Solvent Matrix Composition *
                </label>
                <input
                  type="text"
                  placeholder="e.g., 20 mM Tris-HCl, 150 mM NaCl, pH 7.4, 0.1% TFA"
                  value={formData.bufferMatrix}
                  onChange={(e) => setFormData({ ...formData, bufferMatrix: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                    errors.bufferMatrix ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-[#165B33]"
                  }`}
                />
                {errors.bufferMatrix && <p className="text-xs text-rose-500">{errors.bufferMatrix}</p>}
              </div>

              {/* Hazard & Toxicity Notes */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Hazard Identification & Bio-Risk Statement *</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="List any biohazard, toxicity, radioactivity (none permitted), volatility, or heat-sensitivity issues..."
                  value={formData.hazardDetails}
                  onChange={(e) => setFormData({ ...formData, hazardDetails: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#165B33]"
                />
              </div>
            </div>

            {/* Biosafety Warning Box */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>BSL-2 Compliance Note:</strong> Samples containing live bloodborne pathogens or unfixed infectious clinical materials must be declared and handled strictly in compliance with MSI Lab Institutional Biosafety Committee (IBC) protocols in our certified Class II Type A2 biosafety suites.
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: SCIENTIFIC RATIONALE & DECLARATION */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                Step 4 of 4
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                Scientific Proposal, Supporting Letter &amp; Declaration
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Provide an executive summary of your experimental workflow and upload an institutional recommendation letter.
              </p>
            </div>

            {/* Research Objective */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#165B33]" />
                <span>Executive Summary of Research Objective &amp; Analysis Plan *</span>
              </label>
              <textarea
                rows={4}
                placeholder="State the scientific problem, hypothesis, specific measurements required from the instrument, and how the results will advance your research..."
                value={formData.researchObjective}
                onChange={(e) => setFormData({ ...formData, researchObjective: e.target.value })}
                className={`w-full p-4 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
                  errors.researchObjective ? "border-rose-400 bg-rose-50/20" : "border-slate-200 focus:border-[#165B33]"
                }`}
              />
              {errors.researchObjective && (
                <p className="text-xs text-rose-500">{errors.researchObjective}</p>
              )}
            </div>

            {/* Document Upload */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800">
                Supporting Letter / Project Proposal / Biosafety Approval (PDF or DOC)
              </label>

              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file) {
                    setFormData((prev) => ({
                      ...prev,
                      fileName: file.name,
                      fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
                    }));
                  }
                }}
                className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
                  isDragging ? "border-[#165B33] bg-emerald-50/30" : "border-slate-200 hover:border-slate-300 bg-slate-50/50"
                }`}
              >
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <div className="text-xs text-slate-600">
                  <label className="font-bold text-[#165B33] hover:underline cursor-pointer">
                    Click to browse file
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>{" "}
                  or drag and drop your document here
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Institutional requisition letter, supervisor consent, or IBC clearance (Max 25 MB)
                </p>

                {formData.fileName && (
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-100/70 border border-emerald-200 text-xs font-semibold text-[#165B33]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{formData.fileName} ({formData.fileSize})</span>
                  </div>
                )}
              </div>
            </div>

            {/* Declarations */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                  className="mt-1 accent-[#165B33] rounded"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  <strong>MSI Lab Operational Compliance:</strong> I certify that all samples conform to the reported biosafety classifications, and that all consumables, column standards, or assay kits requested will be used in accordance with manufacturer specifications and MSI Lab SOPs.
                </span>
              </label>
              {errors.agreedToTerms && <p className="text-xs text-rose-500 pl-6">{errors.agreedToTerms}</p>}

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreedToAcknowledgment}
                  onChange={(e) => setFormData({ ...formData, agreedToAcknowledgment: e.target.checked })}
                  className="mt-1 accent-[#165B33] rounded"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  <strong>Scientific Attribution:</strong> I agree to acknowledge the facility in any ensuing scientific publications, presentations, or theses as: <em>&ldquo;Analytical instrumentation was supported by the Laboratory of Molecular &amp; Structural Immunology (MSI Lab), Department of Biochemistry &amp; Molecular Biology, University of Chittagong.&rdquo;</em>
                </span>
              </label>
              {errors.agreedToAcknowledgment && <p className="text-xs text-rose-500 pl-6">{errors.agreedToAcknowledgment}</p>}
            </div>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Step</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl bg-[#165B33] text-white text-xs sm:text-sm font-bold hover:bg-[#114929] transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Continue to Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#165B33] to-[#10b981] hover:from-[#114929] hover:to-[#059669] text-white text-xs sm:text-sm font-bold transition-all inline-flex items-center gap-2 shadow-md disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span>Submit Instrument Application</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
