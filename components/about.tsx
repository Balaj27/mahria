'use client'

import { Award, Users, Zap } from 'lucide-react'
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-background w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Your most trusted partner in construction, design and development
          </p>
        </div>

        {/* Content with Image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16 w-full">
          {/* Image */}
          <div className="relative w-full">
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg">
              <Image
                src="/modern-construction-office-building-professional.jpg"
                alt="About Mahria Construction"
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-primary text-white p-4 sm:p-6 rounded-lg shadow-lg max-w-xs">
              <div className="text-3xl sm:text-4xl font-bold">10+</div>
              <p className="text-xs sm:text-sm mt-2">Years of Experience</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Your trusted partners in construction, design and development</h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">
                With over a decade of excellence, we have successfully delivered 300+ residential and commercial projects, setting new standards in architecture, design, and construction.
              </p>
            </div>

            {/* Role-based content */}
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">As Architects</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We create innovative architectural designs that blend modern aesthetics with sustainable functionality, transforming your vision into captivating designs.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">As Developers</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We craft luxury residential and commercial projects that redefine modern living, combining comfort, style, and innovation.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">As Builders</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We deliver exceptional execution with precision craftsmanship, turning visionary concepts into architectural masterpieces that stand the test of time.
                </p>
              </div>
            </div>

            <a href="#contact" className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base">
              Get to know us
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-muted/50 rounded-xl p-6 sm:p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8 md:mb-12">Awesome Facts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">300+</div>
              <p className="text-sm sm:text-base text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">100+</div>
              <p className="text-sm sm:text-base text-muted-foreground">Commercial Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm sm:text-base text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
