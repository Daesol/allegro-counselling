"use client"

import ServicePageTemplate from "./ServicePageTemplate"
import { Brain, Heart, Shield, Users, Sparkles, Eye, Zap, AlertTriangle } from "lucide-react"

export default function AnxietySupportPage() {
  const anxietySupportService = {
    title: "Anxiety Support",
    subtitle: "Find Calm and Reclaim Your Peace of Mind",
    description:
      "Life's journey can sometimes feel overwhelming, and at Allegro Counselling, we understand the weight that anxiety can bring. You don't have to face it alone – our compassionate team is here to provide support, understanding, and practical tools to help you find a sense of calm.",
    fullDescription: `Anxiety affects millions of people worldwide, and it's important to know that you're not alone in this struggle. At Allegro Counselling, we recognize that anxiety manifests differently for each person, and we're committed to providing personalized care that addresses your unique experiences and challenges.

Our holistic approach to anxiety support goes beyond just managing symptoms – we work with you to understand the root causes of your anxiety and develop comprehensive strategies for long-term wellness. We address the mind-body connection, recognizing that anxiety affects not just your thoughts and emotions, but your physical well-being too.

Our experienced therapists create a safe, non-judgmental space where you can openly explore your anxiety without fear of criticism or misunderstanding. We believe that healing happens in relationship, and we're honored to walk alongside you on your journey toward greater peace and resilience.

Whether you're dealing with generalized anxiety, social anxiety, panic attacks, or specific phobias, we have the expertise and compassion to help you develop effective coping strategies and reclaim your sense of calm. Take the first step toward reclaiming a sense of peace and balance in your life – relief is just a call away.`,
    icon: Brain,
    iconColor: "#189799",
    iconBg: "#E6F7F7",
    heroImage:
      "https://images.unsplash.com/photo-1569292567777-e5d61a759322?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    benefits: [
      "Learn effective mindfulness and relaxation techniques",
      "Understand and challenge negative thought patterns",
      "Develop practical coping strategies for daily life",
      "Receive empathetic guidance and emotional support",
      "Address the mind-body connection for overall well-being",
      "Build resilience and long-term anxiety management skills",
      "Create a personalized anxiety management plan",
      "Improve quality of life and daily functioning",
    ],
    specificServices: [
      {
        title: "Generalized Anxiety Disorder (GAD)",
        description: "Support for excessive worry and anxiety about everyday concerns.",
        details: [
          "Managing persistent worry and overthinking patterns",
          "Addressing physical symptoms like restlessness and muscle tension",
          "Developing healthy coping mechanisms for daily stressors",
        ],
        icon: Brain,
        iconColor: "#189799",
        iconBg: "#E6F7F7",
        imageUri:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Social Anxiety Disorder",
        description: "Help for intense fear and avoidance of social situations.",
        details: [
          "Overcoming fear of judgment and embarrassment in social settings",
          "Building confidence in social interactions and relationships",
          "Gradual exposure therapy to reduce social avoidance",
        ],
        icon: Users,
        iconColor: "#7c3aed",
        iconBg: "#f3e8ff",
        imageUri:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Panic Disorder",
        description: "Treatment for recurrent, unexpected panic attacks.",
        details: [
          "Understanding and managing sudden, intense periods of fear",
          "Addressing physical symptoms like heart palpitations and shortness of breath",
          "Learning grounding techniques and panic attack management strategies",
        ],
        icon: AlertTriangle,
        iconColor: "#dc2626",
        iconBg: "#fee2e2",
        imageUri:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Specific Phobias",
        description: "Support for intense fears of specific objects or situations.",
        details: [
          "Systematic desensitization to reduce phobic responses",
          "Addressing avoidance behaviors that impact daily life",
          "Building confidence to face feared situations gradually",
        ],
        icon: Eye,
        iconColor: "#ea580c",
        iconBg: "#fed7aa",
        imageUri:
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Obsessive-Compulsive Disorder (OCD)",
        description: "Treatment for intrusive thoughts and repetitive behaviors.",
        details: [
          "Managing unwanted, intrusive thoughts (obsessions)",
          "Reducing repetitive behaviors and mental acts (compulsions)",
          "Exposure and Response Prevention (ERP) therapy techniques",
        ],
        icon: Zap,
        iconColor: "#4338ca",
        iconBg: "#e0e7ff",
        imageUri:
          "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Agoraphobia",
        description: "Support for fear and avoidance of certain places or situations.",
        details: [
          "Addressing fear of places where escape might be difficult",
          "Gradual exposure to previously avoided situations",
          "Building confidence to engage with the world safely",
        ],
        icon: Shield,
        iconColor: "#059669",
        iconBg: "#d1fae5",
        imageUri:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Separation Anxiety Disorder",
        description: "Help for excessive anxiety about separation from loved ones.",
        details: [
          "Managing fear of separation from home or attachment figures",
          "Building independence and confidence in being alone",
          "Addressing both childhood and adult separation anxiety",
        ],
        icon: Heart,
        iconColor: "#be185d",
        iconBg: "#fce7f3",
        imageUri:
          "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Illness Anxiety Disorder",
        description: "Support for excessive worry about having serious medical conditions.",
        details: [
          "Managing health-related anxiety and hypochondriacal concerns",
          "Reducing frequent medical visits and health checking behaviors",
          "Building realistic perspectives about health and bodily sensations",
        ],
        icon: Sparkles,
        iconColor: "#0891b2",
        iconBg: "#cffafe",
        imageUri:
          "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    whatToExpected: {
      title: "Your Anxiety Support Journey",
      description:
        "Our structured approach helps you understand your anxiety, develop effective coping strategies, and build long-term resilience for a calmer, more balanced life.",
      steps: [
        {
          step: 1,
          title: "Assessment & Understanding",
          description:
            "We'll explore your anxiety symptoms, triggers, and how they impact your daily life in a safe, supportive environment where you can share openly without judgment.",
        },
        {
          step: 2,
          title: "Skill Development",
          description:
            "Learn practical techniques including mindfulness, relaxation strategies, cognitive restructuring, and coping mechanisms tailored to your specific anxiety challenges.",
        },
        {
          step: 3,
          title: "Building Resilience",
          description:
            "Develop long-term strategies for managing anxiety, preventing relapse, and building confidence to face life's challenges with greater calm and resilience.",
        },
      ],
    },
    approaches: [
      {
        name: "Cognitive Behavioral Therapy (CBT)",
        description:
          "Evidence-based approach that helps identify and challenge negative thought patterns that contribute to anxiety, replacing them with more balanced perspectives.",
        icon: Brain,
      },
      {
        name: "Mindfulness-Based Therapy",
        description:
          "Incorporates mindfulness and meditation techniques to help you stay present, reduce worry about the future, and develop a calmer relationship with anxious thoughts.",
        icon: Sparkles,
      },
      {
        name: "Exposure and Response Prevention",
        description:
          "Gradual, systematic exposure to anxiety triggers in a safe environment to reduce avoidance behaviors and build confidence in managing anxiety.",
        icon: Eye,
      },
      {
        name: "Relaxation Training",
        description:
          "Learn practical relaxation techniques including deep breathing, progressive muscle relaxation, and guided imagery to manage physical anxiety symptoms.",
        icon: Heart,
      },
      {
        name: "Acceptance and Commitment Therapy",
        description:
          "Focuses on accepting anxiety while committing to values-based actions, helping you live meaningfully despite anxious feelings.",
        icon: Shield,
      },
      {
        name: "Somatic Approaches",
        description:
          "Address the physical manifestations of anxiety through body-based interventions that help regulate the nervous system and reduce physical tension.",
        icon: Users,
      },
    ],
    faqs: [
      {
        question: "How long does anxiety treatment typically take?",
        answer:
          "The duration of anxiety treatment varies depending on the severity of symptoms and individual needs. Many clients see improvements within 8-12 sessions, though some may benefit from longer-term support. We'll work with you to create a personalized treatment plan that fits your specific situation and goals.",
      },
      {
        question: "What's the difference between normal worry and anxiety disorder?",
        answer:
          "Normal worry is temporary and proportionate to the situation, while anxiety disorders involve persistent, excessive worry that interferes with daily functioning. If anxiety is impacting your work, relationships, or quality of life, it may be time to seek professional support.",
      },
      {
        question: "Can anxiety be completely cured?",
        answer:
          "While anxiety may not be completely 'cured,' it can be very effectively managed. Most people learn to significantly reduce their anxiety symptoms and develop strong coping skills that allow them to live full, satisfying lives without being controlled by anxiety.",
      },
      {
        question: "Do you prescribe medication for anxiety?",
        answer:
          "As counsellors, we don't prescribe medication, but we can work collaboratively with your family doctor or psychiatrist if medication is part of your treatment plan. We focus on therapeutic approaches and can help you navigate conversations about medication with your healthcare provider.",
      },
      {
        question: "What should I expect in my first anxiety counselling session?",
        answer:
          "Your first session will focus on understanding your anxiety symptoms, triggers, and how they impact your life. We'll discuss your goals for therapy and begin developing a personalized treatment plan. This is also an opportunity for you to ask questions and ensure you feel comfortable with our approach.",
      },
      {
        question: "Can you help with panic attacks?",
        answer:
          "Yes, we specialize in helping people understand and manage panic attacks. We'll teach you grounding techniques, breathing exercises, and cognitive strategies to reduce the frequency and intensity of panic attacks while addressing underlying anxiety.",
      },
      {
        question: "Is online therapy effective for anxiety?",
        answer:
          "Research shows that online therapy can be just as effective as in-person therapy for anxiety disorders. We offer both in-person and virtual sessions to accommodate your preferences and needs, ensuring you receive quality care in the format that works best for you.",
      },
    ],
    relatedServices: ["Depression Support", "Trauma Counselling", "Relationship Counselling", "ADHD Support"],
    therapists: [
      {
        name: "Tianna Steel",
        image:
          "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2024/09/Tianna1-2.jpg?resize=1462%2C1536&ssl=1",
        specialization: "Anxiety & Stress Management",
        experience: "8+ years specializing in anxiety disorders and mindfulness-based interventions",
      },
      {
        name: "Sasha Campbell",
        image:
          "https://lh3.googleusercontent.com/a-/ALV-UjXZXlLBf5VB42HWHjPCG-bwmLyeoE0aKcpZCa2s2qaotFMWoy0_=s558-p-k-rw-no",
        specialization: "Anxiety & Trauma Recovery",
        experience: "15+ years in anxiety treatment and trauma-informed care",
      },
      {
        name: "Katey Warrener",
        image:
          "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2025/03/katey-1-scaled.jpg?resize=1536%2C2048&ssl=1",
        specialization: "Anxiety & Life Transitions",
        experience: "2+ years specializing in anxiety and mindfulness-based approaches",
      },
    ],
    pricing: {
      individual: "$100/session",
      couples: "$150/session",
      family: "$175/session",
    },
  }

  return <ServicePageTemplate service={anxietySupportService} />
}
