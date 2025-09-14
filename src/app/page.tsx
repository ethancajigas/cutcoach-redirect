'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Results from '@/components/Results'
import AppShowcase from '@/components/AppShowcase'
import CoachMode from '@/components/CoachMode'
import TempTestimonials from '@/components/TempTestimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <Features />
        <Results />
        <AppShowcase />
        <CoachMode />
        <TempTestimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
