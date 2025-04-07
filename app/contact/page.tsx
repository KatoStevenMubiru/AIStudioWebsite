"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Briefcase, User, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("business")

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
            <Link href="/contact" className="text-sm font-medium underline underline-offset-4 text-[#159b8d]">
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
            <Link
              href="/login"
              className="text-sm font-medium hover:underline underline-offset-4 hidden md:block text-[#333333]"
            >
              Sign In
            </Link>
            <Link href="/signup">
              <Button className="bg-[#159b8d] hover:bg-[#128a7d]">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 md:px-6">
        <h1 className="text-4xl font-bold mb-12 text-[#333333]">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            {/* Contact Tabs */}
            <div className="space-y-4">
              <button
                onClick={() => setActiveTab("business")}
                className={`w-full p-6 text-center rounded-lg transition-colors ${
                  activeTab === "business" ? "bg-[#6b5ca5] text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <Briefcase className="h-8 w-8 mb-3" />
                  <span className="font-medium">Business or sales inquiries</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("support")}
                className={`w-full p-6 text-center rounded-lg transition-colors ${
                  activeTab === "support" ? "bg-[#6b5ca5] text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <User className="h-8 w-8 mb-3" />
                  <span className="font-medium">Non-enterprise support</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("feedback")}
                className={`w-full p-6 text-center rounded-lg transition-colors ${
                  activeTab === "feedback" ? "bg-[#6b5ca5] text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <MessageSquare className="h-8 w-8 mb-3" />
                  <span className="font-medium">Feedback or requests</span>
                </div>
              </button>
            </div>

            {/* Discord Section - Only visible on mobile */}
            <div className="md:hidden mt-8">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80&text=Discord"
                  alt="Discord"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <p className="text-center mb-4">
                  {activeTab === "support" && (
                    <>
                      Follow the{" "}
                      <span className="bg-amber-200 px-2 py-1 rounded text-amber-800 font-mono">#questions</span>{" "}
                      channel on discord to ask your queries and get the latest updates
                    </>
                  )}
                  {activeTab === "feedback" && (
                    <>
                      Follow the{" "}
                      <span className="bg-amber-200 px-2 py-1 rounded text-amber-800 font-mono">#feature-requests</span>{" "}
                      channel on discord to ask your queries and get the latest updates
                    </>
                  )}
                </p>
                <Button className="bg-[#5865F2] hover:bg-[#4752c4]">
                  <span className="mr-2">Join Discord</span>
                  <span className="text-xs">(Coming Soon)</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            {activeTab === "business" && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-[#333333]">Business Inquiry</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First name <span className="text-red-500">*</span>
                      </label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company name <span className="text-red-500">*</span>
                    </label>
                    <Input id="company" required />
                  </div>

                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Job title <span className="text-red-500">*</span>
                    </label>
                    <Input id="jobTitle" required />
                  </div>

                  <div>
                    <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-1">
                      Describe your use case and expected traffic <span className="text-red-500">*</span>
                    </label>
                    <Textarea id="useCase" rows={5} required />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                      Nature of enquiry
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Please Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="enterprise">Enterprise Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="bg-[#FFA94D] hover:bg-[#FF9933] text-black">
                    Send message
                  </Button>
                </form>
              </div>
            )}

            {(activeTab === "support" || activeTab === "feedback") && (
              <div className="hidden md:flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg h-full">
                <Image
                  src="/placeholder.svg?height=120&width=120&text=Discord"
                  alt="Discord"
                  width={120}
                  height={120}
                  className="mb-6"
                />
                <p className="text-center mb-6 max-w-md">
                  {activeTab === "support" && (
                    <>
                      Follow the{" "}
                      <span className="bg-amber-200 px-2 py-1 rounded text-amber-800 font-mono">#questions</span>{" "}
                      channel on discord to ask your queries and get the latest updates
                    </>
                  )}
                  {activeTab === "feedback" && (
                    <>
                      Follow the{" "}
                      <span className="bg-amber-200 px-2 py-1 rounded text-amber-800 font-mono">#feature-requests</span>{" "}
                      channel on discord to ask your queries and get the latest updates
                    </>
                  )}
                </p>
                <Button className="bg-[#5865F2] hover:bg-[#4752c4]">
                  <span className="mr-2">Join Discord</span>
                  <span className="text-xs">(Coming Soon)</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t bg-white mt-12">
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
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </Link>
              </div>
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

