import type { Metadata } from 'next'
import Link from 'next/link'
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
      <HeroSection title={dict.offerings.title} subtitle={dict.offerings.subtitle} />

      {/* Offerings */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {offerings.map((offering, index) => (
                <FadeIn
                  key={offering.title}
                  delay={index * 0.1}
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
                    <StaggerContainer className="space-y-2" staggerDelay={0.05}>
                      {offering.details.map((detail, detailIndex) => (
                        <StaggerItem
                          key={detailIndex}
                          className="flex items-start text-gray-600"
                        >
                          <span className="text-sage-500 mr-3">•</span>
                          {detail}
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
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
                        className="text-sage-600 font-medium hover:text-sage-700 inline-flex items-center group"
                      >
                        {offering.linkText}
                        <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                      </Link>
                    </div>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="section-title">{dict.offerings.approachTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {dict.offerings.approachP1}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-600 leading-relaxed">
                {dict.offerings.approachP2}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="section-title">{dict.offerings.readyTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 mb-8">{dict.offerings.readySubtitle}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href={`/${locale}/contact`} className="btn-primary">
                {dict.offerings.getInTouch}
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
