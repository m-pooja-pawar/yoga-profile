'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface HeroSectionProps {
  title: string
  subtitle?: string
  preContent?: ReactNode
  children?: ReactNode
  className?: string
}

export default function HeroSection({ title, subtitle, preContent, children, className = '' }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <section className={`bg-sage-50 ${className}`}>
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            {preContent}
            <h1 className="page-title">{title}</h1>
            {subtitle && <p className="text-lg md:text-xl text-gray-600">{subtitle}</p>}
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
          {preContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {preContent}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: preContent ? 0.15 : 0, ease: [0.25, 0.4, 0.25, 1] }}
            className="page-title"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: preContent ? 0.3 : 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg md:text-xl text-gray-600"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: preContent ? 0.45 : 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
