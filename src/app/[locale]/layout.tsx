import type { Metadata } from 'next'
import { i18n, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | ${dict.common.yogaAbhyasa}`,
    },
    description: dict.metadata.description,
    keywords: ['yoga', 'prenatal yoga', 'postnatal yoga', 'holistic wellness', 'traditional yoga', 'yoga teacher'],
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <Navbar locale={locale} dict={dict} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  )
}
