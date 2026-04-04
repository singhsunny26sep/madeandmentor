import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <Layout activePage="Privacy Policy">
      <div className="min-h-screen bg-purple-200 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-700 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Your privacy matters to us.</p>
          <p className="text-gray-600">This Privacy Policy explains how Mate & Mentors collects, uses, protects, and shares your information.</p>
          <p className="text-gray-600">Last updated: December 16, 2025</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            
            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">1.1 Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Payment details (processed securely via third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">1.2 Session-Related Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Session type (Mate / Mentor / Therapist)</li>
                <li>Session duration</li>
                <li>Basic session notes (if applicable)</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do NOT record calls unless explicitly stated and consented to.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Match you with the right Mate or Mentor</li>
                <li>Facilitate bookings and sessions</li>
                <li>Process payments</li>
                <li>Improve platform experience</li>
                <li>Communicate important updates</li>
                <li>Ensure safety and quality standards</li>
              </ul>
            </section>

            {/* Confidentiality & Conversations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Confidentiality & Conversations</h2>
              <p className="text-gray-600 mb-4">
                Conversations with Mates and Mentors are treated as confidential
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>We do not sell or share personal conversation details</li>
                <li>Providers are trained to maintain privacy and ethical boundaries</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Exceptions:</h3>
              <p className="text-gray-600 mb-3">Confidentiality may be broken if:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>There is risk of harm to you or others</li>
                <li>Required by law</li>
                <li>Emergency escalation is necessary</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Data Sharing</h2>
              <p className="text-gray-600 mb-3">We may share limited information with:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Service providers (payment processors, scheduling tools)</li>
                <li>Providers you book sessions with</li>
                <li>Legal authorities if required by law</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We never sell your personal data.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-3">We take reasonable steps to protect your data using:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Secure servers</li>
                <li>Encryption where applicable</li>
                <li>Restricted access protocols</li>
              </ul>
              <p className="text-gray-600 mt-4">
                No system is 100% secure, but we work continuously to safeguard your information.
              </p>
            </section>

            {/* Cookies & Tracking */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Cookies & Tracking</h2>
              <p className="text-gray-600 mb-3">We may use cookies to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Improve website functionality</li>
                <li>Understand usage patterns</li>
                <li>Enhance user experience</li>
              </ul>
              <p className="text-gray-600 mt-4">
                You may disable cookies through your browser settings.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent</li>
                <li>Request information on data usage</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, contact us at: <a href="mailto:mateandmentors@gmail.com" className="text-purple-600 hover:text-purple-600">mateandmentors@gmail.com</a>
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Data Retention</h2>
              <p className="text-gray-600 mb-3">We retain personal data only as long as necessary to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide services</li>
                <li>Meet legal obligations</li>
                <li>Resolve disputes</li>
              </ul>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">9. Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party sites.
                We are not responsible for their privacy practices.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy periodically.
                Updates will be reflected on this page with the revised date.
              </p>
            </section>

            {/* Privacy - Sensitive Information Notice */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">11. Privacy - Sensitive Information Notice</h2>
              <p className="text-gray-600 mb-4">
                Mate & Mentors may involve discussions of personal or emotional experiences.
              </p>
              <p className="text-gray-600 mb-4">
                We do not collect, store, or process sensitive health data for advertising purposes.
              </p>
              <p className="text-gray-600">
                Any information shared during sessions is used only to facilitate user experience and is not used for profiling or targeted advertising.
              </p>
            </section>

            {/* What We Do Not Provide */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">12. What We Do Not Provide</h2>
              <p className="text-gray-600 mb-3">Our platform does NOT provide:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Medical or clinical diagnosis</li>
                <li>Medical treatment or healthcare services</li>
              </ul>
              <p className="text-gray-600 mt-4">
                The Mates and Mentors on our platform are not licensed medical professionals.
                If you have medical concerns, please consult a qualified healthcare provider.
              </p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}