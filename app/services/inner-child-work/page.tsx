import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import innerChildWorkData from "@/data/services/inner-child-work.json"

export const metadata: Metadata = {
  title: "Inner Child Work | Allegro Counselling",
  description:
    "Professional inner child work therapy in Edmonton. Heal childhood wounds, reconnect with your authentic self, and develop self-compassion through specialized therapeutic approaches.",
  keywords:
    "inner child work, childhood trauma therapy, self-compassion, healing childhood wounds, Edmonton counselling",
}

export default function InnerChildWorkRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={innerChildWorkData}
      iconName="Heart"
      iconColor={innerChildWorkData.iconColor}
      iconBg={innerChildWorkData.iconBg}
    />
  )
}
