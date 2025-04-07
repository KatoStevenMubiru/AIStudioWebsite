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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function QuickstartPage() {
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
              <span className="mx-2 text-gray-400">/</span>
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center rounded-md text-sm font-medium text-[#159b8d]"
              >
                Quickstart
              </Link>
            </div>

            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Quickstart</h1>
              <p className="text-xl text-gray-600">Get started with Uganda AI Studio in minutes</p>
            </div>

            <div className="mt-12 space-y-8">
              <p className="leading-7">
                This guide will help you get started with Uganda AI Studio. You'll learn how to set up your account,
                create an API key, and make your first API call to one of our AI models.
              </p>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="prerequisites">
                Prerequisites
              </h2>

              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>An Uganda AI Studio account</li>
                <li>An API key (you'll create one in this guide)</li>
                <li>Basic knowledge of Python or JavaScript</li>
              </ul>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="create-account">
                Step 1: Create an account
              </h2>

              <p className="leading-7">
                If you don't already have an account, you can create one at{" "}
                <a href="https://ugandaai.studio/signup" className="text-[#159b8d] hover:underline">
                  https://ugandaai.studio/signup
                </a>
                . Once you've created your account, you'll be able to access the dashboard.
              </p>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="create-api-key">
                Step 2: Create an API key
              </h2>

              <p className="leading-7">To interact with our API, you'll need an API key. Here's how to create one:</p>

              <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                <li>Log in to your Uganda AI Studio account</li>
                <li>Navigate to the API Keys section in your dashboard</li>
                <li>Click "Create New API Key"</li>
                <li>Give your key a name (e.g., "Quickstart")</li>
                <li>Copy your API key and store it securely</li>
              </ol>

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

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="make-api-call">
                Step 3: Make your first API call
              </h2>

              <p className="leading-7 mb-6">
                Now that you have an API key, you can make your first API call. Choose your preferred language below:
              </p>

              <Tabs defaultValue="python" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                <TabsContent value="python" className="mt-4">
                  <div className="relative">
                    <pre className="rounded-lg bg-gray-900 p-4 overflow-x-auto text-white text-sm">
                      <code>{`import requests

API_KEY = "your_api_key_here"
API_URL = "https://api.ugandaai.studio/v1/completions"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

data = {
    "model": "deepseek-v3",
    "prompt": "Write a short poem about Uganda:",
    "max_tokens": 100,
    "temperature": 0.7
}

response = requests.post(API_URL, headers=headers, json=data)
print(response.json())`}</code>
                    </pre>
                    <button
                      className="absolute top-3 right-3 p-2 bg-gray-800 rounded-md text-gray-300 hover:bg-gray-700"
                      onClick={() =>
                        copyToClipboard(`import requests

API_KEY = "your_api_key_here"
API_URL = "https://api.ugandaai.studio/v1/completions"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

data = {
    "model": "deepseek-v3",
    "prompt": "Write a short poem about Uganda:",
    "max_tokens": 100,
    "temperature": 0.7
}

response = requests.post(API_URL, headers=headers, json=data)
print(response.json())`)
                      }
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </TabsContent>
                <TabsContent value="javascript" className="mt-4">
                  <div className="relative">
                    <pre className="rounded-lg bg-gray-900 p-4 overflow-x-auto text-white text-sm">
                      <code>{`const fetch = require('node-fetch');

const API_KEY = 'your_api_key_here';
const API_URL = 'https://api.ugandaai.studio/v1/completions';

const headers = {
  'Authorization': \`Bearer \${API_KEY}\`,
  'Content-Type': 'application/json'
};

const data = {
  model: 'deepseek-v3',
  prompt: 'Write a short poem about Uganda:',
  max_tokens: 100,
  temperature: 0.7
};

fetch(API_URL, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}</code>
                    </pre>
                    <button
                      className="absolute top-3 right-3 p-2 bg-gray-800 rounded-md text-gray-300 hover:bg-gray-700"
                      onClick={() =>
                        copyToClipboard(`const fetch = require('node-fetch');

const API_KEY = 'your_api_key_here';
const API_URL = 'https://api.ugandaai.studio/v1/completions';

const headers = {
  'Authorization': \`Bearer \${API_KEY}\`,
  'Content-Type': 'application/json'
};

const data = {
  model: 'deepseek-v3',
  prompt: 'Write a short poem about Uganda:',
  max_tokens: 100,
  temperature: 0.7
};

fetch(API_URL, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`)
                      }
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </TabsContent>
                <TabsContent value="curl" className="mt-4">
                  <div className="relative">
                    <pre className="rounded-lg bg-gray-900 p-4 overflow-x-auto text-white text-sm">
                      <code>{`curl -X POST \\
  https://api.ugandaai.studio/v1/completions \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-v3",
    "prompt": "Write a short poem about Uganda:",
    "max_tokens": 100,
    "temperature": 0.7
  }'`}</code>
                    </pre>
                    <button
                      className="absolute top-3 right-3 p-2 bg-gray-800 rounded-md text-gray-300 hover:bg-gray-700"
                      onClick={() =>
                        copyToClipboard(`curl -X POST \\
  https://api.ugandaai.studio/v1/completions \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-v3",
    "prompt": "Write a short poem about Uganda:",
    "max_tokens": 100,
    "temperature": 0.7
  }'`)
                      }
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </TabsContent>
              </Tabs>

              <h2
                className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
                id="understanding-response"
              >
                Step 4: Understanding the response
              </h2>

              <p className="leading-7 mb-6">
                When you make an API call, you'll receive a JSON response that looks something like this:
              </p>

              <div className="relative">
                <pre className="rounded-lg bg-gray-900 p-4 overflow-x-auto text-white text-sm">
                  <code>{`{
  "id": "cmpl-123abc456def",
  "object": "text_completion",
  "created": 1677858242,
  "model": "deepseek-v3",
  "choices": [
    {
      "text": "Pearl of Africa, land so green,\\nWhere the Nile begins its journey, serene.\\nRolling hills and mountains high,\\nBeneath the equatorial sky.\\n\\nUganda, home of warmth and grace,\\nDiverse cultures in one embrace.\\nYour beauty shines like morning dew,\\nA nation strong, forever true.",
      "index": 0,
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 6,
    "completion_tokens": 64,
    "total_tokens": 70
  }
}`}</code>
                </pre>
              </div>

              <p className="leading-7 mt-6">The response contains:</p>

              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  <strong>id</strong>: A unique identifier for the completion
                </li>
                <li>
                  <strong>object</strong>: The type of object returned
                </li>
                <li>
                  <strong>created</strong>: The Unix timestamp when the completion was created
                </li>
                <li>
                  <strong>model</strong>: The model used for the completion
                </li>
                <li>
                  <strong>choices</strong>: An array of completion choices (usually just one)
                </li>
                <li>
                  <strong>usage</strong>: Token usage information for billing purposes
                </li>
              </ul>

              <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="next-steps">
                Next steps
              </h2>

              <p className="leading-7">
                Now that you've made your first API call, you can explore more advanced features:
              </p>

              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>
                  Try different models from our{" "}
                  <Link href="/model-library" className="text-[#159b8d] hover:underline">
                    Model Library
                  </Link>
                </li>
                <li>
                  Explore{" "}
                  <Link href="/docs/inference/text-models" className="text-[#159b8d] hover:underline">
                    text generation
                  </Link>{" "}
                  with different parameters
                </li>
                <li>
                  Learn about{" "}
                  <Link href="/docs/inference/vision-models" className="text-[#159b8d] hover:underline">
                    vision-language models
                  </Link>{" "}
                  for image understanding
                </li>
                <li>
                  Try{" "}
                  <Link href="/docs/inference/function-calling" className="text-[#159b8d] hover:underline">
                    function calling
                  </Link>{" "}
                  for structured outputs
                </li>
              </ul>

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
                <Link href="/docs" className="flex items-center gap-1 text-[#159b8d] hover:underline">
                  <ChevronRight className="h-4 w-4 rotate-180" /> Introduction
                </Link>
                <Link href="/docs/concepts" className="flex items-center gap-1 text-[#159b8d] hover:underline">
                  Concepts <ChevronRight className="h-4 w-4" />
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
                        <a href="#prerequisites" className="inline-block text-gray-600 hover:text-gray-900">
                          Prerequisites
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#create-account" className="inline-block text-gray-600 hover:text-gray-900">
                          Step 1: Create an account
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#create-api-key" className="inline-block text-gray-600 hover:text-gray-900">
                          Step 2: Create an API key
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#make-api-call" className="inline-block text-gray-600 hover:text-gray-900">
                          Step 3: Make your first API call
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#understanding-response" className="inline-block text-gray-600 hover:text-gray-900">
                          Step 4: Understanding the response
                        </a>
                      </li>
                      <li className="pl-4">
                        <a href="#next-steps" className="inline-block text-gray-600 hover:text-gray-900">
                          Next steps
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

