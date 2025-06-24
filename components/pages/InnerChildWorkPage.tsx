"use client"

import ServicePageTemplate from "@/components/pages/ServicePageTemplate"
import { Heart, Shield, Sparkles, Users, TreePine, Brain, Lightbulb, Target } from "lucide-react"
import teamMembers from "@/data/team-members.json"

export default function InnerChildWorkPage() {
  const service = {
    title: "Inner Child Work",
    subtitle: "Healing Your Past to Transform Your Present",
    description:
      "Reconnect with and nurture your inner child to heal unresolved childhood wounds and create lasting positive change in your adult life.",
    fullDescription:
      "Inner child work is a therapeutic approach that focuses on addressing and healing unresolved issues and emotional wounds from one's childhood. The concept is rooted in the idea that the experiences and emotions we go through as children can have a significant impact on our adult lives.",
    icon: Heart,
    iconColor: "#EC4899",
    iconBg: "#FCE7F3",
    heroImage:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A%3D%3D",
    benefits: [
      "Process and heal unresolved childhood emotions",
      "Break free from negative behavioral patterns",
      "Rebuild self-esteem and self-worth",
      "Improve relationship dynamics and communication",
      "Overcome childhood trauma in a safe environment",
      "Develop healthy coping mechanisms for stress and anxiety",
      "Foster spiritual growth and self-discovery",
      "Create a more authentic and fulfilling life",
    ],
    specificServices: [
      {
        title: "Emotional Healing & Processing",
        description:
          "Identify and process unresolved emotions from childhood including anger, sadness, fear, and shame.",
        details: [
          "Unexpressed childhood emotions",
          "Emotional validation and acknowledgment",
          "Safe expression of suppressed feelings",
          "Healing emotional wounds",
          "Developing emotional intelligence",
        ],
        icon: Heart,
        iconColor: "#EF4444",
        iconBg: "#FEE2E2",
        imageUri:
          "https://images.unsplash.com/photo-1534224563519-fea04849cadf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhhcHB5JTIwY2hpbGR8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Pattern Breaking & Behavioral Change",
        description:
          "Recognize and break free from negative patterns established in childhood to develop healthier coping mechanisms.",
        details: [
          "Identifying destructive behavioral patterns",
          "Understanding pattern origins",
          "Developing new healthy responses",
          "Creating positive coping strategies",
          "Building resilience and adaptability",
        ],
        icon: Target,
        iconColor: "#8B5CF6",
        iconBg: "#EDE9FE",
        imageUri:
          "https://images.unsplash.com/photo-1455642305367-68834a1da7ab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5uZXIlMjBjaGlsZHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Self-Esteem & Self-Worth Rebuilding",
        description:
          "Rebuild and strengthen self-esteem by offering compassion and nurturing to your wounded inner child.",
        details: [
          "Healing negative self-perception",
          "Building self-compassion",
          "Developing healthy self-talk",
          "Strengthening personal boundaries",
          "Cultivating self-acceptance",
        ],
        icon: Shield,
        iconColor: "#10B981",
        iconBg: "#D1FAE5",
        imageUri:
          "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBjaGlsZHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Relationship Healing",
        description:
          "Address root causes of relationship difficulties and foster healthier communication and connection patterns.",
        details: [
          "Understanding relationship patterns",
          "Healing attachment wounds",
          "Improving communication skills",
          "Building trust and intimacy",
          "Creating healthy boundaries",
        ],
        icon: Users,
        iconColor: "#F59E0B",
        iconBg: "#FEF3C7",
        imageUri:
          "https://images.unsplash.com/photo-1614710791641-4cd7a5c855f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhcHB5JTIwY2hpbGR8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Trauma Recovery",
        description:
          "Process traumatic childhood experiences in a safe therapeutic context to reduce their lasting impact.",
        details: [
          "Trauma-informed healing approaches",
          "Safe processing of traumatic memories",
          "EMDR and somatic techniques",
          "Building post-traumatic resilience",
          "Reclaiming personal power",
        ],
        icon: TreePine,
        iconColor: "#059669",
        iconBg: "#ECFDF5",
        imageUri:
          "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhcHB5JTIwY2hpbGR8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Stress & Anxiety Management",
        description:
          "Develop tools for managing stress and anxiety by addressing underlying emotional sources and building resilience.",
        details: [
          "Identifying anxiety triggers",
          "Self-soothing techniques",
          "Mindfulness and grounding practices",
          "Stress reduction strategies",
          "Building emotional regulation skills",
        ],
        icon: Brain,
        iconColor: "#3B82F6",
        iconBg: "#DBEAFE",
        imageUri:
          "https://images.unsplash.com/photo-1531325082793-ca7c9db6a4c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhcHB5JTIwY2hpbGR8ZW58MHx8MHx8fDA%3D",
      },
    ],
    whatToExpected: {
      title: "Your Inner Child Healing Journey",
      description:
        "Our compassionate approach guides you through a transformative process of reconnecting with and healing your inner child.",
      steps: [
        {
          step: 1,
          title: "Inner Child Discovery",
          description:
            "Explore and identify your inner child's needs, wounds, and unexpressed emotions in a safe, supportive environment.",
        },
        {
          step: 2,
          title: "Healing & Integration",
          description:
            "Process childhood experiences and emotions while developing new, healthier patterns of thinking and behaving.",
        },
        {
          step: 3,
          title: "Empowerment & Growth",
          description:
            "Integrate your healed inner child into your adult life, creating lasting positive change and authentic self-expression.",
        },
      ],
    },
    approaches: [
      {
        name: "Gestalt Therapy",
        description:
          "Focus on present-moment awareness and integration of past experiences to heal inner child wounds.",
        icon: Lightbulb,
      },
      {
        name: "Somatic Experiencing",
        description: "Address trauma stored in the body through gentle, body-based healing techniques.",
        icon: Heart,
      },
      {
        name: "Narrative Therapy",
        description:
          "Rewrite your life story by separating yourself from childhood problems and reclaiming your identity.",
        icon: Brain,
      },
      {
        name: "Art & Play Therapy",
        description: "Use creative expression and play to access and heal childhood experiences in a natural way.",
        icon: Sparkles,
      },
      {
        name: "Mindfulness-Based Therapy",
        description: "Develop present-moment awareness and self-compassion to nurture your inner child.",
        icon: TreePine,
      },
      {
        name: "Attachment-Based Therapy",
        description: "Heal early attachment wounds and develop secure, healthy relationship patterns.",
        icon: Users,
      },
    ],
    faqs: [
      {
        question: "What exactly is inner child work and how does it help?",
        answer:
          "Inner child work is a therapeutic approach that helps you reconnect with and heal the younger, more vulnerable aspects of yourself. It addresses unresolved childhood emotions, traumas, and patterns that continue to impact your adult life. By nurturing your inner child, you can heal old wounds, break negative patterns, and create more authentic, fulfilling relationships and life experiences.",
      },
      {
        question: "Do I need to have experienced trauma to benefit from inner child work?",
        answer:
          "No, you don't need to have experienced severe trauma to benefit from inner child work. Everyone has an inner child that may carry unresolved emotions, unmet needs, or limiting beliefs from childhood. Even seemingly minor childhood experiences can impact our adult lives. Inner child work can help anyone seeking greater self-understanding, emotional healing, and personal growth.",
      },
      {
        question: "How long does inner child work typically take?",
        answer:
          "The duration of inner child work varies greatly depending on individual needs, the depth of healing required, and personal goals. Some people experience significant shifts in a few months, while others may engage in this work for a year or more. The process is highly individual, and we work at your pace to ensure safe, sustainable healing.",
      },
      {
        question: "Is inner child work emotionally difficult or overwhelming?",
        answer:
          "Inner child work can bring up strong emotions as you process childhood experiences, but it's conducted in a safe, supportive environment with proper therapeutic guidance. We use gentle, trauma-informed approaches and ensure you have adequate coping skills before exploring deeper material. The goal is healing, not re-traumatization.",
      },
      {
        question: "What techniques are used in inner child work?",
        answer:
          "We use various approaches including visualization, dialogue with your inner child, creative expression, somatic techniques, mindfulness practices, and gentle trauma processing methods. The specific techniques used depend on your comfort level, preferences, and therapeutic needs. We tailor the approach to what works best for you.",
      },
      {
        question: "Can inner child work help with current relationship problems?",
        answer:
          "Yes, inner child work can significantly improve current relationships. Many relationship patterns stem from childhood experiences and attachment styles. By healing your inner child, you can develop healthier communication patterns, stronger boundaries, increased self-worth, and more secure attachment styles, all of which enhance your relationships.",
      },
      {
        question: "Will I need to confront my parents or family members?",
        answer:
          "Inner child work focuses on your internal healing process, not on confronting family members. While understanding family dynamics is important, the primary goal is healing your relationship with yourself and developing healthier patterns. Any decisions about family relationships are entirely yours and made when you feel ready and empowered.",
      },
      {
        question: "How do I know if I'm ready for inner child work?",
        answer:
          "You may be ready for inner child work if you're experiencing recurring relationship patterns, emotional reactions that seem disproportionate to current situations, feelings of emptiness or disconnection, or a sense that childhood experiences are impacting your adult life. A willingness to explore your inner world with curiosity and compassion is the most important prerequisite.",
      },
    ],
    relatedServices: ["Trauma Counselling", "Anxiety Support", "Depression Support", "Relationship Counselling"],
    therapists: [
      {
        name: teamMembers.find((member) => member.name === "Sasha Sekhon")?.name || "Sasha Sekhon",
        image: teamMembers.find((member) => member.name === "Sasha Sekhon")?.image || "/placeholder.svg",
        specialization: "Inner Child Work & Trauma Recovery",
        experience: "15+ years specializing in attachment healing and inner child work",
        imageSrc: teamMembers.find((member) => member.name === "Sasha Sekhon")?.imageSrc,
      },
      {
        name: teamMembers.find((member) => member.name === "Tianna Steel")?.name || "Tianna Steel",
        image: teamMembers.find((member) => member.name === "Tianna Steel")?.image || "/placeholder.svg",
        specialization: "Childhood Trauma & Emotional Healing",
        experience: "10+ years in trauma-informed therapy and inner child healing",
        imageSrc: teamMembers.find((member) => member.name === "Tianna Steel")?.imageSrc,
      },
      {
        name: teamMembers.find((member) => member.name === "Ava Mowbray")?.name || "Ava Mowbray",
        image: teamMembers.find((member) => member.name === "Ava Mowbray")?.image || "/placeholder.svg",
        specialization: "Attachment & Relationship Healing",
        experience: "8+ years in attachment-based therapy and inner child work",
        imageSrc: teamMembers.find((member) => member.name === "Ava Mowbray")?.imageSrc,
      },
    ],
    pricing: {
      individual: "$150 per session",
      couples: "$180 per session",
      family: "$200 per session",
    },
  }

  return <ServicePageTemplate service={service} />
}
