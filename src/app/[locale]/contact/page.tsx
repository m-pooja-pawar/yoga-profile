import type { Metadata } from 'next'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/config'
import HeroSection from '@/components/animations/HeroSection'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: dict.contact.title,
    description: dict.contact.subtitle,
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const contactMethods = [
    {
      name: dict.contact.email,
      value: dict.contact.emailValue,
      href: `mailto:${dict.contact.emailValue}`,
      description: dict.contact.emailDesc,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: dict.contact.whatsapp,
      value: dict.contact.whatsappValue,
      href: 'https://wa.me/1234567890',
      description: dict.contact.whatsappDesc,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      name: dict.contact.instagram,
      value: dict.contact.instagramValue,
      href: 'https://instagram.com/yogawellness',
      description: dict.contact.instagramDesc,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2m-4-4a4 4 0 100-8 4 4 0 000 8zm5-4h.01"
          />
        </svg>
      ),
    },
  ]

  const includeItems = [
    { label: dict.contact.include1Label, text: dict.contact.include1Text },
    { label: dict.contact.include2Label, text: dict.contact.include2Text },
    { label: dict.contact.include3Label, text: dict.contact.include3Text },
    { label: dict.contact.include4Label, text: dict.contact.include4Text },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection title={dict.contact.title} subtitle={dict.contact.subtitle} />

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <StaggerContainer className="space-y-6">
              {contactMethods.map((method) => (
                <StaggerItem key={method.name}>
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="card block group"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 mr-4 icon-float">
                        {method.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-serif text-lg text-gray-900 mb-1">
                          {method.name}
                        </h3>
                        <p className="text-sage-600 font-medium mb-2">
                          {method.value}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {method.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-sage-400 transition-transform duration-200 group-hover:translate-x-1">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="section-title">{dict.contact.includeTitle}</h2>
            </FadeIn>
            <div className="text-left mt-8">
              <StaggerContainer className="space-y-4 text-gray-600" staggerDelay={0.08}>
                {includeItems.map((item, index) => (
                  <StaggerItem key={index} className="flex items-start">
                    <span className="text-sage-500 mr-3 mt-1">•</span>
                    <span>
                      <strong className="text-gray-800">{item.label}</strong>{' '}
                      {item.text}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600">{dict.contact.responseText}</p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
