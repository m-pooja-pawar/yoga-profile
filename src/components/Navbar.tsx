'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import type { Locale } from '@/i18n/config'

interface NavbarProps {
  locale: Locale
  dict: {
    nav: {
      home: string
      about: string
      offerings: string
      prenatalYoga: string
      certifications: string
      contact: string
    }
    common: {
      yogaWellness: string
    }
  }
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: dict.nav.home, href: `/${locale}` },
    { name: dict.nav.about, href: `/${locale}/about` },
    { name: dict.nav.offerings, href: `/${locale}/offerings` },
    { name: dict.nav.prenatalYoga, href: `/${locale}/prenatal-yoga` },
    { name: dict.nav.certifications, href: `/${locale}/certifications` },
    { name: dict.nav.contact, href: `/${locale}/contact` },
  ]

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '')
    const newPath = `/${newLocale}${currentPath}`

    // Set cookie for locale preference
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`
    window.location.href = newPath
  }

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`border-b border-sage-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-scrolled' : 'navbar-top'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href={`/${locale}`}
            className="font-serif text-xl md:text-2xl text-sage-700 hover:text-sage-800 transition-colors duration-200"
          >
            {dict.common.yogaWellness}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-sans relative py-1 transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-sage-700 font-medium'
                    : 'text-gray-600 hover:text-sage-600'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-sage-600"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center border-l border-sage-200 pl-6 ml-2">
              <button
                onClick={() => switchLocale('en')}
                className={`text-sm px-2 py-1 rounded transition-all duration-200 ${
                  locale === 'en'
                    ? 'bg-sage-100 text-sage-700 font-medium'
                    : 'text-gray-500 hover:text-sage-600 hover:bg-sage-50'
                }`}
              >
                EN
              </button>
              <span className="text-gray-300 mx-1">|</span>
              <button
                onClick={() => switchLocale('hi')}
                className={`text-sm px-2 py-1 rounded transition-all duration-200 ${
                  locale === 'hi'
                    ? 'bg-sage-100 text-sage-700 font-medium'
                    : 'text-gray-500 hover:text-sage-600 hover:bg-sage-50'
                }`}
              >
                हिं
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Switcher */}
            <div className="flex items-center">
              <button
                onClick={() => switchLocale('en')}
                className={`text-xs px-2 py-1 rounded transition-all duration-200 ${
                  locale === 'en'
                    ? 'bg-sage-100 text-sage-700 font-medium'
                    : 'text-gray-500'
                }`}
              >
                EN
              </button>
              <span className="text-gray-300 mx-1">|</span>
              <button
                onClick={() => switchLocale('hi')}
                className={`text-xs px-2 py-1 rounded transition-all duration-200 ${
                  locale === 'hi'
                    ? 'bg-sage-100 text-sage-700 font-medium'
                    : 'text-gray-500'
                }`}
              >
                हिं
              </button>
            </div>

            <button
              type="button"
              className="p-2 text-gray-600 hover:text-sage-600 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  animate={isOpen ? { d: 'M6 18L18 6M6 6l12 12' } : { d: 'M4 6h16M4 12h16M4 18h16' }}
                  transition={{ duration: 0.2 }}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:hidden overflow-hidden border-t border-sage-100"
            >
              <div className="py-4">
                <div className="flex flex-col space-y-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className={`text-sm font-sans py-3 px-2 rounded-lg block transition-all duration-200 ${
                          isActive(item.href)
                            ? 'text-sage-700 font-medium bg-sage-50'
                            : 'text-gray-600 hover:bg-sage-50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
