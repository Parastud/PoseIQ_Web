export const metadata = {
  title: "Policies - Pose-IQ",
  description: "Privacy Policy, Cookie Policy, and other important policies for Pose-IQ",
};

export default function Policies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Policies</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Understanding how we protect your privacy and ensure data security
          </p>
        </div>
      </section>

      {/* Policy Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#privacy" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#cookies" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              Cookie Policy
            </a>
            <a href="#data" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              Data Protection
            </a>
            <a href="#security" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              Security Policy
            </a>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h3>
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h4>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name, email address, and contact information</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences and settings</li>
              </ul>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Usage Data</h4>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Service usage patterns and analytics</li>
                <li>Device information and browser data</li>
                <li>Performance metrics and error logs</li>
                <li>Feature preferences and customization</li>
              </ul>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Content Data</h4>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Uploaded videos and images for pose analysis</li>
                <li>Analysis results and performance data</li>
                <li>User-generated content and annotations</li>
                <li>Training data for AI model improvement</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h3>
            <div className="mb-8">
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and maintain our AI pose analysis services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Improve our algorithms and user experience</li>
                <li>Send important service updates and notifications</li>
                <li>Provide customer support and technical assistance</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h3>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in our operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section id="cookies" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h3>
            <p className="text-gray-700 mb-6">
              Cookies are small text files stored on your device when you visit our website. 
              They help us provide a better user experience and analyze how our services are used.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h3>
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h4>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly. They enable 
                basic functions like page navigation, secure areas access, and form submissions.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Performance Cookies</h4>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how visitors interact with our website by 
                collecting and reporting information anonymously.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Functional Cookies</h4>
              <p className="text-gray-700 mb-4">
                These cookies enable enhanced functionality and personalization, such as 
                remembering your preferences and settings.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h4>
              <p className="text-gray-700 mb-4">
                These cookies help us analyze website traffic and understand how our users 
                navigate and use our services.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h3>
            <p className="text-gray-700 mb-6">
              You can control and manage cookies through your browser settings. However, 
              disabling certain cookies may affect the functionality of our services.
            </p>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section id="data" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Protection & Security</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Security Measures</h3>
            <div className="mb-8">
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Employee training on data protection best practices</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h3>
            <p className="text-gray-700 mb-6">
              We retain your personal information only for as long as necessary to provide 
              our services and comply with legal obligations. You can request deletion of 
              your data at any time through your account settings.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h3>
            <div className="mb-8">
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Restrict processing of your data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h3>
            <p className="text-gray-700 mb-6">
              Your data may be processed in countries other than your own. We ensure that 
              all international data transfers comply with applicable data protection laws 
              and implement appropriate safeguards.
            </p>
          </div>
        </div>
      </section>

      {/* Security Policy */}
      <section id="security" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Security Policy</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Security</h3>
            <div className="mb-8">
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Cloud infrastructure with enterprise-grade security</li>
                <li>Regular penetration testing and security assessments</li>
                <li>Intrusion detection and prevention systems</li>
                <li>24/7 security monitoring and incident response</li>
                <li>Regular security updates and patch management</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Security</h3>
            <div className="mb-8">
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Secure coding practices and code reviews</li>
                <li>Regular security testing and vulnerability scanning</li>
                <li>Input validation and output encoding</li>
                <li>Session management and authentication controls</li>
                <li>API security and rate limiting</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h3>
            <p className="text-gray-700 mb-6">
              We have established procedures for detecting, responding to, and recovering from 
              security incidents. In the event of a data breach, we will notify affected users 
              and relevant authorities as required by law.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h3>
            <p className="text-gray-700 mb-6">
              We comply with relevant data protection regulations including GDPR, CCPA, and 
              other applicable laws. Our security practices are regularly audited and updated 
              to maintain compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Our Policies?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're here to help clarify any questions you may have about our policies, 
            data practices, or security measures.
          </p>
          <div className="bg-white p-6 rounded-lg inline-block">
            <p className="text-gray-700">
              <strong>Email:</strong> privacy@pose-iq.com<br />
              <strong>Data Protection Officer:</strong> dpo@pose-iq.com<br />
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 