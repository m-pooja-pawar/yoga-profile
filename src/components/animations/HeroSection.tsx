'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface HeroSectionProps {
  title: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export default function HeroSection({ title, subtitle, children, className = '' }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <section className={`bg-sage-50 ${className}`}>
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="page-title">{title}</h1>
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
            {children}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`bg-sage-50 ${className}`}>
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="page-title"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg text-gray-600"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
