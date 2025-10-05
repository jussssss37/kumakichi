'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-kumakichi-dark/95 backdrop-blur-md shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group">
            <div className="text-2xl font-display font-bold text-white group-hover:text-kumakichi-gold transition-colors duration-300">
              ラーメン熊きち
            </div>
            <div className="text-xs text-kumakichi-gold font-japanese">
              創業1976年の老舗
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link text-white hover:text-kumakichi-gold transition-all duration-300 font-japanese font-medium relative group">
              ホーム
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kumakichi-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/menu" className="nav-link text-white hover:text-kumakichi-gold transition-all duration-300 font-japanese font-medium relative group">
              メニュー
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kumakichi-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a 
              href="tel:06-6875-1430"
              className="btn-primary text-base px-6 py-2 ml-4"
            >
              📞 電話注文
            </a>
          </nav>

          <button
            className="lg:hidden p-2 text-white hover:text-kumakichi-gold transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <div className="w-6 h-6 relative flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
              }`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-0' : 'translate-y-1.5'
              }`} />
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 border-t border-kumakichi-gray-800 bg-kumakichi-dark/95 backdrop-blur-md rounded-b-2xl">
            <Link 
              href="/" 
              className="block py-3 px-4 text-white hover:text-kumakichi-gold hover:bg-kumakichi-gray-800 transition-all duration-300 font-japanese"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link 
              href="/menu" 
              className="block py-3 px-4 text-white hover:text-kumakichi-gold hover:bg-kumakichi-gray-800 transition-all duration-300 font-japanese"
              onClick={() => setIsMenuOpen(false)}
            >
              メニュー
            </Link>
            <a 
              href="tel:06-6875-1430"
              className="block py-3 px-4 text-kumakichi-gold hover:text-white hover:bg-kumakichi-red transition-all duration-300 font-japanese font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              📞 06-6875-1430
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}