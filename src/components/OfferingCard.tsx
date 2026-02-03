'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface OfferingCardProps {
  title: string
  description: string
  href?: string
  learnMoreText?: string
}

export default function OfferingCard({ title, description, href, learnMoreText = 'Learn more' }: OfferingCardProps) {
  const CardContent = () => (
    <>
      <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4 icon-float">
        <svg
          className="w-6 h-6 text-sage-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <h3 className="font-serif text-xl text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      {href && (
        <span className="inline-flex items-center mt-4 text-sage-600 text-sm font-medium group-hover:text-sage-700 transition-colors">
          {learnMoreText}
          <motion.span
            className="ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            &rarr;
          </motion.span>
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className="card block group">
        <CardContent />
      </Link>
    )
  }

  return (
    <div className="card group">
      <CardContent />
    </div>
  )
}
