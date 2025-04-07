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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"

export default function DocsPage() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")

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

      {/* Using the shared SiteHeader component */}
      <SiteHeader />

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
                  <li>
                    <Link
                      href="/docs/concepts"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/concepts" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Concepts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/onboarding"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/onboarding" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Onboarding
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Inference</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/docs/inference/text-models"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/inference/text-models" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Querying text models
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/inference/vision-models"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/inference/vision-models" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Querying vision-language models
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/inference/embedding-models"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/inference/embedding-models" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Querying embedding models
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/inference/function-calling"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/inference/function-calling" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Using function-calling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/inference/grammar-mode"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/inference/grammar-mode" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Using grammar mode
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/inference/json-mode"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/inference/json-mode" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Using JSON mode
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Models</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/docs/models/custom-model"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/models/custom-model" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Uploading a custom model
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/models/fine-tuning"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/models/fine-tuning" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Fine-tuning models
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/models/lora-adapters"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/models/lora-adapters" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Merging LoRA adapters with base models
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Deployment</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/docs/deployment/on-demand"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/deployment/on-demand" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      On-demand deployments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/deployment/regions"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/deployment/regions" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Regions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/deployment/reserved-capacity"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/deployment/reserved-capacity" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Reserved capacity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/deployment/direct-routing"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/deployment/direct-routing" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Direct routing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Account Management</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/docs/account/users"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/account/users" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Managing users
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/account/sso"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/account/sso" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Custom SSO
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Security & Compliance</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/docs/security/privacy"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/security/privacy" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Data privacy & security
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Troubleshooting</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/docs/troubleshooting/status-codes"
                      className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === "/docs/troubleshooting/status-codes" ? "bg-gray-100 font-medium" : ""}`}
                    >
                      Status and error codes
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
                Get Started
              </Link>
            </div>

            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Uganda AI Developer Platform</h1>
              <p className="text-xl text-gray-600">Start building with open source AI models</p>
            </div>

            <div className="mt-12 space-y-8">
              <p className="leading-7">
                Uganda AI Studio is the best platform for building AI product experiences with open source AI models.
                You can run and customize AI models with just a few lines of code.
              </p>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Start building</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-semibold mb-2">Get Started</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Make your first API call with Uganda AI Serverless Inference
                  </p>
                  <Link href="/docs/quickstart">
                    <Button variant="outline" className="w-full justify-between">
                      Quickstart <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-semibold mb-2">Explore Model Library</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    View 100s of supported models across text, vision, audio, image and more
                  </p>
                  <Link href="/model-library">
                    <Button variant="outline" className="w-full justify-between">
                      Browse Models <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Resources</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-semibold mb-2">API Reference</h3>
                  <p className="text-sm text-gray-600 mb-4">Comprehensive API documentation for Uganda AI Studio</p>
                  <Link href="/docs/api-reference">
                    <Button variant="outline" className="w-full justify-between">
                      View API Docs <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-semibold mb-2">SDK Documentation</h3>
                  <p className="text-sm text-gray-600 mb-4">Client libraries for Python, JavaScript, and more</p>
                  <Link href="/docs/tools-sdk">
                    <Button variant="outline" className="w-full justify-between">
                      Explore SDKs <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What we offer</h2>

              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">Inference</h3>
                  <p className="text-gray-600">
                    Access to 100+ state-of-the-art AI models with high-performance inference. Deploy models with just a
                    few API calls.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">FireOptimizer</h3>
                  <p className="text-gray-600">
                    Optimize your model deployments for cost, latency, and throughput with our advanced optimization
                    tools.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">Compound AI</h3>
                  <p className="text-gray-600">
                    Build complex AI systems by combining multiple models and components into powerful pipelines.
                  </p>
                </div>
              </div>

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
                <div></div>
                <Link href="/docs/quickstart" className="flex items-center gap-1 text-[#159b8d] hover:underline">
                  Quickstart <ChevronRight className="h-4 w-4" />
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
                        <a href="#start-building" className="inline-block text-gray-600 hover:text-gray-900">
                          Start building
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#resources" className="inline-block text-gray-600 hover:text-gray-900">
                          Resources
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#what-we-offer" className="inline-block text-gray-600 hover:text-gray-900">
                          What we offer
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#inference" className="inline-block text-gray-600 hover:text-gray-900">
                          Inference
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#fireoptimizer" className="inline-block text-gray-600 hover:text-gray-900">
                          FireOptimizer
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#compound-ai" className="inline-block text-gray-600 hover:text-gray-900">
                          Compound AI
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

