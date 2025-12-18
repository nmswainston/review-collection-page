import React, { useState } from 'react'

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const maxLength = 150
  const shouldTruncate = review.text.length > maxLength
  const displayText = isExpanded || !shouldTruncate 
    ? review.text 
    : review.text.substring(0, maxLength) + '...'

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300 dark:text-gray-600 fill-current'
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-5 sm:p-6">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={review.profilePhoto}
          alt={review.author}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">
            {review.author}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            {renderStars(review.rating)}
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(review.date)}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
        {displayText}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  )
}

export default ReviewCard

