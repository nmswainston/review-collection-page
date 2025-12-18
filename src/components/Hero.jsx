import React from 'react'
import { businessConfig } from '../config/businessConfig'
import { getAverageRating } from '../services/reviewService'

const Hero = () => {
  const averageRating = getAverageRating()

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-gray-300 dark:text-gray-600 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 dark:from-indigo-900 dark:via-indigo-800 dark:to-purple-900 text-white py-12 px-4 sm:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <img
            src={businessConfig.logo}
            alt={`${businessConfig.name} logo`}
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full object-cover border-4 border-white/20 shadow-xl"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {businessConfig.name}
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            {renderStars(parseFloat(averageRating))}
            <span className="text-2xl sm:text-3xl font-semibold ml-2">
              {averageRating}
            </span>
          </div>
          <span className="text-indigo-100 dark:text-indigo-200 text-sm sm:text-base">
            Based on customer reviews
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero

