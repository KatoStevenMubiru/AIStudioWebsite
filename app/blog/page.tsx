import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock, ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"

export default function BlogPage() {
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
        <section className="bg-[#E8F5F0] py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#333333]">Uganda AI Studio Blog</h1>
              <p className="text-xl text-gray-600 mb-8">
                Insights, updates, and deep dives into AI models, technology, and innovation
              </p>
              <div className="relative max-w-xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 w-full rounded-md border-gray-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#333333]">Featured Article</h2>
            <div className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-full">
                  <Image src="/images/deepseek-logo.png" alt="DeepSeek V3" fill className="object-cover" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-[#159b8d] hover:bg-[#128a7d]">Featured</Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" /> Coming Soon
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#333333]">
                    DeepSeek V3: The Next Generation of AI Reasoning
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Explore the capabilities of DeepSeek V3, the latest state-of-the-art model now available on Uganda
                    AI Studio. Learn how its advanced reasoning capabilities can transform your AI applications.
                  </p>
                  <Button className="self-start bg-[#159b8d] hover:bg-[#128a7d]">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">Latest Articles</h2>
              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-[#E8F5F0]">
                  All
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-[#E8F5F0]">
                  Models
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-[#E8F5F0]">
                  Tutorials
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-[#E8F5F0]">
                  News
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Post 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <Image src="/images/mistral-logo.webp" alt="Mistral AI" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-[#159b8d] border-[#159b8d]">
                      Models
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" /> Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#333333]">
                    Mistral Small 3: Faster, Lighter, and More Efficient
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Discover how Mistral Small 3 delivers exceptional performance while maintaining a smaller footprint,
                    making it ideal for resource-constrained environments.
                  </p>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0 text-[#159b8d] hover:text-[#128a7d]">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> 5 min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <Image src="/images/meta-logo.jpeg" alt="Meta Llama" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-[#159b8d] border-[#159b8d]">
                      Models
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" /> Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#333333]">
                    Llama 3.1: Meta's Latest Open Source LLM Now Available
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Explore the capabilities of Meta's Llama 3.1, now available on Uganda AI Studio. Learn how this
                    powerful open-source model can enhance your AI applications.
                  </p>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0 text-[#159b8d] hover:text-[#128a7d]">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> 7 min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Post 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <Image src="/images/anthropic-logo.webp" alt="Anthropic Claude" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-[#159b8d] border-[#159b8d]">
                      Models
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" /> Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#333333]">Claude: Anthropic's Advanced AI Assistant</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Discover how Claude, Anthropic's flagship AI assistant, can help you build more reliable,
                    interpretable, and steerable AI systems for your business needs.
                  </p>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0 text-[#159b8d] hover:text-[#128a7d]">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> 6 min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Post 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <Image src="/images/cohere-logo.webp" alt="Cohere" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-[#159b8d] border-[#159b8d]">
                      Models
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" /> Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#333333]">
                    Cohere Command: Enterprise-Ready LLMs for Business
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Learn how Cohere Command models can help enterprises build production-ready AI applications with
                    state-of-the-art performance and reliability.
                  </p>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0 text-[#159b8d] hover:text-[#128a7d]">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> 8 min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Post 5 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <Image src="/images/google-logo.png" alt="Google Gemini" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-[#159b8d] border-[#159b8d]">
                      Models
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" /> Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#333333]">Gemini: Google's Most Advanced AI Model</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Explore the capabilities of Google's Gemini models, designed to excel across a wide range of tasks
                    from natural language understanding to multimodal reasoning.
                  </p>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0 text-[#159b8d] hover:text-[#128a7d]">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> 9 min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Post 6 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <Image src="/images/openai-logo.png" alt="OpenAI" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-[#159b8d] border-[#159b8d]">
                      Models
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" /> Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#333333]">
                    GPT-4o: OpenAI's Most Advanced Multimodal Model
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Discover how GPT-4o combines vision and language understanding to deliver exceptional performance
                    across a wide range of tasks and applications.
                  </p>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0 text-[#159b8d] hover:text-[#128a7d]">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> 10 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="border-[#159b8d] text-[#159b8d]">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Research Papers Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-2">
                  RESEARCH
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">AI Research Papers</h2>
                <p className="text-gray-600 mt-2">Summaries and discussions of the latest AI research papers</p>
              </div>
              <Link href="/blog/papers">
                <Button variant="outline" className="border-[#159b8d] text-[#159b8d]">
                  View All Papers
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Paper 1 */}
              <div className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-[#159b8d] hover:bg-[#128a7d]">New</Badge>
                    <Badge variant="outline" className="text-[#159b8d] border-[#159b8d]">
                      LLMs
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" /> Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#333333]">
                    TRICE: Transformer Reasoning with Input Chain Expansion
                  </h3>
                  <p className="text-gray-600 mb-4">
                    An exploration of how chain-of-thought reasoning can be enhanced with a new prompting technique that expands the input context.
                  </p>
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-sm text-gray-600"><strong>Authors:</strong> Jane Smith, John Doe, et al.</span>
                    <span className="text-sm text-gray-600"><strong>Published:</strong> Coming Soon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0 text-[#159b8d] hover:text-[#128a7d]">
                      Read Summary <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <Badge variant="outline" className="bg-white">Paper Reading Session</Badge>
                  </div>
                </div>
              </div>

              {/* Paper 2 */}
              <div className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-[#159b8d] border-[#159b8d]">
                      Computer Vision
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" /> Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#333333]">
                    DALL-E 3 Architecture: Multimodal Reasoning in Image Generation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A deep dive into the architecture behind DALL-E 3 and how it achieves remarkable text-to-image generation capabilities.
                  </p>
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-sm text-gray-600"><strong>Authors:</strong> OpenAI Research Team</span>
                    <span className="text-sm text-gray-600"><strong>Published:</strong> Coming Soon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0 text-[#159b8d] hover:text-[#128a7d]">
                      Read Summary <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <Badge variant="outline" className="bg-white">Upcoming</Badge>
                  </div>
                </div>
              </div>

              {/* Paper 3 */}
              <div className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-[#159b8d] border-[#159b8d]">
                      Reinforcement Learning
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" /> Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#333333]">
                    Multi-Agent Reinforcement Learning for Embodied AI
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Examining how multiple AI agents can cooperate to solve complex physical tasks in simulated environments.
                  </p>
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-sm text-gray-600"><strong>Authors:</strong> Various Researchers</span>
                    <span className="text-sm text-gray-600"><strong>Published:</strong> Coming Soon</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="p-0 text-[#159b8d] hover:text-[#128a7d]">
                      Read Summary <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <Badge variant="outline" className="bg-white">Discussion</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-[#E8F5F0] rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#333333]">Join Our Paper Reading Sessions</h3>
                  <p className="text-gray-600">
                    Every Wednesday at 4 PM EAT, we host a virtual paper reading session where we discuss the latest AI research.
                  </p>
                </div>
                <Link href="/blog/papers/sessions">
                  <Button className="bg-[#159b8d] hover:bg-[#128a7d] text-white whitespace-nowrap">
                    Register for Next Session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#333333]">Browse by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#E8F5F0] rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2 text-[#159b8d]">Model Updates</h3>
                <p className="text-gray-600 text-sm">Latest releases and improvements to our AI models</p>
              </div>
              <div className="bg-[#E8F5F0] rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2 text-[#159b8d]">Tutorials</h3>
                <p className="text-gray-600 text-sm">Step-by-step guides to help you get the most from our platform</p>
              </div>
              <div className="bg-[#E8F5F0] rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2 text-[#159b8d]">Case Studies</h3>
                <p className="text-gray-600 text-sm">Real-world applications and success stories</p>
              </div>
              <div className="bg-[#E8F5F0] rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2 text-[#159b8d]">Research</h3>
                <p className="text-gray-600 text-sm">Deep dives into AI technology and innovation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-12 md:py-16 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-2">
                COMMUNITY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333] mb-3">
                Join Our AI Community
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with other AI enthusiasts, researchers, and developers in Uganda and beyond
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Discussion Forums */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#1a0b3f] p-5 text-white">
                  <h3 className="text-xl font-bold">Discussion Forums</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Engage in discussions about AI development, models, applications, and more in our moderated forums.
                  </p>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-semibold text-[#333333]">Latest Topics</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="text-sm text-gray-600">
                          <Link href="#" className="text-[#159b8d] hover:underline">How to optimize transformer models for low-resource environments?</Link>
                          <span className="text-gray-500 text-xs block">32 replies • Coming Soon</span>
                        </li>
                        <li className="text-sm text-gray-600">
                          <Link href="#" className="text-[#159b8d] hover:underline">Best practices for fine-tuning Llama models</Link>
                          <span className="text-gray-500 text-xs block">24 replies • Coming Soon</span>
                        </li>
                        <li className="text-sm text-gray-600">
                          <Link href="#" className="text-[#159b8d] hover:underline">Using LLMs for automated content generation in Luganda</Link>
                          <span className="text-gray-500 text-xs block">18 replies • Coming Soon</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/community/forums">
                      <Button variant="outline" className="w-full border-[#159b8d] text-[#159b8d] hover:bg-[#159b8d] hover:text-white">
                        Browse All Forums
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Q&A Portal */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#1a0b3f] p-5 text-white">
                  <h3 className="text-xl font-bold">Q&A Portal</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Ask questions and get answers from our community of AI experts, developers, and researchers.
                  </p>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-semibold text-[#333333]">Top Questions</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="text-sm text-gray-600">
                          <Link href="#" className="text-[#159b8d] hover:underline">How do I implement a custom attention mechanism?</Link>
                          <span className="text-gray-500 text-xs block">5 answers • Coming Soon</span>
                        </li>
                        <li className="text-sm text-gray-600">
                          <Link href="#" className="text-[#159b8d] hover:underline">Recommended approach for multi-modal embeddings?</Link>
                          <span className="text-gray-500 text-xs block">3 answers • Coming Soon</span>
                        </li>
                        <li className="text-sm text-gray-600">
                          <Link href="#" className="text-[#159b8d] hover:underline">Debugging CUDA memory issues with large models</Link>
                          <span className="text-gray-500 text-xs block">7 answers • Coming Soon</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/community/qa">
                      <Button variant="outline" className="w-full border-[#159b8d] text-[#159b8d] hover:bg-[#159b8d] hover:text-white">
                        Ask a Question
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Collaborative Projects */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#1a0b3f] p-5 text-white">
                  <h3 className="text-xl font-bold">Collaborative Projects</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Join or start collaborative AI projects with other community members, focusing on local Ugandan challenges.
                  </p>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-semibold text-[#333333]">Active Projects</h4>
                      <ul className="mt-2 space-y-2">
                        <li className="text-sm text-gray-600">
                          <Link href="#" className="text-[#159b8d] hover:underline">Ugandan Languages AI Translation Project</Link>
                          <span className="text-gray-500 text-xs block">8 contributors • Coming Soon</span>
                        </li>
                        <li className="text-sm text-gray-600">
                          <Link href="#" className="text-[#159b8d] hover:underline">Agricultural Crop Disease Detection with CV</Link>
                          <span className="text-gray-500 text-xs block">12 contributors • Coming Soon</span>
                        </li>
                        <li className="text-sm text-gray-600">
                          <Link href="#" className="text-[#159b8d] hover:underline">Healthcare Diagnostic Assistant for Rural Areas</Link>
                          <span className="text-gray-500 text-xs block">6 contributors • Coming Soon</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/community/projects">
                      <Button variant="outline" className="w-full border-[#159b8d] text-[#159b8d] hover:bg-[#159b8d] hover:text-white">
                        Explore Projects
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Events Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#333333]">Upcoming Community Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex gap-4">
                      <div className="bg-[#E8F5F0] text-[#159b8d] rounded-lg p-3 h-fit text-center min-w-[60px]">
                        <span className="block text-xl font-bold">15</span>
                        <span className="text-sm">Oct</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#333333]">AI Workshop: Getting Started with Uganda AI Studio</h4>
                        <p className="text-sm text-gray-600 mt-1">Virtual • Coming Soon • 2:00 PM - 4:00 PM EAT</p>
                        <div className="mt-3">
                          <Link href="/community/events/1">
                            <Button size="sm" className="bg-[#159b8d] hover:bg-[#128a7d] text-white">
                              Register
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex gap-4">
                      <div className="bg-[#E8F5F0] text-[#159b8d] rounded-lg p-3 h-fit text-center min-w-[60px]">
                        <span className="block text-xl font-bold">21</span>
                        <span className="text-sm">Oct</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#333333]">Meetup: AI for Sustainable Development in Uganda</h4>
                        <p className="text-sm text-gray-600 mt-1">Kampala • Coming Soon • 5:00 PM - 7:00 PM EAT</p>
                        <div className="mt-3">
                          <Link href="/community/events/2">
                            <Button size="sm" className="bg-[#159b8d] hover:bg-[#128a7d] text-white">
                              Register
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link href="/community/events">
                    <Button variant="outline" className="border-[#159b8d] text-[#159b8d]">
                      View All Events
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Contributions Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-2">
                OPEN SOURCE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333] mb-3">
                Our Open Source Contributions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the tools, libraries, and resources we've released to advance AI technology in Uganda and beyond
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Project 1 */}
              <div className="bg-[#f8f9fa] rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-[#333333]">UgandaNLP</h3>
                    <Badge className="bg-[#159b8d]">Python</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A comprehensive NLP toolkit for Ugandan languages, including tokenizers, embeddings, and pre-trained models for Luganda, Acholi, Ateso, and more.
                  </p>
                  <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                    <div><strong>Version:</strong> 0.3.2 (Coming Soon)</div>
                    <div><strong>Maintainers:</strong> Uganda AI Studio Team</div>
                    <div><strong>License:</strong> MIT</div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Link href="https://github.com/uganda-ai-studio/ugandanlp" target="_blank">
                      <Button variant="outline" size="sm" className="border-[#159b8d] text-[#159b8d] hover:bg-[#159b8d] hover:text-white">
                        GitHub Repository
                      </Button>
                    </Link>
                    <Link href="/docs/ugandanlp">
                      <Button variant="link" size="sm" className="text-[#159b8d]">
                        Documentation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-[#f8f9fa] rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-[#333333]">AgriVision Kit</h3>
                    <Badge className="bg-[#159b8d]">Python/TensorFlow</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A computer vision toolkit optimized for agricultural applications in East Africa, including crop disease detection, yield estimation, and soil analysis.
                  </p>
                  <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                    <div><strong>Version:</strong> 1.2.1 (Coming Soon)</div>
                    <div><strong>Maintainers:</strong> Agriculture AI Team</div>
                    <div><strong>License:</strong> Apache 2.0</div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Link href="https://github.com/uganda-ai-studio/agrivision" target="_blank">
                      <Button variant="outline" size="sm" className="border-[#159b8d] text-[#159b8d] hover:bg-[#159b8d] hover:text-white">
                        GitHub Repository
                      </Button>
                    </Link>
                    <Link href="/docs/agrivision">
                      <Button variant="link" size="sm" className="text-[#159b8d]">
                        Documentation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-[#f8f9fa] rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-[#333333]">LLM Evaluator</h3>
                    <Badge className="bg-[#159b8d]">TypeScript/JavaScript</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A comprehensive toolkit for evaluating LLM performance on various tasks, with special focus on multilingual capabilities and cultural context understanding.
                  </p>
                  <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                    <div><strong>Version:</strong> 0.9.5 (Coming Soon)</div>
                    <div><strong>Maintainers:</strong> Uganda AI Studio Research</div>
                    <div><strong>License:</strong> MIT</div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Link href="https://github.com/uganda-ai-studio/llm-evaluator" target="_blank">
                      <Button variant="outline" size="sm" className="border-[#159b8d] text-[#159b8d] hover:bg-[#159b8d] hover:text-white">
                        GitHub Repository
                      </Button>
                    </Link>
                    <Link href="/docs/llm-evaluator">
                      <Button variant="link" size="sm" className="text-[#159b8d]">
                        Documentation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Open Source Project */}
            <div className="bg-gradient-to-r from-[#1a0b3f] to-[#2a1b5f] rounded-lg shadow-lg overflow-hidden text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-white mb-4">
                    FEATURED PROJECT
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Uganda AI Model Hub
                  </h3>
                  <p className="mb-6 text-white/80">
                    An open platform for sharing, discovering, and collaborating on AI models specifically trained or fine-tuned for Ugandan contexts and applications. Includes models for local language processing, agriculture, healthcare, and education.
                  </p>
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-[#159b8d] rounded-full"></div>
                      <span>20+ pre-trained models available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-[#159b8d] rounded-full"></div>
                      <span>Community contributions welcome</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-[#159b8d] rounded-full"></div>
                      <span>Comprehensive documentation and examples</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href="https://github.com/uganda-ai-studio/model-hub" target="_blank">
                      <Button className="bg-[#159b8d] hover:bg-[#128a7d]">
                        Explore the Model Hub
                      </Button>
                    </Link>
                    <Link href="/blog/posts/model-hub-intro">
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative lg:h-auto">
                  <div className="hidden lg:block bg-[#423a6f] h-full relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/50 text-lg">Model Hub Visualization (Coming Soon)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/open-source">
                <Button className="bg-[#159b8d] hover:bg-[#128a7d] text-white">
                  View All Open Source Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-16 bg-[#159b8d] text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg mb-8 opacity-90">
                Subscribe to our newsletter to receive the latest updates on AI models, tutorials, and industry
                insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="bg-white text-gray-800 border-0" />
                <Button className="bg-[#FFA94D] hover:bg-[#FF9933] text-black">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
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
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#159b8d]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
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
                  <Link href="/blog" className="text-gray-500 hover:text-[#159b8d]">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-500 hover:text-[#159b8d]">
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

