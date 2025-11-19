'use client'

import { useState } from 'react'
import { Building2, Pencil, Palette, MapPin, Home, Lightbulb, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Building2,
    title: "Construction",
    description: "Complete construction services with quality craftsmanship and precision execution for projects of any scale",
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    accentColor: "bg-blue-500"
  },
  {
    icon: Pencil,
    title: "Architecture Design",
    description: "Innovative architectural designs combining aesthetics with sustainable functionality and modern vision",
    gradient: "from-cyan-400 via-blue-500 to-cyan-500",
    accentColor: "bg-cyan-400"
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Creative interior solutions that transform spaces beautifully and enhance functionality and comfort",
    gradient: "from-blue-600 via-cyan-500 to-blue-500",
    accentColor: "bg-blue-600"
  },
  {
    icon: MapPin,
    title: "Topographic Survey",
    description: "Precise land surveying and advanced mapping technology for accurate project planning and execution",
    gradient: "from-cyan-500 via-blue-600 to-cyan-400",
    accentColor: "bg-cyan-500"
  },
  {
    icon: Home,
    title: "Town Planning",
    description: "Strategic urban planning creating sustainable, well-designed communities with long-term vision",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    accentColor: "bg-blue-500"
  },
  {
    icon: Lightbulb,
    title: "Consultancy",
    description: "Expert consultancy maximizing project value, feasibility and ensuring optimal outcomes",
    gradient: "from-cyan-400 via-blue-600 to-cyan-500",
    accentColor: "bg-cyan-400"
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-16 md:py-24 lg:py-40 relative overflow-hidden bg-slate-950 w-full">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/20 to-blue-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-24 w-full">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-400/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Premium Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-primary to-cyan-400 animate-pulse">
              Expertise
            </span>
            <br />
            <span className="text-white">That Transforms</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 px-2">
            Comprehensive solutions tailored to bring your boldest visions to life with innovation, precision, and excellence
          </p>
          
          <div className="flex gap-2 justify-center">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-full w-full"
            >
              <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl ${
                hoveredIndex === index ? `bg-gradient-to-br ${service.gradient}` : ''
              }`}></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-2xl border border-slate-700/50 group-hover:border-primary/50 rounded-2xl p-4 sm:p-6 md:p-8 h-full flex flex-col transition-all duration-500 overflow-hidden">
                
                {/* Decorative Top Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                {/* Icon Glow Background */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                  hoveredIndex === index ? `bg-gradient-to-br ${service.gradient}` : ''
                }`}></div>

                {/* Icon */}
                <div className={`relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-2xl mb-4 sm:mb-6 md:mb-8 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 ${
                  hoveredIndex === index 
                    ? `bg-gradient-to-br ${service.gradient} shadow-2xl` 
                    : 'bg-gradient-to-br from-slate-800 to-slate-700'
                }`}>
                  <service.icon className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 transition-colors duration-500 ${
                    hoveredIndex === index ? 'text-white drop-shadow-lg' : 'text-slate-400'
                  }`} />
                </div>

                {/* Content */}
                <h3 className={`text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary' : 'text-white'
                }`}>
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed flex-grow mb-4 sm:mb-6 md:mb-8 group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Made button a link that scrolls to contact section */}
        <div className="mt-12 md:mt-16 lg:mt-24 text-center w-full">
          <p className="text-slate-400 text-base md:text-lg mb-8">Transform your vision into reality</p>
          <Link href="#contact">
            <button className="group relative inline-flex items-center gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary animate-pulse"></div>
              <div className="absolute inset-0.5 bg-slate-950 rounded-full group-hover:bg-slate-900 transition-colors"></div>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary group-hover:from-primary group-hover:to-cyan-400 transition-all font-bold">
                Start Your Project
              </span>
              <ArrowRight className="relative w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-primary group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
