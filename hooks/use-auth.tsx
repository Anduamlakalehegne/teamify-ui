"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface AuthContextType {
  isLoggedIn: boolean
  userEmail: string | null
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    // Check if user is logged in on initial load
    const loginStatus = localStorage.getItem("isLoggedIn") === "true"
    const email = localStorage.getItem("userEmail")

    setIsLoggedIn(loginStatus)
    setUserEmail(email)
  }, [])

  const login = (email: string) => {
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("userEmail", email)
    setIsLoggedIn(true)
    setUserEmail(email)
  }

  const logout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    setIsLoggedIn(false)
    setUserEmail(null)
  }

  return <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

