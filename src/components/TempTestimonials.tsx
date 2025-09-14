'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Trophy } from 'lucide-react'

export default function TempTestimonials() {
  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">


        {/* Single Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card rounded-2xl p-12 hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current mx-1" style={{ color: 'var(--color-accent-blue)' }} />
            ))}
          </div>
          
          <div className="flex justify-center mb-8">
            <Quote className="h-12 w-12" style={{ color: 'var(--color-accent-blue)' }} />
          </div>
          
          <p className="mb-8 leading-relaxed font-medium text-lg text-center" style={{ color: 'var(--color-text-secondary)' }}>
            "I ate three full meals a day, drank tons of water, and even had dessert—and I still lost the weight. CutCoach made it simple to follow the plan without starving myself or stressing out. I never thought cutting weight could feel this easy."
          </p>
          
          <div className="mb-8 p-4 rounded-lg text-center" style={{ backgroundColor: 'var(--color-accent-blue)', color: 'var(--color-primary)' }}>
            <div className="flex items-center justify-center">
              <Trophy className="h-5 w-5 mr-2" />
              <span className="text-lg font-bold">Lost 10lbs in 5 days</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden border-4" style={{ borderColor: 'var(--color-accent-blue)' }}>
              <img 
                src="/testimonialpic.jpg" 
                alt="Ethan Cajigas in wrestling competition" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <div className="font-bold text-lg sm:text-xl" style={{ color: 'var(--color-text-primary)' }}>
                Ethan Cajigas
              </div>
              <div className="text-base sm:text-lg font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Canadian National Wrestling Champion
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
