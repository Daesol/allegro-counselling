import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import adhdData from "@/data/services/adhd-diagnosis-and-support.json"

export const metadata: Metadata = {
  title: "ADHD Diagnosis and Support | Allegro Counselling",
  description:
    "Professional ADHD diagnosis and support services in Edmonton. Comprehensive assessment, treatment, and strategies for managing ADHD symptoms.",
  keywords:
    "ADHD diagnosis, ADHD treatment, ADHD support, attention deficit hyperactivity disorder, Edmonton counselling",
}

export default function ADHDDiagnosisAndSupportPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={adhdData}
      iconName="Brain"
      iconColor={adhdData.iconColor}
      iconBg={adhdData.iconBg}
    />
  )
}
