'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              Terms and Conditions
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
                1. Acceptance of Terms
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                By accessing and using CutCoach&apos;s weight cutting coaching platform, you accept and agree 
                to be bound by the terms and provision of this agreement. If you do not agree to abide by 
                the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                2. Description of Service
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                CutCoach is a weight cutting platform designed specifically for combat sport athletes. Our service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <li>Personalized weight cutting plans to safely cut up to 7% of bodyweight</li>
                <li>Evidence-based weight cutting strategies including water loading and glycogen depletion</li>
                <li>AI-powered meal plans and nutrition recommendations for fighters</li>
                <li>Food tracking with AI-powered photo analysis and logging</li>
                <li>Consistency tracking to monitor adherence to nutrition plans</li>
                <li>Daily activity schedules including cardio sessions and passive sweating protocols</li>
                <li>Post-weigh-in refueling strategies for optimal fight day performance</li>
                <li>Team chat and individual coaching support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                3. User Accounts and Registration
              </h2>
              <div className="space-y-4">
                <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                  To access certain features of our platform, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your account information to keep it accurate</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                4. Subscription and Payment Terms
              </h2>
              <div className="space-y-4">
                <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                  CutCoach offers various subscription plans. By subscribing, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                  <li>Pay all fees associated with your chosen subscription plan</li>
                  <li>Provide valid payment information and authorize recurring charges</li>
                  <li>Understand that subscriptions automatically renew unless cancelled</li>
                  <li>Cancel your subscription at least 24 hours before the next billing cycle</li>
                  <li>Accept that refunds are subject to our refund policy</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                5. Acceptable Use Policy
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                You agree not to use our platform to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or share harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our platform</li>
                <li>Use automated systems to access our services</li>
                <li>Share your account credentials with others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                6. Health and Safety Disclaimer
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <strong>IMPORTANT:</strong> CutCoach provides weight cutting guidance and coaching for combat sport athletes, but we are not medical professionals. Weight cutting can be dangerous and potentially life-threatening if not done properly. You acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <li>You should consult with a healthcare provider before starting any weight cutting program</li>
                <li>You are responsible for your own health and safety during the weight cutting process</li>
                <li>You will stop the weight cutting process immediately if you experience dizziness, fainting, extreme fatigue, or other concerning symptoms</li>
                <li>CutCoach is not liable for any injuries, health issues, or complications that may occur during weight cutting</li>
                <li>Our AI-powered recommendations are for guidance only and should not replace professional medical advice</li>
                <li>Weight cutting should only be performed under proper supervision and in accordance with competition rules</li>
                <li>You understand the risks associated with rapid weight loss and dehydration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                7. Intellectual Property Rights
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                All content, features, and functionality on our platform, including but not limited to text, 
                graphics, logos, software, AI-powered features, weight cutting protocols, and nutrition plans, are owned by CutCoach or its licensors and 
                are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                You may not reproduce, distribute, modify, or create derivative works without our express 
                written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                8. Privacy and Data Protection
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Your privacy is important to us. Our collection and use of your personal information, including health and fitness data, is 
                governed by our Privacy Policy, which is incorporated into these Terms by reference. 
                By using our platform, you consent to our collection and use of your information as 
                described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                9. Limitation of Liability
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                To the maximum extent permitted by law, CutCoach shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                <li>Loss of profits, data, or use</li>
                <li>Business interruption</li>
                <li>Personal injury, health complications, or property damage</li>
                <li>Any damages resulting from weight cutting activities or health issues</li>
                <li>Competition disqualification or performance issues</li>
                <li>Any damages resulting from your use of our platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                10. Service Availability
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                We strive to provide reliable service but cannot guarantee uninterrupted access. Our platform 
                may be temporarily unavailable due to maintenance, updates, or technical issues. We are not 
                liable for any damages resulting from service interruptions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                11. Termination
              </h2>
              <p className="mb-4 font-medium" style={{ color: 'var(--color-text-muted)' }}>
                We may terminate or suspend your account and access to our platform at any time, with or 
                without cause, with or without notice. You may also terminate your account at any time by 
                contacting us or using the account deletion feature in your settings.
              </p>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Upon termination, your right to use the platform will cease immediately, and we may delete 
                your account and data in accordance with our data retention policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                12. Governing Law and Dispute Resolution
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                These Terms shall be governed by and construed in accordance with the laws of the Province of 
                British Columbia, Canada, without regard to its conflict of law provisions. Any disputes arising from 
                these Terms or your use of our platform shall be resolved through binding arbitration 
                in Vancouver, British Columbia, Canada.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                13. Changes to Terms
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                We reserve the right to modify these Terms at any time. We will notify users of any material 
                changes by posting the updated Terms on our platform and updating the &quot;Last updated&quot; date. 
                Your continued use of our platform after such changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--color-text-primary)' }}>
                14. Contact Information
              </h2>
              <p className="font-medium" style={{ color: 'var(--color-text-muted)' }}>
                If you have any questions about these Terms and Conditions, please contact us at:
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
