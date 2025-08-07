import sharedContent from '@/data/shared-content.json'

// Import all service data statically
import relationshipCounsellingData from '@/data/services/relationship-counselling.json'
import anxietySupportData from '@/data/services/anxiety-support.json'

export interface ServiceData {
  title: string
  subtitle: string
  description: string
  fullDescription?: {
    title: string
    subtitle: string
    sections: {
      whyChooseUs: {
        title: string
        points: Array<{
          title: string
          description: string
        }>
      }
      impact: {
        title: string
        stats: Array<{
          value: string
          label: string
        }>
      }
    }
  }
  heroImage: string
  benefits: string[]
  specificServices?: {
    title: string
    description: string
    details: string[]
    icon?: string
    iconColor?: string
    iconBg?: string
    imageUri?: string
  }[]
  whatToExpected: {
    description: string
    steps: {
      step: number
      title: string
      description: string
    }[]
  }
  approaches: {
    name: string
    description: string
  }[]
  philosophy?: {
    title?: string
    sections: Array<{
      title: string
      description: string
    }>
  }
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: string[]
  therapists: {
    name: string
    image: string
    specialization: string
    experience: string
  }[]
  pricing: {
    individual: string
    couples?: string
    family?: string
  }
}

export interface SharedData {
  hero: {
    badge: string
    subtitle: string
    ctaButton: string
    ctaUrl: string
  }
  acknowledgingPain: {
    title: string
    description: string
    ctaButton: string
  }
  specificServices: {
    title: string
    highlightedTitle: string
    subtitle: string
    ctaButton: string
  }
  whatToExpected: {
    title: string
    highlightedTitle: string
  }
  approaches: {
    title: string
    highlightedTitle: string
    subtitle: string
  }
  faq: {
    title: string
    highlightedTitle: string
  }
  finalCta: {
    title: string
    description: string
    ctaButton: string
    phoneButton: string
    phoneNumber: string
    email: string
  }
  features: Array<{
    title: string
    description: string
  }>
}

export interface CompleteServiceData extends ServiceData {
  shared: SharedData
}

/**
 * Loads service data for a specific service type from individual JSON files
 * @param serviceType - The service type (e.g., 'relationship-counselling')
 * @returns Complete service data with shared content merged
 */
export function getServiceData(serviceType: string): CompleteServiceData | null {
  try {
    let service: ServiceData | null = null
    
    // Map service types to their data
    switch (serviceType) {
      case 'relationship-counselling':
        service = relationshipCounsellingData as ServiceData
        break
      case 'anxiety-support':
        service = anxietySupportData as ServiceData
        break
      default:
        console.warn(`Service data not found for: ${serviceType}`)
        return null
    }
    
    if (!service) {
      console.warn(`Service data not found for: ${serviceType}`)
      return null
    }

    return {
      ...service,
      shared: sharedContent as SharedData
    }
  } catch (error) {
    console.error(`Error loading service data for ${serviceType}:`, error)
    return null
  }
}

/**
 * Gets all available service types
 * @returns Array of service type keys
 */
export function getAvailableServices(): string[] {
  // Add new services to this list when you create new JSON files
  return [
    'relationship-counselling',
    'anxiety-support'
    // Add more services here as you create their JSON files
  ]
}

/**
 * Gets shared data only
 * @returns Shared content data
 */
export function getSharedData(): SharedData {
  return sharedContent as SharedData
}

/**
 * Updates shared content (for admin use)
 * @param newSharedContent - New shared content data
 */
export function updateSharedContent(newSharedContent: Partial<SharedData>): void {
  // In a real implementation, this would save to the file
  // For now, this is just a placeholder
  console.log('Shared content update requested:', newSharedContent)
}

/**
 * Updates service-specific content (for admin use)
 * @param serviceType - The service type to update
 * @param newServiceData - New service data
 */
export function updateServiceContent(serviceType: string, newServiceData: Partial<ServiceData>): void {
  // In a real implementation, this would save to the specific service file
  // For now, this is just a placeholder
  console.log(`Service content update requested for ${serviceType}:`, newServiceData)
} 