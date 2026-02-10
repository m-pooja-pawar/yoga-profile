import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/config'
import OfferingCard from '@/components/OfferingCard'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer'
import HeroSection from '@/components/animations/HeroSection'

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
      <HeroSection
        title={dict.home.heroTitle}
        subtitle={dict.home.heroSubtitle}
        preContent={
          <div className="mb-6">
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-sage-200 shadow-md">
              <Image
                src="/profilePhoto.jpg"
                alt={dict.common.profileAlt}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h2 className="font-serif text-2xl text-gray-900">{dict.common.teacherName}</h2>
            <p className="text-sage-600 text-sm mt-1">{dict.common.teacherTagline}</p>
          </div>
        }
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href={`/${locale}/contact`} className="btn-primary">
            {dict.home.beginJourney}
          </Link>
          <Link href={`/${locale}/about`} className="btn-secondary">
            {dict.home.learnMore}
          </Link>
        </div>
      </HeroSection>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="section-title">{dict.home.welcomeTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 leading-relaxed mb-6">
                {dict.home.welcomeP1}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-600 leading-relaxed">
                {dict.home.welcomeP2}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="section-title">{dict.home.offeringsTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dict.home.offeringsSubtitle}
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((offering) => (
              <StaggerItem key={offering.title}>
                <OfferingCard
                  title={offering.title}
                  description={offering.description}
                  href={offering.href}
                  learnMoreText={dict.common.learnMore}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="section-title">{dict.home.readyTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 mb-8">
                {dict.home.readySubtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href={`/${locale}/contact`} className="btn-primary">
                {dict.home.getInTouch}
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
