import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import anxietySupportData from "@/data/services/anxiety-support.json"

export const metadata: Metadata = {
  title: "Anxiety Support - Allegro Counselling",
  description:
    "Professional anxiety support services in Edmonton. Learn effective strategies to manage stress, anxiety, and panic with our experienced therapists.",
}

export default function AnxietySupportPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={anxietySupportData}
      iconName="Brain"
      iconColor={anxietySupportData.iconColor}
      iconBg={anxietySupportData.iconBg}
    />
  )
}
