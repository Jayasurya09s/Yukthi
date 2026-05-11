import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-zinc-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Yukthi website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Yukthi&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-inside space-y-2 mt-4 text-zinc-300">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for any commercial purpose or for any public display</li>
              <li>• Attempt to decompile or reverse engineer any software</li>
              <li>• Remove any copyright or other proprietary notations</li>
              <li>• Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">3. Disclaimer</h2>
            <p>
              The materials on Yukthi&apos;s website are provided on an &apos;as is&apos; basis. Yukthi makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">4. Limitations</h2>
            <p>
              In no event shall Yukthi or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Yukthi&apos;s website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Yukthi&apos;s website could include technical, typographical, or photographic errors. Yukthi does not warrant that any of the materials on its website are accurate, complete, or current. Yukthi may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">6. Links</h2>
            <p>
              Yukthi has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Yukthi of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">7. Modifications</h2>
            <p>
              Yukthi may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Yukthi operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="font-semibold">Email: support@yukthi.ai</p>
              <p>Address: Yukthi Headquarters</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
