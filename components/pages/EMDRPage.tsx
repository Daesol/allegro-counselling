"use client"
import ServicePageTemplate from "@/components/pages/ServicePageTemplate"
import { Eye, Shield, Brain, Heart, Zap, Target, Users, Activity } from "lucide-react"
import teamMembers from "@/data/team-members.json"

// Tailwind colours converted to HEX to satisfy `style={{ backgroundColor }}` requirements
const colours = {
  red: { bg: "#FEE2E2", fg: "#DC2626" },
  blue: { bg: "#DBEAFE", fg: "#2563EB" },
  purple: { bg: "#EDE9FE", fg: "#7C3AED" },
  green: { bg: "#DCFCE7", fg: "#16A34A" },
  orange: { bg: "#FFEDD5", fg: "#EA580C" },
  yellow: { bg: "#FEF9C3", fg: "#CA8A04" },
}

// ----------  Service Object  ----------
const service = {
  /* --- Hero / Overview --- */
  title: "EMDR Therapy",
  subtitle: "Eye Movement Desensitization & Reprocessing",
  description:
    "EMDR is an evidence-based psychotherapy that helps people heal from trauma and distressing life experiences using bilateral stimulation (eye movements, taps, or sounds).",
  fullDescription:
    "EMDR stands for Eye Movement Desensitization and Reprocessing. It's a psychotherapy approach that was developed by Francine Shapiro in the late 1980s. It's primarily used to help individuals who have experienced trauma or distressing life events. During an EMDR session, the therapist guides the client to recall distressing memories while simultaneously engaging in bilateral stimulation, which can involve following the therapist's hand movements with their eyes, listening to alternating sounds, or experiencing tactile sensations such as tapping. The bilateral stimulation is believed to facilitate the processing of traumatic memories, leading to desensitization and reprocessing, ultimately reducing the emotional distress associated with those memories. EMDR is widely used and has been shown to be effective in treating conditions such as post-traumatic stress disorder (PTSD), anxiety, depression, and other trauma-related disorders. However, like any therapeutic approach, its effectiveness can vary depending on the individual and the nature of their specific issues.",
  heroImage: "/EMDR_.jpeg",
  icon: Eye,
  iconColor: colours.blue.fg,
  iconBg: colours.blue.bg,

  /* --- Benefits (4+ items) --- */
  benefits: [
    "Rapid processing of traumatic memories",
    "Reduces emotional distress & triggers",
    "Proven effective for PTSD, anxiety & depression",
    "Non-invasive & client-centred approach",
    "Improves emotional regulation & resilience",
  ],

  /* --- Specialised EMDR Services --- */
  specificServices: [
    {
      title: "PTSD Treatment",
      description: "8-phase EMDR protocol targeting single-incident or combat-related PTSD.",
      details: ["Trauma history mapping", "Targeted memory processing", "Relapse-prevention plan"],
      imageUri:
        "https://images.unsplash.com/photo-1541089404510-5c9a779841fc?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      icon: Shield,
      iconColor: colours.red.fg,
      iconBg: colours.red.bg,
    },
    {
      title: "Anxiety & Panic Disorders",
      description: "Address underlying traumatic memories that drive anxiety, phobias & panic.",
      details: ["Somatic & cognitive symptom relief", "Resource installation for calm", "Future-template exercises"],
      imageUri:
        "https://images.unsplash.com/photo-1619584475565-9091921f1489?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      icon: Heart,
      iconColor: colours.blue.fg,
      iconBg: colours.blue.bg,
    },
    {
      title: "Depression & Mood Disorders",
      description: "Process negative beliefs & experiences that maintain depressive symptoms.",
      details: ["Identify depressive cognitions", "Desensitise shame & hopelessness", "Install adaptive self-beliefs"],
      imageUri:
        "https://images.unsplash.com/photo-1588979355313-6711a095465f?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      icon: Brain,
      iconColor: colours.purple.fg,
      iconBg: colours.purple.bg,
    },
    {
      title: "Childhood Trauma Processing",
      description: "Gentle, developmentally-informed EMDR for adverse childhood experiences.",
      details: ["Attachment-focused protocols", "Inner-child resourcing", "Caregiver-involvement options"],
      imageUri:
        "https://plus.unsplash.com/premium_photo-1669138140804-a593bab110d2?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      icon: Users,
      iconColor: colours.green.fg,
      iconBg: colours.green.bg,
    },
    {
      title: "Complex Trauma (C-PTSD)",
      description: "Phase-oriented EMDR addressing prolonged, repeated traumatic events.",
      details: ["Stabilisation & skills building", "Sequential memory processing", "Identity & meaning integration"],
      imageUri:
        "https://images.unsplash.com/photo-1619010539735-92149716db70?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      icon: Target,
      iconColor: colours.orange.fg,
      iconBg: colours.orange.bg,
    },
    {
      title: "Phobias & Specific Fears",
      description: "Brief EMDR interventions for phobias (flying, needles, animals, etc.).",
      details: ["Trigger hierarchy creation", "Rapid desensitisation sets", "Future success visualisation"],
      imageUri:
        "https://images.unsplash.com/photo-1739525346229-6e122171f68d?w=400&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      icon: Zap,
      iconColor: colours.yellow.fg,
      iconBg: colours.yellow.bg,
    },
  ],

  /* --- What to Expect --- */
  whatToExpected: {
    title: "Our 3-Step EMDR Journey",
    description: "Each EMDR programme follows an 8-phase protocol grouped here into three easy-to-understand stages.",
    steps: [
      {
        step: 1,
        title: "History & Preparation",
        description: "We gather a thorough history, build coping resources, and ensure you feel safe and ready.",
      },
      {
        step: 2,
        title: "Assessment & Targeting",
        description: "Together we select specific memories, triggers, or beliefs to process and set baseline measures.",
      },
      {
        step: 3,
        title: "Desensitisation & Reprocessing",
        description:
          "Using bilateral stimulation, we process targeted memories until distress subsides and positive beliefs take hold.",
      },
    ],
  },

  /* --- Therapeutic Approaches --- */
  approaches: [
    {
      name: "Standard EMDR Protocol",
      description: "The original 8-phase model created by Francine Shapiro for comprehensive trauma processing.",
      icon: Eye,
    },
    {
      name: "Resource Installation",
      description: "Strength-based EMDR phase building internal calm & resilience before trauma work.",
      icon: Shield,
    },
    {
      name: "Recent Traumatic Event Protocol",
      description: "Early-intervention EMDR reducing acute distress & preventing PTSD development.",
      icon: Activity,
    },
    {
      name: "Cognitive Interweave",
      description: "Strategic therapist prompts that unblock stuck processing with adaptive insights.",
      icon: Brain,
    },
    {
      name: "Group EMDR",
      description: "Modified protocol for community incidents or post-disaster response delivered in groups.",
      icon: Users,
    },
    {
      name: "EMDR-IGTP",
      description: "Integrative Group Treatment Protocol blending EMDR with group therapy & art expression.",
      icon: Target,
    },
  ],

  /* --- FAQs --- */
  faqs: [
    {
      question: "How does EMDR work?",
      answer:
        "EMDR pairs bilateral stimulation with focused attention on traumatic memories. This stimulates the brain's adaptive processing system, allowing disturbing experiences to be stored like ordinary memories—no longer triggering intense distress.",
    },
    {
      question: "Is EMDR evidence-based?",
      answer:
        "Yes. 30+ randomised controlled trials show EMDR is effective for PTSD. It is endorsed by the WHO, APA, and the Department of Veterans Affairs.",
    },
    {
      question: "Will I have to describe my trauma in detail?",
      answer:
        "No. You need only hold the memory in mind. EMDR is less reliant on detailed verbal recounting than traditional talk therapies.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "Single-incident trauma may resolve in 6-12 sessions. Complex trauma typically requires longer, phase-oriented work. Your therapist will tailor a plan after assessment.",
    },
    {
      question: "Are there side effects?",
      answer:
        "Occasionally clients experience vivid dreams or temporary emotional waves between sessions. Your therapist will equip you with grounding skills to manage this.",
    },
    {
      question: "Can EMDR treat anxiety or depression?",
      answer:
        "Yes. EMDR is increasingly used for anxiety disorders, depression, phobias, grief, and performance issues where past experiences drive current distress.",
    },
  ],

  /* --- Therapist Team (first 3 trauma / EMDR specialists) --- */
  therapists: teamMembers
    .filter((m) => m.specializations?.some((s: string) => s.toLowerCase().includes("trauma")))
    .slice(0, 3)
    .map((m) => ({
      name: m.name,
      image: m.image,
      specialization: "Trauma & EMDR Specialist",
      experience: m.experience ?? "Experienced in EMDR & trauma therapy",
    })),

  /* --- Simple Pricing (not rendered but kept for future use) --- */
  pricing: {
    individual: "$180 / 50-min session",
  },

  relatedServices: ["Trauma Counselling", "Inner Child Work", "Anxiety Support"],
}

export default function EMDRPage() {
  return <ServicePageTemplate service={service} />
}
