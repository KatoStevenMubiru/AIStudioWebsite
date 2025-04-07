"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function LicensesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">Licenses</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Software Licenses</h2>
              <p>
                Our platform software is licensed under the following terms:
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Proprietary License</strong>: Core platform software and AI models</li>
                <li><strong>MIT License</strong>: Open-source components and libraries</li>
                <li><strong>Apache 2.0 License</strong>: Machine learning frameworks and tools</li>
              </ul>
              <p className="mt-4">
                All licenses are subject to compliance with Ugandan intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. AI Model Licenses</h2>
              <p>Our AI models are available under different license tiers:</p>
              <ul className="list-disc pl-6">
                <li><strong>Research License</strong>: For academic and research purposes</li>
                <li><strong>Commercial License</strong>: For business and commercial use</li>
                <li><strong>Enterprise License</strong>: For large-scale deployments</li>
              </ul>
              <p className="mt-4">
                Each license type has specific terms regarding usage, redistribution, and attribution.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Data Usage Licenses</h2>
              <p>Data usage is governed by:</p>
              <ul className="list-disc pl-6">
                <li><strong>Data Protection and Privacy Act, 2019</strong></li>
                <li><strong>Data Processing Agreements</strong></li>
                <li><strong>User Consent Terms</strong></li>
              </ul>
              <p className="mt-4">
                Users retain ownership of their data while granting us necessary usage rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Licenses</h2>
              <p>
                Our platform incorporates various third-party components:
              </p>
              <ul className="list-disc pl-6">
                <li>Open-source libraries and frameworks</li>
                <li>Third-party AI models and datasets</li>
                <li>Cloud infrastructure and services</li>
              </ul>
              <p className="mt-4">
                All third-party components are properly licensed and attributed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. License Compliance</h2>
              <p>
                Users must comply with:
              </p>
              <ul className="list-disc pl-6">
                <li>License terms and conditions</li>
                <li>Attribution requirements</li>
                <li>Usage restrictions and limitations</li>
                <li>Reporting and audit requirements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">6. License Violations</h2>
              <p>
                Violations may result in:
              </p>
              <ul className="list-disc pl-6">
                <li>License termination</li>
                <li>Legal action under Ugandan law</li>
                <li>Remediation requirements</li>
                <li>Financial penalties</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact Information for License Inquiries</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">License Department</h3>
                <p className="italic text-gray-600">Contact information will be shared soon</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
} 