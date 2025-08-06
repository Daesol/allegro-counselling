import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import emdrData from "@/data/services/emdr.json"

export const metadata: Metadata = {
  title: "EMDR Therapy | Allegro Counselling",
  description:
    "Professional EMDR therapy services in Edmonton. Evidence-based treatment for trauma, PTSD, and emotional healing using Eye Movement Desensitization and Reprocessing.",
  keywords:
    "EMDR therapy, trauma therapy, PTSD treatment, Eye Movement Desensitization and Reprocessing, Edmonton counselling",
}

export default function EMDRPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={emdrData}
    />
  )
}
