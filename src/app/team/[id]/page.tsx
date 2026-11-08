import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTeamMembers, getMemberById } from "@/data/team";
import MemberProfileView from "@/components/team/MemberProfileView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const members = getAllTeamMembers();
  // Filter out reserved routes under /team/
  return members
    .filter((m) => !["pi", "current", "alumni"].includes(m.id))
    .map((member) => ({
      id: member.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  if (["pi", "current", "alumni"].includes(id)) {
    return {};
  }
  const member = getMemberById(id);

  if (!member) {
    return {
      title: "Member Not Found | MSI Lab",
    };
  }

  const thesisSnippet = member.thesisTitle ? ` | Thesis: ${member.thesisTitle}` : "";

  return {
    title: `${member.name} (${member.role}) | MSI Lab · University of Chittagong`,
    description: `Academic and research profile of ${member.name}, ${member.role} at MSI Lab, Department of Biochemistry & Molecular Biology, University of Chittagong.${thesisSnippet}`,
  };
}

export default async function TeamMemberDirectPage({ params }: PageProps) {
  const { id } = await params;
  if (["pi", "current", "alumni"].includes(id)) {
    notFound();
  }
  const member = getMemberById(id);

  if (!member) {
    notFound();
  }

  return <MemberProfileView member={member} />;
}
