"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the audit work?",
    answer:
      "The platform analyzes your AI subscriptions, pricing tiers, and team usage patterns to identify optimization opportunities and potential savings. Our deterministic engine processes this data and generates actionable recommendations.",
  },
  {
    question: "Does the platform use AI for calculations?",
    answer:
      "No. Financial calculations and recommendations are fully deterministic and based on pricing logic. AI is only used to generate readable executive summaries, ensuring accuracy and transparency.",
  },
  {
    question: "Which AI tools are supported?",
    answer:
      "Currently supported platforms include ChatGPT, Claude, Cursor, Gemini, GitHub Copilot, OpenAI API, Anthropic API, and more. We continuously expand our platform support.",
  },
  {
    question: "Can I share audit results publicly?",
    answer:
      "Yes. Each audit can generate a shareable public URL with sensitive information removed. Perfect for sharing insights with your team or stakeholders.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your data is never used for training or stored longer than necessary. All calculations are performed server-side with encryption in transit and at rest.",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-5xl px-6 py-32">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          FAQ
        </p>

        <h2 className="mt-6 text-5xl font-bold tracking-tight text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-lg text-zinc-400">
          Everything you need to know about Yukthi's AI cost optimization platform.
        </p>
      </div>

      <div className="mt-16 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md transition-all duration-300 hover:border-white/20"
          >
            <button
              onClick={() =>
                setExpandedIndex(
                  expandedIndex === index ? null : index
                )
              }
              className="flex w-full items-center justify-between p-6 text-left transition-all duration-300 hover:bg-white/[0.05]"
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>

              <ChevronDown
                className={`h-5 w-5 text-blue-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                  expandedIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedIndex === index && (
              <div className="border-t border-white/10 px-6 py-4 bg-gradient-to-r from-blue-500/5 to-transparent">
                <p className="leading-relaxed text-zinc-300">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}