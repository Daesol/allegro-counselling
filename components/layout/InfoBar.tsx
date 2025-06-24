import { Mail, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function InfoBar() {
  return (
    <div className="bg-[#D95E61] text-white py-1 px-2 text-[10px] sm:text-xs sm:py-2 sm:px-4">
      <div className="container mx-auto flex flex-row justify-between items-center gap-1 sm:gap-0">
        {/* Mobile: Stack vertically, Desktop: Spread horizontally */}
        <div className="flex items-center order-1 sm:order-1">
          <Mail className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5 sm:mr-1 flex-shrink-0" />
          <Link href="mailto:info@allegrocounselling.com" className="hover:underline truncate text-[10px] sm:text-xs">
            info@allegrocounselling.com
          </Link>
        </div>

        {/* Center - Hours (hidden on mobile, shown on tablet+) */}
        <div className="hidden lg:flex items-center order-2">
          <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5 sm:mr-1 flex-shrink-0" />
          <span className="whitespace-nowrap text-[10px] sm:text-xs">Mon-Fri: 9am - 7pm, Sat 10am - 4pm</span>
        </div>

        {/* Right side - Phone */}
        <div className="flex items-center order-3">
          <Phone className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5 sm:mr-1 flex-shrink-0" />
          <Link href="tel:5878824196" className="hover:underline text-[10px] sm:text-xs">
            587-882-4196
          </Link>
        </div>
      </div>
    </div>
  )
}
