import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import emdrData from "@/data/services/emdr.json"

export const metadata: Metadata = {
  title: "Eye Movement Desensitization and Reprocessing (EMDR) | Allegro Counselling",
  description:
    "Professional EMDR therapy services in Edmonton. Evidence-based treatment for trauma, PTSD, and emotional healing using Eye Movement Desensitization and Reprocessing.",
  keywords:
    "EMDR therapy, Eye Movement Desensitization and Reprocessing, trauma therapy, PTSD treatment, Edmonton counselling",
}

export default function EMDRPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={emdrData}
      iconName="Brain"
      iconColor={emdrData.iconColor}
      iconBg={emdrData.iconBg}
    />
  )
}
