import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <Layout activePage="Terms & Conditions">
      <div className="min-h-screen bg-gradient-to-br from-[#C8BFE7] via-[#D1C4E9] to-[#E1D5F0] py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-700 mb-4">Terms & Conditions</h1>
          <p className="text-gray-600">Last updated: December 16, 2025</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Mate & Mentors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using our website, platform, or services, you agree to the following Terms & Conditions. Please read them carefully.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            {/* About Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. About Mate & Mentors</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mate & Mentors is a platform that connects users with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong className="text-gray-700">Mates</strong> – trained listeners who provide emotional ventilation and support through listening</li>
                <li><strong className="text-gray-700">Mentors</strong> – experienced individuals who provide practical guidance and perspective</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We offer booked call-based sessions, matched quickly based on user needs.
              </p>
            </section>

            {/* Nature of Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Nature of Services</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 What We Provide</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li>Emotional listening and support (Mate)</li>
                <li>Practical guidance and clarity (Mentor)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 What We Do NOT Provide</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li>Medical advice</li>
                <li>Psychiatric diagnosis</li>
                <li>Emergency or crisis intervention</li>
                <li>Legal or financial advice</li>
                <li>Guarantees of outcomes</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-700">
                  <strong>Mate & Mentors is not a replacement for emergency services.</strong>
                </p>
                <p className="text-red-700 mt-2">
                  If you are in immediate danger or experiencing suicidal thoughts, please contact local emergency services or a crisis helpline immediately.
                </p>
              </div>
            </section>

            {/* User Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Eligibility</h2>
              <p className="text-gray-700 mb-3">You must:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Be 18 years or older</li>
                <li>Provide accurate and truthful information</li>
                <li>Use the platform responsibly and respectfully</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We reserve the right to deny access to anyone who violates these terms.
              </p>
            </section>

            {/* Booking & Sessions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Booking & Sessions</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Session Booking</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li>Sessions are booked through the platform</li>
                <li>Matching typically happens in under 10 minutes but is not guaranteed</li>
                <li>Session duration and pricing are displayed at booking</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Session Conduct</h3>
              <p className="text-gray-700 mb-3">Users must:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li>Communicate respectfully</li>
                <li>Avoid abusive, threatening, or inappropriate behavior</li>
                <li>Not seek prohibited services (medical, illegal, or harmful advice)</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to terminate a session without refund if conduct guidelines are violated.
              </p>
            </section>

            {/* Payments & Refunds */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Payments & Refunds</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Payments</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li>Payments are processed securely</li>
                <li>Charges are based on session type and duration</li>
                <li>Prices are displayed clearly before booking</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Refund Policy</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Sessions once started are non-refundable</li>
                <li>Missed sessions or no-shows may not be refunded</li>
                <li>Refunds (if any) are at the platform's discretion</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cancellation & Rescheduling</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Users may cancel or reschedule within the permitted time window shown at booking</li>
                <li>Late cancellations may be charged</li>
                <li>Providers may reschedule due to unforeseen circumstances</li>
              </ul>
            </section>

            {/* Responsibilities & Limitations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Responsibilities & Limitations</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 User Responsibility</h3>
              <p className="text-gray-700 mb-3">You acknowledge that:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li>Outcomes depend on personal participation</li>
                <li>Guidance provided is perspective-based, not guaranteed solutions</li>
                <li>You remain responsible for your own decisions and actions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Platform Limitation</h3>
              <p className="text-gray-700 mb-3">Mate & Mentors is not liable for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Decisions made based on sessions</li>
                <li>Emotional or financial outcomes</li>
                <li>Technical interruptions or delays</li>
              </ul>
            </section>

            {/* Safety & Escalation */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Safety & Escalation</h2>
              <p className="text-gray-700 mb-3">If a Mate or Mentor believes:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>You may need deeper emotional support</li>
                <li>Your concern is beyond the scope of the session</li>
              </ul>
              <p className="text-gray-700 mb-3">They may:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Recommend a Therapist</li>
                <li>End the session for safety reasons</li>
                <li>Share emergency resources where appropriate</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, branding, text, logos, and platform materials belong to Mate & Mentors.
                You may not copy, reproduce, or distribute any content without permission.
              </p>
            </section>

            {/* Termination of Access */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Termination of Access</h2>
              <p className="text-gray-700 mb-3">We reserve the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Suspend or terminate access</li>
                <li>Block users who violate terms</li>
                <li>Take necessary action to maintain platform safety</li>
              </ul>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms & Conditions from time to time.
                Continued use of the platform implies acceptance of updated terms.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
              <p className="text-gray-700">
                For questions or concerns, contact: <a href="mailto:mateandmentors@gmail.com" className="text-purple-600 hover:text-purple-800">mateandmentors@gmail.com</a>
              </p>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}