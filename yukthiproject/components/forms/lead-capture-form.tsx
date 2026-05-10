"use client";

import { useState } from "react";
import { CheckCircle, Mail } from "lucide-react";

interface LeadCaptureFormProps {
  auditId: string;
  teamSize: number;
}

export default function LeadCaptureForm({
  auditId,
  teamSize,
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState("");

  const [companyName, setCompanyName] =
    useState("");

  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "/api/leads",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            companyName,
            role,
            teamSize,
            auditId,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setTimeout(() => {
          setEmail("");
          setCompanyName("");
          setRole("");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-green-500/5 p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-400" />
        </div>

        <h3 className="text-2xl font-bold text-white">
          Report Sent Successfully
        </h3>

        <p className="mt-4 text-green-200">
          Your audit report has been saved and emailed to <span className="font-semibold">{email}</span>.
        </p>

        <p className="mt-2 text-sm text-green-200/70">
          Check your email for the shareable audit report link.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Save Your Report
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          Get Your Personalized Audit Report
        </h2>

        <p className="mt-4 text-lg text-zinc-300">
          Save your audit analysis and receive a shareable link. Access your report anytime from any device.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="email"
          required
          placeholder="your.email@company.com"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
        />

        <input
          type="text"
          placeholder="Company name"
          value={companyName}
          onChange={(e) =>
            setCompanyName(e.target.value)
          }
          className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
        />

        <input
          type="text"
          placeholder="Your role (e.g., CTO, Finance Manager)"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder-zinc-500 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 hover:border-white/20"
        />

        <button
          type="submit"
          disabled={loading}
          className="group relative w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/20 disabled:from-zinc-600 disabled:to-zinc-700 disabled:cursor-not-allowed disabled:shadow-none active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black"
        >
          <span className="relative flex items-center justify-center gap-2">
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving Report...
              </>
            ) : (
              <>
                <Mail className="h-5 w-5" />
                Save & Email Report
              </>
            )}
          </span>
        </button>
      </form>
    </div>
  );
}