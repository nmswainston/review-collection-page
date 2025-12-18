// Mock Google Reviews API Service
// Replace this with real API calls when ready

const mockReviews = [
  {
    id: 1,
    author: 'Sarah Johnson',
    rating: 5,
    text: 'Absolutely fantastic service! The team went above and beyond to help me. I was impressed by their professionalism and attention to detail. Highly recommend to anyone looking for quality service.',
    date: '2024-01-15',
    profilePhoto: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    author: 'Michael Chen',
    rating: 5,
    text: 'Great experience from start to finish. The staff was friendly, knowledgeable, and made sure all my questions were answered. Will definitely be coming back!',
    date: '2024-01-12',
    profilePhoto: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    author: 'Emily Rodriguez',
    rating: 4,
    text: 'Very good service overall. The quality was excellent and the process was smooth. Only minor issue was the wait time, but it was worth it.',
    date: '2024-01-10',
    profilePhoto: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: 4,
    author: 'David Thompson',
    rating: 5,
    text: 'Outstanding! Exceeded all my expectations. The attention to detail and customer service was top-notch. I couldn\'t be happier with the results.',
    date: '2024-01-08',
    profilePhoto: 'https://i.pravatar.cc/150?img=4'
  },
  {
    id: 5,
    author: 'Lisa Anderson',
    rating: 5,
    text: 'Amazing experience! The team was professional, efficient, and delivered exactly what was promised. I\'ve already recommended them to several friends.',
    date: '2024-01-05',
    profilePhoto: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 6,
    author: 'James Wilson',
    rating: 4,
    text: 'Solid service with good results. The communication was clear throughout the process. Would use again for future needs.',
    date: '2024-01-03',
    profilePhoto: 'https://i.pravatar.cc/150?img=6'
  },
  {
    id: 7,
    author: 'Maria Garcia',
    rating: 5,
    text: 'Perfect! Everything was handled professionally and efficiently. The quality exceeded my expectations and I\'m very satisfied with the outcome.',
    date: '2024-01-01',
    profilePhoto: 'https://i.pravatar.cc/150?img=7'
  },
  {
    id: 8,
    author: 'Robert Brown',
    rating: 5,
    text: 'Excellent service! The team was knowledgeable, responsive, and delivered great results. Highly recommend this business to others.',
    date: '2023-12-28',
    profilePhoto: 'https://i.pravatar.cc/150?img=8'
  }
]

// Calculate average rating
export const getAverageRating = () => {
  const sum = mockReviews.reduce((acc, review) => acc + review.rating, 0)
  return (sum / mockReviews.length).toFixed(1)
}

// Get all reviews
export const getReviews = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockReviews
}

// Get reviews with pagination
export const getReviewsPaginated = async (page = 1, limit = 6) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const start = (page - 1) * limit
  const end = start + limit
  return {
    reviews: mockReviews.slice(start, end),
    total: mockReviews.length,
    page,
    limit
  }
}

