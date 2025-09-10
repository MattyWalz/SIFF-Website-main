"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ContactModal } from "./contact-modal"
import Image from "next/image"

const navigationItems = [
  { name: "About", href: "/about" },
  { name: "Partnerships", href: "/Partnerships" },
  { name: "Articles", href: "/articles" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center" onClick={handleNavClick}>
              <Image src="/siff-logo.png" alt="SIFF Logo" width={140} height={48} className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#156BBC] text-base font-medium transition-colors duration-200 cursor-pointer hover:scale-105 transform"
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-[#156BBC] hover:bg-[#0f5aa3] text-white cursor-pointer hover:scale-105 transform transition-all duration-200 hover:shadow-lg"
                onClick={() => setIsContactOpen(true)}
              >
                Join Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 cursor-pointer hover:scale-110 transform transition-all duration-200"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-[#156BBC] text-base font-medium transition-colors duration-200 cursor-pointer hover:bg-blue-50 rounded-md"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Button
                    className="w-full bg-[#156BBC] hover:bg-[#0f5aa3] text-white cursor-pointer hover:scale-105 transform transition-all duration-200 hover:shadow-lg"
                    onClick={() => {
                      setIsOpen(false)
                      setIsContactOpen(true)
                    }}
                  >
                    Join Us
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
