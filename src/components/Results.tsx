'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const results = [
  'Safely cut up to 7% of bodyweight in up to 7 days',
  '100% of users reach their weight cut goal by using the app',
  'Personalized plans reduce risk of dehydration and fatigue',
  'Maintain high energy and focus throughout your cut',
  'Faster recovery and peak performance on fight day',
  'Stay focused on winning, not the weight cut'
]

export default function Results() {
  return (
    <section id="progress" className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight" style={{ color: 'var(--color-text-primary)' }}>
            WHY ATHLETES<br className="sm:hidden" /> CHOOSE CUTCOACH
          </h2>
          <p className="text-base max-w-3xl mx-auto font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            Real results from real athletes. Here's what our users achieve:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={result}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-4 sm:p-6 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center bg-green-500/10 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                <Check className="h-4 w-4 text-green-500 group-hover:text-white" />
              </div>
              <span className="font-medium text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>{result}</span>
            </motion.div>
          ))}
        </div>
        

      </div>
    </section>
  )
}
