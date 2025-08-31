export const metadata = {
  title: "Terms & Conditions - Pose-IQ",
  description: "Terms and conditions for using Pose-IQ's AI pose analysis platform",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                These Terms and Conditions ("Terms") govern your use of Pose-IQ's services, 
                including our website, mobile applications, and AI pose analysis platform.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing or using Pose-IQ's services, you agree to be bound by these Terms. 
              If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-6">
              Pose-IQ provides AI-powered pose analysis technology that helps users analyze 
              human movement patterns, track performance metrics, and optimize athletic performance. 
              Our services include web and mobile applications, API access, and related support services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-700 mb-3">
                To access certain features of our service, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-3">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
            <div className="mb-6">
              <p className="text-gray-700 mb-3">You agree not to use our services to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-3">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Our collection and use of personal information 
              is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Our Rights</h3>
              <p className="text-gray-700 mb-3">
                Pose-IQ and its licensors own all rights, title, and interest in and to the 
                services, including all intellectual property rights. Our services are protected 
                by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Your Content</h3>
              <p className="text-gray-700 mb-3">
                You retain ownership of any content you upload or create using our services. 
                By using our services, you grant us a limited license to use, store, and process 
                your content solely for the purpose of providing our services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
            <div className="mb-6">
              <p className="text-gray-700 mb-3">
                Some features of our service may require payment. By subscribing to a paid plan, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-3">
                <li>Pay all fees in advance</li>
                <li>Provide accurate billing information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Accept that fees are non-refundable except as required by law</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
            <p className="text-gray-700 mb-6">
              We strive to provide reliable service but cannot guarantee uninterrupted availability. 
              We may temporarily suspend services for maintenance, updates, or other operational reasons.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, Pose-IQ shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to 
              loss of profits, data, or use, arising out of or relating to your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers</h2>
            <p className="text-gray-700 mb-6">
              Our services are provided "as is" and "as available" without warranties of any kind. 
              We disclaim all warranties, express or implied, including but not limited to warranties 
              of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <div className="mb-6">
              <p className="text-gray-700 mb-3">
                Either party may terminate these Terms at any time:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-3">
                <li>You may cancel your account at any time through your account settings</li>
                <li>We may terminate or suspend your access for violation of these Terms</li>
                <li>Upon termination, your right to use our services will cease immediately</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of California, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms at any time. We will notify users of 
              any material changes by posting the new Terms on our website and updating the 
              "Last updated" date above.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@pose-iq.com<br />
                <strong>Address:</strong> 1234 Innovation Drive, Palo Alto, CA 94301<br />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                By using Pose-IQ's services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 