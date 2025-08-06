import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import addictionsData from "@/data/services/addictions.json"

export const metadata: Metadata = {
  title: "Addictions Counselling | Allegro Counselling",
  description:
    "Professional addictions counselling services in Edmonton. Evidence-based treatment for substance use, behavioral addictions, and recovery support.",
  keywords:
    "addictions counselling, substance abuse therapy, recovery support, behavioral addictions, Edmonton counselling",
}

export default function AddictionsPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={addictionsData}
      iconName="Shield"
      iconColor={addictionsData.iconColor}
      iconBg={addictionsData.iconBg}
    />
  )
}
