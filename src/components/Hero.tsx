'use client'

import { motion } from 'framer-motion'
import { Zap, Target, TrendingUp, Droplets, Leaf, Carrot, Zap as ZapIcon, Flame, Battery } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-black">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center rounded-full px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold bg-white text-black">
              <Zap className="mr-2 h-4 w-4" />
              <span className="whitespace-nowrap">COMPETE AT YOUR BEST</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              CUT WEIGHT{' '}
              <span className="text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                <br className="sm:hidden" />EFFORTLESSLY
              </span>
            </h1>
            
            <p className="text-base lg:text-lg leading-relaxed font-medium text-gray-300">
              Meet CutCoach, the app built to help combat sport athletes cut weight safely and effectively.
              Create personalized nutrition plans and track your progress every step of the way.
            </p>
            
            <div className="flex flex-row gap-4 justify-start mb-4">
              {/* App Store Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-4 py-2 bg-black border border-gray-600 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-xs font-semibold text-white">App Store</div>
                  </div>
                </div>
              </motion.a>
              
              {/* Google Play Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-4 py-2 bg-black border border-gray-600 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    <Image
                      src="/google-play-icon.png"
                      alt="Google Play"
                      width={32}
                      height={32}
                      className="w-7 h-7"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">GET IT ON</div>
                    <div className="text-xs font-semibold text-white">Google Play</div>
                  </div>
                </div>
              </motion.a>
            </div>
            
            {/*<div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-white" 
                    />
                  ))}
                </div>
                <span className="ml-3 font-semibold text-white">Join 50,000+ athletes</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="ml-2 font-semibold text-white">4.9/5 rating</span>
              </div>
            </div>
            */}
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* iPhone frame with shadow */}
              <div className="relative">
                <div className="absolute inset-0 bg-black rounded-[3rem] blur-xl opacity-50 transform scale-110"></div>
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                  <Image
                    src="/heroimage.png"
                    alt="CutCoach App - Hero Image"
                    width={300}
                    height={600}
                    className="rounded-[2.5rem] w-auto h-auto max-w-[280px] lg:max-w-[320px]"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating nutrition tracking elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-red-500/90 backdrop-blur-sm rounded-lg p-3 border border-red-400/30 shadow-lg"
              >
                <div className="flex items-center">
                  <Flame className="w-3 h-3 text-red-200 mr-1" />
                  <div className="text-xs font-bold text-white">Energy Maintenance</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute top-16 -right-4 bg-blue-500/90 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30 shadow-lg"
              >
                <div className="flex items-center">
                  <Droplets className="w-3 h-3 text-blue-200 mr-1" />
                  <div className="text-xs font-bold text-white">Water Loading</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-32 -right-8 bg-orange-500/90 backdrop-blur-sm rounded-lg p-3 border border-orange-400/30 shadow-lg"
              >
                <div className="flex items-center">
                  <Battery className="w-3 h-3 text-orange-200 mr-1" />
                  <div className="text-xs font-bold text-white">Glycogen depletion</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
