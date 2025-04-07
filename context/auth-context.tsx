"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

type User = {
  email: string
  name?: string
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      // In a real app, this would check localStorage, cookies, or make an API call
      const savedUser = localStorage.getItem("user")

      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [])

  // Redirect authenticated users away from auth pages
  useEffect(() => {
    if (!isLoading && user) {
      // If user is logged in and trying to access auth pages, redirect to dashboard
      if (pathname === "/login" || pathname === "/signup") {
        router.push("/dashboard")
      }
    }
  }, [user, isLoading, pathname, router])

  const login = async (email: string, password: string) => {
    try {
      // In a real app, this would make an API call
      // Simulate API call
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Mock successful login
      const userData = { email }
      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))

      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (email: string, password: string) => {
    try {
      // In a real app, this would make an API call
      // Simulate API call
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Mock successful signup
      const userData = { email }
      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))

      router.push("/dashboard")
    } catch (error) {
      console.error("Signup failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

