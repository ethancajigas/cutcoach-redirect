'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play, Zap, Target, Heart } from 'lucide-react'

const appScreenshots = [
  {
    image: '/mealsappshowcase.png',
    title: 'Meal Plans',
    description: 'AI-powered meal plans tailored for fighters, with nutrition and prep guidance for every day of your cut',
    icon: Target,
    color: 'var(--color-accent-blue)'
  },
  {
    image: '/refuelappshowcase.png',
    title: 'Refuel & Recovery',
    description: 'Optimize your nutrition and recovery with smart refueling strategies',
    icon: Heart,
    color: 'var(--color-accent-pink)'
  },
  {
    image: '/trackingappshowcase.png',
    title: 'AI Food Tracking',
    description: 'Track your nutrition by snapping a photo or describing your meal—AI instantly analyzes and logs your food for you.',
    icon: Zap,
    color: 'var(--color-accent-purple)'
  }
]

export default function AppShowcase() {
  return (
    <section id="nutrition" className="py-20 bg-black relative overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold bg-white text-black mb-6"
          >
            <Play className="mr-2 h-4 w-4" />
            <span className="whitespace-nowrap">APP PREVIEW</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-white leading-tight"
          >
            SEE CUTCOACH<br className="sm:hidden" /> IN ACTION
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg max-w-3xl mx-auto font-medium text-gray-300"
          >
            Cut weight with a clean, intuitive app.
          </motion.p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {appScreenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Screenshot Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-black rounded-[2.5rem] blur-lg opacity-40 transform scale-105 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <Image
                    src={screenshot.image}
                    alt={`${screenshot.title} - CutCoach App`}
                    width={250}
                    height={500}
                    className="rounded-[2.2rem] w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Feature Info */}
              <div className="mt-6 text-center">
                <div 
                  className="inline-flex p-3 rounded-xl text-white mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: screenshot.color }}
                >
                  <screenshot.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base sm:text-lg font-black mb-2 text-white group-hover:text-gray-300 transition-colors leading-tight">
                  {screenshot.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-gray-400 leading-relaxed">
                  {screenshot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 leading-tight">
                Ready to Cut Weight?
              </h3>
              <p className="text-gray-300 font-medium text-sm sm:text-base">
                Join thousands of athletes already achieving their weight cutting goals
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold bg-white text-black hover:bg-gray-100 whitespace-nowrap w-full md:w-auto"
            >
              DOWNLOAD NOW
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
