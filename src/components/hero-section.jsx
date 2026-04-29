import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { OpenAccountDialog } from "@/components/auth-dialogs"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl">
          <img
            src="/images/banner1.png"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative px-6 sm:px-10 lg:px-14 py-14 sm:py-20 lg:py-24 min-h-[500px] sm:min-h-[600px] lg:min-h-[680px] flex">
            {/* Left content */}
            <div className="text-white max-w-2xl my-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.05] tracking-tight">
                Trading should feel
                <span className="relative inline-block ml-3">
                  <span className="relative z-10">honest.</span>
                  {/* Hand-drawn underline */}
                  <svg className="absolute left-0 -bottom-2 w-full" viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden>
                    <path d="M2 9 C 50 3, 110 13, 198 6" stroke="#fbcfe8" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="block mt-6 sm:mt-8 text-white/85 text-2xl sm:text-3xl lg:text-4xl font-medium">
                  So we built a platform that doesn't hide the costs.
                </span>
              </h1>

              <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row gap-3">
                <OpenAccountDialog
                  trigger={
                    <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90 rounded-full px-7 font-semibold">
                      Open an account
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
