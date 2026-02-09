'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

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
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-static"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Certificate Thumbnail */}
              <button
                onClick={() => openModal(cert)}
                className="flex-shrink-0 w-full md:w-48 h-40 relative bg-sage-50 rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={cert.imagePath}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 192px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white/95 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
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
                  className="mt-3 text-sage-600 text-sm font-medium hover:text-sage-700 transition-colors inline-flex items-center group"
                >
                  {viewCertificateText}
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Certificate Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 left-4 text-white z-10"
            >
              <h3 className="font-serif text-lg">{selectedCertificate.title}</h3>
              {selectedCertificate.hours && (
                <span className="text-sm text-gray-300">{selectedCertificate.hours}</span>
              )}
            </motion.div>

            {/* Certificate Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedCertificate.imagePath}
                alt={selectedCertificate.title}
                width={1200}
                height={1600}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </motion.div>

            {/* Navigation hint */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm"
            >
              {clickOutsideText}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
