"use client"

import ServicePageTemplate from "./ServicePageTemplate"
import { Puzzle, Brain, Heart, Users, Sparkles, Baby, Smile, GraduationCap } from "lucide-react"
import teamMembers from "@/data/team-members.json"

export default function AutismDiagnosisAndSupportPage() {
  const autismService = {
    /* ───────── Hero / Meta ───────── */
    title: "Autism Diagnosis & Support",
    subtitle: "Comprehensive, Person-Centred Care Across the Spectrum",
    description:
      "We provide gold-standard autism assessments and tailored therapeutic supports for children, teens, and adults. Our multidisciplinary, evidence-based approach empowers neurodiverse individuals to thrive at home, school, work, and in the community.",
    heroImage:
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
    icon: Puzzle,
    iconColor: "#6366f1",
    iconBg: "#e0e7ff",

    /* ───────── Quick Benefits ───────── */
    benefits: [
      "Gold-standard, DSM-5 aligned diagnostic assessments",
      "Individualised ABA & skills-based programs",
      "Sensory & communication supports",
      "Family education & advocacy coaching",
    ],

    /* ───────── Full Description ───────── */
    fullDescription: `At Allegro Counselling, we celebrate neurodiversity.  
Our autism team combines psychological evaluation, behaviour analysis, sensory integration, and family training to create truly *person-centred* plans.  
Whether you are seeking an initial diagnosis, a second opinion, or ongoing therapeutic support, our clinicians walk beside you—affirming strengths, minimising challenges, and fostering meaningful participation in everyday life.`,

    /* ───────── Specific Services ───────── */
    specificServices: [
      {
        title: "Comprehensive Autism Assessment",
        description:
          "Gold-standard evaluation using ADOS-2, clinical interview, and adaptive-skills measures (ages 3+).",
        details: [
          "Developmental & medical history review",
          "ADOS-2 or ADI-R administration",
          "Cognitive & adaptive functioning",
          "Written report & feedback session",
        ],
        icon: Brain,
        iconColor: "#16a34a",
        iconBg: "#dcfce7",
        imageUri:
          "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&auto=format&fit=crop&q=85&ixlib=rb-4.1.0",
      },
      {
        title: "Applied Behaviour Analysis (ABA)",
        description:
          "Evidence-based skill-building and behaviour-reduction plans delivered in home, clinic, or school settings.",
        details: [
          "Natural-environment teaching",
          "Functional behaviour assessment",
          "Parent training for generalisation",
        ],
        icon: Heart,
        iconColor: "#D95E61",
        iconBg: "#F8E6E7",
        imageUri:
          "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&auto=format&fit=crop&q=85&ixlib=rb-4.1.0",
      },
      {
        title: "Sensory Integration Support",
        description:
          "Occupational-therapy informed strategies to regulate arousal, improve focus, and reduce overwhelm.",
        details: ["Sensory profile assessment", "Home & classroom adaptations", "Self-advocacy skills"],
        icon: Sparkles,
        iconColor: "#ec4899",
        iconBg: "#fce7f3",
        imageUri:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=85&ixlib=rb-4.1.0",
      },
      {
        title: "Social & Communication Skills",
        description: "Neuroaffirming interventions (PEERS®, social stories, AAC) that foster authentic connection.",
        details: ["Pragmatic-language coaching", "Peer-group practice", "Augmentative communication (AAC)"],
        icon: Users,
        iconColor: "#0891b2",
        iconBg: "#cffafe",
        imageUri:
          "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&auto=format&fit=crop&q=85&ixlib=rb-4.1.0",
      },
      {
        title: "Family Training & Advocacy",
        description: "Equip caregivers with tools to support regulation, routines, and school collaboration.",
        details: ["Behaviour-support coaching", "IEP & funding navigation", "Sibling & caregiver workshops"],
        icon: Baby,
        iconColor: "#f59e0b",
        iconBg: "#fef3c7",
        imageUri:
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&auto=format&fit=crop&q=85&ixlib=rb-4.1.0",
      },
    ],

    /* ───────── Journey Steps ───────── */
    whatToExpected: {
      title: "Your Autism Support Journey",
      description: "A transparent, three-phase roadmap from initial questions to sustainable success.",
      steps: [
        {
          step: 1,
          title: "Intake & Assessment",
          description: "We gather history, observe behaviour, and complete gold-standard diagnostics to clarify needs.",
        },
        {
          step: 2,
          title: "Individualised Plan",
          description:
            "Together we craft goals and choose evidence-based methods that respect strengths and sensory profile.",
        },
        {
          step: 3,
          title: "Ongoing Coaching & Review",
          description:
            "Regular data reviews, caregiver training, and plan tweaks ensure continuous growth and generalisation.",
        },
      ],
    },

    /* ───────── Approaches ───────── */
    approaches: [
      {
        name: "Applied Behaviour Analysis (ABA)",
        description: "Skills-based teaching & behaviour-reduction grounded in positive reinforcement.",
        icon: Brain,
      },
      {
        name: "DIR / Floortime",
        description: "Play-based model enhancing emotional connection and developmental capacities.",
        icon: Smile,
      },
      {
        name: "Social Thinking & PEERS®",
        description: "Structured curricula for perspective-taking and friendship skills.",
        icon: Users,
      },
      {
        name: "Sensory Integration",
        description: "OT-informed strategies to modulate sensory input and enhance regulation.",
        icon: Sparkles,
      },
      {
        name: "Parent-Mediated Intervention",
        description: "Coaching caregivers to embed learning opportunities in daily routines.",
        icon: Heart,
      },
      {
        name: "Transition Planning",
        description: "Executive-function & life-skills training for adulthood, post-secondary, and employment.",
        icon: GraduationCap,
      },
    ],

    /* ───────── FAQs ───────── */
    faqs: [
      {
        question: "At what age can an autism assessment be completed?",
        answer:
          "Our psychologists assess children as young as 3 years using play-based and observational tools, and we provide adult assessments as well.",
      },
      {
        question: "Do you offer virtual services?",
        answer:
          "Yes. Diagnostics must include some in-person observation, but many therapy and parent-training sessions can be delivered online.",
      },
      {
        question: "Is ABA the only therapy you use?",
        answer:
          "No. We blend ABA with sensory-integration, DIR/Floortime, and other neuroaffirming methods based on individual needs and preferences.",
      },
      {
        question: "Can you help with FSCD/PUF funding paperwork?",
        answer:
          "Absolutely. We routinely provide assessment reports and goal plans required for Alberta funding applications.",
      },
    ],

    /* ───────── Related Services ───────── */
    relatedServices: ["ADHD Support", "Anxiety Support", "Family Therapy"],

    /* ───────── Therapists ───────── */
    therapists: [
      teamMembers.find((m) => m.name === "Tianna Steel"),
      teamMembers.find((m) => m.name === "Katey Warrener"),
    ].filter(Boolean),

    /* ───────── Pricing ───────── */
    pricing: {
      individual: "$120 / session",
      family: "$150 / session",
    },
  }

  return <ServicePageTemplate service={autismService} />
}
