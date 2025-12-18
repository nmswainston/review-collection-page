import React, { useState, useEffect } from 'react'
import { getReviews } from '../services/reviewService'
import ReviewCard from './ReviewCard'

const ReviewGrid = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        const data = await getReviews()
        setReviews(data)
      } catch (err) {
        setError('Failed to load reviews. Please try again later.')
        console.error('Error fetching reviews:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  if (loading) {
    return (
      <section className="py-12 px-4 sm:py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading reviews...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-12 px-4 sm:py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-red-600 dark:text-red-400">
            <p>{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 px-4 sm:py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewGrid

