'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function MedicalDisclaimer() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--color-border-light)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/"
            className="inline-flex items-center text-sm font-medium transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--color-accent-blue)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--color-text-muted)'}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Medical Disclaimer
            </h1>
            <p className="text-lg font-medium" style={{ color: 'var(--color-text-muted)' }}>
              Last updated: August 21, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text-primary)' }}>
            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                General Disclaimer
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                CutCoach is a weight cutting and nutrition guidance platform designed for combat sport athletes. The information, features, and recommendations provided by CutCoach, including AI-powered plans, nutrition guidance, and weight cutting protocols, are for educational and informational purposes only.
              </p>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                CutCoach is not a medical service, and we are not licensed medical professionals. The content provided on our platform should not be considered medical advice, diagnosis, or treatment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Consultation with Healthcare Professionals
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                You should always consult with a qualified healthcare provider, physician, or registered dietitian before:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <li>Beginning any weight cutting program</li>
                <li>Following any nutrition or hydration protocol</li>
                <li>Making significant changes to your diet, exercise, or health routines</li>
              </ul>
              <p className="mt-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                If you experience symptoms such as dizziness, fainting, chest pain, irregular heartbeat, extreme fatigue, or any concerning health issues during weight cutting, you should stop immediately and seek medical attention.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                User Acknowledgment
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                By using CutCoach, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <li>You are solely responsible for your own health and safety.</li>
                <li>You will not rely exclusively on CutCoach for weight cutting or nutrition decisions.</li>
                <li>You accept the risks associated with rapid weight loss, dehydration, and athletic performance practices.</li>
                <li>You understand that improper weight cutting can be dangerous and potentially life-threatening.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Limitation of Liability
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                CutCoach, its owners, developers, and affiliates are not liable for any injuries, health issues, medical complications, or damages resulting from the use of our platform, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <li>Weight cutting practices</li>
                <li>Nutrition or hydration protocols</li>
                <li>Competition disqualification or reduced performance</li>
              </ul>
              <p className="mt-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Use of the platform is at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Emergency Situations
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                If you believe you are experiencing a medical emergency, call 911 (Canada/US) or the appropriate emergency number in your country immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Changes to Disclaimer
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                We may update this Medical Disclaimer from time to time. Any changes will be posted within the platform and reflected by the "Last updated" date above. Your continued use of the platform after such changes constitutes acceptance of the updated disclaimer.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
