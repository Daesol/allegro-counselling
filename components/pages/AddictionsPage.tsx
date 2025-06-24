"use client"

import ServicePageTemplate from "./ServicePageTemplate"
import { Heart, Shield, Users, Brain, Target, MessageCircle } from "lucide-react"

const service = {
  title: "Addictions",
  subtitle: "Comprehensive addiction recovery and support services",
  description:
    "Professional addiction counselling to help you overcome substance abuse and behavioral addictions, rebuild relationships, and regain control of your life.",
  fullDescription:
    "Addictions can have profound and far-reaching impacts on individuals, affecting not only their physical health but also their mental well-being, relationships, and overall quality of life. The consequences of addiction extend beyond the individual, impacting families, communities, and society as a whole.",
  icon: Shield,
  iconColor: "#059669",
  iconBg: "#D1FAE5",
  heroImage: "https://images.unsplash.com/photo-1593371137609-7c1335bcf3c5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  benefits: [
    "Evidence-based addiction treatment approaches",
    "Comprehensive assessment and personalized treatment plans",
    "Support for both substance and behavioral addictions",
    "Family therapy and relationship rebuilding",
    "Relapse prevention strategies and ongoing support",
    "Co-occurring mental health disorder treatment",
    "Safe, non-judgmental therapeutic environment",
    "Flexible treatment options to fit your schedule",
  ],
  specificServices: [
    {
      title: "Substance Abuse Recovery",
      description:
        "Specialized treatment for alcohol, drug, and prescription medication dependencies with evidence-based therapeutic approaches.",
      details: [
        "Alcohol addiction recovery",
        "Drug dependency treatment",
        "Prescription medication abuse",
        "Detoxification support and guidance",
        "Withdrawal management strategies",
        "Relapse prevention planning",
      ],
      icon: Shield,
      iconColor: "#DC2626",
      iconBg: "#FEE2E2",
      imageUri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Behavioral Addictions",
      description:
        "Treatment for behavioral addictions including gambling, gaming, shopping, and other compulsive behaviors that impact daily life.",
      details: [
        "Gambling addiction recovery",
        "Gaming and internet addiction",
        "Shopping and spending compulsions",
        "Work addiction and burnout",
        "Food addiction and eating disorders",
        "Behavioral pattern modification",
      ],
      icon: Brain,
      iconColor: "#7C3AED",
      iconBg: "#EDE9FE",
      imageUri: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  whatToExpected: {
    title: "Your Recovery Journey",
    description:
      "Our comprehensive addiction treatment process is designed to support you through every stage of recovery, from initial assessment to long-term maintenance.",
    steps: [
      {
        step: 1,
        title: "Comprehensive Assessment",
        description:
          "We conduct a thorough evaluation of your addiction history, mental health, physical health, and social circumstances to create a personalized treatment plan.",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description:
          "Together, we develop a customized treatment plan that addresses your specific needs, goals, and circumstances, incorporating evidence-based therapeutic approaches.",
      },
      {
        step: 3,
        title: "Active Treatment & Support",
        description:
          "Engage in regular therapy sessions, learn coping strategies, address underlying issues, and build a strong foundation for lasting recovery with ongoing support.",
      },
    ],
  },
  approaches: [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description:
        "Helps identify and change negative thought patterns and behaviors that contribute to addictive behaviors, developing healthier coping mechanisms.",
      icon: Brain,
    },
    {
      name: "Motivational Interviewing",
      description:
        "A collaborative approach that helps you find your own motivation for change and overcome ambivalence about recovery.",
      icon: MessageCircle,
    },
    {
      name: "Dialectical Behavior Therapy (DBT)",
      description:
        "Teaches mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness skills to manage triggers and prevent relapse.",
      icon: Target,
    },
    {
      name: "Family Systems Therapy",
      description:
        "Addresses how addiction affects family dynamics and helps rebuild healthy relationships and communication patterns.",
      icon: Users,
    },
    {
      name: "Relapse Prevention",
      description:
        "Develops comprehensive strategies and skills to identify triggers, manage cravings, and maintain long-term sobriety.",
      icon: Shield,
    },
    {
      name: "Trauma-Informed Care",
      description:
        "Addresses underlying trauma that may contribute to addictive behaviors, providing healing and recovery support.",
      icon: Heart,
    },
  ],
  faqs: [
    {
      question: "How do I know if I have an addiction?",
      answer:
        "Signs of addiction include inability to control use despite negative consequences, tolerance (needing more to achieve the same effect), withdrawal symptoms, neglecting responsibilities, and continued use despite health, relationship, or legal problems. If you're concerned about your substance use or behaviors, it's worth speaking with a professional.",
    },
    {
      question: "What types of addictions do you treat?",
      answer:
        "We treat both substance addictions (alcohol, drugs, prescription medications) and behavioral addictions (gambling, gaming, shopping, work, food). We also address co-occurring mental health disorders that often accompany addiction.",
    },
    {
      question: "Do I need to be completely sober to start treatment?",
      answer:
        "No, you don't need to be completely sober to begin treatment. We meet you where you are in your journey. However, for safety reasons, we may recommend medical supervision for detoxification if you're experiencing withdrawal symptoms.",
    },
    {
      question: "How long does addiction treatment take?",
      answer:
        "Treatment length varies depending on individual needs, type of addiction, and personal circumstances. Some people benefit from short-term intensive treatment, while others require longer-term support. We work with you to determine the most appropriate treatment duration.",
    },
    {
      question: "Will my family be involved in treatment?",
      answer:
        "Family involvement can be very beneficial for recovery, but it's based on your comfort level and circumstances. We offer family therapy sessions and education to help rebuild relationships and create a supportive home environment.",
    },
    {
      question: "What if I relapse during treatment?",
      answer:
        "Relapse is often part of the recovery process and doesn't mean treatment has failed. We view relapse as a learning opportunity and work with you to understand what happened, adjust your treatment plan, and strengthen your recovery strategies.",
    },
    {
      question: "Is addiction treatment confidential?",
      answer:
        "Yes, all addiction treatment is strictly confidential. We follow all privacy laws and professional ethical guidelines. Information is only shared with your written consent or in rare cases where there's imminent danger to yourself or others.",
    },
    {
      question: "Do you work with other healthcare providers?",
      answer:
        "Yes, we often collaborate with physicians, psychiatrists, and other healthcare providers to ensure comprehensive care. This is especially important if you're taking medications or have co-occurring medical conditions.",
    },
  ],
  relatedServices: ["Trauma Counselling", "Depression Support", "Anxiety Support", "Relationship Counselling"],
  therapists: [
    {
      name: "Sasha Sekhon",
      image: "/placeholder.svg?height=120&width=120",
      specialization: "Addiction Counselling & Trauma Therapy",
      experience: "15+ years specializing in addiction recovery and co-occurring disorders",
      imageSrc: "https://allegrocounselling.com/wp-content/uploads/2019/11/Sasha-Sekhon.jpg",
    },
    {
      name: "Tianna Steel",
      image: "/placeholder.svg?height=120&width=120",
      specialization: "Substance Abuse & Behavioral Addictions",
      experience: "8+ years in addiction counselling and relapse prevention",
      imageSrc: "https://allegrocounselling.com/wp-content/uploads/2023/06/Tianna-Steel.jpg",
    },
  ],
  pricing: {
    individual: "$160 per session",
    couples: "$180 per session",
    family: "$200 per session",
  },
}

export default function AddictionsPage() {
  return <ServicePageTemplate service={service} />
}
