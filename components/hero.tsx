"use client"

import { ArrowRight, Building2, Zap, Award } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    "/modern-construction-site-builders-architectural-de.jpg",
    "/interior-design-luxury-home.jpg",
    "/construction-workers-building-site.jpg",
    "/architectural-blueprint-planning.jpg",
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full z-10 text-center">
        <div className="space-y-8 transform transition-all duration-1000 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full w-fit backdrop-blur-sm mx-auto">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Trusted by 300+ Projects</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white">
              <span>Transform Your Vision Into</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Architectural Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mx-auto max-w-2xl">
              Premier construction, design, and planning solutions. From concept to completion, we bring expertise,
              innovation, and precision to every project.
            </p>
          </div>

          {/* Three Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Construction</p>
                <p className="text-xs text-white/70">Expert builds</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Design</p>
                <p className="text-xs text-white/70">Modern aesthetics</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Quality</p>
                <p className="text-xs text-white/70">Best standards</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <a
              href="#contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0304-5527950"
              className="bg-white/20 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              Call: 0304-5527950
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
