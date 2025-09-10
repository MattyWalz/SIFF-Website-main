"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { X, Mail, Instagram, Linkedin } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-[#156BBC]" />
            <h2 className="font-serif font-bold text-xl text-gray-900">Join SIFF</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="cursor-pointer hover:scale-110 transform transition-all duration-200 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-800 mb-3">Applications open in late September.</p>
          <p className="text-gray-600 mb-6">
            Follow us on LinkedIn or Instagram to get notified when they open.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/bocconi-students-for-football-finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-900 hover:bg-gray-50 cursor-pointer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/siff.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-900 hover:bg-gray-50 cursor-pointer"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
