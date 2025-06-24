"use client"

import ServicePageTemplate from "./ServicePageTemplate"
import { Brain, Heart, Shield, Users, Sparkles, Sun, Cloud, Zap } from "lucide-react"

export default function DepressionSupportPage() {
  const depressionSupportService = {
    title: "Depression Support",
    subtitle: "Rediscover Hope, Resilience, and Well-Being",
    description:
      "At Allegro Counselling, we understand that navigating life with depression can be challenging, but you don't have to face it alone. Our dedicated team of compassionate therapists is here to provide support, guidance, and a safe space for you to express your feelings.",
    fullDescription: `Depression affects millions of people worldwide, and it's important to know that seeking help is a sign of strength, not weakness. At Allegro Counselling, we recognize that depression manifests differently for each person, and we're committed to providing personalized support that addresses your unique experiences and challenges.

Our holistic approach to depression support goes beyond just managing symptoms – we work with you to understand the roots of your depression and develop comprehensive strategies for long-term healing and wellness. We consider your mental, emotional, and physical well-being, recognizing that depression affects every aspect of your life.

Our experienced therapists create a safe, non-judgmental environment where you can openly share your thoughts and emotions without fear of criticism or misunderstanding. We believe that healing happens in relationship, and we're honored to walk alongside you on your journey toward greater hope and resilience.

Whether you're dealing with major depression, persistent depressive disorder, seasonal affective disorder, or depression related to life circumstances, we have the expertise and compassion to help you develop effective coping strategies and rediscover your sense of purpose and joy.

Reaching out for support is a courageous step toward a brighter future. Together, we can work towards rediscovering hope, resilience, and a sense of well-being. Your mental health matters, and support is just a call away.`,
    icon: Sun,
    iconColor: "#f59e0b",
    iconBg: "#fef3c7",
    heroImage:
      "https://images.unsplash.com/photo-1588979355313-6711a095465f?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      "Personalized counseling sessions tailored to your unique needs",
      "Safe and judgment-free environment for open dialogue",
      "Holistic approach considering mental, emotional, and physical well-being",
      "Practical coping strategies for managing daily symptoms",
      "Empathetic guidance and validation of your experiences",
      "Evidence-based therapeutic approaches for depression",
      "Support for rediscovering hope and resilience",
      "Tools for building a more fulfilling and balanced life",
    ],
    specificServices: [
      {
        title: "Major Depressive Disorder",
        description: "Comprehensive support for persistent feelings of sadness and loss of interest.",
        details: [
          "Addressing persistent low mood and loss of pleasure in activities",
          "Managing symptoms like fatigue, sleep disturbances, and concentration issues",
          "Developing strategies to rebuild motivation and engagement with life",
        ],
        icon: Cloud,
        iconColor: "#6b7280",
        iconBg: "#f3f4f6",
        imageUri:
          "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Persistent Depressive Disorder",
        description: "Long-term support for chronic, low-grade depression symptoms.",
        details: [
          "Managing chronic feelings of sadness and hopelessness",
          "Building resilience for long-term symptom management",
          "Developing sustainable coping strategies for daily functioning",
        ],
        icon: Shield,
        iconColor: "#059669",
        iconBg: "#d1fae5",
        imageUri:
          "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Seasonal Affective Disorder",
        description: "Specialized treatment for depression related to seasonal changes.",
        details: [
          "Addressing mood changes related to seasonal light variations",
          "Light therapy recommendations and lifestyle adjustments",
          "Preparing for and managing seasonal mood transitions",
        ],
        icon: Sun,
        iconColor: "#f59e0b",
        iconBg: "#fef3c7",
        imageUri:
          "https://plus.unsplash.com/premium_photo-1712685912275-943ff90aac7c?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Postpartum Depression",
        description: "Compassionate support for new mothers experiencing depression.",
        details: [
          "Addressing the unique challenges of motherhood and identity changes",
          "Managing feelings of guilt, inadequacy, and overwhelming responsibility",
          "Building support systems and self-care strategies for new parents",
        ],
        icon: Heart,
        iconColor: "#be185d",
        iconBg: "#fce7f3",
        imageUri:
          "https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Grief-Related Depression",
        description: "Support for depression following significant loss or life changes.",
        details: [
          "Processing complex grief and loss experiences",
          "Distinguishing between normal grief and clinical depression",
          "Building meaning and purpose after significant life changes",
        ],
        icon: Sparkles,
        iconColor: "#7c3aed",
        iconBg: "#f3e8ff",
        imageUri:
          "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Teen and Young Adult Depression",
        description: "Age-appropriate support for younger individuals experiencing depression.",
        details: [
          "Addressing academic, social, and identity-related stressors",
          "Building healthy coping mechanisms for life transitions",
          "Supporting family involvement in the healing process",
        ],
        icon: Users,
        iconColor: "#dc2626",
        iconBg: "#fee2e2",
        imageUri:
          "https://images.unsplash.com/photo-1442850473887-0fb77cd0b337?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Depression with Anxiety",
        description: "Integrated treatment for co-occurring depression and anxiety disorders.",
        details: [
          "Addressing the complex interaction between depression and anxiety",
          "Managing overlapping symptoms and triggers",
          "Developing comprehensive coping strategies for both conditions",
        ],
        icon: Brain,
        iconColor: "#4338ca",
        iconBg: "#e0e7ff",
        imageUri:
          "https://images.unsplash.com/photo-1539477857993-860599c2e840?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Treatment-Resistant Depression",
        description: "Specialized approaches for depression that hasn't responded to previous treatments.",
        details: [
          "Exploring alternative therapeutic approaches and modalities",
          "Addressing underlying trauma or complex factors",
          "Collaborative care with medical professionals when appropriate",
        ],
        icon: Zap,
        iconColor: "#ea580c",
        iconBg: "#fed7aa",
        imageUri:
          "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    whatToExpected: {
      title: "Your Depression Support Journey",
      description:
        "Our compassionate approach helps you understand your depression, develop effective coping strategies, and rediscover hope and meaning in your life.",
      steps: [
        {
          step: 1,
          title: "Understanding Your Experience",
          description:
            "We'll explore the roots of your depression and develop insights into your emotions in a safe, supportive environment where your experiences are validated and understood.",
        },
        {
          step: 2,
          title: "Building Coping Strategies",
          description:
            "Learn practical tools and techniques to manage symptoms, improve daily functioning, and develop healthy patterns that support your mental and emotional well-being.",
        },
        {
          step: 3,
          title: "Rediscovering Hope",
          description:
            "Work towards rebuilding your sense of purpose, resilience, and joy while developing long-term strategies for maintaining mental health and preventing relapse.",
        },
      ],
    },
    approaches: [
      {
        name: "Cognitive Behavioral Therapy (CBT)",
        description:
          "Evidence-based approach that helps identify and change negative thought patterns and behaviors that contribute to depression, promoting more balanced thinking.",
        icon: Brain,
      },
      {
        name: "Interpersonal Therapy (IPT)",
        description:
          "Focuses on improving relationships and social functioning to help relieve symptoms by addressing interpersonal issues that may contribute to depression.",
        icon: Users,
      },
      {
        name: "Mindfulness-Based Therapy",
        description:
          "Incorporates mindfulness practices to help you develop a different relationship with depressive thoughts and feelings, reducing rumination and increasing present-moment awareness.",
        icon: Sparkles,
      },
      {
        name: "Behavioral Activation",
        description:
          "Helps you gradually re-engage with meaningful activities and experiences, breaking the cycle of withdrawal and inactivity that often maintains depression.",
        icon: Zap,
      },
      {
        name: "Psychodynamic Therapy",
        description:
          "Explores unconscious patterns and past experiences that may contribute to current depression, promoting insight and emotional healing.",
        icon: Heart,
      },
      {
        name: "Solution-Focused Therapy",
        description:
          "Concentrates on identifying and building upon your existing strengths and resources to create positive change and achieve your goals.",
        icon: Sun,
      },
    ],
    faqs: [
      {
        question: "How long does depression treatment typically take?",
        answer:
          "The duration of depression treatment varies depending on the severity of symptoms, individual circumstances, and treatment goals. Many clients see improvements within 12-16 sessions, though some may benefit from longer-term support. We'll work with you to create a personalized treatment plan that fits your specific needs.",
      },
      {
        question: "What's the difference between sadness and clinical depression?",
        answer:
          "While sadness is a normal emotional response to life events, clinical depression involves persistent symptoms that significantly impact daily functioning for at least two weeks. Depression affects sleep, appetite, energy, concentration, and overall quality of life in ways that normal sadness does not.",
      },
      {
        question: "Can depression be treated without medication?",
        answer:
          "Yes, many people successfully manage depression through therapy alone. Research shows that psychotherapy can be as effective as medication for many types of depression. However, some individuals may benefit from a combination of therapy and medication, which we can discuss and coordinate with your healthcare provider.",
      },
      {
        question: "Is it normal to feel worse before feeling better in therapy?",
        answer:
          "It's not uncommon to experience some emotional intensity early in therapy as you begin to process difficult feelings and experiences. This is often a sign that the therapeutic work is beginning. We'll support you through this process and help you develop coping strategies to manage any temporary increases in distress.",
      },
      {
        question: "How do I know if I need professional help for depression?",
        answer:
          "Consider seeking professional help if you're experiencing persistent sadness, loss of interest in activities, changes in sleep or appetite, fatigue, difficulty concentrating, or thoughts of self-harm for more than two weeks. If depression is interfering with your work, relationships, or daily functioning, professional support can be very beneficial.",
      },
      {
        question: "Can you help with depression related to specific life events?",
        answer:
          "Absolutely. We provide support for depression related to various life circumstances including grief and loss, relationship changes, career transitions, health issues, and major life stressors. We'll help you process these experiences and develop healthy coping strategies.",
      },
      {
        question: "What should I do if I'm having thoughts of self-harm?",
        answer:
          "If you're having thoughts of self-harm, please reach out for immediate support. Contact Crisis Services Canada at 1-833-456-4566 (24/7), go to your nearest emergency room, or call 911. We also provide crisis support resources and can help you develop a safety plan during our sessions.",
      },
    ],
    relatedServices: ["Anxiety Support", "Trauma Counselling", "Relationship Counselling", "Grief Counselling"],
    therapists: [
      {
        name: "Sasha Campbell",
        image:
          "https://lh3.googleusercontent.com/a-/ALV-UjXZXlLBf5VB42HWHjPCG-bwmLyeoE0aKcpZCa2s2qaotFMWoy0_=s558-p-k-rw-no",
        specialization: "Depression & Trauma Recovery",
        experience: "15+ years specializing in depression treatment and trauma-informed care",
      },
      {
        name: "Tianna Steel",
        image:
          "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2024/09/Tianna1-2.jpg?resize=1462%2C1536&ssl=1",
        specialization: "Depression & Life Transitions",
        experience: "8+ years in depression support and holistic wellness approaches",
      },
      {
        name: "Katey Warrener",
        image:
          "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2025/03/katey-1-scaled.jpg?resize=1536%2C2048&ssl=1",
        specialization: "Depression & Young Adult Support",
        experience: "2+ years specializing in depression and life transitions for young adults",
      },
    ],
    pricing: {
      individual: "$100/session",
      couples: "$150/session",
      family: "$175/session",
    },
  }

  return (
    <>
      <ServicePageTemplate service={depressionSupportService} />

      {/* Crisis Resources Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-t-4 border-red-500">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-6 shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Crisis Support{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Resources
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you are in crisis and need immediate assistance, please reach out to these 24/7 support services:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crisis Services Canada</h3>
              <p className="text-gray-600 mb-4">24/7 crisis support and suicide prevention</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Phone:</span>
                  <a href="tel:1-833-456-4566" className="text-red-600 hover:text-red-700 font-medium">
                    1-833-456-4566
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Website:</span>
                  <a
                    href="https://www.crisisservicescanada.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Crisis Services Canada
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kids Help Phone</h3>
              <p className="text-gray-600 mb-4">24/7 support for children and youth</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Phone:</span>
                  <a href="tel:1-800-668-6868" className="text-blue-600 hover:text-blue-700 font-medium">
                    1-800-668-6868
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Website:</span>
                  <a
                    href="https://kidshelpphone.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Kids Help Phone
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Canada Suicide Prevention Service</h3>
              <p className="text-gray-600 mb-4">24/7 suicide prevention support</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Phone:</span>
                  <a href="tel:1-833-456-4566" className="text-purple-600 hover:text-purple-700 font-medium">
                    1-833-456-4566
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Website:</span>
                  <a
                    href="https://www.suicideprevention.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Canada Suicide Prevention Service
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Residential School Survivors</h3>
              <p className="text-gray-600 mb-4">Support for Indigenous residential school survivors</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Phone:</span>
                  <a href="tel:1-866-925-4419" className="text-green-600 hover:text-green-700 font-medium">
                    1-866-925-4419
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Website:</span>
                  <a
                    href="https://www.irsss.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Indian Residential School Survivors Society
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-red-100 border border-red-200 rounded-2xl p-6">
              <p className="text-red-800 font-medium">
                <strong>Emergency:</strong> If you are in immediate danger, please call 911 or go to your nearest
                emergency room.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
