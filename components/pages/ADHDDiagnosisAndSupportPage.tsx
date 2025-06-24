"use client"

import { Brain, Target, Heart, Clock, TrendingUp, Users, GraduationCap, Shield } from "lucide-react"
import ServicePageTemplate from "./ServicePageTemplate"

const service = {
  title: "ADHD Diagnosis and Support",
  subtitle: "Comprehensive Assessment and Personalized Treatment for ADHD",
  description:
    "At Allegro Counselling, our goal is to empower individuals with ADHD by providing a multi-faceted approach to support, encompassing assessment, counseling, behavioral interventions, and collaboration with other relevant professionals.",
  fullDescription:
    "ADHD stands for Attention-Deficit/Hyperactivity Disorder. It is a neurodevelopmental disorder that affects both children and adults. ADHD is characterized by persistent patterns of inattention, hyperactivity, and impulsivity that can interfere with daily functioning and development. There are three subtypes of ADHD, each with its own set of predominant symptoms: Predominantly Inattentive Presentation, Predominantly Hyperactive-Impulsive Presentation, and Combined Presentation. The exact cause of ADHD is not fully understood, but a combination of genetic, environmental, and neurological factors is believed to contribute to its development.",
  icon: Brain,
  iconColor: "#3b82f6",
  iconBg: "#dbeafe",
  heroImage:
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
  benefits: [
    "Comprehensive ADHD assessment and diagnosis",
    "Personalized treatment plans tailored to individual needs",
    "Executive function coaching and skill development",
    "Behavioral interventions using evidence-based approaches",
    "Family support and parent training programs",
    "Educational advocacy and school collaboration",
    "Ongoing monitoring and treatment adjustments",
    "Multi-professional collaboration and referrals",
  ],
  specificServices: [
    {
      title: "ADHD Assessments",
      description:
        "Comprehensive evaluations involving collaboration with individuals, families, and relevant professionals to ensure a holistic perspective and accurate diagnosis.",
      details: [
        "Thorough clinical interviews and history taking",
        "Standardized psychological testing and rating scales",
        "Behavioral observations across multiple settings",
        "Collaboration with family members and educators",
        "Comprehensive diagnostic report with recommendations",
      ],
      icon: Brain,
      iconColor: "#3b82f6",
      iconBg: "#dbeafe",
      imageUri: "https://images.unsplash.com/photo-1542353436-312f0e1f67ff?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Individualized Treatment Plans",
      description:
        "Personalized approaches that address unique needs and goals, developed through close collaboration with clients, families, and educators.",
      details: [
        "Customized intervention strategies",
        "Goal-setting and progress tracking",
        "Strength-based approach to treatment",
        "Family-centered care planning",
        "Regular plan reviews and adjustments",
      ],
      icon: Target,
      iconColor: "#10b981",
      iconBg: "#d1fae5",
      imageUri: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Individual Counseling",
      description:
        "Therapeutic support for emotional and behavioral challenges commonly associated with ADHD, focusing on building coping strategies and self-awareness.",
      details: [
        "Cognitive-behavioral therapy techniques",
        "Emotional regulation skill building",
        "Self-esteem and confidence development",
        "Stress management strategies",
        "Social skills training and support",
      ],
      icon: Heart,
      iconColor: "#ef4444",
      iconBg: "#fee2e2",
      imageUri: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Executive Function Coaching",
      description:
        "Specialized coaching to enhance organizational skills, time management, and overall executive functioning for improved daily performance.",
      details: [
        "Time management and planning skills",
        "Organization and task prioritization",
        "Working memory enhancement techniques",
        "Goal-setting and achievement strategies",
        "Daily routine development and maintenance",
      ],
      icon: Clock,
      iconColor: "#f59e0b",
      iconBg: "#fef3c7",
      imageUri: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Behavioral Interventions",
      description:
        "Applied Behavior Analysis (ABA) strategies to target specific behaviors and promote positive changes in various settings.",
      details: [
        "Functional behavior assessment",
        "Positive behavior support planning",
        "Token economy and reward systems",
        "Environmental modification strategies",
        "Data collection and progress monitoring",
      ],
      icon: TrendingUp,
      iconColor: "#8b5cf6",
      iconBg: "#ede9fe",
      imageUri: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Parent Training",
      description:
        "Guidance and training for parents to implement effective behavior management strategies and create supportive home environments.",
      details: [
        "Positive parenting techniques",
        "Behavior management strategies",
        "Communication skills enhancement",
        "Home environment optimization",
        "Consistency and routine development",
      ],
      icon: Users,
      iconColor: "#06b6d4",
      iconBg: "#cffafe",
      imageUri: "https://images.unsplash.com/photo-1520247478381-4d32def223c1?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Educational Support",
      description:
        "Collaborative work with educators to implement strategies that support academic success and appropriate learning environments.",
      details: [
        "IEP and 504 plan development",
        "Classroom accommodation recommendations",
        "Teacher consultation and training",
        "Academic skill development support",
        "Transition planning assistance",
      ],
      icon: GraduationCap,
      iconColor: "#dc2626",
      iconBg: "#fecaca",
      imageUri: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=400&auto=format&fit=crop&q=80",
    },
    {
      title: "Advocacy Services",
      description:
        "Support in advocating for appropriate accommodations and services in educational and workplace settings.",
      details: [
        "Rights and accommodations education",
        "Meeting preparation and attendance",
        "Documentation and report writing",
        "Resource connection and referrals",
        "Ongoing advocacy support",
      ],
      icon: Shield,
      iconColor: "#059669",
      iconBg: "#d1fae5",
      imageUri: "https://images.unsplash.com/photo-1621849400072-f554417f7051?w=400&auto=format&fit=crop&q=80",
    },
  ],
  whatToExpected: {
    title: "What to Expect",
    description:
      "Our comprehensive ADHD support process is designed to provide thorough assessment, personalized treatment, and ongoing support for individuals and families.",
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "Comprehensive intake session to understand your concerns, history, and goals for ADHD assessment and support.",
      },
      {
        step: 2,
        title: "Thorough Assessment",
        description:
          "Multi-faceted evaluation including psychological testing, behavioral observations, and collaboration with relevant parties.",
      },
      {
        step: 3,
        title: "Diagnosis and Feedback",
        description:
          "Clear explanation of assessment results, diagnosis (if applicable), and recommendations for treatment and support.",
      },
      {
        step: 4,
        title: "Treatment Planning",
        description: "Development of personalized treatment plan addressing your specific needs, strengths, and goals.",
      },
      {
        step: 5,
        title: "Ongoing Support",
        description:
          "Regular therapy sessions, coaching, and collaboration with other professionals to ensure comprehensive care.",
      },
      {
        step: 6,
        title: "Progress Monitoring",
        description:
          "Continuous evaluation of progress and adjustment of strategies to optimize outcomes and functioning.",
      },
    ],
  },
  approaches: [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description:
        "Helps individuals develop coping strategies and address negative thought patterns associated with ADHD challenges.",
      icon: Brain,
    },
    {
      name: "Applied Behavior Analysis (ABA)",
      description:
        "Evidence-based approach to understanding and changing behavior patterns through systematic interventions.",
      icon: TrendingUp,
    },
    {
      name: "Executive Function Training",
      description:
        "Specialized coaching to improve planning, organization, time management, and self-regulation skills.",
      icon: Clock,
    },
    {
      name: "Mindfulness-Based Interventions",
      description: "Techniques to improve attention, reduce impulsivity, and enhance emotional regulation.",
      icon: Heart,
    },
    {
      name: "Parent Training Programs",
      description: "Structured programs to help parents implement effective behavior management strategies at home.",
      icon: Users,
    },
    {
      name: "Educational Collaboration",
      description: "Working with schools to implement accommodations and strategies that support academic success.",
      icon: GraduationCap,
    },
  ],
  faqs: [
    {
      question: "What are the main types of ADHD?",
      answer:
        "There are three subtypes: Predominantly Inattentive Presentation (difficulty sustaining attention, forgetfulness), Predominantly Hyperactive-Impulsive Presentation (excessive fidgeting, impulsivity), and Combined Presentation (both inattentive and hyperactive-impulsive symptoms).",
    },
    {
      question: "How is ADHD diagnosed?",
      answer:
        "ADHD diagnosis involves comprehensive assessment by qualified healthcare professionals, including psychological testing, behavioral observations, and collaboration with family members and educators to understand symptoms across different settings.",
    },
    {
      question: "Can adults have ADHD?",
      answer:
        "Yes, while ADHD symptoms typically begin in childhood, the condition can persist into adolescence and adulthood. Many adults receive their first ADHD diagnosis later in life when seeking help for ongoing challenges.",
    },
    {
      question: "What causes ADHD?",
      answer:
        "The exact cause isn't fully understood, but research suggests a combination of genetic, environmental, and neurological factors contribute to ADHD development. It's a legitimate neurodevelopmental condition, not caused by poor parenting or lack of discipline.",
    },
    {
      question: "How long does ADHD assessment take?",
      answer:
        "Comprehensive ADHD assessment typically takes several sessions over 2-4 weeks, including initial consultation, testing sessions, and feedback. The timeline may vary based on individual needs and complexity of the case.",
    },
    {
      question: "Do you work with schools for educational support?",
      answer:
        "Yes, we collaborate with educators to implement strategies supporting academic success and advocate for appropriate accommodations. We can help with IEP/504 plan development and provide consultation to school teams.",
    },
    {
      question: "Is medication always necessary for ADHD?",
      answer:
        "Not necessarily. Treatment approaches vary based on individual needs. While medication can be helpful for some, we focus on comprehensive support including behavioral interventions, coaching, and environmental modifications that may be effective with or without medication.",
    },
    {
      question: "How do you involve families in treatment?",
      answer:
        "Family involvement is crucial. We provide parent training, family education about ADHD, and help develop consistent strategies across home and school settings. We work collaboratively with all family members to create supportive environments.",
    },
  ],
  relatedServices: ["Anxiety Support", "Depression Support", "Trauma Counselling"],
  therapists: [
    {
      name: "Tianna Steel",
      image:
        "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2024/09/Tianna1-2.jpg?resize=1462%2C1536&ssl=1",
      specialization: "ADHD Assessment & Support",
      experience: "8+ years experience with neurodevelopmental disorders",
      imageSrc:
        "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2024/09/Tianna1-2.jpg?resize=1462%2C1536&ssl=1",
    },
    {
      name: "Katey Warrener",
      image:
        "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2025/03/katey-1-scaled.jpg?resize=1536%2C2048&ssl=1",
      specialization: "ADHD Coaching & Life Transitions",
      experience: "2+ years specializing in ADHD support for teens and young adults",
      imageSrc:
        "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2025/03/katey-1-scaled.jpg?resize=1536%2C2048&ssl=1",
    },
  ],
  pricing: {
    individual: "$100/session",
    couples: "$120/session",
    family: "$120/session",
  },
}

export default function ADHDDiagnosisAndSupportPage() {
  return <ServicePageTemplate service={service} />
}
