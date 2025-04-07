"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#159b8d]"></div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Banner */}
      <div className="w-full bg-[#159b8d] text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base">
          <span className="font-semibold">Uganda's first sovereign AI platform</span> is now available.
          <Link href="#" className="ml-2 underline hover:no-underline">
            Try it now
          </Link>{" "}
          or read our
          <Link href="#" className="ml-1 underline hover:no-underline">
            quickstart!
          </Link>
        </p>
      </div>

      {/* Header */}
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <svg className="h-8 w-8 text-[#159b8d]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 12l8 10 8-10-8-10zm0 4l4 6-4 5-4-5 4-6z" />
              </svg>
              <span className="text-xl font-bold text-[#333333]">Uganda AI Studio</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/model-library"
              className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]"
            >
              Model Library
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
              Docs
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
              Embodied AI
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
              AI Agents
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
              Contact Us
            </Link>
            <div className="relative group">
              <Link
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4 text-[#333333] flex items-center gap-1"
              >
                Company
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/company/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Team
                  </Link>
                  <Link href="/company/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Careers
                  </Link>
                  <Link href="/company/partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Partners
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[#333333]">{user.email}</span>
            <Button onClick={logout} variant="outline" className="border-[#159b8d] text-[#159b8d]">
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user.email}!</h2>
          <p className="text-gray-600 mb-6">
            This is your dashboard where you can manage your AI models, fine-tuning jobs, and deployment settings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Credits</h3>
              <p className="text-2xl font-bold text-[#159b8d]">UGX 350,000</p>
              <p className="text-sm text-gray-500">Free credits remaining</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">API Calls</h3>
              <p className="text-2xl font-bold text-[#159b8d]">0</p>
              <p className="text-sm text-gray-500">Total API calls this month</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Models</h3>
              <p className="text-2xl font-bold text-[#159b8d]">0</p>
              <p className="text-sm text-gray-500">Deployed models</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-[#159b8d]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 12l8 10 8-10-8-10zm0 4l4 6-4 5-4-5 4-6z" />
                </svg>
                <span className="text-xl font-bold text-[#333333]">Uganda AI Studio</span>
              </div>
              <p className="text-sm text-gray-600">
                A joint venture under the STI-Office of President, Industry 4.0 Bureau. Building Uganda's sovereign AI
                future.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-[#159b8d]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-500 hover:text-[#159b8d]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/model-library" className="text-gray-500 hover:text-[#159b8d]">
                    Models
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                    Docs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/company/careers" className="text-gray-500 hover:text-[#159b8d]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/company/team" className="text-gray-500 hover:text-[#159b8d]">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/company/partners" className="text-gray-500 hover:text-[#159b8d]">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                    Trust Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">© 2024 Uganda AI Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

