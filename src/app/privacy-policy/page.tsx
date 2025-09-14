'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-lg font-medium" style={{ color: 'var(--color-text-muted)' }}>
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text-primary)' }}>
            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                1. Introduction
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Welcome to CutCoach. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use 
                our weight cutting platform with AI-powered features designed specifically for combat sport athletes.
              </p>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                CutCoach is based in Vancouver, British Columbia, Canada, and operates in accordance with 
                Canadian privacy laws and regulations, including the Personal Information Protection and 
                Electronic Documents Act (PIPEDA).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    Personal Information
                  </h3>
                  <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    We collect information you provide directly to us, such as when you create an account, 
                    complete your profile, or contact us for support. This may include:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    <li>Name, email address, and contact information</li>
                    <li>Gender and height measurements</li>
                    <li>Body fat percentage and body composition data</li>
                    <li>Current weight and target weight for weight cutting</li>
                    <li>Competition details including sport type, weight class, and weight allowance</li>
                    <li>Competition timeline including weigh-in dates and timing</li>
                    <li>Activity level and sweat rate information</li>
                    <li>Payment information for subscription services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    Weight Cutting and Nutrition Data
                  </h3>
                  <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    We collect detailed information about your weight cutting journey, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    <li>Weight cut plan details including start/end dates and intensity calculations</li>
                    <li>Daily weight measurements and progress tracking</li>
                    <li>Food intake and nutrition logging (including photos of meals analyzed by AI)</li>
                    <li>Water intake and hydration levels</li>
                    <li>Activity levels, exercise routines, and training schedules</li>
                    <li>Sleep patterns and recovery data</li>
                    <li>Weight cutting protocol adherence and daily plan completion</li>
                    <li>Post-weigh-in refueling strategies and meal plans</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    Usage Data
                  </h3>
                  <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    We automatically collect certain information about your use of our platform, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    <li>App usage patterns and feature interactions</li>
                    <li>AI-powered coaching session data and recommendations</li>
                    <li>Weight cut plan generation and modification history</li>
                    <li>Device information, IP address, and platform usage</li>
                    <li>Cookies and similar technologies for session management</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                3. How We Use Your Information
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <li>Create personalized weight cutting plans with intensity calculations</li>
                <li>Generate AI-powered nutrition recommendations and meal plans</li>
                <li>Track your weight cutting progress and provide insights</li>
                <li>Analyze food photos using AI and provide nutritional information</li>
                <li>Monitor adherence to weight cutting protocols and daily plans</li>
                <li>Provide refueling strategies for post-weigh-in recovery</li>
                <li>Calculate and track weight cut intensity and safety metrics</li>
                <li>Process payments and manage your subscription</li>
                <li>Send you important updates and notifications</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                4. Information Sharing
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <li>With your explicit consent</li>
                <li>With service providers who assist in operating our platform</li>
                <li>To comply with legal requirements or protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                5. Data Security
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                We implement appropriate technical and organizational measures to protect your personal 
                information, including sensitive health and weight cutting data, against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet 
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                6. Your Rights
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <li>Access and review your personal information and weight cutting data</li>
                <li>Update or correct inaccurate information including weight cut plans</li>
                <li>Request deletion of your personal data and weight cutting history</li>
                <li>Stop or modify active weight cut plans</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent for data processing</li>
                <li>Request restriction of processing of your health data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                7. Cookies and Tracking
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                and provide personalized content. You can control cookie settings through your browser 
                preferences, though disabling certain cookies may affect platform functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                8. Children&apos;s Privacy
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Our platform is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you believe we have collected 
                information from a child under 13, please contact us immediately. For users between 13-18 
                years old, parental consent may be required for weight cutting activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                9. International Transfers
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data in accordance with 
                this privacy policy and applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                10. Changes to This Policy
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                We may update this privacy policy from time to time. We will notify you of any material 
                changes by posting the new policy on our platform and updating the &quot;Last updated&quot; date. 
                Your continued use of our platform after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                11. Contact Us
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Email:</strong> info@cutcoach.app
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
