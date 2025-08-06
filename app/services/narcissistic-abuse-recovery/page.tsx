import type { Metadata } from "next"
import ServicePageTemplateV2 from "@/components/pages/ServicePageTemplateV2"
import narcissisticAbuseRecoveryData from "@/data/services/narcissistic-abuse-recovery.json"

export const metadata: Metadata = {
  title: "Narcissistic Abuse Recovery | Allegro Counselling",
  description:
    "Specialized support for narcissistic abuse recovery. Trauma-informed care to help you reclaim your self-worth and rebuild a life free from manipulation and control.",
  keywords:
    "narcissistic abuse recovery, gaslighting recovery, emotional abuse therapy, trauma therapy, boundary setting, self-esteem rebuilding",
}

export default function NarcissisticAbuseRecoveryPageRoute() {
  return (
    <ServicePageTemplateV2
      serviceData={narcissisticAbuseRecoveryData}
      iconName="Shield"
      iconColor={narcissisticAbuseRecoveryData.iconColor}
      iconBg={narcissisticAbuseRecoveryData.iconBg}
    />
  )
}
