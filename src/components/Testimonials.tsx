'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Trophy, Target, Zap } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fitness Coach',
    company: 'Elite Performance',
    content: 'CutCoach has completely transformed my training approach. The AI insights help me push my clients to their absolute limits while keeping them safe.',
    avatar: 'SJ',
    rating: 5,
    achievement: 'Lost 25 lbs in 3 months'
  },
  {
    name: 'Michael Chen',
    role: 'Bodybuilder',
    company: 'Pro Fitness',
    content: 'The personalized workout plans are incredible. I\'ve gained 15 pounds of muscle and my strength has increased dramatically. This is game-changing.',
    avatar: 'MC',
    rating: 5,
    achievement: 'Gained 15 lbs muscle'
  },
  {
    name: 'Emily Rodriguez',
    role: 'CrossFit Athlete',
    company: 'Iron Tribe',
    content: 'The real-time form analysis is amazing. I\'ve corrected my technique and my performance has skyrocketed. My coach is blown away by my progress.',
    avatar: 'ER',
    rating: 5,
    achievement: 'Improved PR by 30%'
  },
  {
    name: 'David Kim',
    role: 'Personal Trainer',
    company: 'Peak Performance',
    content: 'The nutrition tracking and meal planning features are top-notch. My clients are seeing results faster than ever before.',
    avatar: 'DK',
    rating: 5,
    achievement: 'Helped 50+ clients'
  },
  {
    name: 'Lisa Thompson',
    role: 'Marathon Runner',
    company: 'Endurance Elite',
    content: 'The recovery tracking and injury prevention features are incredible. I\'ve been injury-free for 2 years and my running times keep improving.',
    avatar: 'LT',
    rating: 5,
    achievement: '2:45 marathon time'
  },
  {
    name: 'Alex Morgan',
    role: 'Strength Coach',
    company: 'Powerhouse Gym',
    content: 'The progress tracking and analytics are unmatched. I can see exactly what\'s working and optimize every training session for maximum results.',
    avatar: 'AM',
    rating: 5,
    achievement: '500+ lb deadlift'
  }
]

const stats = [
  { number: '50,000+', label: 'Active Athletes', icon: Zap },
  { number: '99.9%', label: 'Success Rate', icon: Target },
  { number: '4.9/5', label: 'Athlete Rating', icon: Star },
  { number: '2M+', label: 'Workouts Completed', icon: Trophy }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
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
            className="text-4xl lg:text-5xl font-black mb-4" 
            style={{ color: 'var(--color-text-primary)' }}
          >
            ATHLETES WHO DOMINATE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base max-w-3xl mx-auto font-medium" 
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Join thousands of athletes who have transformed their bodies and 
            achieved their fitness goals with CutCoach.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full" style={{ backgroundColor: 'var(--color-accent-blue)', color: 'var(--color-primary)' }}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-black mb-2" style={{ color: 'var(--color-accent-blue)' }}>
                  {stat.number}
                </div>
                <div className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" style={{ color: 'var(--color-accent-blue)' }} />
                ))}
              </div>
              
              <Quote className="h-8 w-8 mb-4" style={{ color: 'var(--color-accent-blue)' }} />
              
              <p className="mb-6 leading-relaxed font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                "{testimonial.content}"
              </p>
              
              <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-accent-blue)', color: 'var(--color-primary)' }}>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-2" />
                  <span className="text-sm font-bold">{testimonial.achievement}</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full flex items-center justify-center font-bold mr-4" style={{ background: 'var(--gradient-primary)', color: 'var(--color-text-primary)' }}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold" style={{ color: 'var(--color-text-primary)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
