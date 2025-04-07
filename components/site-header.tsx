"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"

export function SiteHeader() {
  const { user, logout } = useAuth()

  return (
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
          <Link href="/model-library" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
            Model Library
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
            Docs
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
            Pricing
          </Link>
          <Link href="/embodied-ai" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
            Embodied AI
          </Link>
          <Link href="/ai-agents" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
            AI Agents
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4 text-[#333333]">
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
          {user ? (
            <>
              <span className="text-sm font-medium text-[#333333] hidden md:block">{user.email}</span>
              <Button onClick={logout} variant="outline" className="border-[#159b8d] text-[#159b8d]">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium hover:underline underline-offset-4 hidden md:block text-[#333333]"
              >
                Sign In
              </Link>
              <Link href="/signup">
                <Button className="bg-[#159b8d] hover:bg-[#128a7d]">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

