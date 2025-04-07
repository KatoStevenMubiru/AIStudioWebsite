"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Search,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  Edit,
  Twitter,
  Github,
  Linkedin,
  DiscIcon as Discord,
  Copy,
  Check,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ApiReferencePage() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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

      {/* Documentation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <svg className="h-8 w-8 text-[#159b8d]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 12l8 10 8-10-8-10zm0 4l4 6-4 5-4-5 4-6z" />
              </svg>
              <span className="text-xl font-bold text-[#333333] hidden md:inline-block">Uganda AI Studio</span>
            </Link>
          </div>

          <div className="flex-1 mx-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search or ask..."
                className="pl-10 pr-4 py-2 w-full max-w-xl rounded-full border-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">⌘K</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/status" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Status
            </Link>
            <Link href="/support" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Support
            </Link>
            <Link href="/get-started">
              <Button className="bg-[#159b8d] hover:bg-[#128a7d]">
                Get Started <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Toggle theme">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Documentation Navigation */}
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)_250px] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)_280px] lg:gap-10">
        {/* Sidebar Navigation */}
        <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block overflow-y-auto py-6 pr-2">
          <nav className="relative lg:py-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">Documentation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/docs"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Introduction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/quickstart"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/quickstart" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Quickstart
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">API Reference</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/docs/api-reference"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/api-reference" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/api-reference/authentication"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/api-reference/authentication" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Authentication
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/api-reference/completions"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/api-reference/completions" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Completions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/api-reference/chat"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/api-reference/chat" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Chat
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/api-reference/embeddings"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/api-reference/embeddings" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Embeddings
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4">
              <Link href="/docs" className="inline-flex items-center rounded-md text-sm font-medium text-[#159b8d]">
                Documentation
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link
                href="/docs/api-reference"
                className="inline-flex items-center rounded-md text-sm font-medium text-[#159b8d]"
              >
                API Reference
              </Link>
            </div>

            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">API Reference</h1>
              <p className="text-xl text-gray-600">Complete reference documentation for the Uganda AI Studio API</p>
            </div>

            <div className="mt-12 space-y-8">
              <p className="leading-7">
                The Uganda AI Studio API is organized around REST. Our API has predictable resource-oriented URLs,
                accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response
                codes, authentication, and verbs.
              </p>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="base-url">
                Base URL
              </h2>

              <p className="leading-7">The base URL for all API requests is:</p>

              <div className="relative my-6">
                <pre className="rounded-lg bg-gray-900 p-4 overflow-x-auto text-white text-sm">
                  <code>https://api.ugandaai.studio/v1</code>
                </pre>
                <button
                  className="absolute top-3 right-3 p-2 bg-gray-800 rounded-md text-gray-300 hover:bg-gray-700"
                  onClick={() => copyToClipboard(`https://api.ugandaai.studio/v1`)}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="authentication">
                Authentication
              </h2>

              <p className="leading-7">
                The Uganda AI Studio API uses API keys for authentication. You can view and manage your API keys in the{" "}
                <Link href="/dashboard/api-keys" className="text-[#159b8d] hover:underline">
                  API Keys
                </Link>{" "}
                section of the dashboard.
              </p>

              <p className="leading-7 mt-4">
                Authentication is performed via the{" "}
                <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  Authorization
                </code>{" "}
                header with a Bearer token:
              </p>

              <div className="relative my-6">
                <pre className="rounded-lg bg-gray-900 p-4 overflow-x-auto text-white text-sm">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </pre>
                <button
                  className="absolute top-3 right-3 p-2 bg-gray-800 rounded-md text-gray-300 hover:bg-gray-700"
                  onClick={() => copyToClipboard(`Authorization: Bearer YOUR_API_KEY`)}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <div className="rounded-md bg-yellow-50 p-4 my-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Important</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Your API key is a secret. Never share it publicly or commit it to version control. Uganda AI
                        Studio will never ask for your API key via email or support channels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="endpoints">
                API Endpoints
              </h2>

              <p className="leading-7">The Uganda AI Studio API provides the following endpoints:</p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-left font-medium">Endpoint</th>
                      <th className="py-2 px-4 text-left font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">
                        <Link href="/docs/api-reference/completions" className="text-[#159b8d] hover:underline">
                          /completions
                        </Link>
                      </td>
                      <td className="py-2 px-4">Generate text completions</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">
                        <Link href="/docs/api-reference/chat" className="text-[#159b8d] hover:underline">
                          /chat/completions
                        </Link>
                      </td>
                      <td className="py-2 px-4">Generate chat completions</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">
                        <Link href="/docs/api-reference/embeddings" className="text-[#159b8d] hover:underline">
                          /embeddings
                        </Link>
                      </td>
                      <td className="py-2 px-4">Generate embeddings for text</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">
                        <Link href="/docs/api-reference/models" className="text-[#159b8d] hover:underline">
                          /models
                        </Link>
                      </td>
                      <td className="py-2 px-4">List available models</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">
                        <Link href="/docs/api-reference/fine-tuning" className="text-[#159b8d] hover:underline">
                          /fine-tuning
                        </Link>
                      </td>
                      <td className="py-2 px-4">Create and manage fine-tuning jobs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="errors">
                Errors
              </h2>

              <p className="leading-7">
                The Uganda AI Studio API uses conventional HTTP response codes to indicate the success or failure of an
                API request. In general:
              </p>

              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  Codes in the{" "}
                  <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm">2xx</code>{" "}
                  range indicate success
                </li>
                <li>
                  Codes in the{" "}
                  <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm">4xx</code>{" "}
                  range indicate an error that failed given the information provided (e.g., a required parameter was
                  omitted, authentication failed, etc.)
                </li>
                <li>
                  Codes in the{" "}
                  <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm">5xx</code>{" "}
                  range indicate an error with Uganda AI Studio's servers
                </li>
              </ul>

              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-left font-medium">Error Code</th>
                      <th className="py-2 px-4 text-left font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">400</td>
                      <td className="py-2 px-4">
                        Bad Request - The request was unacceptable, often due to missing a required parameter
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">401</td>
                      <td className="py-2 px-4">Unauthorized - No valid API key provided</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">403</td>
                      <td className="py-2 px-4">
                        Forbidden - The API key doesn't have permissions to perform the request
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">404</td>
                      <td className="py-2 px-4">Not Found - The requested resource doesn't exist</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">429</td>
                      <td className="py-2 px-4">Too Many Requests - Rate limit exceeded</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">500</td>
                      <td className="py-2 px-4">Internal Server Error - Something went wrong on our end</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="rate-limits">
                Rate Limits
              </h2>

              <p className="leading-7">
                The Uganda AI Studio API implements rate limiting to ensure fair usage and system stability. Rate limits
                vary by endpoint and account tier. If you exceed the rate limit, you'll receive a{" "}
                <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  429 Too Many Requests
                </code>{" "}
                response.
              </p>

              <p className="leading-7 mt-4">
                For more information on rate limits and quotas, see the{" "}
                <Link href="/docs/account/quotas" className="text-[#159b8d] hover:underline">
                  Rate limits and quotas
                </Link>{" "}
                documentation.
              </p>

              <div className="flex items-center justify-between border-t pt-6">
                <div>
                  <p className="text-sm text-gray-600">Was this page helpful?</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <ThumbsUp className="h-4 w-4" /> Yes
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ThumbsDown className="h-4 w-4" /> No
                    </Button>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <Edit className="h-4 w-4" /> Suggest edits
                </Button>
              </div>

              <div className="flex justify-between border-t pt-6">
                <Link href="/docs/quickstart" className="flex items-center gap-1 text-[#159b8d] hover:underline">
                  <ChevronRight className="h-4 w-4 rotate-180" /> Quickstart
                </Link>
                <Link
                  href="/docs/api-reference/authentication"
                  className="flex items-center gap-1 text-[#159b8d] hover:underline"
                >
                  Authentication <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 pt-16">
              <div className="pb-10">
                <div className="sticky top-16 -mt-10 h-[calc(100vh-4rem)] py-12">
                  <div className="space-y-2">
                    <p className="font-medium">On this page</p>
                    <ul className="space-y-2 border-l border-gray-200">
                      <li className="pl-4">
                        <a href="#base-url" className="inline-block text-gray-600 hover:text-gray-900">
                          Base URL
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#authentication" className="inline-block text-gray-600 hover:text-gray-900">
                          Authentication
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#endpoints" className="inline-block text-gray-600 hover:text-gray-900">
                          API Endpoints
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#errors" className="inline-block text-gray-600 hover:text-gray-900">
                          Errors
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#rate-limits" className="inline-block text-gray-600 hover:text-gray-900">
                          Rate Limits
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <Discord className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <p className="text-sm text-gray-500">© 2024 Uganda AI Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

