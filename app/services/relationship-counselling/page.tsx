import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import relationshipCounsellingData from "@/data/services/relationship-counselling.json"

export const metadata: Metadata = {
  title: "Relationship Counselling - Allegro Counselling",
  description:
    "Professional relationship counselling services in Edmonton. Strengthen your connection, rebuild trust, and rediscover love with our experienced therapists.",
}

export default function RelationshipCounsellingPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={relationshipCounsellingData}
      iconName="Heart"
      iconColor={relationshipCounsellingData.iconColor}
      iconBg={relationshipCounsellingData.iconBg}
    />
  )
}
