"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                This Privacy Policy explains how Uganda AI Studio ("we," "us," or "our") collects, uses, stores, and protects your personal data in compliance with Uganda's <strong>Data Protection and Privacy Act, 2019</strong> (the "Act"). We are dedicated to safeguarding your privacy and ensuring our AI/ML platform adheres to Ugandan laws and international best practices, serving both local and international users.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Data Protection Laws in Uganda</h2>
              <p>
                The <strong>Data Protection and Privacy Act, 2019</strong>, governs the protection of personal data in Uganda. Enacted to safeguard individual privacy, it regulates how entities, including AI/ML platforms, collect, process, store, and disclose personal data. The Act is enforced by the <strong>National Information Technology Authority - Uganda (NITA-U)</strong> through the Personal Data Protection Office, ensuring accountability and transparency in data handling.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Data Collection, Storage, and Processing</h2>
              <p>We collect personal data to deliver and improve our AI/ML services. The data we collect includes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Contact Information</strong>: Name, email address, phone number.</li>
                <li><strong>Demographic Information</strong>: Location (e.g., Kampala, Gulu).</li>
                <li><strong>Transaction Data</strong>: Details of service usage (e.g., queries processed).</li>
                <li><strong>AI/ML-Specific Data</strong>: Inputs for model training (e.g., text or image data).</li>
              </ul>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Collection</h3>
                  <p>Data is collected with your explicit consent, as required by Section 8 of the Act, unless permitted otherwise by law (e.g., legal obligations).</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Storage</h3>
                  <p>Your data is securely stored at the Government National Data Center, managed by NITA-U, ensuring compliance with local hosting requirements.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Processing</h3>
                  <p>We process data in accordance with the Act's principles (Section 3), ensuring it is:</p>
                  <ul className="list-disc pl-6">
                    <li>Processed lawfully, fairly, and transparently.</li>
                    <li>Collected for specific, legitimate purposes (e.g., enhancing AI model performance).</li>
                    <li>Limited to what is necessary.</li>
                    <li>Kept accurate and up to date.</li>
                    <li>Retained only as long as needed (e.g., model training duration).</li>
                    <li>Protected against unauthorized access or loss using encryption and access controls.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. User Rights Under Ugandan Privacy Laws</h2>
              <p>Under the <strong>Data Protection and Privacy Act, 2019</strong> (Sections 21-27), you have the following rights:</p>
              <ul className="list-disc pl-6">
                <li><strong>Right to Access</strong>: Confirm if we hold your data and request a copy.</li>
                <li><strong>Right to Rectification</strong>: Correct inaccurate data (e.g., an outdated email).</li>
                <li><strong>Right to Erasure</strong>: Request deletion of your data when no longer needed.</li>
                <li><strong>Right to Object</strong>: Oppose processing for specific purposes (e.g., marketing).</li>
                <li><strong>Right to Data Portability</strong>: Transfer your data to another provider.</li>
                <li><strong>Right to Withdraw Consent</strong>: Stop data processing at any time.</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact our Data Protection Officer (details below). We respond within 30 days, as mandated by the Act.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. Cross-Border Data Transfer Regulations</h2>
              <p>
                Per Section 19 of the Act, personal data may only be transferred outside Uganda if the recipient country offers equivalent protection or with your explicit consent. For international users, we ensure compliance by:
              </p>
              <ul className="list-disc pl-6">
                <li>Using contracts with data protection clauses.</li>
                <li>Obtaining your consent for transfers (e.g., to a cloud provider in the EU).</li>
                <li>Avoiding transfers to jurisdictions without adequate safeguards unless authorized by NITA-U.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">6. Specific Requirements for AI/ML Data Handling</h2>
              <p>As an AI/ML platform, we implement additional safeguards:</p>
              <ul className="list-disc pl-6">
                <li><strong>Anonymization</strong>: Data is anonymized or pseudonymized where feasible.</li>
                <li><strong>Retention</strong>: AI/ML training data is retained only as long as necessary.</li>
                <li><strong>Transparency</strong>: We inform you how your data improves our models.</li>
                <li><strong>Ethics</strong>: We follow ethical AI guidelines to prevent bias.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information for Privacy Concerns</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Data Protection Officer</h3>
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