import type { Metadata } from 'next'
import { getDictionary } from '@/i18n/dictionaries'
import type { Locale } from '@/i18n/config'
import CertificateGallery from '@/components/CertificateGallery'
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
    title: dict.certifications.title,
    description: dict.certifications.subtitle,
  }
}

export default async function CertificationsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const certifications = [
    {
      id: '200hrs-yttc',
      title: dict.certifications.cert1.title,
      description: dict.certifications.cert1.description,
      hours: dict.certifications.cert1.hours,
      imagePath: '/certificates/200HrsYTTC.jpg',
    },
    {
      id: '300hrs-ytt',
      title: dict.certifications.cert2.title,
      description: dict.certifications.cert2.description,
      hours: dict.certifications.cert2.hours,
      imagePath: '/certificates/300HrsYTTC.png',
    },
    {
      id: '85hrs-prenatal',
      title: dict.certifications.cert3.title,
      description: dict.certifications.cert3.description,
      hours: dict.certifications.cert3.hours,
      imagePath: '/certificates/85HrsPrenatalPostnatal.png',
    },
    {
      id: 'workshop-infant',
      title: dict.certifications.cert4.title,
      description: dict.certifications.cert4.description,
      imagePath: '/certificates/WorkshopBreastFeedingAndInfantMassage.png',
    },
    {
      id: 'workshop-garbha',
      title: dict.certifications.cert5.title,
      description: dict.certifications.cert5.description,
      imagePath: '/certificates/WorkshopGarbhasanskara.png',
    },
  ]

  const commitments = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      title: dict.certifications.safety,
      desc: dict.certifications.safetyDesc,
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
      title: dict.certifications.authentic,
      desc: dict.certifications.authenticDesc,
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
      title: dict.certifications.compassion,
      desc: dict.certifications.compassionDesc,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection title={dict.certifications.title} subtitle={dict.certifications.subtitle} />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed">{dict.certifications.intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* Certifications Gallery */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-center mb-8">
                {dict.certifications.credentialsTitle}
              </h2>
            </FadeIn>
            <CertificateGallery
              certificates={certifications}
              viewText={dict.certifications.viewText}
              viewCertificateText={dict.certifications.viewCertificate}
              clickOutsideText={dict.certifications.clickOutsideText}
            />
          </div>
        </div>
      </section>

      {/* Continuing Education */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="section-title">{dict.certifications.continuingTitle}</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-600 leading-relaxed">
                {dict.certifications.continuingText}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-center">{dict.certifications.commitmentTitle}</h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {commitments.map((commitment) => (
                <StaggerItem key={commitment.title} className="text-center">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-sage-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {commitment.icon}
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-gray-900 mb-2">{commitment.title}</h3>
                  <p className="text-gray-600 text-sm">{commitment.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  )
}
