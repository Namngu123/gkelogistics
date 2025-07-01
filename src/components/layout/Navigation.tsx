'use client'

import { useState, useEffect } from "react"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "DỊCH VỤ", href: "#services" },
    { name: "GIỚI THIỆU", href: "#about" },
    { name: "SỰ KIỆN", href: "#events" },
    { name: "CHÍNH SÁCH", href: "#policies" },
    { name: "TIN TỨC - THÔNG BÁO", href: "#news" },
  ]

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white shadow border-b transition-all duration-300 ${scrolled ? 'bg-opacity-90 shadow-lg' : ''} font-poppins`}>
      {/* Top Row for Desktop */}
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="block h-full flex items-center" passHref>
          <div className="relative w-[400px] h-[800px]">
            <Image
              src="/images/logo.png"
              alt="GKE Logistics"
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-10">
          {/* Hotline */}
          <a
            href="tel:+84976089789"
            className="inline-block py-2 px-4 bg-[#9E2A2F] text-white font-bold rounded-lg hover:bg-[#B23A3A] transition-all duration-300"
          >
            0879 089 789 (Hotline)
          </a>

          {/* Điều hướng */}
          {navItems.map((item) =>
            item.href.startsWith('#') ? (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="text-sm font-bold text-gray-900 hover:text-[#B23A3A] transition-all duration-200"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-gray-900 hover:text-[#B23A3A] transition-all duration-200"
              >
                {item.name}
              </Link>
            )
          )}

          <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer transition-all duration-300 hover:scale-110" />
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="flex justify-between items-center px-4 py-3 lg:hidden">
        <Link href="/" passHref className="relative w-[220px] h-[70px] block">
          <Image
            src="/images/logo.png"
            alt="GKE Logo"
            fill
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="bg-white px-6 pb-4 lg:hidden font-poppins">
          {navItems.map((item) =>
            item.href.startsWith('#') ? (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href.slice(1))
                  setIsOpen(false)
                }}
                className="block py-2 border-b border-gray-200 text-gray-900 font-bold hover:text-[#B23A3A] transition-all"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 border-b border-gray-200 text-gray-900 font-bold hover:text-[#B23A3A] transition-all"
              >
                {item.name}
              </Link>
            )
          )}

          <div className="pt-3 flex justify-end">
            <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer transition-all duration-300 hover:scale-110" />
          </div>

          <div className="pt-3 flex justify-center">
            <a
              href="tel:+84976089789"
              className="inline-block py-2 px-4 bg-[#9E2A2F] text-white font-bold rounded-lg hover:bg-[#B23A3A] transition-all duration-300"
            >
              0879 089 789 (Hotline)
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
