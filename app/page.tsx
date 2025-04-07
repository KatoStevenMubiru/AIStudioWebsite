import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cpu, Code, Globe, MessageSquare, BotIcon as Robot, Brain, Building, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
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
        <section className="w-full py-16 md:py-24 lg:py-32 bg-[#E8F5F0]">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="flex justify-center">
                <svg className="h-24 w-24 text-[#159b8d]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 12l8 10 8-10-8-10zm0 4l4 6-4 5-4-5 4-6z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#333333]">
                Go from <span className="font-bold">hype</span> to <span className="font-bold">high-value</span> AI
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The fastest and most efficient inference engine to build production-ready, compound AI systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#FFA94D] hover:bg-[#FF9933] text-black">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#159b8d] text-[#159b8d] hover:bg-[#E8F5F0]">
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-4">
                CUSTOMERS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333]">Trusted in production</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                "Cursor",
                "Notion",
                "DoorDash",
                "Samsung",
                "Uber",
                "Quora",
                "GitLab",
                "HubSpot",
                "Cresta",
                "Sourcegraph",
                "Upwork",
                "Verizon",
              ].map((company, index) => (
                <div key={index} className="flex items-center justify-center h-16">
                  <Image
                    src={`/placeholder.svg?height=40&width=120&text=${company}`}
                    width={120}
                    height={40}
                    alt={company}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Uganda AI Studio Section */}
        <section className="w-full py-16 md:py-24 bg-[#E8F5F0]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#159b8d] mb-4">
                UGANDA AI STUDIO
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[#333333]">
                Why Uganda AI Studio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bridge the gap between prototype and production to unlock real value from generative AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Speed Column */}
              <div className="bg-white p-8 rounded-lg border border-[#D0EBE1]">
                <h3 className="text-2xl font-semibold mb-8 text-[#333333]">Designed for speed</h3>

                <div className="mb-12">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold text-[#159b8d]">9x</span>
                    <span className="text-lg ml-2">faster RAG</span>
                  </div>
                  <p className="text-gray-500 mt-1">Uganda AI Studio model vs Groq</p>
                </div>

                <div className="mb-12">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold text-[#159b8d]">6x</span>
                    <span className="text-lg ml-2">faster image gen</span>
                  </div>
                  <p className="text-gray-500 mt-1">Uganda AI Studio SDXL vs other providers on average</p>
                </div>

                <div>
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold text-[#159b8d]">1000</span>
                    <span className="text-lg ml-2">tokens/sec</span>
                  </div>
                  <p className="text-gray-500 mt-1">with Uganda AI Studio speculative decoding</p>
                </div>
              </div>

              {/* Value Column */}
              <div className="bg-[#159b8d] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-8">Optimized for value</h3>

                <div className="mb-12">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold">40x</span>
                    <span className="text-lg ml-2">lower cost for chat</span>
                  </div>
                  <p className="text-gray-200 mt-1">Llama3 on Uganda AI Studio vs GPT4</p>
                </div>

                <div className="mb-12">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold">15x</span>
                    <span className="text-lg ml-2">higher throughput</span>
                  </div>
                  <p className="text-gray-200 mt-1">FireAttention vs vLLM</p>
                </div>

                <div>
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold">4x</span>
                    <span className="text-lg ml-2">lower $/token</span>
                  </div>
                  <p className="text-gray-200 mt-1">Mixtral 8x7b on Uganda AI Studio on-demand vs vLLM</p>
                </div>
              </div>

              {/* Scale Column */}
              <div className="bg-[#333333] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-8">Engineered for scale</h3>

                <div className="mb-12">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold">1T+</span>
                    <span className="text-lg ml-2">Tokens generated per day</span>
                  </div>
                </div>

                <div className="mb-12">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold">1M+</span>
                    <span className="text-lg ml-2">Images generated per day</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold">99.9%</span>
                    <span className="text-lg ml-2">uptime for 100+ models</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-4">PLATFORM</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#333333]">
                Fastest platform to build and deploy generative AI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start with the fastest model APIs, boost performance with cost-efficient customization, and evolve to
                compound AI systems to build powerful applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-[#E8F5F0] p-8 rounded-lg border border-[#D0EBE1]">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Deepseek R1"
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Deepseek R1</h3>
                <p className="text-gray-600">State-of-the-art reasoning model with exceptional performance.</p>
              </div>
              <div className="bg-[#E8F5F0] p-8 rounded-lg border border-[#D0EBE1]">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Meta Llama 3.3"
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Meta Llama 3.3</h3>
                <p className="text-gray-600">High-performance open model with optimized inference.</p>
              </div>
              <div className="bg-[#E8F5F0] p-8 rounded-lg border border-[#D0EBE1]">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Mixtral MoE 8x22b"
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Mixtral MoE 8x22b</h3>
                <p className="text-gray-600">Mixture of Experts model with superior performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blazing Fast Inference Section */}
        <section className="w-full py-16 md:py-24 bg-[#E8F5F0]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold mb-6 text-[#333333]">Blazing fast inference for 100+ models</h2>
                <p className="text-gray-600 mb-6">
                  Instantly run popular and specialized <span className="font-semibold">models</span>, including Llama3,
                  Mixtral, and Stable Diffusion, optimized for peak latency, throughput, and context length.
                  <span className="font-semibold"> FireAttention</span>, our custom CUDA kernel, serves models four
                  times faster than vLLM without compromising quality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-2"></div>
                    <span>Disaggregated serving</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-2"></div>
                    <span>Semantic caching</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-2"></div>
                    <span>Speculative decoding</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-3 w-3 rounded-full bg-green-500 mx-1"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mx-1"></div>
                    <div className="h-3 w-3 rounded-full bg-red-500 mx-1"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#f8f9fa] rounded-lg flex flex-col items-center">
                      <Image
                        src="/placeholder.svg?height=60&width=60&text=Deepseek"
                        width={60}
                        height={60}
                        alt="Deepseek R1"
                        className="mb-2"
                      />
                      <span className="text-sm font-medium">Deepseek R1</span>
                    </div>
                    <div className="p-4 bg-[#f8f9fa] rounded-lg flex flex-col items-center">
                      <Image
                        src="/placeholder.svg?height=60&width=60&text=Meta"
                        width={60}
                        height={60}
                        alt="Meta Llama 3.3"
                        className="mb-2"
                      />
                      <span className="text-sm font-medium">Meta Llama 3.3</span>
                    </div>
                    <div className="p-4 bg-[#f8f9fa] rounded-lg flex flex-col items-center">
                      <Image
                        src="/placeholder.svg?height=60&width=60&text=Mixtral"
                        width={60}
                        height={60}
                        alt="Mixtral MoE"
                        className="mb-2"
                      />
                      <span className="text-sm font-medium">Mixtral MoE 8x22b</span>
                    </div>
                    <div className="p-4 bg-[#f8f9fa] rounded-lg flex flex-col items-center">
                      <Image
                        src="/placeholder.svg?height=60&width=60&text=Deepseek"
                        width={60}
                        height={60}
                        alt="Deepseek V3"
                        className="mb-2"
                      />
                      <span className="text-sm font-medium">Deepseek V3</span>
                    </div>
                    <div className="p-4 bg-[#f8f9fa] rounded-lg flex flex-col items-center">
                      <Image
                        src="/placeholder.svg?height=60&width=60&text=Stability"
                        width={60}
                        height={60}
                        alt="Stable Diffusion 3"
                        className="mb-2"
                      />
                      <span className="text-sm font-medium">Stable Diffusion 3</span>
                    </div>
                    <div className="p-4 bg-[#f8f9fa] rounded-lg flex flex-col items-center">
                      <Image
                        src="/placeholder.svg?height=60&width=60&text=F1"
                        width={60}
                        height={60}
                        alt="F1"
                        className="mb-2"
                      />
                      <span className="text-sm font-medium">F1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fine-tuning Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-3 w-3 rounded-full bg-green-500 mx-1"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mx-1"></div>
                  <div className="h-3 w-3 rounded-full bg-red-500 mx-1"></div>
                  <span className="ml-4 text-sm font-medium">Fine-tune with Firectl</span>
                </div>
                <div className="font-mono text-sm bg-[#f1f3f5] p-4 rounded-md">
                  <p className="text-gray-700">firectl create dataset my-dataset path/to/dataset.jsonl</p>
                  <p className="text-gray-700 mt-2">
                    firectl create fine-tuning-job --settings-file path/to/settings.yaml
                  </p>
                  <p className="text-gray-700 mt-2">firectl deploy my-model</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#333333]">Fine-tune and deploy in minutes</h2>
                <p className="text-gray-600 mb-6">
                  <span className="font-semibold text-[#159b8d]">Fine-tune</span> with our LoRA-based service, twice as
                  cost-efficient as other providers. Instantly deploy and switch between up to 100 fine-tuned models to
                  experiment without extra costs. Serve models at blazing-fast speeds of up to 300 tokens per second on
                  our serverless inference platform.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-2"></div>
                    <span>Supervised fine-tuning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-2"></div>
                    <span>Self-tune</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-2"></div>
                    <span>Cross-model batching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="w-full py-16 md:py-24 bg-[#159b8d]">
          <div className="container px-4 md:px-6 text-center">
            <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#159b8d] mb-4">INFRASTRUCTURE</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              Production-grade infrastructure
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Build on secure, reliable infrastructure with the latest hardware.
            </p>
          </div>
        </section>

        {/* Developer & Enterprise Section */}
        <section className="w-full py-16 md:py-24 bg-[#E8F5F0]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Developer Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <Terminal className="h-8 w-8 text-[#159b8d] mr-3" />
                  <h3 className="text-2xl font-bold text-[#333333]">Built for developers</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>Start in seconds and pay-per-token with our serverless deployment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>
                      Scale with no commitments on dedicated, <span className="font-semibold">on-demand</span> GPUs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>Post-paid pricing with free initial credits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>Run on the latest GPUs for blazing speeds</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>Metrics and team collaboration tools</span>
                  </li>
                </ul>
              </div>

              {/* Enterprise Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <Building className="h-8 w-8 text-[#159b8d] mr-3" />
                  <h3 className="text-2xl font-bold text-[#333333]">Enhanced for enterprises</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>Dedicated deployments fully optimized to your use case</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>Post-paid & bulk use pricing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>SOC2 Type II & HIPAA compliant</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>Unlimited rate limits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>Secure VPC & VPN connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-[#159b8d] mt-2 mr-3"></div>
                    <span>BYOC for high QoS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-4">
                TESTIMONIALS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333]">
                Success with Uganda AI Studio
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#f8f9fa] p-6 rounded-lg">
                <p className="text-gray-700 mb-6">
                  "Uganda AI Studio has been instrumental in helping us develop AI-powered solutions for our
                  agricultural monitoring system. Their fast, reliable model inference has allowed us to focus on
                  building applications that directly benefit Ugandan farmers."
                </p>
                <div className="font-medium">David Okello</div>
                <div className="text-sm text-gray-500">CTO - AgriTech Uganda</div>
              </div>
              <div className="bg-[#f8f9fa] p-6 rounded-lg">
                <p className="text-gray-700 mb-6">
                  "As a startup focused on healthcare solutions, we've found Uganda AI Studio to be the perfect partner.
                  Their commitment to data privacy and sovereignty aligns perfectly with our values, and their technical
                  expertise has accelerated our development timeline significantly."
                </p>
                <div className="font-medium">Sarah Namuli</div>
                <div className="text-sm text-gray-500">Founder - MediConnect East Africa</div>
              </div>
              <div className="bg-[#f8f9fa] p-6 rounded-lg">
                <p className="text-gray-700 mb-6">
                  "The team at Uganda AI Studio has been exceptional in supporting our educational initiatives. Their
                  models have helped us create personalized learning experiences for students across Uganda, and their
                  technical support has been outstanding."
                </p>
                <div className="font-medium">Joseph Mugisha</div>
                <div className="text-sm text-gray-500">Director - EduTech Kampala</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-16 md:py-24 bg-[#E8F5F0]">
          <div className="container px-4 md:px-6 text-center">
            <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#159b8d] mb-4">WHO WE ARE</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-[#333333]">
              Built by a Team of Ugandan Engineers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a joint venture under the STI-Office of President, Industry 4.0 Bureau. Our team of 15 young
              professionals is dedicated to building the future of Ugandan sovereign AI.
            </p>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  As Uganda's sovereign AI initiative, we provide reliable AI infrastructure while ensuring
                  transparency, full model ownership, and complete data privacy—we don't store model inputs or outputs.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Serving government agencies, local startups, and enterprises across East Africa, we empower Ugandans
                  to innovate with new products, experiences, and improved productivity.
                </p>
                <p className="text-lg text-gray-700 mb-6">We can't wait to see what you build with us.</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="bg-[#FFA94D] hover:bg-[#FF9933] text-black">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="/pricing">
                    <Button size="lg" variant="outline" className="border-[#159b8d] text-[#159b8d]">
                      See Our Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-[#f8f9fa] p-8 rounded-lg h-full">
                {/* Placeholder for image or additional content */}
                <div className="h-64 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Uganda AI Studio"
                    width={400}
                    height={200}
                    alt="Uganda AI Studio"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embodied AI Section */}
        <section className="w-full py-16 md:py-24 bg-[#E8F5F0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#159b8d] mb-4">EMBODIED AI</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#333333]">
                Physical AI systems that interact with the world
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Cutting-edge research and development in robotics, computer vision, and multimodal AI systems that can
                perceive and interact with physical environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg border border-[#D0EBE1]">
                <div className="rounded-full bg-[#E8F5F0] p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Robot className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Robotic Systems</h3>
                <p className="text-gray-600">
                  Advanced robotic platforms powered by our high-performance AI models for research and industrial
                  applications.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-[#D0EBE1]">
                <div className="rounded-full bg-[#E8F5F0] p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Multimodal Perception</h3>
                <p className="text-gray-600">
                  Systems that combine vision, audio, and sensor data to understand and navigate complex environments.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-[#D0EBE1]">
                <div className="rounded-full bg-[#E8F5F0] p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Edge Computing</h3>
                <p className="text-gray-600">
                  Optimized inference for resource-constrained devices, enabling AI capabilities in IoT and embedded
                  systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-[#E8F5F0] px-3 py-1 text-sm text-[#159b8d] mb-4">
                AI AGENTS
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#333333]">
                Autonomous AI systems that solve complex tasks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Build and deploy autonomous AI agents that can reason, plan, and execute multi-step tasks with minimal
                human intervention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-[#E8F5F0] p-8 rounded-lg border border-[#D0EBE1]">
                <div className="rounded-full bg-white p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Conversational Agents</h3>
                <p className="text-gray-600">
                  Advanced dialogue systems that can maintain context and assist with complex tasks through natural
                  conversation.
                </p>
              </div>
              <div className="bg-[#E8F5F0] p-8 rounded-lg border border-[#D0EBE1]">
                <div className="rounded-full bg-white p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Code Agents</h3>
                <p className="text-gray-600">
                  AI systems that can write, debug, and optimize code across multiple programming languages and
                  frameworks.
                </p>
              </div>
              <div className="bg-[#E8F5F0] p-8 rounded-lg border border-[#D0EBE1]">
                <div className="rounded-full bg-white p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#159b8d]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#333333]">Research Agents</h3>
                <p className="text-gray-600">
                  Autonomous systems that can gather, analyze, and synthesize information from multiple sources to
                  answer complex questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-[#E8F5F0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-[#159b8d] mb-4">
                UGANDA AI STUDIO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#333333]">Ready to get started?</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Join thousands of developers and enterprises building with Uganda AI Studio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/signup">
                  <Button size="lg" className="bg-[#159b8d] hover:bg-[#128a7d] text-white">
                    Get Started
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#159b8d] text-[#159b8d] hover:bg-white">
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

