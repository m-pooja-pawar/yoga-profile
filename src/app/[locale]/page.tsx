import Link from 'next/link'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/config'
import OfferingCard from '@/components/OfferingCard'

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const offerings = [
    {
      title: dict.home.traditionalYoga,
      description: dict.home.traditionalYogaDesc,
      href: `/${locale}/offerings`,
    },
    {
      title: dict.home.prenatalYoga,
      description: dict.home.prenatalYogaDesc,
      href: `/${locale}/prenatal-yoga`,
    },
    {
      title: dict.home.postnatalYoga,
      description: dict.home.postnatalYogaDesc,
      href: `/${locale}/offerings`,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-sage-50">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
              {dict.home.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {dict.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`} className="btn-primary">
                {dict.home.beginJourney}
              </Link>
              <Link href={`/${locale}/about`} className="btn-secondary">
                {dict.home.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">{dict.home.welcomeTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {dict.home.welcomeP1}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {dict.home.welcomeP2}
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{dict.home.offeringsTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dict.home.offeringsSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((offering) => (
              <OfferingCard
                key={offering.title}
                title={offering.title}
                description={offering.description}
                href={offering.href}
                learnMoreText={dict.common.learnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">{dict.home.readyTitle}</h2>
            <p className="text-gray-600 mb-8">
              {dict.home.readySubtitle}
            </p>
            <Link href={`/${locale}/contact`} className="btn-primary">
              {dict.home.getInTouch}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
