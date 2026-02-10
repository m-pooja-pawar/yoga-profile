'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Locale } from '@/i18n/config'

interface FooterProps {
  locale: Locale
  dict: {
    nav: {
      about: string
      offerings: string
      prenatalYoga: string
      contact: string
    }
    footer: {
      tagline: string
      quickLinks: string
      connect: string
      rights: string
    }
    common: {
      yogaWellness: string
    }
  }
}

export default function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: dict.nav.about, href: `/${locale}/about` },
    { name: dict.nav.offerings, href: `/${locale}/offerings` },
    { name: dict.nav.prenatalYoga, href: `/${locale}/prenatal-yoga` },
    { name: dict.nav.contact, href: `/${locale}/contact` },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="bg-sage-50 border-t border-sage-100"
    >
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-serif text-xl text-sage-700 mb-4">
              {dict.common.yogaWellness}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {dict.footer.tagline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg text-gray-900 mb-4">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-sage-600 transition-colors duration-200 inline-block link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-serif text-lg text-gray-900 mb-4">
              {dict.footer.connect}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:hello@yogaabhyasa.com"
                  className="hover:text-sage-600 transition-colors duration-200 inline-block link-underline"
                >
                  hello@yogaabhyasa.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sage-600 transition-colors duration-200 inline-block link-underline"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/yogawellness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sage-600 transition-colors duration-200 inline-block link-underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-sage-200"
        >
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear} {dict.common.yogaWellness}. {dict.footer.rights}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
