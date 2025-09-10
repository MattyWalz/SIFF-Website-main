"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/siff-logo-light.png" alt="SIFF Logo" width={32} height={32} className="h-8 w-8" />
              <span className="font-serif font-bold text-xl">SIFF</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Students for International Football Finance - Connecting passion with finance through research, networking,
              and innovation.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/siff.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#156BBC] transition-colors cursor-pointer hover:scale-110 transform duration-200"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/bocconi-students-for-football-finance/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#156BBC] transition-colors cursor-pointer hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-[#156BBC] transition-colors cursor-pointer hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/Partnerships"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-[#156BBC] transition-colors cursor-pointer hover:underline"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  onClick={handleNavClick}
                  className="text-gray-300 hover:text-[#156BBC] transition-colors cursor-pointer hover:underline"
                >
                  Articles
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#156BBC]" />
                <a
                  href="mailto:info@siff.org"
                  className="text-gray-300 hover:text-[#156BBC] transition-colors cursor-pointer hover:underline"
                >
                  info@siffofficial.org
                </a>
              </div>
              <p className="text-gray-300 text-sm mt-2">Join our community of finance and football enthusiasts</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SIFF - Students for International Football Finance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
