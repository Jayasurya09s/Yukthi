import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-zinc-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
            <p>
              At Yukthi (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white">Personal Information:</h3>
                <p>We may collect personal information such as your name, email address, and company details when you voluntarily provide it through our contact forms or services.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Audit Data:</h3>
                <p>When you use our AI spend audit service, we collect information about your AI tools, team size, and usage patterns to provide optimization recommendations.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Technical Data:</h3>
                <p>We automatically collect technical information including IP address, browser type, pages visited, and time spent on pages.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
            <ul className="list-inside space-y-2 text-zinc-300">
              <li>• To provide and improve our audit services</li>
              <li>• To analyze AI infrastructure spending patterns</li>
              <li>• To generate optimization recommendations</li>
              <li>• To communicate with you about our services</li>
              <li>• To comply with legal obligations</li>
              <li>• To protect against fraudulent activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">5. Third-Party Services</h2>
            <p>
              We may use third-party services to support our operations, including cloud hosting and analytics providers. These providers are bound by confidentiality agreements and only use your information as necessary to provide services to us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. To exercise these rights, please contact us using the information provided at the bottom of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">8. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="font-semibold">Email: privacy@yukthi.ai</p>
              <p>Address: Yukthi Headquarters</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
