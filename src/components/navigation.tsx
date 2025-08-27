"use client"

import { useState } from "react"
import { Button } from "./ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/porsche-logo-white.png" alt="Porsche" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#models" className="text-white hover:text-accent transition-colors font-medium">
                Models
              </a>
              <a href="#heritage" className="text-white hover:text-accent transition-colors font-medium">
                Heritage
              </a>
              <a href="#innovation" className="text-white hover:text-accent transition-colors font-medium">
                Innovation
              </a>
              <a href="#experience" className="text-white hover:text-accent transition-colors font-medium">
                Experience
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-black bg-transparent"
            >
              Configure
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent focus:outline-none focus:text-accent"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md">
              <a href="#models" className="block px-3 py-2 text-white hover:text-accent transition-colors">
                Models
              </a>
              <a href="#heritage" className="block px-3 py-2 text-white hover:text-accent transition-colors">
                Heritage
              </a>
              <a href="#innovation" className="block px-3 py-2 text-white hover:text-accent transition-colors">
                Innovation
              </a>
              <a href="#experience" className="block px-3 py-2 text-white hover:text-accent transition-colors">
                Experience
              </a>
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-black bg-transparent"
                >
                  Configure
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
