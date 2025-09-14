'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function EmailSender() {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [recipients, setRecipients] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const loadWaitlistTemplate = () => {
    setSubject('CutCoach Update - [Your Update Here]')
    setBody(`
<p style="font-size: 16px; line-height: 1.6;">[Add your personalized message here]</p>

<p style="font-size: 16px; line-height: 1.6;">Stay tuned for more updates, and feel free to reply to this email if you have any questions or feedback.</p>

<p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">Best,<br>The CutCoach Team</p>
    `.trim())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!subject.trim()) {
      setMessage('Please enter a subject')
      setIsSuccess(false)
      return
    }

    if (!body.trim()) {
      setMessage('Please enter email body')
      setIsSuccess(false)
      return
    }

    if (!recipients.trim()) {
      setMessage('Please enter at least one recipient')
      setIsSuccess(false)
      return
    }

    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject,
          body,
          recipients: recipients.split(',').map(email => email.trim()).filter(email => email)
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        setIsSuccess(true)
        setSubject('')
        setBody('')
        setRecipients('')
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.')
        setIsSuccess(false)
      }
    } catch (error) {
      setMessage('Network error. Please try again.')
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/cutcoach_logo_white_transparent.png"
          alt="CutCoach Logo"
          width={200}
          height={80}
          className="w-auto h-20"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bebas text-white text-center mb-6 tracking-wider">
        EMAIL SENDER
      </h1>

      {/* Template Button */}
      <div className="mb-8">
        <button
          type="button"
          onClick={loadWaitlistTemplate}
          className="px-6 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-all duration-300"
        >
          Load Waitlist Email Template
        </button>
      </div>

      {/* Email Form */}
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter email subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
              disabled={isLoading}
            />
          </div>

          {/* Recipients */}
          <div>
            <label htmlFor="recipients" className="block text-white text-sm font-medium mb-2">
              Recipients (comma-separated emails)
            </label>
            <textarea
              id="recipients"
              placeholder="email1@example.com, email2@example.com, ..."
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
              disabled={isLoading}
            />
          </div>

          {/* Body */}
          <div>
            <label htmlFor="body" className="block text-white text-sm font-medium mb-2">
              Email Body (HTML supported)
            </label>
            <textarea
              id="body"
              placeholder="Enter your email content here..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={12}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
              disabled={isLoading}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'SENDING...' : 'SEND EMAILS'}
            </button>
          </div>

          {/* Message Display */}
          {message && (
            <div className={`text-center text-sm p-4 rounded-lg ${isSuccess ? 'bg-green-900/20 text-green-400 border border-green-500/20' : 'bg-red-900/20 text-red-400 border border-red-500/20'}`}>
              {message}
            </div>
          )}
        </form>
      </div>

      {/* Instructions */}
      <div className="mt-12 text-center text-gray-400 text-sm max-w-xl">
        <p className="mb-2">
          Use the "Load Waitlist Email Template" button to pre-fill with your standard email template.
        </p>
        <p className="mb-4">
          This page allows you to send emails to your waitlist subscribers.
          Use comma-separated email addresses in the recipients field.
        </p>
        <p className="mb-2">
          Your email body will be wrapped with the same professional HTML template used for waitlist emails.
        </p>
        <p>
          HTML formatting is supported in the email body for rich content.
        </p>
      </div>
    </main>
  )
}
