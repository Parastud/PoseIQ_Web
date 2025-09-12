export const metadata = {
  title: "Terms & Conditions - PoseIQ",
  description: "Terms and conditions for using PoseIQ app",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Welcome to our app! By using this app, you agree to the following terms and conditions.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> 01-09-2025
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Welcome to our app! By using this app, you agree to the following terms and conditions. Please read them carefully.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Using the App</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>You must be at least 13 years old to use this app.</li>
              <li>If you are under 18, you should use the app with permission from a parent or guardian.</li>
              <li>You agree to use the app only for personal and lawful purposes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Camera, Photos, and Content</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>The app may ask for permission to use your camera and gallery to capture or upload photos/videos.</li>
              <li>Your photos and videos remain on your device unless you choose to share them.</li>
              <li>If you share poses or content, you confirm that the content is yours and does not violate anyone&apos;s rights.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Pose Detection and Suggestions</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>The app analyzes your body posture to help you match poses.</li>
              <li>This is for guidance and fun only. It should not be used for medical, fitness, or safety purposes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. User-Generated Content</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>You may save or share poses within the app.</li>
              <li>If you share publicly, other users may see and use them.</li>
              <li>We may remove content that is inappropriate, offensive, or violates laws.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Please read our <a href="/policies" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">Privacy Policy</a> to understand how we handle your data.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We do not sell your personal data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Limitations and Responsibility</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>We try to keep the app running smoothly, but we cannot guarantee it will always be free from bugs, errors, or interruptions.</li>
              <li>We are not responsible for any loss, injury, or damage caused by using the app (for example, if you try a pose and hurt yourself). Use at your own risk.</li>
              <li>The app is for creative and entertainment purposes only.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Changes to the App and Terms</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>We may update or change features of the app at any time.</li>
              <li>We may also update these Terms, and the updated version will be posted on this page.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Termination</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We may suspend or terminate access to the app if you misuse it, break the rules, or violate laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Governing Law</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              These Terms are governed by the laws of the United States.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                📧 Email: admin@poseiq.app<br />
                🌐 Website: https://poseiq.app
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                By using this app, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 