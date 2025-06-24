"use client"

import ServicePageTemplate from "./ServicePageTemplate"
import {
  Shield,
  Heart,
  Brain,
  Users,
  Eye,
  Lightbulb,
  Target,
  Compass,
  Zap,
  TreePine,
  Home,
  UserCheck,
} from "lucide-react"

const traumaCounsellingService = {
  title: "Trauma Counselling",
  subtitle: "Healing from trauma with compassionate, evidence-based support",
  description: "Professional trauma counselling services to help you navigate the path towards healing and resilience.",
  fullDescription: `Trauma can have a profound and lasting impact on one's mental and emotional well-being. At Allegro Counselling, our trauma-informed therapists are dedicated to providing empathetic and specialized support to help individuals navigate the path towards healing and resilience.

Understanding Trauma: Trauma is an emotional response to a distressing event, often leaving individuals feeling overwhelmed and helpless. Whether stemming from a single incident or prolonged experiences, trauma can affect various aspects of life, hindering one's ability to cope and thrive.

Our Trauma Counselling Approach includes Trauma-Informed Care where our therapists approach counseling with a deep understanding of trauma's effects, creating a safe and supportive environment. Through Collaborative Exploration, we work together to explore the impact of trauma on thoughts, emotions, and behaviors, fostering a sense of control and empowerment. We believe in Holistic Healing, addressing the interconnected aspects of mental, emotional, and physical well-being to promote comprehensive healing in a Safe and Confidential Space where your experiences are met with respect and non-judgment.

If you have experienced trauma, seeking support is a courageous step towards reclaiming your sense of self and well-being. Allegro Counselling is here to walk with you on your journey to healing. Your healing matters, and support is available. Together, we can rediscover resilience and build a foundation for a brighter future.`,
  icon: Shield,
  iconColor: "#7C3AED",
  iconBg: "#EDE9FE",
  heroImage:
    "https://images.unsplash.com/photo-1539141086657-b9cc8d93ad3c?q=80&w=2154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  benefits: [
    "Trauma-informed care approach",
    "Evidence-based therapeutic methods",
    "Safe and confidential environment",
    "Specialized EMDR therapy available",
    "Holistic healing approach",
    "Experienced trauma therapists",
  ],
  specificServices: [
    {
      title: "Complex Trauma",
      description: "Specialized support for prolonged exposure to traumatic events, often interpersonal in nature.",
      details: [
        "Childhood abuse and neglect recovery",
        "Interpersonal trauma healing",
        "Long-term trauma effects",
        "Attachment and relationship issues",
        "Identity and self-worth rebuilding",
      ],
      icon: Brain,
      iconColor: "#DC2626",
      iconBg: "#FEE2E2",
      imageUri:
        "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVhY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Single Incident Trauma",
      description: "Support for trauma caused by specific, isolated traumatic events.",
      details: [
        "Car accident trauma",
        "Natural disaster recovery",
        "Assault and violence",
        "Sudden loss or shock",
        "Life-threatening events",
      ],
      icon: Zap,
      iconColor: "#EA580C",
      iconBg: "#FED7AA",
      imageUri:
        "https://images.unsplash.com/photo-1526724038726-3007ffb8025f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Childhood Trauma",
      description: "Healing from adverse childhood experiences including abuse, neglect, or witnessing violence.",
      details: [
        "Physical and emotional abuse",
        "Childhood neglect",
        "Witnessing domestic violence",
        "Family dysfunction",
        "Developmental trauma",
      ],
      icon: Heart,
      iconColor: "#DB2777",
      iconBg: "#FCE7F3",
      imageUri:
        "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sexual Assault and Abuse",
      description: "Compassionate support for trauma from non-consensual sexual experiences.",
      details: [
        "Sexual assault recovery",
        "Childhood sexual abuse",
        "Sexual harassment trauma",
        "Intimate partner sexual violence",
        "Body image and intimacy issues",
      ],
      icon: Shield,
      iconColor: "#7C3AED",
      iconBg: "#EDE9FE",
      imageUri:
        "https://images.unsplash.com/photo-1553114836-026cecec9778?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Domestic Violence",
      description: "Support for trauma from intimate partner relationships involving abuse.",
      details: [
        "Physical abuse recovery",
        "Emotional and psychological abuse",
        "Financial abuse trauma",
        "Coercive control",
        "Safety planning and healing",
      ],
      icon: Home,
      iconColor: "#059669",
      iconBg: "#D1FAE5",
      imageUri:
        "https://images.unsplash.com/photo-1559666126-84f389727b9a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Military Trauma (PTSD)",
      description: "Specialized support for trauma resulting from military service and combat exposure.",
      details: [
        "Combat trauma",
        "Military sexual trauma",
        "Loss of comrades",
        "Moral injury",
        "Transition to civilian life",
      ],
      icon: Target,
      iconColor: "#0891B2",
      iconBg: "#CFFAFE",
      imageUri:
        "https://images.unsplash.com/photo-1508108712903-49b7ef9b1df8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Accidents and Injuries",
      description: "Recovery from trauma arising from accidents, injuries, or life-threatening events.",
      details: [
        "Motor vehicle accidents",
        "Workplace injuries",
        "Sports-related trauma",
        "Medical emergencies",
        "Near-death experiences",
      ],
      icon: Compass,
      iconColor: "#B45309",
      iconBg: "#FEF3C7",
      imageUri:
        "https://images.unsplash.com/photo-1528184039930-bd03972bd974?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Medical Trauma",
      description: "Support for trauma related to medical procedures, diagnoses, or chronic illness.",
      details: [
        "Invasive medical procedures",
        "Life-threatening diagnoses",
        "Chronic illness adjustment",
        "Medical PTSD",
        "Healthcare-related anxiety",
      ],
      icon: UserCheck,
      iconColor: "#7C2D12",
      iconBg: "#FED7AA",
      imageUri:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Natural Disasters",
      description: "Recovery support for trauma from exposure to natural disasters and environmental events.",
      details: [
        "Earthquake trauma",
        "Hurricane and flood recovery",
        "Wildfire trauma",
        "Tornado and severe weather",
        "Environmental displacement",
      ],
      icon: TreePine,
      iconColor: "#166534",
      iconBg: "#DCFCE7",
      imageUri:
        "https://images.unsplash.com/photo-1493815793585-d94ccbc86df8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Cultural or Systemic Trauma",
      description: "Healing from trauma due to discrimination, oppression, or collective historical events.",
      details: [
        "Racial and ethnic discrimination",
        "Religious persecution",
        "Historical trauma",
        "Systemic oppression",
        "Intergenerational trauma",
      ],
      icon: Users,
      iconColor: "#9333EA",
      iconBg: "#F3E8FF",
      imageUri:
        "https://images.unsplash.com/photo-1471180625745-944903837c22?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Loss and Grief",
      description: "Support for trauma associated with death of loved ones and significant losses.",
      details: [
        "Sudden or unexpected death",
        "Complicated grief",
        "Traumatic loss",
        "Multiple losses",
        "Bereavement trauma",
      ],
      icon: Heart,
      iconColor: "#BE185D",
      iconBg: "#FCE7F3",
      imageUri:
        "https://images.unsplash.com/photo-1515339760107-1952b7a08454?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Witnessing Trauma",
      description: "Support for trauma from witnessing traumatic events happening to others.",
      details: [
        "Witnessing accidents",
        "Observing violence",
        "Secondary trauma",
        "Vicarious trauma",
        "First responder trauma",
      ],
      icon: Eye,
      iconColor: "#0F766E",
      iconBg: "#CCFBF1",
      imageUri:
        "https://images.unsplash.com/photo-1437209484568-e63b90a34f8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    },
  ],
  whatToExpected: {
    title: "Your Trauma Healing Journey",
    description:
      "Our trauma-informed approach ensures you feel safe, supported, and empowered throughout your healing process.",
    steps: [
      {
        step: 1,
        title: "Safety & Stabilization",
        description:
          "We begin by establishing safety, building coping skills, and stabilizing symptoms to create a foundation for healing.",
      },
      {
        step: 2,
        title: "Processing & Integration",
        description:
          "Using evidence-based approaches like EMDR, we help you process traumatic memories and integrate your experiences.",
      },
      {
        step: 3,
        title: "Reconnection & Growth",
        description:
          "Focus on rebuilding relationships, reconnecting with your values, and creating a meaningful life beyond trauma.",
      },
    ],
  },
  approaches: [
    {
      name: "EMDR Therapy",
      description: "Eye Movement Desensitization and Reprocessing to process traumatic memories and reduce distress.",
      icon: Eye,
    },
    {
      name: "Trauma-Informed CBT",
      description:
        "Cognitive Behavioral Therapy adapted specifically for trauma survivors to address negative thought patterns.",
      icon: Brain,
    },
    {
      name: "Somatic Approaches",
      description: "Body-based therapies that help process trauma stored in the nervous system and body.",
      icon: Heart,
    },
    {
      name: "Narrative Therapy",
      description: "Helping you rewrite your story and separate your identity from your traumatic experiences.",
      icon: Lightbulb,
    },
    {
      name: "Mindfulness-Based Therapy",
      description: "Incorporating mindfulness and grounding techniques to manage trauma symptoms and promote healing.",
      icon: Compass,
    },
    {
      name: "Internal Family Systems",
      description: "Working with different parts of yourself to heal trauma and restore internal harmony.",
      icon: Users,
    },
  ],
  faqs: [
    {
      question: "What is trauma-informed care?",
      answer:
        "Trauma-informed care is an approach that recognizes and responds to the impact of traumatic stress. It emphasizes physical, psychological, and emotional safety for both clients and providers, and creates opportunities for survivors to rebuild a sense of control and empowerment.",
    },
    {
      question: "How do I know if I have trauma?",
      answer:
        "Trauma can manifest in many ways including flashbacks, nightmares, avoidance of reminders, emotional numbness, hypervigilance, difficulty sleeping, or feeling disconnected from yourself or others. If you've experienced a distressing event that continues to impact your daily life, trauma therapy may be helpful.",
    },
    {
      question: "What is EMDR and how does it help with trauma?",
      answer:
        "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps process traumatic memories. It uses bilateral stimulation (typically eye movements) to help the brain process and integrate traumatic experiences, reducing their emotional impact.",
    },
    {
      question: "Is it normal to feel worse before feeling better in trauma therapy?",
      answer:
        "It's common to experience some temporary increase in symptoms as you begin processing trauma. This is a normal part of healing. We work at your pace and provide coping strategies to help you manage any difficult emotions that arise during therapy.",
    },
    {
      question: "How long does trauma therapy take?",
      answer:
        "The length of trauma therapy varies greatly depending on factors like the type of trauma, when it occurred, your support system, and personal resilience. Some people see improvement in a few months, while others may benefit from longer-term therapy. We'll work together to determine what's right for you.",
    },
    {
      question: "Can I recover from complex trauma or childhood trauma?",
      answer:
        "Yes, recovery from complex and childhood trauma is absolutely possible. While it may take time and patience, many people go on to live fulfilling lives after trauma therapy. Our specialized approaches are designed to address the unique challenges of complex trauma.",
    },
    {
      question: "What if I can't remember my trauma clearly?",
      answer:
        "It's common for trauma memories to be fragmented or unclear. You don't need to have perfect recall to benefit from trauma therapy. We can work with whatever you do remember, and focus on addressing current symptoms and building coping skills.",
    },
    {
      question: "Will I have to talk about the details of my trauma?",
      answer:
        "While processing trauma often involves discussing your experiences, we go at your pace and you're always in control. Some approaches like EMDR can be effective without requiring detailed verbal processing. We'll find the approach that feels safest for you.",
    },
  ],
  relatedServices: ["Anxiety Support", "Depression Support", "EMDR Therapy"],
  therapists: [
    {
      name: "Sasha Campbell",
      image: "https://allegrocounselling.com/wp-content/uploads/2019/11/Sasha-Campbell-Allegro-Counselling-1.jpg",
      specialization: "Trauma & EMDR Specialist",
      experience: "15+ years specializing in trauma recovery and EMDR therapy",
    },
    {
      name: "Tianna Stebner",
      image: "https://allegrocounselling.com/wp-content/uploads/2023/01/Tianna-Stebner-Allegro-Counselling.jpg",
      specialization: "Complex Trauma Therapist",
      experience: "10+ years in complex trauma and attachment-based therapy",
    },
    {
      name: "Ava Moeini",
      image: "https://allegrocounselling.com/wp-content/uploads/2023/01/Ava-Moeini-Allegro-Counselling.jpg",
      specialization: "Trauma & Anxiety Specialist",
      experience: "8+ years in trauma-informed care and anxiety treatment",
    },
  ],
  pricing: {
    individual: "$180/session",
    couples: "$200/session",
  },
}

export default function TraumaCounsellingPage() {
  return <ServicePageTemplate service={traumaCounsellingService} />
}
