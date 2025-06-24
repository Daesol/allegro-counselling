"use client"
import ServicePageTemplate from "./ServicePageTemplate"
import teamMembers from "@/data/team-members.json"
import {
  HeartOff,
  EyeOff,
  BrainCog,
  ShieldCheck,
  Sparkles,
  Brain,
  RefreshCcw,
  Baby,
  Activity,
  UserCircle2,
  Sun,
} from "lucide-react"

const narcissisticAbuseRecoveryService = {
  /* ───────── Hero / Meta ───────── */
  title: "Narcissistic Abuse Recovery",
  subtitle: "Reclaim Your Self-Worth and Rebuild Your Life",
  description:
    "Recovering from narcissistic abuse is a courageous journey towards reclaiming your sense of self-worth and rebuilding a life free from manipulation and control. At Allegro Counselling, we understand the complexities of narcissistic abuse and offer specialized support to guide you through healing.",
  heroImage:
    "https://images.unsplash.com/photo-1601802455383-a56d602d43c0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxoYXBweXxlbnwwfHwwfHx8MA%3D%3D",

  /* icon used throughout the page */
  // lucide-react has a HeartOff icon – perfect here
  icon: HeartOff,
  iconColor: "#D95E61",
  iconBg: "rgba(217,94,97,0.15)",

  /* ───────── Quick-hit benefits (must exist for template) ───────── */
  benefits: [
    "Trauma-informed, survivor-centred therapy",
    "Rebuild self-esteem & personal identity",
    "Learn and enforce healthy boundaries",
    "Evidence-based, holistic healing approaches",
  ],

  /* ───────── Full Description (unchanged) ───────── */
  fullDescription: `
  <div class="space-y-8">
    <div>
      <h3 class="text-2xl font-bold text-gray-900 mb-4">What is Narcissistic Abuse?</h3>
      <p class="text-gray-700 leading-relaxed">
        Narcissistic abuse is a form of emotional and psychological mistreatment inflicted by individuals with narcissistic traits. It often involves manipulation, gaslighting, and a pervasive sense of control, leaving survivors with lasting emotional scars.
      </p>
    </div>

    <div>
      <h3 class="text-2xl font-bold text-gray-900 mb-6">Our Approach to Recovery</h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
          <h4 class="text-lg font-semibold text-blue-900 mb-3">Trauma-Informed Care</h4>
          <p class="text-blue-800">Our therapists provide trauma-informed support, acknowledging the impact of narcissistic abuse on mental and emotional well-being.</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
          <h4 class="text-lg font-semibold text-green-900 mb-3">Empowerment</h4>
          <p class="text-green-800">We focus on rebuilding self-esteem, empowering you to set boundaries, and fostering a sense of agency in your life.</p>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100">
          <h4 class="text-lg font-semibold text-purple-900 mb-3">Validation and Understanding</h4>
          <p class="text-purple-800">You are not alone. Our team offers a safe, non-judgmental space where your experiences are heard, understood, and validated.</p>
        </div>
        <div class="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
          <h4 class="text-lg font-semibold text-orange-900 mb-3">Holistic Healing</h4>
          <p class="text-orange-800">Recovery involves addressing emotional, mental, and physical well-being. Our holistic approach encompasses various therapeutic techniques tailored to your unique needs.</p>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-200">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">You Deserve Healing</h3>
      <p class="text-gray-700 leading-relaxed mb-4">
        Recovery from narcissistic abuse is a transformative process, and you deserve to reclaim a life filled with authenticity, self-love, and healthy connections. Allegro Counselling is here to support you on your journey to healing.
      </p>
      <p class="text-gray-700 leading-relaxed">
        Contact us today to schedule a confidential appointment. Your healing matters, and support is here for you. 🌷
      </p>
    </div>
  </div>
`,

  /* ───────── Specific Services ───────── */
  //  The template expects specificServices with icon / colour / details arrays.
  specificServices: [
    {
      title: "Gaslighting Recovery",
      description:
        "Specialized support to help you recognise and recover from gaslighting tactics, rebuilding your trust in your own perceptions and reality.",
      details: ["Reality validation", "Cognitive restructuring", "Self-trust rebuilding", "Memory processing"],
      icon: EyeOff,
      iconColor: "#6366F1",
      iconBg: "rgba(99,102,241,0.12)",
      imageUri:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Emotional Manipulation Recovery",
      description:
        "Therapy focused on identifying manipulation tactics, understanding their impact, and developing healthy emotional responses and boundaries.",
      details: [
        "Recognise manipulation",
        "Emotion regulation",
        "Healthy relationship patterns",
        "Self-worth rebuilding",
      ],
      icon: BrainCog,
      iconColor: "#10B981",
      iconBg: "rgba(16,185,129,0.12)",
      imageUri:
        "https://images.unsplash.com/photo-1528994618239-4d83bbdb7a0f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Boundary Setting & Enforcement",
      description:
        "Learn to establish, communicate, and maintain healthy boundaries to protect your emotional and psychological well-being.",
      details: ["Boundary identification", "Assertiveness training", "Conflict resolution", "Self-advocacy skills"],
      icon: ShieldCheck,
      iconColor: "#F59E0B",
      iconBg: "rgba(245,158,11,0.12)",
      imageUri:
        "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Self-Esteem Rebuilding",
      description:
        "Comprehensive therapy to rebuild your sense of self-worth, confidence, and identity after narcissistic abuse.",
      details: ["Self-compassion practices", "Positive self-talk", "Identity reconstruction", "Confidence building"],
      icon: Sparkles,
      iconColor: "#EC4899",
      iconBg: "rgba(236,72,153,0.12)",
      imageUri:
        "https://images.unsplash.com/photo-1552083375-1447ce886485?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
  ],

  /* ───────── What to Expect ───────── */
  whatToExpected: {
    title: "Your Healing Journey",
    description: "Our structured process guides you from education and awareness to empowered living.",
    steps: [
      {
        step: 1,
        title: "Education & Awareness",
        description: "Understand the dynamics of narcissistic abuse and begin reclaiming your narrative.",
      },
      {
        step: 2,
        title: "Establishing Boundaries",
        description: "Learn to set and enforce healthy boundaries that safeguard your well-being.",
      },
      {
        step: 3,
        title: "Self-Care & Therapeutic Support",
        description: "Engage in self-care routines and evidence-based therapy to foster lasting recovery.",
      },
    ],
  },

  /* ───────── Approaches (add icons) ───────── */
  approaches: [
    {
      name: "Trauma-Informed CBT",
      description: "Adapted CBT targeting negative thought patterns formed through abuse.",
      icon: Brain,
    },
    {
      name: "EMDR",
      description: "Eye Movement Desensitisation & Reprocessing to process traumatic memories.",
      icon: RefreshCcw,
    },
    {
      name: "Inner Child Work",
      description: "Heal childhood wounds and reconnect with your authentic self.",
      icon: Baby,
    },
    {
      name: "Somatic Approaches",
      description: "Body-based therapies to release trauma stored in the nervous system.",
      icon: Activity,
    },
    {
      name: "Psychodynamic Therapy",
      description: "Explore unconscious patterns and early relationships underlying vulnerability.",
      icon: UserCircle2,
    },
    {
      name: "Mindfulness-Based Therapy",
      description: "Develop present-moment awareness and self-compassion.",
      icon: Sun,
    },
  ],

  /* ───────── FAQs (unchanged) ───────── */
  faqs: [
    {
      question: "How do I know if I've experienced narcissistic abuse?",
      answer:
        "Narcissistic abuse often involves patterns of manipulation, gaslighting, emotional invalidation, control, and exploitation. Common signs include feeling confused about reality, walking on eggshells, loss of self-confidence, isolation from support systems, and feeling responsible for the abuser's emotions. A qualified therapist can help you identify these patterns.",
    },
    {
      question: "Is it normal to still have feelings for my narcissistic abuser?",
      answer:
        "Yes, this is completely normal and part of the trauma bonding that occurs in abusive relationships. Narcissistic abuse creates powerful psychological bonds through intermittent reinforcement. These feelings don't invalidate your experience or mean you should return to the relationship. Therapy can help you understand and work through these complex emotions.",
    },
    {
      question: "How long does recovery from narcissistic abuse take?",
      answer:
        "Recovery is a highly individual process that depends on factors like the duration and severity of abuse, your support system, and personal resilience. While some people notice improvements within months, deeper healing often takes 1-3 years or more. Remember that healing isn't linear, and setbacks are normal parts of the process.",
    },
    {
      question: "Will I ever be able to trust again after narcissistic abuse?",
      answer:
        "Yes, with proper support and healing, you can learn to trust again. Recovery involves rebuilding trust in yourself first, then gradually learning to trust others. This process takes time and patience, but many survivors go on to have healthy, fulfilling relationships. Therapy can help you develop discernment and healthy relationship skills.",
    },
    {
      question: "Should I go no contact with my narcissistic abuser?",
      answer:
        "No contact is often recommended when possible, as it allows for healing without continued manipulation and abuse. However, this isn't always feasible, especially with co-parenting situations or family relationships. We can help you develop strategies for your specific situation, whether that's no contact, low contact, or structured contact with strong boundaries.",
    },
    {
      question: "Can narcissistic abusers change?",
      answer:
        "While personality change is theoretically possible, it's extremely rare for individuals with narcissistic traits to genuinely change, as it requires acknowledging their behavior and committing to intensive, long-term therapy. Most importantly, it's not your responsibility to wait for or facilitate their change. Focus on your own healing and protection.",
    },
  ],

  /* ───────── Pricing (kept) ───────── */
  pricing: {
    individual: "$150-250 / 50-min session",
  },

  /* ───────── Therapists (pulled from JSON) ───────── */
  therapists: [
    {
      ...teamMembers.find((m) => m.name === "Sasha Campbell"),
    },
    {
      ...teamMembers.find((m) => m.name === "Tianna Steel"),
    },
  ],

  /* ───────── Related Services (optional) ───────── */
  relatedServices: ["Trauma Counselling", "Relationship Counselling"],
}

export default function NarcissisticAbuseRecoveryPage() {
  return <ServicePageTemplate service={narcissisticAbuseRecoveryService} />
}
