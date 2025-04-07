"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TrustCenterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">Trust Center</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Security Measures</h2>
              <p>
                We implement comprehensive security measures to protect your data and services:
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Encryption</strong>: Data in transit and at rest using industry-standard protocols</li>
                <li><strong>Access Controls</strong>: Role-based access control and multi-factor authentication</li>
                <li><strong>Network Security</strong>: Firewalls, intrusion detection, and regular security audits</li>
                <li><strong>Physical Security</strong>: Secure data centers with 24/7 monitoring</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Compliance with Ugandan Laws</h2>
              <p>Our operations adhere to:</p>
              <ul className="list-disc pl-6">
                <li><strong>Data Protection and Privacy Act, 2019</strong></li>
                <li><strong>Electronic Transactions Act, 2011</strong></li>
                <li><strong>Computer Misuse Act, 2011</strong></li>
                <li><strong>National Information Technology Authority (NITA) Regulations</strong></li>
              </ul>
              <p className="mt-4">
                We maintain regular compliance audits and updates to ensure adherence to all applicable laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
              <p>We protect your data through:</p>
              <ul className="list-disc pl-6">
                <li><strong>Data Classification</strong>: Proper categorization and handling of sensitive information</li>
                <li><strong>Data Retention</strong>: Clear policies for data storage and deletion</li>
                <li><strong>Cross-border Transfers</strong>: Compliance with international data transfer regulations</li>
                <li><strong>Breach Response</strong>: Comprehensive incident response and notification procedures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Service Reliability</h2>
              <p>We ensure high availability through:</p>
              <ul className="list-disc pl-6">
                <li><strong>Infrastructure Redundancy</strong>: Multiple data centers and backup systems</li>
                <li><strong>Monitoring</strong>: 24/7 system monitoring and alerting</li>
                <li><strong>Disaster Recovery</strong>: Regular backups and recovery procedures</li>
                <li><strong>Performance Optimization</strong>: Regular system updates and maintenance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. Transparency and Reporting</h2>
              <p>We maintain transparency through:</p>
              <ul className="list-disc pl-6">
                <li><strong>Regular Updates</strong>: Monthly security and compliance reports</li>
                <li><strong>Audit Logs</strong>: Comprehensive activity logging and monitoring</li>
                <li><strong>User Notifications</strong>: Timely communication about security incidents</li>
                <li><strong>Third-party Audits</strong>: Regular independent security assessments</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">6. User Rights and Controls</h2>
              <p>Users have the right to:</p>
              <ul className="list-disc pl-6">
                <li>Access their personal data</li>
                <li>Request data correction or deletion</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact Information for Trust and Security Inquiries</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Security Team</h3>
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