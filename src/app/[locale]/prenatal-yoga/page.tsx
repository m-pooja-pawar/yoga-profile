import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/config'
import HeroSection from '@/components/animations/HeroSection'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer'
import PrenatalGallery, { type GalleryImage } from '@/components/PrenatalGallery'

// Prenatal yoga images with their actual dimensions for proper aspect ratio display
// GIF is at index 0 (top) as the featured element
const prenatalImages: GalleryImage[] = [
  // GIF at the top as featured element
  { id: 'prenatal-seating-sequence', src: '/prenatal/prenatal-seating-sequence.gif', alt: 'Prenatal yoga seating sequence', width: 598, height: 480, isGif: true },
  // All photos follow in order
  { id: 'prenatal-001', src: '/prenatal/prenatal-001.jpg', alt: 'Prenatal yoga pose 1', width: 3817, height: 4096 },
  { id: 'prenatal-002', src: '/prenatal/prenatal-002.jpg', alt: 'Prenatal yoga pose 2', width: 3843, height: 4096 },
  { id: 'prenatal-003', src: '/prenatal/prenatal-003.jpg', alt: 'Prenatal yoga pose 3', width: 4096, height: 4096 },
  { id: 'prenatal-004', src: '/prenatal/prenatal-004.jpg', alt: 'Prenatal yoga pose 4', width: 3736, height: 4096 },
  { id: 'prenatal-005', src: '/prenatal/prenatal-005.jpg', alt: 'Prenatal yoga pose 5', width: 4096, height: 4096 },
  { id: 'prenatal-006', src: '/prenatal/prenatal-006.jpg', alt: 'Prenatal yoga pose 6', width: 4096, height: 3402 },
  { id: 'prenatal-007', src: '/prenatal/prenatal-007.jpg', alt: 'Prenatal yoga pose 7', width: 4096, height: 4096 },
  { id: 'prenatal-008', src: '/prenatal/prenatal-008.jpg', alt: 'Prenatal yoga pose 8', width: 4096, height: 2788 },
  { id: 'prenatal-009', src: '/prenatal/prenatal-009.jpg', alt: 'Prenatal yoga pose 9', width: 4096, height: 3015 },
  { id: 'prenatal-010', src: '/prenatal/prenatal-010.jpg', alt: 'Prenatal yoga pose 10', width: 4096, height: 2723 },
  { id: 'prenatal-011', src: '/prenatal/prenatal-011.jpg', alt: 'Prenatal yoga pose 11', width: 1921, height: 4096 },
  { id: 'prenatal-012', src: '/prenatal/prenatal-012.jpg', alt: 'Prenatal yoga pose 12', width: 3346, height: 4096 },
  { id: 'prenatal-013', src: '/prenatal/prenatal-013.jpg', alt: 'Prenatal yoga pose 13', width: 4096, height: 3868 },
  { id: 'prenatal-014', src: '/prenatal/prenatal-014.jpg', alt: 'Prenatal yoga pose 14', width: 4096, height: 4096 },
  { id: 'prenatal-015', src: '/prenatal/prenatal-015.jpg', alt: 'Prenatal yoga pose 15', width: 4096, height: 4096 },
  { id: 'prenatal-016', src: '/prenatal/prenatal-016.jpg', alt: 'Prenatal yoga pose 16', width: 4096, height: 2078 },
  { id: 'prenatal-017', src: '/prenatal/prenatal-017.jpg', alt: 'Prenatal yoga pose 17', width: 4096, height: 4096 },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return {
    title: dict.prenatal.title,
    description: dict.prenatal.subtitle,
  }
}

export default async function PrenatalYogaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const features = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      ),
      title: dict.prenatal.gentle,
      desc: dict.prenatal.gentleDesc,
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: dict.prenatal.trimester,
      desc: dict.prenatal.trimesterDesc,
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
      title: dict.prenatal.breathRelax,
      desc: dict.prenatal.breathRelaxDesc,
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
      title: dict.prenatal.personal,
      desc: dict.prenatal.personalDesc,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection title={dict.prenatal.title} subtitle={dict.prenatal.subtitle} />

      {/* Disclaimer */}
      <FadeIn>
        <section className="py-8 bg-sand-50 border-y border-sand-200">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-sand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-lg text-gray-900 mb-2">
                    {dict.prenatal.disclaimerTitle}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {dict.prenatal.disclaimerText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="section-title">{dict.prenatal.introTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 leading-relaxed mb-6">
                {dict.prenatal.introP1}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-600 leading-relaxed">
                {dict.prenatal.introP2}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pose Gallery */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-center mb-8">{dict.prenatal.galleryTitle}</h2>
            </FadeIn>

            <PrenatalGallery
              images={prenatalImages}
              featuredIndex={0}
              viewText={dict.prenatal.galleryView}
              clickOutsideText={dict.prenatal.galleryClickOutside}
              prevText={dict.prenatal.galleryPrev}
              nextText={dict.prenatal.galleryNext}
            />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-center mb-8">{dict.prenatal.expectTitle}</h2>
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
              <h2 className="section-title">{dict.prenatal.ctaTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 mb-8">{dict.prenatal.ctaText}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href={`/${locale}/contact`} className="btn-primary">
                {dict.prenatal.ctaButton}
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
