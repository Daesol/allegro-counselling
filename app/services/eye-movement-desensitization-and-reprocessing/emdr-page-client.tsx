"use client"

import dynamic from "next/dynamic"
import type { ComponentProps } from "react"

// Dynamically import the heavy EMDR page; disable SSR only here (client component)
const EMDRPage = dynamic(() => import("@/components/pages/EMDRPage"), {
  ssr: false,
  loading: () => <p className="text-center py-12">Loading EMDR content…</p>,
})

export default function EMDRPageClient(props: ComponentProps<typeof EMDRPage>) {
  return <EMDRPage {...props} />
}
