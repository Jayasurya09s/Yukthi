const faqs = [
  {
    question: "How does the audit work?",
    answer:
      "The platform analyzes your AI subscriptions, pricing tiers, and team usage patterns to identify optimization opportunities and potential savings.",
  },
  {
    question: "Does the platform use AI for calculations?",
    answer:
      "No. Financial calculations and recommendations are fully deterministic. AI is only used to generate readable executive summaries.",
  },
  {
    question: "Which AI tools are supported?",
    answer:
      "Currently supported platforms include ChatGPT, Claude, Cursor, Gemini, GitHub Copilot, OpenAI API, Anthropic API, and more.",
  },
  {
    question: "Can I share audit results publicly?",
    answer:
      "Yes. Each audit can generate a shareable public URL with sensitive information removed.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          FAQ
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-16 space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-xl font-semibold text-white">
              {faq.question}
            </h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}