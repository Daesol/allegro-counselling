import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import griefAndBereavementData from "@/data/services/grief-and-bereavement.json"

export const metadata: Metadata = {
  title: "Grief and Bereavement | Allegro Counselling",
  description:
    "Compassionate grief and bereavement counselling in Calgary. Our specialized therapists help you navigate loss, process emotions, and find meaning in your healing journey.",
  keywords:
    "grief counselling, bereavement therapy, loss counselling Calgary, grief support, bereavement counselling, complicated grief, anticipatory grief",
}

export default function GriefAndBereavementPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={griefAndBereavementData}
      iconName="Heart"
      iconColor={griefAndBereavementData.iconColor}
      iconBg={griefAndBereavementData.iconBg}
    />
  )
} 