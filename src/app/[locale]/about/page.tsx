import type { Metadata } from 'next'
import Image from 'next/image'
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
    title: dict.about.title,
    description: dict.about.subtitle,
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const philosophyPoints = [
    { label: dict.about.alignment, desc: dict.about.alignmentDesc },
    { label: dict.about.breath, desc: dict.about.breathDesc },
    { label: dict.about.mindful, desc: dict.about.mindfulDesc },
    { label: dict.about.individual, desc: dict.about.individualDesc },
  ]

  const focusAreas = [
    { title: dict.about.traditionalYogaFocus, desc: dict.about.traditionalYogaFocusDesc },
    { title: dict.about.prenatalYogaFocus, desc: dict.about.prenatalYogaFocusDesc },
    { title: dict.about.postnatalYogaFocus, desc: dict.about.postnatalYogaFocusDesc },
    { title: dict.about.holisticWellness, desc: dict.about.holisticWellnessDesc },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={dict.common.teacherName}
        subtitle={dict.about.subtitle}
        preContent={
          <div className="mb-4">
            <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-sage-200 shadow-lg">
              <Image
                src="/profilePhoto.jpg"
                alt={dict.common.profileAlt}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        }
      />

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* My Journey */}
            <div className="mb-16">
              <FadeIn>
                <h2 className="section-title">{dict.about.journeyTitle}</h2>
              </FadeIn>
              <div className="prose prose-sage max-w-none space-y-4 text-gray-600">
                <FadeIn delay={0.1}>
                  <p>{dict.about.journeyP1}</p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p>{dict.about.journeyP2}</p>
                </FadeIn>
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div className="mb-16">
              <FadeIn>
                <h2 className="section-title">{dict.about.philosophyTitle}</h2>
              </FadeIn>
              <div className="space-y-4 text-gray-600">
                <FadeIn delay={0.1}>
                  <p>{dict.about.philosophyP1}</p>
                </FadeIn>
                <FadeIn delay={0.15}>
                  <p>{dict.about.inMyClasses}</p>
                </FadeIn>
                <StaggerContainer className="space-y-3 ml-4" staggerDelay={0.08}>
                  {philosophyPoints.map((point) => (
                    <StaggerItem key={point.label}>
                      <div className="flex items-start">
                        <span className="text-sage-500 mr-3">•</span>
                        <span>
                          <strong className="text-gray-800">{point.label}:</strong>{' '}
                          {point.desc}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <FadeIn delay={0.4}>
                  <p className="pt-4">{dict.about.philosophyP2}</p>
                </FadeIn>
              </div>
            </div>

            {/* Specialization */}
            <div className="mb-16">
              <FadeIn>
                <h2 className="section-title">{dict.about.focusTitle}</h2>
              </FadeIn>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {focusAreas.map((area) => (
                  <StaggerItem key={area.title}>
                    <div className="card">
                      <h3 className="font-serif text-lg text-gray-900 mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {area.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* CTA */}
            <FadeIn>
              <div className="text-center pt-8 border-t border-sage-100">
                <p className="text-gray-600 mb-6">{dict.about.ctaText}</p>
                <Link href={`/${locale}/contact`} className="btn-primary">
                  {dict.about.connectWithMe}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
