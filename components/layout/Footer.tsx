import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-white py-8 sm:py-12" style={{ backgroundColor: "#189799" }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <Image
                src="https://allegrocounselling.com/wp-content/uploads/2019/11/allegro2x.png"
                alt="Allegro Counselling Logo"
                width={150}
                height={45}
                className="h-6 sm:h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Compassionate, personalized therapy for individuals, couples, and families in Edmonton.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-white">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>Individual Therapy</li>
              <li>Couples Counselling</li>
              <li>Family Therapy</li>
              <li>EMDR Therapy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-white">Contact</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>(825) 605-4453</li>
              <li className="break-all">admin@allegrocounselling.com</li>
              <li>Edmonton, AB</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Insurance Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} Allegro Counselling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
