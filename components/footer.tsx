import { Heart } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-12 border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="Mahria Construction"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-lg">Mahria</span>
            </div>
            <p className="text-accent-foreground/70 text-sm">
              Professional construction and design solutions for your projects.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/70">
              <li>
                <a href="#services" className="hover:text-accent-foreground transition-colors">
                  Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-foreground transition-colors">
                  Architecture Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-foreground transition-colors">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-foreground transition-colors">
                  Town Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/70">
              <li>
                <a href="#home" className="hover:text-accent-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-accent-foreground/70">
              <li>
                <a href="tel:0304-5527950" className="hover:text-accent-foreground transition-colors">
                  0304-5527950
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923351715716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-foreground transition-colors"
                >
                  WhatsApp: 0335-1715716
                </a>
              </li>
              <li>
                <a
                  href="mailto:mahriaconstructionrealestate@gmail.com"
                  className="hover:text-accent-foreground transition-colors break-all text-xs"
                >
                  Email us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-foreground/20 pt-8 mt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/70 text-sm">
              © 2025 Mahria Construction & Real Estate. All rights reserved.
            </p>
            <p className="text-accent-foreground/70 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-current" /> for quality construction
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
