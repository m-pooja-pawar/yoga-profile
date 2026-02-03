'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Certificate {
  id: string
  title: string
  description: string
  hours?: string
  imagePath: string
}

interface CertificateGalleryProps {
  certificates: Certificate[]
  viewText?: string
  viewCertificateText?: string
  clickOutsideText?: string
}

export default function CertificateGallery({
  certificates,
  viewText = 'View',
  viewCertificateText = 'View Certificate',
  clickOutsideText = 'Click outside to close'
}: CertificateGalleryProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedCertificate(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <div className="space-y-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="card">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Certificate Thumbnail */}
              <button
                onClick={() => openModal(cert)}
                className="flex-shrink-0 w-full md:w-48 h-36 relative bg-gray-100 rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={cert.imagePath}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  sizes="(max-width: 768px) 100vw, 192px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {viewText}
                  </span>
                </div>
              </button>

              {/* Certificate Details */}
              <div className="flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-lg text-gray-900">{cert.title}</h3>
                  {cert.hours && (
                    <span className="text-sm text-sage-600 bg-sage-50 px-2 py-1 rounded ml-4 flex-shrink-0">
                      {cert.hours}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{cert.description}</p>
                <button
                  onClick={() => openModal(cert)}
                  className="mt-3 text-sage-600 text-sm font-medium hover:text-sage-700 transition-colors"
                >
                  {viewCertificateText} &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal/Lightbox */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Certificate Title */}
          <div className="absolute top-4 left-4 text-white z-10">
            <h3 className="font-serif text-lg">{selectedCertificate.title}</h3>
            {selectedCertificate.hours && (
              <span className="text-sm text-gray-300">{selectedCertificate.hours}</span>
            )}
          </div>

          {/* Certificate Image */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full min-h-[50vh]">
              <Image
                src={selectedCertificate.imagePath}
                alt={selectedCertificate.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>

          {/* Navigation hint */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {clickOutsideText}
          </p>
        </div>
      )}
    </>
  )
}
