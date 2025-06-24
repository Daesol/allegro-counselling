import Image from "next/image"

export default function CompassionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-red-50/30 relative overflow-hidden">
      {/* Soft circular gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient - top left */}
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-xl"
          style={{
            background:
              "radial-gradient(circle, rgba(254, 226, 226, 0.6) 0%, rgba(252, 231, 243, 0.3) 40%, rgba(255, 242, 242, 0.1) 70%, transparent 100%)",
          }}
        ></div>

        {/* Medium gradient - top right */}
        <div
          className="absolute -top-10 -right-32 w-64 h-64 rounded-full blur-lg"
          style={{
            background:
              "radial-gradient(circle, rgba(252, 231, 243, 0.5) 0%, rgba(255, 242, 242, 0.25) 40%, rgba(254, 226, 226, 0.08) 70%, transparent 100%)",
          }}
        ></div>

        {/* Small gradient - center left */}
        <div
          className="absolute top-1/3 -left-16 w-48 h-48 rounded-full blur-lg"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 237, 213, 0.4) 0%, rgba(255, 242, 242, 0.2) 40%, rgba(252, 231, 243, 0.05) 70%, transparent 100%)",
          }}
        ></div>

        {/* Medium gradient - center right */}
        <div
          className="absolute top-1/2 -right-20 w-56 h-56 rounded-full blur-lg"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 228, 230, 0.55) 0%, rgba(252, 231, 243, 0.3) 40%, rgba(255, 242, 242, 0.1) 70%, transparent 100%)",
          }}
        ></div>

        {/* Large gradient - bottom center */}
        <div
          className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full blur-xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 242, 242, 0.5) 0%, rgba(252, 231, 243, 0.25) 40%, rgba(254, 226, 226, 0.08) 70%, transparent 100%)",
          }}
        ></div>

        {/* Small accent gradient - bottom left */}
        <div
          className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-md"
          style={{
            background:
              "radial-gradient(circle, rgba(251, 207, 232, 0.35) 0%, rgba(254, 226, 226, 0.18) 40%, rgba(255, 242, 242, 0.05) 70%, transparent 100%)",
          }}
        ></div>

        {/* Small accent gradient - bottom right */}
        <div
          className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-lg"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 237, 213, 0.35) 0%, rgba(252, 231, 243, 0.18) 40%, rgba(255, 242, 242, 0.05) 70%, transparent 100%)",
          }}
        ></div>

        {/* Flower image - top left */}
        <div className="absolute -top-10 left-0 w-24 h-24 sm:w-60 sm:h-60 z-10">
          <Image
            src="https://i.postimg.cc/TY224jvF/image-removebg-preview-7.png"
            alt="Decorative flower blooming from top left"
            width={160}
            height={160}
            className="w-full h-full object-contain rotate-0"
          />
        </div>

        {/* Flower image - top right */}
        <div className="absolute -top-10 right-0 w-24 h-24 sm:w-60 sm:h-60 z-10">
          <Image
            src="https://i.postimg.cc/TY224jvF/image-removebg-preview-7.png"
            alt="Decorative flower blooming from top right"
            width={160}
            height={160}
            className="w-full h-full object-contain -rotate-0 scale-x-[-1]"
          />
        </div>

        {/* Flower image - bottom left */}
        <div className="absolute -bottom-10 -left-10 w-24 h-24 sm:w-60 sm:h-60 z-10">
          <Image
            src="https://i.postimg.cc/MpTnmZXC/5014039d-8308-40a9-9d58-7833744eb093-removebg-preview.png"
            alt="Decorative flower blooming from left side"
            width={160}
            height={160}
            className="w-full h-full object-contain scale-x-[-1]"
          />
        </div>

        {/* Flower image - bottom right */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-60 sm:h-60 z-10">
          <Image
            src="https://i.postimg.cc/MpTnmZXC/5014039d-8308-40a9-9d58-7833744eb093-removebg-preview.png"
            alt="Decorative flower blooming from right side"
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          {/* Section header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
              We Hear You
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Main compassion statement */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              We see how hard you've been trying. <br className="hidden sm:block" />
              The anxiety that keeps you up at night, <br className="hidden sm:block" />
              the pain no one else seems to notice, <br className="hidden sm:block" />
              the memories you try to bury — <br className="hidden sm:block" />
              <span className="font-medium text-gray-900">it's not too much, and neither are you.</span>
            </p>
          </div>

          {/* Supporting message */}
          <div className="max-w-xl mx-auto pt-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Your feelings are valid. Your struggles are real. <br className="hidden sm:block" />
              And you deserve compassionate support <br className="hidden sm:block" />
              on your journey to healing.
            </p>
          </div>

          {/* Decorative element */}
          <div className="flex justify-center pt-8">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-red-300 rounded-full"></div>
              <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
              <div className="w-2 h-2 bg-red-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
