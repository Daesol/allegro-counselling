# Content Management System for Service Pages

This document explains how to use the JSON-based content management system for updating service page content without touching code.

## Overview

The service pages now use a data-driven approach where each service has its own JSON file, and shared content is stored separately. This makes it easy for clients to update individual service content without affecting other services.

## File Structure

```
data/
├── shared-content.json                    # Shared content across all services
├── services/
│   ├── relationship-counselling.json      # Relationship counselling content
│   ├── anxiety-support.json              # Anxiety support content
│   ├── depression-support.json           # Depression support content
│   ├── trauma-counselling.json           # Trauma counselling content
│   └── ... (one file per service)
lib/
├── service-data.ts                       # Utility functions to load data
components/pages/
├── ServicePageTemplateV2.tsx             # Template using JSON data
├── RelationshipCounsellingPageV2.tsx     # Example implementation
```

## How to Update Content

### 1. Shared Content (Applies to All Service Pages)

The `shared-content.json` file contains content that appears on all service pages:

```json
{
  "hero": {
    "badge": "Professional Therapy Services",
    "subtitle": "Professional Therapy Services Online in Alberta",
    "ctaButton": "Book A Free Consultation",
    "ctaUrl": "https://calendly.com/allegroadmin/30min"
  },
  "fullDescription": {
    "title": "Understanding",
    "subtitle": "Discover how our comprehensive approach can transform your relationships and emotional well-being"
  }
  // ... more shared content
}
```

### 2. Service-Specific Content

Each service has its own JSON file under `data/services/`:

```json
{
  "title": "Relationship Counselling",
  "subtitle": "Strengthen Your Connection, Rebuild Trust, and Rediscover Love",
  "description": "We believe in the transformative power of connection...",
  "benefits": [
    "Improve communication and conflict resolution skills",
    "Rebuild trust and emotional intimacy"
  ],
  "faqs": [
    {
      "question": "How long does relationship counselling typically take?",
      "answer": "The duration varies depending on your specific needs..."
    }
  ]
  // ... more service-specific content
}
```

## Common Updates

### Update Hero Section Subtitle (All Services)
```json
// In shared-content.json
{
  "hero": {
    "subtitle": "Your new subtitle here"
  }
}
```

### Update CTA Button Text (All Services)
```json
// In shared-content.json
{
  "hero": {
    "ctaButton": "Your new button text"
  }
}
```

### Update Service-Specific FAQ
```json
// In data/services/relationship-counselling.json
{
  "faqs": [
    {
      "question": "Your new question?",
      "answer": "Your new answer here."
    }
  ]
}
```

### Update Service Benefits
```json
// In data/services/anxiety-support.json
{
  "benefits": [
    "Your new benefit 1",
    "Your new benefit 2",
    "Your new benefit 3"
  ]
}
```

### Update Service Description
```json
// In data/services/trauma-counselling.json
{
  "description": "Your new service description here.",
  "fullDescription": "Your new detailed description here."
}
```

## Adding a New Service

1. Create a new JSON file in `data/services/` (e.g., `new-service.json`)
2. Add the service data following the same structure as existing services
3. Create a new page component following the pattern of `RelationshipCounsellingPageV2.tsx`
4. Use the `getServiceData()` function to load the content

Example new service file:
```json
{
  "title": "New Service Name",
  "subtitle": "Your service subtitle",
  "description": "Brief description of the service",
  "fullDescription": "Detailed description of the service...",
  "heroImage": "https://example.com/image.jpg",
  "benefits": [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ],
  "specificServices": [
    {
      "title": "Specific Service 1",
      "description": "Description of specific service",
      "details": [
        "Detail 1",
        "Detail 2"
      ],
      "imageUri": "https://example.com/image1.jpg"
    }
  ],
  "whatToExpected": {
    "description": "Description of what to expect",
    "steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Description of step 1"
      }
    ]
  },
  "approaches": [
    {
      "name": "Approach 1",
      "description": "Description of approach 1"
    }
  ],
  "faqs": [
    {
      "question": "FAQ question?",
      "answer": "FAQ answer."
    }
  ],
  "relatedServices": ["Related Service 1", "Related Service 2"],
  "therapists": [
    {
      "name": "Therapist Name",
      "image": "https://example.com/therapist.jpg",
      "specialization": "Specialization",
      "experience": "Experience description"
    }
  ],
  "pricing": {
    "individual": "$100/session"
  }
}
```

Example page component:
```tsx
"use client"

import ServicePageTemplateV2 from "./ServicePageTemplateV2"
import { Brain } from "lucide-react"
import { getServiceData } from "@/lib/service-data"
import { useEffect, useState } from "react"
import { CompleteServiceData } from "@/lib/service-data"

export default function NewServicePageV2() {
  const [serviceData, setServiceData] = useState<CompleteServiceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadServiceData() {
      try {
        setLoading(true)
        const data = await getServiceData("new-service")
        if (data) {
          setServiceData(data)
        } else {
          setError("Service data not found")
        }
      } catch (err) {
        setError("Failed to load service data")
        console.error("Error loading service data:", err)
      } finally {
        setLoading(false)
      }
    }

    loadServiceData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !serviceData) {
    return <div>Service not found</div>
  }

  return (
    <ServicePageTemplateV2
      serviceData={serviceData}
      icon={Brain}
      iconColor="#7c3aed"
      iconBg="#f3e8ff"
    />
  )
}
```

## Benefits of This Approach

1. **Individual Control**: Each service can be updated independently
2. **Client Flexibility**: Clients can update specific services without affecting others
3. **Easy Content Updates**: No need to touch React code for text changes
4. **Maintainability**: Content is separated from presentation logic
5. **Scalability**: Easy to add new services or modify existing ones
6. **Non-Technical Updates**: Content can be updated by non-developers

## Migration Guide

To migrate an existing service page to use this system:

1. Extract the content from the existing page component
2. Create a new JSON file in `data/services/` with the extracted content
3. Update the page component to use `ServicePageTemplateV2`
4. Test to ensure all content displays correctly

## Available Functions

- `getServiceData(serviceType)`: Loads complete data for a specific service (synchronous)
- `getAvailableServices()`: Returns list of all available service types
- `getSharedData()`: Returns only shared content data
- `updateSharedContent(newContent)`: Updates shared content (admin use)
- `updateServiceContent(serviceType, newData)`: Updates service-specific content (admin use)

## Client Update Workflow

1. **For Shared Content Updates**: Edit `data/shared-content.json`
2. **For Service-Specific Updates**: Edit the appropriate file in `data/services/`
3. **For Adding New Services**: Create new JSON file + page component
4. **For Removing Services**: Delete the JSON file and page component

## Notes

- All URLs and external links are centralized in the JSON files
- Images and icons are still handled in the React components
- The system supports rich text content with proper formatting
- TypeScript interfaces ensure type safety when working with the data
- Each service file is completely independent, allowing for maximum flexibility 