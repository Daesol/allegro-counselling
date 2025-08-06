import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import depressionData from "@/data/services/depression-support.json"

export const metadata: Metadata = {
  title: "Depression Support - Allegro Counselling",
  description:
    "Professional depression support services in Edmonton. Find hope, healing, and practical tools to manage depression with our compassionate therapists.",
}

export default function DepressionSupportPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={depressionData}
      iconName="Heart"
      iconColor={depressionData.iconColor}
      iconBg={depressionData.iconBg}
    />
  )
}
