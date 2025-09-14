'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address')
      setIsSuccess(false)
      return
    }

    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        setIsSuccess(true)
        setEmail('')
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
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
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

      {/* Main Title */}
      <h1 className="text-3xl md:text-6xl font-bebas text-white text-center mb-6 tracking-wider">
        GET EARLY ACCESS
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-2xl text-gray-300 text-center mb-12 max-w-2xl leading-relaxed">
        Be the first to experience the #1 weight cutting app for combat sport athletes
      </p>

      {/* Waitlist Form */}
      <div className="w-full max-w-md mb-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'JOINING...' : 'JOIN WAITLIST'}
            </button>
          </div>
          
          {/* Message Display */}
          {message && (
            <p className={`text-center text-sm ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </p>
          )}
          
          <p className="text-center text-gray-400 text-sm mt-6">
            Join 500+ others who signed up
          </p>
        </form>
      </div>
    </main>
  )
}
