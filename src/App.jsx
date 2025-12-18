import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import LeaveReview from './components/LeaveReview'
import ReviewGrid from './components/ReviewGrid'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <ThemeToggle />
        <Hero />
        <LeaveReview />
        <ReviewGrid />
        <footer className="py-8 px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App

