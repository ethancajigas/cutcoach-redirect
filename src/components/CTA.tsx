'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Trophy, Target } from 'lucide-react'

const benefits = [
  'No commitment required',
  '7-day free trial',
  'Cancel anytime',
  'Full access to all features',
]

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold mb-6 bg-white text-black"
            >
              <Zap className="mr-2 h-4 w-4" />
              <span className="whitespace-nowrap">START YOUR TRANSFORMATION TODAY</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-5xl font-black mb-6 text-white leading-tight"
            >
              READY TO CUT WEIGHT?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-base max-w-3xl mx-auto leading-relaxed font-medium text-gray-300"
            >
              Join combat sport athletes who have made weight effortlessly. 
              Your weight cutting journey starts now.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 py-4 text-base sm:text-lg font-bold bg-white text-black hover:bg-gray-100"
            >
              <span className="whitespace-nowrap">START FREE TRIAL</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center justify-center px-6 sm:px-8 py-4 text-base sm:text-lg font-bold border-white text-white hover:bg-white hover:text-black"
            >
              <Target className="mr-2 h-5 w-5" />
              <span className="whitespace-nowrap">SEE DEMO</span>
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center text-gray-300"
              >
                <CheckCircle className="h-5 w-5 mr-2 text-white flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold whitespace-nowrap">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-xs sm:text-sm font-bold text-gray-400">
              TRUSTED BY ATHLETES WORLDWIDE
            </p>
            <div className="flex justify-center items-center space-x-4 sm:space-x-8 mt-4 opacity-60">
              <div className="h-6 sm:h-8 w-16 sm:w-20 rounded-full bg-white opacity-20"></div>
              <div className="h-6 sm:h-8 w-16 sm:w-20 rounded-full bg-gray-400 opacity-20"></div>
              <div className="h-6 sm:h-8 w-16 sm:w-20 rounded-full bg-gray-600 opacity-20"></div>
              <div className="h-6 sm:h-8 w-16 sm:w-20 rounded-full bg-purple-400 opacity-20"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
