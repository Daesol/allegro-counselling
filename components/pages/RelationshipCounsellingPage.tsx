"use client"

import ServicePageTemplate from "./ServicePageTemplate"
import { Heart, Users, MessageCircle, Shield, Brain, Sparkles, Home, Zap, ArrowRight } from "lucide-react"

export default function RelationshipCounsellingPage() {
  const relationshipCounsellingService = {
    title: "Relationship Counselling",
    subtitle: "Strengthen Your Connection, Rebuild Trust, and Rediscover Love",
    description:
      "We believe in the transformative power of connection. Our dedicated team of experienced relationship counsellors are committed to guiding individuals and couples through the intricate dance of relationships. At Allegro, we understand that every relationship is unique, facing its own set of challenges.",
    fullDescription: `Our relationship counseling services are designed to provide a safe and confidential space for individuals and couples to explore their feelings, communicate openly, and develop a deeper understanding of themselves and their partners. Whether you're navigating the complexities of a romantic relationship, grappling with family dynamics, or seeking to improve communication within your connections, our skilled therapists are here to support you.

Allegro Counselling employs evidence-based therapeutic approaches, fostering an environment of empathy, respect, and growth. Our goal is to empower individuals and couples to build stronger, more resilient connections. Through personalized counseling sessions, we address a wide range of issues, from communication breakdowns and trust issues to intimacy concerns and life transitions.

If you're ready to harmonize your relationships and create a more fulfilling connection, Allegro Counselling is here to guide you on your journey. Discover the joy of meaningful connections and the harmony that comes from understanding and supporting each other. Take the first step towards a more harmonious and satisfying relationship with Allegro Counselling.`,
    icon: Heart,
    iconColor: "#D95E61",
    iconBg: "#F8E6E7",
    heroImage:
      "https://images.unsplash.com/photo-1617376431454-8195cf1fd668?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D",
    benefits: [
      "Improve communication and conflict resolution skills",
      "Rebuild trust and emotional intimacy",
      "Develop healthy relationship patterns",
      "Learn to navigate life transitions together",
      "Strengthen your emotional bond and connection",
      "Build stronger, more resilient connections",
      "Address communication breakdowns and trust issues",
      "Enhance intimacy and mutual understanding",
    ],
    specificServices: [
      {
        title: "Couples Counseling",
        description: "Tailored sessions for couples aiming to strengthen their connection.",
        details: [
          "Addressing communication issues, conflicts, and challenges within the relationship",
          "Building intimacy, trust, and mutual understanding",
          "Developing effective conflict resolution strategies",
        ],
        icon: Heart,
        iconColor: "#D95E61",
        iconBg: "#F8E6E7",
        imageUri:
          "https://images.unsplash.com/photo-1525206809752-65312b959c88?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Pre-Marital Counseling",
        description: "Guidance for couples preparing for marriage.",
        details: [
          "Exploring expectations, values, and potential challenges",
          "Developing strong foundations for a healthy and lasting partnership",
          "Preparing for life transitions and major decisions together",
        ],
        icon: Users,
        iconColor: "#7c3aed",
        iconBg: "#f3e8ff",
        imageUri:
          "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Individual Relationship Counseling",
        description: "Support for individuals navigating challenges in their personal relationships.",
        details: [
          "Exploring personal growth, self-discovery, and relationship patterns",
          "Understanding attachment styles and their impact on relationships",
          "Developing healthy relationship skills and boundaries",
        ],
        icon: Brain,
        iconColor: "#059669",
        iconBg: "#d1fae5",
        imageUri:
          "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Family Counseling",
        description: "Assisting families in resolving conflicts and improving communication.",
        details: [
          "Addressing issues such as parenting challenges and blended family dynamics",
          "Resolving generational conflicts and improving family relationships",
          "Creating healthier family communication patterns",
        ],
        icon: Home,
        iconColor: "#dc2626",
        iconBg: "#fee2e2",
        imageUri:
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Intimacy and Sexuality Counseling",
        description: "Creating a safe space to discuss intimacy concerns.",
        details: [
          "Addressing sexual health and communication about desires",
          "Enhancing emotional and physical connection",
          "Working through intimacy challenges with compassion and understanding",
        ],
        icon: Zap,
        iconColor: "#ea580c",
        iconBg: "#fed7aa",
        imageUri:
          "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Divorce and Separation Counseling",
        description: "Providing support during the difficult process of separation or divorce.",
        details: [
          "Helping individuals and couples navigate emotional challenges",
          "Planning for the future and co-parenting arrangements",
          "Processing grief and loss associated with relationship endings",
        ],
        icon: Shield,
        iconColor: "#4338ca",
        iconBg: "#e0e7ff",
        imageUri:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Communication Skills Training",
        description: "Teaching effective communication techniques for better understanding and connection.",
        details: [
          "Enhancing listening skills and promoting open dialogue",
          "Learning to express needs and feelings constructively",
          "Developing empathy and emotional intelligence",
        ],
        icon: MessageCircle,
        iconColor: "#0891b2",
        iconBg: "#cffafe",
        imageUri:
          "https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Life Transitions Counseling",
        description: "Supporting couples through major life changes.",
        details: [
          "Navigating career shifts, relocation, or loss together",
          "Helping individuals and couples adapt to new circumstances",
          "Maintaining strong connections during times of change",
        ],
        icon: ArrowRight,
        iconColor: "#be185d",
        iconBg: "#fce7f3",
        imageUri:
          "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=2853&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
      },
    ],
    whatToExpected: {
      title: "Your Relationship Counselling Journey",
      description:
        "Our structured approach helps couples work through challenges while building stronger foundations for lasting love and connection.",
      steps: [
        {
          step: 1,
          title: "Initial Assessment",
          description:
            "We'll explore your relationship history, current challenges, and goals for therapy in a safe, non-judgmental environment where both partners feel heard and understood.",
        },
        {
          step: 2,
          title: "Skill Building",
          description:
            "Learn practical communication techniques, conflict resolution strategies, and tools for emotional regulation that will strengthen your connection and understanding.",
        },
        {
          step: 3,
          title: "Healing & Growth",
          description:
            "Work through past hurts, rebuild trust, and create new positive patterns for your relationship's future while developing deeper intimacy and connection.",
        },
      ],
    },
    approaches: [
      {
        name: "Emotionally Focused Therapy (EFT)",
        description:
          "Helps couples identify and change negative interaction patterns while strengthening emotional bonds and creating secure attachment.",
        icon: Heart,
      },
      {
        name: "Gottman Method",
        description:
          "Research-based approach focusing on building friendship, managing conflict constructively, and creating shared meaning in relationships.",
        icon: Users,
      },
      {
        name: "Communication Training",
        description:
          "Practical skills for expressing needs, active listening, and resolving conflicts constructively while maintaining respect and understanding.",
        icon: MessageCircle,
      },
      {
        name: "Attachment-Based Therapy",
        description:
          "Explores how early attachment experiences influence current relationship patterns and helps develop more secure ways of connecting.",
        icon: Shield,
      },
      {
        name: "Cognitive Behavioral Therapy",
        description:
          "Identifies and changes negative thought patterns that impact relationship satisfaction and helps develop healthier perspectives.",
        icon: Brain,
      },
      {
        name: "Mindfulness-Based Approaches",
        description:
          "Incorporates mindfulness techniques to increase awareness, emotional regulation, and presence in relationships.",
        icon: Sparkles,
      },
    ],
    faqs: [
      {
        question: "How long does relationship counselling typically take?",
        answer:
          "The duration varies depending on your specific needs and goals. Many couples see improvements within 8-12 sessions, though some may benefit from longer-term support. We'll work with you to create a personalized treatment plan that fits your unique situation and relationship goals.",
      },
      {
        question: "What if my partner is reluctant to attend counselling?",
        answer:
          "It's common for one partner to be more hesitant about therapy. We can start with individual sessions to address concerns and help you both feel comfortable. Sometimes seeing the benefits firsthand helps reluctant partners become more engaged in the process.",
      },
      {
        question: "Do you see couples who aren't married?",
        answer:
          "We work with couples at all stages of their relationship, whether you're dating, engaged, married, or in a long-term partnership. All relationship types and configurations are welcome and respected in our practice.",
      },
      {
        question: "Can relationship counselling help if we're considering separation?",
        answer:
          "Yes, therapy can be valuable even when considering separation. We can help you make informed decisions about your relationship's future, improve co-parenting arrangements if children are involved, or work toward reconciliation if both partners are willing to commit to the process.",
      },
      {
        question: "What should we expect in our first session?",
        answer:
          "Your first session will focus on understanding your relationship history, current challenges, and goals for therapy. We'll establish ground rules for respectful communication and begin identifying patterns that may be affecting your relationship dynamics.",
      },
      {
        question: "Do you offer pre-marital counseling?",
        answer:
          "Yes! Pre-marital counseling is one of our specialized services. We help couples explore expectations, values, and potential challenges while developing strong foundations for a healthy and lasting partnership before marriage.",
      },
      {
        question: "Can you help with intimacy and sexuality concerns?",
        answer:
          "Absolutely. We provide a safe, confidential space to discuss intimacy concerns, address sexual health topics, improve communication about desires, and enhance both emotional and physical connection between partners.",
      },
    ],
    relatedServices: ["Individual Therapy", "Family Therapy", "Trauma Counselling", "Pre-Marital Counseling"],
    therapists: [
      {
        name: "Sasha Campbell",
        image:
          "https://lh3.googleusercontent.com/a-/ALV-UjXZXlLBf5VB42HWHjPCG-bwmLyeoE0aKcpZCa2s2qaotFMWoy0_=s558-p-k-rw-no",
        specialization: "Relationship & Couples Therapy",
        experience: "15+ years specializing in couples counselling and family dynamics",
      },
      {
        name: "Tianna Steel",
        image:
          "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2024/09/Tianna1-2.jpg?resize=1462%2C1536&ssl=1",
        specialization: "Relationship Dynamics & Communication",
        experience: "8+ years in relationship therapy and communication training",
      },
    ],
    pricing: {
      individual: "$100/session",
      couples: "$150/session",
      family: "$175/session",
    },
  }

  return <ServicePageTemplate service={relationshipCounsellingService} />
}
