"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Shield, Award, Heart, Send, AlertTriangle } from "lucide-react"

export default function ContactPage() {
  const servicesList = [
    "Addictions",
    "ADHD Diagnosis and Support",
    "Anxiety Support",
    "Autism Diagnosis and Support",
    "Depression Support",
    "EMDR Therapy",
    "Inner Child Work",
    "Narcissistic Abuse Recovery",
    "Relationship Counselling",
    "Trauma Counselling",
  ];
  const [showOtherService, setShowOtherService] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    // Gather interested services (checkboxes)
    const interestedServices = Array.from(form.querySelectorAll('input[name="contact[interested_services][value][]"]:checked')).map(
      (el: any) => el.value
    );
    // Handle "Other" service specifically
    const otherCheckbox = form.querySelector('input[value="Other"]') as HTMLInputElement;
    const otherTextInput = form.querySelector('input[placeholder="Please specify other service"]') as HTMLInputElement;
    
    let finalInterestedServices = interestedServices.filter(service => service !== 'Other');
    
    if (otherCheckbox?.checked) {
      if (otherTextInput?.value?.trim()) {
        finalInterestedServices.push(`Other: ${otherTextInput.value.trim()}`);
      } else {
        finalInterestedServices.push('Other');
      }
    }
    
    // Build payload
    const payload: Record<string, any> = {
      name: (form.elements.namedItem('contact[name][value]') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email_address') as HTMLInputElement)?.value,
      phone: (form.elements.namedItem('contact[phone_number][value]') as HTMLInputElement)?.value,
      message: (form.elements.namedItem('contact[message][value]') as HTMLInputElement)?.value,
      interested_services: finalInterestedServices,
    };
    // Send to webhook
    await fetch('https://hook.us2.make.com/635et7mppc4h5y2fq1dmpumkewe8d5f2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    setSubmitted(true);
    form.reset();
    setShowOtherService(false);
  };

  const handleShowFormAgain = () => {
    setSubmitted(false);
  };

  const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
      {
        question: "How do I book my first appointment?",
        answer:
          "You can book online through our Calendly link, call us at (825) 605-4453, or send us a message through this contact form. We'll respond within 24 hours to schedule your consultation.",
      },
      {
        question: "Do you accept insurance?",
        answer:
          "We work with most major insurance providers. Contact us with your insurance information and we'll help verify your coverage and benefits.",
      },
      {
        question: "What should I expect in my first session?",
        answer:
          "Your first session is about getting to know each other. We'll discuss your goals, concerns, and what brought you to therapy. It's a safe space to share as much or as little as you're comfortable with.",
      },
      {
        question: "Do you offer virtual sessions?",
        answer:
          "Yes, we offer secure video therapy sessions for your convenience. This allows you to receive support from the comfort of your own home.",
      },
      {
        question: "How long are therapy sessions?",
        answer:
          "Standard therapy sessions are typically 50 minutes long. We also offer extended sessions if needed for specific therapeutic approaches.",
      },
      {
        question: "What if I need to cancel or reschedule?",
        answer:
          "We understand that life happens. Please give us at least 24 hours notice for cancellations or rescheduling to avoid any fees.",
      },
    ]

    return (
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h4 className="font-semibold text-gray-800 pr-4">{faq.question}</h4>
                <div
                  className={`transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-teal-50"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Get in <span className="text-red-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to take the first step? We're here to support you on your journey to better mental health and
              well-being.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("https://calendly.com/allegroadmin/30min", "_blank")}
              >
                Book Consultation
              </Button>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-teal-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse delay-500"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div id="contact-form" className="lg:col-span-2">
                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                  <Card className="px-4 py-8 sm:px-6 md:px-8 lg:px-10 bg-gradient-to-br from-white via-red-50 to-orange-50 border-2 border-red-200 shadow-2xl">
                    <CardContent className="pt-0 px-2 sm:px-4 md:px-6 lg:px-8">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Send className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h3>
                        <p className="text-gray-600">
                          We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
                        </p>
                      </div>
                      {!submitted ? (
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Input
                                id="name"
                                name="contact[name][value]"
                                type="text"
                                required
                                className="w-full max-w-full"
                                placeholder="Full Name *"
                              />
                            </div>
                            <div>
                              <Input
                                id="phone"
                                name="contact[phone_number][value]"
                                type="tel"
                                className="w-full max-w-full"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                          <div>
                            <Input
                              id="email"
                              name="email_address"
                              type="email"
                              required
                              pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                              className="w-full max-w-full"
                              placeholder="Email Address *"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Interested Services
                            </label>
                            <p className="text-xs text-gray-500 mb-2">You can select multiple services</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                              {servicesList.map((service) => (
                                <label key={service} className="inline-flex items-center text-sm" style={{ fontSize: '0.95rem' }}>
                                  <input
                                    type="checkbox"
                                    name="contact[interested_services][value][]"
                                    value={service}
                                    className="form-checkbox h-4 w-4 text-red-600 border-gray-300 rounded min-w-[1rem] min-h-[1rem]"
                                    style={{ width: '1rem', height: '1rem' }}
                                  />
                                  <span className="ml-2 text-gray-700">{service}</span>
                                </label>
                              ))}
                              <label className="inline-flex items-center text-sm" style={{ fontSize: '0.95rem' }}>
                                <input
                                  type="checkbox"
                                  name="contact[interested_services][value][]"
                                  value="Other"
                                  className="form-checkbox h-4 w-4 text-red-600 border-gray-300 rounded min-w-[1rem] min-h-[1rem]"
                                  style={{ width: '1rem', height: '1rem' }}
                                  onChange={e => setShowOtherService(e.target.checked)}
                                />
                                <span className="ml-2 text-gray-700">Other</span>
                              </label>
                              {showOtherService && (
                                <input
                                  type="text"
                                  name="contact[interested_services][value][]"
                                  placeholder="Please specify other service"
                                  className="mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent col-span-2 w-full max-w-full"
                                />
                              )}
                            </div>
                          </div>
                          <div>
                            <Textarea
                              id="message"
                              name="contact[message][value]"
                              required
                              className="w-full max-w-full"
                              placeholder="How can we help you? Please share a bit about your inquiry or what you're looking for."
                              rows={5}
                            />
                          </div>
                          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold text-lg transition-all duration-300">
                            Send Message
                          </Button>
                        </form>
                      ) : (
                        <div className="text-center py-12">
                          <h2 className="text-2xl font-bold mb-4 text-green-700">Thank you for contacting us!</h2>
                          <p className="text-lg text-gray-700 mb-2">
                            A confirmation email will be sent from <span className="font-semibold">info@allegrocounselling.com</span> shortly. If you don't see it, please check your spam or junk folder.
                          </p>
                          <p className="text-lg text-gray-700 mb-6">Our receptionist will contact you soon.</p>
                          <Button onClick={handleShowFormAgain} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-full">
                            Send Another Message
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                {/* Google Maps */}
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gray-200 relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8234567890123!2d-113.5200000000000!3d53.5200000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDMxJzEyLjAiTiAxMTPCsDMxJzEyLjAiVw!5e0!3m2!1sen!2sca!4v1234567890123"
                        width="100%"
                        height="256"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Allegro Counselling Location"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Visit Our Office</h4>
                      <p className="text-gray-600 text-sm mb-2">9915B Whyte Ave NW, Edmonton, AB T6E 1Z1</p>
                      <p className="text-gray-500 text-sm mb-4">Convenient location with parking available</p>

                      {/* Office Hours */}
                      <div className="border-t pt-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Clock className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800 mb-2">Office Hours</p>
                            <div className="space-y-1 text-sm">
                              <p className="text-purple-600 font-semibold">Monday - Friday: 9:00 AM - 7:00 PM</p>
                              <p className="text-purple-600 font-semibold">Saturday: 10:00 AM - 4:00 PM</p>
                              <p className="text-gray-500">Sunday: Closed</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="border-t pt-4 mt-4">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                              <Phone className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800 mb-1">Phone</p>
                              <p className="text-red-600 font-semibold text-sm">(825) 605-4453</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                              <Mail className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800 mb-1">Email</p>
                              <p className="text-teal-600 font-semibold text-sm">admin@allegrocounselling.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Indicators */}
                <Card className="p-6">
                  <CardContent className="pt-0">
                    <h4 className="font-semibold text-gray-800 mb-4">Why Choose Allegro Counselling?</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Licensed Professionals</p>
                          <p className="text-sm text-gray-600">All our therapists are licensed and experienced</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Heart className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Compassionate Care</p>
                          <p className="text-sm text-gray-600">We provide a safe, non-judgmental environment</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="h-5 w-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Confidential & Secure</p>
                          <p className="text-sm text-gray-600">Your privacy and confidentiality are our priority</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Common questions about getting started with therapy</p>
            </div>

            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-red-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Crisis Support Resources</h3>
                    <p className="text-gray-600 mb-4">
                      If you're experiencing a mental health crisis or having thoughts of self-harm, please reach out
                      for immediate support:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-800">Crisis & Suicide Prevention</p>
                        <p className="text-gray-600">Call or text 988</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Emergency Services</p>
                        <p className="text-gray-600">Call 911</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Distress Centre Calgary</p>
                        <p className="text-gray-600">(403) 266-4357</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Edmonton Crisis Diversion</p>
                        <p className="text-gray-600">(780) 482-4357</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating Contact Dock */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white rounded-full shadow-2xl border border-gray-200 px-3 sm:px-6 py-3 max-w-md sm:max-w-none sm:w-auto w-auto">
          <div className="flex items-center justify-center space-x-3 sm:space-x-6">
            {/* Phone Button */}
            <a
              href="tel:(825) 605-4453"
              className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 sm:px-4 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">(825) 605-4453</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:admin@allegrocounselling.com"
              className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-2 sm:px-4 py-2 rounded-full hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
