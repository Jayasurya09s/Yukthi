"use client";

import { useState } from "react";

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
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center">
        <h3 className="text-2xl font-bold text-white">
          Audit Sent Successfully
        </h3>

        <p className="mt-4 text-zinc-300">
          Your audit report has been saved and
          emailed successfully.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div>
        <p className="text-sm uppercase tracking-widest text-blue-400">
          Save Report
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
          Get Your Audit Report
        </h2>

        <p className="mt-4 text-zinc-400">
          Save your audit report and receive a
          shareable link via email.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-5"
      >
        <input
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Company name"
          value={companyName}
          onChange={(e) =>
            setCompanyName(e.target.value)
          }
          className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-white py-4 text-lg font-semibold text-black transition hover:scale-[1.01] disabled:opacity-50"
        >
          {loading
            ? "Saving Report..."
            : "Save & Email Report"}
        </button>
      </form>
    </div>
  );
}