import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/config'
import HeroSection from '@/components/animations/HeroSection'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer'
import HathaYogaGallery from '@/components/HathaYogaGallery'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: dict.hathaYoga.title,
    description: dict.hathaYoga.subtitle,
  }
}

export default async function HathaYogaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const features = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
      title: dict.hathaYoga.classical,
      desc: dict.hathaYoga.classicalDesc,
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      ),
      title: dict.hathaYoga.surya,
      desc: dict.hathaYoga.suryaDesc,
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
      title: dict.hathaYoga.breathMovement,
      desc: dict.hathaYoga.breathMovementDesc,
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
      title: dict.hathaYoga.personal,
      desc: dict.hathaYoga.personalDesc,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection title={dict.hathaYoga.title} subtitle={dict.hathaYoga.subtitle} />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="section-title">{dict.hathaYoga.introTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 leading-relaxed mb-6">
                {dict.hathaYoga.introP1}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-600 leading-relaxed">
                {dict.hathaYoga.introP2}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sequence Gallery */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-center mb-8">{dict.hathaYoga.galleryTitle}</h2>
            </FadeIn>

            <HathaYogaGallery
              images={[
                { id: 'hatha-surya-namaskara', src: '/hatha-yoga/1HathaYogaSuryaNamaskara.gif', alt: 'Hatha Yoga Surya Namaskara', title: dict.hathaYoga.seq1Title },
                { id: 'ashtanga-surya-namaskar-a', src: '/hatha-yoga/2AshtangaSuryaNamaskarA.gif', alt: 'Ashtanga Surya Namaskar A', title: dict.hathaYoga.seq2Title },
                { id: 'ashtanga-surya-namaskar-b', src: '/hatha-yoga/3AshtangaSuryaNamaskarB.gif', alt: 'Ashtanga Surya Namaskar B', title: dict.hathaYoga.seq3Title },
              ]}
              viewText={dict.hathaYoga.galleryView}
              clickOutsideText={dict.hathaYoga.galleryClickOutside}
              prevText={dict.hathaYoga.galleryPrev}
              nextText={dict.hathaYoga.galleryNext}
            />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-center mb-8">{dict.hathaYoga.expectTitle}</h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="card text-center group">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 icon-float">
                      <svg className="w-6 h-6 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {feature.icon}
                      </svg>
                    </div>
                    <h3 className="font-serif text-lg text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-base">{feature.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="section-title">{dict.hathaYoga.ctaTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 mb-8">{dict.hathaYoga.ctaText}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href={`/${locale}/contact`} className="btn-primary">
                {dict.hathaYoga.ctaButton}
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
