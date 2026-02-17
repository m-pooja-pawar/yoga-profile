'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  isGif?: boolean
}

interface PrenatalGalleryProps {
  images: GalleryImage[]
  featuredIndex?: number // Index of the image to display centered/prominently
  viewText?: string
  clickOutsideText?: string
  prevText?: string
  nextText?: string
}

export default function PrenatalGallery({
  images,
  featuredIndex,
  viewText = 'View',
  clickOutsideText = 'Click outside to close',
  prevText = 'Previous',
  nextText = 'Next'
}: PrenatalGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = useCallback(() => {
    setSelectedIndex(null)
    document.body.style.overflow = 'unset'
  }, [])

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev! + 1) % images.length)
  }, [selectedIndex, images.length])

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length)
  }, [selectedIndex, images.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrevious()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, closeModal, goToNext, goToPrevious])

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null

  // Split images into sections if featuredIndex is provided
  const hasFeatured = featuredIndex !== undefined && featuredIndex >= 0 && featuredIndex < images.length
  const imagesBefore = hasFeatured ? images.slice(0, featuredIndex) : images
  const featuredImage = hasFeatured ? images[featuredIndex] : null
  const imagesAfter = hasFeatured ? images.slice(featuredIndex + 1) : []

  // Render a single image item
  const renderImageItem = (image: GalleryImage, index: number, delayOffset: number = 0) => (
    <motion.div
      key={image.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: ((index + delayOffset) % 6) * 0.08 }}
      className="break-inside-avoid mb-3 sm:mb-4 lg:mb-6"
    >
      <button
        onClick={() => openModal(images.indexOf(image))}
        className="relative w-full rounded-lg overflow-hidden group cursor-pointer block"
      >
        {/* GIF Badge */}
        {image.isGif && (
          <div className="absolute top-2 right-2 z-10 bg-sage-600 text-white text-xs px-2 py-1 rounded-full font-medium">
            GIF
          </div>
        )}

        {/* Image */}
        {image.isGif ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white/95 text-gray-800 px-4 py-2 rounded-full text-base font-medium shadow-lg">
            {viewText}
          </span>
        </div>
      </button>
    </motion.div>
  )

  return (
    <>
      {/* Top Section - Images before featured */}
      {imagesBefore.length > 0 && (
        <div className="columns-2 sm:columns-3 gap-3 sm:gap-4 lg:gap-6">
          {imagesBefore.map((image, index) => renderImageItem(image, index))}
        </div>
      )}

      {/* Featured Image - Centered */}
      {featuredImage && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="my-8 sm:my-12"
        >
          <button
            onClick={() => openModal(featuredIndex!)}
            className="relative mx-auto block max-w-2xl rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* GIF Badge */}
            {featuredImage.isGif && (
              <div className="absolute top-3 right-3 z-10 bg-sage-600 text-white text-sm px-3 py-1.5 rounded-full font-medium shadow-md">
                GIF
              </div>
            )}

            {/* Featured Image */}
            {featuredImage.isGif ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={featuredImage.src}
                alt={featuredImage.alt}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
                width={featuredImage.width}
                height={featuredImage.height}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 672px"
                priority
              />
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-base font-medium shadow-lg">
                {viewText}
              </span>
            </div>
          </button>
        </motion.div>
      )}

      {/* Bottom Section - Images after featured */}
      {imagesAfter.length > 0 && (
        <div className="columns-2 sm:columns-3 gap-3 sm:gap-4 lg:gap-6">
          {imagesAfter.map((image, index) => renderImageItem(image, index, imagesBefore.length + 1))}
        </div>
      )}

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
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

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 left-4 text-white z-10"
            >
              <span className="text-sm font-medium bg-black/30 px-3 py-1 rounded-full">
                {selectedIndex + 1} / {images.length}
              </span>
            </motion.div>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-3 hover:bg-white/10 rounded-full"
              aria-label={prevText}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-3 hover:bg-white/10 rounded-full"
              aria-label={nextText}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.isGif ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                  sizes="90vw"
                  priority
                />
              )}
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
