'use client'

import { useState, useEffect } from 'react'
import { ArrowUpCircle } from 'lucide-react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Scroll to top (cuộn mượt)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const checkScrollTop = () => {
      if (!isVisible && window.pageYOffset > 100) {
        setIsVisible(true)
      } else if (isVisible && window.pageYOffset <= 100) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [isVisible])

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-5 bg-[#9E2A2F] text-white rounded-full shadow-lg transition-all duration-300 
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} hover:bg-[#B23A3A]`}
    >
      <ArrowUpCircle size={24} />
    </button>
  )
}
