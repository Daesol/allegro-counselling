import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import traumaCounsellingData from "@/data/services/trauma-counselling.json"

export const metadata: Metadata = {
  title: "Trauma Counselling | Allegro Counselling",
  description:
    "Professional trauma counselling services in Calgary. Our trauma-informed therapists provide specialized support for healing from complex trauma, PTSD, childhood trauma, and more.",
  keywords:
    "trauma counselling, PTSD therapy, trauma therapy Calgary, EMDR, complex trauma, childhood trauma, sexual assault counselling",
}

export default function TraumaCounsellingPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={traumaCounsellingData}
      iconName="Shield"
      iconColor={traumaCounsellingData.iconColor}
      iconBg={traumaCounsellingData.iconBg}
    />
  )
}
