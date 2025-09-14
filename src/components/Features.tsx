'use client'

import { motion } from 'framer-motion'
import { 
  Target,
  Brain,
  Clock,
  MessageCircle,
  Calendar,
  Zap
} from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Personalized Weight Cut Plans',
    description: 'Evidence-based strategies to help you safely cut up to 7% of bodyweight, using techniques such as water loading and glycogen depletion.',
    color: 'var(--color-accent-blue)'
  },
  {
    icon: Brain,
    title: 'Meal Plans',
    description: 'AI-generated nutrition recommendations for fighters, including meal prep suggestions to support your weight cutting journey.',
    color: 'var(--color-accent-light-blue)'
  },
  {
    icon: Clock,
    title: 'Consistency Tracking',
    description: 'Visualize your consistency with a line graph comparing your planned nutrition targets to what you actually log each day—see how closely you\'re following your plan at a glance.',
    color: 'var(--color-accent-pink)'
  },
  {
    icon: MessageCircle,
    title: 'Team Chat & Individual',
    description: 'Connect with your coaches and teammates for support, or get personalized guidance through direct messaging.',
    color: 'var(--color-accent-purple)'
  },
  {
    icon: Calendar,
    title: 'General Activities for Each Day',
    description: 'Daily activity schedules including cardio sessions, light workouts, and passive sweating designed to optimize your weight cutting process.',
    color: 'var(--color-accent-orange)'
  },
  {
    icon: Zap,
    title: 'Refuelling Protocols',
    description: 'Comprehensive post-weigh-in refuelling strategies to restore energy, hydration, and performance for optimal fight day readiness.',
    color: 'var(--color-accent-blue)'
  }
]

export default function Features() {
  return (
    <section id="workouts" className="py-20" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" 
            style={{ color: 'var(--color-text-primary)' }}
          >
            FEEL LIKE A<br className="sm:hidden" /> WEIGHT CUTTING PRO
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base max-w-3xl mx-auto font-medium" 
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Professional weight cutting tools designed specifically for combat sport athletes. 
            Cut up to 7% of bodyweight safely while maintaining peak performance for fight day.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group relative p-8 rounded-2xl hover:border-light transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: feature.color }}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-black mb-3 leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
