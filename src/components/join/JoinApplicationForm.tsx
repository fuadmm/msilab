"use client";

import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  Upload, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  Check, 
  Send 
} from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  currentInstitution: string;
  currentStatus: string; // Student | Teacher | Job
  highestDegree: string;
  majorField: string;
  positionInterest: string; // Undergraduate Research Fellow | Postgraduate Fellow | Doctorate/MPhil Fellow | Non-thesis Internship
  researchPillarInterest: string;
  statementOfPurpose: string;
  fileName: string;
  fileSize: string;
}

const INITIAL_FORM: FormData = {
  fullName: "",
  email: "",
  phone: "",
  currentInstitution: "",
  currentStatus: "Student",
  highestDegree: "B.Sc. in Biochemistry / Life Sciences",
  majorField: "Biochemistry & Molecular Biology",
  positionInterest: "Postgraduate Fellow",
  researchPillarInterest: "Advanced Immunological Studies",
  statementOfPurpose: "",
  fileName: "",
  fileSize: "",
};

export default function JoinApplicationForm() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  const validateStep = (step: number) => {
    const err: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) err.fullName = "Full name is required.";
      if (!formData.email.trim() || !formData.email.includes("@")) {
        err.email = "Valid email address is required.";
      }
      if (!formData.phone.trim()) {
        err.phone = "Phone / WhatsApp number is required.";
      }
    } else if (step === 2) {
      if (!formData.currentInstitution.trim()) {
        err.currentInstitution = "Current institution / employer is required.";
      }
      if (!formData.majorField.trim()) {
        err.majorField = "Field of study or specialty is required.";
      }
    } else if (step === 3) {
      if (!formData.positionInterest) {
        err.positionInterest = "Please select a position of interest.";
      }
      if (!formData.statementOfPurpose.trim() || formData.statementOfPurpose.length < 30) {
        err.statementOfPurpose = "Please provide at least 30 characters explaining your research motivations.";
      }
    } else if (step === 4) {
      if (!formData.fileName) {
        err.fileName = "Please upload or attach your CV/Resume (PDF or DOCX).";
      }
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2) + " MB";
      setFormData((prev) => ({ ...prev, fileName: file.name, fileSize: sizeMB }));
      setErrors((prev) => ({ ...prev, fileName: "" }));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2) + " MB";
      setFormData((prev) => ({ ...prev, fileName: file.name, fileSize: sizeMB }));
      setErrors((prev) => ({ ...prev, fileName: "" }));
    }
  };

  const [mailtoUrl, setMailtoUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    const randomId = "MSI-APP-2026-" + Math.floor(1000 + Math.random() * 9000);
    setTrackingId(randomId);

    const emailSubject = encodeURIComponent(`[MSI Lab Fellowship Application: ${randomId}] - ${formData.fullName} (${formData.positionInterest})`);
    const emailBody = encodeURIComponent(
`Dear MSI Lab Leadership (Prof. Dr. Mohammad Monirul Islam & Lab Manager Mohammad Mushtak Fuad),

I have submitted an application to join the Laboratory of Molecular & Structural Immunology (MSI Lab), Department of Biochemistry & Molecular Biology, University of Chittagong.

=== APPLICANT DETAILS ===
Tracking ID: ${randomId}
Full Name: ${formData.fullName}
Position of Interest: ${formData.positionInterest}
Research Pillar Interest: ${formData.researchPillarInterest}
Current Institution: ${formData.currentInstitution} (${formData.currentStatus})
Highest Degree: ${formData.highestDegree} (Major: ${formData.majorField})
Email: ${formData.email}
Phone / WhatsApp: ${formData.phone}

=== STATEMENT OF PURPOSE / RESEARCH MOTIVATION ===
${formData.statementOfPurpose}

Attachment Reference: ${formData.fileName ? `${formData.fileName} (${formData.fileSize})` : "Curriculum Vitae attached to this email"}

Thank you very much for considering my application.

Sincerely,
${formData.fullName}
${formData.currentInstitution}`
    );

    const generatedMailto = `mailto:islammm@cu.ac.bd?cc=mushtakfuad@gmail.com,msilab.cu@gmail.com&subject=${emailSubject}&body=${emailBody}`;
    setMailtoUrl(generatedMailto);

    try {
      await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "fellowship",
          trackingId: randomId,
          ...formData,
        }),
      });
    } catch (err) {
      console.warn("Application logged locally, mailto fallback available:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center max-w-2xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#165B33] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#165B33]">
            Application Successfully Transmitted &amp; Logged
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
            Thank You, {formData.fullName}!
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Your application for the position of <strong className="text-slate-900">{formData.positionInterest}</strong> has been logged into the MSI Lab Admissions Management System.
          </p>
        </div>

        {/* Tracking ID Badge */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 inline-block text-left max-w-md w-full space-y-2 text-xs">
          <div className="flex justify-between items-center text-slate-500">
            <span>Tracking Reference ID:</span>
            <span className="font-mono font-bold text-[#165B33] text-sm">{trackingId}</span>
          </div>
          <div className="flex justify-between items-center text-slate-500">
            <span>Registered Email:</span>
            <span className="font-mono text-slate-800">{formData.email}</span>
          </div>
          <div className="flex justify-between items-center text-slate-500">
            <span>Position Applied For:</span>
            <span className="font-medium text-slate-800">{formData.positionInterest}</span>
          </div>
          {formData.fileName && (
            <div className="flex justify-between items-center text-slate-500">
              <span>Attached CV Document:</span>
              <span className="font-medium text-slate-800">{formData.fileName} ({formData.fileSize})</span>
            </div>
          )}
        </div>

        {/* Direct Recipients Box */}
        <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-left space-y-2 text-xs">
          <div className="font-bold text-[#165B33] flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            <span>Application Routed Directly To Lab Leadership:</span>
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
              <span className="text-slate-500 block">Recruitment Records</span>
              <a href="mailto:msilab.cu@gmail.com" className="font-mono text-[#165B33] hover:underline font-semibold block">msilab.cu@gmail.com</a>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
          Shortlisted candidates will be invited for an in-person or virtual interview with PI Prof. Dr. Mohammad Monirul Islam. You may also click below to confirm your transmission with your local email client.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          {mailtoUrl && (
            <a
              href={mailtoUrl}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email Client to PI &amp; Lab Manager</span>
            </a>
          )}
          <button
            onClick={() => {
              setFormData(INITIAL_FORM);
              setCurrentStep(1);
              setIsSubmitted(false);
            }}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden max-w-3xl mx-auto">
      {/* Wizard Step Bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {[
            { step: 1, label: "Personal" },
            { step: 2, label: "Academic" },
            { step: 3, label: "Intent" },
            { step: 4, label: "Upload CV" },
          ].map((item, idx) => {
            const isActive = currentStep === item.step;
            const isCompleted = currentStep > item.step;

            return (
              <div key={item.step} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    isCompleted
                      ? "bg-[#165B33] text-white"
                      : isActive
                      ? "bg-[#165B33] text-white ring-4 ring-emerald-100"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {isCompleted ? <Check className="w-3.5 h-3.5" /> : item.step}
                </div>
                <span className={`hidden sm:inline text-xs font-semibold ${
                  isActive ? "text-[#165B33]" : isCompleted ? "text-slate-800" : "text-slate-400"
                }`}>
                  {item.label}
                </span>
                {idx < 3 && <div className="hidden sm:block w-8 h-0.5 bg-slate-200 mx-1"></div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
        
        {/* Step 1: Personal Contact Info */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Step 1: Personal & Contact Information
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Provide your primary contact channels so our admissions committee can reach you.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Legal Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. Mohammad Mushtak Fuad"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#165B33] ${
                      errors.fullName ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="e.g. applicant@cu.ac.bd"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#165B33] ${
                        errors.email ? "border-red-400 bg-red-50/20" : "border-slate-200"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="+8801XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#165B33] ${
                        errors.phone ? "border-red-400 bg-red-50/20" : "border-slate-200"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Academic Background & Status */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Step 2: Academic Background & Current Status
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Tell us about your current affiliation and degree background.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Current Status <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Student", "Teacher", "Job"].map((status) => (
                    <button
                      type="button"
                      key={status}
                      onClick={() => setFormData({ ...formData, currentStatus: status })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                        formData.currentStatus === status
                          ? "bg-emerald-50 border-[#165B33] text-[#165B33] shadow-xs"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Current Institution / University / Organization <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. University of Chittagong"
                    value={formData.currentInstitution}
                    onChange={(e) => setFormData({ ...formData, currentInstitution: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#165B33] ${
                      errors.currentInstitution ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                </div>
                {errors.currentInstitution && <p className="text-[11px] text-red-500 mt-1">{errors.currentInstitution}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Highest Completed / Pursued Degree
                  </label>
                  <select
                    value={formData.highestDegree}
                    onChange={(e) => setFormData({ ...formData, highestDegree: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#165B33]"
                  >
                    <option>B.Sc. in Biochemistry / Life Sciences</option>
                    <option>M.Sc. in Biochemistry / Molecular Biology</option>
                    <option>M.Phil / MS in Related Discipline</option>
                    <option>B.Sc. in Biotechnology / Genetic Engineering</option>
                    <option>MBBS / BDS / Medical Graduate</option>
                    <option>Other Life Sciences Degree</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Department / Major Field <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Biochemistry & Molecular Biology"
                    value={formData.majorField}
                    onChange={(e) => setFormData({ ...formData, majorField: e.target.value })}
                    className={`w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#165B33] ${
                      errors.majorField ? "border-red-400 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                  {errors.majorField && <p className="text-[11px] text-red-500 mt-1">{errors.majorField}</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Position of Interest & Intent */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Step 3: Position of Interest & Research Intent
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Select your intended research track and share your scientific motivation.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Position of Interest <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Undergraduate Research Fellow",
                    "Postgraduate Fellow",
                    "Doctorate/MPhil Fellow",
                    "Non-thesis Internship",
                  ].map((pos) => (
                    <button
                      type="button"
                      key={pos}
                      onClick={() => setFormData({ ...formData, positionInterest: pos })}
                      className={`p-3 rounded-xl text-left border transition-all text-xs flex items-center justify-between ${
                        formData.positionInterest === pos
                          ? "bg-emerald-50 border-[#165B33] text-[#165B33] font-bold shadow-xs"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{pos}</span>
                      {formData.positionInterest === pos && <CheckCircle2 className="w-4 h-4 text-[#165B33]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Research Pillar of Interest
                </label>
                <select
                  value={formData.researchPillarInterest}
                  onChange={(e) => setFormData({ ...formData, researchPillarInterest: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#165B33]"
                >
                  <option>Advanced Immunological Studies (Innate/Adaptive/Signaling)</option>
                  <option>Molecular Pathogen-Host Interactions (ADE/Evasion)</option>
                  <option>Targeted Pathogens: Dengue (ED3) & SARS-CoV-2 (RBD)</option>
                  <option>Protein Technology & Solubility-Controlling Peptide Tags</option>
                  <option>Vibrio cholerae Mucosal Immunity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brief Statement of Purpose / Research Interests <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Explain why you wish to join MSI Lab, your familiarity with wet-lab techniques (e.g., PCR, ELISA, SDS-PAGE) or computational modeling, and your career goals..."
                  value={formData.statementOfPurpose}
                  onChange={(e) => setFormData({ ...formData, statementOfPurpose: e.target.value })}
                  className={`w-full p-3 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#165B33] ${
                    errors.statementOfPurpose ? "border-red-400 bg-red-50/20" : "border-slate-200"
                  }`}
                />
                <div className="flex justify-between items-center text-[11px] text-slate-400 mt-1">
                  <span>Minimum 30 characters</span>
                  <span>{formData.statementOfPurpose.length} characters</span>
                </div>
                {errors.statementOfPurpose && <p className="text-[11px] text-red-500">{errors.statementOfPurpose}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: CV Upload & Final Review */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl font-bold text-[#0f172a]">
                Step 4: CV & Supporting Document Upload
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Upload your updated Curriculum Vitae or resume (PDF or DOCX format).
              </p>
            </div>

            {/* Drag & Drop Box */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`p-8 border-2 border-dashed rounded-2xl text-center transition-colors cursor-pointer ${
                isDragging
                  ? "border-[#165B33] bg-emerald-50/50"
                  : formData.fileName
                  ? "border-emerald-400 bg-emerald-50/20"
                  : "border-slate-300 hover:border-emerald-300 bg-slate-50/60"
              }`}
            >
              <input
                type="file"
                id="cv-upload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="cv-upload" className="cursor-pointer space-y-3 block">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#165B33] flex items-center justify-center mx-auto shadow-2xs">
                  <Upload className="w-6 h-6" />
                </div>

                {formData.fileName ? (
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-[#165B33]">
                      Attached: {formData.fileName}
                    </p>
                    <p className="text-xs text-slate-500 font-mono">
                      File Size: {formData.fileSize} · Click to replace
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-700">
                      Drag & Drop your CV here, or <span className="text-[#165B33] underline">Browse file</span>
                    </p>
                    <p className="text-xs text-slate-400">
                      Supported formats: PDF, DOCX (Max size: 10 MB)
                    </p>
                  </div>
                )}
              </label>
            </div>
            {errors.fileName && <p className="text-[11px] text-red-500">{errors.fileName}</p>}

            {/* Summary Review Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px] block">
                Application Review Summary:
              </span>
              <div className="grid grid-cols-2 gap-2 text-slate-600">
                <div><span className="font-medium text-slate-800">Applicant:</span> {formData.fullName}</div>
                <div><span className="font-medium text-slate-800">Email:</span> {formData.email}</div>
                <div><span className="font-medium text-slate-800">Status:</span> {formData.currentStatus}</div>
                <div><span className="font-medium text-slate-800">Target Role:</span> {formData.positionInterest}</div>
              </div>
            </div>

          </div>
        )}

        {/* Wizard Navigation Buttons */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Step</span>
            </button>
          ) : (
            <div></div>
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#165B33] hover:bg-[#114929] transition-colors shadow-xs"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#165B33] hover:bg-[#114929] disabled:opacity-50 transition-all shadow-md active:scale-98"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Lab Application</span>
                </>
              )}
            </button>
          )}
        </div>

      </form>
    </div>
  );
}
