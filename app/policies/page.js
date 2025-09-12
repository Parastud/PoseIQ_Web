export const metadata = {
  title: "Privacy Policy - PoseIQ",
  description: "Privacy Policy for PoseIQ - Your privacy is very important to us",
};

export default function Policies() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We built this app to help you find and capture great poses easily. Your privacy is very important to us.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Last updated:</strong> 01-09-2025
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              We built this app to help you find and capture great poses easily. Your privacy is very important to us. 
              This page explains what information we collect, how we use it, and how we keep it safe.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Information We Collect</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Camera & Photos/Videos</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>The app uses your camera or gallery only when you choose to take or upload a photo/video.</li>
              <li>Your photos and videos stay on your device unless you choose to save or share them.</li>
              <li>We do not secretly record or upload any media.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pose & Gesture Data</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>The app analyzes your body position (pose/gesture) to help you match poses.</li>
              <li>This data is processed in real-time and is not stored permanently on our servers.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Location Type (Optional)</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>If you choose, you can select or upload your scene/location type (e.g., beach, café, park) to get better pose suggestions.</li>
              <li>We do not track your real GPS location unless you specifically allow it.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">User-Generated Content</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>You may save or share poses, or upload poses for the community.</li>
              <li>If shared, they may be visible to other users.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Basic App Analytics</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>We may collect anonymous data (like how often the app is used, crash reports) to improve performance.</li>
              <li>This does not include your photos, videos, or personal identity.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>To suggest and recommend poses.</li>
              <li>To analyze your posture in real-time and capture your perfect shot.</li>
              <li>To improve app features and user experience.</li>
              <li>To keep the app secure and reliable.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What We Do Not Do</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 dark:border-red-500 p-4 mb-6">
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li>❌ We do not sell your data.</li>
                <li>❌ We do not store your personal photos or videos without your choice.</li>
                <li>❌ We do not secretly track your location.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Choices</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
              <li>You can deny camera or gallery access (but some features won&apos;t work).</li>
              <li>You can delete poses or photos anytime from your device.</li>
              <li>If you shared content, you can request us to remove it by contacting support.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Security</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We use reasonable measures to protect your data. However, no system is 100% secure. 
              We encourage you to only share what you are comfortable with.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Children&apos;s Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              This app is not meant for children under 13. If you are under 13, please do not use the app without a parent or guardian.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions (FAQ)</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">1. What does this app do?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  This app suggests poses based on different things like time of day, clothes, scene type, gender, or number of people. 
                  It can also check your pose in real-time and click the photo when your posture matches perfectly.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">2. Do I need to allow camera access?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, if you want to capture photos or videos directly inside the app. If you don&apos;t allow camera, you can still upload from your gallery and get pose suggestions.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">3. Are my photos and videos stored on your servers?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  No. Your photos and videos stay on your device. We do not upload or store them unless you choose to share poses with the community.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">4. Does the app track my location?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  No. The app only uses location type (like beach, park, café) to suggest poses. It does not track your real GPS location unless you give explicit permission.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">5. What is &quot;pose detection&quot; and is my body data saved?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Pose detection means the app uses your camera to check your body outline and posture to guide you into the right pose. This is processed in real-time and not stored or shared anywhere.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">6. Can I create and save my own poses?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! You can create poses, save them for yourself, or even share them with others if you like.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">7. Will my shared poses be visible to everyone?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  If you choose to share poses publicly, they may be visible to other users. If you keep them private, only you can see them.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">8. What if my posture isn&apos;t perfect?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The app will guide you to adjust. It only clicks the photo when your pose matches the target pose, so you get the best results.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">9. Do you sell my data to anyone?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  No. We do not sell or trade your personal data, photos, or videos.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">10. What age group can use this app?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  This app is designed for users above 13 years old. If you are younger, please use it with a parent or guardian.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">11. How can I contact support if I have issues?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  You can reach us anytime at: 📧 admin@poseiq.app
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                📧 Email: admin@poseiq.app<br />
                🌐 Website: https://poseiq.app
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 