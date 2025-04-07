import Link from "next/link"
import { Check, Building, Terminal, ExternalLink, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PricingPage() {
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
            <Link href="/pricing" className="text-sm font-medium underline underline-offset-4 text-[#159b8d]">
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
        {/* Pricing Hero */}
        <section className="py-16 px-4 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#333333]">
              Pricing to seamlessly scale from idea to enterprise
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Developer Plan */}
              <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <Terminal className="h-10 w-10 text-[#159b8d]" />
                  <div>
                    <h2 className="text-2xl font-bold text-[#333333]">Developer</h2>
                    <p className="text-gray-600">Powerful speed and reliability to start your project</p>
                  </div>
                </div>

                <div className="space-y-4 mt-8 mb-12">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>UGX 350,000 free credits</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Fully pay-as-you-go</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Serverless inference up to 6,000 RPM, 2.5 billion tokens/day</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Deploy up to 8 GPUs on-demand, 2,000 GPU hours/month</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <div className="flex items-center gap-1">
                      <span>Team collaboration features</span>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Up to 100 deployed models</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>No extra cost for running fine-tuned models</span>
                  </div>
                </div>

                <Link href="/signup">
                  <Button className="w-full bg-[#159b8d] hover:bg-[#128a7d]">Get Started</Button>
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-[#1a1a1a] text-white rounded-lg shadow-lg p-8 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <Building className="h-10 w-10 text-white" />
                  <div>
                    <h2 className="text-2xl font-bold">Enterprise</h2>
                    <p className="text-gray-300">Personalized configurations for serving at scale</p>
                  </div>
                </div>

                <div className="space-y-4 mt-8 mb-12">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Everything from the Developer plan</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Custom pricing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Unlimited rate limits</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Dedicated and self-hosted deployments</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Guaranteed uptime SLAs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Unlimited deployed models</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#159b8d] mt-0.5" />
                    <span>Support w/ guaranteed response times</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-white hover:bg-gray-100 text-black">
                    Contact us <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#333333] flex items-center">
              <span className="inline-block h-5 w-5 mr-2 bg-[#159b8d] rounded-full"></span>
              Pricing overview
            </h2>
            <p className="text-gray-600 mb-12 max-w-4xl">
              Uganda AI Studio is fully pay-as-you-go (postpaid), besides enterprise deals. We have multiple
              pay-as-you-go product offerings, including serverless text model inference, image generation, fine-tuning
              and on-demand, private GPU inference. Spending on all offerings contribute to spending limits (including
              credits-based spending) based on past historical usage.
            </p>

            {/* Serverless text models */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#333333] flex items-center">
                <span className="inline-block h-4 w-4 mr-2 bg-[#159b8d] rounded-full"></span>
                Serverless text models
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm mb-8">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Base model parameters</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">UGX/1M tokens*</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-4 px-6 text-sm">0B - 4B</td>
                      <td className="py-4 px-6 text-sm">UGX 350,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">4B - 16B</td>
                      <td className="py-4 px-6 text-sm">UGX 700,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">16.1B+</td>
                      <td className="py-4 px-6 text-sm">UGX 3,150,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">MoE 0B - 56B (e.g. Mixtral 8x7B)</td>
                      <td className="py-4 px-6 text-sm">UGX 1,750,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">MoE 56.1B - 176B (e.g. DBRX, Mixtral 8x22B)</td>
                      <td className="py-4 px-6 text-sm">UGX 4,200,000</td>
                    </tr>
                  </tbody>
                </table>

                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Base model</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">UGX/1M tokens*</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-4 px-6 text-sm">DeepSeek V3</td>
                      <td className="py-4 px-6 text-sm">UGX 3,150,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">DeepSeek R1 (Fast)</td>
                      <td className="py-4 px-6 text-sm">UGX 10,500,000 input, UGX 28,000,000 output</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">DeepSeek R1 (Basic)</td>
                      <td className="py-4 px-6 text-sm">UGX 1,925,000 input, UGX 7,665,000 output</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">Yi Large</td>
                      <td className="py-4 px-6 text-sm">UGX 10,500,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">Meta Llama 3.1 405B</td>
                      <td className="py-4 px-6 text-sm">UGX 10,500,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-sm text-gray-600 mt-4">
                <p>
                  Per-token pricing is applied only for serverless inference. See below for on-demand deployment
                  pricing.
                </p>
                <p className="mt-2">
                  LoRA models deployed to our serverless inference service are charged at the same rate as the
                  underlying base model. There is no additional cost for serving LoRA models.
                </p>
                <p className="mt-2">* Same price applies to both input and output tokens unless otherwise specified.</p>
              </div>
            </div>

            {/* Image models */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#333333] flex items-center">
                <span className="inline-block h-4 w-4 mr-2 bg-[#159b8d] rounded-full"></span>
                Image models
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Image model name</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">UGX/step</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">
                        Image model w/ ControlNet, UGX/step
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-4 px-6 text-sm">All Non-Flux Models (SDXL, Playground, etc)</td>
                      <td className="py-4 px-6 text-sm">UGX 455 (UGX 13,650 per 30 step image)</td>
                      <td className="py-4 px-6 text-sm">UGX 700 (UGX 21,000 per 30 step image)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">FLUX.1 [dev]</td>
                      <td className="py-4 px-6 text-sm">UGX 17,500 (UGX 49,000 per 28 step image)</td>
                      <td className="py-4 px-6 text-sm">N/A on serverless</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">FLUX.1 [schnell]</td>
                      <td className="py-4 px-6 text-sm">UGX 12,250 (UGX 49,000 per 4 step image)</td>
                      <td className="py-4 px-6 text-sm">N/A on serverless</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-sm text-gray-600 mt-4">
                <p>
                  For image generation models, like SDXL, we charge based on the number of inference steps (denoising
                  iterations). All image generation models besides models from the SD3 and FLUX family are priced
                  identically. SD3 uses pricing from Stability AI.
                </p>
              </div>
            </div>

            {/* Multi-modal models */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#333333] flex items-center">
                <span className="inline-block h-4 w-4 mr-2 bg-[#159b8d] rounded-full"></span>
                Multi-modal models
              </h3>

              <div className="text-sm text-gray-600">
                <p>
                  For multi-modal (vision understanding) models, images are billed as prompt tokens. The exact number of
                  prompt tokens depends on the image resolution and the model. For Phi 3.5, an image is billed depending
                  on the aspect ratio, typically around 2k to 2.5k prompt tokens. For the Llama 3.2 vision models, an
                  image is typically billed as 6400 prompt tokens.
                </p>
              </div>
            </div>

            {/* Speech-to-text */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#333333] flex items-center">
                <span className="inline-block h-4 w-4 mr-2 bg-[#159b8d] rounded-full"></span>
                Speech-to-text
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Model</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">
                        UGX/audio min (billed per sec)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-4 px-6 text-sm">Whisper-v3-large</td>
                      <td className="py-4 px-6 text-sm">UGX 52,500</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">Whisper-v3-large-turbo</td>
                      <td className="py-4 px-6 text-sm">UGX 31,500</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">Streaming transcription service</td>
                      <td className="py-4 px-6 text-sm">UGX 112,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-sm text-gray-600 mt-4">
                <p>For speech-to-text models, we charge per second of audio input.</p>
              </div>
            </div>

            {/* Embedding models */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#333333] flex items-center">
                <span className="inline-block h-4 w-4 mr-2 bg-[#159b8d] rounded-full"></span>
                Embedding models
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">
                        Base model parameter count
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">UGX/1M input tokens</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-4 px-6 text-sm">up to 150M</td>
                      <td className="py-4 px-6 text-sm">UGX 28,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">150M - 350M</td>
                      <td className="py-4 px-6 text-sm">UGX 56,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-sm text-gray-600 mt-4">
                <p>Embedding model pricing is based on the number of input tokens processed by the model.</p>
              </div>
            </div>

            {/* Fine-tuning */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#333333] flex items-center">
                <span className="inline-block h-4 w-4 mr-2 bg-[#159b8d] rounded-full"></span>
                Fine-tuning
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Model</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">
                        UGX / 1M tokens in training
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-4 px-6 text-sm">Models up to 16B parameters</td>
                      <td className="py-4 px-6 text-sm">UGX 1,750,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">Models 16.1B - 80B</td>
                      <td className="py-4 px-6 text-sm">UGX 10,500,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">MoE 0B - 56B (e.g. Mixtral 8x7B)</td>
                      <td className="py-4 px-6 text-sm">UGX 7,000,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">MoE 56.1B - 176B (e.g. DBRX, Mixtral 8x22B)</td>
                      <td className="py-4 px-6 text-sm">UGX 21,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-sm text-gray-600 mt-4">
                <p>
                  Uganda AI Studio charges based on the total number of tokens in your fine-tuning dataset (dataset size
                  * number of epochs). Uganda AI Studio only charges for the costs of tuning - there's no additional
                  cost to deploy fine-tuned models and inference costs are the same as the base model.
                </p>
              </div>
            </div>

            {/* On-demand deployments */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#333333] flex items-center">
                <span className="inline-block h-4 w-4 mr-2 bg-[#159b8d] rounded-full"></span>
                On-demand deployments
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">GPU Type</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">UGX/hour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-4 px-6 text-sm">A100 80 GB GPU</td>
                      <td className="py-4 px-6 text-sm">UGX 10,150,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">H100 80 GB GPU</td>
                      <td className="py-4 px-6 text-sm">UGX 20,300,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">H200 141 GB GPU</td>
                      <td className="py-4 px-6 text-sm">UGX 34,965,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">AMD MI300X</td>
                      <td className="py-4 px-6 text-sm">UGX 17,465,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-sm text-gray-600 mt-4">
                <p>
                  On-demand deployments are billed by GPU-second using the above rates. For estimates of per-token
                  prices, see{" "}
                  <Link href="#" className="text-[#159b8d] hover:underline inline-flex items-center">
                    this blog <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                  </Link>
                  . Results vary by use case, but we often observe improvements like ~250% improved throughput and 50%
                  improved latency when GPUs run Uganda AI Studio software compared to vLLM.
                </p>
                <p className="mt-2">
                  Pricing scales linearly when using multiple GPUs. Users do not pay for start-up times.
                </p>
              </div>
            </div>

            {/* Spending limits */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#333333] flex items-center">
                <span className="inline-block h-4 w-4 mr-2 bg-[#159b8d] rounded-full"></span>
                Spending limits
              </h3>

              <div className="text-sm text-gray-600 mb-6">
                <p>
                  Spending limits restrict how much you can spend on the Uganda AI Studio platform per calendar month.
                  The spending limit is determined by your total historical Uganda AI Studio spend. You can purchase
                  prepaid credits to immediately increase your historical spend. Visit our{" "}
                  <Link href="#" className="text-[#159b8d] hover:underline inline-flex items-center">
                    FAQ <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                  </Link>{" "}
                  for answers to common billing questions.
                </p>
                <p className="mt-2 italic">
                  Note: Credits are counted against your spending limit, so it is possible to hit the spending limit
                  before all of your current credits are depleted.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Tier</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Spending Limit</th>
                      <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Qualification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-4 px-6 text-sm">Tier 1</td>
                      <td className="py-4 px-6 text-sm">UGX 175,000 / month</td>
                      <td className="py-4 px-6 text-sm">Default with valid payment method added</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">Tier 2</td>
                      <td className="py-4 px-6 text-sm">UGX 1,750,000 / month</td>
                      <td className="py-4 px-6 text-sm">Total historical spend of UGX 175,000+</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">Tier 3</td>
                      <td className="py-4 px-6 text-sm">UGX 17,500,000 / month</td>
                      <td className="py-4 px-6 text-sm">Total historical spend of UGX 1,750,000+</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">Tier 4</td>
                      <td className="py-4 px-6 text-sm">UGX 175,000,000 / month</td>
                      <td className="py-4 px-6 text-sm">Total historical spend of UGX 17,500,000+</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-sm">Custom</td>
                      <td className="py-4 px-6 text-sm">
                        Contact us at{" "}
                        <Link href="mailto:inquiries@ugandaai.studio" className="text-[#159b8d] hover:underline">
                          inquiries@ugandaai.studio
                        </Link>
                      </td>
                      <td className="py-4 px-6 text-sm"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#E8F5F0]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#333333]">Ready to get started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Try Uganda AI Studio today with free credits to explore our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-[#159b8d] hover:bg-[#128a7d]">
                  Sign up and get UGX 350,000 in credits
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-[#159b8d] text-[#159b8d]">
                  Contact sales
                </Button>
              </Link>
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

