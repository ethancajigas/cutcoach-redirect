'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Eye, TrendingUp, MessageCircle, Target, BarChart3 } from 'lucide-react'

const coachFeatures = [
  {
    icon: Eye,
    title: 'Athlete Monitoring',
    description: "Instantly monitor every athlete’s weight cut plan and live weight updates—all from a single, unified dashboard.",
    color: 'var(--color-accent-blue)'
  },
  {
    icon: TrendingUp,
    title: 'Progress Analytics',
    description: 'Access in-depth analytics and interactive charts to track each athlete’s progress, consistency, and trends throughout their weight cut journey',
    color: 'var(--color-accent-pink)'
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'Send personalized messages, feedback, and encouragement directly to your athletes through the app',
    color: 'var(--color-accent-purple)'
  }
]



export default function CoachMode() {
  return (
    <section id="community" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold bg-white text-black"
            >
              <Users className="mr-2 h-4 w-4" />
              <span className="whitespace-nowrap">COACH DASHBOARD</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              MONITOR YOUR<br className="sm:hidden" /> ATHLETES LIKE<br className="sm:hidden" /> NEVER BEFORE
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg leading-relaxed font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Take your coaching to the next level with our comprehensive dashboard that gives you 
              complete visibility into your athletes' weight cut plans, progress, and consistency.
            </motion.p>

            {/* Coach Features */}
            <div className="space-y-6">
              {coachFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div 
                    className="flex-shrink-0 p-3 rounded-xl text-white"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black mb-2 leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>


          </div>

          {/* Right Column - Screenshot */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* iPhone frame with enhanced styling */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-[3rem] blur-xl opacity-50 transform scale-110"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl">
                  <Image
                    src="/coachappshowcase.png"
                    alt="CutCoach App - Coach Dashboard"
                    width={300}
                    height={600}
                    className="rounded-[2.5rem] w-auto h-auto max-w-[280px] lg:max-w-[320px]"
                  />
                </div>
              </div>
              
              {/* Floating coaching elements */}
              {/*
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-black text-white">5</div>
                <div className="text-xs font-bold text-gray-300">Athletes</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-black text-white">95%</div>
                <div className="text-xs font-bold text-gray-300">Success</div>
              </div>
              */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
