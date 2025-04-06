"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Check login status when component mounts and on pathname change
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loginStatus)
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    setIsLoggedIn(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/plans", label: "Features" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ]

  return (
    <header className="container mx-auto flex items-center justify-between py-4 relative">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/logo.png" alt="Teamify" width={120} height={30} className="h-8 w-auto" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-orange-500 transition-colors ${
              pathname === link.href ? "text-orange-500" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white p-2 focus:outline-none z-20"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900/95 z-10 flex flex-col pt-20">
          <nav className="flex flex-col items-center space-y-6 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-lg hover:text-orange-500 transition-colors ${
                  pathname === link.href ? "text-orange-500" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex justify-center">
            {isLoggedIn ? (
              <Button
                onClick={() => {
                  handleLogout()
                  closeMenu()
                }}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2"
              >
                Sign Out
              </Button>
            ) : (
              <Link href="/sign-in" onClick={closeMenu}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Desktop Auth Button */}
      <div className="hidden md:block">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
            Sign Out
          </button>
        ) : (
          <Link href="/sign-in" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
            Sign In
          </Link>
        )}
      </div>
    </header>
  )
}

