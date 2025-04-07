"use client"

import Link from "next/link"
import { ArrowRight, Bot, Brain, Cpu, Grid3X3, Shield, Zap } from "lucide-react"
import dynamic from 'next/dynamic'

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Lazily load heavy components
const Image = dynamic(() => import('next/image'), { ssr: false })

export default function EmbodiedAIPage() {
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
        <section className="bg-[#E8F5F0] py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#333333]">Physical Embodied AI</h1>
              <p className="text-xl text-gray-600 mb-8">
                Bringing intelligence to physical systems with our advanced solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#159b8d] hover:bg-[#128a7d] text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#159b8d] text-[#159b8d] hover:bg-[#159b8d] hover:text-white">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-4">
                FEATURES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333]">
                The Future of Physical AI Systems
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Our embodied AI platform offers cutting-edge solutions for robotics and autonomous systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#E8F5F0] rounded-lg flex items-center justify-center mb-6">
                  <Bot className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#333333]">Robotics Integration</h3>
                <p className="text-gray-600">
                  Seamlessly integrate our AI models with robotic systems for enhanced perception and navigation.
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#E8F5F0] rounded-lg flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#333333]">Sensor Fusion</h3>
                <p className="text-gray-600">
                  Combine multiple sensor inputs in real-time to create a comprehensive environmental understanding.
                </p>
              </div>

              <div className="bg-[#f8f9fa] p-8 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#E8F5F0] rounded-lg flex items-center justify-center mb-6">
                  <Cpu className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#333333]">Edge Computing</h3>
                <p className="text-gray-600">
                  Deploy high-performance AI models on edge devices for low-latency processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-4">
                  TECHNOLOGY
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333] mb-6">
                  Advanced AI for Physical Systems
                </h2>
                <p className="text-gray-600 mb-8">
                  Our embodied AI platform combines cutting-edge machine learning with robust hardware integration.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8F5F0] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-[#159b8d]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-[#333333]">Real-time Processing</h3>
                      <p className="text-gray-600">Ultra-fast inference optimized for millisecond-level responses.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8F5F0] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-[#159b8d]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-[#333333]">Safety-first Design</h3>
                      <p className="text-gray-600">Built-in safeguards and failure recovery mechanisms.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8F5F0] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Grid3X3 className="h-5 w-5 text-[#159b8d]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-[#333333]">Modular Architecture</h3>
                      <p className="text-gray-600">Easily integrate with existing systems and expand capabilities.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Technology Diagram</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#159b8d] text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build with Embodied AI?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join the growing number of businesses leveraging our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#159b8d] hover:bg-gray-100">
                    Schedule a Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#159b8d] text-[#159b8d] bg-white hover:bg-[#159b8d] hover:text-white">
                    Contact Sales
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