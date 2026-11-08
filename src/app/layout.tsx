import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MSI Lab | Laboratory of Molecular & Structural Immunology | University of Chittagong",
  description: "Official web portal of the Laboratory of Molecular & Structural Immunology (MSI Lab), Department of Biochemistry & Molecular Biology, University of Chittagong, led by Prof. Dr. Mohammad Monirul Islam. Researching Dengue, SARS-CoV-2, Cholera, protein engineering, and structural vaccinology.",
  keywords: [
    "MSI Lab",
    "Molecular & Structural Immunology",
    "University of Chittagong",
    "Mohammad Monirul Islam",
    "Dengue Virus ED3",
    "SARS-CoV-2 RBD",
    "Structural Vaccinology",
    "Peptide Tag Protein Solubility",
    "Biochemistry and Molecular Biology",
    "Chittagong Bangladesh"
  ],
  authors: [{ name: "MSI Lab", url: "https://cu.ac.bd" }, { name: "Mohammad Mushtak Fuad" }],
  openGraph: {
    title: "MSI Lab | Laboratory of Molecular & Structural Immunology",
    description: "Pioneering research in structural vaccinology, viral envelope antigens, and therapeutic protein engineering at the University of Chittagong.",
    type: "website",
    locale: "en_US",
    siteName: "MSI Lab - University of Chittagong"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-[#165B33]/20 selection:text-[#165B33]">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
