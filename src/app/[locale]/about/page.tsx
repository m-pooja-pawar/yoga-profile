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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-sage-50">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="page-title">{dict.about.title}</h1>
            <p className="text-lg text-gray-600">
              {dict.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* My Journey */}
            <div className="mb-16">
              <h2 className="section-title">{dict.about.journeyTitle}</h2>
              <div className="prose prose-sage max-w-none space-y-4 text-gray-600">
                <p>{dict.about.journeyP1}</p>
                <p>{dict.about.journeyP2}</p>
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div className="mb-16">
              <h2 className="section-title">{dict.about.philosophyTitle}</h2>
              <div className="space-y-4 text-gray-600">
                <p>{dict.about.philosophyP1}</p>
                <p>{dict.about.inMyClasses}</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-3">•</span>
                    <span>
                      <strong className="text-gray-800">{dict.about.alignment}:</strong>{' '}
                      {dict.about.alignmentDesc}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-3">•</span>
                    <span>
                      <strong className="text-gray-800">{dict.about.breath}:</strong>{' '}
                      {dict.about.breathDesc}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-3">•</span>
                    <span>
                      <strong className="text-gray-800">{dict.about.mindful}:</strong>{' '}
                      {dict.about.mindfulDesc}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage-500 mr-3">•</span>
                    <span>
                      <strong className="text-gray-800">{dict.about.individual}:</strong>{' '}
                      {dict.about.individualDesc}
                    </span>
                  </li>
                </ul>
                <p className="pt-4">{dict.about.philosophyP2}</p>
              </div>
            </div>

            {/* Specialization */}
            <div className="mb-16">
              <h2 className="section-title">{dict.about.focusTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="font-serif text-lg text-gray-900 mb-2">
                    {dict.about.traditionalYogaFocus}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {dict.about.traditionalYogaFocusDesc}
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-serif text-lg text-gray-900 mb-2">
                    {dict.about.prenatalYogaFocus}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {dict.about.prenatalYogaFocusDesc}
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-serif text-lg text-gray-900 mb-2">
                    {dict.about.postnatalYogaFocus}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {dict.about.postnatalYogaFocusDesc}
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-serif text-lg text-gray-900 mb-2">
                    {dict.about.holisticWellness}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {dict.about.holisticWellnessDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-sage-100">
              <p className="text-gray-600 mb-6">{dict.about.ctaText}</p>
              <Link href={`/${locale}/contact`} className="btn-primary">
                {dict.about.connectWithMe}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
