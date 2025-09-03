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

    // Helper to get all values for a checkbox group
    const getCheckedValues = (name: string) => {
      return Array.from(form.querySelectorAll(`input[name='${name}']:checked`)).map((el: any) => el.value);
    };
    // Helper to get value for radio group
    const getRadioValue = (name: string) => {
      const checked = form.querySelector(`input[name='${name}']:checked`) as HTMLInputElement;
      return checked ? checked.value : null;
    };
    // Helper to get value for single input
    const getValue = (name: string) => {
      return (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)?.value || '';
    };

    // Build payload
    const payload: Record<string, any> = {
      session_type_online: formData.get('session_type_online') ? true : false,
      counselling_type: getCheckedValues('counselling_type[]'),
      reason_for_services: getValue('reason_for_services'),
      referral_source: getValue('referral_source'),
      first_name: getValue('first_name'),
      last_name: getValue('last_name'),
      email: getValue('email'),
      phone: getValue('phone'),
      consent_messages: formData.get('consent_messages') ? true : false,
      counselling_approach: getCheckedValues('counselling_approach[]'),
      gender_preference: getCheckedValues('gender_preference[]'),
      novice_counsellor: getRadioValue('novice_counsellor'),
      student_counsellor: getRadioValue('student_counsellor'),
      specific_counsellor_preference: getRadioValue('specific_counsellor_preference'),
      preferred_appointment_times: getValue('preferred_appointment_times'),
      client_relationship_disclosure: getRadioValue('client_relationship_disclosure'),
    };

    await fetch('https://hook.us2.make.com/635et7mppc4h5y2fq1dmpumkewe8d5f2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    setSubmitted(true);
    form.reset();
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
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20 animate-pulse" style={{backgroundColor: '#D95E61'}}></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Get in <span style={{color: '#D95E61'}}>Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to take the first step? We're here to support you on your journey to better mental health and
              well-being.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                style={{backgroundColor: '#D95E61'}}
                onClick={() => window.open("https://calendly.com/allegroadmin/30min", "_blank")}
              >
                Book Consultation
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full transition-all duration-300"
                style={{borderColor: '#D95E61', color: '#D95E61'}}
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
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full opacity-20 animate-pulse" style={{backgroundColor: '#D95E61'}}></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse delay-500"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div id="contact-form" className="lg:col-span-2">
                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                  <Card className="px-4 py-8 sm:px-6 md:px-8 lg:px-10 bg-gradient-to-br from-white via-red-50 to-orange-50 border-2 shadow-2xl" style={{borderColor: '#D95E61'}}>
                    <CardContent className="pt-0 px-2 sm:px-4 md:px-6 lg:px-8">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: `linear-gradient(to bottom right, #D95E61, #D95E61)`}}>
                          <Send className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h3>
                        <p className="text-gray-600">
                          We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
                        </p>
                      </div>
                      {!submitted ? (
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                          {/* Intake Form Instructions */}
                          <div className="mb-6 text-sm text-gray-600">
                            <p><span className="font-bold" style={{color: '#D95E61'}}>*</span> indicates required fields</p>
                            <p className="mt-2">The information you provide here is important for selecting the most suitable counsellor. Please note that we cannot promise the fulfillment of all your preferences, as numerous factors are considered when matching counsellors with clients. However, we will align the chosen counsellor as closely as possible to your preferences.</p>
                          </div>

                          {/* Session Type */}
                          <div>
                            <label className="block font-medium mb-2">Session Type <span style={{color: '#D95E61'}}>*</span></label>
                            <p className="text-sm mb-2">We are a digital counselling agency and do not provide in person sessions. Are you able to attend sessions online?</p>
                            <div className="flex items-center space-x-4">
                              <input type="checkbox" id="sessionTypeOnline" name="session_type_online" required className="mr-2" />
                              <label htmlFor="sessionTypeOnline">Yes</label>
                            </div>
                          </div>

                          {/* Type of Counselling */}
                          <div>
                            <label className="block font-medium mb-2">Type of Counselling <span style={{color: '#D95E61'}}>*</span></label>
                            <p className="text-sm mb-2">Please let us know what type of counselling you're seeking, and for whom you are seeking that counselling.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <label className="flex items-center"><input type="checkbox" name="counselling_type[]" value="Individual for myself" required className="mr-2" />Individual for myself</label>
                              <label className="flex items-center"><input type="checkbox" name="counselling_type[]" value="Individual for someone else" className="mr-2" />Individual for someone else</label>
                              <label className="flex items-center"><input type="checkbox" name="counselling_type[]" value="Couples Counselling" className="mr-2" />Couples Counselling</label>
                              <label className="flex items-center"><input type="checkbox" name="counselling_type[]" value="Family Counselling" className="mr-2" />Family Counselling</label>
                            </div>
                          </div>

                          {/* Reason for Seeking Services */}
                          <div>
                            <label className="block font-medium mb-2">Reason for Seeking Services <span style={{color: '#D95E61'}}>*</span></label>
                            <Textarea name="reason_for_services" required placeholder="Please describe your reason for seeking services..." rows={4} />
                          </div>

                          {/* Where Did You Hear About Us? */}
                          <div>
                            <label className="block font-medium mb-2">Where Did You Hear About Us? <span style={{color: '#D95E61'}}>*</span></label>
                            <select name="referral_source" required className="w-full border rounded-md px-3 py-2">
                              <option value="">Select an option</option>
                              <option value="Counselling Professional">Counselling Professional (Counsellor, Social Worker, Support Worker etc.)</option>
                              <option value="Insurance">Insurance (Blue Cross, Sun Life, Telus Health etc.)</option>
                              <option value="Legal Professional">Legal Professional (Lawyer, Probation Officer etc.)</option>
                              <option value="Medical Professional">Medical Professional (Doctor, Nurse etc.)</option>
                              <option value="Psychology Today Website">Psychology Today Website</option>
                              <option value="Social Media">Social Media (Facebook, Instagram, TikTok, YouTube)</option>
                              <option value="Strength Counselling Staff">Strength Counselling Staff</option>
                              <option value="Strength Counselling Website">Strength Counselling Website</option>
                              <option value="Trans Care BC">Trans Care BC</option>
                              <option value="Treatment Centre">Treatment Centre (Addiction/Mental Health)</option>
                              <option value="Victim Services">Victim Services</option>
                              <option value="Word of Mouth">Word of Mouth (friends/family etc.)</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          {/* Contact Information */}
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block font-medium mb-2">First Name <span style={{color: '#D95E61'}}>*</span></label>
                              <Input name="first_name" required placeholder="First Name" />
                            </div>
                            <div>
                              <label className="block font-medium mb-2">Last Name or Initial <span style={{color: '#D95E61'}}>*</span></label>
                              <Input name="last_name" required placeholder="Last Name or Initial" />
                            </div>
                            <div>
                              <label className="block font-medium mb-2">Email Address <span style={{color: '#D95E61'}}>*</span></label>
                              <Input name="email" type="email" required placeholder="Email Address" />
                            </div>
                            <div>
                              <label className="block font-medium mb-2">Phone Number <span style={{color: '#D95E61'}}>*</span></label>
                              <Input name="phone" type="tel" required placeholder="Phone Number" />
                            </div>
                          </div>

                          {/* Consent to Receive Messages */}
                          <div>
                            <label className="block font-medium mb-2">Consent to Receive Messages <span style={{color: '#D95E61'}}>*</span></label>
                            <p className="text-sm mb-2">The messages you will receive via email and text will be specific to your client file with us and will contain only relevant information. We will not send any advertising or promotional material. You can unsubscribe at any time.</p>
                            <label className="flex items-center"><input type="checkbox" name="consent_messages" required className="mr-2" />Yes, I agree</label>
                          </div>

                          {/* Preferred Counselling Approach */}
                          <div>
                            <label className="block font-medium mb-2">Preferred Counselling Approach <span style={{color: '#D95E61'}}>*</span></label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <label className="flex items-center"><input type="checkbox" name="counselling_approach[]" value="Softer approach" required className="mr-2" />Softer approach</label>
                              <label className="flex items-center"><input type="checkbox" name="counselling_approach[]" value="Firmer approach" className="mr-2" />Firmer approach</label>
                              <label className="flex items-center"><input type="checkbox" name="counselling_approach[]" value="Somewhere in between" className="mr-2" />Somewhere in between</label>
                              <label className="flex items-center"><input type="checkbox" name="counselling_approach[]" value="No Preference" className="mr-2" />No Preference</label>
                            </div>
                          </div>

                          {/* Gender Preference */}
                          <div>
                            <label className="block font-medium mb-2">Gender Preference <span style={{color: '#D95E61'}}>*</span></label>
                            <p className="text-sm mb-2">Please select the gender(s) you are comfortable working with (check all that apply):</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <label className="flex items-center"><input type="checkbox" name="gender_preference[]" value="Male" required className="mr-2" />Male</label>
                              <label className="flex items-center"><input type="checkbox" name="gender_preference[]" value="Female" className="mr-2" />Female</label>
                              <label className="flex items-center"><input type="checkbox" name="gender_preference[]" value="Non-Binary" className="mr-2" />Non-Binary</label>
                              <label className="flex items-center"><input type="checkbox" name="gender_preference[]" value="Transgender" className="mr-2" />Transgender</label>
                              <label className="flex items-center"><input type="checkbox" name="gender_preference[]" value="No Preference" className="mr-2" />No Preference</label>
                            </div>
                          </div>

                          {/* Willingness to Work with Specific Counsellor Types */}
                          <div>
                            <label className="block font-medium mb-2">Are you willing to work with a novice counsellor for a decreased fee? <span style={{color: '#D95E61'}}>*</span></label>
                            <div className="flex items-center space-x-4 mb-2">
                              <label className="flex items-center"><input type="radio" name="novice_counsellor" value="Yes" required className="mr-2" />Yes</label>
                              <label className="flex items-center"><input type="radio" name="novice_counsellor" value="No" className="mr-2" />No</label>
                            </div>
                            <label className="block font-medium mb-2 mt-4">Are you willing to work with a student counsellor? <span style={{color: '#D95E61'}}>*</span></label>
                            <div className="flex items-center space-x-4">
                              <label className="flex items-center"><input type="radio" name="student_counsellor" value="Yes" required className="mr-2" />Yes</label>
                              <label className="flex items-center"><input type="radio" name="student_counsellor" value="No" className="mr-2" />No</label>
                            </div>
                          </div>

                          {/* Specific Counsellor Preference */}
                          <div>
                            <label className="block font-medium mb-2">Do you have a preference of which counsellor on the team you would like to work with? <span style={{color: '#D95E61'}}>*</span></label>
                            <p className="text-sm mb-2">You can find our counsellor profiles at <a href="https://strengthcounselling.ca/about/our-team/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Our Team</a>.</p>
                            <div className="flex items-center space-x-4">
                              <label className="flex items-center"><input type="radio" name="specific_counsellor_preference" value="Yes" required className="mr-2" />Yes</label>
                              <label className="flex items-center"><input type="radio" name="specific_counsellor_preference" value="No" className="mr-2" />No</label>
                            </div>
                          </div>

                          {/* Preferred Appointment Day(s) and Time(s) */}
                          <div>
                            <label className="block font-medium mb-2">Preferred Appointment Day(s) and Time(s) <span style={{color: '#D95E61'}}>*</span></label>
                            <Textarea name="preferred_appointment_times" required placeholder="Please specify your preferred days and times for appointments..." rows={3} />
                          </div>

                          {/* Client Relationship Disclosure */}
                          <div>
                            <label className="block font-medium mb-2">Do you know anyone who is a current, or was a past, client of ours? <span style={{color: '#D95E61'}}>*</span></label>
                            <div className="flex items-center space-x-4">
                              <label className="flex items-center"><input type="radio" name="client_relationship_disclosure" value="Yes" required className="mr-2" />Yes</label>
                              <label className="flex items-center"><input type="radio" name="client_relationship_disclosure" value="No" className="mr-2" />No</label>
                            </div>
                          </div>

                          <Button type="submit" className="w-full hover:opacity-90 text-white py-3 rounded-full font-semibold text-lg transition-all duration-300"
              style={{backgroundColor: '#D95E61'}}>
                            Submit Intake Form
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
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: `linear-gradient(to bottom right, #D95E61, #D95E61)`}}>
                              <Phone className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-800 mb-1">Phone</p>
                              <p className="style={{color: '#D95E61'}} font-semibold text-sm">(825) 605-4453</p>
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
                        <Award className="h-5 w-5 style={{color: '#D95E61'}} mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Licensed Professionals</p>
                          <p className="text-sm text-gray-600">All our therapists are licensed and experienced</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Heart className="h-5 w-5 style={{color: '#D95E61'}} mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Compassionate Care</p>
                          <p className="text-sm text-gray-600">We provide a safe, non-judgmental environment</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="h-5 w-5 style={{color: '#D95E61'}} mt-1 mr-3 flex-shrink-0" />
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
      <section className="py-12" style={{backgroundColor: '#D95E61'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white" style={{borderColor: '#D95E61'}}>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 style={{color: '#D95E61'}} mt-1 mr-4 flex-shrink-0" />
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
              className="flex items-center space-x-1 sm:space-x-2 text-white px-2 sm:px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{background: `linear-gradient(to right, #D95E61, #D95E61)`}}
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
 