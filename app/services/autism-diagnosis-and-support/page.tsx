import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import autismData from "@/data/services/autism-diagnosis-and-support.json"

export const metadata: Metadata = {
  title: "Autism Diagnosis and Support - Allegro Counselling",
  description:
    "Comprehensive autism assessment and support services in Edmonton. Person-centered treatment plans, ABA therapy, sensory integration, and communication support for individuals with autism.",
}

export default function AutismDiagnosisAndSupportPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={autismData}
      iconName="Brain"
      iconColor={autismData.iconColor}
      iconBg={autismData.iconBg}
    />
  )
}
