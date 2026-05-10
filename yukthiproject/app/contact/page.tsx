"use client";

import { useState } from "react";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Have questions about our AI spend optimization platform? We'd love to hear from you. Reach out and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Email */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-blue-500/20 p-3">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="mt-2 text-sm text-zinc-400">support@yukthi.ai</p>
                  <p className="text-xs text-zinc-500">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-green-500/20 p-3">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="mt-2 text-sm text-zinc-400">+1 (555) 123-4567</p>
                  <p className="text-xs text-zinc-500">
                    Monday to Friday, 9am-5pm EST
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-purple-500/20 p-3">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    123 Innovation Lane
                  </p>
                  <p className="text-sm text-zinc-400">
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl md:p-12"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-3 block text-sm font-semibold text-zinc-100">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-3 block text-sm font-semibold text-zinc-100">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-3 block text-sm font-semibold text-zinc-100">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-3 block text-sm font-semibold text-zinc-100">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20 resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="group relative w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95 disabled:opacity-50"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    <span>
                      {submitted ? "Message Sent!" : "Send Message"}
                    </span>
                  </div>
                </button>

                {submitted && (
                  <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-center text-sm text-green-400">
                    ✓ Thank you for reaching out! We'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
