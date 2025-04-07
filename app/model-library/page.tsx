import Link from "next/link"
import Image from "next/image"
import { Search, X, Grid, List, ChevronRight, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function ModelLibrary() {
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
            <Link href="/model-library" className="text-sm font-medium underline underline-offset-4 text-[#159b8d]">
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

      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6">
          <h1 className="text-3xl font-bold mb-8 text-[#333333]">Model Library</h1>

          {/* Featured Model */}
          <div className="bg-[#2E5E75] text-white rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">QwQ 32B</h2>
                <p className="mb-6">
                  QwQ is the reasoning model of the Qwen series. Compared with conventional instruction-tuned models,
                  QwQ, which is capable of thinking and reasoning, can achieve significantly enhanced performance in
                  downstream tasks, especially hard problems. QwQ-32B is the medium-sized reasoning model, which is
                  capable of achieving competitive performance against state-of-the-art reasoning models, e.g.,
                  DeepSeek-R1, o1-mini.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-[#FFA94D] hover:bg-[#FF9933] text-black">
                    Try It
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-[#3A6F86]">
                    Learn more
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=200&text=Qwen"
                  width={200}
                  height={200}
                  alt="QwQ 32B"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative w-full md:w-96">
              <Input type="text" placeholder="Search models" className="pl-10 pr-10 w-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2" aria-label="Clear search">
                <X className="h-4 w-4 text-gray-400" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <Button variant="outline" className="border-[#159b8d] text-[#159b8d]">
                Select a model provider
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>

              <div className="flex gap-2">
                <Badge variant="outline" className="rounded-full cursor-pointer hover:bg-[#E8F5F0]">
                  Serverless
                </Badge>
                <Badge variant="outline" className="rounded-full cursor-pointer hover:bg-[#E8F5F0]">
                  Tunable
                </Badge>
                <Badge variant="outline" className="rounded-full cursor-pointer hover:bg-[#E8F5F0]">
                  LLM
                </Badge>
                <Badge variant="outline" className="rounded-full cursor-pointer hover:bg-[#E8F5F0]">
                  Image
                </Badge>
                <Badge variant="outline" className="rounded-full cursor-pointer hover:bg-[#E8F5F0]">
                  Audio
                </Badge>
              </div>

              <div className="flex ml-auto">
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <Grid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Model Categories */}
          <div className="space-y-12">
            {/* Large Language Models */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-[#159b8d]" />
                <h2 className="text-xl font-semibold text-[#333333]">Large Language Models</h2>
                <ChevronRight className="h-4 w-4 text-[#159b8d]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* DeepSeek R1 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-900 to-purple-900"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-[#159b8d] mt-1" />
                      <div>
                        <h3 className="font-medium">DeepSeek R1 (Fast)</h3>
                        <p className="text-sm text-gray-500">$3.00/M Input • $8.00/M Output • 160k Context</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="outline" className="rounded-full text-xs">
                        Serverless
                      </Badge>
                      <Badge variant="outline" className="rounded-full text-xs">
                        Tunable
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Llama 3.1 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-900 to-purple-900"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-[#159b8d] mt-1" />
                      <div>
                        <h3 className="font-medium">Llama 3.1 405B Instruct</h3>
                        <p className="text-sm text-gray-500">$3.00/M Tokens • 128k Context</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="outline" className="rounded-full text-xs">
                        Serverless
                      </Badge>
                      <Badge variant="outline" className="rounded-full text-xs">
                        Tunable
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* DeepSeek V3 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-900 to-purple-900"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-[#159b8d] mt-1" />
                      <div>
                        <h3 className="font-medium">DeepSeek V3</h3>
                        <p className="text-sm text-gray-500">$0.90/M Tokens • 128k Context</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="outline" className="rounded-full text-xs">
                        Serverless
                      </Badge>
                      <Badge variant="outline" className="rounded-full text-xs">
                        Tunable
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Deepseek V3 03-24 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-900 to-purple-900"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-[#159b8d] mt-1" />
                      <div>
                        <h3 className="font-medium">Deepseek V3 03-24</h3>
                        <p className="text-sm text-gray-500">$1.20/M Tokens • 160k Context</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="outline" className="rounded-full text-xs">
                        Serverless
                      </Badge>
                      <Badge variant="outline" className="rounded-full text-xs">
                        Tunable
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Llama 3.1 8B */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-900 to-purple-900"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-[#159b8d] mt-1" />
                      <div>
                        <h3 className="font-medium">Llama 3.1 8B Instruct</h3>
                        <p className="text-sm text-gray-500">$0.20/M Tokens • 128k Context</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="outline" className="rounded-full text-xs">
                        Serverless
                      </Badge>
                      <Badge variant="outline" className="rounded-full text-xs">
                        Tunable
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* See All */}
                <div className="border rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Link href="#" className="flex items-center text-[#159b8d] hover:underline p-4">
                    <span>See all 157 models</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Generation */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  className="h-5 w-5 text-[#159b8d]"
                  width={20}
                  height={20}
                  src="/placeholder.svg?height=20&width=20"
                  alt="Image icon"
                />
                <h2 className="text-xl font-semibold text-[#333333]">Image Generation</h2>
                <ChevronRight className="h-4 w-4 text-[#159b8d]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Stable Diffusion 3.5 Large */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Image
                        className="h-5 w-5 mt-1"
                        width={20}
                        height={20}
                        src="/placeholder.svg?height=20&width=20"
                        alt="Image icon"
                      />
                      <div>
                        <h3 className="font-medium">Stable Diffusion 3.5 Large</h3>
                        <p className="text-sm text-gray-500">$0.065/ea</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stable Diffusion 3.5 Medium */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Image
                        className="h-5 w-5 mt-1"
                        width={20}
                        height={20}
                        src="/placeholder.svg?height=20&width=20"
                        alt="Image icon"
                      />
                      <div>
                        <h3 className="font-medium">Stable Diffusion 3.5 Medium</h3>
                        <p className="text-sm text-gray-500">$0.035/ea</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stable Diffusion 3.5 Large Turbo */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Image
                        className="h-5 w-5 mt-1"
                        width={20}
                        height={20}
                        src="/placeholder.svg?height=20&width=20"
                        alt="Image icon"
                      />
                      <div>
                        <h3 className="font-medium">Stable Diffusion 3.5 Large Turbo</h3>
                        <p className="text-sm text-gray-500">$0.04/ea</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FLUX.1 [dev] FP8 */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Image
                        className="h-5 w-5 mt-1"
                        width={20}
                        height={20}
                        src="/placeholder.svg?height=20&width=20"
                        alt="Image icon"
                      />
                      <div>
                        <h3 className="font-medium">FLUX.1 [dev] FP8</h3>
                        <p className="text-sm text-gray-500">$0.0005/step</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="outline" className="rounded-full text-xs">
                        Serverless
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* FLUX.1 [schnell] */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Image
                        className="h-5 w-5 mt-1"
                        width={20}
                        height={20}
                        src="/placeholder.svg?height=20&width=20"
                        alt="Image icon"
                      />
                      <div>
                        <h3 className="font-medium">FLUX.1 [schnell]</h3>
                        <p className="text-sm text-gray-500">$0.0007/step</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* See All */}
                <div className="border rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Link href="#" className="flex items-center text-[#159b8d] hover:underline p-4">
                    <span>See all 15 models</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Speech-to-Text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  className="h-5 w-5 text-[#159b8d]"
                  width={20}
                  height={20}
                  src="/placeholder.svg?height=20&width=20"
                  alt="Audio icon"
                />
                <h2 className="text-xl font-semibold text-[#333333]">Speech-to-Text</h2>
                <ChevronRight className="h-4 w-4 text-[#159b8d]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Streaming Speech Transcription */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Image
                        className="h-5 w-5 mt-1"
                        width={20}
                        height={20}
                        src="/placeholder.svg?height=20&width=20"
                        alt="Audio icon"
                      />
                      <div>
                        <h3 className="font-medium">Streaming Speech Transcription</h3>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="outline" className="rounded-full text-xs">
                        Serverless
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Whisper V3 Large */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Image
                        className="h-5 w-5 mt-1"
                        width={20}
                        height={20}
                        src="/placeholder.svg?height=20&width=20"
                        alt="Audio icon"
                      />
                      <div>
                        <h3 className="font-medium">Whisper V3 Large</h3>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="outline" className="rounded-full text-xs">
                        Serverless
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Whisper V3 Turbo */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <Image
                        className="h-5 w-5 mt-1"
                        width={20}
                        height={20}
                        src="/placeholder.svg?height=20&width=20"
                        alt="Audio icon"
                      />
                      <div>
                        <h3 className="font-medium">Whisper V3 Turbo</h3>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="outline" className="rounded-full text-xs">
                        Serverless
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.242 2.874.452 1.576 1.781 2.119 3.418 2.119 4.069 0 6.625-2.729 6.625-6.621 0-.29-.01-1.131-.01-2.204 0-.682.493-1.181 1.091-1.181z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#333333]">Explore</h4>
              <div className="space-y-2">
                <Link href="#" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  Model Library
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  Docs
                </Link>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  Pricing
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  Embodied AI
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  AI Agents
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  Blog
                </Link>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  Contact Us
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  Company
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#333333]">Resources</h4>
              <div className="space-y-2">
                <Link href="#" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-[#159b8d] block">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#333333]">Stay up to date</h4>
              <p className="text-sm text-gray-600">
                Subscribe to our newsletter to get the latest news, updates and resources.
              </p>
              <div className="flex">
                <Input type="email" placeholder="Enter your email" className="w-full rounded-l-md" />
                <Button className="bg-[#159b8d] hover:bg-[#128a7d] rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t py-4 mt-8">
            <p className="text-sm text-gray-600 text-center">© 2024 Uganda AI Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

