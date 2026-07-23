// app/privacy-policy/page.tsx

export const metadata = {
    title: "Privacy Policy | Hunt Kashmir 365",
    description: "Privacy Policy for Hunt Kashmir 365 - Your trusted Kashmir travel partner.",
  };
  
  export default function PrivacyPolicy() {
    return (
      <main className="min-h-screen bg-white">
        {/* Header Banner */}
        <div className="bg-[#1B4332] py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Privacy Policy
            </h1>
            <p className="text-white/70 text-sm sm:text-base">
              Last updated: July 23, 2026
            </p>
          </div>
        </div>
  
        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          
          {/* Introduction */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Hunt Kashmir 365 (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, store, and safeguard your personal information 
              when you use our website, submit our lead forms, or contact us for Kashmir travel services.
            </p>
          </section>
  
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
              1. Information We Collect
            </h2>
            <div className="bg-gray-50 rounded-xl p-5 sm:p-6">
              <p className="text-gray-700 mb-4">
                We collect the following personal information when you interact with us:
              </p>
              <ul className="space-y-3">
                {[
                  "Name (to personalize our communication)",
                  "Phone number (to contact you via call or WhatsApp)",
                  "Email address (if provided, for sending itineraries)",
                  "Travel preferences (destination, dates, number of travelers)",
                  "IP address and browser information (for website analytics)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
  
          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We use your personal information solely for the following purposes:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "📞", title: "Contact You", desc: "To respond to your trip inquiries and provide quotes" },
                { icon: "📋", title: "Plan Itineraries", desc: "To create customized Kashmir travel plans" },
                { icon: "💬", title: "Follow Up", desc: "To update you on booking status and travel details" },
                { icon: "📊", title: "Improve Service", desc: "To analyze and enhance our website experience" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 sm:p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-[#1B4332] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
              3. Data Sharing & Third Parties
            </h2>
            <div className="bg-[#1B4332]/5 border-l-4 border-[#1B4332] rounded-r-xl p-5 sm:p-6">
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your data is only shared with:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Our internal travel consultants who handle your booking",
                  "Google Ads (for lead form processing and campaign optimization)",
                  "WhatsApp Business (for communication, if you contact us there)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
  
          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data 
              against unauthorized access, alteration, disclosure, or destruction. This includes secure 
              storage, encrypted communications, and limited access to our team members.
            </p>
          </section>
  
          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You have the right to:
            </p>
            <div className="space-y-3">
              {[
                "Access the personal data we hold about you",
                "Request correction of inaccurate information",
                "Request deletion of your data (right to be forgotten)",
                "Opt out of marketing communications at any time",
                "Withdraw consent for data processing",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                  <CheckIcon />
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </section>
  
          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
              6. Cookies & Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to improve your browsing experience, 
              analyze website traffic, and understand user behavior. You can control cookie preferences 
              through your browser settings. We use Google Analytics and Google Ads conversion tracking 
              to measure advertising effectiveness.
            </p>
          </section>
  
          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes 
              outlined in this policy, or as required by law. Typically, we keep lead data for 
              <strong> 2 years</strong> from your last interaction with us, after which it is securely deleted.
            </p>
          </section>
  
          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>
  
          {/* Contact Section */}
          <section className="bg-[#1B4332] rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Contact Us
            </h2>
            <p className="text-white/80 mb-6 text-sm sm:text-base">
              If you have any questions about this Privacy Policy or want to exercise your data rights, 
              please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:wajidkashoo14@gmail.com"
                className="bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-full transition-colors text-sm font-medium"
              >
                📧 huntkashmir365@gmail.com
              </a>
              <a 
                href="https://wa.me/919596041460"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C9A84C] hover:bg-[#d4b55a] text-[#1B4332] px-6 py-3 rounded-full transition-colors text-sm font-bold"
              >
                📱 +91 95960 41460
              </a>
            </div>
          </section>
        </div>
      </main>
    );
  }
  
  function CheckIcon() {
    return (
      <svg className="w-5 h-5 text-[#C9A84C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    );
  }