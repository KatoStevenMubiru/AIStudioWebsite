"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Applicable Ugandan Laws and Regulations</h2>
              <p>
                These Terms of Service ("Terms") are governed by Ugandan laws, including:
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Data Protection and Privacy Act, 2019</strong></li>
                <li><strong>Electronic Transactions Act, 2011</strong></li>
                <li><strong>Computer Misuse Act, 2011</strong></li>
              </ul>
              <p className="mt-4">
                By using our platform, you agree to comply with these laws, whether you are in Uganda or abroad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. User Obligations and Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6">
                <li>Provide accurate information during registration (e.g., valid email).</li>
                <li>Use the platform lawfully, avoiding illegal activities (e.g., hacking per the Computer Misuse Act).</li>
                <li>Secure your account credentials and report breaches immediately.</li>
                <li>Respect intellectual property rights of Uganda AI Studio and others.</li>
              </ul>
              <p className="mt-4">
                <strong>Example</strong>: Misrepresenting your identity violates these Terms and Section 5 of the Electronic Transactions Act.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Platform Usage Terms</h2>
              <p>You may use the platform as per your subscription plan. Prohibited actions include:</p>
              <ul className="list-disc pl-6">
                <li>Violating Ugandan laws (e.g., processing pirated content).</li>
                <li>Reverse-engineering our AI models or software.</li>
                <li>Using the platform to harm others' privacy or rights.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property Rights</h2>
              <p>
                All software, AI models, and documentation are owned by Uganda AI Studio or its licensors. You receive a non-exclusive, non-transferable license to use them under these Terms. Your input data remains yours, but we may use it to enhance our services.
              </p>
              <p className="mt-4">
                <strong>Example</strong>: A model trained on your dataset belongs to us, but you own the dataset itself.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. Service Limitations and Disclaimers</h2>
              <p>
                We aim for reliable service but do not guarantee uninterrupted access or error-free outputs. We disclaim implied warranties (e.g., fitness for a specific purpose) to the extent permitted by Ugandan law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">6. Termination Clauses</h2>
              <p>We may terminate your access if you:</p>
              <ul className="list-disc pl-6">
                <li>Breach these Terms (e.g., unauthorized data use).</li>
                <li>Engage in unlawful acts.</li>
              </ul>
              <p className="mt-4">
                Upon termination, you must stop using the platform and delete our software/models.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution Procedures</h2>
              <p>
                Disputes will be resolved through negotiation. If unresolved, they will be referred to arbitration under the <strong>Arbitration and Conciliation Act, 2000</strong>, in Kampala, Uganda.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact Information for Legal Inquiries</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Legal Department</h3>
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