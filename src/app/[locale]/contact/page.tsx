import type { Metadata } from 'next'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/config'

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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-sage-50">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="page-title">{dict.contact.title}</h1>
            <p className="text-lg text-gray-600">{dict.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <a
                  key={method.name}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card block hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 mr-4">
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
                    <div className="flex-shrink-0 text-sage-400">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">{dict.contact.includeTitle}</h2>
            <div className="text-left mt-8">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-sage-500 mr-3 mt-1">•</span>
                  <span>
                    <strong className="text-gray-800">{dict.contact.include1Label}</strong>{' '}
                    {dict.contact.include1Text}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-500 mr-3 mt-1">•</span>
                  <span>
                    <strong className="text-gray-800">{dict.contact.include2Label}</strong>{' '}
                    {dict.contact.include2Text}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-500 mr-3 mt-1">•</span>
                  <span>
                    <strong className="text-gray-800">{dict.contact.include3Label}</strong>{' '}
                    {dict.contact.include3Text}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sage-500 mr-3 mt-1">•</span>
                  <span>
                    <strong className="text-gray-800">{dict.contact.include4Label}</strong>{' '}
                    {dict.contact.include4Text}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600">{dict.contact.responseText}</p>
          </div>
        </div>
      </section>
    </>
  )
}
