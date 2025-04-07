"use client"

import Link from "next/link"
import { ArrowRight, Bot, BrainCircuit, Code, MessageSquare, Settings, Shield, Workflow, Zap } from "lucide-react"
import dynamic from 'next/dynamic'

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Lazily load heavy components
const Image = dynamic(() => import('next/image'), { ssr: false })

export default function AIAgentsPage() {
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#1a0b3f] py-16 md:py-24 lg:py-32 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-white mb-6">
                AI AGENTS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                General Problem Solvers for your Organization
              </h1>
              <p className="text-xl text-white/80 mb-8">
                AI agents are versatile problem solvers that learn and improve over time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#159b8d] hover:bg-[#128a7d] text-white">
                  Start Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#159b8d] text-[#159b8d] hover:bg-[#159b8d] hover:text-white">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Types Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-4">
                AGENT TYPES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333]">
                Specialized AI Agents for Every Need
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from a variety of purpose-built AI agents or create custom agents tailored to your specific requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#E8F5F0] rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#333333]">Customer Support Agent</h3>
                <p className="text-gray-600">
                  Handle customer inquiries, provide information, and resolve issues, offering personalized support available 24/7.
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#E8F5F0] rounded-lg flex items-center justify-center mb-6">
                  <Bot className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#333333]">Data Extraction Agent</h3>
                <p className="text-gray-600">
                  Extract, process, and organize information from various document formats, emails, and databases with high accuracy.
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#E8F5F0] rounded-lg flex items-center justify-center mb-6">
                  <Workflow className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#333333]">Order Processing Agent</h3>
                <p className="text-gray-600">
                  Automate order management workflows, from validation and processing to tracking and updates.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How AI Agents Work Section */}
        <section className="py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-4">
                TECHNOLOGY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333] mb-4">
                How Our AI Agents Work
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our agents combine multiple AI models with specialized tools to achieve human-like capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#333333]">Planning & Execution</h3>
                  <p className="text-gray-600">
                    Agents break down complex tasks into manageable steps, create execution plans, and adapt as they work. They systematically approach problems, prioritize actions, and handle contingencies when unexpected situations arise.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#333333]">Tool Integration</h3>
                  <p className="text-gray-600">
                    Our agents can use external tools, APIs, and services to extend their capabilities beyond language processing. This enables them to access information, perform calculations, manage databases, and interact with other systems.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#333333]">Memory & Learning</h3>
                  <p className="text-gray-600">
                    Agents maintain context across interactions and improve their performance over time through feedback. They can remember past conversations, user preferences, and previous decisions to provide more personalized and consistent responses.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#333333]">Safety & Control</h3>
                  <p className="text-gray-600">
                    Built-in guardrails ensure agents operate within defined parameters and maintain alignment with human values. We implement comprehensive safety measures, content filtering, and continuous monitoring to ensure responsible AI deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-4">
                CAPABILITIES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333]">
                Key Features of Our AI Agents
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Powered by cutting-edge technology to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-[#1a0b3f] p-8 rounded-lg text-white">
                <div className="mb-6">
                  <Settings className="h-12 w-12 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Tools & Integrations</h3>
                <p className="text-white/80">
                  Agents leverage a combination of Tools, Integrations, on top of an Agent Memory.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#1a0b3f] p-8 rounded-lg text-white">
                <div className="mb-6">
                  <Zap className="h-12 w-12 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Agentic Workflow</h3>
                <p className="text-white/80">
                  Execute the "Agentic" way, with 100× more speed and efficiency.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#1a0b3f] p-8 rounded-lg text-white">
                <div className="mb-6">
                  <BrainCircuit className="h-12 w-12 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Agent Character</h3>
                <p className="text-white/80">
                  Assign a unique character to the agent, to suit your organization's communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Gallery Section */}
        <section className="py-16 md:py-24 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-4">
                APPLICATIONS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333] mb-4">
                Use Case Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-3">
                Learn how our AI agents handle real-world tasks across various sectors in Uganda
              </p>
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-md mt-2">
                <p className="font-medium">All agent use cases shown below are currently in development and coming soon</p>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Featured", "Finance", "Healthcare", "Agriculture", "Education", "Government", "Energy"].map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Financial Advisor Agent */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative">
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium text-sm z-10">
                  Coming Soon
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#E8F5F0] rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#159b8d]"
                    >
                      <path d="M2 17a5 5 0 0 1 10 0c0 2.5-2.5 2.5-2.5 5h-5c0-2.5-2.5-2.5-2.5-5Z" />
                      <path d="M12 17a5 5 0 0 1 10 0c0 2.5-2.5 2.5-2.5 5h-5c0-2.5-2.5-2.5-2.5-5Z" />
                      <path d="M7 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
                      <path d="M17 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Financial Advisor</h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered financial advisory tailored to Uganda's economic landscape, providing personalized investment strategies and financial planning.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 mt-4 relative">
                    <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center rounded z-10">
                      <span className="text-gray-600 font-medium">Preview Coming Soon</span>
                    </div>
                    <img
                      src="/placeholder.svg?height=150&width=300"
                      alt="Financial Advisor AI Demo"
                      className="w-full h-auto rounded relative"
                    />
                  </div>
                </div>
              </div>

              {/* Agricultural Agent */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative">
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium text-sm z-10">
                  Coming Soon
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#E8F5F0] rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#159b8d]"
                    >
                      <path d="M3 7a9 9 0 0 1 9 9" />
                      <path d="M3 17a9 9 0 0 1 9-9" />
                      <circle cx="13" cy="17" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Coffee Crop Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    AI agents that analyze soil conditions, weather patterns, and crop health to provide actionable insights for Ugandan coffee farmers.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 mt-4 relative">
                    <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center rounded z-10">
                      <span className="text-gray-600 font-medium">Preview Coming Soon</span>
                    </div>
                    <img
                      src="/placeholder.svg?height=150&width=300"
                      alt="Crop Analysis AI Demo"
                      className="w-full h-auto rounded relative"
                    />
                  </div>
                </div>
              </div>

              {/* Healthcare AI Agent */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative">
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium text-sm z-10">
                  Coming Soon
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#E8F5F0] rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#159b8d]"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Medical Diagnosis</h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered diagnostic assistant that helps healthcare providers in Uganda identify diseases and recommend treatment options with high accuracy.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 mt-4 relative">
                    <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center rounded z-10">
                      <span className="text-gray-600 font-medium">Preview Coming Soon</span>
                    </div>
                    <img
                      src="/placeholder.svg?height=150&width=300"
                      alt="Medical Diagnosis AI Demo"
                      className="w-full h-auto rounded relative"
                    />
                  </div>
                </div>
              </div>

              {/* Education AI Agent */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative">
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium text-sm z-10">
                  Coming Soon
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#E8F5F0] rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#159b8d]"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Multilingual Tutor</h3>
                  <p className="text-gray-600 mb-4">
                    Personalized AI tutoring that supports education in multiple Ugandan languages, adapting to individual learning styles and providing educational support for students across various subjects.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 mt-4 relative">
                    <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center rounded z-10">
                      <span className="text-gray-600 font-medium">Preview Coming Soon</span>
                    </div>
                    <img
                      src="/placeholder.svg?height=150&width=300"
                      alt="Educational Tutor AI Demo"
                      className="w-full h-auto rounded relative"
                    />
                  </div>
                </div>
              </div>

              {/* Energy AI Agent */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative">
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium text-sm z-10">
                  Coming Soon
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#E8F5F0] rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#159b8d]"
                    >
                      <path d="M6 7.91V16a6 6 0 0 0 12 0V7.91" />
                      <path d="M12 2v12" />
                      <path d="M6 10h12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Solar Grid Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    AI systems that monitor and optimize solar energy distribution for businesses and utilities in Uganda, promoting sustainability and cost savings.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 mt-4 relative">
                    <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center rounded z-10">
                      <span className="text-gray-600 font-medium">Preview Coming Soon</span>
                    </div>
                    <img
                      src="/placeholder.svg?height=150&width=300"
                      alt="Energy Optimization AI Demo"
                      className="w-full h-auto rounded relative"
                    />
                  </div>
                </div>
              </div>

              {/* Government Service Agent */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative">
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium text-sm z-10">
                  Coming Soon
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#E8F5F0] rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#159b8d]"
                    >
                      <path d="M2 20h20" />
                      <path d="M5 20V8.2a2 2 0 0 1 .6-1.4l4.6-4.6a2 2 0 0 1 2.8 0l4.6 4.6a2 2 0 0 1 .6 1.4V20" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Public Service Assistant</h3>
                  <p className="text-gray-600 mb-4">
                    AI agent that helps citizens navigate government services, access information about public programs, and complete administrative procedures efficiently.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 mt-4 relative">
                    <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center rounded z-10">
                      <span className="text-gray-600 font-medium">Preview Coming Soon</span>
                    </div>
                    <img
                      src="/placeholder.svg?height=150&width=300"
                      alt="Government Service AI Demo"
                      className="w-full h-auto rounded relative"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center mt-10">
              <Button variant="outline" size="lg">
                View More Use Cases
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#159b8d] text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build the best AI agents?</h2>
              <p className="text-xl mb-8 opacity-90">
                Uganda AI Studio is not just another tool—it's a full ecosystem of AI-driven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#159b8d] hover:bg-gray-100">
                  Get Started Today
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#159b8d] text-[#159b8d] bg-white hover:bg-[#159b8d] hover:text-white">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}