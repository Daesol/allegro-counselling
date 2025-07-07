import { CheckCircle, Calendar, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BookingThankYouPage() {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-PTFG57L9"
          height="0" 
          width="0" 
          style={{display:'none',visibility:'hidden'}}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-teal-50 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            
            {/* Main Content */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank You for Booking!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your consultation has been successfully scheduled. We're looking forward to meeting with you and supporting you on your journey to better mental health and well-being.
            </p>
            
            {/* What's Next Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What's Next?</h2>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Confirmation Email</p>
                    <p className="text-sm text-gray-600">You'll receive a confirmation email with your appointment details shortly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Reminder</p>
                    <p className="text-sm text-gray-600">We'll send you a reminder 24 hours before your appointment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Questions?</p>
                    <p className="text-sm text-gray-600">If you have any questions, feel free to call us at (825) 605-4453.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="border-t pt-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Need to Make Changes?</h3>
              <p className="text-gray-600 mb-4">
                If you need to reschedule or cancel your appointment, please contact us as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:(825) 605-4453"
                  className="inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                  <span>(825) 605-4453</span>
                </a>
                <a
                  href="mailto:info@allegrocounselling.com"
                  className="inline-flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full transition-all duration-300">
                  Return to Home
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="w-full sm:w-auto border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 