'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Instagram,
  Youtube,
  Facebook
} from 'lucide-react'

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms' }
]

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Email', icon: Mail, href: '#' }
]

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          {/* Company Info */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-12">
            <div className="flex items-center">
              <img 
                src="/cutcoach_logo_black_transparent.png" 
                alt="CutCoach Logo" 
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-black tracking-wide" style={{ color: 'var(--color-text-primary)', fontFamily: 'Bebas Neue, sans-serif' }}>CutCoach</span>
            </div>
            
            <p className="leading-relaxed font-medium max-w-md" style={{ color: 'var(--color-text-muted)' }}>
              Compete at your best with personalized weight cut plans. 
              Join combat sport athletes achieving their weight cutting goals effortlessly.
            </p>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col items-start lg:items-end space-y-4">
            <div className="flex items-center" style={{ color: 'var(--color-text-muted)' }}>
              <Mail className="h-4 w-4 mr-3" />
              <span className="font-medium">info@cutcoach.app</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ 
                    backgroundColor: 'var(--color-bg-secondary)', 
                    color: 'var(--color-text-muted)' 
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-blue)';
                    (e.target as HTMLElement).style.color = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'var(--color-bg-secondary)';
                    (e.target as HTMLElement).style.color = 'var(--color-text-muted)';
                  }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="mt-8 pt-6"
          style={{ borderTop: '1px solid var(--color-border-dark)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
              © 2025 CutCoach. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm transition-colors font-medium"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--color-accent-blue)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--color-text-muted)'}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
