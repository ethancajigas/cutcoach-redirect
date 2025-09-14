'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat'
})

const navigation = [
  { name: 'Features', href: '#workouts' },
  { name: 'Why Choose Us?', href: '#progress' },
  { name: 'Showcase', href: '#nutrition' },
  { name: 'Testimonials', href: '#testimonials' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 64 // Height of the fixed header
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    const sectionId = href.replace('#', '')
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:backdrop-blur-2xl lg:mx-4 lg:mt-4 lg:rounded-2xl lg:shadow-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', backdropFilter: 'blur(25px)' }}>
      <style jsx>{`
        @media (min-width: 1024px) {
          header {
            background-color: rgba(0, 0, 0, 0.7) !important;
          }
        }
      `}</style>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:justify-center h-16">
          {/* Mobile Logo - Left Side */}
          <div className="flex lg:hidden items-center">
            <img 
              src="/cutcoach_logo_white_transparent.png" 
              alt="CutCoach Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Left Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-12">
            {navigation.slice(0, 2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`transition-colors font-bold text-sm uppercase tracking-wider cursor-pointer text-white hover:text-blue-400 ${montserrat.className}`}
                style={{ color: 'white !important' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Center Logo */}
          <div className="hidden lg:flex items-center mx-8 lg:mx-12">
            <img 
              src="/cutcoach_logo_white_transparent.png" 
              alt="CutCoach Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-12">
            {navigation.slice(2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`transition-colors font-bold text-sm uppercase tracking-wider cursor-pointer text-white hover:text-blue-400 ${montserrat.className}`}
                style={{ color: 'white !important' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile/Tablet menu button - Right Side */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden py-4 mobile-menu"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="space-y-4">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`block transition-colors font-bold text-sm uppercase tracking-wider cursor-pointer text-white hover:text-blue-400 ${montserrat.className}`}
                  style={{ color: 'white !important' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
              >
                <a
                  href="#download"
                  className="block px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 text-center inline-flex items-center justify-center bg-white text-black hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Download Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
