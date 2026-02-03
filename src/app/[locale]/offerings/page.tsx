import type { Metadata } from 'next'
import Link from 'next/link'
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
    title: dict.offerings.title,
    description: dict.offerings.subtitle,
  }
}

export default async function OfferingsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const offerings = [
    {
      title: dict.offerings.traditional.title,
      description: dict.offerings.traditional.description,
      details: [
        dict.offerings.traditional.detail1,
        dict.offerings.traditional.detail2,
        dict.offerings.traditional.detail3,
        dict.offerings.traditional.detail4,
        dict.offerings.traditional.detail5,
      ],
      ideal: dict.offerings.traditional.ideal,
    },
    {
      title: dict.offerings.prenatal.title,
      description: dict.offerings.prenatal.description,
      details: [
        dict.offerings.prenatal.detail1,
        dict.offerings.prenatal.detail2,
        dict.offerings.prenatal.detail3,
        dict.offerings.prenatal.detail4,
        dict.offerings.prenatal.detail5,
      ],
      ideal: dict.offerings.prenatal.ideal,
      link: `/${locale}/prenatal-yoga`,
      linkText: dict.offerings.viewGuide,
    },
    {
      title: dict.offerings.postnatal.title,
      description: dict.offerings.postnatal.description,
      details: [
        dict.offerings.postnatal.detail1,
        dict.offerings.postnatal.detail2,
        dict.offerings.postnatal.detail3,
        dict.offerings.postnatal.detail4,
        dict.offerings.postnatal.detail5,
        dict.offerings.postnatal.detail6,
      ],
      ideal: dict.offerings.postnatal.ideal,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-sage-50">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="page-title">{dict.offerings.title}</h1>
            <p className="text-lg text-gray-600">{dict.offerings.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {offerings.map((offering, index) => (
                <div
                  key={offering.title}
                  className={`pb-16 ${
                    index < offerings.length - 1 ? 'border-b border-sage-100' : ''
                  }`}
                >
                  <h2 className="section-title">{offering.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {offering.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-serif text-gray-800 mb-3">
                      {dict.offerings.whatToExpect}
                    </h3>
                    <ul className="space-y-2">
                      {offering.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start text-gray-600"
                        >
                          <span className="text-sage-500 mr-3">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-sage-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <span className="font-medium">{dict.offerings.idealFor} </span>
                      {offering.ideal}
                    </p>
                  </div>

                  {offering.link && (
                    <div className="mt-6">
                      <Link
                        href={offering.link}
                        className="text-sage-600 font-medium hover:text-sage-700"
                      >
                        {offering.linkText} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">{dict.offerings.approachTitle}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {dict.offerings.approachP1}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {dict.offerings.approachP2}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">{dict.offerings.readyTitle}</h2>
            <p className="text-gray-600 mb-8">{dict.offerings.readySubtitle}</p>
            <Link href={`/${locale}/contact`} className="btn-primary">
              {dict.offerings.getInTouch}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
