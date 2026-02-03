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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-sage-50">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="page-title">{dict.prenatal.title}</h1>
            <p className="text-lg text-gray-600">{dict.prenatal.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
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
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dict.prenatal.disclaimerText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">{dict.prenatal.introTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {dict.prenatal.introP1}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {dict.prenatal.introP2}
            </p>
          </div>
        </div>
      </section>

      {/* Pose Gallery Placeholder */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-8">{dict.prenatal.galleryTitle}</h2>

            {/* Placeholder Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="aspect-[4/5] bg-sage-100 rounded-lg flex items-center justify-center"
                >
                  <div className="text-center p-4">
                    <svg
                      className="w-12 h-12 text-sage-300 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sage-400 text-sm">{dict.prenatal.comingSoon}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              {dict.prenatal.galleryNote}
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-8">{dict.prenatal.expectTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-gray-900 mb-2">{dict.prenatal.gentle}</h3>
                <p className="text-gray-600 text-sm">{dict.prenatal.gentleDesc}</p>
              </div>
              <div className="card text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-gray-900 mb-2">{dict.prenatal.trimester}</h3>
                <p className="text-gray-600 text-sm">{dict.prenatal.trimesterDesc}</p>
              </div>
              <div className="card text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-gray-900 mb-2">{dict.prenatal.breathRelax}</h3>
                <p className="text-gray-600 text-sm">{dict.prenatal.breathRelaxDesc}</p>
              </div>
              <div className="card text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-gray-900 mb-2">{dict.prenatal.personal}</h3>
                <p className="text-gray-600 text-sm">{dict.prenatal.personalDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">{dict.prenatal.ctaTitle}</h2>
            <p className="text-gray-600 mb-8">{dict.prenatal.ctaText}</p>
            <Link href={`/${locale}/contact`} className="btn-primary">
              {dict.prenatal.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
